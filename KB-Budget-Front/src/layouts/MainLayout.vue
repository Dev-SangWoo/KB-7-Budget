<script setup>
/**
 * MainLayout.vue — 공통 레이아웃 (Header + TabBar)
 *
 * 역할
 * - 홈·통계 등 하단 탭으로 오가는 화면의 공통 뼈대.
 * - 상단 Header, 하단 TabBar, 가운데는 자식 라우트(<RouterView />) 영역.
 *
 * 구현 요구사항
 * - 반드시 <RouterView />를 배치해 중첩 라우트의 자식 페이지가 그려지게 할 것.
 * - Header에는 현재 월/타이틀 등을 표시(내용·데이터는 Header.vue 또는 store와 연동).
 * - TabBar는 "홈 / 통계" 두 탭(요구사항). 활성 라우트와 시각적으로 동기화(router-link-active 등).
 * - Add 페이지로 가는 + 버튼은 보통 TabBar가 아니라 FloatingButton으로 별도 배치(홈 등 특정 뷰에서만 보이게 할지 정책 결정).
 *
 * 연관
 * - components/common/Header.vue, TabBar.vue
 * - router/index.js (이 레이아웃을 parent로 두는 nested routes)
 */
</script>

<template>
  <!--
    구현 순서 제안:
    1) 레이아웃 뼈대(헤더 영역 / 메인 영역 / 탭바 영역) flex 또는 grid
    2) 메인 영역에 RouterView
    3) 라우터에서 이 컴포넌트를 parent로 등록 후 children에 HomeView, StatsView 연결
  -->
  <div class="main-layout-root">
    <!-- Header, TabBar, RouterView 배치 -->
  </div>
</template>
