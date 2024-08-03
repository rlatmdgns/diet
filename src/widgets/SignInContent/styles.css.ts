import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
})

export const title = style({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '24px',
  textAlign: 'center',
})
export const googleButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
  width: '400px',
  padding: '18px',
  borderRadius: '8px',
  fontWeight: 700,
  border: '1px solid #bbb',
  color: '#556372',
  margin: '0 auto',
})
