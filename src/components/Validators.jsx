const cardValidator = (value) => {
    const visaRegexValidator = '/^4[0-9]{12}(?:[0-9]{3})?$/';
    const masterCardRegexValidator = '/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/';
    const americanExpressRegexValidator = '/^3[47][0-9]{13}$/';

    const anyCardValidator = (value, validator1, validator2, validator3) => {

        return (value.match(validator1) || value.match(validator2) || value.match(validator3))
    }

    return (anyCardValidator(value, visaRegexValidator, masterCardRegexValidator, americanExpressRegexValidator ))
}

export { cardValidator }