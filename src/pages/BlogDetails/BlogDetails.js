import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';

const BlogDetails = () => {
   return (
      <>
         <HomeHeader />
         <CommonPageHeader title="Blog Details" subtitle="Details" />
         <BlogDetailsArea />
         <HomeTwoFooter />
      </>
   );
};

export default BlogDetails;