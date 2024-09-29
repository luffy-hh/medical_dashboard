import { Row } from "antd";
import React from "react";
import { FaKitMedical } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CustomFormWithRouter from "../../components/common/CustomForm";
import { loginInputs } from "../../constants/FormInputs";

const Login = () => {
  return (
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
          onFinish={() => {}}
        />
      </div>
    </Row>
  );
};

export default Login;
