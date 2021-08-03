import {Link} from 'react-router-dom';
const Navbar = ()=>{
    return(
        <div>
            {/* <Link to='/create'>Create New User |</Link>
            <Link to='/userlist'>| User List</Link> */}
            <Link to='/register'><h3>| Regsiter New Employee |</h3></Link><br/>
            <Link to='/emplist'><h3>| Employee List |</h3></Link>
        </div>
    );
}

export default Navbar;