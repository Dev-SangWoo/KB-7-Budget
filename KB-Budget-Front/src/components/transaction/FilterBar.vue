<script setup>
/**
 * FilterBar.vue — 날짜 / 카테고리 필터
 *
 * 역할
 * - 거래 목록·달력에 적용할 필터 UI.
 *
 * 구현 요구사항
 * - 필터 상태는 store에 두거나(권장: 여러 컴포넌트가 같은 기준 사용) HomeView 로컬에 둘 수 있음.
 * - store에 두는 경우: setFilter, clearFilter 같은 액션과 filteredTransactions getter와 연결.
 * - 날짜: 단일 날짜 / 기간 / 월 단위 중 요구사항에 맞게 선택.
 * - 카테고리: db.json의 categories 또는 store에 로드된 목록으로 select 구성. 수입/지출 type에 따라 목록 필터링.
 * - 필터 초기화 버튼(선택).
 */
</script>

<template>
  <!--
    한 줄 스크롤 가능한 칩 또는 접이식 패널 등 모바일 UX 고려
  -->
  <div class="filter-bar">
    <!-- 구현 -->
  </div>
</template>
