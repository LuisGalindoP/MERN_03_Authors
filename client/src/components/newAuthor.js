import React, {useState} from 'react';
import {Link, navigate} from "@reach/router";
import axios from 'axios';

const NewAuthor = (props) => {
    const {authors, setAuthors} = props;
    const [name, setName] = useState({})
    const [errors, setErrors] = useState({});

    const formHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/authors', {
            name
        })
            .then((response)=>{
                setAuthors([...authors, response.data]);
                console.log(response.data);
                navigate('/').then(()=>{})
            })
            .catch((error) => {
                // console.log(error);
                console.log(error.response.data.errors);
                setErrors(error.response.data.errors);
            });


    }
    return (
        <div className={'ml-5'}>
            <p className={'font-bold text-lg my-5'}>ADD NEW AUTHOR</p>
            <Link to={`/`}><button className={'font-bold bg-blue-400 text-white hover:bg-blue-600 rounded px-2 py-1 mb-2'}>Home</button></Link>
            <div>
                <form onSubmit={formHandler}>
                    <div>
                        <label className={'block font-bold text-sm text-gray-600'}>NAME:</label>
                        <input type="text"
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
        </div>
    )
};

export default NewAuthor;