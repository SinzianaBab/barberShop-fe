import PageLayout from "../components/PageLayout.jsx";
import { Card } from "antd";

export default function AboutTheBarber() {

    const Content = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="The Barber" src="/src/assets/theBarber.jpg" />}
                >
                    <Card.Meta title="Stefan Gheaur" description="Professional Barber" />
                </Card>
            </div>
        );
    }

    return (
        <PageLayout
            content={Content}
        />
    );
}
