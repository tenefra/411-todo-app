import React from "react"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: ""
    }
  }

  componentDidUpdate() {
    console.log(this.state.text)
  }

  onClickHandler = () => {
    this.setState({
      isClicked: true
    })
    console.log(this.state.isClicked)

    this.setState({
      todos: [...this.state.todos, { id: this.state.todos.length + 1, text: this.state.text }],
      isClicked: false,
      text: ""
    })
  }

  handleClick = (evt, id) => {
    console.log(id)
    const foundIndex = this.state.todos.findIndex(todo => todo.id === id)
    const copy = [...this.state.todos]
    copy.splice(foundIndex, 1)
    this.setState({ todos: copy })
    console.log(foundIndex)
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickHandler}>Add todo</button>
        <input type="text" onChange={this.handleChange} />
        <div>
          <ul>
            {this.state.todos.map(({ text, id }) => {
              return (
                <li>
                  <h3>{text}</h3>
                  <button onClick={evt => this.handleClick(evt, id)}>Delete</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">Hello ACA!</div>
//   )
// }

export default App
