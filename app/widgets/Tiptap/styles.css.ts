import { globalStyle, style } from '@vanilla-extract/css'

export const editorWrapper = style({
  width: '100%',
  maxWidth: '800px',
  margin: '0 auto',
})

export const tiptap = style({})
globalStyle(`${tiptap} .is-editor-empty:first-child::before`, {
  height: '0',
  float: 'left',
  color: '#adb5bd',
  content: 'attr(data-placeholder)',
})

globalStyle(`${tiptap} .ProseMirror:focus`, {
  outline: 'none',
})

globalStyle(`${tiptap} blockquote`, {
  borderLeft: '2px solid #0d0d0d1a',
  paddingLeft: '1rem',
})
