const express = require ('express');
const bodyParser = require ('body-parser')
// importing the controller
const ctlr = require('./controller')

// invoking express and using bodyParser middleware
const app = express()
app.use(bodyParser.json())



/* EndPoints Go Here & ctlr link go here */

app.get('/api/seinfeld', ctlr.getCast)

app.post('/api/seinfeld', ctlr.addCharacter)

 app.put(`/api/seinfeld/:index`,ctlr.updateCharacterInfo)

 app.delete(`/api/seinfeld/:index`,ctlr.deleteCastMember)




// *** This is what makes the server run *** //

app.listen(4000,()=>{
    console.log('we are here on 4000 ma doode');
    
})

// nodemon server/index.js