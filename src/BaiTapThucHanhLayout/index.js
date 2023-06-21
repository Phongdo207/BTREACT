import Navbar from "./navbar";
import Header from "./header";
import ListItem from "./content";
import Footer from "./footer";

function BTlayout() {
    return (
        <div>
            <Navbar />
            <header className="py-5">
                <Header />
            </header>

            <div className="pt-4">
                <ListItem />
            </div>
            <Footer />
        </div>
    )
}
export default BTlayout;