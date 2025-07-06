import { MainPage } from "../pages/MainPage";
import { RegistrationPage } from "../pages/RegistrationPage";

export const routes = [
  { path: "/", element: <RegistrationPage /> },
  { path: "/login", element: <RegistrationPage /> },
  { path: "/main-page", element: <MainPage /> },
];
