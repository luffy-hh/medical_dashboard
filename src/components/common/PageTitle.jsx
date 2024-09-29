import PropTypes from "prop-types";
import withRouter from "../hoc/withRouter";
import { Button } from "antd";

const PageTitle = ({
  title,
  buttonText,
  buttonLink,
  icon,
  hasButton = false,
  ...props
}) => {
  //   const nav = useNavigate();
  const onCLick = () => {
    props.router.nav(buttonLink);
  };
  return (
    <div className="flex justify-between items-center my-2">
      <div className="text-2xl font-semibold">{title}</div>
      {hasButton && (
        <Button onClick={onCLick} className=" btn">
          {icon}
          {buttonText}
        </Button>
      )}
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.any,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.any,
  icon: PropTypes.any,
  hasButton: PropTypes.bool,
  router: PropTypes.object,
};
const PageTitleWithRouter = withRouter(PageTitle);
export default PageTitleWithRouter;
