import React from "react";
import PropTypes from "prop-types";

const UpdateMonthlyRecord = ({ router, onFinish }) => {
  const initialValues = {
    ...router.location.state,
  };
  return <div>UpdateMonthlyRecord</div>;
};

UpdateMonthlyRecord.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: ()=>{}
}

export default UpdateMonthlyRecord;
