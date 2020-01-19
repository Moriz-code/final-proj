import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";


class ItemPreview extends Component {


  generateBtns = () => {
    switch (this.props.listMode) {
      case "cartMode":
        return (<div>
          <button onClick={() => this.handleDelete(this.props.item._id)}>X</button>
        </div>
        )
      case "wishListMode":
        return (<div>
          <button onClick={() => this.handleDelete(this.props.item._id)}>X</button>
          <button onClick={() => this.handleAddToCart(this.props.item)}>Add To Cart</button>
        </div>
        )

      case "adminMode":
        return (
          <div>
            <button onClick={() => this.handleDelete(this.props.item._id)}>delete</button>
            <button>edit</button>
          </div>
        )
      default:
        break;
    }
  }

  handleDelete = (itemId) => {
    this.props.deleteItem(itemId)
  }

  handleAddToCart=(item)=>{
  this.props.addToCart(item)
  }


  render() {
    return (<React.Fragment>
      <Link to={`/item/${this.props.item._id}`}>
        <li className="item-card clean-line">
          <img alt="img-item" src={this.props.item.imgs[0]} />
          <h3>{this.props.item.title}</h3>
          <p>{this.props.item.price}</p>

        </li>
      </Link>
      <div >
        {this.generateBtns()}
      </div>
    </React.Fragment>

    )
  }
}

export default withRouter(ItemPreview)