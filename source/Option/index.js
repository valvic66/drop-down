import React from 'react'

export default class Item extends React.Component {
  getCSSClasses () {
    const classes = [this.props.classes || 'defaultItemClass']

    return classes
  }

  render () {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
        onClick={this.props.onClick}
      >

        {this.props.label}

      </div>
    )
  }
}
