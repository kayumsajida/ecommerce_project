import Banner from "../Layout/Banner";
import TopTrending from "../Product/TopTrending";
import FAQ from "../Common/FAQ";
import Collection from "../Product/Collection";
import CategoriesWise from "../Product/CategoriesWise";

const Home = () => {
    return (        
        <>
            <Banner />
            <CategoriesWise />                                 
            <TopTrending />
            <FAQ />
            <Collection />
        </>
    )
}

export default Home;