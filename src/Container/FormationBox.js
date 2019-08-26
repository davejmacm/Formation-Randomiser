import React, {Component} from 'react';

class FormationBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            strikers:'',
            forwards: '',
            mids:'',
            defs:''

        }
        this.randomise = this.randomise.bind(this)
    }

    randomise() {
        var strikerNum = Math.floor(Math.random() * 11);
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
        <h2>Formation</h2>
    )
  };


};
export default FormationBox;