import { fetchExtended } from '@/src/shared/lib/http'

export const getDiets = async () => {
  const result = await fetchExtended('/diets', {
    method: 'GET',
  })
  return result.json()
}
