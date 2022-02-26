import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router'

const AllAuthors = (props) => {
    const {authors, setAuthors} = props;

    useEffect(()=>{
        axios.get('http://localhost:8000/authors')
            .then((response) => {
                console.log(response.data);
                setAuthors(response.data)
            })
            .catch((error) => {
                console.log('Error in axios get authors');
            })
    }, [])

    const deleteAuthor = (id)=>{
        axios.post(`http://localhost:8000/authors/${id}`)
            .then(response=>{
                console.log(response.data)
                removeFromDom(id);
            })
            .catch(error => {
                console.log(error)})
    }

    const removeFromDom = id => {
        setAuthors(authors.filter(aut => aut._id !== id));
    }

    return (
        <div className={'ml-5'}>
            <p className={'font-bold text-lg my-5'}>FAVORITE AUTHORS</p>
            <Link to={`/new`}><button className={'font-bold bg-blue-400 text-white hover:bg-blue-600 rounded px-2 py-1 mb-2'}>Add new Author</button></Link>
            <table className={'table-auto border'}>
                <thead className={'bg-slate-400'}>
                <tr>
                    <th>Author Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={'bg-slate-200'}>
                {authors.map((aut, index)=>{
                    return(
                    <tr key={index}>
                        <td className={'border border-slate-300 px-4'}>{aut.name}</td>
                        <td className={'flex gap-2 border border-slate-300 px-4'}>
                            <button
                                onClick={event=>{deleteAuthor(aut._id)}}
                                className={'bg-red-300 rounded px-1'}>
                                delete
                            </button>
                            <p>Update</p>
                        </td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
};

export default AllAuthors;