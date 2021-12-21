export type rechargeLogParams = {
    page_num: number;
    _: number;
}

export type rechargeLogResponse = {
    code: string;
    msg?: string;
    items: Array<unknown>;
    page_num: number
    page_size: number;
    total_count: number;
    total_page: number;
}