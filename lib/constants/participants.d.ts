export declare const ParticipantRole: {
    readonly FROM: "f";
    readonly TO: "t";
    readonly CARBON_COPY: "c";
    readonly BLIND_CARBON_COPY: "b";
    readonly REPLY_TO: "r";
    readonly SENDER: "s";
    readonly READ_RECEIPT_NOTIFICATION: "n";
    readonly RESENT_FROM: "rf";
};
export type ParticipantRoleType = (typeof ParticipantRole)[keyof typeof ParticipantRole];
