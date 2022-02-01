import React from 'react'

import { Link } from 'react-router-dom'

class Opener extends React.Component {
  render() {
    return (
      <div className="opener">
        <div className="opener-content">
          <h1>Earth Paints</h1>
          <p>
            <span>You're looking at Norway</span>, thanks to the Chrome Google
            Earth Extension. I've screenshot many of the images because of their
            beauty. It amazes me that the earth from afar resembles what artists
            emotionally strive to emulate. I made a search bar for countries
            with the caveat that they aren't all represented. I've chosen images
            that mirror paintings imo.
          </p>
          <hr />
          <Link to="/search" className="button">
            enjoy!
          </Link>
        </div>
        <img src="https://imgur.com/qI8C69i.png" className="image-opener" />
      </div>
    )
  }
}
export default Opener
