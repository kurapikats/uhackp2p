import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {UnionBankAPI} from '/lib/methods/union-bank-api';
class Profile extends React.Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		let {data} = this.props;
		if (data) {
			UnionBankAPI.getAccounts(data.profile.cardId);
		}
		
	}
	
	render() {
		const {data, accountInfo} = this.props;
		console.log(accountInfo);
		return (
			<section className="container profile">
				
				<CardHeader
					title=" "
					subtitle="Profile Page"
				/>
				<CardMedia
					overlay={<CardTitle title={(data) ? data.profile.firstName + ' ' + data.profile.lastName : ''}
					                    subtitle="Profile Page"/>
					}
				>
				</CardMedia>
				
				<CardText>
					<div>
						<label> Name :</label>
						{(data) ? data.profile.firstName + ' ' + data.profile.lastName : ''} </div>
					<div>
						<label> Email :</label>
						{data ? data.emails[0].address : ""} </div>
					<div>
						<label> Account No. :</label>
						{data ? data.profile.cardId : ""}
					</div>
					<div>
						<label>Account Name :</label>
						{accountInfo ? accountInfo.account_name : ""}
					
					</div>
					<div>
						<label>Account Currency :</label>
						{accountInfo ? accountInfo.currency : ""}
					
					</div>
					<div>
						<label>Available Balance :</label>
						{accountInfo ? accountInfo.avaiable_balance : ""}
					
					</div>
					<div>
						<label>Current Balance :</label>
						{accountInfo ? accountInfo.current_balance : ""}
					
					</div>
				</CardText>
			
			
			</section>
		);
	}
}

export default Profile;
