import { sendRequest } from "./methods";
import { options } from "./shared/libOptions";
import { Buff163InstanceAPI } from "./types";

const methods = [
    "market",
    "message",
    "index",
    "asset",
    "activity",
    "feedback"
];

class Buff163Instance {
    protected session: string;
    public constructor(session: string) {
        this.session = session;
        for (const method of methods) {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            this[method] = new Proxy(Object.create(null), {
                get: (target, prop) => (params: object) => (
                    this.prepareRequest(method, prop, params)
                )
            });
        }
    }
    prepareRequest(method: string, prop: string | symbol, params: object) {
        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const requestParams = new URLSearchParams(params).toString();
        switch (prop) {
        case "couponMy":
            prop = "coupon/my";
            break;
        case "popularSellOrder":
            prop = "popular_sell_order";
            break;
        case "getBriefAsset":
            prop = "get_brief_asset";
            break;
        case "rechargeLog":
            prop = "recharge_log";
            break;
        case "withdrawLog":
            prop = "withdraw_log";
            break;
        case "withdrawTogetherFee":
            prop = "withdraw_together/fee";
            break;
        case "announcementV2":
            prop = "announcement_v2";
            break;
        case "goodsAll":
            prop = "goods/all";
            break;
        case "goodsSellOrder":
            prop = "goods/sell_order";
            break;
        case "goodsBuying":
            prop = "goods_buying";
            break;
        case "steamTrade":
            prop = "steam_trade";
            break;
        case "steamInventory":
            prop = "steam_inventory";
            break;
        case "sellOrderTopBookmarked":
            prop = "sell_order/top_bookmarked";
            break;
        case "messageMessages":
            prop = "messaage/messages";
            break;
        case "benefitMy":
            prop = "benefit/my/";
            break;
        }
        return this.sendRequest(`${options.apiBaseUrl}${method}/${String(prop)}?${requestParams}`);
    }
    protected sendRequest = sendRequest;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Buff163Instance extends Buff163InstanceAPI { }

export { Buff163Instance };