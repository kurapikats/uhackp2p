import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {TextField, Dialog, FlatButton} from 'material-ui';
import Toggle from 'material-ui/Toggle';

class BuddyItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			requestLoan: false,
			message: null,
			amount: null
		};
	}

	_update(e){
		let val = e.currentTarget.value;
		let name = e.currentTarget.name;

		switch(name){
			case 'amount':
				this.setState({amount: val});
				break;
			case 'message':
				this.setState({message: val});
				break;
		}
	}

	send(){
		const buddy = this.props.buddy.profile;
		console.log(buddy, this.state);
	};
	
	handleExpandChange = (expanded) => {
		this.setState({expanded: expanded});
	};

	openField(){
		this.setState({requestLoan: true});
	}

	handleLoanReduce() {
		this.setState({requestLoan: false
		})
	}
	
	handleToggle = (event, toggle) => {
		this.setState({expanded: toggle});
	};
	
	handleExpand = () => {
		this.setState({expanded: true});
	};
	
	handleReduce = () => {
		this.setState({expanded: false});
	};
	
	render() {
		const buddy = this.props.buddy.profile;
		//console.log(buddy);
		return (
			<Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
				<CardHeader
					title={buddy.firstName + ' ' + buddy.lastName}
					avatar={buddy.displayPhoto}
					actAsExpander={true}
				/>
				<CardText>
				
				</CardText>
				<CardMedia
					expandable={true}
					overlay={<CardTitle title="User Info"/>}
				>
				</CardMedia>
				<CardTitle title={buddy.firstName + ' ' + buddy.lastName} subtitle="Stats" expandable={true}/>
				<CardText expandable={true}>
					<h5>Loans requested</h5>
					<h5>Loans approved</h5>
					<h5>Pending Transactions</h5>
					<h5>Transactions Done</h5>
					<h5>Payback Rating</h5>

					<FlatButton label="Request Loan" onTouchTap={this.openField.bind(this)}/>
				</CardText>
				<CardActions>
					{(!this.state.expanded) ?
						<FlatButton label="More info" onTouchTap={this.handleExpand}/> :
						<FlatButton label="close" onTouchTap={this.handleReduce}/>
					}
				</CardActions>

				<Dialog
					title="Borrow from XYZ UserName"
					modal={true}
					open={this.state.requestLoan}
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
						onChange={this._update.bind(this)}
						required
					/><br/>
					<TextField
						hintText="Message"
						name="message"
						multiLine={true}
						rows={1}
						rowsMax={5}
						fullWidth={true}
						onChange={this._update.bind(this)}
					/><br />

					<FlatButton
						label="Cancel"
						primary={false}
						onTouchTap={this.handleLoanReduce.bind(this)}
					/>
					<FlatButton
						label="Send Request"
						primary={true}
						onTouchTap={this.send.bind(this)}
					/>
				</Dialog>
			</Card>
		);
	}
}

export default BuddyItem;
