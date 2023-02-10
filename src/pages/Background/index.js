import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import BackgroundContent from "./BackgroundContent";

const Background = () => {
    return (

        <>
            <HomeHeader />
            {/* <CommonPageHeader title="Background" subtitle="Background" /> */}
            <BackgroundContent />

            <HomeTwoFooter />
        </>

    );
}

export default Background;