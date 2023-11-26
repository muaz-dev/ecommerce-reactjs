import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PreventRouteProps {
  children: ReactElement;
}

const PreventRoute: React.FC<PreventRouteProps> = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PreventRoute;

// import React from "react";
// import { Navigate } from "react-router-dom";

// function PreventRoute(children: any) {
//   const token = localStorage.getItem("token");
//   if (token) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default PreventRoute;
