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
					title={buddy.firstName+' '+buddy.lastName}
					avatar={buddy.displayPhoto}
					actAsExpander={true}
				/>
				<CardText>
				
				</CardText>
				<CardMedia
					expandable={true}
					overlay={<CardTitle title={buddy.firstName+' '+buddy.lastName} subtitle="Overlay subtitle"/>}
				>
				</CardMedia>
				<CardTitle title="Description" subtitle="Card subtitle" expandable={true}/>
				<CardText expandable={true}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				</CardText>
				<CardActions>
					{(!this.state.expanded)?
						<FlatButton label="More info" onTouchTap={this.handleExpand}/>:
						<FlatButton label="close" onTouchTap={this.handleReduce}/>
					}
				</CardActions>
			</Card>
		);
	}
}

export default BuddyItem;
