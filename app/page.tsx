import Calendar from '@/src/widgets/Calendar'
import { getDiets } from '@/src/entities/api/diets'

export default async function Home() {
  const result = await getDiets()
  console.log(result, 'result')
  return <Calendar />
}
