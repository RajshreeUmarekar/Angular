import { PaymentModeType } from "./enum/payment-mode-types.model";

export class PaymentDetails {
    entryTime?: string | null;
    exitTime?: string | null;
    amount?: string | null;
    paymentMode?: PaymentModeType | string | null;
}