import Link from "next/link"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

        <section className="hero">
            <div className="container flex flex-col items-center">
                <img className="logo" src="/images/logo.png" alt="Data-Forge Notebook logo" />
                <div className="title">
                    Exploratory coding and data analysis for JavaScript and TypeScript
                </div>
                <Link href="/product"><a className="action-button">Buy Data-Forge Notebook Pro!</a></Link>
                <div className="vid-container">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/HO1J1G_A3d8" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                        >
                    </iframe>
                </div>
                <a 
                    className="mt-1"
                    target="_blank" 
                    href="https://www.youtube.com/channel/UCOxw0jy384_wFRwspgq7qMQ"
                    >
                    Watch more videos
                </a>
            </div>
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

    </Layout>
  )
}
