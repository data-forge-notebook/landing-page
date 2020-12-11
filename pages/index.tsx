import Link from "next/link"
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>

        <section className="blue">
            <div className="narrow-container flex flex-col items-center">
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
                    className="mt-2"
                    target="_blank" 
                    href="https://www.youtube.com/channel/UCOxw0jy384_wFRwspgq7qMQ"
                    >
                    Watch more videos
                </a>
            </div>
        </section>

        <section className="white text-left ">
            <div className="wide-container flex flex-row items-center">
                <div className="flex-grow pr-4">
                    <p className="text-2xl">Want to do visual prototyping and exploratory data analysis?</p>
                    <p className="mt-2 text-xl text-gray-600">But you need to work in JavaScript</p>
                </div>
                
                <div className="zoomable-image">
                    <input type="checkbox" id="zoomCheck2" />
                    <label htmlFor="zoomCheck2">
                        <img 
                            src="/images/screenshots/Screenshot_1.png" 
                            alt="Screenshot" 
                            className="screenshot"
                            />
                    </label>
                    <div className="full-image-container">  
                        <label 
                            htmlFor="zoomCheck2"
                            className="full-image"
                            >
                            <img src="/images/screenshots/Screenshot_1.png" alt="Screenshot" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="wide-container flex flex-row items-center mt-10">
                <div className="zoomable-image">
                    <input type="checkbox" id="zoomCheck3" />
                    <label htmlFor="zoomCheck3">
                        <img 
                            src="/images/screenshots/Screenshot_2.png" 
                            alt="Screenshot" 
                            className="screenshot"
                            />
                    </label>
                    <div className="full-image-container">  
                        <label 
                            htmlFor="zoomCheck3"
                            className="full-image"
                            >
                            <img src="/images/screenshots/Screenshot_2.png" alt="Screenshot" />
                        </label>
                    </div>
                </div>
                <div className="flex-grow pl-4">
                    <p className="text-2xl">Love the idea of Notebook-style or literate programing?</p>
                    <p className="mt-2 text-xl text-gray-600">But your production environment is JavaScript</p>
                </div>
            </div>

            <div className="wide-container flex flex-row items-center mt-10">
                <div className="flex-grow pr-4">
                    <p className="text-2xl">Learning JavaScript?</p>
                    <p className="mt-2 text-xl text-gray-600">Data-Forge Notebook offers a friendly and forgiving environment that includes Node.js, automatically installs npm modules, has zero configuration and just works.</p>
                    <p className="mt-2 text-xl text-gray-600">Just fire it up and start coding</p>
                </div>
                <div className="zoomable-image">
                    <input type="checkbox" id="zoomCheck4" />
                    <label htmlFor="zoomCheck4">
                        <img 
                            src="/images/screenshots/Screenshot_3.png" 
                            alt="Screenshot" 
                            className="screenshot"
                            />
                    </label>
                    <div className="full-image-container">  
                        <label 
                            htmlFor="zoomCheck4"
                            className="full-image"
                            >
                            <img src="/images/screenshots/Screenshot_3.png" alt="Screenshot" />
                        </label>
                    </div>
                </div>
            </div>
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
