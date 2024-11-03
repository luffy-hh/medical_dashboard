import React from "react";
import withNotiAndLoader from "../../components/hoc/withNotiAndLoader.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import CustomFormWithRouter from "../../components/common/CustomForm.jsx";
import { bannerCreateInputs } from "../../constants/FormInputs.jsx";

const CreateBanner = ({ router }) => {
  return (
    <>
      <PageTitleWithRouter title={"Create Banner"} />
      <CustomFormWithRouter data={bannerCreateInputs()} initialValues={{}} />
    </>
  );
};

const CreateBannerWithNotiAndLoader = withNotiAndLoader(CreateBanner);
export default CreateBannerWithNotiAndLoader;
