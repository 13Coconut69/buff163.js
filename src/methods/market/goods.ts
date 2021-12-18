import { Buff163Instance } from "../..";
import { options } from "../../shared/libOptions";
import { goodsRequest } from "../../types";

export function goods(this: Buff163Instance, game: "dota2" | "csgo" | "rust" | "h1z1" | "tf2" | "pubg" | "pubg_recycle", page_num = 1) {
    const data = this.sendRequest<goodsRequest>(`${options.apiBaseUrl}market/goods?game=${game}&page_num=${page_num}`);
    return data;
}