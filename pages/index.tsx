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
        <section className="blue pb-16">
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
                    className="mt-8"
                    target="_blank" 
                    href="https://www.youtube.com/channel/UCOxw0jy384_wFRwspgq7qMQ"
                    >
                    Watch more videos
                </a>
            </div>
        </section>

        <section className="white pt-16 pb-16 text-left">
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

        <section className="blue pt-16 pb-16 text-left">
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

        <section className="white pt-16 pb-16">
            <div className="narrow-container">
                <div className="text-3xl">What people are saying</div>

                {/*
                <blockquote className="pt-16">
                    <p>I can experiment and visualize my data easily</p>
                    <p className="author">Khursani, Fullstack Software Engineer at Vase</p>
                </blockquote>
                */}

                <blockquote className="pt-16">
                    <p>An invaluable tool for prototyping with JavaScript. As a web developer, using JavaScript all the time, this is a game changer.</p>
                    <p className="author">Paolo Leopardi</p>
                </blockquote>

                <blockquote className="pt-16">
                    <p>Amazing product that enables analysis and visualization while using JavaScript</p>
                    <p className="author">Brian Enochson, CTO at The Java Experts</p>
                </blockquote>

                <blockquote className="pt-16">
                    <p>Quick and easy way to get up and running in JavaScript, love the ability to visualize results as you code</p>
                    <p className="author">Peter Srajer, Senior Data Scientist - Geospatial at Wellsite Masters</p>
                </blockquote>

                <blockquote className="pt-16">
                    <p>The key is that it "just works" right out of the install.</p>
                    <p className="author">Matthew Abts, CPA</p>
                </blockquote>

                {/*
                <blockquote className="pt-16">
                    <p>Data-Forge Notebook is making JavaScript development for financial technology software solutions seamless and straightforward.  It's shortened my development timeline and given me more confidence in my custom calculations through the interactive interface</p>
                    <p className="author">Dylan Hall, CTO at Persee Ventures</p>
                </blockquote>
                */}

                <blockquote className="pt-16">
                    <p>No more switching between TypeScript, R and Python when doing data exploration, now I can keep my data extraction, shaping and visualisation all in TypeScript!</p>
                    <p className="author">Eugene Duvenage, Technology and Innovation Specialist</p>
                </blockquote>
            </div>
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
