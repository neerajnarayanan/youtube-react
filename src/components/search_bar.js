import React,{Component} from 'react';
class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state={term:''};
	}
    render() {
        return (
         <div className="search-bar"> 
            <input value={this.state.term} onChange={event=>this.onInputChnage(event.target.value)}/>
					
     	 </div>
        );	
 
    }
    onInputChnage(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}
export default SearchBar;