import CCAvenue from "@/utils/CCAvenue";
import { useRouter } from "next/router";

export default function Payment() {

    const host = "http://reg.medivisionevents.com";
    const router = useRouter();

    const paymentCCAvenue = () => {
        let paymentData = {
            merchant_id: '3414705', // Merchant ID (Required)
            order_id: "ORD123", // Order ID - It can be generated from our project
            amount: "1", // Payment Amount (Required)
            currency: "INR", // Payment Currency Type (Required)
            redirect_url: `${host}/api/ccavenue-handle`, // Success URL (Required)
            cancel_url: `${host}/api/ccavenue-handle`, // Failed/Cancel Payment URL (Required)
            language: 'EN', // Language (Optional)
            billing_tel: "1234567890" // Billing Mobile Number (Optional)
        }

        let encReq = CCAvenue.getEncryptedOrder(paymentData);
        let accessCode = "AVYE44MA46AM05EYMA";
        let URL = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${encReq}&access_code=${accessCode}`;
        router.push(URL);
    }

    return (
        <>
            <button onClick={paymentCCAvenue}>Pay Now</button>
        </>
    )
}