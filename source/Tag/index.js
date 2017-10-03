import React from 'react'


export default class Tag extends React.Component {
  getCSSClasses() {
    const classes = [this.props.classes || 'defaultElementClass']

    return classes
  }


  getLabelCSSClasses() {
    const classes = ['defaultLabelClass']

    return classes
  }


  getBtnCSSClasses() {
    const classes = ['defaultBtnClass']

    return classes
  }


  handleClick = (event) => {
    this.props.onClick(event)
  }

  
  render() {
    return (
      <div
        id={this.props.id}
        className={this.getCSSClasses()}
      >

        <div
          className={this.getLabelCSSClasses()}
        >
          {this.props.labelElement}
        </div>

        {" "}

        <div
          className={this.getBtnCSSClasses()}
          onClick={(event) => this.handleClick(event)}
        >
          {this.props.labelBtn}
        </div>
      </div>
    )
  }
}