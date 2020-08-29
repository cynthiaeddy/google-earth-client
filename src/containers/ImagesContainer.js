import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import Images from '../components/Images';
import ImageViewer from '../components/ImageViewer';

let CardId;

class ImagesContainer extends Component {
	state = {
		images: [],
		image: {},
		sortValue: '',
		inputValue: '',
		isCardViewOn: false,
		clicked: false
	};

	componentDidMount() {
		fetch('http://localhost:3000/images').then((resp) => resp.json()).then((resp) => {
			this.setState({
				images: resp
			});
		});
	}

	handleCardView = (cardId) => {
		console.log('click', cardId);
		this.setState({
			image: cardId,
			isCardViewOn: !this.state.isCardViewOn
		});
	};

	imageFilterOnChange = (event) => {
		console.log('hi from onChange', event.target.value);
		this.setState({
			inputValue: event.target.value
		});
	};

	// adoptDoggy = (petItem) => {
	// 	// console.log("bring doggy", petItem)
	// 	this.setState({
	// 		pet: petItem
	// 	});
	// 	fetch('http://localhost:3000/adoptions', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			Accept: 'application/json',
	// 			Authorization: localStorage.token
	// 		},
	// 		body: JSON.stringify({
	// 			user_id: localStorage.loggedInUserId,
	// 			pet_id: petItem.id
	// 		})
	// 	})
	// 		.then((res) => res.json())
	// 		.then((adoptedDoggy) => {
	// 			// console.log(adoptedDoggy)
	// 			const updatedPets = this.state.pets.map((pet) => {
	// 				return pet.id === adoptedDoggy.id ? adoptedDoggy : pet;
	// 			});
	// 			this.setState({
	// 				pets: updatedPets,
	// 				pet: adoptedDoggy
	// 			});
	// 		});
	// };

	sortImages = (images) => {
		if (this.state.sortValue === 'location') {
			return [ ...images ].sort((a, b) => {
				if (a.location > b.location) {
					return 1;
				} else if (a.location < b.location) {
					return -1;
				} else {
					return 0;
				}
			});
		} else {
			return images;
		}
	};

	handleImageHome = () => {
		this.setState({
			image: {},
			isImageViewOn: false
		});
	};

	renderSingleImage = (cardId) => {
		console.log(cardId);
	};

	render() {
		const imageId = this.state.image;
		console.log(
			'this.state',
			this.state,
			'this.state.image',
			this.state.image,
			'this.state.id',
			this.state.id,
			'imageId',
			imageId,
			'this.state.image.id',
			this.state.image.id
		);
		const filteredImages = this.state.images.filter((image) => {
			return image.location.toLowerCase().includes(this.state.inputValue.toLowerCase());
		});

		return (
			<div>
				{this.renderSingleImage()}
				{this.state.isCardViewOn ? (
					<ImageViewer
						image={this.state.image}
						handleImageHome={this.handleImageHome}
						selectImageId={this.state.image}
					/>
				) : (
					<div>
						<Images
							key={this.state.id}
							images={this.state.images}
							images={this.sortImages(filteredImages)}
							handleCardView={this.handleCardView}
						/>
						<SearchBar
							images={this.sortImages(filteredImages)}
							handleCardView={this.handleCardView}
							imageFilterOnChange={this.imageFilterOnChange}
							inputValue={this.state.inputValue}
							onChange={this.handleSortImages}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default ImagesContainer;
