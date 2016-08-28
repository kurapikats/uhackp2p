import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: null,
			password: null
		}
	}
	
	change(e) {
		let val = e.currentTarget.value;
		let type = e.currentTarget.type;
		
		console.log(val, type);
		
		switch (type) {
			case 'email':
				this.setState({email: val});
				break;
			case 'password':
				this.setState({password: val});
				break
		}
	}
	
	submit() {
		console.log(this.state.email, this.state.password);
		this.props.login(this.state.email, this.state.password)
		console.log(Meteor.userId());
	}
	
	render() {
		let {error} = this.props;
		return (
			<section className="login-page">
				<CardTitle title="Login Page" subtitle="Login TO U-Tang" />
				<CardText>
					{error ?
						<div className="error-message">
							{error}
						</div> : null
					}
					<div>
						<TextField
							floatingLabelText="Email"
							onChange={this.change.bind(this)}
							type="email"
						
						/>
					</div>
					<div>
						<TextField
							floatingLabelText="password"
							onChange={this.change.bind(this)}
							type="password"
						/>
					</div>
					<RaisedButton onClick={this.submit.bind(this)} primary={true} label="Login" fullWidth={true} />
				</CardText>
			
			</section>
		);
	}
}

export default Login;
