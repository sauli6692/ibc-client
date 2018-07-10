export interface RouteMetadata {
    roles: Array<number>;
    menu: Array<MenuItem>;
}

export interface MenuItem {
    slug: string;
    label: string;
    roles: Array<number>;
}
