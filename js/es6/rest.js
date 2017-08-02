function sortRestArgs(...theArgs) {
    var sortedArgs = theArgs.sort();
    return sortedArgs;
}

console.log(sortRestArgs(5,3,1)); // 1,3,5로 보임

function sortArguments() {
    var sortedArgs = arguments.sort();
    return sortedArgs; // 이는 결코 일어나지 않음
}

// TypeError 발생: arguments.sort는 함수가 아님
console.log(sortArguments(5,3,1));