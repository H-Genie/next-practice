import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const getServerSideProps = async () => {
  console.log('server')
  return {
    props: {},
  }
}


export default function MyInfo() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = "initial" } = router.query

  return (
    <>
      <h1 className="title">My Info</h1>
      <h1 className="title">Clicked: {String(clicked)}</h1>
      <h1 className="title">Status: {status}</h1>
      <button onClick={() => {
        alert("edit")
        setClicked(true)
        location.replace("/settings/my/info?status=editing")
      }}>edit (replace)</button>
      <br />
      <button onClick={() => {
        alert("edit")
        setClicked(true)
        router.push("/settings/my/info?status=editing")
      }}>edit (push)</button>
      <br />
      <button onClick={() => {
        alert("edit")
        setClicked(true)
        router.push("/settings/my/info?status=editing", undefined, { shallow: true })
      }}>edit (shallow)</button>
    </>
  )
}

MyInfo.getLayout = (page) => {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
