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
// Importing all The Sidebar Logos
import DashboardActive from "../assets/HV/Dashboard/iccon/active.svg";
import DashboardInactive from "../assets/HV/Dashboard/iccon/inactive.svg";
import OrderActive from "../assets/HV/Order/iccon/active.svg";
import OrderInactive from "../assets/HV/Order/iccon/inactive.svg";
import FinanceActive from "../assets/HV/Finance/iccon/active.svg";
import FinanceInactive from "../assets/HV/Finance/iccon/inactive.svg";
import InventoryActive from "../assets/HV/Inventory/iccon/active.svg";
import InventoryInactive from "../assets/HV/Inventory/iccon/inactive.svg";
import CustomersActive from "../assets/HV/Customers/iccon/active.svg";
import CustomersInactive from "../assets/HV/Customers/iccon/inactive.svg";
import LogisticsActive from "../assets/HV/Delivery/iccon/active.svg";
import LogisticsInactive from "../assets/HV/Delivery/iccon/inactive.svg";
import ProductsActive from "../assets/HV/Products/iccon/active.svg";
import ProductsInactive from "../assets/HV/Products/iccon/inactive.svg";
import CouponActive from "../assets/HV/Coupon/iccon/active.svg";
import CouponInactive from "../assets/HV/Coupon/iccon/inactive.svg";
import UsersActive from "../assets/HV/Users/iccon/active.svg";
import UsersInactive from "../assets/HV/Users/iccon/inactive.svg";
import SettingsActive from "../assets/HV/Settings/iccon/active.svg";
import SettingsInactive from "../assets/HV/Settings/iccon/inactive.svg";

import DashboardPage from "../pages/DashboardPage/DashboardPage";
import FinancePage from "../pages/FinancePage/FinancePage";
import Users from '../pages/Users/Users'
import Logistics from "../pages/Logistics/Logistics";
export const SideBarContent = [
  {
    label: "Dashboard",
    link: "/dashboard",
    icon: faThLarge,
    active: DashboardActive,
    inactive: DashboardInactive,
  },
  {
    label: "Orders",
    link: "/dashboard/orders",
    icon: faShoppingCart,
    active: OrderActive,
    inactive: OrderInactive,
  },
  {
    label: "Finance",
    link: "/dashboard/finance",
    subroutes: [
      {
        label: "Overview",
        link: "/dashboard/finance",
      },
      {
        label: "Transaction History",
        link: "/dashboard/finance/history",
      },
    ],
    icon: faWallet,
    active: FinanceActive,
    inactive: FinanceInactive,
  },
  {
    label: "Inventory",
    link: "/dashboard/inventory",
    icon: faWarehouse,
    active: InventoryActive,
    inactive: InventoryInactive,
  },
  {
    label: "Customers",
    link: "/dashboard/customers",
    icon: faUser,
    active: CustomersActive,
    inactive: CustomersInactive,
  },
  {
    label: "Logistics",
    link: "/dashboard/logistics",
    icon: faTruckMoving,
    active: LogisticsActive,
    inactive: LogisticsInactive,
  },
  {
    label: "Products",
    link: "/dashboard/products",
    icon: faArchive,
    active: ProductsActive,
    inactive: ProductsInactive,
  },
  {
    label: "Coupon Codes",
    link: "/dashboard/couponCodes",
    icon: faTicketAlt,
    active: CouponActive,
    inactive: CouponInactive,
  },
  {
    label: "Users",
    link: "/dashboard/users",
    icon: faUser,
    active: UsersActive,
    inactive: UsersInactive,
  },
  {
    label: "Settings",
    link: "/dashboard/settings",
    icon: faCog,
    active: SettingsActive,
    inactive: SettingsInactive,
  },
];

export const mainContent = [
  {
    path: "/dashboard",
    exact: true,
    component: DashboardPage,
  },
  {
    path: "/dashboard/orders",
    component: "These are the orders",
  },
  {
    path: "/dashboard/finance",
    component: FinancePage,
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
    component: Logistics,
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
    component: Users,
  },
  {
    path: "/dashboard/settings",
    component: "This is settings",
  },
];
