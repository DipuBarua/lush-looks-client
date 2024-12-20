import Banner from "../components/home/Banner";
import FAQs from "../components/home/FAQs";
import Testimonials from "../components/home/Testimonials";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className=" min-h-screen ">
            <Banner></Banner>
            love from home
            <Testimonials></Testimonials>
            <FAQs></FAQs>

            <div className=" my-8">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                    <h1 className="p-4 text-4xl font-semibold leadi text-center">Contact With Us</h1>
                </div>
                <Contact />
            </div>

        </div>
    );
};

export default Home;