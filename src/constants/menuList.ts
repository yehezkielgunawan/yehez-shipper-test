import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

type MenuType = {
  label: string;
  route: string;
  icon: IconType;
};

export const menuList: Array<MenuType> = [
  {
    label: "Beranda",
    route: "/",
    icon: AiFillHome,
  },
  {
    label: "Driver Management",
    route: "/driver",
    icon: IoPersonCircleOutline,
  },
  {
    label: "Pickup",
    route: "/pickup",
    icon: BsCalendar2Event,
  },
];
