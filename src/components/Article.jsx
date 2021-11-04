import React from 'react'

export default function Article({ name, author, title, description }) {
    return (
        <figure>
            
            <img src={urlToImage} alt={title} />
            <figcaption>

                {name}
                {author}
                {title}
                {description}
              
            </figcaption>
        </figure>
    )
}