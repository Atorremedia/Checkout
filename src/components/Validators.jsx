const cardValidator = (cardNumber) => {

    const trimmedCardNumber = cardNumber.trim().split(' ').join('');
    console.log(trimmedCardNumber);
    const allCardsValidator = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    const correct = allCardsValidator.test(trimmedCardNumber);
    
    return (correct);
}
export { cardValidator }


const fullNameValidator = (name) => {

    const fullNameValidator = /([a-z]{2,}\s)[a-z]{2,}/;
    const correct = fullNameValidator.test(name);

    return (correct);
}
export { fullNameValidator }

const dateValidator = (cardDate) => {

    const dateValidator = /[0-9]{2}\/[0-9]{2}/;
    const correctFormat = dateValidator.test(cardDate);
    const cardMonth = cardDate.split('/')[0];
    const cardYear = cardDate.split('/')[1];

    if (!correctFormat) { return false }
    if (cardMonth < 1 || cardMonth > 12) { return false }
    if (cardYear < 22 || cardYear > 99) { return false }

    return ( true );
}
export { dateValidator }