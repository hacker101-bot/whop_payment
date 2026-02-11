import { APIResource } from "../core/resource.mjs";
import * as PaymentsAPI from "./payments.mjs";
import * as Shared from "./shared.mjs";
import { APIPromise } from "../core/api-promise.mjs";
import { CursorPage, type CursorPageParams, PagePromise } from "../core/pagination.mjs";
import { RequestOptions } from "../internal/request-options.mjs";
export declare class PaymentMethods extends APIResource {
    /**
     * A payment method is a stored representation of how a customer intends to pay,
     * such as a card, bank account, or digital wallet. It holds the necessary billing
     * details and can be attached to a member for future one-time or recurring
     * charges. This lets you reuse the same payment credentials across multiple
     * payments. You must provide exactly one of company_id or member_id.
     *
     * Required permissions:
     *
     * - `member:payment_methods:read`
     */
    retrieve(id: string, query?: PaymentMethodRetrieveParams | null | undefined, options?: RequestOptions): APIPromise<PaymentMethodRetrieveResponse>;
    /**
     * A payment method is a stored representation of how a customer intends to pay,
     * such as a card, bank account, or digital wallet. It holds the necessary billing
     * details and can be attached to a member for future one-time or recurring
     * charges. This lets you reuse the same payment credentials across multiple
     * payments.
     *
     * Required permissions:
     *
     * - `member:payment_methods:read`
     */
    list(query?: PaymentMethodListParams | null | undefined, options?: RequestOptions): PagePromise<PaymentMethodListResponsesCursorPage, PaymentMethodListResponse>;
}
export type PaymentMethodListResponsesCursorPage = CursorPage<PaymentMethodListResponse>;
/**
 * A payment method with no additional properties
 */
export type PaymentMethodRetrieveResponse = PaymentMethodRetrieveResponse.BasePaymentMethod | PaymentMethodRetrieveResponse.CardPaymentMethod | PaymentMethodRetrieveResponse.UsBankAccountPaymentMethod | PaymentMethodRetrieveResponse.CashappPaymentMethod | PaymentMethodRetrieveResponse.IdealPaymentMethod | PaymentMethodRetrieveResponse.SepaDebitPaymentMethod;
export declare namespace PaymentMethodRetrieveResponse {
    /**
     * A payment method with no additional properties
     */
    interface BasePaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'BasePaymentMethod';
    }
    /**
     * The card for the payment method
     */
    interface CardPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * The card details associated with this payment method
         */
        card: CardPaymentMethod.Card;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'CardPaymentMethod';
    }
    namespace CardPaymentMethod {
        /**
         * The card details associated with this payment method
         */
        interface Card {
            /**
             * Possible card brands that a payment token can have
             */
            brand: PaymentsAPI.CardBrands | null;
            /**
             * Card expiration month, like 03 for March.
             */
            exp_month: number | null;
            /**
             * Card expiration year, like 27 for 2027.
             */
            exp_year: number | null;
            /**
             * Last four digits of the card.
             */
            last4: string | null;
        }
    }
    /**
     * The bank account for the payment method
     */
    interface UsBankAccountPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'UsBankAccountPaymentMethod';
        /**
         * The bank details associated with this payment method
         */
        us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
    }
    namespace UsBankAccountPaymentMethod {
        /**
         * The bank details associated with this payment method
         */
        interface UsBankAccount {
            /**
             * The type of account
             */
            account_type: string;
            /**
             * The name of the bank
             */
            bank_name: string;
            /**
             * The last 4 digits of the account number
             */
            last4: string;
        }
    }
    /**
     * The Cash App details for the payment method
     */
    interface CashappPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * The Cash App details associated with this payment method
         */
        cashapp: CashappPaymentMethod.Cashapp;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'CashappPaymentMethod';
    }
    namespace CashappPaymentMethod {
        /**
         * The Cash App details associated with this payment method
         */
        interface Cashapp {
            /**
             * A unique and immutable identifier assigned by Cash App to every buyer.
             */
            buyer_id: string | null;
            /**
             * A public identifier for buyers using Cash App.
             */
            cashtag: string | null;
        }
    }
    /**
     * The iDEAL details for the payment method
     */
    interface IdealPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The iDEAL details associated with this payment method
         */
        ideal: IdealPaymentMethod.Ideal;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'IdealPaymentMethod';
    }
    namespace IdealPaymentMethod {
        /**
         * The iDEAL details associated with this payment method
         */
        interface Ideal {
            /**
             * The customer's bank.
             */
            bank: string | null;
            /**
             * The Bank Identifier Code of the customer's bank.
             */
            bic: string | null;
        }
    }
    /**
     * The SEPA Direct Debit details for the payment method
     */
    interface SepaDebitPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The SEPA Direct Debit details associated with this payment method
         */
        sepa_debit: SepaDebitPaymentMethod.SepaDebit;
        /**
         * The typename of this object
         */
        typename: 'SepaDebitPaymentMethod';
    }
    namespace SepaDebitPaymentMethod {
        /**
         * The SEPA Direct Debit details associated with this payment method
         */
        interface SepaDebit {
            /**
             * Bank code of the bank associated with the account.
             */
            bank_code: string | null;
            /**
             * Branch code of the bank associated with the account.
             */
            branch_code: string | null;
            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: string | null;
            /**
             * Last four digits of the IBAN.
             */
            last4: string | null;
        }
    }
}
/**
 * A payment method with no additional properties
 */
