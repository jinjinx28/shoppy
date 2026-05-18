import bcrypt from 'bcrypt';
import * as repository from '../repository/signup.js';

export const getSignup = async(req, res, next) => {
    const {id, pwd, name, phone, emailDomain, emailName} =req.body;
    console.log(id, pwd, name, phone, emailDomain, emailName);
    const pwdHash = bcrypt.hash(pwd, 10);
    console.log(pwdHash);
}