import "./App.css";
import { Board } from "./Components/Board";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Board size={{ x: 4, y: 4 }} />
            </header>
        </div>
    );
}

export default App;
