import React,{ useEffect, useState } from "react";
import axios from 'axios' ;
import Spinner from "./Spinner";
const API_KEY = 'brYfPmmyMdph8T44bnlbVtDTt1mN2oOA';

function Random(){
    const [loading,setLoading] = useState(false) ;
    const [gif,setGif] = useState('') ;
    
    async function fetchData(){
        setLoading(true) ;
        let url = `http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}` ;
        const data =  await fetch(url) ;
        const output = await data.json() ;
        
        const image = output.data.images.downsized_large.url ;
        setGif(image) ;
        setLoading(false) ;
    }
    
    useEffect(() => {
        fetchData() ;
    },[])
    function clickHandler(){
        fetchData() ;
        
    }
     return (
        <div className="w-11/12 max-w-[630px] py-6 max-h-max bg-green-500 rounded-md flex flex-col items-center gap-y-4 px-3">
            <h1 className="text-3xl font-semibold underline text-center">
                A Random GIF
            </h1>

            {
                loading ? (<Spinner></Spinner>) : (<img src={gif} height={450}></img>)
            }

            
            <button onClick={clickHandler} className="w-8/12 bg-white opacity-50 py-1 rounded-lg text-lg font-semibold">
                Generate
            </button>

        </div>
    )
}

export default Random ;