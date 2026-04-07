<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useTransactionStore } from '../stores/transaction'

const router = useRouter()
const transactionStore = useTransactionStore()
const { type, form, isLoading, categoriesLoading, errorMessage, successMessage, categoryOptions } =
  storeToRefs(transactionStore)

const entryTitle = computed(() => (type.value === 'income' ? '수입' : '지출'))

onMounted(() => {
  transactionStore.fetchCategories()
})

function goHome() {
  router.push({ name: 'ledger-home' })
}

function handleTypeChange(nextType) {
  transactionStore.setType(nextType)
}

async function handleSubmit() {
  const ok = await transactionStore.submitTransaction()
  if (ok) {
    goHome()
  }
}
</script>

<template>
  <main class="entry-screen app-frame">
    <section class="entry-card">
      <header class="entry-header">
        <button class="icon-button" type="button" aria-label="뒤로가기" @click="goHome">&#8249;</button>
        <h1>{{ entryTitle }}</h1>
        <span class="entry-header-spacer" aria-hidden="true"></span>
      </header>

      <div class="type-tabs">
        <button
          type="button"
          :class="['tab-button', { active: type === 'income' }]"
          @click="handleTypeChange('income')"
        >
          수입
        </button>
        <button
          type="button"
          :class="['tab-button', { active: type === 'expense' }]"
          @click="handleTypeChange('expense')"
        >
          지출
        </button>
      </div>

      <form class="entry-form" @submit.prevent="handleSubmit">
        <label class="form-row">
          <span>날짜</span>
          <input v-model="form.date" type="date" required />
        </label>

        <label class="form-row">
          <span>분류</span>
          <select
            v-model="form.category"
            required
            :disabled="categoriesLoading || categoryOptions.length === 0"
          >
            <option v-for="category in categoryOptions" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </label>

        <label class="form-row">
          <span>금액</span>
          <input v-model="form.amount" type="number" min="1" step="1" placeholder="0" required />
        </label>

        <label class="form-row">
          <span>내용</span>
          <input v-model="form.memo" type="text" placeholder="내용을 입력하세요" maxlength="80" required />
        </label>

        <p v-if="errorMessage" class="message error">{{ errorMessage }}</p>
        <p v-if="successMessage" class="message success">{{ successMessage }}</p>

        <div class="action-row">
          <button
            type="submit"
            class="primary-button"
            :disabled="isLoading || categoriesLoading || categoryOptions.length === 0"
          >
            {{
              categoriesLoading
                ? '불러오는 중...'
                : isLoading
                  ? '저장 중...'
                  : '저장하기'
            }}
          </button>
        </div>
      </form>
    </section>
  </main>
</template>
