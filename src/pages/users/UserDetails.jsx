import React from "react";
import InnerContainer from "../../components/common/InnerContainer.jsx";
import PageTitleWithRouter from "../../components/common/PageTitle.jsx";
import withRouter from "../../components/hoc/withRouter.jsx";
import PropTypes from "prop-types";
import { Image } from "antd";

const UserDetails = ({ router }) => {
  const { location } = router;
  console.log(location);

  return (
    <InnerContainer>
      <PageTitleWithRouter
        title="User Details"
        hasButton={true}
        buttonText="Back"
        buttonLink={-1}
      />
      <div className={"w-max mx-auto overflow-hidden rounded-full mb-8"}>
        <Image width={200} src={"/img/user.jpg"} />
      </div>
      <div className={"w-max mx-auto grid grid-cols-2 gap-x-8"}>
        <div className={"flex-1 flex flex-col gap-y-2"}>
          <p className={"text-gray-400 text-lg"}> Name</p>
          <p className={"text-gray-400 text-lg"}> Login Id</p>
        </div>
        <div className={"flex-1 flex flex-col gap-y-2"}>
          <p className={" text-xl"}>{location.state.name}</p>
          <p className={" text-xl"}>{location.state.loginId}</p>
        </div>
      </div>
    </InnerContainer>
  );
};

UserDetails.propTypes = {
  router: PropTypes.object,
};
const UserDetailsWithRouter = withRouter(UserDetails);
export default UserDetailsWithRouter;
