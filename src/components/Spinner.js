import './Spinner.css' ;
function Spinner(){
    return(
        <div className='min-h-[450px] flex items-center justify-center'>
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner