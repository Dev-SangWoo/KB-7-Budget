<script setup>
/**
 * AddView.vue — 거래 입력 페이지
 *
 * 역할
 * - 수입/지출 등 거래 한 건을 입력·저장.
 *
 * 구현 요구사항
 * - TransactionForm(또는 하위 AmountInput, CategorySelect, DatePicker, MemoInput)으로 입력 수집.
 * - submit 시 유효성 검사(금액 > 0, 날짜 필수, 카테고리 필수 등) 후 store.addTransaction() 또는 동일 역할 액션 호출.
 * - store 액션 내부에서 transactionApi를 통해 json-server POST 후, 로컬 상태 목록 갱신.
 * - 저장 성공 후 홈으로 이동(router.push) 또는 토스트 표시 등 UX 정책 결정.
 * - 취소 시 이전 페이지로 돌아가기(router.back 등).
 *
 * 연관
 * - stores/transaction.js, services/transactionApi.js, components/form/*
 */
</script>

<template>
  <!--
    폼 + 하단 고정 버튼(저장/취소) 등 레이아웃은 모바일 터치를 고려해 배치
  -->
  <div class="add-view-root">
    <!-- 구현 -->
  </div>
</template>
