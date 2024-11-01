import React, { lazy, Suspense } from "react";
const InnerContainer = lazy(() =>
  import("../../components/common/InnerContainer")
);
const PageTitleWithRouter = lazy(() =>
  import("../../components/common/PageTitle")
);
const Button = lazy(() => import("antd/lib/button"));
const CustomTable = lazy(() => import("../../components/common/CustomTable"));
import withRouter from "./withRouter";
import { FaPlusCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

const withTableAndTitle = (
  WrappedComponent,
  pageTitleProps,
  buttonProps,
  tableProps,
) => {
  const HOC = (props) => {
    return (
      <Suspense fallback={<Loader />}>
        <InnerContainer>
          <PageTitleWithRouter {...pageTitleProps} />
          <WrappedComponent {...props} />
          {buttonProps?.hasButton && <div className="flex">
            <Button
                className="btn ml-auto"
                onClick={() => props.router.nav(buttonProps.link)}
            >
              <FaPlusCircle/>
              <span>{buttonProps.text}</span>
            </Button>
          </div>}
          <CustomTable
            columns={tableProps.columns(props.router.nav)}
            data={[]}
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

export default withTableAndTitle;
