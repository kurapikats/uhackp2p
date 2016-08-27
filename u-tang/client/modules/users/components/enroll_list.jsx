import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {TextField, Dialog, FlatButton} from 'material-ui';

class EnrollList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	handleOpen() {
    this.setState({open: true});
  }

	handleClose() {
    this.setState({open: false});
  }

	generate(data,index){
		return(
			<TableRow key={index}>
        <TableRowColumn>{data.cardId}</TableRowColumn>
        <TableRowColumn>User {data.userId}</TableRowColumn>
        <TableRowColumn>
					<FlatButton
						type="submit"
						label="Borrow"
						primary={true}
						onTouchTap={this.handleOpen.bind(this)}
					/>
				</TableRowColumn>
      </TableRow>
		)
	}

	render() {
		let {data} = this.props;

		const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleClose.bind(this)}
      />,
      <FlatButton
        label="Send Request"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
    ];

		return (
			<section className="enroll-list">
				<h4>List of Enrolled Third Party Accounts</h4>

				<Table id="enrollTableAll">
			    <TableHeader>
			      <TableRow>
			        <TableHeaderColumn>Account No.</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>&nbsp;</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
					<TableBody>
						{data.map((enroll , index)=>(
							this.generate(enroll, index)
						))}
					</TableBody>
				</Table>
				<Dialog
          title="Borrow from XYZ UserName"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
					<p>Borrow from Xyz User</p>
					<TextField
	          ref="amount"
	          name="amount"
	          hintText="Amount"
	          floatingLabelText="Amount"
	          className="inputLeftMargin"
	          fullWidth={true}
	          underlineShow={true}
	          required
	        /><br/>
					<TextField
			      hintText="Message"
			      multiLine={true}
			      rows={1}
			      rowsMax={5}
						fullWidth={true}
			    /><br />
        </Dialog>
			</section>
		);
	}
}

export default EnrollList;
