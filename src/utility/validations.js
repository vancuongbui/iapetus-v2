const validate = (val, rules, connectedValue) => {
    let isValid = true;
    for (const rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && emailValidator(val);
                break;
            case 'minLength':
                isValid = isValid && minLengthValidator(val, rules[rule]);
                break;
            case 'equalTo':
                isValid = isValid && equalToValidator(val, connectedValue[rule]);
                break;
            case 'namePattern':
                isValid = isValid && nameValidator(val);
                break;
            case 'phonePattern':
                isValid = isValid && phoneValidator(val);
                break;
            default: 
                isValid = true;
        }
    }
    return isValid;
};

const emailValidator = val => {
    return (/^.*@.*\..*$/).test(val);
};

const minLengthValidator = (val, minLength) => {
    return val.length >= minLength;
};

const equalToValidator = (val, confirmVal) => {
    return val === confirmVal;
};

const nameValidator = val => {
    return (/^[a-zA-Z\s]+/).test(val);
};

const phoneValidator = val => {
    return (/^[0-9]+/).test(val);
};
export default validate;
