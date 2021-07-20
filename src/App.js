import React from "react"
import "./App.css"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false,
      todos: [],
      text: "",
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
    this.state.todos.push(this.state.text)
    this.setState({
      todos: [...this.state.todos, {id: this.state.todos.length + 1, text: this.state.text}],
      isClicked: false,
      text: ""
    })
  }

  handleClick = (id) => {
    console.log(id)
    let foundIndex = this.state.todos.findIndex((todo) => {
       return todo.id === id
    })

    const copy = {...this.state.todos}
    copy.splice(foundIndex, 1)
    this.setState({todos: copy})
    console.log(foundIndex)
  }


  handleChange = event => {
    this.setState({
      text: event.target.value,
      
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickHandler}>Add todo</button>
        <input type="text" onChange={this.handleChange} />
        <div>
          <ul>
            {this.state.todos.map(todo => {
              return (
                <li>
                  <h3>{todo}</h3>
                   <button onClick={(evt) => this.handleClick(evt, id)}>Delete</button>
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
