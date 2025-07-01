import React from 'react'

const Card = () => {
    const user = {
        name: 'hedy lamarr',
        imageurl :'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize :90,
    }
  return (
    <div>
        <h1>{user.name}</h1>
        <img className='avatar' 
        src={user.imageurl}
        alt={'photo of ' + user.name}
        style={{width : user.imageSize,
            height : user.imageSize
        }}/>
    </div>
  )
}

export default Card