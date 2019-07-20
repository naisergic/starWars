import React,{Fragment} from 'react';
import Button from '../common/Button';

class Login extends React.PureComponent {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <Fragment>
      <input id="username" type="text" placeholder="UserName" onBlur={(e)=>{this.props.handleBlur(e)}} />
      <input id="Password" type="password" placeholder="Password" onBlur={(e)=>{this.props.handleBlur(e)}}/>
      <Button onClick={this.props.getPeople}>Login</Button>
    </Fragment>
    );
  }
}

export default Login;
