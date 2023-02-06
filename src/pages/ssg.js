import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function SSG({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

SSG.getLayout = (page) => {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}

// dev 모드에선 SSR처럼 실행됨
export const getStaticProps = async () => {
  console.log('server')
  return {
    props: {
      time: new Date().toISOString(),
    },
  }
}
