import CCAvenue from "@/utils/CCAvenue";
import { useRouter } from "next/router";

export default function Payment() {

    const host = "https://reg.medivisionevents.com";
    const router = useRouter();

    const paymentCCAvenue = () => {
        let paymentData = {
            merchant_id: '3414705',
            order_id: "ORD123", 
            amount: "1",
            currency: "INR", 
            redirect_url: `${host}/api/ccavenue-handle`, 
            cancel_url: `${host}/api/ccavenue-handle`,
            language: 'EN',
            billing_tel: "1234567890" 
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