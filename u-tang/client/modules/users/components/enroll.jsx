import React from 'react';
import { TextField, RaisedButton, Paper, Divider } from 'material-ui';
import { ContentSave }  from 'material-ui/svg-icons';
import EnrollList from '../containers/enroll_list.js';

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

    this.props.enroll(data);
    console.log(data);
  }

  render() {
    return (
      <div className="Enroll">
        <h4>Enroll Third Party Account</h4>

        <TextField
          ref="accountNo"
          name="accountNo"
          hintText="Account No."
          floatingLabelText="Account No."
          className="inputLeftMargin"
          fullWidth={true}
          underlineShow={true}
          required
        />

        <RaisedButton
          type="submit"
          label="Save"
          primary={true}
          style={{marginRight: 10}}
          labelPosition="before"
          icon={<ContentSave/>}
        />

        <br/><br/>
        <Divider />

        <EnrollList />
      </div>
    );
  }
}

export default Enroll;
