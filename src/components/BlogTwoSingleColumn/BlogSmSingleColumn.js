import React from 'react';
import { Link } from 'react-router-dom';

const BlogSmSingleColumn = ({ image, masonry, column, title, content, comment, user, link }) => {
   return (
      <>
         <div className={masonry ? '' : `col-lg-${column} col-md-6`}>
            <article className="postbox post format-image mb-40">
               {/* <div className="postbox__thumb">
                  <Link to={`${link}`}>
                     <img src={`img/blog/b${image}.jpg`} alt="blog img"/>
                  </Link>
               </div> */}
               <div className="postbox__text p-30" style={{ height: "18rem" }}>

                  <h3 className="blog-title blog-title-sm">
                     <Link to={`${link}`}>{title}
                     </Link>
                  </h3>
                  <div className="post-text">
                     <p>{content}</p>
                  </div>
                  <div className="read-more mb-15">
                     <Link to={`${link}`} className="read-more">read more <i className="fas fa-long-arrow-alt-right"></i></Link>
                  </div>
                  <div className="post-meta mb-15">
                     <span><Link to={`${link}`}><i className="far fa-user"></i> {user}</Link></span>
                     <span><Link to={`${link}`}><i className="far fa-comments"></i> {comment}</Link></span>
                  </div>
               </div>
            </article>
         </div>
      </>
   );
};

export default BlogSmSingleColumn;