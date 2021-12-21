export type getBriefAssetParams = {
    _: number;
};

export type getBriefAssetResponse = {
    code: string,
    data: {
        alipay_able_withdraw_amount: string;
        alipay_amount: string;
        alipay_frozen_amount: string;
        alipay_unable_withdraw_amount: string;
        allow_large_amount_withdraw: boolean;
        allow_large_amount_withdraw_new: boolean;
        cash_amount: string;
        epay_able_withdraw_amount: string;
        epay_amount: string;
        epay_frozen_amount: string;
        epay_unable_withdraw_amount: string;
        frozen_amount: string;
        has_admin_frozen_asset: boolean;
        realname: boolean;
        remain_withdraw_counts: {
            airwallex: number;
            alipay: number;
            epay: number;
            together: number;
        };
    };
    msg?: string;
}
