export interface File {
  title: string;
  icon: JSX.Element;
  url?: string;
  id: string;
}

export interface Tab {
  title: string;
  id: string;
  files: File[];
}

export interface SidebarProps {
  tabs: Tab[];
}
