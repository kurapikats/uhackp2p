import React from 'react';

class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      userId: null,
      cardId: null
    }
  }

  _update(e){
    let val = e.currentTarget.value;
    let name = e.currentTarget.name;

    switch(name){
      case 'user-id':
        this.setState({userId: val});
        break;
      case 'card-id':
        this.setState({cardId: val})
    }
  }

  _add(){
    let data = {
      userId: this.state.userId,
      cardId: this.state.cardId
    };

    console.log(data);
  }

  render() {
    return (
      <section className="Enroll">
        <div> Enroll Page </div>

        <labe>User ID:</labe>
        <input name="user-id" type="text" placeholder="User ID" onChange={this._update.bind(this)}/>
        <br/>

        <labe>Card ID:</labe>
        <input name="card-id"  type="text" placeholder="Card ID" onChange={this._update.bind(this)}/>
        <br/>

        <button onClick={this._add.bind(this)}> Submit </button>

      </section>
    );
  }
}

export default Enroll;
