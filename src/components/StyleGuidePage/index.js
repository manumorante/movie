import React from 'react'
import './styles.scss'

import { Movie } from '../Movie'
import { MoviePoster } from '../MoviePoster'
import { StyleElement } from '../StyleElement'
import { Search } from '../Search'

export const StyleGuidePage = () => {
  const movie = {
    title: "Zack Snyder's Justice League",
    vote_average: 10,
    poster_path: '/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg'
  }

  return (
    <div className="StyleguidePage">
      <div className="container">
        <div className="StyleguidePage__elements">
          <StyleElement title="Colors">
            <div className="sg-color color-primary"></div>

            <div className="sg-color color-dark-0"></div>
            <div className="sg-color color-dark-1"></div>
            <div className="sg-color color-dark-2"></div>
            <div className="sg-color color-dark-3"></div>

            <div className="sg-color color-light-0"></div>
            <div className="sg-color color-light-1"></div>
            <div className="sg-color color-light-2"></div>
            <div className="sg-color color-light-3"></div>
            <div className="sg-color color-light-4"></div>
          </StyleElement>

          <StyleElement title="Button">
            <a href="#" className="Button">
              Normal
            </a>
          </StyleElement>

          <StyleElement title="Text">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Paragraph</p>
            <a href="">Link</a>
          </StyleElement>

          <StyleElement title="Search">
            <Search />
          </StyleElement>

          <StyleElement title="MoviePoster">
            <MoviePoster posterPath={movie.poster_path} />
          </StyleElement>

          <StyleElement title="Movie">
            <Movie movie={movie} />
          </StyleElement>
        </div>
      </div>
    </div>
  )
}
