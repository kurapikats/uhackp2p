import React from 'react';
import BuddyItem from './buddy_item';
class BuddyList extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const buddyList = this.props.buddyList;
		const {sendRequest} = this.props;
		console.log(buddyList);
		return (
			<section>
				<div>Buddylist</div>
				{buddyList.map((buddy, index)=>
					<BuddyItem key={index} buddy={buddy} sendRequest={sendRequest}/>
				)}
			</section>
		);
	}
}

export default BuddyList;
