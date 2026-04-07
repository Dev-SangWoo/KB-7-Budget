import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import apiClient from '../api/client'

export const useTransactionStore = defineStore('transaction', () => {
  const type = ref('expense')
  const categories = ref([])
  const categoriesLoading = ref(false)

  const form = ref({
    date: new Date().toISOString().slice(0, 10),
    amount: '',
    category: '',
    memo: '',
  })

  const isLoading = ref(false)
  const errorMessage = ref('')
  const successMessage = ref('')

  function categoryNamesFor(currentType) {
    return categories.value.filter((c) => c.type === currentType).map((c) => c.name)
  }

  const categoryOptions = computed(() => categoryNamesFor(type.value))

  function syncCategoryToType() {
    const names = categoryNamesFor(type.value)
    if (names.length === 0) return
    if (!names.includes(form.value.category)) {
      form.value.category = names[0]
    }
  }

  async function fetchCategories() {
    categoriesLoading.value = true
    try {
      const { data } = await apiClient.get('/categories')
      categories.value = Array.isArray(data) ? data : []
      syncCategoryToType()
      errorMessage.value = ''
    } catch {
      categories.value = []
      errorMessage.value = '카테고리를 불러오지 못했습니다. json-server 실행 상태를 확인해주세요.'
    } finally {
      categoriesLoading.value = false
    }
  }

  function setType(nextType) {
    type.value = nextType
    syncCategoryToType()
    errorMessage.value = ''
    successMessage.value = ''
  }

  async function submitTransaction() {
    errorMessage.value = ''
    successMessage.value = ''

    const amountNumber = Number(form.value.amount)
    if (!form.value.date || !form.value.category || !form.value.memo.trim() || amountNumber <= 0) {
      errorMessage.value = '날짜, 분류, 금액, 내용을 모두 올바르게 입력해주세요.'
      return false
    }

    const payload = {
      type: type.value,
      date: form.value.date,
      amount: amountNumber,
      category: form.value.category,
      memo: form.value.memo.trim(),
    }

    isLoading.value = true
    try {
      await apiClient.post('/transactions', payload)
      successMessage.value = '입력한 내역이 저장되었습니다.'
      form.value.amount = ''
      form.value.memo = ''
      return true
    } catch (error) {
      errorMessage.value = '저장 중 오류가 발생했습니다. json-server 실행 상태를 확인해주세요.'
      return false
    } finally {
      isLoading.value = false
    }
  }

  return {
    type,
    form,
    categories,
    categoriesLoading,
    isLoading,
    errorMessage,
    successMessage,
    categoryOptions,
    fetchCategories,
    setType,
    submitTransaction,
  }
})
