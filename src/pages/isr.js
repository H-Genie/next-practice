import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function ISR({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  )
}

ISR.getLayout = (page) => {
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
    revalidate: 1,
  }
}
