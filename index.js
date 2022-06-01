for (let i=0; ;i++){
    let input = prompt();
    if (input === "break"){
        break;
    }else if (input === "continue")  //или же }else if (input === "continue"){} , WebStorm говорит делать именно так
        continue;                    //вроде, если опустить continue, то результат будет тот же
    else{
        alert(i);
    }
}


