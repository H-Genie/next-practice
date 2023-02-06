import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1 className="title">Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href={"/cart/2023/02/05"}>2023년 2월 5일</Link>
      <br />
      <button onClick={() => router.push("/cart/2022/05/24")}>2022년 5월 24일</button>
    </>
  )
}

CartDateSlug.getLayout = (page) => {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
