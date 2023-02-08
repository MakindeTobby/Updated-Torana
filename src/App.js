import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
// import BlogDetails from './pages/BlogDetails/BlogDetails';
// import BlogLeftSideBar from './pages/BlogLeftSideBar/BlogLeftSideBar';
// import BlogNoSideBar from './pages/BlogNoSideBar/BlogNoSideBar';
// import Blogs from './pages/Blogs/Blogs';
// import BlogThreeColMasonry from './pages/BlogThreeColMasonry/BlogThreeColMasonry';
// import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
// import BlogTwoColumn from './pages/BlogTwoColumn/BlogTwoColumn';
// import BlogTwoColumnMasonry from './pages/BlogTwoColumnMasonry/BlogTwoColumnMasonry';
// import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
// import DoctorsOne from './pages/Doctors/DoctorsOne/DoctorsOne';
// import DoctorsTwo from './pages/Doctors/DoctorsTwo/DoctorsTwo';
// import Home from './pages/Home/Home/Home';
// import HomeThree from './pages/HomeThree/HomeThree';
import HomeTwo from './pages/HomeTwo/HomeTwo';
// import HomeFour from './pages/HomeFour/HomeFour';
// import Login from './pages/Login/Login';
// import PortfolioSlider from './pages/PortfolioSlider/PortfolioSlider';
// import PortfolioThreeCol from './pages/PortfolioThreeCol/PortfolioThreeCol';
// import PortfolioTwoColumn from './pages/PortfolioTwoColumn/PortfolioTwoColumn';
// import Register from './pages/Register/Register';
import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
// import ServicesOne from './pages/Services/ServicesOne/ServicesOne';
import ServicesTwo from './pages/Services/ServicesTwo/ServicesTwo';
// import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
// import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
// import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
// import WishList from './pages/wishList/WishList';
// import HomeFive from './pages/HomeFive/HomeFive';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import CommunityNursing from './pages/Services/CommunityNursing';
import Special from './pages/Services/specialist-behaviour-support';
import SocialSupport from './pages/Services/social-support-and-services';
import Therapeutic from './pages/Services/therapeutic-support';
import Household from './pages/Services/household-task-support';
import ExercisePhy from './pages/Services/exercise-physiology-and-personal-training';
import GroupandCentre from './pages/Services/Group And Centre-Based Activities';
import Specialist from './pages/Services/specialist-support-coordination';
import ComplexHealth from './pages/Services/complex-health-care-support';
import Accomodation from './pages/Services/accommodation-tenancy-assistance';
import AssistiveSuppoert from './pages/Services/assistive-support-and-services';
import CapacityBuilding from './pages/Services/capacity-building-support-and-services';
import GroupShared from './pages/Services/group-shared-living-shared-independent-living-and-respite';
import SuppoertCo from './pages/Services/support-coordination';
import CaldCommunity from './pages/Services/Cald-community-participation';


function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<HomeTwo />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/homeTwo" element={<HomeTwo />} /> */}
            {/* <Route path="/homeThree" element={<HomeThree />} /> */}
            {/* <Route path="/homeFour" element={<HomeFour />} /> */}
            {/* <Route path="/homeFive" element={<HomeFive />} /> */}
            {/* <Route path="/services" element={<ServicesOne />} /> */}

            <Route path="/servicesTwo" element={<ServicesTwo />} />
            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/community-nursing" element={<CommunityNursing />} />
            <Route path="/special" element={<Special />} />
            <Route path="/social-support" element={<SocialSupport />} />
            <Route path="/therapeutic" element={<Therapeutic />} />
            <Route path="/household" element={<Household />} />
            <Route path="/exercise-phy" element={<ExercisePhy />} />
            <Route path="/group-center" element={<GroupandCentre />} />
            <Route path="/specialist-support-coordination" element={<Specialist />} />
            <Route path="/complex-health-care-support" element={<ComplexHealth />} />
            <Route path="/accommodation-tenancy-assistance" element={<Accomodation />} />
            <Route path="/assistive-support-and-services" element={<AssistiveSuppoert />} />
            <Route path="/capacity-building-support-and-services" element={<CapacityBuilding />} />
            <Route path="/group-shared-living-shared-independent-living-and-respite" element={<GroupShared />} />
            <Route path="/support-coordination" element={<SuppoertCo />} />
            <Route path="/cald-community-participation" element={<CaldCommunity />} />

            {/* <Route path="/doctors" element={<DoctorsOne />} /> */}
            {/* <Route path="/doctorsTwo" element={<DoctorsTwo />} /> */}
            <Route path="/covid19-updates" element={<DoctorDetails />} />
            {/* <Route path="/shop" element={<ShopPage />} /> */}
            {/* <Route path="/shopDetails" element={<ShopDetails />} /> */}
            {/* <Route path="/shoppingCart" element={<ShoppingCart />} /> */}
            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
            {/* <Route path="/wishList" element={<WishList />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogLeftSideBar" element={<BlogLeftSideBar />} />
            <Route path="/blogNoSideBar" element={<BlogNoSideBar />} />
            <Route path="/blogTwoColumn" element={<BlogTwoColumn />} />
            <Route path="/blogTwoMasonry" element={<BlogTwoColumnMasonry />} />
            <Route path="/blogThreeColumn" element={<BlogThreeColumn />} />
            <Route path="/blogThreeColMasonry" element={<BlogThreeColMasonry />} />
            <Route path="/blogDetails" element={<BlogDetails />} /> */}
            <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
            <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
            <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
            <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/appoinment" element={<Appointment />} />
            {/* <Route path="/portfolioTwoColumn" element={<PortfolioTwoColumn />} /> */}
            {/* <Route path="/portfolioThreeColumn" element={<PortfolioThreeCol />} /> */}
            {/* <Route path="/portfolioSlider" element={<PortfolioSlider />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
