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
import DashboardActive from "../assets/HV/Dashboard/iccon/active.png";
import DashboardInactive from "../assets/HV/Dashboard/iccon/inactive.png";
import OrderActive from "../assets/HV/Order/iccon/active.png";
import OrderInactive from "../assets/HV/Order/iccon/inactive.png";
import FinanceActive from "../assets/HV/Finance/iccon/active.png";
import FinanceInactive from "../assets/HV/Finance/iccon/inactive.png";
import InventoryActive from "../assets/HV/Inventory/iccon/active.png";
import InventoryInactive from "../assets/HV/Inventory/iccon/inactive.png";
import CustomersActive from "../assets/HV/Customers/iccon/active.png";
import CustomersInactive from "../assets/HV/Customers/iccon/inactive.png";
import LogisticsActive from "../assets/HV/Delivery/iccon/active.png";
import LogisticsInactive from "../assets/HV/Delivery/iccon/inactive.png";
import ProductsActive from "../assets/HV/Products/iccon/active.png";
import ProductsInactive from "../assets/HV/Products/iccon/inactive.png";
import CouponActive from "../assets/HV/Coupon/iccon/active.png";
import CouponInactive from "../assets/HV/Coupon/iccon/inactive.png";
import UsersActive from "../assets/HV/Users/iccon/active.png";
import UsersInactive from "../assets/HV/Users/iccon/inactive.png";
import SettingsActive from "../assets/HV/Settings/iccon/active.png";
import SettingsInactive from "../assets/HV/Settings/iccon/inactive.png";

import DashboardPage from "../pages/DashboardPage/DashboardPage";
import FinancePage from "../pages/FinancePage/FinancePage";
import Users from '../pages/Users/Users'
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
    component: Users,
  },
  {
    path: "/dashboard/settings",
    component: "This is settings",
  },
];
