// '(()'
// '())'
// ')'
// ')('

const numberToComplete = (str) => {
    console.log('str: ', str);
    if (!str || str === '') {
        console.log('Error string is empty or undefined');
        return null;
    }

    if (str.trim() === '') {
        console.log('Error string contains all spaces');
        return null;
    }

    const openParens = [];
    const closedParens = [];

    const OPEN_PAREN = '(';
    const CLOSED_PAREN = ')';

    let countOpenNeeded = 0;
    let countClosedNeeded = 0;
    for(const paren of str) {
        if (paren === OPEN_PAREN) {
            openParens.push(paren);

            if (openParens.length > closedParens.length) {
                countClosedNeeded++;
            } 
        }

        if (paren === CLOSED_PAREN) {
            closedParens.push(paren);

            if (closedParens.length > openParens.length) {
                countOpenNeeded++;
            }
        }
    }

    console.log('openParens.length:', openParens.length);
    console.log('closedParens.length:', closedParens.length);

    console.log('countOpenNeeded:', countOpenNeeded);
    console.log('countClosedNeeded:', countClosedNeeded);

    return countClosedNeeded + countOpenNeeded;
}

numberToComplete(')('); // 2
numberToComplete('((()))'); // 0
numberToComplete('((())'); // 1
numberToComplete('())'); // 2
