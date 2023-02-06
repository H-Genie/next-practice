import Link from 'next/link'

export default function Home({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <h1>
        <Link href={'/csr'}>CSR</Link>
      </h1>
      <h1>
        <Link href={'/ssg'}>SSG</Link>
      </h1>
      <h1>
        <Link href={'/isr'}>ISR</Link>
      </h1>
    </>
  )
}

export const getServerSideProps = async () => {
  console.log('server')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
