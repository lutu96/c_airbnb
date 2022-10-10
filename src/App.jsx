import React, { memo } from 'react'
// import { Navigate, Route, Routes } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

// import Home from '@/views/home'
// import Detail from '@/views/detail'
// import Entire from '@/views/entire'

import routes from '@/router'

const App = memo(() => {
  return (
    <div>
      <div className='header'>header</div>
      <div className='page'>
        {/* <Routes>
          <Route path='/' element={ <Navigate to='/home'/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/detail' element={<Detail/>}></Route>
          <Route path='/entire' element={<Entire/>}></Route>
        </Routes> */}
        { useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App
