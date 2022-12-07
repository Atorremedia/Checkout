
const CvvInfo = ({toggleCvvInfo}) => {

    return(
        <div className="background absolute top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-50 z-10 flex justify-center items-center">
            <div className='cvv-info-container bg-gray-50 border absolute top-40 h-50 w-80 rounded-xl z-20 flex flex-col justify-center items-center'>
                <h2 className="cvv-info-title my-3 font-extrabold">CVV</h2>
                <p className="cvv-info-paragraph my-5 mx-2 text-center">Insert the 3 or 4 digit CVV security code on your card</p>
                <img src="../src/assets/Cvv.webp" alt="JCB card logo" height="270px" width="370px" className="jcb-logo" />
                <button className="close my-5 rounded bg-violet-600 w-20 h-8 text-white" onClick={toggleCvvInfo}>OK</button>
            </div>
        </div>
        )
}

export default CvvInfo;