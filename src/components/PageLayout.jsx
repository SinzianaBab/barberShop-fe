import { Layout } from "antd";
import { Content as AntdContent, Footer as AntdFooter } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider.js";
import SideMenu from "./SideMenu.jsx";
import PageFooter from "./PageFooter.jsx";


export default function PageLayout({ sidebar: SiderContent = SideMenu, header: HeaderContent, content: ContentBody, footer: FooterContent = PageFooter }) {

    return (
        <Layout className="h-screen w-screen" style={{ height: '100vh', width: '100vw' }}>
            <Sider width="61px">
                <SiderContent />
            </Sider>

            <Layout style={{ backgroundColor: '#030712', width: 'calc(100vw - 61px)' }}>
                {HeaderContent &&
                    <HeaderContent style={{ backgroundColor: 'black' }} />
                }

                <AntdContent className="bg-black" style={{ padding: '20px', minHeight: 'calc(100vh - 130px)' }}>
                    {ContentBody ? <ContentBody /> : 'Default Content'}
                </AntdContent>

                {FooterContent &&
                    <AntdFooter style={{ backgroundColor: 'transparent', color: 'white' }}>
                        <FooterContent />
                    </AntdFooter>
                }
            </Layout>
        </Layout>
    );
}
