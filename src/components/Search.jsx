import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='Find a User'/>
    </div>
    <div className="userChat">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtGTIZTyuhaT-Z0szf_VAQlkihHDHfHnWOAw&usqp=CAU" alt="" />
      <div className="userChatInfo">
        <span>Jane</span>
      </div>
    </div>
    </div>
  )
}

export default Search