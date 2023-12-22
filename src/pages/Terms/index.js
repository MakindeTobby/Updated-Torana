import { Helmet } from "react-helmet";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import TermsContent from "./TermsContent";

const Terms = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Terms and Conditions - Torana Care Australia</title>
                <link rel="canonical" href="https://toranacareaustralia.com.au/terms-and-conditions" />
                <meta name="description" content="Terms and Condition" />
            </Helmet>
            <HomeHeader />
            <CommonPageHeader title="Terms and Conditions" subtitle="terms-and-conditions" />
            <TermsContent />
            <HomeTwoFooter />
        </>
    );
}

export default Terms;