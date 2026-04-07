<script setup>
/**
 * TransactionCalendar.vue — 달력 기반 조회
 *
 * 역할
 * - 월 단위 달력에 날짜별 거래 존재 여부·합계 등을 매핑해 표시.
 *
 * 구현 요구사항
 * - 입력 데이터는 store의 월별 거래 또는 filteredTransactions를 날짜 키(YYYY-MM-DD)로 그룹화.
 * - 날짜 셀 클릭 시 해당 일 거래만 필터하거나, 모달로 목록 표시 등 인터랙션 정의.
 * - 달력 라이브러리 사용 vs 직접 그리드 구현 중 선택(요구 복잡도에 따라).
 * - 현재 store의 "기준 월"과 달력 표시 월을 동기화.
 */
</script>

<template>
  <!--
    월 헤더(이전/다음 달), 요일 헤더, 날짜 그리드
  -->
  <div class="transaction-calendar">
    <!-- 구현 -->
  </div>
</template>
