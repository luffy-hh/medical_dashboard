import { Row } from "antd";
import React, { useEffect } from "react";
import { FaKitMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CustomFormWithRouter from "../../components/common/CustomForm";
import { loginInputs } from "../../constants/FormInputs";
import { useDispatch, useSelector } from "react-redux";
import withRouter from "../../components/hoc/withRouter.jsx";
import { login } from "../../app/auth/authSlice.jsx";
import { setPageTitle } from "../../app/ThemeConfig/themeConfigSlice.jsx";
import PropTypes from "prop-types";
import Loader from "../../components/common/Loader.jsx";
import Notification from "../../components/common/Notification.jsx";

const Login = ({ router }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loginStatus = useSelector((state) => state.auth.loginStatus);
  const loginMessage = useSelector((state) => state.auth.loginMessage);
  useEffect(() => {
    dispatch(setPageTitle("Login"));
  }, []);
  // console.log(isAuthenticated, user);

  const onFinish = async (values) => {
    dispatch(login({ api: "/login", reqData: values }));
  };
  useEffect(() => {
    if (isAuthenticated && Object.keys(user).length > 0) {
      // console.log("work");

      router.nav("/");
    }
  }, [isAuthenticated, user, router]);
  return (
    <>
      {loginStatus === "loading" && <Loader fullscreen={false} />}
      {loginStatus === "failed" && (
        <Notification title={"Failed"} icon={"error"} text={loginMessage} />
      )}
      <Row
        type="flex"
        justify="center"
        align="middle"
        className="h-screen px-3 relative before:absolute before:inset-0 before:bg-[#000000]/50 before:z-10"
        style={{
          backgroundImage: "url(/img/authBg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="z-20 min-w-[300px] py-10 px-20 bg-white shadow-lg rounded-xl">
          <div className="text-center mb-5">
            <Link to="/auth" className="inline-block">
              <FaKitMedical className="text-5xl text-[#0769b4]" />
            </Link>
            <h5 className="mb-0 mt-3">Login</h5>
            {/* <p className="text-muted"></p> */}
          </div>
          <CustomFormWithRouter
            text="Login"
            backButton={false}
            data={loginInputs()}
            initialValues={{}}
            onFinish={onFinish}
          />
        </div>
      </Row>
    </>
  );
};

Login.propTypes = {
  router: PropTypes.object,
};
const LoginWithRouter = withRouter(Login);
export default LoginWithRouter;
