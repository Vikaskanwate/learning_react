import { Link } from 'react-router-dom';

const Header = ()=>{
    return (
        <div className="py-5 px-10 bg-emerald-600 text-white flex justify-between">
            <h2 className="text-2xl">ReactJS</h2>
            <div className="flex gap-10 text-lg underline">
                <Link to="/Home">Home</Link>
                <Link to="/Services">Services</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/Login'>Login</Link>
            </div>
        </div>
    )
}

export default Header;