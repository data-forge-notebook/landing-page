import Head from "next/head";
import Link from "next/link";

export interface ILayoutProps {
    
    //
    // Show the message at the top.
    //
    showMessage?: boolean,

    //
    // Children of the layout.
    //
    children?: any,
}

export default function Layout({ showMessage, children }: ILayoutProps) {
    return (
        <div>
            <Head>
                <title>Data-Forge Notebook: Exploratory coding and visualization for JS/TS</title>
                <link rel="icon" type="image/png" href="/favicon.png"></link>
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans|Roboto" rel="stylesheet"></link>

                {/* Google Analytics Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                            ga('create', 'UA-63144240-3', 'auto');
                            ga('send', 'pageview');
                        `,
                    }}
                    />
                <script async src='https://www.google-analytics.com/analytics.js'></script>

                {/* Facebook Pixel Code */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1131902396995880');
                            fbq('track', 'PageView');
                        `,
                    }}
                    />
                <noscript>
                    <img height="1" width="1" style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1131902396995880&ev=PageView&noscript=1"
                        />
                </noscript>
                {/* End Facebook Pixel Code */}

                {/* Start Mixpanel */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
                            0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");
                            for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?
                            MIXPANEL_CUSTOM_LIB_URL:"file:"===c.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";d=c.getElementsByTagName("script")[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);
                            mixpanel.init("c072a7aa2eb2f4244856ea38644cff92");
                        `,
                    }}
                    />
                {/* End Mixpanel */}

            </Head>

            {showMessage 
                && <div className="message flex flex-col items-center justify-center bg-black text-sm text-center p-4">
                    {/*TODO: Only show this on the main page! */ }
                    <div>
                        Sign up with your email address to get the free version of Data-Forge Notebook.
                    </div>
                    <div>   
                        You can also choose to support the developer and <Link href="/product"><a>purchase Data-Forge Notebook Pro</a></Link>.
                    </div>
                </div>
            }

            <header>
                <nav className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <Link href="/">
                            <a>
                                <img 
                                    className="logo"
                                    src="images/logo.png" 
                                    alt="Data-Forge Notebook Logo" 
                                    />
                            </a>
                        </Link>
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