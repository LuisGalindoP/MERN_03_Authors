const Author = require('../models/author.model');
const {request} = require("express");

module.exports = {

    //FIND ALL AUTHORS
    findAllAuthors: (request, response) => {
        Author.find()
            .then((allAuthors)=>{
                console.log(allAuthors);
                response.json(allAuthors);
            })
            .catch((error) => {
                console.log('Error in findAllAuthors');
                response.json({message: 'Error in findAllAuthors', error: error});
            })
    },

    //FIND ONE AUTHOR
    findAuthor: (request, response) => {
        Author.findOne({_id: request.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                response.json(oneAuthor);
            })
            .catch((error) => {
                console.log('Error in findAuthor')
                response.json({message: 'Error in findAuthor', error: error});
            })
    },

    //ADD ONE AUTHOR
    addAuthor: (request, response) => {
        Author.create(request.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                response.json(newAuthor);
            })
            .catch(error => {
                // console.log('Error in addAuthor');
                response.status(400).json(error);
            })
    },

    //UPDATE ONE AUTHOR
    updateAuthor: (request, response) => {
        Author.updateOne({_id: request.params.id}, request.body, {new: true, runValidators: true})
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                response.json(updatedAuthor);
            })
            .catch(error=>{
                console.log('Error in updateAuthor')
                response.status(400).json(error);
            })
    },

    //DELETE AUTHOR
    deleteAuthor: (request, response) => {
        Author.deleteOne({_id: request.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                response.json(deletedAuthor);
            })
            .catch(error=>{
                console.log('Error in deletedAuthor');
                response.json({message: 'Error in deletedAuthor', error: error})
            })
    }

}