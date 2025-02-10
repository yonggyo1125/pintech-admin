'use server'
import { redirect } from 'next/navigation'
import apiRequest from '@/app/global/libs/apiRequest'

/**
 * 게시판 설정 등록 & 수정
 *
 * @param params
 * @param formData
 * @returns
 */
export const updateBoard = async (params, formData: FormData) => {
  let errors = {}
  let hasErrors = false

  // 필수항목 검증 S
  const requiredFields = {
    bid: '게시판 ID를 입력하세요.',
    name: '게시판 이름을 입력하세요.',
  }

  for (const [field, msg] of Object.entries(requiredFields)) {
    const value = formData.get(field)
    if (!value || !value.trim()) {
      errors[field] = errors[field] ?? []
      errors[field].push(msg)
      hasErrors = true
    }
  }
  // 필수항목 검증 E

  // 서버 요청 처리 S
  if (!hasErrors) {
    const res = await apiRequest('/board/admin/config/save', 'POST', formData)

    if (res.status !== 200) {
      const result = await res.json()
      errors = result.message
      hasErrors = true
    }
  }
  // 서버 요청 처리 E

  if (hasErrors) {
    return errors
  }

  return redirect('/board/config/list')
}
