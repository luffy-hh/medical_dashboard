import React, { useEffect } from "react";
import Swal from "sweetalert2";
import PropTypes from "prop-types";

// const Swal = lazy(() => import("sweetalert2/dist/sweetalert2.js"));

const Notification = ({
  title,
  icon,
  type = "normal",
  position = "center",
  timer = 3000,
  text,
}) => {
  useEffect(() => {
    if (type === "mixin") {
      const toast = Swal.mixin({
        position: position,
        title: title,
        toast: true,
        icon: icon,
        confirmButtonText: "Ok",
        cancelButtonText: "Close",
        showCancelButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        showConfirmButton: false,
        text: text,
      });
      toast.fire({ timer: timer });
    } else {
      Swal.fire({
        position: position,
        title: title,
        icon: icon,
        confirmButtonText: "Ok",
        cancelButtonText: "Close",
        showCancelButton: false,
        showCloseButton: true,
        timerProgressBar: true,
        showConfirmButton: false,
        timer: timer,
        text: text,
      });
    }
  });
  return null;
};

Notification.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  timer: PropTypes.number,
  text: PropTypes.string,
};

export default Notification;
