import React, { Component } from "react";
import "rsuite/dist/styles/rsuite-default.css";
import { Button, Icon, ButtonToolbar } from "rsuite";
import classes from "./SideNav.module.css";
class SideNav extends Component {
	render() {
		return (
			<div className={classes.floatRight}>
				<ButtonToolbar>
					<Button color="blue">
						<Icon icon="facebook-official" /> Facebook
					</Button>
					<Button color="red">
						<Icon icon="google-plus-circle" /> Google Plus
					</Button>
					<Button color="cyan">
						<Icon icon="twitter" /> Twitter
					</Button>
					<Button color="blue">
						<Icon icon="linkedin" /> LinkedIn
					</Button>
					<Button color="green">
						<Icon icon="wechat" /> WeChat
					</Button>
					<Button color="yellow">
						<Icon icon="weibo" /> WeiBo
					</Button>
				</ButtonToolbar>
			</div>
		);
	}
}

export default SideNav;
