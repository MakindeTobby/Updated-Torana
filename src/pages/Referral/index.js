import { Helmet } from "react-helmet";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";

const Referral = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Refer a Client - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/referral-page" />
            </Helmet>
            <HomeHeader />


            <div>

                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdBc30W7rFei4V5JgBC0Ua1ShyRFDH8R6G_6umo3JFpphnRiw/viewform?embedded=true" width={"100%"} height={3789} className="overfow-hidden" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
            <HomeTwoFooter />
        </>

    );
}

export default Referral;