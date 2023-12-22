import { Helmet } from "react-helmet";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import CareerArea from "./CareerArea";

const Career = () => {
    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Career - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/career" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Career" subtitle="career" />
            <CareerArea />
            <HomeTwoFooter />
        </>
    );
}

export default Career;