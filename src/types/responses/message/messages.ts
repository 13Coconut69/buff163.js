export type messagesParams = {
    page_num: number;
    type: string;
    _: number;
}

export type messagesResponse = {
    code: string;
    msg?: string;
    data: {
        items: Array<unknown>;
        page_num: number;
        page_size: number;
        total_count: number;
        total_page: number;
    }; 
}