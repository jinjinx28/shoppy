import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.SERVER_PORT;
const app = express();

// 미들웨어 => 공통작업 정의
app.use(cors());
app.use(express.json());

// 라우터 => 클라이언트 요청 직접 
// app.get('./test', (req, res, next) => {});

// 라우터 => 클라이언트 요청 처리 컨트롤러에 분배
// app.get('./test', 컨트롤러.함수명);

app.listen(PORT, () => {
    console.log(`서버실행 =>, ${PORT}`);
    
});