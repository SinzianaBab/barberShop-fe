import { HomeOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider.js";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function SideMenu() {
    const location = useLocation();

    const items = [
        {
            key: '/welcome',
            icon: <HomeOutlined />,
            label: <Link to="/welcome">Home</Link>,
        },
        {
            key: '/aboutTheBarber',
            icon: <InfoCircleOutlined />,
            label: <Link to="/aboutTheBarber">About the barber</Link>,
        },
    ];

    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        setCurrent(location.pathname);
    }, [location.pathname]);

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div id="sider">
            <Sider
                className="sider-menu"
                style={{
                    background: "linear-gradient(120deg, #ffffff 50%, #030712 85%)",
                    color: "white",
                    height: "100vh",
                }}
            >
                {/* Logo Section */}
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                    <img
                        src="src/assets/incercare logo Stefan fara background.png"
                        alt="Logo"
                        className="w-[35px] h-[35px]"
                    />
                </div>

                {/* Menu Section */}
                <Menu
                    className="menu"
                    defaultSelectedKeys={["1"]}
                    selectedKeys={[current]}
                    mode="inline"
                    items={items}
                    onClick={onClick}
                />
            </Sider>
        </div>
    );
}
