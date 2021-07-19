import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faShoppingCart,
  faCog,
  faTicketAlt,
  faArchive,
  faThLarge,
  faWallet,
  faWarehouse,
  faTruckMoving,
} from "@fortawesome/free-solid-svg-icons";
export const SideBarContent = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: faThLarge,
  },
  {
    label: "Orders",
    link: "/dashboard/orders",
    icon: faShoppingCart,
  },
  {
    label: "Finance",
    link: "/dashboard/finance",
    icon: faWallet,
  },
  {
    label: "Invetory",
    link: "/dashboard/inventory",
    icon: faWarehouse,
  },
  {
    label: "Customers",
    link: "/dashboard/customers",
    icon: faUser,
  },
  {
    label: "Logistics",
    link: "/dashboard/logistics",
    icon: faTruckMoving,
  },
  {
    label: "Products",
    link: "/dashboard/products",
    icon: faArchive,
  },
  {
    label: "Coupon Codes",
    link: "/dashboard/couponCodes",
    icon: faTicketAlt,
  },
  {
    label: "Users",
    link: "/dashboard/users",
    icon: faUser,
  },
  {
    label: "Settings",
    link: "/dashboard/settings",
    icon: faCog,
  },
];

export const mainContent = [
  {
    path: "/dashboard",
    exact:true,
    component: "Showing the Dashboard",
  },
  {
    path: "/dashboard/orders",
    component: "These are the orders",
  },
  {
    path: "/dashboard/finance",
    component: "This is finance",
  },
  {
    path: "/dashboard/inventory",
    component: "This is inventory",
  },
  {
    path: "/dashboard/customers",
    component: "This is customers",
  },
  {
    path: "/dashboard/logistics",
    component: "This is logistics",
  },
  {
    path: "/dashboard/products",
    component: "This is products",
  },
  {
    path: "/dashboard/couponCodes",
    component: "This is coupon codes",
  },
  {
    path: "/dashboard/users",
    component: "This is users",
  },
  {
    path: "/dashboard/settings",
    component: "This is settings",
  },
];