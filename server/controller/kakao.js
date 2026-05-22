import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

let approvalData = {}

export const getReady = async(req, res, next) => {
    const { orderId, userId, itemName, quantity, totalAmount } = req.body;

    try {
        const readyURL = `https://open-api.kakaopay.com/online/v1/payment/ready`;
        const data = {
            "cid": "TC0ONETIME",
            "partner_order_id": String(orderId),
            "partner_user_id": String(userId),
            "item_name": itemName,
            "quantity": Number(quantity),
            "total_amount": Number(totalAmount),
            "vat_amount": 0,
            "tax_free_amount": 0,
            "approval_url": "http://192.168.7.38:9000/kakao/approve",
            "fail_url": "http://192.168.7.38:3000/fail",
            "cancel_url": "http://192.168.7.38:3000/cancel"
        }
        const config = {
            headers : {
                "Authorization": `SECRET_KEY ${process.env.KAKAO_SECRET_KEY}`,
                "Content-Type": "application/json"
            }
        }

        const readyResponse = await axios.post(readyURL, data, config);
        const { tid, next_redirect_mobile_url } = readyResponse.data;
        console.log(tid, next_redirect_mobile_url);
        
        approvalData[orderId] = { tid, orderId, userId }

        res.json({
            tid, 
            next_redirect_mobile_url
        });

    } catch (error) {
        console.log('getReady :: ', error.response ? error.response.data : error.message);        
        res.status(500).json({ error: error.message });
    }  
}

export const getApprove = async(req, res, next) => {
    console.log(req.query);
}