'use strict';

// 1. isHometown

const isHometown = (town) => town === 'San Francisco';

// 2. getFullName

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// 3. calculateTotal

function calculateTotal(basePrice, state, tax = 0.05) {
    subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA'){
        fee = 0.03 * subtotal;
    } else if(state === 'PA') {
        fee = 2;
    } else if(state === 'MA') {
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }
    }

    return subtotal + fee;
};
