import { RouterProvider } from "react-router";
import router from "./routers/router";
import AuthContextProvider from "./context/AuthContextProvider";

export default function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}
