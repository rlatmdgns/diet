const baseUrl = process.env.NEXT_PUBLIC_DEV_HOST

export const fetchExtended = fetch({
  baseUrl,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
    credentials: 'include',
  },
})
