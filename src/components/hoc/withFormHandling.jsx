import React, { lazy, Suspense, useEffect, useState } from "react";
const PageTitle = lazy(() => import("../common/PageTitle"));
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../common/Loader";
const Notification = lazy(() => import("../common/Notification"));
import withRouter from "./withRouter";
import PropTypes from "prop-types";
const InnerContainer = lazy(() => import("../common/InnerContainer"));

const withFormHandling = (WrappedComponent, titleProps, formConfig) => {
  const HOC = (props) => {
    const dispatch = useDispatch();
    const [formSchema, setFormSchema] = useState(null);
    // const { loginUser } = useSelector((state) => state.auth);
    const selectBoxData = useSelector(
      (state) => formConfig?.selectBoxDataSelector
    );
    const formStatus = useSelector((state) => formConfig?.statusSelector);
    const formMsg = useSelector((state) => formConfig?.msgSelector);

    const initialValues = formConfig?.getInitialValues(props.router.location);

    const submitHandler = (values, setSubmitting) => {
      //   values.cby = loginUser.name;
      dispatch(
        formConfig.createAction({
          api: formConfig.apiEndpoint,
          inputData: { ...values },
        })
      );
      setSubmitting(true);
    };

    useEffect(() => {
      if (formStatus === "success") {
        const timer = setTimeout(() => {
          props.router.nav(-1);
        }, 3000);
        clearTimeout(timer);
      }
    }, [formStatus]);

    // useEffect(() => {
    //   import("yup").then((Yup) => {
    //     const schema = formConfig?.createYupSchema(Yup, formConfig.inputs);
    //     setFormSchema(schema);
    //   });
    // }, []);

    return (
      <Suspense fallback={<Loader />}>
        {formStatus === "success" && (
          <Notification
            title={formConfig?.successTitle}
            text={formMsg}
            icon={"success"}
          />
        )}
        {formStatus === "fail" && (
          <Notification
            title={formConfig?.failTitle}
            text={formMsg}
            icon={"error"}
          />
        )}
        <InnerContainer>
          <PageTitle title={titleProps?.title} />

          <WrappedComponent
            // validateForm={formSchema}
            // onFinish={submitHandler}
            // data={formConfig?.createInput(selectBoxData)}
            // initialValues={initialValues}
            {...props}
          />
        </InnerContainer>
      </Suspense>
    );
  };

  HOC.propTypes = {
    router: PropTypes.object,
  };

  return withRouter(HOC);
};

export default withFormHandling;
