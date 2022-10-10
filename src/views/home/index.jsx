import React, { memo, useEffect, useState } from 'react'

import hRequest from '@/services'

const Home = memo((props) => {

  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    hRequest.get({ url: '/home/highscore'}).then((res) => {
        console.log(res)
        setHighScore(res)
    })
  },[])

  return (
    <div>
        <div className='title'>{highScore.title}</div>
        <ul>
            { highScore.list?.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
    </div>
  )
})


export default Home