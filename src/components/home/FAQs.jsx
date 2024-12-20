
const FAQs = () => {
    return (
        <div className="my-8">
            <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                <h1 className="p-4 text-4xl font-semibold leadi text-center">FAQs</h1>
            </div>

            <div className=" w-1/2 mx-auto space-y-2">

                <div className="collapse collapse-plus bg-white shadow-xl">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">LushLooks?</div>
                    <div className="collapse-content">
                        <p>LushLooks an E-commerce based website of Beauty Products.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white shadow-xl">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can anybody sale his/her beauty products?</div>
                    <div className="collapse-content">
                        <p>Yes. Anybody can sale beauty products. But you have to register as a seller at first.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-white shadow-xl">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FAQs;