import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import HomeHeader from "../Home/Home/HomeHeader/HomeHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import TermsContent from "./TermsContent";

const Terms = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Terms and Conditions" subtitle="terms-and-conditions" />
            <TermsContent />
            <HomeTwoFooter />
        </>
    );
}

export default Terms;