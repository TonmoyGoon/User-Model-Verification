import { useState } from 'react';
import './App.css';

function App() {

    const [userName, setUserName] = useState([
        { text: "Rahim", id: 1 },
        { text: "Tamim", id: 2 }
    ]);

    const [userAge, setUserAge] = useState([
        { age: 25, id: 1 },
        { age: 34, id: 2 }
    ]);

    const addUserData = enteredText => {
        setUserName(prevData => {
            const updatedGoals = [...prevData];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    return (
        <div className="App">

        </div>
    );
}

export default App;
