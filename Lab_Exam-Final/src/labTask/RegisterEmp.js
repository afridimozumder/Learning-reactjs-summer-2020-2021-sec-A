export const UserReg = ()=>{
    
    const onSubmit = (e)=>{
        e.preventDefault();
    }

    
    return(
        <>
        <h2>_Employee Registration.</h2>
        <form onSubmit=''>
            Name: <input type='text' name='name' value='' onChange=''/> <br/><br/>
            contactNo: <input type='text' name='contact' value='' onChange=''/> <br/><br/>
            Username: <input type='text' name='username' value='' onChange=''/> <br/><br/>
            Password: <input type='password' name='password' value='' onChange=''/><br/>
            <input type='submit' value='Submit'/>
        </form>
        </>
    );
}