import React from "react";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import PropTypes from "prop-types";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import { updatesInputs } from "../../constants/FormInputs.jsx";
import { useParams } from "react-router-dom";
import {
  updateSoftwareUpdates,
  updateSoftwareUpdatesMessageSelector,
  updateSoftwareUpdatesStatusSelector,
} from "../../app/softwareUpdates/softwareUpdateSlice.jsx";

const EditUpdates = ({ router, onFinish }) => {
  const { id } = useParams();
  const initialValues = {
    ...router.location.state,
  };

  return (
    <>
      <PageTitleWithRouter title={"Update Software Version"} />
      <CustomFormWithRouter
        data={updatesInputs()}
        initialValues={initialValues}
        onFinish={(values) => {
          // console.log(values);
          onFinish({ ...values, id: id });
        }}
      />
    </>
  );
};

EditUpdates.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};

const formProps = {
  method: updateSoftwareUpdates,
  api: "/version_update",
  status: updateSoftwareUpdatesStatusSelector,
  message: updateSoftwareUpdatesMessageSelector,
};

const EditUpdatesWithNotiAndLoader = withNotiAndLoader(EditUpdates, formProps);
export default EditUpdatesWithNotiAndLoader;
