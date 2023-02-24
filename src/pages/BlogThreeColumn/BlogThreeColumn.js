import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import BlogThreeColumnArea from './BlogThreeColumnArea/BlogThreeColumnArea';

const BlogThreeColumn = () => {
   return (
      <>
         <HomeHeader />
         <CommonPageHeader title="Blog" subtitle="Blog" />
         <BlogThreeColumnArea />
         <HomeTwoFooter />
      </>
   );
};

export default BlogThreeColumn;