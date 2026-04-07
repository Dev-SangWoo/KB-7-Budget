<script setup>
/**
 * Header.vue — 상단 헤더
 *
 * 역할
 * - 현재 월(또는 페이지 타이틀) 표시.
 * - 필요 시 이전/다음 월 이동 버튼, 설정 아이콘 등 확장.
 *
 * 구현 요구사항
 * - 표시할 "현재 월" 소스를 하나로 정함: Pinia store의 selectedMonth 등 vs 라우트 쿼리.
 * - 월 변경 시 거래 목록·통계가 같은 기준을 보도록 store 액션과 연동.
 * - 접근성: 제목은 시맨틱하게(예: heading 또는 aria-label).
 *
 * Props / Emits (예시 — 직접 설계)
 * - props: title, yearMonth 문자열 등
 * - emits: 'change-month', delta -1 | 1
 */
</script>

<template>
  <!--
    좌측 뒤로가기(필요한 페이지만), 가운데 타이틀/월, 우측 액션 슬롯
  -->
  <header class="app-header">
    <!-- 구현 -->
  </header>
</template>
