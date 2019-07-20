import React,{Fragment} from 'react';

class Search extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <Fragment>
      <input id="search" type="text" placeholder="Search Planets" onChange={(e)=>{this.props.handleChange(e)}} />
    </Fragment>
    );
  }
}

export default Search;
