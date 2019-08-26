import React, {Component} from 'react';
import Number from '../Components/number';
import Button from '../Components/button';

class FormationBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            strikers: 1,
            forwards: 4,
            mids: 2,
            defs:3

        }
        this.randomise = this.randomise.bind(this)
    }

    componentDidMount(){
        this.randomise();
    }

    randomise() {
        var strikerNum = Math.floor(Math.random() * 11);
        console.log(strikerNum);
        var forwardNum = Math.floor(Math.random() * (11-strikerNum));
        var midNum = Math.floor(Math.random() * (11-strikerNum-forwardNum));
        var defNum = (10-strikerNum-forwardNum-midNum);
        this.setState({strikers: strikerNum})
        this.setState({forwards: forwardNum})
        this.setState({mids: midNum})
        this.setState({defs: defNum})
    }


render(){
    return(
        <div className="wall">
        <div className="number-tiles">
            <Number num={this.state.strikers}/>
            <Number num={this.state.forwards}/>
            <Number num={this.state.mids}/>
            <Number num={this.state.defs}/>
        </div>
        <div className="button-area">
            <Button randomise = {this.randomise}/>
        </div>
        </div>
    )
  };


};
export default FormationBox;