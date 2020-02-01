import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../styles/imgs/logo-red.png';
import { NavLink } from 'react-router-dom'
import Search from '../cmps/items/Search';
import cover from '../styles/assets/imgs/coverPhoto.jpg'
import bell from '../styles/assets/imgs/icons/notification.png'
import wishlist from '../styles/assets/imgs/heart-white.png'
import cart from '../styles/assets/imgs/shopping-cart-white.png'
import SocketService from '../services/SocketService'
import OrderService from '../services/OrderService'
import { addShopToUser,logout } from '../actions/UserActions'
import { CreateNewShop } from '../actions/ShopActions'
import { withRouter } from 'react-router'

class Header extends Component {

  state = {
    isTop: true,
    newOrders: 0
  };



  componentDidMount() {
    const listenToOrders = (this.props.loggedInUser && this.props.loggedInUser.shopId !== '') ?
      this.listenToOrders() : null

    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }



  componentWillUnmount = () => {
     SocketService.terminate()
  }

  listenToOrders = () => {
    SocketService.setup()
    SocketService.on('order-complete', this.loadMyOrders)
  }

  loadMyOrders = async () => {


    const orders = await OrderService.getMyOrders(this.props.loggedInUser.shopId)
    const newOrders = orders.find(order => !order.isRead)
    if (newOrders) await this.setState({ newOrders: 1 })

  }

  getShopId = async () => {
    if (!this.props.loggedInUser) return this.props.history.push(`/login`)
    if (this.props.loggedInUser.shopId) { 
        this.props.history.push(`/shop/${this.props.loggedInUser.shopId}`)
        
        
}
    else{
     
        
    let shop = (this.props.loggedInUser && this.props.loggedInUser.shopId !== "") ? this.props.loggedInUser.shopId :

    await this.props.CreateNewShop(this.props.loggedInUser._id, this.props.loggedInUser.fullName)

    let newUser = await this.props.addShopToUser(shop._id, this.props.loggedInUser)
    this.props.history.push(`/shop/${newUser.shopId}`)}
}




  render() {
    return <React.Fragment>
      <div className="main-header" >
        <div className={this.state.isTop ? 'down nav-icon flex end align-center' : 'up nav-icon flex end align-center'} >

          <div className="nav-text">

            <span><NavLink to='/item' className="nav-text" exact>Explore</NavLink></span>


                 <span onClick={this.getShopId} className="inner-nav-text">My shop</span>
              
          {this.props.loggedInUser === null ? <NavLink to='/login' className="inner-nav-text" exact> Sign in</NavLink> :
                        <button className="logout" onClick={this.props.logout}>Log out</button>}



            {this.props.loggedInUser && this.props.loggedInUser.shopId !== "" ?
              <span><NavLink to='/dashboard' className="inner-nav-text" exact><img className="bell-icon" src={bell} />
                <span className="notification-seller-badge">{this.state.newOrders>0&&this.state.newOrders}</span>
              </NavLink></span>



              : ''}
          </div>






          <ul className="menu-icons flex align-center">
            <li><NavLink activeClassName="active" to='/wishlist' exact><img src={wishlist} /></NavLink></li>
            <li><NavLink activeClassName="active" to='/cart' exact><img src={cart} /> <span></span></NavLink></li>
          </ul>
        </div>
        <img className="cover-photo" src={cover} />
        <div className="header-text-search flex column justify-center align-center">
          <div className="headlines ">
            <h1 className="showRoom-title text-flicker-in-glow">ShowRoom.</h1>
            <h3 className="marketplace-title text-flicker-in-glow">Marketplace</h3>
          </div>
          <Search></Search>

          <div className="labels">
            <button>Dress</button>
            <button>Black</button>
            <button>Boho</button>
            <button>Hipster</button>
            <button>Accessories</button>
            <button>Summer</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}




const mapStateToProps = state => {
  return {
    loggedInUser: state.user.loggedInUser,

  };
};

const mapDispatchToProps = {
  CreateNewShop,
  addShopToUser,
  logout
};

export default withRouter (connect(
  mapStateToProps,
  mapDispatchToProps
)(Header))
