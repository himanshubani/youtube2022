import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src="https://ih1.redbubble.net/image.3932231949.1739/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="" />
            <div className="userChatInfo">
                <span>Ambakatum</span>
            </div>
        </div>
    </div>
  )
}
