const Navbar = ()=>{
    return (
        <>
            <nav className="bg-emerald-800">
                <h1 className="text-white text-1xl pl-5">Home</h1>
                <div className="text-white text-1xl nav-left flex pr-5">
                    <h2>Services</h2>
                    <h2>contact</h2>
                    <h2>Login</h2>
                    {/* <Link to='/'>Home</Link> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar