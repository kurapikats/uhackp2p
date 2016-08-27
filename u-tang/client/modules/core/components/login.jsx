import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {error} = this.props;
    return (
      <section className="login-page">
        {error ?
        <div className="error-message">
          {error}
        </div> : null
        }
        <div> Login Page </div>
      </section>
    );
  }
}

export default Login;
