import * as repository from '../repository/member.js';

/* 아이디 중복 체크 */
export const getIdCheck = async(req, res, next) => {
    const {id} = req.body;
    const isIdCheck = await repository.getIdCheck(id);
    res.json();
}