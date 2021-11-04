import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onSubmit, query, onChange }) {
    return(
        <div style={{backgroundColor: '#85756E', color: '#CDC5B4', height: '200', padding: '1em'}}>
        <form onSubmit={onSubmit} >

            <label htmlFor="articleName" style={{color:'#DED9CE', fontSize: '2em', 
            fontFamily: 'times', fontWeight: '900', margin: '1em'}}> SEARCH ARTICLES</label>
            <br/>

            <input 
                id="articleName"
                name="authorName"
                type="text"
                value={query}
                onChange={onChange} 
                style={{marginLeft:'2em', marginTop: '.25em', color: '#551B14', fontSize: '1em', fontWeight: '900', fontFamily: 'times'}}
            />
            
            <button aria-label="search-articles"  
                style={{backgroundColor: '#84291F', color: 'whitesmoke', fontSize:'1.5em', fontWeight: '500', borderRadius: '.35em', fontFamily: 'times', marginLeft: '.5em' }}>
                Search
            </button>

            <nav style= {{fontSize: '8em', display: 'flex', flexDirection: 'row-reverse', marginRight: '2rem',
                color:'#DED9CE', fontFamily: 'times', fontWeight: '900' }}>
                BAD NEWS DAILY
            </nav>

        </form>
        </div>
    )
}

