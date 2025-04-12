import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15분동안 한 아아피에 대한 요청 제한
	limit: 5, // 100분에 대한 요청 할당량 추적
	standardHeaders: 'draft-8', //  CORS draft-8 규약에 따라 응답 헤더를 생성
	legacyHeaders: true, // 오래된 응답 헤더 방식을 수용하지 않음.
})