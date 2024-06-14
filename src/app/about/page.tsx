import Carousel from "@/components/layout/Carousel";

export default function About() {
    return (
        <div className="m-6 flex flex-col items-center">
            <div className="hero-content text-center">
                <div className="px-9 md:px-20">
                    <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                    <p className="mb-5">
                        Welcome to our bakery, the first in Istanbul to embrace the future by accepting crypto payments as seamlessly as any other form of payment. We pride ourselves on crafting delicious, high-quality desserts that not only taste amazing but also reflect our commitment to innovation and customer satisfaction.
                    </p>
                    <p className="mb-5">
                        At our bakery, we believe that dessert is more than just a treat; it's a way to bring joy and create memorable moments. Our skilled pastry chefs use only the finest ingredients to create a wide variety of delectable sweets, from classic favorites to modern twists. Whether you're a fan of rich chocolate cakes, creamy cheesecakes, or delicate macarons, we have something to satisfy every craving.
                    </p>
                    <p className="mb-5">
                        By integrating cryptocurrency payments, we aim to provide our customers with greater flexibility and convenience. Whether you're a local resident or a traveler exploring Istanbul, we invite you to experience our unique blend of traditional flavors and cutting-edge technology.
                    </p>
                    <p className="mb-5">
                        We look forward to serving you and making your dessert dreams come true. Visit us and discover why we're the talk of the town. Because at our bakery, we always say,
                        <p className="mb-5 text-2xl font-bold italic mt-2">"But first, dessert."</p>
                    </p>
                </div>
            </div>
            <Carousel />
        </div>
    );
}
