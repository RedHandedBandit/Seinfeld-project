
   let mainCast = [
        {
            name: 'Jerry Seinfeld',
            age: 64,
            role: 'star',
            personality: 'funny',
            index: 0,
        },
        {
            name: 'George Castanza',
            age: 59,
            role: `Jerry's bestfriend`,
            personality: 'speratic',
            index: 1,
        },
        {
            name: 'Elaine Bennis',
            age: 45,
            role: `Jerry's ex-girlfriend`,
            personality: 'grudge holding',
            index: 2,
        },
        {
            name: 'Cosmo Kramer',
            age: 55,
            role: `Jerry's neighbor`,
            personality: 'free bird',
            index: 3,
            
        }
    ];
    let index = 4;
    

    

    

    

    module.exports = {

     getCast: (request, response) => {
         
         response.status(200).send(mainCast)
         console.log(mainCast)
     },

    
      addCharacter: (request, response) => {
         let index = mainCast[mainCast.length - 1].index + 1
 
         let newCastMember = {
             name: request.body.name,
             age: request.body.age,
             role: request.body.role,
             personality: request.body.personality,
             index: index
         };
 
         mainCast.push(newCastMember)
         response.status(200).send(mainCast)
     },

     updateCharacterInfo: (request, response) => {
        let { index } = request.params;
        let { text } = request.body;
      
        let object = mainCast.find((element) => {
         return element.index === +index;
        })
      
        object.name = text;
      
        response.status(200).send(mainCast);
       },
     
            // (request, response) => {
            // let {index} = request.params
            // let Object = mainCast.find((el) => {
            //     return el.index === +index;
            // })
            // response.status(200).send(mainCast)

            // object.name = "something"
            
        //  request.params.index

        deleteCastMember: (request, response) => {
            let {index} = request.params.index
            mainCast.splice(index , 1)
            response.status(200).send(mainCast)
        }
    }
    
    
    // mainCast = mainCast.filter(cast => cast.index !== +request.params.index)
    // response.status(200).send(mainCast)

     
    
    
    
    
    
    
    
    
    
    


     

     