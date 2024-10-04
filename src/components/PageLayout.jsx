import {Layout} from "antd";
import {Content as AntdContent, Footer as AntdFooter} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider.js";

export default function PageLayout({sidebar:SiderContent ,header: HeaderContent, content: ContentBody, footer: FooterContent}) {

    return (
        <Layout className="h-screen w-screen " width='100vw' height='100vh'  >

            <Sider width="61px"  >
                <SiderContent />
            </Sider>

            <Layout width='calc(100vw - 61px)' className="bg-yellow-100">
                {HeaderContent &&
                    <HeaderContent/>
                }

                <AntdContent className="bg-white">
                    {ContentBody ? <ContentBody/> : 'Default Content'}
                </AntdContent>

                {FooterContent &&
                    <AntdFooter>
                        <FooterContent/>
                    </AntdFooter>
                }
            </Layout>
        </Layout>
    )
}
