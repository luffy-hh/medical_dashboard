import React, { useEffect } from "react";

import Notification from "../common/Notification";
import Loader from "../common/Loader";
import PageTitle from "../common/PageTitle";
// import { toast } from "react-toastify";
import { Form } from "antd";
import InnerContainer from "../common/InnerContainer.jsx";
import withRouter from "./withRouter.jsx";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const withNotiAndLoader = (
  WrappedComponent,
  formProps,
  formInputs,
  createStatusSelector,
  createMsgSelector,
  createAction,
) => {
  const HOC = (props) => {
    const { form } = Form.useForm();
    const dispatch = useDispatch();
    // const createStatus = useSelector(createStatusSelector);
    // const createMsg = useSelector(createMsgSelector);

    const onFinish = async (values) => {
      // values.fill_date = dateFormatChange(values.fill_date);
      // dispatch(createAction({ api: "createFuel", pData: values }));
    };

    // useEffect(() => {
    //   if (createStatus === "success") {
    //     toast.success(createMsg, {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       closeOnClick: true,
    //       theme: "light",
    //     });
    //     form.resetFields();
    //   }
    //
    //   if (createStatus === "fail") {
    //     toast.error(createMsg, {
    //       position: "bottom-right",
    //       autoClose: 5000,
    //       closeOnClick: true,
    //       theme: "light",
    //     });
    //   }
    // }, [createStatus]);

    return (
      <InnerContainer>
        {/*{createStatus === "fail" && (*/}
        {/*  <Notification title={"Error"} text={createMsg} icon={"error"} />*/}
        {/*)}*/}
        {/*{createStatus === "success" && (*/}
        {/*  <Notification title={"Success"} text={createMsg} icon={"success"} />*/}
        {/*)}*/}
        {/*{createStatus === "loading" && (*/}
        {/*  <Loader spin={createStatus === "loading"} />*/}
        {/*)}*/}
        {/*<PageTitle title={formProps.title} />*/}
        <div className="p-4">
          <WrappedComponent
            {...props}
            form={form}
            onFinish={onFinish}
            inputs={formInputs}
          />
        </div>
      </InnerContainer>
    );
  };
  HOC.propTypes = {
    router: PropTypes.object,
  };
  return withRouter(HOC);
};

export default withNotiAndLoader;
