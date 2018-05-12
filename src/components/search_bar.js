import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: 'Seattle, WA',
        };
    }
   

    render(){
        return(
            <div className="search-bar">
                <input 
                value={this.state.term} 
                onChange={event => this.onInputChange(event.target.value)}/>
                {/* Value of the input: {this.state.term} */}
            </div>

        );
    }
    onInputChange = (term) => {
        this.setState({term});
        this.props.onSearchTermChange(term);
        // this.setState({term: this.state.term * 2});
        // console.log(this.state.term);
    }
    
}

export default SearchBar;