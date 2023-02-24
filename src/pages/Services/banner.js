import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="service-widget mb-50 border-0 p-0">
            <div className="banner-widget">
                <Link to="/contact">
                    <img src="img/services/services-banner.png" alt="" />
                </Link>
            </div>
        </div>
    );
}

export default Banner;