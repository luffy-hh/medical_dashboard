import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Loader = (size = "medium") => {
  return (
    <div className="spinner">
      <div className="loading">
        <Spin indicator={<LoadingOutlined spin />} size={size} />
      </div>
    </div>
  );
};

export default Loader;
