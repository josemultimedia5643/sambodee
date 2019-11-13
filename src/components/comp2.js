import React, { Component } from 'react';

export default class Comp2 extends Component {
    state = { value:0, flag:true, word:'zero' }

    styles={margin:10, fontSize:20}

    handleIncr = (x)=> this.setState({value:this.state.value+x})
    handleDecr = (x)=> this.state.value !==0? 
        this.setState({value:this.state.value-x}): this.setState({value:0})
    handleReset = ()=> this.setState({value:0})

    render() { 
        return ( 
            <React.Fragment>
                <span style={this.styles}>{this.state.value === 0? 
                    'zero':this.state.value}</span>
                <button style={this.styles} onClick={()=>this.handleIncr(5)}>
                    +
                </button>
                <button style={this.styles} onClick={()=>this.handleDecr(1)}>
                    -
                </button>
                <button style={this.styles} onClick={this.handleReset}>
                    Reset
                </button>
            </React.Fragment>
         );
    }
}
