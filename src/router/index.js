import { createRouter, createWebHistory } from 'vue-router'
import LedgerLayout from '../layouts/LedgerLayout.vue'
import LedgerHomeView from '../views/LedgerHomeView.vue'
import StatsView from '../views/StatsView.vue'
import TransactionEntryView from '../views/TransactionEntryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LedgerLayout,
      children: [
        {
          path: '',
          name: 'ledger-home',
          component: LedgerHomeView,
        },
        {
          path: 'stats',
          name: 'ledger-stats',
          component: StatsView,
        },
      ],
    },
    {
      path: '/entry',
      name: 'transaction-entry',
      component: TransactionEntryView,
    },
  ],
})

export default router
