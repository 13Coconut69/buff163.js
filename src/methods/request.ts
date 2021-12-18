import fetch from "node-fetch";
import { Buff163Instance } from "..";
import { fetchOptions } from "../shared/fetchOptions";

export const sendRequest = async function <T>(this: Buff163Instance, url: string) {
    const data = await fetch(url, {
        headers: {
            "User-Agent": fetchOptions["User-Agent"],
            "Cookie": this.session
        }
    })
        .then(data => data.json())
        .then(data => data as T);
        //TODO: Catch
    return data;
};