import nprogress from "nprogress";
import "nprogress/nprogress.css";
import React, { memo } from "react";
interface withAuthMilldeWearProps {
  component: React.ReactElement;
}
const withAuthMilldeWear = memo(({ component }: withAuthMilldeWearProps) => {
  nprogress.start();
  // const location = useLocation();
  // const authWhiteList = ["/login", "/404"];
  nprogress.done();
  return <>{component}</>;
  // if (authWhiteList.includes(location.pathname)) {
  //   return <>{component}</>;
  // } else {
  //   return <>{component}</>;
  // }
});

export default withAuthMilldeWear;
