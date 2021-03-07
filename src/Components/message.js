import React, { Component } from 'react';
 

class Message extends Component{
    render(){
        return(

          <div> <h1> MY VALUE IS : {this.props.numbers}  </h1> </div>
        
        )
}

}
export default Message;