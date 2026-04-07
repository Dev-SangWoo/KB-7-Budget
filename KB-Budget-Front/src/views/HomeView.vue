<script setup>
/**
 * HomeView.vue — 거래 조회 페이지
 *
 * 역할
 * - 거래 내역을 리스트 또는 달력으로 조회.
 * - viewMode(예: 'list' | 'calendar')에 따라 ViewToggle / TransactionList / TransactionCalendar 전환.
 *
 * 구현 요구사항
 * - 초기 진입 시 Pinia transaction 스토어에서 서버(json-server) 데이터를 불러올 액션 호출(중복 호출 방지 정책은 store 또는 여기서 결정).
 * - 필터(날짜·카테고리)는 FilterBar와 store의 필터 상태를 연동. 필터 변경 시 리스트/달력이 같이 반영되게 할 것.
 * - store의 filteredTransactions(또는 동일 역할의 getter)를 TransactionList / TransactionCalendar에 전달.
 * - FloatingButton(+): 클릭 시 AddView로 이동(router.push).
 *
 * 연관 컴포넌트
 * - ViewToggle, FilterBar, TransactionList, TransactionCalendar, TransactionSummary(선택), FloatingButton
 *
 * 상태
 * - viewMode는 로컬 ref로 둘지, store에 둘지 팀 규칙에 맞게 선택(URL 쿼리로 동기화할지도 선택).
 */
</script>

<template>
  <!--
    배치 예: 상단 FilterBar + ViewToggle, 본문은 viewMode에 따라 리스트 또는 달력, 하단 FloatingButton
  -->
  <div class="home-view-root">
    <!-- 구현 -->
  </div>
</template>
