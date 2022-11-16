import React from "react";


const Search= () => {
  return (
   <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder="Find a User"/>
      </div>
      <div className="userChat">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEkhIlRKmSOHQ/profile-displayphoto-shrink_100_100/0/1662209173089?e=1674086400&v=beta&t=yOUMj-GVrrjQhZR0fdTQwvoJ_yQd9d-s7QhTRfFTO4g"/>
       <div className="userChatInfo">
        <span>Kuda</span>
       </div>
      </div>
    </div>
  )
}
export default Search