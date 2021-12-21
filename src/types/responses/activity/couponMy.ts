export type couponMyParams = {
    game: "dota2" | "csgo" | "rust" | "h1z1" | "tf2" | "pubg" | "pubg_recycle";
    page_num: number;
    page_size: number;
    state: string;
    only_coupon: number;
    _: number;
}

export type couponMyResponse = {
    code: string;
    msg?: string;
    data: {
        items: Array<unknown>;
        page_num: number;
        page_size: number;
        total_count: number;
        total_page: number;
    }
}