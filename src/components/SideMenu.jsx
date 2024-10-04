import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons"; // Import necessary icons
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider.js";
import {Link} from "react-router-dom";

export default function SideMenu() {
    const items = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: <Link to="/welcome">Home</Link>,
        },
        {
            key: '2',
            icon: <InfoCircleOutlined />,
            label: <Link to="/aboutTheBarber">About the barber</Link>,
        }
    ];

    return (
        <div id="sider">
            <Sider
                className="sider-menu"
                style={{
                    background: "linear-gradient(180deg, #14579C 0%, #071E36 100%)",
                    color: 'white',
                    height: '100vh'
                }}
            >
                <div style={{ textAlign: 'center', padding: '16px 0' }}>
                    <img src="https://img.freepik.com/free-vector/barber-tools-vector-illustration-scissors-shaving-razor-pole-ribbon-with-text-sample_74855-10555.jpg?ga=GA1.1.1128757937.1724402617&semt=ais_hybrid" alt="Logo" className="w-[35px] h-[35px]" />
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}

                    style={{
                        background: 'transparent',
                        color: 'white',
                    }}
                />
            </Sider>
        </div>
    );
}
