import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router';
import {users} from '../userData';
//import User from './User';

///==============///
////  EDIT IS NOT WORKING -- FIX IT /////
///==============///

const CreateUser = ({status, addNewUser, editNewUser})=>{
    const {id:eid} = useParams();
    const history = useHistory();
    const [user, setUser] = useState({name: '', id: '', dept: ''});
    const data = users.find( ({ id }) => id === eid );

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;

        /* if(status==='add'){
            setUser({...user, [attr]:val});
        }
        else{
            setUser({...user, [attr]:val});
        } */
        setUser({...user, [attr]:val});


    }
    if(status === "edit"){
            //setNewUser({...data});
            console.log(data);


        }    
    


    const onsubmit = (e)=>{
        e.preventDefault();

        if(status==='add'){
            addNewUser(user);
        }
        else{
            //editNewUser(user);

        }
        history.push('./userlist');
    }


    const showData = (status)=>{
        if(status==='edit'){
            return data;
        }
        else{
            return user;
        }
    }
    const userInfo = showData(status);

    return(
        <>
            <h1>{status==='add'?'Create':'Edit'} User Page..! {eid}</h1>
                <form onSubmit={onsubmit}>
                Name: <input type='text' name='name' value={userInfo.name} onChange={change}/> <br/>
                ID: <input type='text' name='id' value={userInfo.id} onChange={change}/><br/>
                Dept: <input type='text' name='dept'value={userInfo.dept} onChange={change}/><br/>
                <input type='submit' value={status==='add'?'Create':'Edit'}/>
            </form>
        </>
    );

}

export default CreateUser;