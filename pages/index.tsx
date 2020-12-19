import * as React from "react";
import Link from "next/link"
import Layout from '../components/layout'
import classNames from "classnames";

function ZoomableImage({ src, width }: { src: string, width?: number }) {
    return (
        <div 
            className="zoomable-image"
            style={{
                width: width,
            }}
            >
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

export default class Home extends React.Component<{}, { show: boolean, pulse: boolean }> {

    constructor(props: {}) {
        super(props);

        this.state = {
            show: false,
            pulse: false,
        };
    }

    componentDidMount() { 
        setTimeout(
            () => {
                this.setState({
                    show: true,
                })
            }, 
            15000
        );

        let numPulses = 4;

        const doPulse = () => {
            setTimeout(() => {
                this.setState({
                    pulse: true,
                });
    
                setTimeout(() => {
                    this.setState({
                        pulse: false,
                    });
                    numPulses -= 1;
    
                    if (numPulses > 0) {
                        doPulse();
                    }
                }, 2000);
            }, 5000);
        }
    
        doPulse();
    }

    render() {
        return (
            <Layout showMessage>
                <div className="relative">
                    <section className="blue pb-16">
                        <div className="narrow-container flex flex-col items-center">
                            <img className="logo" src="images/logo.png" alt="Data-Forge Notebook logo" />
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
                        <div className="wide-container flex flex-col items-center md:flex-row">
                            <div className="flex-grow pr-4">
                                <p className="text-2xl text-black">Want to do visual prototyping and exploratory data analysis?</p>
                                <p className="mt-2 text-xl text-gray-500">But you need to work in JavaScript</p>
                            </div>

                            <div className="mt-4 md:mt-0">
                                <ZoomableImage
                                    src="images/screenshots/Screenshot_1.png"
                                    width={300}
                                    />
                            </div>                
                        </div>

                        <div className="wide-container flex flex-col items-center md:flex-row mt-10">

                            <div className="hidden md:flex">
                                <ZoomableImage
                                    src="images/screenshots/Screenshot_2.png"
                                    width={300}
                                    />
                            </div>

                            <div className="flex-grow pl-4">
                                <p className="text-2xl text-black">Love the idea of Notebook-style or literate programing?</p>
                                <p className="mt-2 text-xl text-gray-500">But your production environment is JavaScript</p>
                            </div>

                            <div className="mt-4 md:mt-0 md:hidden">
                                <ZoomableImage
                                    src="images/screenshots/Screenshot_2.png"
                                    width={300}
                                    />
                            </div>
                        </div>

                        <div className="wide-container flex flex-col items-center md:flex-row     mt-10">
                            <div className="flex-grow pr-4">
                                <p className="text-2xl text-black">Learning JavaScript?</p>
                                <p className="mt-2 text-xl text-gray-500">Data-Forge Notebook offers a friendly and forgiving environment that includes Node.js, automatically installs npm modules, has zero configuration and just works.</p>
                                <p className="mt-2 text-xl text-gray-500">Just fire it up and start coding</p>
                            </div>

                            <div className="mt-4 md:mt-0">
                                <ZoomableImage
                                    src="images/screenshots/Screenshot_3.png"
                                    width={300}
                                    />
                            </div>
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

                    <section className="blue pt-16 pb-16">
                        <div className="narrow-container flex flex-col items-center text-xl">
                            <div className="logo">
                                <img src="images/logo.png" alt="Data-Forge Notebook logo" />
                            </div>
                        
                            <p className="mt-3">Convenient and accessible. Like a REPL on steroids.</p>
                            <p className="mt-2">Live visualizations as you code</p>
                            <p className="mt-2">Export to runnable Node.js code and other formats</p>

                            <Link href="/product"><a className="action-button">Buy Data-Forge Notebook Pro!</a></Link>

                            <ZoomableImage
                                src="images/screenshots/Main.png" 
                                />

                        </div>
                    </section>    

                    <section className="about white pt-16 pb-16" id="about">
                        <div className="narrow-container text-left">
                            <div className="text-3xl">About Data-Forge Notebook</div>
                            <div className="mt-4">
                                <p>Data-Forge Notebook is a desktop application for Windows, Mac and Linux.</p>
                                <p>Prototype JavaScript code in a highly visual fashion.</p>
                                <p>It makes data transformation, analysis and visualization a breeze.</p>
                                <p>
                                    Own Data-Forge Notebook Pro version 1 (and upgrades) for a one off payment of $50 USD. 
                                    You may install it on as many computers as you like (although you can't share your licence key with others).
                                </p>
                                <p>Don't be tied to someone's hosted solution, get the desktop application: maintain privacy for your code and data, work off-line whenever you want.</p>

                                <div className="text-xl text-bold">Free features</div>
                                <ul>
                                    <li>
                                        Create JavaScript notebooks
                                    </li>
                                    <li>
                                        Code using the latest JavaScript features
                                    </li>
                                    <li>
                                        Full language support, anything you can do in Node.js you can also do in Data-Forge Notebook (but with live visualizations!)
                                    </li>
                                    <li>
                                        Zero configuration, just install and start coding
                                    </li>
                                    <li>
                                        Visualize JavaScript & JSON data, tabular data, charts, geographic data and more
                                    </li>
                                    <li>
                                        Node.js v12 is included, no separate download, setup or installation is required
                                    </li>
                                    <li>
                                        Npm modules are automatically installed as you type require and import statements
                                    </li>
                                    <li>
                                        Reuse your own Node.js code modules
                                    </li>
                                    <li>
                                        Supports various data formats and databases
                                    </li>
                                    <li>
                                        Direct access to your local file system for loading and saving data
                                    </li>
                                    <li>
                                        Easily plot charts from your data
                                    </li>
                                    <li>
                                        Visualize maps and geo data
                                    </li>
                                    <li>
                                        Numerous example notebooks to help you get started
                                    </li>
                                </ul>

                                <div className="text-xl text-bold">Pro features</div>
                                <ul>
                                    <li>
                                        As above; plus...
                                    </li>
                        
                                    <li>
                                        Create TypeScript notebooks and code using the TypeScript language
                                    </li>
                                    <li>
                                        Expanded memory limits, access up to 10GB from your notebooks
                                    </li>
                                    <li>
                                        Export to various formats:
                                        <ul>
                                            <li>
                                                Web or markdown - host your notebooks on any server or include them in your blog
                                            </li>
                                            <li>
                                                Single code file - export your notebook as runnable JavaScript or TypeScript code
                                            </li>
                                            <li>
                                                Node.js - export as a production ready Node.js project, complete with build pipeline for ES Next (using Babel) or TypeScript.
                                            </li>
                                            <li>
                                                PNG or PDF files - great for printing student handouts
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Save images of individual outputs (charts, geo, tables, etc) - great for creating graphics for your blog
                                    </li>
                                    <li>
                                        Export cell outputs to data files
                                    </li>
                                    <li>
                                        Portable versions of the application (delivery in a zip/tar file).
                                    </li>
                                    <li>
                                        Built-in Node.js version manager.
                                    </li>
                                    <li>
                                        Built-in npm package manager and package search.
                                    </li>
                                </ul>

                                <p>
                                    <a target="_blank" href="https://wiki.data-forge-notebook.com/road-map">See the road map for future plans!</a>
                                </p>

                                <p><a href="mailto:support@data-forge-notebook.com" target="_blank" >Please email</a> and let me know which future features are important to you!</p>

                                <p>
                                    Want to know how it's different to Jupyter Notebook + IJavaScript? 
                                    <a href="https://github.com/data-forge-notebook/wiki/wiki/differences-to-ijavascript" target="_blank">Read this</a>
                                </p>

                                <p>
                                    Decide later that it isn't for you? Let me know within 30 days and you'll get a full refund.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="about white pt-16 pb-16">
                        <div className="narrow-container">

                            <div className="text-3xl">About the developer</div>

                            <p>
                                Data-Forge Notebook is bought to you by <a target="_blank" href="https://www.codecapers.com.au">Ashley Davis</a>,
                                creator of <a target="_blank" href="http://www.data-forge-js.com">Data-Forge</a> and author of <a target="_blank" href="http://bit.ly/2t2cJu2">Data Wrangling with JavaScript</a> and <a target="_blank" href="http://bit.ly/2o0aDsP">Bootstrapping Microservices</a>.
                            </p>

                            <div>
                                <div className="profile-image">
                                    <img src="images/New-reduced.jpg" alt="Ashley Davis" />
                                </div>
                                <blockquote className="pt-4">
                                    <p>I always kickstart my JavaScript coding with Data-Forge Notebook. I can see visual results immediately while I'm coding and it makes it easy to understand what's going on in the code.</p>
                                    <p className="author">Ashley Davis, Developer of Data-Forge Notebook</p>
                                </blockquote>
                            </div>

                        </div>
                    </section>        

                    <section className="blue pt-16">
                        <div className="narrow-container flex flex-col items-center">
                            <img className="logo" src="images/logo.png" alt="Data-Forge Notebook logo" />
                            <div className="text-3xl">
                                Exploratory coding and data analysis for JavaScript and TypeScript
                            </div>
                            <Link href="/product"><a className="action-button">Buy Data-Forge Notebook Pro!</a></Link>
                            <p>Want to donate to, support or sponsor Data-Forge Notebook?</p>
                            <p>Have questions?</p>
                            <p>Looking for a student discount or volume licencing?</p>
                            <p>Email on <a href="mailto:support@data-forge-notebook.com" target="_blank">support@data-forge-notebook.com</a></p>
                            <p>Follow on Twitter at <a href="https://twitter.com/ashleydavis75" target="_blank">@ashleydavis75</a>.</p>
                        </div>
                    </section>

                    <div 
                        id="signup"
                        className={classNames("shadow rounded p-1 bg-white border-2 border-gray-500 border-solid", {
                            show: this.state.show,
                            pulse: this.state.pulse,
                        })}
                        onClick={() => {
                            this.setState({
                                show: !this.state.show,
                            });
                        }}
                        >
                        {/* <!-- Begin Mailchimp Signup Form --> */}
                        <div id="mc_embed_signup">
                            <form 
                                action="https://data-forge-notebook.us18.list-manage.com/subscribe/post?u=f0220333a13f2b0e980819dbe&amp;id=c526152b6e" 
                                method="post" 
                                id="mc-embedded-subscribe-form" 
                                name="mc-embedded-subscribe-form" 
                                className="validate" 
                                target="_blank" 
                                noValidate
                                style={{ padding: "5px", }}
                                >
                                <div id="mc_embed_signup_scroll">
                                <label htmlFor="mce-EMAIL" style={{ marginTop: "3px" }}>Get Data-Forge Notebook Free</label>
                                <div className="mb-2">Stay up to date with new announcements, resources and special offers</div>
                                <input 
                                    type="email" 
                                    defaultValue="" 
                                    name="EMAIL" 
                                    className="email" 
                                    id="mce-EMAIL" 
                                    placeholder="enter your email address" 
                                    required 
                                    style={{ width: "90%" }} 
                                    onClick={evt => {
                                        evt.stopPropagation();
                                    }}
                                    />
                                {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                <div style={{ position: "absolute", left: "-5000px", }}>
                                    <input type="text" name="b_f0220333a13f2b0e980819dbe_c526152b6e" tabIndex={-1} value="" readOnly />
                                </div>
                                <div className="clear">
                                    <input 
                                        type="submit" 
                                        defaultValue="Get DFN Free" 
                                        name="subscribe" 
                                        id="mc-embedded-subscribe" 
                                        className="button" 
                                        style={{ paddingLeft: "1em", paddingRight: "1em", width: "auto", height: "auto" }} 
                                        onClick={evt => {
                                            var email = evt.currentTarget.value;
                                            if (email) {
                                                email = email.trim();
                                            }
                                            console.log("Email: " + email); //fio:
                                            //todo:
                                            // if (email) {
                                            //     mixpanel.alias(email);
                                            //     mixpanel.people.set({
                                            //         $email: email,
                                            //     });
                                            //     mixpanel.track("Web-Subscribed", { email });
                                            // }
                                        }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* <!--End mc_embed_signup--> */}
                    </div>
                </div>
            </Layout>
        );
    }
}
