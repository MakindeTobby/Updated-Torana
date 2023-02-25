import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
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
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import Appointment from './pages/Appointment/Appointment';
import Contact from './pages/Contact/Contact';
import Career from './pages/Career';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
// import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';
import Fallback from './components/Fallback';
import Background from './pages/Background';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import ThankYou from './pages/ThankYou/ThankYouPage';
import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import PositiveThinking from './pages/BlogDetails/Positive-thinking';
import AppreciateYou from './pages/BlogDetails/Appreciate-you';
import LivingLife from './pages/BlogDetails/Living-Life';
import Referral from './pages/Referral';

const Home = lazy(() => import('./pages/HomeTwo/HomeTwo'));
const Services = lazy(() => import('./pages/Services/ServicesTwo/ServicesTwo'));
const About = lazy(() => import('./pages/AboutUs/AboutUs'));

function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <ScrollTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/career" element={<Career />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-and-conditions" element={<Terms />} />
              <Route path="/background" element={<Background />} />
              {/* <Route path="/servicesDetails" element={<ServicesDetails />} /> */}
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
              <Route path="/covid19-updates" element={<DoctorDetails />} />
              <Route path="/blog" element={<BlogThreeColumn />} />
              <Route path="/blogDetails" element={<BlogDetails />} />
              <Route path="/positive-thinking" element={<PositiveThinking />} />
              <Route path="/appreciate-you" element={<AppreciateYou />} />
              <Route path="/living-life-beyond-limits" element={<LivingLife />} />
              <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
              <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
              <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
              <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
              <Route path="/appoinment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/referral-page" element={<Referral />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
