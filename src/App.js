import React, { useState } from "react";
// import "rsuite/dist/styles/rsuite-default.css";
// import "rsuite/lib/styles/themes/dark/index.less";
import "rsuite/dist/styles/rsuite-dark.css";
import { Sidenav, Nav, Dropdown, Toggle } from "rsuite";
import { Icon } from "rsuite";
import SideNav from "./sidenav/SideNav";
function App() {
	const [expanded, setExpanded] = useState(true);
	const [activeKey, setActiveKey] = useState("1");
	return (
		<div style={{ width: 240 }} className="mt-2">
			{/* <div className="col-md-8"> */}
			{/* <SideNav></SideNav> */}
			{/* </div> */}
			{/* <div className="row">
				<div className="col-md-4"> */}
			<Toggle
				onChange={setExpanded}
				checked={expanded}
				// checkedChildren="Expand"
				// unCheckedChildren="Collapse"
			/>

			<Sidenav
				expanded={expanded}
				defaultOpenKeys={["3", "4"]}
				activeKey={activeKey}
				onSelect={setActiveKey}
			>
				<Sidenav.Body>
					<Nav>
						<Nav.Item eventKey="1" icon={<Icon icon="facebook-official" />}>
							Dashboard
						</Nav.Item>
						<Nav.Item eventKey="2" icon={<Icon icon="google-plus-circle" />}>
							User Group
						</Nav.Item>
						<Dropdown
							placement="rightStart"
							eventKey="3"
							title="Advanced"
							icon={<Icon icon="twitter" />}
						>
							<Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
							<Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
							<Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
							<Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
						</Dropdown>
						<Dropdown
							placement="rightStart"
							eventKey="4"
							title="Settings"
							icon={<Icon icon="linkedin" />}
						>
							<Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
							<Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
							<Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
							<Dropdown.Menu eventKey="4-5" title="Custom Action">
								<Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
								<Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Nav>
				</Sidenav.Body>
			</Sidenav>
		</div>
		// 	</div>
		// </div>
	);
}

export default App;
