//TODO: expand types
export type goodsParams = {
    game: "dota2" | "csgo" | "rust" | "h1z1" | "tf2" | "pubg" | "pubg_recycle";
    page_num: number;
}

export type goodsResponse = {
    code: string;
    msg?: string;
    data: {
        page_num:  number;
        page_size: number;
        total_count: number;
        total_page: number;
        items: {
            appid: number;
            bookmarked: boolean;
            buy_max_price: string;
            buy_num: number;
            can_search_by_tournament: boolean;
            description?: string;
            game: string;
            has_buff_price_history:  boolean;
            id: number;
            market_hash_name: string;
            market_min_price: string;
            name: string;
            quick_price: string;
            sell_min_price: string;
            sell_num: number;
            sell_reference_price: string;
            short_name: string;
            steam_market_url: string;
            transacted_num: number;
            goods_info: {
                icon_url: string;
                item_id?: unknown;
                original_icon_url: string;
                steam_price: string;
                steam_price_cny: string;
                info: unknown;
            };
        }[];
    };
};