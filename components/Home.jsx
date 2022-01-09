import Image from 'next/image'
import homePic from '../images/homePic.svg'

const HomePage = () => {
    return (
        <div className="home">
            <div className='home-container'>

                <div className='home-left'>
                    <div>
                        <h1 className='home-title'>The best way <br /> to get your dream website.</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi incidunt corporis eveniet necessitatibus laudantium.</p>

                    <div>
                        <button>Get Started</button>
                        <button>See a Demo</button>
                    </div>
                </div>


                <div className='home-right'>
                    <Image src={homePic} alt="home" />
                </div>
            </div>

        </div>
    )
}

export default HomePage
