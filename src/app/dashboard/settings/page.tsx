'use client'

import Link from "next/link"
import {useRouter} from "next/navigation"

function SettingPage() {
  const router = useRouter()

  return (
    <>
      <p>Settings Page</p>
      <div className={'flex flex-row gap-4'}>
        <Link href={'/dashboard'} className={'bg-red-200 p-2 rounded-2xl hover:bg-red-300'}>
          To /dashboard
        </Link>
        <button
          className={'bg-red-200 p-2 rounded-2xl hover:bg-red-300'}
          onClick={() => router.push('/')}
        >
          To Home
        </button>
      </div>
    </>
  )
}

export default SettingPage
