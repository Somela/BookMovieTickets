import React from 'react';



class Header extends React.Component {
    constructor(props){
        super(props);
        this.Onclick = this.Onclick.bind(this);
        this.backgrounds = [
            "https://in.bmscdn.com/showcaseimage/eventimage/simmba-03-12-2018-01-22-21-573.jpg",
            "https://in.bmscdn.com/showcaseimage/eventimage/zero-23-11-2018-07-21-15-025.jpg",
            "https://in.bmscdn.com/showcaseimage/eventimage/20-23-11-2018-06-34-02-690.jpg",
            "https://in.bmscdn.com/showcaseimage/eventimage/rang-rangeela-gujjubhai-03-12-2018-08-29-48-955.jpg",
            "https://in.bmscdn.com/showcaseimage/eventimage/zangoora--kingdom-of-dreams-13-11-2017-05-43-29-041.jpg",
            "https://in.bmscdn.com/showcaseimage/eventimage/cirque-du-soleil--bazzar-29-10-2018-01-44-58-992.jpg"
        ];
        this.state = { backgroundIndex: 0 };
        this.changeBackground = this.changeBackground.bind(this)
    }
    componentDidMount () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 1000
        )
      }
    componentWillUnmount() {
        if (this.timeout) clearTimeout(this.timeout)
    }
    changeBackground () {
        this.setState(function ({ backgroundIndex }) {
          const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length
    
          return { backgroundIndex: nextBackgroundIndex }
        }, function () {
          this.timeout = setTimeout(
            this.changeBackground,
            this.props.animDuration * 3000
          )
        })
      }
    Onclick(){
        $('#sidebar').toggleClass('active');
    }
    LeftButtonClick(){
        var backgroundIndex=this.state.backgroundIndex;
        if(this.state.backgroundIndex<0){
            backgroundIndex=6;
        }
        this.setState({
            backgroundIndex:backgroundIndex-1
        })
    }
    
    RightButtonClick(){
        var backgroundIndex=this.state.backgroundIndex;
        if(this.state.backgroundIndex>6){
            backgroundIndex=0;
        }
        this.setState({
            backgroundIndex:backgroundIndex+1
        })
        console.log(this.state.backgroundIndex)
    }
    render() {
        return (
            <div className="fluid-container">
            <nav className="navbar navbar-dark bg-dark">
             <a className="navbar-brand logo" title="BookMyShow" href="/chennai">
                <img className="logo" src="../../images/book-ticket-now.png" />
            </a>
            <form>
                <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Something"/>
                </div>
            </form>
            <buton type="button" className="btn btn-primary button">Sign In</buton>

            <div className="container">
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Movies</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Events</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Plays</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Sports</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Monuments</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">International</a>
            </div>
            <div className="nav navbar-nav">
            <a className="nav-link" href="#">Activities</a>
            </div>
            </div>
          </nav>
            <div className="wrapper">
            
            <nav id="sidebar">
                <div id="dismiss">
                    <i className="fas fa-arrow-left"></i>
                </div>
    
                    <div className="sidebar-header">
                        <div className="card navbarCard">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-sm-2">
                                        <img className="card-img-top imageSize" src="../../images/Image-profile.jpg" alt="Card image cap"/>
                                    </div>
                                    <div className="col-sm-10"><span className="Welcome">Welcome Guest</span></div>
                                </div>
                                <div className="row">
                                <div className="col-sm-2"></div>
                                <div className="col-sm-10 SignUp"><a className="ACol" href="#">Sign In / Sign Up</a></div>
                            {/* <div className="col-sm-5 SignUp"><a className="ACol" href="#">Sign Up</a></div> */}
                            </div>
                        </div>
                    
                    </div>
                </div>
    
                <ul className="list-unstyled components">
                    <li>
                    <a href="#"><span>notification</span></a>
                        {/* <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">notification</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#"><span>notification</span></a>
                            </li>
                        </ul> */}
                    </li>
                    <li>
                        <a href="#"><span>QuickPay</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Booking History</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Experiences</span></a>
                    </li>
                    <li>
                        <a href="#"><span>BookASmile</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Support</span></a>
                    </li>
                    <li>
                        <a href="#"><span>Setting</span></a>
                    </li>
                </ul>
    
            </nav>
    
            
            <div id="content">
    
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fas fa-align-right"></i>
                        </button>
                </nav>
            </div>
        </div>
        <div className="showCase" id="showcase-primary" data-ratio>
        <div className="section-body showcase-carousel slick-initialized slick-slider">
        <a href="#"><img className="showcaseimg" src={ this.backgrounds[this.state.backgroundIndex] }/></a></div>
        <div><button className="buttonLeft" onClick={this.LeftButtonClick.bind(this)}><img className="leftICON" src="../../images/left-arrow-icon.jpg"></img></button></div>
        <div><button className="buttonRight" onClick={this.RightButtonClick.bind(this)}><img className="rightICON" src="../../images/ChevronRight.png"></img></button></div>
        </div>
        
        </div>
        )
    }
}
export default Header;