<script setup>
/**
 * FloatingButton.vue — 플로팅 + 버튼
 *
 * 역할
 * - 탭하여 AddView(거래 입력)로 이동.
 *
 * 구현 요구사항
 * - 클릭 시 router.push({ name: 'add' }) 등으로 이동(path/name은 라우터 정의와 통일).
 * - position: fixed, z-index로 TabBar·리스트 위에 올라오게 할 것.
 * - 키보드 포커스·aria-label("거래 추가") 제공.
 * - 홈에서만 보이게 할지, 통계에서도 보이게 할지 정책에 따라 v-if 위치 결정(보통 HomeView 또는 MainLayout).
 */
</script>

<template>
  <!--
    원형 버튼 + 아이콘(또는 텍스트 '+')
  -->
  <div class="floating-add">
    <!-- 구현: button + aria-label, 클릭 시 Add 라우트 이동 -->
  </div>
</template>
