import React from 'react';

const ImageCard = (props) => {
	return (
		<div className="one-card" onClick={() => props.handleGoHome(props.image)}>
			<img src={props.image.image} className="solo-image" alt={props.image.name} />
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

				<i className="fas fa-arrow-left fa-2x" />
			</div>
		</div>
	);
};

export default ImageCard;
