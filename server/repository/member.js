import pool from '../db/connection.js';

/* 아이디 중복 체크 */
export const getIdCheck = async(id) => {
    const sql = `
        select count(id) as isFind 
            from member where id = ?
    `;
    const [rows] = await pool.execute(sql, [id]); // rows = [ {"isFind": 1} ]
    return rows[0];
}