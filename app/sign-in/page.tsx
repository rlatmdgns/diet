import React from 'react'
import Link from 'next/link'

const signPage = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <Link href="http://api.rumor-lab.com/oauth2/authorization/google">로그인</Link>
    </div>
  )
}

export default signPage
