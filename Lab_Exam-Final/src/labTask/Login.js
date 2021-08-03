//import {useParams} from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router';

export const Userlogin = ({uname, pass})=>{
    const history = useHistory();

    const [user, setUser] = useState({uname: '', pass: ''});
    
    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;

        console.log(e);

        /* if(status==='add'){
            setUser({...user, [attr]:val});
        }
        else{
            setUser({...user, [attr]:val});
        } */
        setUser({...user, [attr]:val});


    }
    
    const onSubmit = (e)=>{
        e.preventDefault();

/*         if('1'==={1+1}){
            addNewUser(user);

            history.push('');
        } */
        history.push('./home');

    }

    
    return(
        <>
        <h2>_User Login.</h2>
        <form onSubmit={onSubmit}>
            Username: <input type='text' name='username' value={user.uname} onChange={change}/> <br/><br/>
            Password: <input type='password' name='password' value={user.pass} onChange={change}/><br/>
            <input type='submit' value='Login'/>
        </form>
        </>
    );
}