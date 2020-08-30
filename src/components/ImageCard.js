import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ImageCard = (props) => {
	return (
		<div className="one-card">
			{/* <Card> */}
			<img src={props.image.image} className="solo-image" />
			{/* <Card.Content> */}
			<div className="content">
				<ul>
					<h4>
						<li>
							<span>name: </span> {props.image.name}
						</li>
						<li>
							<span> location: </span> {props.image.location}
						</li>
						<li>
							<span> continent: </span> {props.image.continent}
						</li>
					</h4>
				</ul>
			</div>
			{/* </Card.Content> */}
			{/* </Card> */}
		</div>
	);
};

export default ImageCard;
