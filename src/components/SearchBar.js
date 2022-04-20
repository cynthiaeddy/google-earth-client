import React from 'react'
import Images from './Images'

const SearchBar = (props) => {
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

          <span>
            <button className="clear" onClick={props.clearInputValue}>
              clear
            </button>
          </span>
        </div>
      </div>
      <div className="container">
        {!props.images.length && !props.isLoading ? (
          <h5>no results found</h5>
        ) : (
          props.images.map((image) => {
            return (
              <Images
                image={image}
                key={image.id}
                handleCardView={props.handleCardView}
              />
            )
          })
        )}
      </div>
    </>
  )
}
export default SearchBar
