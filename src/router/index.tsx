import AppLayout from "@/layout";
import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
const Login = lazy(() => import("@/pages/Login"));
const DashBoard = lazy(() => import("@/pages/dashboard"));
const TableRecognition = lazy(() => import("@/pages/TableRecognition/index"));
// const Login = lazy(() => import("@/pages/Login"));
const router: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/tableRecognition",
        element: <TableRecognition />,
      },
    ],
  },
  {
    path: "/login",
    id: "",
    element: <Login />,
  },
];

export default router;
