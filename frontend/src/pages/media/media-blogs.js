import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import FooterAll from '../../components/footer2'
import { Link } from 'react-router-dom'
import axios from 'axios';


function MediaBlogs() {

  useEffect(()=> {
    try {
      fetchBlogs();
    } catch(error){
      console.log(error)
    }
  },[]);

  const [blogs, setBlogs] = useState([]);
  const [Recentblogs, setRecentBlogs] = useState([]);

  // Function to fetch data from the API
  const fetchBlogs = async () => {
    try {
      const result = await axios.get('http://localhost:8080/blog/get');
      const result1 = await axios.get('http://localhost:8080/blog/getRecentBlogs');
      setRecentBlogs(result1.data);
      setBlogs(result.data); // Assuming the API returns blog data
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="emptyBox"></div>
      <div className="pageTitle py-5 bg-orange w-100">
        <div className="container-lg">
          <h1 className="display-4 mb-0">Saya Blogs</h1>
        </div>
      </div>
      <div className="breadcrumbContainer">
        <div className="container-lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to='/sayahomes-react'>Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Blogs</li>
          </ol>
        </div>
      </div>
      <div className="w-100 padding pb-0 position-relative">
  <div className="container-lg">
    <div className="heading">
      <h2 className="h1 text-serif mb-0">Latest Blogs</h2>
    </div>
    <div className="latest-blogs-container">
      <div className="row gap-row">
        {Recentblogs.slice(0,2).map((blog, index) => (
          <div className={`col-lg-${index === 0 ? '7' : '5'} latest-blog-box`} key={blog.slugurl}>
            <div className="inner">
              <figure className="h-100">
                <img
                  src={`https://www.sayahomes.com/uploads/blog-images/${blog.image}`}
                  alt={blog.heading}
                  className="h-100 object-cover"
                />
              </figure>
              <article>
                <Link to={`/sayahomes-react/blog-details/${blog.slugurl}`} className="news-title">
                  <p className="h5 mb-0 font-weight-bold">{blog.heading}</p>
                </Link>
                <div className="blog-box-category d-flex flex-wrap align-items-center justify-content-between">
                  <Link to="#" className="category-btn">Real Estate</Link>
                  <div className="socialBtn shareBtns d-flex">
                    <Link to="#"><i className="fab fa-facebook-f sm"></i></Link>
                    <Link to="#"><i className="fab fa-linkedin-in sm"></i></Link>
                    <Link to="#"><i className="fab fa-whatsapp sm"></i></Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      <div className="w-100 padding position-relative">
      <div className="container-lg">
        <div className="row gap-row">
          <div className="col-lg-8 inside-blogsArchive">
            <div className="row gap-row">
              {blogs.map((blog) => (
                <div className="col-md-6 inside-blogBox" key={blog.slugurl}>
                  <div className="inner h-100">
                    <div className="img-fluid">
                      <Link to={`/sayahomes-react/blog-details/${blog.slugurl}`}>
                        <img
                          src={`https://www.sayahomes.com/uploads/blog-images/${blog.image}`}
                          alt={blog.heading}
                          className="h-100 object-cover"
                          title='Real Estate'
                        />
                      </Link>
                      <div className="blog-box-category position-absolute">
                        <Link to="#" className="category-btn">
                          {blog.category}
                        </Link>
                      </div>
                    </div>
                    <article>
                      <Link to={`/sayahomes-react/blog-details/${blog.slugurl}`}>
                        <h5 className="news-title mb-2">{blog.heading}</h5>
                        <div className="date justify-content-between">
                          <small>{blog.date.slice(0,10)}</small>
                        </div>
                      </Link>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <aside className="col-lg-4 inside-blogs-aside">
            <div className="inner">
              <div className="blog-asideBox">
                <form method="GET" action="#">
                  <div className="form-group d-flex mb-0">
                    <input type="text" name="blog_search" id="blog_search" className="form-control" placeholder="Search" required />
                    <button id="searchBtn" className="inlineBtn">Submit</button>
                  </div>
                </form>
              </div>
              <div className="blog-asideBox">
                <div className="heading mb-3">
                  <h4 className="text-serif mb-0">Follow Us</h4>
                </div>
                <div className="socialBtn shareBtns d-flex">
                  <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                  <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                  <Link to="#"><i className="fab fa-whatsapp"></i></Link>
                </div>
              </div>
              <div className="blog-asideBox">
                <form method="POST" id="subsforms">
                  <span className="substatus text-danger py-2"></span>
                  <div className="form-group d-flex mb-0">
                    <input type="text" name="subscribe" id="subscribe" className="form-control" placeholder="Email" />
                    <input type="hidden" name="subsactive" value="active" />
                    <button id="subscribeBtn" type="submit" className="inlineBtn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
      <FooterAll />
    </div>
  )
}

export default MediaBlogs