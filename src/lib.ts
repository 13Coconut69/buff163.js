import { goods, sendRequest } from "./methods";

export class Buff163Instance {
    protected session: string;
    constructor(session: string) {
        this.session = session;
    }
    public market = {
        goods: goods.bind(this)
    };
    protected sendRequest = sendRequest;
}