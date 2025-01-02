import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

const App = () => {
  return (
    <div className="min-h-screen bg-darkBackground text-lightText flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-extrabold text-primary mb-4">RANDOM GIFS</h1>
      <div className="flex flex-col items-center justify-center gap-10">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App