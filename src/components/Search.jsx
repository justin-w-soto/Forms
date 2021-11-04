import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onSubmit, query, onChange }) {
    return(
        <div style={{backgroundColor: '#85756E', color: '#CDC5B4', height: '200', padding: '1rem'}}>
        <form onSubmit={onSubmit} >

            <label htmlFor="articleName" style={{color:'#DED9CE', fontSize: '2rem', 
            fontFamily: 'times', fontWeight: '900', margin: '1rem'}}> SEARCH ARTICLES</label>
            <br/>

            <input 
                id="articleName"
                name="authorName"
                type="text"
                value={query}
                onChange={onChange} 
                style={{marginLeft:'2rem', marginTop: '.25rem', color: '#551B14', fontSize: '1rem', fontWeight: '900', fontFamily: 'times'}}
            />
            
            <button aria-label="search-articles"  
                style={{backgroundColor: '#84291F', color: 'whitesmoke', fontSize:'1.5rem', fontWeight: '500', borderRadius: '.35rem', fontFamily: 'times', marginLeft: '.5rem' }}>
                Search
            </button>

            <nav style= {{fontSize: '6rem', display: 'flex', flexDirection: 'row-reverse', marginRight: '2rem',
                color:'#DED9CE', fontFamily: 'times', fontWeight: '900' }}>
                BAD NEWS DAILY
            </nav>

        </form>
        </div>
    )
}

