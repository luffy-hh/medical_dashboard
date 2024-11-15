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

const withNotiAndLoader = (WrappedComponent, formProps) => {
  const HOC = (props) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const status = useSelector(formProps?.status ? formProps.status : () => {});
    const message = useSelector(
      formProps?.message ? formProps?.message : () => {},
    );

    // console.log(props.router?.location?.state?.id);

    const onFinish = (values, extra = {}) => {
      console.log(values, formProps.extraData);

      // values.fill_date = dateFormatChange(values.fill_date);
      dispatch(
        formProps?.method({
          api:
            formProps?.api +
            (formProps?.apiHasExtra &&
            props.router?.location?.state[formProps?.apiHasExtra]
              ? `/${props.router?.location?.state[formProps?.apiHasExtra]}`
              : ""),
          postData: { ...values },
          header: { ...formProps?.extraData, ...extra },
        }),
      );
    };
    useEffect(() => {
      if (status === "succeeded") {
        setTimeout(() => {
          props.router.nav(-1);
        }, 3000);
        clearTimeout();
      }
      // if (status === "succeeded" || status === "failed")
      //   dispatch(formProps.statusResetMethod());
    }, [dispatch, props.router, status]);
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
        {status === "failed" && (
          <Notification title={"Error"} text={message} icon={"error"} />
        )}
        {status === "succeeded" && (
          <Notification title={"Success"} text={message} icon={"success"} />
        )}
        {status === "loading" && <Loader />}
        {/*<PageTitle title={formProps.title} />*/}
        <div className="p-4">
          <WrappedComponent {...props} form={form} onFinish={onFinish} />
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
