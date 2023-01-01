import './main.css';
import 'boxicons'
import Header from "../blog-page/header/Header";
import Welcome from "../blog-page/welcome/Welcome";
import Posts from "../blog-page/posts/Posts";
import Footer from "../home-page/footer/Footer";

const Blog = () => {

    return (
        <div className="Main">
            <Header/>
            <Welcome/>
            <Posts/>
            <Footer/>
        </div>
    );
};

export default Blog;