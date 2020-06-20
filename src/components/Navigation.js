import React from "react";
import { ReactComponent as Logo } from "../images/Logo.svg";
// import { ReactComponent as ArrowDown } from "../images/arrow-down.svg";

const Navigation = (props) => {
	return (
		<>
			<div className="logo">
				<Logo />
			</div>

			<div className="ham-menu" onClick={() => props.menuClicked()}>
				<div className="line line-one">&nbsp;</div>
				<div className="line line-two">&nbsp;</div>
			</div>

			<div className="created">
				<p>© 2020 John Guerrero.</p>
			</div>

			<div className="scroll-number">
				<div className="counter">
					<p className="number">01</p>
					<div className="length">
						<span></span>
					</div>
					<p className="number">04</p>
				</div>
			</div>
		</>
	);
};

export default Navigation;
