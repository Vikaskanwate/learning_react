import axios from 'axios';
import { useEffect, useState } from 'react';
const App = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const res = await axios.get('https://picsum.photos/v2/list?page=2&limit=10');
        console.log(res.data);
        setData(res.data)
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <div className="p-10">
            {/* <button onClick={getData} className="bg-teal-600 text-white font-bold px-3 py-3 rounded active:scale-90"> Click Me</button> */}
            <div className='p-5 mt-5 bg-gray-950'>
                {data.map((elem, idx) => {
                    return (
                        <div key={idx} className="bg-gray-50 text-black flex items-center justify-between w-full px-7 py-7 rounded mb-3">
                            <img className='h-40' src={elem.download_url} alt="" />
                            <h1>{elem.author}</h1>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default App;