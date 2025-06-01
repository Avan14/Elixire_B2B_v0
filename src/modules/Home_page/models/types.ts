export interface NavItem {
  id: string;
  title: string;
  icon: string;
  path: string;
}

export type SidebarItemProps =  {
  item: NavItem;
  isActive: boolean;
  collapsed: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}
