import bcrypt from 'bcrypt';
import * as repository from '../repository/signup.js';

export const getSignup = async(req, res, next) => {
    const {id, pwd, name, phone, emailDomain, emailName} =req.body;
    console.log(id, pwd, name, phone, emailDomain, emailName);
    const pwdHash = await bcrypt.hash(pwd, 10);
    const email = emailName.concat('@', emailDomain);

    const [result] = await repository.getSignup(id, pwdHash, name, phone, email);
    return result.affectedRows;
}