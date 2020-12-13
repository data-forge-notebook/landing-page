import Link from "next/link"
import Layout from '../components/layout'

function ZoomableImage({ src }: { src: string }) {
    return (
        <div className="zoomable-image">
            <input type="checkbox" id="zoomableImageCheck" />
            <label htmlFor="zoomableImageCheck">
                <img 
                    src={src} 
                    alt="Screenshot" 
                    className="screenshot"
                    />
                <div className="text-center text-sm">Click to zoom</div>
            </label>
            <div className="full-image-container">  
                <label 
                    htmlFor="zoomableImageCheck"
                    className="full-image"
                    >
                    <img src={src} alt="Screenshot" />
                </label>
            </div>
        </div>
    );
}

export default function Home() {
  return (
    <Layout>
        <section className="blue">
            <div className="narrow-container flex flex-col items-center">
                <img className="logo" src="/images/logo.png" alt="Data-Forge Notebook logo" />
                <div className="text-3xl">
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

        <section className="white pt-16 pb-8 text-left">
            <div className="wide-container flex flex-row items-center">
                <div className="flex-grow pr-4">
                    <p className="text-2xl">Want to do visual prototyping and exploratory data analysis?</p>
                    <p className="mt-2 text-xl text-gray-600">But you need to work in JavaScript</p>
                </div>

                <ZoomableImage
                    src="/images/screenshots/Screenshot_1.png"
                    />
                
            </div>

            <div className="wide-container flex flex-row items-center mt-10">

               <ZoomableImage
                    src="/images/screenshots/Screenshot_2.png"
                    />

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

                <ZoomableImage
                    src="/images/screenshots/Screenshot_3.png"
                    />

            </div>
        </section>

        <section className="blue pt-16 pb-8 text-left">
            <div className="narrow-container">
                <div className="text-3xl">Example notebooks</div>
                <p className="mt-8">
                    Data-Forge Notebook includes many example notebooks to help you get started and working 
                    quickly with JavaScript.
                </p>

                <p className="mt-4">
                    Click these links to see example exported notebooks:
                </p>
                
                <ul className="mt-4 list-disc list-inside">
                    <li>
                        Examples of Data-Forge Notebook visualizations exported to
                        <ul className="list-disc list-inside pl-8">
                            <li>
                                <a href="https://data-forge-notebook.github.io/visualization-examples/" target="_blank">a web page</a>
                            </li>
                            <li>
                                <a href="https://wiki.data-forge-notebook.com/visualizing-data" target="_blank">to markdown</a>
                            </li>                        
                        </ul>
                    </li>
                    <li className="mt-1">
                        <a href="http://jscheatsheet.the-data-wrangler.com" target="_blank">JavaScript cheat sheet (HTML)</a>
                    </li>
                    <li className="mt-1">
                        <a href="http://dfcheatsheet.the-data-wrangler.com" target="_blank">Data-Forge cheat sheet (HTML)</a>
                    </li>
                    <li className="mt-1">
                        <a href="https://gist.github.com/ashleydavis/244b8f7ef91a36b7f8e1b2f0dd90c6f5" target="_blank">Backtesting a trading strategy (markdown format)</a>
                    </li>
                </ul>
            </div>
        </section>

        <section className="white">
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
