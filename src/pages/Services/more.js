import { FaHome, FaWeight, FaWheelchair } from "react-icons/fa";
import { RiHome2Line } from "react-icons/ri";
import { TbMedicalCross, TbPhysotherapist, TbReportMedical, TbSocial, TbWalk, TbWebhook } from "react-icons/tb";
import { Link } from "react-router-dom";

const MoreServices = () => {
    return (

        <div className="service-widget mb-50">
            <div className="widget-title-box mb-30">
                <h3 className="widget-title">More Services</h3>
            </div>
            <div className="more-service-list">
                <ul>
                    <li>
                        <Link to="/community-nursing">
                            <TbReportMedical className="fs-1 text-danger" />
                            <div className="more-service-title">Community Nursing</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/special">
                            <TbMedicalCross className="fs-1 text-danger" />
                            <div className="more-service-title">SPECIALIST BEHAVIOUR SUPPORT</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/social-support">
                            <TbSocial className="fs-1 text-danger" />
                            <div className="more-service-title">SOCIAL SUPPORT AND SERVICES</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/therapeutic">
                            <TbPhysotherapist className="fs-1 text-danger" />
                            <div className="more-service-title">THERAPEUTIC SUPPORT</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/household">
                            <RiHome2Line className="fs-1 text-danger" />
                            <div className="more-service-title">HOUSEHOLD TASK SUPPORT</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/exercise-phy">
                            <TbWalk className="fs-1 text-danger" />
                            <div className="more-service-title">EXERCISE PHYSIOLOGY AND PERSONAL TRAINING</div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>


    );
}

export default MoreServices;