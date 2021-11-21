import { RouteProps } from "react-router";

import App from "App";
import DriverComponent from "components/driver";
import PickupComponent from "components/pickup";

type RouteType = RouteProps & {
  title: string;
};

const Home = <App />;
const Driver = <DriverComponent />;
const Pickup = <PickupComponent />;

export const webRoutes: Array<RouteType> = [
  {
    title: "Beranda",
    path: "/",
    element: Home,
  },
  {
    title: "Driver Management",
    path: "/driver",
    element: Driver,
  },
  {
    title: "Pickup",
    path: "/pickup",
    element: Pickup,
  },
];
