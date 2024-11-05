import React from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { bannerCreateInputs } from "../../constants/FormInputs.jsx";
import {
  createBanner,
  createBannerMessage,
  createBannerStatus,
} from "../../app/banners/bannerSlice.jsx";
import PropTypes from "prop-types";

const CreateBanner = ({ router, onFinish }) => {
  return (
    <>
      <PageTitleWithRouter title={"Create Banner"} />
      <CustomFormWithRouter
        data={bannerCreateInputs()}
        initialValues={{}}
        onFinish={onFinish}
      />
    </>
  );
};
CreateBanner.propTypes = {
  router: PropTypes.object,
  onFinish: PropTypes.func,
};
const formProps = {
  method: createBanner,
  api: "/banner_create",
  status: createBannerStatus,
  message: createBannerMessage,
  extraData: { cby: JSON.parse(localStorage.getItem("user")).name },
};

const CreateBannerWithNotiAndLoader = withNotiAndLoader(
  CreateBanner,
  formProps,
);
export default CreateBannerWithNotiAndLoader;
