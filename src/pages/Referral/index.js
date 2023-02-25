import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";

const Referral = () => {
    return (
        <>
            <HomeHeader />

            <div className="d-flex justify-content-center w-100">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBc30W7rFei4V5JgBC0Ua1ShyRFDH8R6G_6umo3JFpphnRiw/viewform?embedded=true" width={"100%"} height={3789} className="overfow-hidden" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>

            </div>
            <HomeTwoFooter />
        </>

    );
}

export default Referral;