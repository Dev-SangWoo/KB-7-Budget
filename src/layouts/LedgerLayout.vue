<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/** 일일 / 주별 / 월별 — 추후 목록 필터와 연동 */
const periodTab = ref('daily')

const isLedgerActive = computed(() => route.name === 'ledger-home')
const isStatsActive = computed(() => route.name === 'ledger-stats')
</script>

<template>
  <div class="ledger-shell app-frame">
    <header class="ledger-header">
      <h1 class="ledger-title">가계부</h1>
    </header>

    <nav class="tab-bar tab-bar--top" aria-label="기간 보기">
      <button
        type="button"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': periodTab === 'daily' }"
        @click="periodTab = 'daily'"
      >
        일일
      </button>
      <button
        type="button"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': periodTab === 'weekly' }"
        @click="periodTab = 'weekly'"
      >
        주별
      </button>
      <button
        type="button"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': periodTab === 'monthly' }"
        @click="periodTab = 'monthly'"
      >
        월별
      </button>
    </nav>

    <main class="ledger-main">
      <router-view />
    </main>

    <div class="fab-wrap">
      <router-link to="/entry" class="fab" aria-label="내역 추가">+</router-link>
    </div>

    <nav class="tab-bar tab-bar--bottom" aria-label="메인 메뉴">
      <router-link
        to="/"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': isLedgerActive }"
      >
        가계부
      </router-link>
      <router-link
        to="/stats"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': isStatsActive }"
      >
        통계
      </router-link>
    </nav>
  </div>
</template>
