import React, {Component} from 'react';
import './App.css';

const uuid = require('uuid')

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      msg : "",
      taskList : []
    }

  }

  changeMsg = (event) => {
    this.setState({msg:event.target.value})
    console.log(this.state.msg)
  }

  addTask = (event) => {
    event.preventDefault()
    if(this.state.msg){
      const list1 = this.state.taskList
      const task1 = {
        id : uuid.v4(),
        task : this.state.msg
      }
      list1.push(task1)
      this.setState({taskList:list1})  
    }
    alert('task successfully added')
  }

  deleteTask = (id) => {
//     console.log(id)
    var list1 = this.state.taskList
    const list2 = list1.filter(task => (id)!==(task.id))
    this.setState({taskList:list2})
    alert('task successfully deleted')
  }

  render() {
      return (
          <div className='App'>
            <h1 style={head} className="my-3 mx-auto border rounded border-secondary">TO-DO List</h1>
            <form action="" onSubmit={this.addTask}>
              <input type="text" name="data" autoComplete="off" onChange={this.changeMsg}/>
              <button className="mx-2 btn btn-primary" type="Submit">Add</button>
            </form>
            <br/>
            <div>
              {this.state.taskList.map((task)=> 
                <div className="my-2 border rounded border-primary"style={style1}>
                  <p style={style2}>{task.task}</p>
                  <button className="btn btn-success mb-1 ml-5" style={style2} onClick={() => this.deleteTask(task.id)}>done</button>
                </div>
              )}
            </div>
 
          </div>
      )
  }
}

const head = {
  padding : "10px",
  backgroundColor : "white",
  color: "blue"
}

const style1 = {
  padding : "10px",
  textAlign : "center",
}

const style2 = {
  display: "inline",
  marginLeft: "10px"
}

export default App;
