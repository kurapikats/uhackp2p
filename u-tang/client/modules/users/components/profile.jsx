import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {data} = this.props;
    console.log(data);
    return (
      <section className="profile">
        <div> Profile Page </div>

        <div> <labe> Name :</labe> Sample Name </div>
        <div> <labe> Email :</labe> {data? data.emails[0].address : "Sample Email"} </div>
        <div> <labe> Card ID :</labe> {data ? data.profile.cardId : "Sample card Id"} </div>
        <div> <labe> Balance :</labe> Sample Balance </div>
      </section>
    );
  }
}

export default Profile;
