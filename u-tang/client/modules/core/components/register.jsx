import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  register(){
    let data = {
      email: "test@test.test",
      password: "test1234",
      cardId: "123456789"
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
        <button onClick={this.register.bind(this)} > testttt </button>
      </section>
    );
  }
}

export default Register;
