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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </Layout>
  )
}
