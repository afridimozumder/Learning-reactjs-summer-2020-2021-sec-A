import {Link} from 'react-router-dom';
const myHomepage = ()=>{
    return(
        <div>
            <Link to='/create'><h3>Regsiter New Employee |</h3></Link><br/>
            <Link to='/userlist'><h3>| Employee List</h3></Link>
        </div>
    );
}

export default myHomepage;