import { messagesParams, messagesResponse, notificationParams, notificationResponse } from "..";

//TODO: add types
export interface MessageSchema {
    notification: (params: notificationParams) => Promise<notificationResponse>;
    announcementV2: () => void;
    messageMessages: (params: messagesParams) => Promise<messagesResponse>;
}