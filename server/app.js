import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productsRouter from './routes/products.js';
// import returnRouter from './routes/return.js';
// import qnaRouter from './routes/qna.js'; 

dotenv.config();

const PORT = process.env.SERVER_PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productsRouter);
// app.use('/return', returnRouter);
// app.use('/qna', qnaRouter); 

app.listen(PORT, () => {
    console.log(`서버 실행 => ${PORT}`);    
});