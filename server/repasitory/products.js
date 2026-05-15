import * as routes from '../routes/products.js';
import pool from '../db/connection.js';

/* 전체 상품 조회 */
export const getAll = async () => {
    const sql = `
        select pid,
            concat('images/', image) as image
        from product;
    `;
    const [results] = await pool.execute(sql, []);
    return results;
}