import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import CareerArea from "./CareerArea";

const Career = () => {
    return (

        <>
            <HomeHeader />
            <CommonPageHeader title="Career" subtitle="career" />
            <CareerArea />
            <HomeTwoFooter />
        </>
    );
}

export default Career;