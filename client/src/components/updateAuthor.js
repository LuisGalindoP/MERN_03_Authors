import React, {useState, useEffect} from 'react';
import {Link, navigate} from "@reach/router";
import axios from "axios";

const UpdateAuthor = (props) => {
    const {authors, setAuthors} = props;
    const [author, setAuthor] = useState({})
    const [name, setName] = useState()
    const [errors, setErrors] = useState({});
    const {id} = props;

// useEffect(()=>{
//     axios.get(`http://localhost:8000/authors/${id}`)
//         .then((response) => {
//             setAuthor(response.data)
//         })
//         .catch(error=>{
//             console.log(error)
//         })
// },[id]);

const formHandler = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8000/authors/${id}`, {
        name
    })
        .then((response) => {
            console.log(response.data);
            setAuthors([...authors, response.data]);
            navigate('/').then(() => {
            });
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response.data.errors);
            setErrors(error.response.data.errors);
        });
}
    return (
        <div className={'ml-5'}>
            <p className={'font-bold text-lg my-5'}>UPDATE AUTHOR</p>
            <Link to={`/`}><button className={'font-bold bg-blue-400 text-white hover:bg-blue-600 rounded px-2 py-1 mb-2'}>Home</button></Link>
            <form onSubmit={formHandler}>
                <div>
                    <label className={'block font-bold text-sm text-gray-600'}>NAME:</label>
                    <input type="text"
                           value={author.name}
                           className={'border-2 rounded w-64'}
                           onChange={(event)=>{setName(event.target.value)}}
                    />
                    {errors.name?
                        <p className={"text-red-400"}>{errors.name.message}</p> : null
                    }
                </div>
                <div>
                    <button
                        type="submit"
                        className={'font-bold text-white bg-green-400 hover:bg-green-600 rounded py-1 px-2 mt-3'}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
};

export default UpdateAuthor;