import React from "react";
import PropsTypes from "prop-types";
const InnerContainer = ({ className, children }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className={classNames("shadow p-2 m-2", className)}>{children}</div>
    </>
  );
};

InnerContainer.propTypes = {
  children: PropsTypes.node,
  className: PropsTypes.string,
};

export default InnerContainer;
