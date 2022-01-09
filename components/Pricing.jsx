import Head from 'next/head'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
const Pricing = () => {
    return (
        <>

            <div className="pricing" id='features'>

                <div className="wrapper">
                    <div className="table basic">
                        <div className="price-section">
                            <div className="price-area">
                                <div className="inner-area">
                                    <span className="text">$</span>
                                    <span className="price">29</span>
                                </div>
                            </div>
                        </div>
                        <div className="package-name"></div>
                        <ul className="features">
                            <li className="icon check">
                                <span>Source code</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check" >
                                <span>100% Responsive Design</span>
                                <CheckIcon />
                            </li>
                            <li className="icon cross">
                                <span>Support 24/7</span>
                                <CloseIcon />
                            </li>
                            <li className="icon cross">

                                <span>Lifetime Revision</span>
                                <CloseIcon />
                            </li>
                        </ul>
                        <div className="btn"><button>Purchase</button></div>
                    </div>
                    <div className="table premium">
                        <div className="ribbon"><span>Recommend</span></div>
                        <div className="price-section">
                            <div className="price-area">
                                <div className="inner-area">
                                    <span className="text">$</span>
                                    <span className="price">59</span>
                                </div>
                            </div>
                        </div>
                        <div className="package-name"></div>
                        <ul className="features">
                            <li className="icon check">
                                <span>Source code</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check">
                                <span>100% Responsive Design</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check">
                                <span>Support 24/7</span>
                                <CheckIcon />
                            </li>
                            <li className="icon cross">
                                <span>Lifetime Revision</span>
                                <CloseIcon />
                            </li>
                        </ul>
                        <div className="btn"><button>Purchase</button></div>
                    </div>
                    <div className="table ultimate">
                        <div className="price-section">
                            <div className="price-area">
                                <div className="inner-area">
                                    <span className="text">$</span>
                                    <span className="price">99</span>
                                </div>
                            </div>
                        </div>
                        <div className="package-name"></div>
                        <ul className="features">
                            <li className="icon check">
                                <span>Source code</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check">
                                <span>100% Responsive Design</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check">
                                <span>Support 24/7</span>
                                <CheckIcon />
                            </li>
                            <li className="icon check">
                                <span>Lifetime Revision</span>
                                <CheckIcon />
                            </li>
                        </ul>
                        <div className="btn"><button>Purchase</button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing
