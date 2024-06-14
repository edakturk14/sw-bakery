import Image from 'next/image';

export function Carousel() {
    return (
        <div className="carousel rounded-box">
            <div className="carousel-item">
                <Image
                    src="/images/image1.jpeg"
                    alt="Image1"
                    width={400}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/images/image2.jpeg"
                    alt="Image2"
                    width={400}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/images/image3.jpeg"
                    alt="Image3"
                    width={400}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/images/image4.jpeg"
                    alt="Image4"
                    width={400}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="carousel-item">
                <Image
                    src="/images/image5.jpeg"
                    alt="Image5"
                    width={400}
                    height={256}
                    className="object-cover"
                />
            </div>
        </div>
    );
}

export default Carousel;
