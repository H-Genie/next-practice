import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from } = router.query

  return (
    <>
      <h1 className="title">Category {slug} {from}</h1>
    </>
  )
}

CategorySlug.getLayout = (page) => {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
