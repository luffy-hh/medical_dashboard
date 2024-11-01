import {forwardRef, lazy} from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
// const handleChange = (value) => {
//   console.log(`selected ${value}`);
// };
// eslint-disable-next-line react/display-name
const CustomSelect = forwardRef(({
  options = [],
  onChange,
  className,
  searchable = false,
  clearable = false,
  value,
  defaultValue = "",
},ref) => {
  const { Option } = Select;
  // console.log(options)
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
      ref={ref}
    >
      {options.map((option, i) => (
        <Option key={i} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
});

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  className: PropTypes.string,
  searchable: PropTypes.bool,
  clearable: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
};

export default CustomSelect;
