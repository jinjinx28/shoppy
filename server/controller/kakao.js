import dotenv from 'dotenv';
dotenv.config();

/* 1 - 카카오페이 결제 준비 */
export const getReady = (req, res, next) => {
    const {orederId, userId, itemName, quantity, totalAmount} = req.body;

    try {
            // 1. 카카오페이 결제 준비
            const readyURL = `https://open-api.kakaopay.com/online/v1/payment/ready`;
            const data = {
                "cid": "TC0ONETIME",
                "partner_order_id": orederId,
                "partner_user_id": userId,
                "item_name": itemName,
                "quantity": quantity,
                "total_amount": totalAmount,
                "vat_amount": 0,
                "tax_free_amount": 0,
                "approval_url": "http://192.168.7.38:9000/kakao/approve", //카카오에서 redirection 주소
                "fail_url": "https://developers.kakao.com/fail",
                "cancel_url": "https://developers.kakao.com/cancel"
            }
            const config= {
                headers : {
                    "Authorization" : `SECRET_KEY ${process.env.KAKAO_SECRET_KEY}`,
                    "Content-Type" : "application/json"
                }
            }

            const readyResponse = await axios.post(readyURL, data, config);
            console.log('readyResponse -->>', readyResponse);
            

    } catch (error) {
        console.log('getReady -->>', serror);
        
    }
}

/* 2 - 카카오페이 결제 실행 */
export const getApprove = (req, res, next) => {

}