import pool from '../db/connection.js';

export const getSignup = async(id, pwdHash, name, phone, email) =>{
    console.log(id, pwdHash, name, phone, email);
    
    const sql = ``;
    const [rows] = await pool.execute(sql, []);
    return rows.affectedRows;
}