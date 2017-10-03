import React from 'react'
import Tag from '../Tag'
import { findDOMNode } from 'react-dom'
import AutosizeInput from 'react-input-autosize'


export default class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }


  getCSSClasses() {
    const classes = [this.props.classes || 'defaultElementListClass']

    return classes
  }


  getInputCSSClass() {
    const classes = ['defaultInputClass']

    return classes
  }


  getArrowCSSClass() {
    const classes = ['defaultArrowClass']

    return classes
  }


  handleRemove = (event, index, item) => {
    this.props.onRemove(event, index, item)
  }
  handleChange(event) {
    this.props.onInputChange(event.target.value)
  }


  handleInputClick = () => {
    this.input1.focus()
    this.props.onInputClick()
  }

  
  handleArrowClick = () => {
    this.input1.focus()
    this.props.onArrowClick()
  }


  componentDidUpdate() {
    if (this.props.isInputFocused) {
      this.input1.focus()
    }
  }

  
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
      >

        <div
          className="onlySelectionWrapperCSSClasses"
          onClick={this.handleInputClick}
        >

          {this.props.items.map((item, index) => (
            <Tag
              key={index}
              id='element_item'
              classes='defaultElementClass'
              labelElement={item}
              labelBtn="x"
              onClick={(event) => this.handleRemove(event, index, item)}
            />))
          }

          <div
            className={this.getInputCSSClass()}
          >

            <AutosizeInput
              name="autosizeInput"
              ref={(input) => { this.input1 = input }}
              value={this.props.inputValue}
              onChange={(event) => this.handleChange(event)}

            />

          </div>
        </div>

        <div
          className={this.getArrowCSSClass()}
          onClick={this.handleArrowClick}
        >

          <div style={{ padding: "4px" }}><img src="https://cdn.rawgit.com/valvic66/drop-down/fef26ebb/assets/arrow.png" /></div>

        </div>
      </div>
    )
  }
}