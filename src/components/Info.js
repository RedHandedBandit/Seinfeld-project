import React, {Component} from 'react'


class Info extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            editItem: false,
           
        }
    }

    handleChangeName(value){
        this.setState({name: value})
    }

    handleClick(){
        this.setState({editItem: !this.state.editItem})
    }

    handleSubmit(){
        this.props.update(this.props.info.index, this.state.name)
        this.handleClick();
    }

    // --------------- Deleting info below this line ---------------------

    handleDelete(){
        this.props.deleteOne();
        // this.handle
    }

    render(){

        return (
            <div 
            style={{ width: '70vw', height: "150px", margin: "25px auto", background: 'forestGreen', }}  >
            
                <h3> Name: {this.props.info.name} </h3>
                <h5> Age: {this.props.info.age} </h5>
                <h5> Role: {this.props.info.role} </h5>
                <h5> Personality: {this.props.info.personality} </h5>
                {!this.state.editItem ?
                <button onClick={() => this.handleClick()}> Edit </button>
                       :
                        <div> 
                            <input onChange={(e) => this.handleChangeName(e.target.value)}
                                    value={this.state.name} /> 
                            <button onClick={() => {this.handleSubmit()}} > Submit </button>
                            
                        </div>
                        }
             <button onClick={() => this.handleDelete()}> Delete </button>
            </div>
        )
    }
}

               




export default Info