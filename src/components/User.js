import './User.css';
import {Link} from 'react-router-dom';

const User = ({id, title, body, callback})=>{
    return(
        <div className='user'>
            <h3>Title : {title}</h3>
            <p>ID : {id}</p>
            <p>Post : {body}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Edit </Link>
        </div>
    );
}

export default User;