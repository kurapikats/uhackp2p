import React from 'react';
import { TextField, RaisedButton, Paper, Divider } from 'material-ui';
import { ContentSave }  from 'material-ui/svg-icons';
import EnrollList from '../containers/enroll_list.js';

class Enroll extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      accountNo: null
    }
  }

  _update(e){
    let val = e.currentTarget.value;
    let name = e.currentTarget.name;

    switch(name){
      case 'accountNo':
        this.setState({accountNo: val});
        break;
    }
  }

  _add(){
    let data = {
      accountNo: this.state.accountNo
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
          onChange={this._update.bind(this)}
          required
        />

        <RaisedButton
          type="submit"
          label="Save"
          primary={true}
          style={{marginRight: 10}}
          labelPosition="before"
          icon={<ContentSave/>}
          onClick={this._add.bind(this)}
        />

        <br/><br/>
        <Divider />

        <EnrollList />
      </div>
    );
  }
}

export default Enroll;
