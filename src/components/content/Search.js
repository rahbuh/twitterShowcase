import React from 'react'

const Search = () => {
    return (
        <form className='form'>
            <input type="text" name="text" placeholder="Search Twitter..."/>
            <input type="submit" value="Search" className="btn"/>  
        </form>
    )
}

export default Search
