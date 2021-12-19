import { goodsArgs, goodsRequest } from "..";

//TODO: add types
export interface MarketSchema {
    goods: ({ game, page_num }: goodsArgs) => Promise<goodsRequest>;
    goodsAll: () => void;
    goodsSellOrder: () => void;
    goodsBuying: () => void;
    steamTrade: () => void;
    steamInventory: () => void;
    sellOrderTopBookmarked: () => void;
    backpack: () => void;
}