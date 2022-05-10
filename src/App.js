import { useState } from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUesrsList) => {
            return [...prevUesrsList, { id: Math.random().toString(), name: uName, age: uAge }];
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;
