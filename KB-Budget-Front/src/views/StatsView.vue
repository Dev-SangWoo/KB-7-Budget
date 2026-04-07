<script setup>
/**
 * StatsView.vue — 월별 요약 페이지
 *
 * 역할
 * - 선택한 월(또는 현재 월) 기준 수입·지출·순이익 등 요약 표시.
 *
 * 구현 요구사항
 * - store의 monthlySummary(또는 동일 역할 computed)를 사용해 MonthlySummary / SummaryCard에 바인딩.
 * - 월 변경 시 store에서 해당 월 데이터를 재계산하거나, 이미 전체 거래를 들고 있다면 getter만으로 처리.
 * - Chart.vue는 선택 사항: 라이브러리 도입 시 번들 크기·라이선스 확인.
 * - 데이터가 없을 때 빈 상태 UI 처리.
 *
 * 연관
 * - stores/transaction.js, components/stats/*
 */
</script>

<template>
  <!--
    상단에 월 선택(Header와 중복되지 않게 역할 분담), 본문에 카드·차트
  -->
  <div class="stats-view-root">
    <!-- 구현 -->
  </div>
</template>
