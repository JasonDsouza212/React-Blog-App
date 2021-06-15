import{ Link } from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div>
            <h2>sorry</h2>
        <p>the page cant be found</p>
        <Link to='/'>Back to the home page
        </Link>
        </div>
     );
}
 
export default NotFound;