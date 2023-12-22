import { Helmet } from "react-helmet";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import PrivacyArea from "./PrivaryArea";

const Privacy = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy policy - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/privacy-policy" />
                <meta name="description" content="Privacy Policy" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Privacy Policy" subtitle="privacy-policy" />
            <PrivacyArea />
            <HomeTwoFooter />
        </>
    );
}

export default Privacy;