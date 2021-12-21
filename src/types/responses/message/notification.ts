export type notificationParams = {
    _: number;
}

export type notificationResponse = {
    code: string;
    data: {
        new_roll_room: {
            has_new: boolean;
        };
        to_accept_offer_order: {
            pubg: number;
            dota2: number;
        };
        to_deliver_order: {
            pubg: number;
            dota2: number;
        }
        to_handle_bargain: {
            pubg: number;
            dota2: number;
        };
        to_pay_bargain: {
            pubg: number;
            dota2: number;
        };
        to_pay_order: {
            pubg: number;
            dota2: number;
        };
        to_receive_order: {
            pubg: number;
            dota2: number;
        };
        to_send_offer_order: {
            pubg: number;
            dota2: number;
        };
        unread_feedback_replay: {
            total: number;
        };
        unread_message: {
            total: number;
        };
        unread_social_message: {
            total: number;
        };
        unread_system_message: {
            total: number;
        };
        updated_at: Record<string, unknown>;
    };
    msg?: string;
}
