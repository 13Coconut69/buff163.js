import { ActivitySchema, AssetSchema, FeedbackSchema, IndexSchema, MarketSchema, MessageSchema } from ".";

export interface Buff163InstanceAPI {
    market: MarketSchema;
    message: MessageSchema;
    index: IndexSchema;
    asset: AssetSchema;
    activity: ActivitySchema;
    feedback: FeedbackSchema;
}