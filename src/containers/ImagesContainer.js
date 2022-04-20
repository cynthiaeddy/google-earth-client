import React from 'react'
import SearchBar from '../components/SearchBar'
import ImageViewer from '../components/ImageViewer'

class ImagesContainer extends React.Component {
  state = {
    images: [],
    image: {},
    sortValue: '',
    inputValue: '',
    isCardViewOn: false,
    isLoading: true,
  }

  componentDidMount() {
    // fetch('http://localhost:3000/images')
    fetch('https://google-earth-api.herokuapp.com/images')
      .then((resp) => resp.json())
      .then((resp) => {
        this.setState({
          images: resp,
          isLoading: false,
        })
      })
  }

  clearInputValue = () => {
    this.setState({ inputValue: '' })
  }

  handleCardView = (cardItem) => {
    this.setState({
      image: cardItem,
      isCardViewOn: !this.state.isCardViewOn,
    })
  }

  handleGoHome = () => {
    this.setState({
      image: {},
      isCardViewOn: false,
    })
  }

  imageFilterOnChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  sortImages = (images) => {
    if (this.state.sortValue === 'location') {
      return [...images].sort((a, b) => {
        if (a.location > b.location) {
          return 1
        } else if (a.location < b.location) {
          return -1
        } else {
          return 0
        }
      })
    } else {
      return images
    }
  }

  render() {
    const filteredImages = this.state.images.filter((image) => {
      return image.location
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase())
    })

    return (
      <>
        {this.state.isCardViewOn ? (
          <ImageViewer
            image={this.state.image}
            handleGoHome={this.handleGoHome}
          />
        ) : (
          <div>
            <SearchBar
              images={this.sortImages(filteredImages)}
              handleCardView={this.handleCardView}
              imageFilterOnChange={this.imageFilterOnChange}
              inputValue={this.state.inputValue}
              isLoading={this.state.isLoading}
              clearInputValue={this.clearInputValue}
            />
          </div>
        )}
      </>
    )
  }
}

export default ImagesContainer
