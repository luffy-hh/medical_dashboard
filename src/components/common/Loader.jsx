import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Loader = (size = "medium", fullscreen = false) => {
  return (
    <div className="spinner">
      <div className="loading">
        <Spin
          indicator={<LoadingOutlined spin />}
          size={size}
          fullscreen={fullscreen}
        />
      </div>
    </div>
  );
};

export default Loader;
