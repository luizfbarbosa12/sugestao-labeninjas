import React, { Component } from 'react'
import Card from '../Card/Card'

export default class CartPage extends Component {
  render() {
    return (
      <div>
        {this.props.cart.map((job) => {
          return <Card job={job}/>
        })}
        
      </div>
    )
  }
}
