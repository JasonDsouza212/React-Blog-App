import { useState } from "react";
import { useHistory }from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('jason');
    const[load,setLoad]=useState(false);
    const history=useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog ={title,body,author};
        setLoad(true);
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{ "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            setLoad(false);
            // history.g0(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea required
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="jason">Jason</option>
                    <option value="Reema">Reema</option>
                    <option value="Mazan">Mazan</option>
                    <option value="MAGGIe">Maggie</option>
                </select>
                {!load && <button>Add blog</button>}
                {load && <button disabled>Adding blog....</button>}
            </form>
        </div>
     );
}
 
export default Create;