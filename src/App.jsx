import "./assets/scss/style.scss";
import { Suspense, useState } from "react";
import Loader from "./components/common/Loader";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import Routes from "./router/Router";

function App() {
  // console.log(Routes);
  const routing = useRoutes(Routes);
  const isDark = useSelector((state) => state.themeConfig.isDark);
  // console.log(isDark);
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loader />}>
      <div className={`${isDark ? "dark" : ""}`}>{routing}</div>
    </Suspense>
  );
}

export default App;
