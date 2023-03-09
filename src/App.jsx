import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
        <Suspense fallback='loading'>
          <div className='page'>
            { useRoutes(routes)}
          </div>
        </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
