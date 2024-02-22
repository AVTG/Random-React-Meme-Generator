import { useEffect , useState } from "react";
import Spinner from "./Spinner";
const API_KEY = 'brYfPmmyMdph8T44bnlbVtDTt1mN2oOA';

function Tag(){
    const [gif,setGif] = useState('') ;
    console.log(API_KEY) ;
    const [formData, setFormData] = useState({category:"random"}) ;
    const [loading , setLoading] = useState(false) ;
    
    async function fetchData(){
        setLoading(true) ;
        let url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${formData.category}` ;
        const data =  await fetch(url) ;
        const output = await data.json() ;
        
        const image = output.data.images.downsized_large.url ;
        setGif(image) ;
        setLoading(false) ;
        
    }
    
    useEffect(() => {
        fetchData() ;
    },[])
    
    function changeHandler(event){
        setFormData(prev => (
            {
                ...prev,
                [event.target.name]: [event.target.value]
            }
        ))
        
    }
    
    function submitHandler(event){
        event.preventDefault() ;
        fetchData() ;
    }

     return (
        <div className="w-1/2 py-6 max-h-max bg-blue-600 rounded-md flex flex-col items-center gap-y-4">
            <h1 className="text-3xl font-semibold underline">
                {formData.category} GIF
            </h1>


            {
                loading ?(<Spinner></Spinner>) :(<img src={gif} height={450}></img>)
            }

                



            <form onSubmit={submitHandler} className="w-full mx-auto flex flex-col items-center gap-y-4">
                <input type="text" placeholder="Enter GIF Category" name="category" onChange={changeHandler}value={formData.category} className="w-8/12 bg-white py-1 rounded-lg text-lg px-3 text-center"></input>
                <button className="w-8/12 bg-white opacity-50 py-1 rounded-lg text-lg font-semibold">
                    Generate
                </button>
            </form>

        </div>
    )
}

export default Tag ;