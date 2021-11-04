import React from 'react';

export default function Search({ onSubmit, articleName, onArticleNameChange }) {
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="articleName"></label>

            <input 
                id="articleName"
                name="authorName"
                type="text"
                value={articleName}
                onChange={onArticleNameChange} 
            />
                  <button aria-label="news"> search articles </button>
        </form>
    )
}