import React from "react";

const Button = (props) => {
	return <button className="todo-button" type={props.type}>{props.children}</button>;
};

export default Button;
