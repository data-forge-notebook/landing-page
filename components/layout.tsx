import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }: any) {
    return (
        <div>
            <Head>
                <title>Data-Forge Notebook: Exploratory coding and visualization for JS/TS</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto" rel="stylesheet"></link>
            </Head>

            <div className="message flex flex-col items-center justify-center bg-black text-sm text-center p-4">
                {/*TODO: Only show this on the main page! */ }
                <div>
                    Sign up with your email address to get the free version of Data-Forge Notebook.
                </div>
                <div>   
                    You can also choose to support the developer and <Link href="/product"><a>purchase Data-Forge Notebook Pro</a></Link>.
                </div>
            </div>

            <header>
                <nav className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <img 
                            className="logo"
                            src="images/logo.png" 
                            alt="Data-Forge Notebook Logo" 
                            />
                        <div className="flex-grow" />
                        <a href="/#about">About</a>
                        <Link href="https://github.com/data-forge-notebook/wiki/wiki/give-support"><a target="_blank">Give support</a></Link>
                        <Link href="/product"><a className="action-button">Buy Pro</a></Link>
                    </div>
                </nav>                
            </header>

            <main>
                {children}
            </main>

            <footer className="text-center pt-16 pb-16">
                © 2020 Code Capers 
            </footer>
        </div>
    );
}