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
const Career = lazy(() => import('./pages/Career'));


function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <Suspense fallback={<Fallback />}>
            <ScrollTop />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/services" element={<Services />} />
              <Route exact path="/career" element={<Career />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/privacy-policy" element={<Privacy />} />
              <Route exact path="/terms-and-conditions" element={<Terms />} />
              <Route exact path="/background" element={<Background />} />
              {/* <Route path="/servicesDetails" element={<ServicesDetails />} /> */}
              <Route exact path="/community-nursing" element={<CommunityNursing />} />
              <Route exact path="/special" element={<Special />} />
              <Route exact path="/social-support" element={<SocialSupport />} />
              <Route exact path="/therapeutic" element={<Therapeutic />} />
              <Route exact path="/household" element={<Household />} />
              <Route exact path="/exercise-phy" element={<ExercisePhy />} />
              <Route exact path="/group-center" element={<GroupandCentre />} />
              <Route exact path="/specialist-support-coordination" element={<Specialist />} />
              <Route exact path="/complex-health-care-support" element={<ComplexHealth />} />
              <Route exact path="/accommodation-tenancy-assistance" element={<Accomodation />} />
              <Route exact path="/assistive-support-and-services" element={<AssistiveSuppoert />} />
              <Route exact path="/capacity-building-support-and-services" element={<CapacityBuilding />} />
              <Route exact path="/group-shared-living-shared-independent-living-and-respite" element={<GroupShared />} />
              <Route exact path="/support-coordination" element={<SuppoertCo />} />
              <Route exact path="/cald-community-participation" element={<CaldCommunity />} />
              <Route exact path="/covid19-updates" element={<DoctorDetails />} />
              <Route exact path="/blog" element={<BlogThreeColumn />} />
              <Route exact path="/blogDetails" element={<BlogDetails />} />
              <Route exact path="/positive-thinking" element={<PositiveThinking />} />
              <Route exact path="/appreciate-you" element={<AppreciateYou />} />
              <Route exact path="/living-life-beyond-limits" element={<LivingLife />} />
              <Route exact path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
              <Route exact path="/blogDetailsAudio" element={<DetailsAudio />} />
              <Route exact path="/blogDetailsVideo" element={<DetailsVideo />} />
              <Route exact path="/blogDetailsGallery" element={<DetailsGallery />} />
              <Route exact path="/appoinment" element={<Appointment />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/referral-page" element={<Referral />} />
              <Route exact path="/thank-you" element={<ThankYou />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
