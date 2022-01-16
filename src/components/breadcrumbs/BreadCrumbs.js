/** BREADCRUMBS **/
import React from "react";
import {
  Breadcrumbs as MyBredCrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

function Breadcrumbs(props) {
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <div className="px-4">
      <MyBredCrumbs aria-label="breadcrumb">
        {pathnames.length > 0 ? (
          <div className="cursor-pointer">
            <Link onClick={() => history.push("/")}>
              <i className="fa fa-home"></i>
              Home
            </Link>
          </div>
        ) : (
          <Typography>Home</Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <div key={name} className="cursor-pointer">
              <Link onClick={() => history.push(routeTo)}>{name}</Link>
            </div>
          );
        })}
      </MyBredCrumbs>
    </div>
  );
}

export default withRouter(Breadcrumbs);
