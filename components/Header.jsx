
// import './header.css'
const Header = () => {
    // const body = document.querySelector("body");
    // const navbar = document.querySelector(".navbar");
    // const menuBtn = document.querySelector(".menu-btn");
    // const cancelBtn = document.querySelector(".cancel-btn");
    const handleMenuBtn = () => {
        // navbar.classList.add("show");
        // menuBtn.classList.add("hide");
        // body.classList.add("disabled");
        document.querySelector(".navbar").classList.add("show");
        document.querySelector(".menu-btn").classList.add("hide");
        document.querySelector("body").classList.add("disabled");
    }
    const handleCancelBtn = () => {
        document.querySelector("body").classList.remove("disabled");
        document.querySelector(".navbar").classList.remove("show");
        document.querySelector(".menu-btn").classList.remove("hide");
    }
    // window.onscroll = ()=>{
    //   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    // }
    return (
        <div className="header">

            <nav className="navbar">
                <div className="content">
                    <div className="logo">
                        <a href="#">Logo</a>
                    </div>
                    <ul className="menu-list">
                        <div className="icon cancel-btn"
                            onClick={handleCancelBtn}>
                            <i className="fas fa-times"></i>
                        </div>
                        <li><a href="#">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                    <div className="icon menu-btn"
                        onClick={handleMenuBtn}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>



            {/* <script>
   
  </script> */}
        </div>

    )
}

export default Header
