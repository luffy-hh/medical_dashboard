import { lazy } from "react";
import PropTypes from "prop-types";
const Select = lazy(() => import("antd/lib/select"));
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
const CustomSelect = ({
  options = [],
  onChange,
  className,
  searchable = false,
  clearable = false,
  value,
  defaultValue = "",
}) => {
  const { Option } = Select;
  return (
    <Select
      allowClear={clearable}
      showSearch={searchable}
      defaultValue={defaultValue}
      value={value}
      optionFilterProp="children"
      onChange={onChange}
      className={className}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
    >
      {options.map((option, i) => (
        <Option key={i} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
};

export default CustomSelect;
