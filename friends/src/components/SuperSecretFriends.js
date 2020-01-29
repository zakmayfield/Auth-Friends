import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


class SuperSecretFriends extends React.Component{
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: '',
      email: ''
    }
  };

  //cDM will cause .getData to be invoked after the component mounted, which sets state to the resolved value, which causes another rerender, which then state will have friends in it, and then they get rendered.
  componentDidMount() {
    this.getData();
  };

  getData = () => {
    axiosWithAuth().get('/api/friends')
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    })
    console.log(e.target.name, '=', e.target.value)
  }

  addFriend = e => {
    axiosWithAuth().post('/api/friends', this.state.newFriend)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

    this.setState({
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    })
  }



  render(){
    return (
      <div>
        <h2>FRIENDS!!!</h2>

        <h3>Add a new friend</h3>
        <form className="addFriendForm" onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />

          <button>Add Friend</button>
        </form>
        <div className="friendContainer">
          {
            this.state.friends.map(person => {
              return <p key={person.id}>{person.name}</p>
            })
          }
        </div>
      </div>
    )
  }
}

export default SuperSecretFriends;