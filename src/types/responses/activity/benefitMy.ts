export type benefitMyParams = {
    _: number;
}

export type benefitMyResponse = {
    code: string;
    msg?: string;
    data: Array<{
        description: string;
        detail_entry: {
            app_id: string;
            param: string;
            title: string;
            type: string;
            url: string;
        };
        dispense_sources: Array<{
            name: string;
            value: number;
        }>;
        finished_at?: string;
        has_benefit: boolean;
        m_bg_css: Array<string>;
        name: string;
        show_order: number;
        tab_color: string;
        type: number;
    }>;
}