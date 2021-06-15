import { Link } from "react-router-dom";

const BlogList = (props) => {
    //const blogList = (blogs,title) => { ===========>can use this also
    const blogs=props.blogs;
    const title=props.title;
    
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
                
              <div className="blog-preview" key={blog.id}>
                  <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Wriien by {blog.author}</p>
                  </Link>
              </div>
          ))} 
        </div>
     );
}
 
export default BlogList;