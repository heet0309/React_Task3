import React from 'react'
import List from './todo'
import SearchFilter from './Filter'

import Timer from './Timer_component'
import ToggleButton from './toggleButton'

export function App() {
  return (
    <div>
        <List/>
        <ToggleButton/>
        <Timer/>
        <SearchFilter/>
    </div>

  )
}

export default App;