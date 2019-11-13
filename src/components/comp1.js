import React,{Component} from 'react'

export default class Comp1 extends Component{

    style1={margin:50, backgroundColor:'red', fontSize:20, width:80}
    style2={margin:50, backgroundColor:'green', fontSize:20, width:80}

    state={flag:true}

    handleClik = ()=> this.setState({flag:!this.state.flag})

    render(){
        return(
            <React.Fragment>
                <button style={this.state.flag?this.style1:this.style2}
                onClick={this.handleClik}>{this.state.flag?"Red":"Green"}</button>
            </React.Fragment>
        )
    }
}