import { getBriefAssetParams, getBriefAssetResponse, rechargeLogParams, rechargeLogResponse, withdrawLogParams, withdrawLogResponse, withdrawTogetherFeeParams, withdrawTogetherFeeReesponse } from "..";

export interface AssetSchema {
    getBriefAsset: (params: getBriefAssetParams) => Promise<getBriefAssetResponse>;
    rechargeLog: (params: rechargeLogParams) => Promise<rechargeLogResponse>;
    withdrawLog: (params: withdrawLogParams) => Promise<withdrawLogResponse>;
    withdrawTogetherFee: (params: withdrawTogetherFeeParams) => Promise<withdrawTogetherFeeReesponse>;
}