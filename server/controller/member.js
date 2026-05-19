import bcrypt from 'bcrypt';
import * as repository from '../repository/member.js';

/* 아이디 중복 체크 */
export const getIdCheck = async(req, res, next) => {
    const {id} = req.body;
    const result = await repository.getIdCheck(id);
    res.json(result);  //{"isFind": 1}
}

/* 회원가입 */
export const getSignup = async(req, res, next) => {
    const { id, pwd, name, phone, emailDomain, emailName } = req.body;
    const pwdHash = await bcrypt.hash(pwd, 10);
    const email = emailName.concat('@',emailDomain);
    const member = {...req.body, "pwdHash": pwdHash, "email": email};
    
    const result = await repository.getSignup(member);    
    res.json({"isSignup": result});
}