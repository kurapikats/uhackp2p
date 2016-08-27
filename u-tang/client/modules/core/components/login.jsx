import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    }
  }

  change(e){
    let val = e.currentTarget.value;
    let type = e.currentTarget.type;

    console.log(val,type);

    switch(type){
      case 'email':
        this.setState({email: val});
        break;
      case 'password':
        this.setState({password: val});
        break
    }
  }

  submit(){
    console.log(this.state.email, this.state.password);
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    let {error} = this.props;
    return (
      <section className="login-page">
        <div> Login Page </div>
        {error ?
          <div className="error-message">
            {error}
          </div> : null
        }
        <label> Email: </label>
        <input type="email" placeholder="email" onChange={this.change.bind(this)}/>
        <br/>
        <label> Password: </label>
        <input type="password" placeholder="password" onChange={this.change.bind(this)}/>
        <br/>
        <button onClick={this.submit.bind(this)}>Submit</button>
      </section>
    );
  }
}

export default Login;
