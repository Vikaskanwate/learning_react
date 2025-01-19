const Card = (props)=>{
    console.log(props.photo)
    return (
        <div className="bg-white text-black inline-block p-6 text-center rounded ml-5">
            <img className="h-32 w-32 rounded-full mb-3" src={props.photo} alt="" />
            <h1 className="text-2xl font-semibold mb-4">{props.user}</h1>
            <h2 className="text-xl mb-3">{props.city},{props.age}</h2>
            <button className="bg-emerald-700 text-white px-4 py-2 rounded font-medium">Add Friends</button>
        </div>
    )
}

export default Card