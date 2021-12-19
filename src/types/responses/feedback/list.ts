export interface listParams {
    page_num: number;
    _: number;
}

export interface listResponse {
    code: string;
    msg?: string;
    data: {
        announcement: string;
        announcement_entry: {
            app_id: string;
            param: string; 
            title: string; 
            type: string; 
            url: string;
        };
        empty_text: string;
        end_text: string;
        has_unreplay: boolean;
        items: Array<unknown>;
        page_num: number;
        page_size: number;
        total_count: number;
        total_page: number;
        unreply_feedback?: unknown;
    };
}