

const Testimonial = () => {
    return (
        <div classNameName="testimonial" style={{
            display: 'grid',
            background: 'whitesmoke',
            placeItems: 'center',
            height: 'auto',
            padding: '2rem'
        }}>
            <div><h1>Testimonial</h1></div>
            <div className="testimonial-wrapper">
                <div className="box">
                    <i className="fas fa-quote-left quote"></i>
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div className="content">
                        <div className="info">
                            <div className="name">Alex Smith</div>
                            <div className="job">Designer | Developer</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="image">
                            {/* <Image src={profile1} alt="" className="profile-image" /> */}
                        </div>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-quote-left quote"></i>
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div className="content">
                        <div className="info">
                            <div className="name">Steven Chris</div>
                            <div className="job">YouTuber | Blogger</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="image">
                            {/* <Image src={profile2} alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className="box">
                    <i className="fas fa-quote-left  quote"></i>
                    <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
                    <div className="content">
                        <div className="info">
                            <div className="name">Kristina Bellis</div>
                            <div className="job">Digital marketer</div>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="far fa-star"></i>
                            </div>
                        </div>
                        <div className="image">
                            {/* <Image src={profile3} alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
