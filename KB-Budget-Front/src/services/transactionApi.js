/**
 * =============================================================================
 * services/transactionApi.js — axios API 모듈 (구현 스펙)
 * =============================================================================
 *
 * 역할
 * - json-server와 통신하는 함수만 모음. UI·Pinia와 분리.
 *
 * 구현 요구사항
 * - axios 인스턴스 하나 생성: baseURL은 환경에 따라 분리
 *   - 예: import.meta.env.VITE_JSON_SERVER_URL 또는 'http://localhost:3000'
 * - 공통 인터셉터(에러 로깅)는 선택.
 *
 * 함수 시그니처 예시 (이름은 자유)
 * - getTransactions(params?) — GET /transactions
 * - postTransaction(body) — POST /transactions
 * - getCategories() — GET /categories
 * - (선택) patchTransaction(id, body), deleteTransaction(id)
 *
 * 응답 타입
 * - db.json 스키마와 동일한 필드명 유지: type, date, amount, category, memo, id
 *
 * 에러 처리
 * - 네트워크 오류 시 throw 또는 Result 객체 — 스토어에서 일관되게 처리.
 * =============================================================================
 */
