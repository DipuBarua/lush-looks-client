import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className=" min-h-screen my-9 font-semibold">
            <Helmet>
                <title>About | LushLooks</title>
            </Helmet>

            all about here...
            <p> This assignment aims to assess your ability to develop a small Size e-commerce application using the
                MERN (MongoDB, Express.js, React.js, Node.js) stack. You need to implement Firebase Authentication,
                JWT-based authorization, and user role management while designing a responsive front-end and handling
                back-end logic</p>
        </div>
    );
};

export default About;