const Confirmation = () => {

    
    return(
        <div className="background absolute top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-50 z-10 flex justify-center items-center">
            <div className='cvv-info-container bg-gray-50 border absolute top-40 h-36 w-80 rounded-xl z-20 flex flex-col justify-center items-center'>
                <h3 className="confirmation-message my-3 font-extrabold">Your payment information has been sent.</h3>
                <p className="confirmation-text">Thank you for your purchase.</p>
                <button className='confirmation-button h-30 w-32 rounded-lg bg-violet-600 text-white my-3' onClick={()=>window.location.reload()} >OK</button>
            </div>
        </div>
        )
}

export default Confirmation;