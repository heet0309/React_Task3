import React from 'react'
import List from './todo'
import SearchFilter from './Filter'
import GuessNumber from './NumberGame'
import Quiz from './Quiz'
import Timer from './Timer_component'
import ToggleButton from './toggleButton'

export function App() {
  return (
    <div>
        <List/>
        <ToggleButton/>
        <Timer/>
        <SearchFilter/>
        <GuessNumber/>
        <Quiz/>
    </div>

  )
}

export default App;