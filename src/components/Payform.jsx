import React from 'react';
import { useForm } from 'react-hook-form';
import { cardValidator } from './Validators';

const Payform = ()=> {

    const inputContainerStyle = 'input-container relative flex flex-col justify-items-center items-start mt-5'
    const labelStyle = 'label mt-[9px] text-sm leading-[14px] font-medium';
    const inputStyle = 'input w-full h-10 text-lg mt-[8px] p-3 border border-solid border-[1.5px] border-[#A7BAC5] placeholder-[#A7BAC5] placeholder-font-300 rounded-lg';
    const validationStyle = 'validation-msg absolute top-[72px] text-xs font-semibold ml-2 text-red-400'

    const { register, formState: { errors }, handleSubmit }= useForm();

    const onSubmit = (data)=>{
        console.log(data);
    }

  return (
    <div className='container flex justify-center bg-gray-300'>
        <form className='payform m-4 p-[32px] w-[319px] h-[640px] bg-white rounded-[8px]' onSubmit={handleSubmit(onSubmit)}>
            <img src="../../logo1.webp" alt="Logo" width="71" height="71" className='mx-auto my-0' />
            <h1 className="title text-2xl mt-1 mb-3 text-[20px] font-sans font-extrabold text-center leading-6">Payment info</h1>
            <div className={`${inputContainerStyle} mt-[24px]`}>
                <label htmlFor="name" className={`${labelStyle}`}>Full Name</label>
                <input type="text" id="name" className={inputStyle} placeholder='Your Name' {...register('fullName', {
                    required: true,
                    minLength:5,
                    maxLength: 35
                })}/>
                {errors.fullName && <div className={validationStyle}>Enter a valid name</div>}
            </div>
            <div className={`${inputContainerStyle} relative`}>
                <label htmlFor="name" className={`${labelStyle}`}>Card Number</label>
                <input type="text" id="name" className={`${inputStyle}`} placeholder='1234 1234 1234 1234'  {...register('cardNumber', {
                    required: true,
                    validate: cardValidator
                })}/>
                <span className="card-icon material-symbols-outlined w-1 absolute ml-auto mr-4  mb-0 top-11 right-2 text-base text-gray-400">credit_card</span>
                {errors.cardNumber && <div className={validationStyle}>Enter a valid card number</div>}
            </div>
            <div className="card-data-container flex flex-row justify-between">
                <div className={`${inputContainerStyle} w-[45%] mx-0`}>
                    <label htmlFor="name" className={labelStyle}>Expiration</label>
                    <input type="text" id="name" className={inputStyle} placeholder='MM/YY' {...register('expiration', {
                        required: true
                    })}/>
                    {errors.expiration && <div className={validationStyle}>Enter a valid date</div>}
                </div>
                <div className={`${inputContainerStyle} w-5/12 mx-0 relative`}>
                    <label htmlFor="name" className={labelStyle}>CVV</label>
                    <input type="text" id="name" className={`{${inputStyle} mr-0 w-full`}  placeholder='···' {...register('cvv', {
                        required: true,
                        minLength:3,
                        maxLength: 4
                    })}/>
                    <span className="card-icon material-symbols-outlined w-1 absolute ml-auto mr-4 mb-0 top-11 right-2 text-base text-gray-400">info</span>
                    {errors.cvv && <div className={validationStyle}>Enter valid CVV</div>}
                </div>
            </div>
            <div className={inputContainerStyle}>
                <label htmlFor="name" className={labelStyle}>Zip Code</label>
                <input type="text" id="name" className={inputStyle} placeholder='Your ZIP' {...register('zipCode', {
                        required: true,
                        minLength:5,
                        maxLength: 6
                    })}/>
                {errors.zipCode && <div className={validationStyle}>Enter a valid ZIP number</div>}
            </div>
            <button type="submit" alt="Confirm Payment" className='submit-button bg-[#6E41E2] rounded-lg h-10 mt-8 mb-1 w-full text-white font-bold text-sm flex flex-row justify-center items-center' >
                <span className="material-symbols-outlined text-sm">lock</span>
                <h3 className="button-text text-sm ml-2"> Confirm Payment</h3>
                </button>
            <p className="submit-message text-[12px] text-gray-400 text-center my-1">You verify that this info is correct</p>
        </form>
    </div>
  )
}

export default Payform