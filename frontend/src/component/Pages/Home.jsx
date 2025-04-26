import Banner from "../Layout/Banner";
import TopTrending from "../Product/TopTrending";
import FAQ from "../Common/FAQ";
import Collection from "../Product/Collection";
import CategoriesWise from "../Product/CategoriesWise";
import ProductDetails from "../Product/ProductDetails";

const Home = () => {
    return (        
        <>
            <Banner />
            <CategoriesWise />                                 
            <TopTrending />
            <h2 className="text-4xl font-bold">Best Seller</h2>
            <ProductDetails />
            <FAQ />
            <Collection />            
        </>
    )
}

export default Home;