import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const Contact = () => {
    return (
        // mambaUI

        <section className="py-6 bg-pink-100">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x border">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <FaLocationDot className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>Fake address, 9999 City</span>
                        </p>
                        <p className="flex items-center">
                            <FaPhone className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>123456789</span>
                        </p>
                        <p className="flex items-center">
                            <TbMailFilled className="w-5 h-5 mr-2 sm:mr-6" />
                            <span>contact@business.com</span>
                        </p>
                    </div>
                </div>
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800 p-2" />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800 p-2"></textarea>
                    </label>
                    <button type="submit" className="px-8 py-3 text-lg rounded btn btn-secondary">Send</button>
                </form>
            </div>
        </section>

    );
};

export default Contact;