import { useHistory, useParams } from 'react-router-dom';
import useFetch from './usefetch';

const BlogDetails = () => {
const { id } = useParams();
const{data,error,load}=useFetch(' http://localhost:8000/blogs/'+id);
const history=useHistory();
const handelClick=()=>{
  fetch('http://localhost:8000/blogs/'+data.id,{
    method:'DELETE'
  }).then(()=>{
      history.push('/');
  })
}

  return (
    <div className="blog-details">
     {load && <h2>loading.....</h2>}
     {error && <div>{error}</div> }
     {data && (
       <article>
         <h2>{data.title}</h2>
         <p>Written-{data.author}</p>
         <div>{data.body}</div>
         <button onClick={handelClick}>delete</button>
       </article>
     )}
    </div>
  );
}
 
export default BlogDetails;