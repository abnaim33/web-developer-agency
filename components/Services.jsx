import Image from "next/image"
import cardImage from '../images/cardImage.png'

const Services = () => {
    return (
        <div className="services" id="services">
            <div className="services-title">
                <h1>We provide the best service for you</h1>
            </div>
            <div className="container">
                <div className="card">
                    <div>
                        <Image src={cardImage} alt="card" />
                    </div>
                    <div>
                        <h3>this is title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda harum fugit rerum tempore amet.</p>
                    </div>
                    <div>
                        <button>Buy</button>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Image src={cardImage} alt="card" />
                    </div>
                    <div>
                        <h3>this is title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda harum fugit rerum tempore amet.</p>
                    </div>
                    <div>
                        <button>Buy</button>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <Image src={cardImage} alt="card" />
                    </div>
                    <div>
                        <h3>this is title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium assumenda harum fugit rerum tempore amet.</p>
                    </div>
                    <div>
                        <button>Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
