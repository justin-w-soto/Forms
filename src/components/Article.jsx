import React from 'react'
import PropTypes from 'prop-types';


export default function Article({ name, author, title, description, image }) {
    
    return (
        <figure>
            
            <img src={image} alt={title} height="150px" />
            <figcaption>

                {name}
                {author}
                {title}
                {description}
              
            </figcaption>
        </figure>
    )
}

// Article.propTypes = {
//     name: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//   };