import Link from 'next/link'

export default function Custom404Page() {
  return (
    <>
      <p className='mt-20 t-center font-size-14'>404 - Page Not Found</p>
      <div className='t-center font-size-14'>
        <Link href='/'>back home</Link>
      </div>
    </>
  )
}
