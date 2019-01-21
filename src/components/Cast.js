import React, {Component} from 'react'
import axios from 'axios';
import Info from './Info'


class Cast extends Component {

    
    constructor(){
        super()
        
        this.state = {
            wholeCast: [],
            name: '',
            role: '',
            age: '',
            personality: '',
           
            
        }
        this.updateName = this.updateName.bind(this)
        this.deleteInfo = this.deleteInfo.bind(this)
        this.deletePerson = this.deletePerson.bind(this)
    }
    //handle get   
    
    handleGettingcast(){
        axios.get(`/api/seinfeld`)
        .then(response => {
            this.setState({wholeCast: response.data})
            
        })
        console.log(this.state.wholeCast)
    }
    //ADDING CAST BELOW THIS LINE
    handleName(value) {
        this.setState({
            name: value
        })
    }
    
    handleAge(value) {
        this.setState({
            age: value
        })
    }
    
    handleRole(value) {
        this.setState({
            role: value
        })
    }
    
    handlePersonality(value) {
        this.setState({
            personality: value
        })
    }
    
    handleAddingCast(){
        const castObj = {
            name: this.state.name,
            age: this.state.age,
            role: this.state.role,
            personality: this.state.personality
        }
        axios.post(`/api/seinfeld`, castObj)
        .then((response) => {
            console.log(response)
            this.setState({wholeCast: response.data})
        })
        
        this.setState({name: '', role: '',age: '', personality: ''})
    }
    //ADDING CAST ABOVE THIS LINE
    
    //EDIT CAST BELOW THIS LINE
    
    updateName(index, theName){
        let text = {
            text: theName
        }
        axios.put(`/api/seinfeld/${index}`, text).then((response) => {
            this.setState({wholeCast: response.data})
            
        })
    }


    handleChangeName(value){
        this.setState({name: value})
    }
        
    deleteInfo(data){
        this.setState({wholeCast: data})
    }

        // --------------- edit info above this line -----------------

        
        deletePerson(index){
            // let deleteInfo = (data) => {this.setState({wholeCast: data})}
            axios.delete(`/api/seinfeld/${index}`).then((response) => 
            {console.log(response.data)
                this.deleteInfo(response.data)})
            
            .catch(error => console.log(error))
            
        }

       
                
                
                
            
           // -------------- START OF RENDERING AND RETURNING -------------------
           //< --------------------------------------------------------------- >     
                
                
                
                
    render(){
        // let mainCast = this.state.wholeCast.map(items =>
        //     <div>
        //         <h3> Name: {items.name} </h3>
        //         <h5> Role: {items.role} </h5>
        //         <h5> Personality: {items.personality} </h5>
        //         <h5> Age: {items.age} </h5>
        //     </div>)
        let mappedCast = this.state.wholeCast.map((eachMember) => {
            return(
                <Info update= {this.updateName} key={eachMember.index} info={eachMember}
                deleteOne={this.deletePerson} />
            )
        })
        

    return(   
            // --------------- ADDING CAST MEMBER STARTS BELOW ---------------------
            
        <div >
            
                <button onClick={() => this.handleAddingCast()}> Add Cast Member </button>
                
                 <input onChange={(e) => this.handleName(e.target.value)}
                        value={this.state.name}
                        placeholder=" name "/>

                <input onChange={(e) => this.handleAge(e.target.value)}
                        placeholder= " age "
                        value={this.state.age}/> 

                <input onChange={(e) => this.handleRole(e.target.value)}
                         placeholder=" role "
                         value={this.state.role}/>

                <input onChange={(e) => this.handlePersonality(e.target.value)}
                        placeholder=" personality " 
                        value={this.state.personality}/>
                
                {/* EDIT BUTTON AND INFO STARTS BELOW */}

             <h4>
                <button onClick={() => this.handleGettingcast()}> Get Cast Here </button> 
                 <section>  
                   
                </section>
                
             </h4>
             {mappedCast}
             {/* {mainCast} */}
        </div>
        )
    }
}

export default Cast



