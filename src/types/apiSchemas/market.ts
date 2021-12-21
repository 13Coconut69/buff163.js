import { goodsBuyingParams, goodsBuyingResponse, goodsParams, goodsResponse } from "..";

//TODO: add types
export interface MarketSchema {
    goods: (params: goodsParams) => Promise<goodsResponse>;
    goodsAll: () => void;
    goodsSellOrder: () => void;
    goodsBuying: (params: goodsBuyingParams) => Promise<goodsBuyingResponse>;
    steamTrade: () => void;
    steamInventory: () => void;
    sellOrderTopBookmarked: () => void;
    backpack: () => void;
}