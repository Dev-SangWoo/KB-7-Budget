<script setup>
/**
 * TransactionForm.vue — 거래 입력 폼 컨테이너
 *
 * 역할
 * - AmountInput, CategorySelect, DatePicker, MemoInput을 조합하고 submit 이벤트를 한 번에 처리.
 *
 * 구현 요구사항
 * - 내부 상태(또는 v-model 객체 하나)로 폼 필드를 묶기.
 * - submit 시 유효성 검사 실패 시 필드별 에러 표시.
 * - 성공 시 emit('submit', payload) 후 부모(AddView)에서 store.addTransaction 호출하거나,
 *   이 컴포넌트에서 직접 store 호출 중 하나로 일관되게 선택.
 * - 거래 type(수입/지출) 토글이 필요하면 여기 또는 CategorySelect 상단에 배치.
 *
 * 연관
 * - db.json transactions 스키마: type, date, amount, category, memo (+ id는 서버/JSON에서 부여)
 */
</script>

<template>
  <!--
    form @submit.prevent, 하단에 제출/취소 버튼
  -->
  <form class="transaction-form">
    <!-- AmountInput, CategorySelect, DatePicker, MemoInput 배치 -->
  </form>
</template>
