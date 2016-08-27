import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      cardId: null
    }
  }

  change(e){
    let val = e.currentTarget.value;
    let type = e.currentTarget.type;

    console.log('test',val,type);

    switch (type) {
      case 'email':
        this.setState({email: val});
        break;
      case 'password':
        this.setState({password: val});
        break;
      default :
        this.setState({cardId: val});
        break;
    }
  }

  register(){
    let data = {
      email: this.state.email,
      password: this.state.password,
      cardId: this.state.cardId
    };
    console.log(data, this.props.register);
    this.props.register(data);
  }

  render() {
    let {error} = this.props;
    return (
      <section className="register-page">
        <div> Register Page</div>
        {error? <div className="error-message" > {error}
        </div> : null}

        <label> Email: </label>
        <input type="email" placeholder="Email" onChange={this.change.bind(this)}/>
        <br/>
        <label> Card ID: </label>
        <input type="text" maxLength="12" placeholder="Card-ID" onChange={this.change.bind(this)}/>
        <br/>
        <label> Password: </label>
        <input type="password" placeholder="Password" onChange={this.change.bind(this)}/>
        <br/>

        <button onClick={this.register.bind(this)} > Submit </button>
      </section>
    );
  }
}

export default Register;
