import { Layout as AntLayout, Menu } from "antd";
import styles from '../styles/Home.module.css'

const { Header, Content, Footer } = AntLayout;

export default function Layout({ children }: any) {
    return (
        <AntLayout>
            <Header>
                <div className="flex flex-col">
                    <div>
                        Message
                    </div>
                    <div className="flex flex-row items-center">
                        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                        <div className="flex-grow" />
                        <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </div>
                </div>
                
            </Header>
            <Content style={{ padding: '0 50px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </AntLayout>
    );
}