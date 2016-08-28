import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class BuddyItem extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	}
	
	handleExpandChange = (expanded) => {
		this.setState({expanded: expanded});
	};
	
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
		console.log(buddy);
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
					<img src="images/nature-600-337.jpg"/>
				</CardMedia>
				<CardTitle title={buddy.firstName + ' ' + buddy.lastName} subtitle="Stats" expandable={true}/>
				<CardText expandable={true}>
					<h5>Loans requested</h5>
					<h5>Loans approved</h5>
					<h5>Pending Transactions</h5>
					<h5>Transactions Done</h5>
					<h5>Payback Rating</h5>
				</CardText>
				<CardActions>
					{(!this.state.expanded) ?
						<FlatButton label="More info" onTouchTap={this.handleExpand}/> :
						<FlatButton label="close" onTouchTap={this.handleReduce}/>
					}
				</CardActions>
			</Card>
		);
	}
}

export default BuddyItem;
