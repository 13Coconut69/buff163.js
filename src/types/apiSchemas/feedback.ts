import { listParams, listResponse } from "..";

export interface FeedbackSchema {
    list: (params: listParams) => Promise<listResponse>;
}