import React from 'react'

export default function Article({ name, author, title, description, image }) {
    return (
        <figure>
            
            <img src={image} alt={title} />
            <figcaption>

                {name}
                {author}
                {title}
                {description}
              
            </figcaption>
        </figure>
    )
}