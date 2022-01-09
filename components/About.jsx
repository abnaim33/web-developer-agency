import Image from "next/image"
import aboutPic from '../images/aboutPic.svg'
import google from '../images/google.jpg'
import facebook from '../images/facebook.jpg'
import amazon from '../images/amazon.png'
import twitter from '../images/twitter.png'
import slack from '../images/slack.png'


const About = () => {
    return (
        <div className="about" id="about">
            <div className="title"><h2>We have work with</h2></div>
            <div className="companies">
                <div>
                    <Image src={google} alt="" />
                </div>
                <div>
                    <Image src={facebook} alt="" />
                </div>
                <div>
                    <Image src={amazon} alt="" />
                </div>
                <div>
                    <Image src={twitter} alt="" />
                </div>
                <div>
                    <Image src={slack} alt="" />
                </div>
            </div>
            <div className="container">
                <div>
                    <Image src={aboutPic} alt="about" />
                </div>
                <div>
                    <h1>Get instant alert on your inbox</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, asperiores. Eaque, maiores! Accusantium harum fuga corrupti quos rerum deleniti aliquam.</p>

                    <div className="search-container">
                        <form action="">
                            <input type="text" placeholder="Email address" />
                            <button type="submit">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default About
