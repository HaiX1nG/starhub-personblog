import React, { useState } from 'react'
import AppRouter from './router/AppRouter'
import "antd/dist/reset.css"

const App: React.FC = () => {
  return (
    <div className='App'>
      <AppRouter />
    </div>
  )
}

export default App
