import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function DefaultLayout({children}){
    return(
        <>
            <Header />
                <main>
                    {children}
                </main>
            <Footer />
        </>
    )
}

export default DefaultLayout