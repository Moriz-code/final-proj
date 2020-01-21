import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class ShopApp extends Component {


    render() {
        return <React.Fragment>
            {/* <div className="btn1">Hello</div>
            <div className="btn2">Hello</div>
            <div className="btn3">Hello</div>
            <div className="btn4"></div> */}

            <div className="hero">
                    <p className="hero-title">Buy and sell local fashion goods</p>
                    <input className="hero-search" type="text" id="search-bar" placeholder="Looking for something specific?" />
                    {/* <button className="searchBtn">Search</button> */}
                    {/* <Link to="/item"><button>Shop Now</button></Link> */}
                </div>
            <div className="container home-categories">
                <div className="category-b">BEST SELLER</div>
                <div className="category-c">WOMEN  & MEN</div>
                <div className="category-d">ACCESSORIES</div>
                <div className="category-e">BECOME A SELLER</div>
            </div>

            <div className="container">
                <h3>
                    Title
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda provident officia neque sequi. Explicabo reprehenderit unde, cumque quos iure excepturi velit dicta aliquid ab. Voluptas consequatur vero officia ea cum.</p>

            </div>
        </React.Fragment>
    }
}



const mapStateToProps = state => {
    return {
        //state
    };
};

const mapDispatchToProps = {
    //functions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShopApp);
