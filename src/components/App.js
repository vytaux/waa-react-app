import '../styles/App.css';
import Dashboard from "./Dashboard";
import SelectedPostIdContext from './SelectedPostIdContext';
import {useState} from "react";

function App() {
    // TODO this shouldnt be here, but inside Dashboard????
    const [selectedPostId, setSelectedPostId] = useState(null);

    return (
        <SelectedPostIdContext.Provider
            value={{ selectedPostId, setSelectedPostId }}>
                <Dashboard/>
        </SelectedPostIdContext.Provider>
    );
}

export default App;
