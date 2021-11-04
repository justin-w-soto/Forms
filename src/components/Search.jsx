import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onSubmit, query, onChange }) {
    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="articleName">Search Articles</label>

            <input 
                id="articleName"
                name="authorName"
                type="text"
                value={query}
                onChange={onChange} 
            />
                  <button aria-label="news"> Search </button>
        </form>
    )
}

