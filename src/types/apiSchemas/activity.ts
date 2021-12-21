import { benefitMyParams, benefitMyResponse, couponMyParams, couponMyResponse } from "..";

export interface ActivitySchema {
    couponMy: (params: couponMyParams) => Promise<couponMyResponse>;
    benefitMy: (params: benefitMyParams) => Promise<benefitMyResponse>;
}