import React, { Component } from 'react';
import { Popover } from 'antd';
import './trainees.scss';
import 'antd/dist/antd.css'

class Trainees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      inputName:''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/trainees?grouped=false', { method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({students: data})
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleChange = (e) => {
    this.setState({
      inputName: e.target.value
    })
  }

  handleAddPerson = (e) => {
    if (e.keyCode === 13) {
      fetch('http://localhost:8080/trainees', { 
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: this.state.inputName
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          students: data,
          inputName: ''
        })
      })
      .catch(error => {
        console.error(error)
      })
    }
  }

  render() {
    return (
      <div className='list-block'>
        <h1>学员列表</h1>
        <div className='list'>
          {this.state.students.map((person) => 
            <Popover content={person.name} trigger="hover" key={person.id}>
                <div className='personCard'>
                  {person.id}.{person.name}
                </div>
            </Popover>
          
          )}
          <input type="text" placeholder="+添加学员"  onKeyDown={this.handleAddPerson} 
          onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default Trainees;