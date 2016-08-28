import React from 'react';
import {MobileTearSheet} from 'material-ui';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}
	
	goToProfile() {
		FlowRouter.go('/profile');
	}
	
	goToThirdParty() {
		FlowRouter.go('/profile');
	}
	
	goToBorrowers() {
		FlowRouter.go('/borrowers');
	}
	
	goToPending() {
		FlowRouter.go('/pendings');
	}
	
	goToTransactions() {
		FlowRouter.go('/transactions');
	}
	
	goToMyBuddies() {
		FlowRouter.go('/buddies');
		
	}
	
	render() {
		return (
			<section className="dashboard">
				<h4>Dashboard</h4>
				
				<List>
					<ListItem onTouchTap={this.goToProfile} primaryText="My Accounts" leftIcon={<ContentInbox />}/>
					<ListItem onTouchTap={this.goToMyBuddies.bind(this)} primaryText="My Buddies" leftIcon={<ActionGrade />}/>
					<ListItem onTouchTap={this.goToBorrowers} primaryText="List of Borrowers" leftIcon={<ContentSend />}/>
					<ListItem onTouchTap={this.goToPending} primaryText="Pending Requests" leftIcon={<ContentDrafts />}/>
					<ListItem onTouchTap={this.goToTransactions} primaryText="Transaction History" leftIcon={<ContentInbox />}/>
				</List>
			</section>
		);
	}
}

export default Dashboard;
