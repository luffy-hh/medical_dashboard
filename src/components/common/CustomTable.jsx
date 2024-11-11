// import { Table } from "ant-table-extensions";
import { lazy } from "react";
const Table = lazy(() => import("antd/lib/table"));
import { Button } from "antd";
import * as XLSX from "xlsx";
import PropTypes from "prop-types";

const CustomTable = ({
  rowKey = "id",
  className,
  columns = [],
  data = [],
  rowClassName,
  footer = undefined,
  pagination,
  onChange,
  loading,
  summary,
  exportableProps,
  expandable = {},
  onRow = () => {},
  extraButton = false,
  extraColumns = [],
}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const indexData = (data) => {
    return data.map((item, index) => {
      return { no: index + 1, ...item };
    });
  };
  const flattenColumns = (columns) => {
    const flatColumns = [];
    const processColumn = (col) => {
      if (col.children) {
        col.children.forEach(processColumn);
      } else {
        flatColumns.push(col);
      }
    };
    columns.forEach(processColumn);
    return flatColumns;
  };

  const generateMultiRowHeaders = (columns) => {
    const headers = [];
    const maxDepth = (cols, depth = 0) => {
      return cols.reduce((max, col) => {
        if (col.children) {
          return Math.max(max, maxDepth(col.children, depth + 1));
        }
        return Math.max(max, depth);
      }, depth);
    };

    const depth = maxDepth(columns);

    const fillHeaders = (cols, level = 0, parentIndex = 0) => {
      if (!headers[level]) headers[level] = [];
      let colIndex = parentIndex;
      cols.forEach((col) => {
        headers[level][colIndex] = col.title;
        if (col.children) {
          const childColSpan = fillHeaders(col.children, level + 1, colIndex);
          colIndex += childColSpan;
        } else {
          colIndex += 1;
        }
      });
      return colIndex - parentIndex;
    };

    fillHeaders(columns);
    // Ensure all header rows have the same length
    const maxCols = headers.reduce((max, row) => Math.max(max, row.length), 0);
    headers.forEach((row) => {
      while (row.length < maxCols) {
        row.push("");
      }
    });

    return headers;
  };

  const mergeCells = (ws, columns, startRow = 0, startCol = 0) => {
    const mergeRanges = [];
    const processColumn = (col, row, colIndex) => {
      if (col.children) {
        // Calculate the span for the current parent column
        const childColSpan = col.children.length;
        mergeRanges.push({
          s: { r: row, c: colIndex },
          // Merge cells within the same row to represent the nested structure
          e: { r: row, c: colIndex + childColSpan - 1 },
        });
        // Recursively process child columns
        col.children.forEach((child, childIndex) => {
          processColumn(child, row + 1, colIndex + childIndex);
        });
      }
    };

    columns.forEach((col, index) => {
      processColumn(col, startRow, startCol + index);
    });

    mergeRanges.forEach((range) => {
      if (!ws["!merges"]) ws["!merges"] = [];
      ws["!merges"].push(range);
    });
  };

  const exportIndex = (data) => {
    const indexedData = data.map((item, index) => {
      const { id, ...rest } = item;
      return { id: index + 1, ...rest };
    });
    if (summary && summary.props && summary.props.children) {
      const summaryRow = {};
      summary.props.children.forEach((cell, index) => {
        const columnKey = columns[index]?.dataIndex || `column${index}`;
        summaryRow[columnKey] = cell.props.children;
      });
      indexedData.push(summaryRow);
    }

    return indexedData;
  };

  const handleExport = () => {
    const flatColumns = flattenColumns(columns);
    const checkedColumns = extraColumns.length > 0 ? extraColumns : flatColumns;
    // Process data according to render functions
    const processedData = data.map((item) => {
      const processedItem = {};
      checkedColumns.forEach((col) => {
        if (col.render && col.title !== "No") {
          // Apply the render function and convert the result to a string if necessary
          const renderedValue = col.render(item[col.dataIndex], item);
          processedItem[col.dataIndex] =
            typeof renderedValue === "object"
              ? renderedValue.props.children
              : renderedValue;
        } else {
          processedItem[col.dataIndex] = item[col.dataIndex];
        }
      });
      // console.log(processedItem);
      return processedItem;
    });
    const indexedData = exportIndex(processedData);
    // Filter data to include only columns with labels
    const filteredData = indexedData.map((item) => {
      const filteredItem = {};
      checkedColumns.forEach((col) => {
        if (col.dataIndex in item) {
          filteredItem[col.dataIndex] = item[col.dataIndex];
        }
      });

      return filteredItem;
    });

    // Create a new workbook and a worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([]);

    // Add headers
    // Generate multi-row headers
    const headers = generateMultiRowHeaders(columns);
    console.log(headers);
    headers.forEach((headerRow, index) => {
      XLSX.utils.sheet_add_aoa(ws, [headerRow], { origin: `A${index + 1}` });
    });
    // Merge cells for parent columns
    mergeCells(ws, columns);

    // Add data
    XLSX.utils.sheet_add_json(ws, filteredData, {
      origin: `A${headers.length + 1}`,
      skipHeader: true,
    });
    // Apply bold formatting to the header rows
    headers.forEach((headerRow, rowIndex) => {
      const headerRange = XLSX.utils.decode_range(
        `A${rowIndex + 1}:` +
          XLSX.utils.encode_col(headerRow.length - 1) +
          `${rowIndex + 1}`
      );
      for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: C });
        if (!ws[cellAddress]) continue;
        ws[cellAddress] = {
          ...ws[cellAddress],
          s: {
            ...ws[cellAddress].s,
            font: { bold: true },
          },
        };
      }
    });

    // Apply alignment to each cell based on column alignment
    const dataRange = XLSX.utils.decode_range(ws["!ref"]);
    for (let R = dataRange.s.r; R <= dataRange.e.r; ++R) {
      for (let C = dataRange.s.c; C <= dataRange.e.c; ++C) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        if (!ws[cellAddress]) continue;
        const col = columns[C];
        if (col && col.align) {
          ws[cellAddress] = {
            ...ws[cellAddress],
            s: {
              ...ws[cellAddress].s,
              alignment: { horizontal: col.align },
            },
          };
        }
      }
    }

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Generate a file and trigger a download
    XLSX.writeFile(wb, `${exportableProps.fileName}.xlsx`);
  };
  // Add align: 'right' to each column
  const alignedColumns = columns.map((col) => ({
    ...col,
    align: col?.align ? col.align : "left",
  }));

  return (
    <>
      {exportableProps && extraButton && (
        <Button {...exportableProps.btnProps} onClick={handleExport}>
          {exportableProps.children}
        </Button>
      )}
      <Table
        className={classNames(
          "max-w-[100%] table-scroll bg-white  mt-2",
          className
        )}
        bordered
        columns={alignedColumns}
        dataSource={indexData(data)}
        rowClassName={rowClassName}
        scroll={{
          x: "max-content",
        }}
        pagination={
          pagination
            ? {
                ...pagination,
                position: ["bottomCenter"],
                showSizeChanger: true,
              }
            : false
        }
        rowKey={rowKey}
        expandable={expandable}
        // exportableProps={extraButton ? false : { ...exportableProps }}
        footer={footer && footer}
        onChange={onChange}
        loading={loading}
        onRow={onRow}
        summary={() => summary}
      />
    </>
  );
};
CustomTable.propTypes = {
  rowKey: PropTypes.any,
  className: PropTypes.any,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  rowClassName: PropTypes.any,
  footer: PropTypes.any,
  pagination: PropTypes.shape({
    current: PropTypes.number,
    pageSize: PropTypes.number,
    total: PropTypes.number,
  }),
  onChange: PropTypes.func,
  loading: PropTypes.bool,
  summary: PropTypes.any,
  exportableProps: PropTypes.any,
  expandable: PropTypes.any,
  onRow: PropTypes.any,
  extraButton: PropTypes.bool,
  extraColumns: PropTypes.array,
};

export default CustomTable;
