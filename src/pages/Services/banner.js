import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="service-widget mb-50">
            <div className="widget-title-box mb-30">
                <h3 className="widget-title">Need more info?</h3>
            </div>

            <div className="ser-form-btn text-center mt-40">
                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Contact us</Link>
            </div>
        </div>
    );
}

export default Banner;