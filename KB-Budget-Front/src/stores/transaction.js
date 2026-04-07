/**
 * =============================================================================
 * stores/transaction.js — Pinia 거래 스토어 (구현 스펙)
 * =============================================================================
 *
 * 역할
 * - 거래 목록·카테고리·필터·선택 월 등 UI 상태와 서버(json-server) 동기화.
 * - 목록 조회, 추가, (선택) 수정/삭제 액션.
 * - filteredTransactions, monthlySummary 등 computed(또는 getter 성격의 computed)로 파생 데이터 제공.
 *
 * 상태(state) 예시 — 이름은 직접 정해도 됨
 * - transactions: 거래 배열
 * - categories: 카테고리 배열
 * - loading, error: 비동기 UI
 * - filters: { dateFrom, dateTo, categoryId, type } 등
 * - currentYearMonth: 'YYYY-MM' — 헤더·달력·통계 공통 기준
 *
 * 액션(actions) 예시
 * - fetchTransactions() / fetchCategories() — 마운트 시 또는 새로고침
 * - addTransaction(payload) — POST 후 로컬 배열에 반영 또는 재fetch
 * - setFilter(partial), clearFilters()
 * - setCurrentYearMonth(ym)
 *
 * getters / computed 성격
 * - filteredTransactions: filters + currentYearMonth 적용
 * - monthlySummary: 현재 월 기준 incomeTotal, expenseTotal, net
 *
 * API 계층
 * - 모든 HTTP는 services/transactionApi.js만 호출. 스토어 안에서 axios 직접 생성 지양.
 *
 * json-server 엔드포인트 (db.json 기준)
 * - GET/POST /transactions
 * - GET /categories
 *
 * 주의
 * - id는 json-server가 문자열로 줄 수 있음 — 타입 일관성 유지.
 * - 낙관적 업데이트 vs 서버 응답 후 반영 중 팀 규칙 정하기.
 * =============================================================================
 */
