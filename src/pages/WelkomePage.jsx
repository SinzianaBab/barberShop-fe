import PageLayout from "../components/PageLayout.jsx";
import SideMenu from "../components/SideMenu.jsx";

export default function WelcomePage() {

    const Content = () => {
        return (
            <div>
                <p>Merge!!</p>
            </div>
        )
    }

    return (
        <PageLayout
            content={Content}
        />
    );
}