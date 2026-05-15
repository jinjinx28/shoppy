import * as repository from '../repasitory/products.js';

/* 전체 상품 조회*/
export const getAll = async (req, res, next) => { 
    const products = await repository.getAll();
    res.json(products);
}