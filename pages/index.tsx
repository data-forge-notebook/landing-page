import { Image } from "antd"
import Link from "next/link"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

      <main>
          Hello!

          <Link href="/product"><a>Buy Data-Forge Notebook Pro!</a></Link>

          <section>
              Hero

              <Image 
                src="images/screenshots/Main.png" 
                width={600}
                />
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
