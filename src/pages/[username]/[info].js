import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Username() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')

  // useEffect(() => {
  //   fetch('/api/user').then(res => res.json()).then(data => setName(data.name))
  // }, [])
  useEffect(() => {
    if (uid !== null) {
      fetch(`/api/user-info/${uid}`).then(res => res.json()).then(data => setName(data.name))
    }
  }, [uid])

  return (
    <>
      <h1 className="title">{username}'s {info}</h1>
      <h1 className="title">Name : {name}</h1>
    </>
  )
}

Username.getLayout = (page) => {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
