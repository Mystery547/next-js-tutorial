import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

const YourComponent = ()=> {
  return (
    <Image src="/images/profile.jpg" width={144} height={144} alt="Your name"/>
  )
}

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <YourComponent/>
      </Layout>
    </>
  )

}

