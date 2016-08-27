import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {error} = this.props;
    return (
      <section className="register-page">
        <div> Register Page</div>
        {error? <div className="error-message" > {error}
        </div> : null}
      </section>
    );
  }
}

export default Register;
