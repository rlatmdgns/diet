import React from 'react'
import Link from 'next/link'
import { googleButton, title, wrapper } from '@/src/widgets/SignInContent/styles.css'
import Image from 'next/image'

const SignInContent = () => {
  return (
    <div className={wrapper}>
      <h2 className={title}>로그인</h2>
      <Link href="http://api.rumor-lab.com/oauth2/authorization/google" className={googleButton}>
        <Image src="/logo-google.svg" alt="google" width={18} height={18} />
        Google 계정으로 로그인
      </Link>
    </div>
  )
}

export default SignInContent
