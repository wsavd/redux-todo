import React, {Component} from 'react'

class addTodo extends Component{
  
  state = {
    text: ''
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Что добавить?' value={this.state.text} onChange={this.handleTextChange} />
      </div>
    )
  }
}

export default addTodo