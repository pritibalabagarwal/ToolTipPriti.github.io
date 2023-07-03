import ToolTip from './ToolTip';
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <ToolTip position = "top" />
        <ToolTip position = "bottom" />
      </div>
      <h1 style={{padding: 15}}>TOOLTIP</h1>
      <div>
        <ToolTip position = "left" />
        <ToolTip position = "right" />
      </div>
    </div>
  );
}

export default App;