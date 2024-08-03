import Cookies from 'js-cookie'
import returnFetch from 'return-fetch'

const baseUrl = process.env.NEXT_PUBLIC_DEV_HOST
const token = Cookies.get('Authorization')

export const fetchExtended = returnFetch({
  baseUrl,
  headers: {
    Accept: 'application/json',
    authorization: `Bearer ${token}`,
  },
})
