// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

//power(2, 2)  = 4

function power(b, e){
    if(e === 0) return 1
    e--

    return b* power(b, e)
            // 2 * power(2, 1)
                // 2 * 1 
}