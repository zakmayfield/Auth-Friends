import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';


class SuperSecretFriends extends React.Component{
  state = {
    friends: []
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

  render(){
    console.log('state', this.state.friends)
    return (
      <div>
        <h2>FRIENDS!!!</h2>
        {
          this.state.friends.map(person => {
            return <p key={person.id}>{person.name}</p>
          })
        }
      </div>
    )
  }
}

export default SuperSecretFriends;