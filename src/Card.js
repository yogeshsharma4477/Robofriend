import React from 'react';

function Cards(props){
	return (
		<div className='bg-green dib br3 pa3 ma2 grow bw2 shadow5'>
		<img src={`https://robohash.org/${props.id}mohit`} alt='yo' />
		<div className='tc'>
		<h1>{props.name}</h1>
		<p>{props.email}</p>
		</div>
		</div>

	);
}
export default Cards;