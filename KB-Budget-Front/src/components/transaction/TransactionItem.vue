<script setup>
/**
 * TransactionItem.vue — 거래 한 건 UI
 *
 * 역할
 * - 수입/지출 구분, 금액, 카테고리, 메모, 날짜 등 한 줄(또는 두 줄) 표현.
 *
 * 구현 요구사항
 * - props로 transaction 객체 받기. 직접 store를 읽지 않는 것이 재사용·테스트에 유리.
 * - type이 income이면 + 색상/부호, expense면 - 색상/부호 등 시각 구분.
 * - 금액 포맷: toLocaleString 등으로 천 단위 구분.
 * - 클릭 시 상세 모달·편집 페이지로 이동은 선택 과제.
 *
 * Props
 * - transaction: { id, type, date, amount, category, memo } — db.json 스키마와 맞출 것
 */
</script>

<template>
  <!--
    카드형 또는 divider 있는 리스트 행
  -->
  <article class="transaction-item">
    <!-- 구현 -->
  </article>
</template>
