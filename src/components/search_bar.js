import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: 1
        };
    }
   

    render(){
        return(
            < div className="search-bar">
                <input 
                value={this.state.term} 
                onChange={this.onInputChange}/>
                Value of the input: {this.state.term}
            </div>

        );
    }
    onInputChange = (event) => {
        this.setState({term: this.state.term * 2});
        console.log(this.state.term);
    }
    
}

export default SearchBar;