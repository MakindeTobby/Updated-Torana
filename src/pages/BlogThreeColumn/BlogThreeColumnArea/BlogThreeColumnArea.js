import React from 'react';
import BlogPaginationActiveTwo from '../../../components/blogPaginationActiveTwo/BlogPaginationActiveTwo';
import BlogSmSingleColumn from '../../../components/BlogTwoSingleColumn/BlogSmSingleColumn';

const BlogThreeColumnArea = () => {
   return (
      <>
         <section className="blog-area pt-100 pb-60">
            <div className="container">
               <div className="row">

                  <BlogSmSingleColumn image="1" column="4" title="Positve Thinking a powerful act" content="Life can be hard especially when we are faced with multiple health 
                  challenges that attack our bodies. The worse of it all is knowing that

"
                     comment="No Comments"
                     user="December 15, 2020."
                     link="/positive-thinking"
                  />
                  <BlogSmSingleColumn image="2" column="4" title="Appreciate You"

                     content="Being alive comes with lots of challenges. Every individual, both Able or Disable face difficulties. Some challenges are physical, but others may not be physical.

                   "
                     comment="No Comments"
                     user="August 11, 2020 "
                     link="/appreciate-you"
                  />
                  <BlogSmSingleColumn image="3" column="4" title="Living Life Beyond Limits"

                     content="Life can be very challenging when you have a disability. Sometimes you may feel like being alive is to no good. For many, there are
                  "
                     comment="No Comments"
                     user="August 13, 2020 "
                     link="/living-life-beyond-limits"
                  />


               </div>

               <BlogPaginationActiveTwo />

            </div>
         </section>
      </>
   );
};

export default BlogThreeColumnArea;