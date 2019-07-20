import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';
import InjectReducer  from 'utils/injectReducer';
import InjectSaga  from 'utils/injectSaga';
import SearchComponent from '../../components/Search/Search';
import RenderPlanets from '../../components/Planets/Planets';
import {fetchPlanet} from './actions';
import saga from './sagas';
import reducer from './reducer';
import {PLANET_STATE_KEY} from './constants';
import {makeSelectPlanet} from './selectors';
class Search extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.renderPlanets = this.renderPlanets.bind(this);
  }
  handleChange(e){
    const value = e.target.value;
    this.setState({
      searchTerm: value
    });
    this.props.getPlanet(value)
  }
  renderPlanets(){
    if(this.props.planets && this.props.planets.length){
      const planets = this.sortPanet();
      const length = planets.length+20;
      const planetData = planets.map((item,index)=>{
        return(
          <RenderPlanets name={item.name} font={length-index}/>
        )
      })
      return planetData;
    }
    return null;
  }
  sortPanet(){
    const planets = this.props.planets;
    planets.sort((a,b)=>{
      if(a.population < b.population){
        return -1;
      }
      if(a.population > b.population){
        return 1;
      }
      return 0;
    })
    return planets;
  }
  render(){
    return(
      <div>
        <SearchComponent planets = {this.props.planets} handleChange = {this.handleChange}/>
        {
          this.renderPlanets()
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPlanet(value){
    dispatch(fetchPlanet(value))
  }
})
export const mapStateToProps = ()=>{
  return createStructuredSelector({
    planets:makeSelectPlanet(),
  });
}
const withSaga = InjectSaga({key:PLANET_STATE_KEY,saga});
const withReducer = InjectReducer({key:PLANET_STATE_KEY,reducer});
const withConnect = connect(mapStateToProps,mapDispatchToProps);

export default compose(withSaga,withReducer,withConnect)(Search);
