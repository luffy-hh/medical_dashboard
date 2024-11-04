import React, { lazy, Suspense, useMemo, useState } from "react";
const InnerContainer = lazy(
  () => import("../../components/common/InnerContainer"),
);
const PageTitleWithRouter = lazy(
  () => import("../../components/common/PageTitle"),
);
const Button = lazy(() => import("antd/lib/button"));
const CustomTable = lazy(() => import("../../components/common/CustomTable"));
import withRouter from "./withRouter";
import { FaPlusCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Loader from "../common/Loader";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "antd";
import Notification from "../common/Notification.jsx";
import dayjs from "dayjs";

const withTableAndTitle = (
  WrappedComponent,
  pageTitleProps,
  buttonProps,
  tableProps,
  modalProps,
) => {
  const HOC = (props) => {
    const dispatch = useDispatch();
    const [id, setId] = useState(null);
    const [open, setOpen] = useState(false);
    let data = useSelector(tableProps?.data ? tableProps.data : () => {});
    let finalData = useMemo(() => {
      if (tableProps?.dateChange) {
        return data.map((item) => ({
          ...item,
          [tableProps.dateChange]: dayjs(item[tableProps.dateChange]).format(
            "DD-MM-YYYY",
          ),
        }));
      }
      return data;
    }, [data]);
    const deleteStatus = useSelector(
      modalProps?.status ? modalProps.status : () => {},
    );
    const deleteMessage = useSelector(
      modalProps?.message ? modalProps?.message : () => {},
    );

    return (
      <Suspense fallback={<Loader />}>
        {deleteStatus === "loading" && <Loader />}
        {deleteStatus === "succeeded" && (
          <Notification
            position="top-end"
            type="mixin"
            title={"Success"}
            text={deleteMessage}
            icon={"success"}
          />
        )}
        {deleteStatus === "failed" && (
          <Notification
            position="top-end"
            type="mixin"
            title={"Error"}
            text={deleteMessage}
            icon={"error"}
          />
        )}
        <Modal
          title={modalProps?.title}
          open={open}
          onCancel={() => setOpen(false)}
          okText={modalProps?.okText ? modalProps?.okText : "Confirm"}
          cancelText={
            modalProps?.cancelText ? modalProps?.cancelText : "Cancel"
          }
          onOk={() => {
            setOpen(false);
            dispatch(
              modalProps?.method({
                api: modalProps?.api + "/" + id,
                postData: modalProps?.postData ? modalProps?.postData : {},
                header: { ...modalProps?.extraData },
              }),
            );
          }}
        >
          <p>{modalProps?.text}</p>
        </Modal>
        <InnerContainer>
          <PageTitleWithRouter {...pageTitleProps} />
          <WrappedComponent {...props} />
          {buttonProps?.hasButton && (
            <div className="flex">
              <Button
                className="btn ml-auto"
                onClick={() => props.router.nav(buttonProps.link)}
              >
                <FaPlusCircle />
                <span>{buttonProps.text}</span>
              </Button>
            </div>
          )}
          <CustomTable
            columns={tableProps.columns(props.router.nav, setId, setOpen)}
            data={finalData ? finalData : []}
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
