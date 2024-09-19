import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Blogs() {

    useEffect(()=> {
        try {
          fetchBlogs();
        } catch(error){
          console.log(error)
        }
      },[]);
    
      const [blogs, setBlogs] = useState([]);

      const fetchBlogs = async () => {
        try {
          const result = await axios.get('https://ecis.in/apis/sayahomes/blog/get');
          setBlogs(result.data); // Assuming the API returns blog data
          console.log(result.data);
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <div>
        <div className="w-100 padding blogimg position-relative animate-section5">
          <div className="container-lg">
            <div className="heading mx-auto text-center">
              <h6 className="text-orange">Blogs</h6>
              <h2 className="h1 text-serif mb-0">Catch Up On The Latest Blogs</h2>
            </div>
            <div className="swiper news-slider blogContainer animate">
              <div className="swiper-wrapper">
                {blogs.map((blog) => (
                  <div className="swiper-slide newsBox blogBox" key={blog.id}>
                    <Link to={`/blog-details/${blog.slugurl}`} className="inner h-100">
                      <div className="img-fluid">
                        <img
                          src={`https://www.sayahomes.com/uploads/blog-images/${blog.image}`}
                          alt={blog.heading}
                          className="h-100 object-cover"
                          title={blog.heading}
                        />
                        <div className="date text-white justify-content-between">
                          <small>{blog.date.slice(0,10)}</small>
                          <div className="viewmore">
                            <span className="button stroke bg-white">Read More</span>
                          </div>
                        </div>
                      </div>
                      <article>
                        <h5 className="news-title mt-4">{blog.heading}</h5>
                      </article>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="bottomControls">
                <div className="swiper-button-prev solid"></div>
                <div className="viewmore">
                  <Link to="/blogs" className="button stroke">
                    View All Blogs
                  </Link>
                </div>
                <div className="swiper-button-next solid"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Blogs