
import BlogList from './Bloglist'
import useFetch from './usefetch';

const Home = () => {
    const {data,load,error}=useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {error && <h3>{error}</h3>}
            {load && <div className="h3">Loading....</div> }
         {data &&<BlogList blogs={data} title='this is a title' />}
        </div>
     );
}
 
export default Home;