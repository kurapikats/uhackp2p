import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
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
      </section>
    );
  }
}

export default Login;
