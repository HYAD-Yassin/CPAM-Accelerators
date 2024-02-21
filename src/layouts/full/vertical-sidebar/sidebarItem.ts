import {
  ApertureIcon,
  UsersGroupIcon,
  UserBoltIcon,
  LayoutDashboardIcon,
} from "vue-tabler-icons";

export interface menu {
  header?: string;
  title?: string;
  icon?: any;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}

const sidebarItem: menu[] = [
  { header: "Collect :" },
  {
    title: "Server",
    icon: ApertureIcon,
    to: "/",
  },
  {
    title: "Agent",
    icon: UserBoltIcon,
    to: "/CollectAgent",
  },
  { header: "Extra" },
  {
    title: "Sample Page",
    icon: LayoutDashboardIcon,
    to: "/sample-page",
  },
];

export default sidebarItem;
