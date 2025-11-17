import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import FindPartnerPage from "../pages/FindPartnerPage";
import PartnerDetailsPage from "../pages/PartnerDetailsPage";
import ForgetPassword from "../pages/ForgetPassword";
import { getAllUsers } from "../utils/dataLoader";
import ErrorPage from "../pages/ErrorPage";
import ErrorElement from "../pages/ErrorElement";
import PublicRoute from "./PublicRoute";
import ProtectRoute from "./ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <div className='skeleton h-screen w-dvw'></div>,
    errorElement: <ErrorElement />,
    children: [
      { index: true, Component: Homepage, loader: getAllUsers },

      {
        element: <PublicRoute />,
        path: "/",
        children: [
          { path: "login", element: <LoginPage /> },
          { path: "signup", element: <RegisterPage /> },
        ],
      },

      { path: "forget-password", element: <ForgetPassword /> },

      {
        path: "find-partner",
        id: "mates",
        Component: FindPartnerPage,
        loader: getAllUsers,
      },

      {
        element: <ProtectRoute />,
        path: "/",
        children: [
          {
            path: "partner/:id",
            element: <PartnerDetailsPage />,
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },

      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;
