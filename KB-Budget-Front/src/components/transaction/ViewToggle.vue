<script setup>
/**
 * ViewToggle.vue — 리스트 / 달력 전환
 *
 * 역할
 * - HomeView에서 viewMode를 'list' | 'calendar' 등으로 바꿈.
 *
 * 구현 요구사항
 * - v-model 또는 modelValue + update:modelValue 패턴으로 부모(HomeView)와 동기화.
 * - 전환 시 스크롤 위치 초기화 여부 UX 결정.
 * - 선택 상태를 시각·스크린리더에 전달(aria-pressed 등).
 */
</script>

<template>
  <!--
    세그먼트 컨트롤 스타일(두 버튼 토글) 권장
  -->
  <div class="view-toggle" role="group" aria-label="보기 방식">
    <!-- 구현 -->
  </div>
</template>
