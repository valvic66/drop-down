import React from 'react'
import Option from '../Option'


export default class Options extends React.Component {
  getCSSClasses() {
    const classes = [this.props.classes || 'defaultItemListClass']

    if (this.props.isItemListVisible) {
      classes.push('showItemList')
    }
    else {
      classes.push('hideItemList')
    }

    return classes.join(' ')
  }


  handleSelect = (index, item) => {
    this.props.onSelect(index, item)
  }

  
  render() {
    return (
      <div
        id={this.props.id}
        ref="list1"
        className={this.getCSSClasses()}
        onMouseLeave={this.props.onMouseLeave}
      >

        {this.props.items.map((item, index) => {
          return (<Option
            key={index}
            id='list_item'
            classes='defaultItemClass'
            label={item.label}
            onClick={this.handleSelect.bind(this, index, item)}
          />)
        })}
      </div>
    )
  }
}