<script setup>
/**
 * TabBar.vue — 하단 탭 네비게이션
 *
 * 역할
 * - "홈(거래 조회)" / "통계" 탭으로 라우트 전환.
 *
 * 구현 요구사항
 * - RouterLink 또는 router.push로 '/' 와 '/stats'(실제 path는 router/index.js와 일치시킬 것) 연결.
 * - 현재 라우트와 일치하는 탭에 active 스타일.
 * - safe-area(노치·홈 인디케이터) 고려 시 padding-bottom.
 * - Add(+ )는 여기 두지 말고 FloatingButton에서 처리(요구사항).
 *
 * 연관
 * - router/index.js, MainLayout.vue
 */
</script>

<template>
  <!--
    두 개의 탭만: 홈, 통계. 아이콘+라벨 권장.
  -->
  <nav class="tab-bar" aria-label="주요 메뉴">
    <!-- 구현 -->
  </nav>
</template>
