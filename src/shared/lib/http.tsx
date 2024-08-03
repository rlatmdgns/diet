import returnFetch from 'return-fetch'

const baseUrl = process.env.NEXT_PUBLIC_DEV_HOST

export const fetchExtended = returnFetch({
  baseUrl,
  headers: {
    Accept: 'application/json',
  },
})
