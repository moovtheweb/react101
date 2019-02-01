import React from 'react';

const UserInput = (props) => {
	return(
		<div>
		<input onChange={props.changed} type="text" value={props.currentName}/>
		</div>
		)

}

export default UserInput;