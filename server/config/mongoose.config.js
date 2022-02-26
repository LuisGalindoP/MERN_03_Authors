const mongoose = require('mongoose');

const dbName =  'authorsDb';

mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>{
        console.log(`You are connected to the ${dbName} database`);
    })
    .catch(err => console.log('There was an error connecting to the database'));
