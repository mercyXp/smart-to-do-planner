import React from 'react';
import ThemeToggleButton from '@/components/ThemeToggleButton';

function App(){
   return (
    <div className="min-h-screen bg-bg text-text flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Smart To-Do Planner</h1>
      <ThemeToggleButton />
    </div>
  );
}
export default App;