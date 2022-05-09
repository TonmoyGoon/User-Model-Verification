import { useState } from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
    return (
        <div>
            <AddUser />
            <UserList users={[]} />
        </div>
    );
}

export default App;
