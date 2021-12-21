export type withdrawTogetherFeeParams = {
    epay_amount: number;
    alipay_amount: number;
    _: number;
}

type methodData = {
    amount: string;
    fee: string;
    notice: string;
    real_amount: string;
}

export type withdrawTogetherFeeReesponse = {
    code: string;
    msg?: string;
    data: {
        alipay: methodData;
        epay: methodData;
        total: methodData;
    };
}