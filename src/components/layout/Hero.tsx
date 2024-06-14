import Link from "next/link";

const img = 'https://us.123rf.com/450wm/meykitchen/meykitchen2307/meykitchen230702457/208243101-cupcake-assortment-in-the-box-professional-advertising-food-photography.jpg?ver=6'

export function Hero() {
    return (
        <div className="hero" style={{ height: '500px', backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">But first Dessert.</h1>
                    <p className="mb-5">First bakery in Istanbul to accept crypto payments with the ease of any other.</p>
                    <Link href="/menu" className="btn btn-primary">View menu</Link>
                </div>
            </div>
        </div>
    );
}
