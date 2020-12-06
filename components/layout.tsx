import { Button, Layout as AntLayout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = AntLayout;

export default function Layout({ children }: any) {
    return (
        <AntLayout>

            <div className="bg-black text-white text-center pt-4 pb-4">
                {/*TODO: Only show this on the main page! */ }
                <div>
                    Sign up with your email address to get the free version of Data-Forge Notebook.
                </div>
                <div>   
                    You can also choose to support the developer and <Link href="/product"><a>purchase Data-Forge Notebook Pro</a></Link>.
                </div>
            </div>

            <Header className="header">
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <img 
                            src="/images/logo.png" 
                            alt="Data-Forge Notebook Logo" 
                            style={{
                                height: "33px",
                            }}
                            />
                        <div className="flex-grow" />
                        <Menu mode="horizontal">
                            <Menu.Item>ABOUT</Menu.Item>
                            <Menu.Item>GIVE SUPPORT</Menu.Item>
                            <Menu.Item><Button ghost>BUY PRO</Button></Menu.Item>
                        </Menu>
                    </div>
                </div>
                
            </Header>
            <Content>
                {children}
            </Content>
            <Footer className="text-center pt-16 pb-16">
                © 2020 Code Capers 
            </Footer>
        </AntLayout>
    );
}