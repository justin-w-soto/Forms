import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onSubmit, query, onChange }) {
    return(
        <div style={{backgroundColor: '#85756E', color: '#CDC5B4', height: '200', padding: '1em'}}>
        <form onSubmit={onSubmit} >
            <label htmlFor="articleName" style={{color:'#DED9CE', fontSize: '2em', fontFamily: 'monospace', fontWeight: '900', margin: '1em'}}> SEARCH ARTICLES</label>

            <input 
                id="articleName"
                name="authorName"
                type="text"
                value={query}
                onChange={onChange} 
                style={{marginInline:'.5em', color: '#551B14', fontSize: '1em', fontWeight: '900', fontFamily: 'monospace'}}
            />
                  <button aria-label="search-articles"  style={{backgroundColor: '#6D3D14', color: 'whitesmoke', fontSize:'1em', fontWeight: '500', borderRadius: '.35em', fontFamily: 'monospace' }}> Search </button>
        </form>
        </div>
    )
}

