export interface Project {
    img: string;
    category: string;
}

export interface ProjectListProps {
    projects: Project[];
}
export interface ToolbarProps {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
}

export interface Project {
    img: string;
    category: string;
}
export interface Product {
    name: string;
    color: string;
    price: string;
    img: string;
}
export interface IconSwitchProps {
    icon: string;
    onSwitch: () => void;
}

export interface ListViewProps {
    items: Product[];
}
