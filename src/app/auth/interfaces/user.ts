export interface User {
    user_id: number;
    username: string;
    exp: number;
    isActive: boolean;
    roles: number[];
    owner: string;
    isSuperuser?: boolean;
}
