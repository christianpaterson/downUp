let str = 'Cant';
let timesCalled = 0;
let reachedHalfWay = false;
let reduce = 0;
let count = 1;

function sandwich(input) {

    if(input.length > 1 && !reachedHalfWay) {
        input = input.slice(0, input.length - reduce);
        reduce = 1;
        sandwich(input);
    }

    else if(input.length === 1 && !reachedHalfWay) {
        reachedHalfWay = true;
        input = input + str.charAt(count);
        count++;
        sandwich(input);  
    }

    else if(input.length !== str.length && reachedHalfWay) {
        input = input + str.charAt(count);
        count++;
        sandwich(input);
    }
    
    console.log(input);
}

console.log(sandwich(str));