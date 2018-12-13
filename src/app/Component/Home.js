import React, { Component } from 'react';
import Header from './header';
import { connect } from 'react-redux';

import { fetchMovieDetails } from "../actions/actions";

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            fullLength:0,
            idMynus:0,
            idPlus:0
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchMovieDetails());
        if(this.props.products.length>0){
            this.setState({
                fullLength:this.props.products.length,
                idPlus:3,
                idMynus:3
            })
        }
      }
      LeftClick(){
        
      }
      RightClick(){
        let fulllenght=this.props.products.length;
        console.log(fulllenght);
        // const LoadMovieImages = 
        
      }
      
      LoadMovieImages(){
        let items=[];
        if(this.props.products){
            this.props.products.map((data,length)=>{
                if(length<4){
                    let path = data.CommonPath+data.ImageName;
                   items.push(
                    <div key={length} className="col-sm-4">
                    <a href="#"><img className="CardImage" src= {path} /></a>
                    <span>{data.LikePercentage}%</span>
                    <span className="MovieName">{data.MovieName}</span>
                    <div className="row">
                    <span className="Content">
                    UA | {data.Genre} | {data.Language}</span>
                    </div>
                        </div>
                   )
                }
            })
        }else{
        items.push(
            <div className="loading"></div>
        )
        }
        return items;
    }
    render() {
        return (
            <div className="fluid-container">
            <Header animDuration={1}></Header>
            <div className="row">
            </div>
            <div className="col-sm-3">
            </div>
                <div className="col-sm-9">
                    <div className="card MoviesCard">
                        <div className="card-header MoviesCard">
                        <span>Movies</span>
                        </div>
                            <div className="card-body MoviesCard">
                                <div className="card MoviesCard">
                                <div className="card-header MoviesCard">
                                <div className="row">
                                    {this.LoadMovieImages()}
                                </div>
                                <div><button onClick={this.LeftClick.bind(this)} className="buttonLeft"><img className="leftICON" src="../../images/left-arrow-icon.jpg"></img></button></div>
                                <div><button onClick={this.RightClick.bind(this)} className="buttonRight"><img className="rightICON" src="../../images/ChevronRight.png"></img></button></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
function  mapStateToProps(state){
    return {
        products: state.products.items,
        loading: state.products.loading,
        error: state.products.error
    }
}

export default connect(mapStateToProps)(Home);