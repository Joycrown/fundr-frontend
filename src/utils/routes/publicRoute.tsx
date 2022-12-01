
import FaqPage from "../../pages/faq/faq";
import HomePage from "../../pages/home/homePage";
import { RoutePaths } from "./routePaths";







export const publicRoutes = [
  {
    route: RoutePaths.BASE_URL,
    page: <HomePage />,
  },
  {
    route: RoutePaths.FAQ,
    page: <FaqPage />,
  },
];