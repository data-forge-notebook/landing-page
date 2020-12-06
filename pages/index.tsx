import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto" rel="stylesheet"></link>
      </Head>

      <main>
          Hello!

          <Link href="/product"><a>Buy Data-Forge Notebook Pro!</a></Link>

          <section>
              Hero
          </section>

          <section>
              Features
          </section>

          <section>
              Examples
          </section>

          <section>
              Overview
          </section>

          <section>
              About
          </section>

          <section>
              Contact
          </section>

      </main>

    </Layout>
  )
}
