import React from 'react'
import './styles.css'

function ItemList({title, description, html}) {
  return (
    <div className='item-list'>
        <strong><a href={html} target='blank'>{title}</a></strong>
        <p>{description}</p>
        <hr />
    </div>
  )
}

export default ItemList;