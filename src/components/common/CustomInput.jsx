import { Checkbox, DatePicker, Input } from "antd";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (
    {
      placeholder,
      className,
      type = "text",
      clearable = false,
      onChange,
      value,
      defaultValue,
      multiple = false,
      id = "",
      required = false,
      onKeyPress,
      options = [],
    },
    ref,
  ) => {
    if (type === "checkbox") {
      return (
        <Checkbox
          ref={ref}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          checked={value}
          className={className}
        />
      );
    }

    if (type === "date") {
      return (
        <DatePicker
          ref={ref}
          defaultValue={defaultValue ? dayjs(defaultValue) : null}
          allowClear={clearable}
          placeholder={placeholder}
          className={className}
          format="DD/MM/YYYY"
          value={value}
          onChange={onChange}
        />
      );
    }
    if (type === "file") {
      return (
        <Input
          ref={ref}
          allowClear={clearable}
          placeholder={placeholder}
          className={className}
          type={type}
          id={id}
          multiple={multiple}
          onChange={(e) => onChange(e)}
        />
      );
    }
    return (
      <Input
        ref={ref}
        allowClear={clearable}
        placeholder={placeholder}
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        required={required}
        onKeyDown={onKeyPress}
      />
    );
  },
);
CustomInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  clearable: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  multiple: PropTypes.bool,
  id: PropTypes.string,
  required: PropTypes.bool,
  onKeyPress: PropTypes.func,
  options: PropTypes.array,
};

export default CustomInput;

// import React from 'react';
// import { UploadOutlined } from '@ant-design/icons';
// import { Button, Upload } from 'antd';
// const fileList = [
//   {
//     uid: '0',
//     name: 'xxx.png',
//     status: 'uploading',
//     percent: 33,
//   },
//   {
//     uid: '-1',
//     name: 'yyy.png',
//     status: 'done',
//     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//   },
//   {
//     uid: '-2',
//     name: 'zzz.png',
//     status: 'error',
//   },
// ];
// const App = () => (
//   <Upload
//     action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//     listType="picture"
//     defaultFileList={fileList}
//   >
//     <Button type="primary" icon={<UploadOutlined />}>
//       Upload
//     </Button>
//   </Upload>
// );
// export default App;
