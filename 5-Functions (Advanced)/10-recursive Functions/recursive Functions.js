function recursive(max) {
    //0 1 2 3 4 5 6 7 8 9 10
    console.log(max);

    if(max >=10) return;
    max++

    //this function executes its code and calls itself back
    recursive(max);
}

recursive(0);