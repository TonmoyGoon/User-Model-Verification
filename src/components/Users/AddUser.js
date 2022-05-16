import { useState, useRef } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();  // value generated here always an object.Which always has a current prop.and
    const ageInputRef = useRef();   // the current prop holds actual value that ref is connected with.

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non empty values)."
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            })
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    // When anyone clicks on the backdrop/"Okay" button error message vanish.

    const errorHandler = () => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}>
            </ErrorModal>}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper >
    )
}

export default AddUser;