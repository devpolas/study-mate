import { RouterProvider } from "react-router";
import router from "./routers/router";
import AuthContextProvider from "./context/AuthContextProvider";
import UserContextProvider from "./context/UserContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </AuthContextProvider>
  );
}
