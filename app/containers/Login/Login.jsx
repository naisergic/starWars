import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router';
import InjectReducer  from 'utils/injectReducer';
import InjectSaga  from 'utils/injectSaga';
import LoginComponent from '../../components/Login/Login';
import saga from './sagas';
import reducer from './reducer';
import {LOGIN_STATE_KEY} from './constants'
import {fetchFilms,setUserName} from './actions';
import {makeSelectFetching,makeSelectError,makeSelectBirthDate} from './selectors';
import LoadingIndicator from '../../components/common/LoadingIndicator';

class Login extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      username:'',
      Password:'',
    }
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.dateOfBirth && this.state.Password === nextProps.dateOfBirth){
      this.setState({
        redirect: true
      });
    }
  }
  handleBlur(e){
    const id = e.target.id;
    const value = e.target.value;
    this.setState({
      [id]:value
    })
    if(id==="username"){
      this.props.setUserNameValue(value);
    }

  }
  render(){
    const {getPeople} = this.props;
    if(this.props.isFetching){
      return(<LoadingIndicator/>)
    }
    if(this.state.redirect){
      return(
        <Redirect to="/search"/>
      )
    }
    return(
      <div>
        <LoginComponent getPeople={getPeople} handleBlur={this.handleBlur}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPeople(){
    dispatch(fetchFilms())
  },
  setUserNameValue(value){
    dispatch(setUserName(value))
  },
})
export const mapStateToProps = ()=>{
  return createStructuredSelector({
    isFetching: makeSelectFetching(),
    error: makeSelectError(),
    dateOfBirth:makeSelectBirthDate(),
  });
}
const withSaga = InjectSaga({key:LOGIN_STATE_KEY,saga});
const withReducer = InjectReducer({key:LOGIN_STATE_KEY,reducer});
const withConnect = connect(mapStateToProps,mapDispatchToProps);
export default compose(withReducer,withSaga,withConnect)(Login);
