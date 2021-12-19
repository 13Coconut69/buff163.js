import { sendRequest } from "./methods";
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
                    this.prepareRequest(prop, params)
                )
            });
        }
    }
    //TODO: add func
    prepareRequest(prop: string | symbol, params: object) {
        return null;
    }
    protected sendRequest = sendRequest;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Buff163Instance extends Buff163InstanceAPI {}

export { Buff163Instance };