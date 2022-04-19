import React from 'react'
import Images from './Images'

const SearchBar = (props) => {
  const noResults = 'No Results Found'
  return (
    <>
      <div className="searchBar">
        <div className="search">
          <label htmlFor="search">
            <h4>Search by Name of Country</h4>
          </label>
          <br />
          <input
            type="text"
            value={props.inputValue}
            onChange={props.imageFilterOnChange}
          />
        </div>
      </div>
      <div className="container">
        {props.images.length ? (
          props.images.map((image) => {
            return (
              <Images
                image={image}
                key={image.id}
                handleCardView={props.handleCardView}
              />
            )
          })
        ) : (
          <p>no results found</p>
        )}
      </div>
    </>
  )
}
export default SearchBar
