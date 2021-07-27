import { useParams } from "react-router";

import {useState} from 'react';
import {users} from '../usersData';

const CreateUser = ({status, callback})=>{
    const {id:eid} = useParams();

    const [newUser, setNewUser] = useState({
        id: '',name: '',dept: ''
    });
    
    if(status === "edit"){
        const  usersData = users.find((user)=> user.id === eid);
        }

    const formSubmit=()=>{
        if(status === 'add'){
            callback(newUser);
            setNewUser({
                id: '',name: '', dept: '',
            })

        }
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Create':'Edit'} User Page: {eid}</h3>
            <form onSubmit={formSubmit}>
                Name: <input type='text' name='name' value=""/> <br/>
                ID: <input type='text' name='id' value="" /><br/>
                Dept: <input type='text' name='dpet' value="" /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;