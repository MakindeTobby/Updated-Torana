import { Helmet } from "react-helmet";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import BackgroundContent from "./BackgroundContent";

const Background = () => {
    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Background - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.org.au/background" />
                <meta name="description" content="Background" />
            </Helmet>
            <HomeHeader />
            {/* <CommonPageHeader title="Background" subtitle="Background" /> */}
            <BackgroundContent />

            <HomeTwoFooter />
        </>

    );
}

export default Background;