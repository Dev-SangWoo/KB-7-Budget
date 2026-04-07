/**
 * =============================================================================
 * router/index.js — vue-router 설정 (페이지 이동 관리)
 * =============================================================================
 *
 * 목표 구조(권장)
 * - 공통 레이아웃: MainLayout.vue (Header + TabBar)를 감싸는 중첩 라우트(parent).
 * - 자식 라우트 예: '/' → HomeView(거래 조회), '/stats' → StatsView(월별 요약).
 * - AddView는 전체 화면 입력이므로 TabBar 없이 단독 라우트로 두는 경우가 많음(예: '/add').
 *
 * 구현 요구사항
 * - createWebHistory(import.meta.env.BASE_URL) 사용(Vite 기본).
 * - 라우트 name을 TabBar·FloatingButton에서 router.push({ name: '...' })에 쓸 수 있게 명확히 지을 것.
 * - MainLayout 안에서는 반드시 <RouterView />로 자식 페이지를 렌더할 것.
 * - (선택) 라우트 meta에 showTabBar, title 등을 두고 레이아웃/헤더에서 읽을 수 있게 할 것.
 *
 * 데이터/API와의 관계
 * - 페이지 진입 시 목록 갱신이 필요하면 각 View의 onMounted에서 store 액션 호출,
 *   또는 라우터 navigation guard(beforeEnter)에서 호출하도록 정책을 한 곳으로 통일할 것.
 *
 * 아래 routes 배열은 스캐폴드 예시이므로, 위 구조에 맞게 직접 수정할 것.
 * =============================================================================
 */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
