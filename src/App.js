import { useState } from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';

function App() {

    const [userName, setUserName] = useState([
        { text: "Harry", id: 1 },
        { text: "Tamim", id: 2 }
    ])

    const [userAge, setUserAge] = useState([
        { text: "24 years old", id: 1 },
        { text: "33 years old", id: 2 }
    ])

    return (
        <div className="App">
            <AddUser />
        </div>
    );
}

export default App;
