export type withdrawLogParams = {
    page_num: string;
    _: number;
}

export type withdrawLogResponse = {
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