<script setup>
/**
 * TransactionList.vue — 거래 리스트
 *
 * 역할
 * - 필터가 적용된 거래 배열을 세로 리스트로 표시.
 *
 * 구현 요구사항
 * - store.filteredTransactions(또는 props로 전달받은 배열)를 v-for로 렌더.
 * - 각 행은 TransactionItem.vue에 props로 단일 거래 객체 전달.
 * - 빈 배열일 때 안내 문구.
 * - (선택) 스와이프 삭제·편집은 나중 단계로 분리 가능.
 *
 * Props (예시)
 * - transactions: Array — store에서 computed로 넘기거나 inject하지 말고 명시적 props 권장
 */
</script>

<template>
  <!--
    ul/li 또는 role="list" 구조, 스크롤 영역 높이는 MainLayout 내부에서 잡을 것
  -->
  <div class="transaction-list">
    <!-- 구현 -->
  </div>
</template>
