import React from 'react'
import Options from './Options'
import Tags from './Tags'
import onClickOutside from 'react-onclickoutside'


class DropDown extends React.Component {
  constructor(props) {
    super(props)
    const options = this.props.options || []
    const selectedItems = this.props.selected || []
    this.state = {
      options: options.slice(),
      selectedItems: selectedItems,
      filterText: '',
      isItemListVisible: false,
      isInputFocused: false
    }
  }
  

  handleClickOutside = (e) => {
    this.setState({
      isItemListVisible: false,
      isInputFocused: false,
      filterText: ''
    })
  }


  getCSSClasses() {
    const classes = [this.props.classes || 'defaultSelectCSSClass']

    return classes
  }

  
  getLabelCSSClasses() {
    const classes = [this.props.classes || 'defaultLabelCSSClass']

    return classes
  }


  handleSelect(index, item) {
    const selectedItems = this.state.selectedItems

    selectedItems.push(item.key)
    this.setState({
      selectedItems,
      isInputFocused: true
    })
    this.handleChange()
  }

  
  handleChange() {
    const selected = this.state.selectedItems

    if (typeof this.props.onSelect == 'function') {
      this.props.onSelect(selected)
    }
  }


  handleRemove(event, index, label) {
    const selectedItems = this.state.selectedItems

    event.stopPropagation()

    selectedItems.splice(index, 1)
    this.setState({})

    this.handleChange()
  }


  handleInputChange = (inputValue) => {
    var options = this.state.options
    var newList = []

    this.setState({
      filterText: inputValue
    })

    return newList
  }


  handleArrowClick = () => {
    this.setState({
      isItemListVisible: !this.state.isItemListVisible,
      isInputFocused: !this.state.isInputFocused,
    })
  }


  handleInputClick = () => {
    this.setState({
      isItemListVisible: !this.state.isItemListVisible,
      isInputFocused: !this.state.isInputFocused,
    })
  }


  toggleItemListVisibility() {
    this.setState({
      isItemListVisible: !this.state.isItemListVisible
    })
  }


  getItemsForTags() {
    const selected = this.state.selectedItems

    const newArray = selected.map((key) => {
      const byKey = (i => key === i.key)
      const items = this.state.options.filter(byKey)
      return items[0].label
    })

    return newArray
  }


  getListByDefaultElements(list, selected) {
    const newArray = list.filter((item) => {
      return !selected.includes(item.key)
    })

    const filteredArray = newArray.filter((item) => {
      let itemLowerCase = item.label.toLowerCase()
      if (item.label.toLowerCase().indexOf(this.state.filterText) !== -1) {
        return item.label
      }
    })
    
    return filteredArray
  }


  render() {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
      >

        <Tags
          id='element_wrapper'
          classes='defaultElementListClass'
          items={this.getItemsForTags()}
          inputValue={this.state.filterText}
          isInputFocused={this.state.isInputFocused}
          isItemListVisible={this.state.isItemListVisible}
          onRemove={this.handleRemove.bind(this)}
          onArrowClick={this.handleArrowClick}
          onInputChange={this.handleInputChange}
          onInputClick={this.handleInputClick}
        />

        <Options
          id='list_wrapper'
          classes='defaultItemListClass'
          items={this.getListByDefaultElements(this.state.options, this.state.selectedItems)}
          isItemListVisible={this.state.isItemListVisible}
          onSelect={this.handleSelect.bind(this)}
        />

      </div>
    )
  }
}


export default onClickOutside(DropDown)