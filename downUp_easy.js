let user = 'Can';

function downUp(str) {
    if (str.length === 1) {
        console.log(str);
    }
    else {
        console.log(str);
        downUp(str.slice(0,str.length-1));
        console.log(str);
    }
}

downUp(user);