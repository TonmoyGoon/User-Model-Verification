import { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = props => {

    const [enteredUserName, setEnteredUserName] = useState("");
    const [enteredUserAge, setEnteredUserAge] = useState("");

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredUserAge(event.target.value)
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            return;
        }
        if (+enteredUserAge < 1) {
            return;
        }
        console.log(enteredUserName, enteredUserAge);
        setEnteredUserName("");
        setEnteredUserAge("");
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUserName} onChange={usernameChangeHandler}></input>
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" value={enteredUserAge} onChange={ageChangeHandler}></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;