export type PaymentMethodListResponse = PaymentMethodListResponse.BasePaymentMethod | PaymentMethodListResponse.CardPaymentMethod | PaymentMethodListResponse.UsBankAccountPaymentMethod | PaymentMethodListResponse.CashappPaymentMethod | PaymentMethodListResponse.IdealPaymentMethod | PaymentMethodListResponse.SepaDebitPaymentMethod;
export declare namespace PaymentMethodListResponse {
    /**
     * A payment method with no additional properties
     */
    interface BasePaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'BasePaymentMethod';
    }
    /**
     * The card for the payment method
     */
    interface CardPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * The card details associated with this payment method
         */
        card: CardPaymentMethod.Card;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'CardPaymentMethod';
    }
    namespace CardPaymentMethod {
        /**
         * The card details associated with this payment method
         */
        interface Card {
            /**
             * Possible card brands that a payment token can have
             */
            brand: PaymentsAPI.CardBrands | null;
            /**
             * Card expiration month, like 03 for March.
             */
            exp_month: number | null;
            /**
             * Card expiration year, like 27 for 2027.
             */
            exp_year: number | null;
            /**
             * Last four digits of the card.
             */
            last4: string | null;
        }
    }
    /**
     * The bank account for the payment method
     */
    interface UsBankAccountPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'UsBankAccountPaymentMethod';
        /**
         * The bank details associated with this payment method
         */
        us_bank_account: UsBankAccountPaymentMethod.UsBankAccount;
    }
    namespace UsBankAccountPaymentMethod {
        /**
         * The bank details associated with this payment method
         */
        interface UsBankAccount {
            /**
             * The type of account
             */
            account_type: string;
            /**
             * The name of the bank
             */
            bank_name: string;
            /**
             * The last 4 digits of the account number
             */
            last4: string;
        }
    }
    /**
     * The Cash App details for the payment method
     */
    interface CashappPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * The Cash App details associated with this payment method
         */
        cashapp: CashappPaymentMethod.Cashapp;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'CashappPaymentMethod';
    }
    namespace CashappPaymentMethod {
        /**
         * The Cash App details associated with this payment method
         */
        interface Cashapp {
            /**
             * A unique and immutable identifier assigned by Cash App to every buyer.
             */
            buyer_id: string | null;
            /**
             * A public identifier for buyers using Cash App.
             */
            cashtag: string | null;
        }
    }
    /**
     * The iDEAL details for the payment method
     */
    interface IdealPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The iDEAL details associated with this payment method
         */
        ideal: IdealPaymentMethod.Ideal;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The typename of this object
         */
        typename: 'IdealPaymentMethod';
    }
    namespace IdealPaymentMethod {
        /**
         * The iDEAL details associated with this payment method
         */
        interface Ideal {
            /**
             * The customer's bank.
             */
            bank: string | null;
            /**
             * The Bank Identifier Code of the customer's bank.
             */
            bic: string | null;
        }
    }
    /**
     * The SEPA Direct Debit details for the payment method
     */
    interface SepaDebitPaymentMethod {
        /**
         * The ID of the payment method
         */
        id: string;
        /**
         * When the payment method was created
         */
        created_at: string;
        /**
         * The type of the payment method
         */
        payment_method_type: PaymentsAPI.PaymentMethodTypes;
        /**
         * The SEPA Direct Debit details associated with this payment method
         */
        sepa_debit: SepaDebitPaymentMethod.SepaDebit;
        /**
         * The typename of this object
         */
        typename: 'SepaDebitPaymentMethod';
    }
    namespace SepaDebitPaymentMethod {
        /**
         * The SEPA Direct Debit details associated with this payment method
         */
        interface SepaDebit {
            /**
             * Bank code of the bank associated with the account.
             */
            bank_code: string | null;
            /**
             * Branch code of the bank associated with the account.
             */
            branch_code: string | null;
            /**
             * Two-letter ISO code representing the country the bank account is located in.
             */
            country: string | null;
            /**
             * Last four digits of the IBAN.
             */
            last4: string | null;
        }
    }
}
export interface PaymentMethodRetrieveParams {
    /**
     * The ID of the Company. Provide either this or member_id (not both).
     */
    company_id?: string | null;
    /**
     * The ID of the Member. Provide either this or company_id (not both).
     */
    member_id?: string | null;
}
export interface PaymentMethodListParams extends CursorPageParams {
    /**
     * Returns the elements in the list that come before the specified cursor.
     */
    before?: string | null;
    /**
     * The ID of the Company. Provide either this or member_id (not both).
     */
    company_id?: string | null;
    /**
     * The minimum creation date to filter by
     */
    created_after?: string | null;
    /**
     * The maximum creation date to filter by
     */
    created_before?: string | null;
    /**
     * The direction of the sort.
     */
    direction?: Shared.Direction | null;
    /**
     * Returns the first _n_ elements from the list.
     */
    first?: number | null;
    /**
     * Returns the last _n_ elements from the list.
     */
    last?: number | null;
    /**
     * The ID of the Member to list payment methods for
     */
    member_id?: string | null;
}
export declare namespace PaymentMethods {
    export { type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse, type PaymentMethodListResponse as PaymentMethodListResponse, type PaymentMethodListResponsesCursorPage as PaymentMethodListResponsesCursorPage, type PaymentMethodRetrieveParams as PaymentMethodRetrieveParams, type PaymentMethodListParams as PaymentMethodListParams, };
}
//# sourceMappingURL=payment-methods.d.mts.map