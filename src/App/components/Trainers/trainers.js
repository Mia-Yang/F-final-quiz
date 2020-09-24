import React, { Component } from 'react';
import { Popover } from 'antd';
import './trainers.scss';
import 'antd/dist/antd.css'

class Trainers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          trainers: [],
          inputName:''
        }
      }

      componentDidMount() {
        fetch('http://localhost:8080/trainers?grouped=false', { method: 'GET'})
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            this.setState({trainers: data})
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

    render() {
        return(
        <div className='list-block'>
          <h1>讲师列表</h1>
          <div className='list'>
            {this.state.trainers.map((person) => 
              <Popover content={person.id, person.name} trigger="hover" key={person.id}>
                <div className='personCard'>
                    {person.id}.{person.name}
                </div>
             </Popover>
          )}
          <input type="text" placeholder="+添加讲师" 
          onChange={this.handleChange} />
        </div>
      </div>
        );
    }
}

export default Trainers;
