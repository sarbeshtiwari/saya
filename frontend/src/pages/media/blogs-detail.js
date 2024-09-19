import { Link, useParams } from "react-router-dom";
import FooterAll from "../../components/footer2";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogsDetail() {
  const { slugurl } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlog(slugurl);
  }, [slugurl]);

  const fetchBlog = async (slugurl) => {
    try {
      const result = await axios.get(`https://ecis.in/apis/sayahomes/blog/getBySlug/${slugurl}`);
      setBlog(result.data.data); // Assuming the API returns a single blog object
    } catch (error) {
      console.log(error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      
      <div className="w-100 padding position-relative">
      <div className="breadcrumbContainer">
        <div className="container-lg">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="https://www.sayahomes.com">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/sayahomes-react/media-blogs">Blogs</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {blog.heading} {/* Assuming the blog object has a title */}
            </li>
          </ol>
        </div>
      </div>
      <div className="w-30 padding position-relative"></div>
        <div className="container-lg">
          <div className="row gap-row">
            <div className="col-lg-8 main-blog-box">
              <div className="inner">
                <div className="heading">
                  <h6>Posted on {new Date(blog.date).toLocaleDateString()} by {blog.byteam}</h6> {/* Adjust according to your API response */}
                  <h2 className="h1 text-serif mb-0">{blog.heading}</h2> {/* Assuming the blog object has a title */}
                </div>
                <figure className="h-100">
                  <img
                    src={`https://www.sayahomes.com/uploads/blog-images/${blog.image}`}
                    alt={blog.heading} // Alt text should be descriptive
                    className="h-100 object-cover"
                  />
                </figure>
                <article className="main-blog-body">
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Assuming blog.content contains HTML */}
                </article>
                <div className="form-row form-gap-row mt-4">
                  <div className="col-sm-6 blogsPage-control">
                    {blog.previousBlogLink && (
                      <a href={blog.previousBlogLink} className="">
                        <i className="fa fa-long-arrow-left"></i>
                        <p className="mb-0"><span className="d-block">Previous</span>{blog.previousBlogTitle}</p> {/* Assuming previousBlogLink and previousBlogTitle are available */}
                      </a>
                    )}
                  </div>
                  <div className="col-sm-6 blogsPage-control text-right">
                    {blog.nextBlogLink && (
                      <a href={blog.nextBlogLink} className="text-right">
                        <p className="mb-0"><span className="d-block">Next</span>{blog.nextBlogTitle}</p> {/* Assuming nextBlogLink and nextBlogTitle are available */}
                        <i className="fa fa-long-arrow-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAll />
    </>
  );
}
