import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import PrivacyArea from "./PrivaryArea";

const Privacy = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Privacy Policy" subtitle="privacy-policy" />
            <PrivacyArea />
            <HomeTwoFooter />
        </>
    );
}

export default Privacy;