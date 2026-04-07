<script setup>
/**
 * App.vue — 앱 루트
 *
 * 역할
 * - 애플리케이션 최상위. 여기서는 페이지 전환을 위해 RouterView만 두는 것을 권장.
 *
 * 구현 요구사항
 * - vue-router의 RouterView를 배치해 자식 라우트(페이지)가 이 위치에 렌더되게 할 것.
 * - 전역 스타일/폰트는 main.js에서 이미 불러오는 CSS에 두거나, 필요 시 여기서만 추가 로드.
 * - 레이아웃(헤더·탭바)은 이 파일이 아니라 MainLayout.vue + 라우터 구조로 나누는 것을 권장(중복 방지).
 *
 * 연관
 * - router/index.js (어떤 뷰가 여기에 그려질지 결정)
 * - layouts/MainLayout.vue (공통 레이아웃이 필요하면 라우트 메타/중첩 라우트로 감쌀 것)
 */
import { RouterView } from 'vue-router'
</script>

<template>
  <!--
    구현 시: 아래 RouterView가 각 페이지(Home / Add / Stats 등)를 그리도록 유지.
    데모용 헤더·로고·HelloWorld 등은 제거하고 가계부 UI 구조로 교체할 것.
  -->
  <RouterView />
</template>
