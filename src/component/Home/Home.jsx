import Banner from "./Banner";
import TopTrending from "./TopTrending";
import FAQ from "./FAQ";
import Collection from "./Collection";
import CategoriesWise from "./CategoriesWise";

const Login = () => {
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

export default Login;