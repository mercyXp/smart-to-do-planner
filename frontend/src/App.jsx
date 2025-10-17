import { ThemeToggle } from './components/ThemeToggle';


function App(){
  return (
    <div className="min-h-screen bg-bg text-text p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My App</h1>
          <ThemeToggle />
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Card Title</h2>
            <p className="text-text-muted">This is a card component with your theme styles.</p>
          </div>

          <div className="bg-primary-bg text-primary-text p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Primary Section</h2>
            <p>This uses primary background and text colors.</p>
          </div>

          <button className="btn-primary">Primary Button</button>
          <button className="btn-destructive">Destructive Action</button>

          <input 
            type="text" 
            placeholder="Test input field" 
            className="w-full"
          />
        </div>

        {/* Chart colors demo */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Chart Colors</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <div 
                key={num}
                className={`w-12 h-12 bg-chart-${num} rounded`}
                title={`Chart Color ${num}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;