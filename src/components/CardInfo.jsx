// import React from 'react';

const CardInfo = ({toggleCardInfo}) => {

    return(
        <div className="card-info-container background absolute top-0 bottom-0 left-0 right-0 bg-slate-600 bg-opacity-50 z-10 flex justify-center items-center">
        <div className='cvv-info-container bg-gray-50 border absolute top-40 h-50 w-80 rounded-xl z-20 flex flex-col justify-center items-center'>
            <h2 className="cvv-info-title my-3 font-extrabold">Featured credit cards</h2>
            <div className="card-logo-container w-full flex flex-row justify-center items-center gap-1 flex-wrap">
            <img src="../src/assets/Visa_logo.webp" alt="Master Card logo" height="70px" width="70px" className="jcb-logo" />
            <img src="../src/assets/Mastercard_logo.webp" alt="Master Card logo" height="70px" width="70px" className="jcb-logo" />
            <img src="../src/assets/American_Express_logo.webp" alt="Diners Club card logo" height="70px" width="70px" className="jcb-logo" />
            <img src="../src/assets/Diners_Club_logo.webp" alt="Diners Club card logo" height="70px" width="70px" className="jcb-logo" />
            <img src="../src/assets/Discover.webp" alt="Discover card logo" height="70px" width="70px" className="jcb-logo" />
            <img src="../src/assets/JCB_logo.webp" alt="JCB card logo" height="70px" width="70px" className="jcb-logo" />
        </div>

            <p className="cvv-info-paragraph my-5 mx-2 text-center">Visa, Master Card, American Express, Diners Club, Discover and JCB cards are admitted.</p>
            <button className="close my-5 rounded bg-violet-600 w-20 h-8 text-white" onClick={toggleCardInfo}>OK</button>
        </div>
    </div>

    )

}

export default CardInfo;