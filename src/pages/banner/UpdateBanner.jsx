import React from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import {
  updateBanner,
  updateBannerMessage,
  updateBannerStatus,
} from "../../app/banners/bannerSlice.jsx";
import PropTypes from "prop-types";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomForm from "../../components/common/CustomForm.jsx";
import { bannerCreateInputs } from "../../constants/FormInputs.jsx";

const UpdateBanner = ({ router, onFinish }) => {
  return (
    <>
      <PageTitleWithRouter title={"Update Banner"} />
      <CustomForm
        data={bannerCreateInputs()}
        initialValues={router.location.state}
        onFinish={onFinish}
      />
    </>
  );
};

UpdateBanner.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};
const formProps = {
  method: updateBanner,
  api: "/banner_update",
  apiHasExtra: "id",
  status: updateBannerStatus,
  message: updateBannerMessage,
  extraData: { uby: JSON.parse(localStorage.getItem("user")).name },
};

const UpdateBannerWithNotiAndLoader = withNotiAndLoader(
  UpdateBanner,
  formProps,
);
export default UpdateBannerWithNotiAndLoader;
