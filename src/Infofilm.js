import React from 'react'
import Film from './Film';
import film from './FilmData';

const Infofilm = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        {film.map((item) => 
            <Film key = {item.id} id = {item.id} img = {item.img} name = {item.name} genre = {item.genre} director = {item.director} rating = {item.rating}/>
        )}
    </div>
  )
}

export default Infofilm