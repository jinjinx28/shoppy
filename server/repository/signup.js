import pool from '../db/connection.js';

export const getSignup = async() =>{
    const sql = ``;
    const [rows] = await pool.execute(sql, []);
    return rows[0];
}