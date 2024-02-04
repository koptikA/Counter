import React, { Component } from 'react'

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    this.state = { number: 0 }
  }

  changeNumber = ({ newNumber }) => {
    this.setState({ number: newNumber !== 0 ? newNumber : 1 ? newNumber : -1 })
  }

  handleNumberChange = (newNumber, isField) => {
    const {
      props: { id, onChange },
      state: { number },
    } = this

    
    if (!isField) {
      this.inputRef.current.style.opacity = 0

      setTimeout(() => {
        this.inputRef.current.style.opacity = 0
        this.changeNumber({ number, newNumber })

        setTimeout(() => {
          this.inputRef.current.style.opacity = 1
        })
      })
    } else {
      this.changeNumber({ number, newNumber })
    }
  }

  render() {
    const {
      state: { number },
    } = this

    return (
      <div {...{ className: 'counter' }}>
        <button
          {...{
            className: 'button',
            onClick: () => {
              this.handleNumberChange(number - 1)
            },
            title: '-1',
          }}
        >
          −
        </button>
        <div {...{ className: 'input-wrapper' }}>
          <input
            {...{
              className: 'input',

              onChange: (e) => {
                e.preventDefault()
                this.handleNumberChange(e.target.value, true)
              },
              ref: this.inputRef,
              type: 'text',
              value: number,
            }}
          />
        </div>
        <button
          {...{
            className: 'button',
            onClick: () => {
              this.handleNumberChange(number + 1)
            },
            title: '+1',
          }}
        >
          +
        </button>
      </div>
    )
  }
}
