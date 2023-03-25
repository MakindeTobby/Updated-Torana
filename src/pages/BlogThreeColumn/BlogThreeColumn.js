import React from 'react';
import { Helmet } from 'react-helmet';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import BlogThreeColumnArea from './BlogThreeColumnArea/BlogThreeColumnArea';

const BlogThreeColumn = () => {
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Blog - Torana Care Australia</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/blog" />
            <meta name="description" content="Blog" />
         </Helmet>
         <HomeHeader />
         <CommonPageHeader title="Blog" subtitle="Blog" />
         <BlogThreeColumnArea />
         <HomeTwoFooter />
      </>
   );
};

export default BlogThreeColumn;