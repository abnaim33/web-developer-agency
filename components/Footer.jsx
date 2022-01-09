

const Footer = () => {
    return (
        <div id="footer">

            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum fugit corrupti nesciunt nisi! Iusto ipsa aliquid consequatur a magni rerum facere provident! Asperiores, aperiam placeat molestiae minima distinctio omnis.</p>
                            <div className="social">
                                <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f"></span></a>
                                <a href="#"><span className="fab fa-twitter"></span></a>
                                <a href="https://instagram.com/coding.np"><span className="fab fa-instagram"></span></a>
                                <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube"></span></a>
                            </div>
                        </div>
                    </div>

                    <div className="center box">
                        <h2>Address</h2>
                        <div className="content">
                            <div className="place">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="text">Dhaka,Bangladesh</span>
                            </div>
                            <div className="phone">
                                <span className="fas fa-phone-alt"></span>
                                <span className="text">+8801825583030</span>
                            </div>
                            <div className="email">
                                <span className="fas fa-envelope"></span>
                                <span className="text">md.naimhossen.2222@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required />
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div className="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </footer>


        </div>
    )
}

export default Footer
