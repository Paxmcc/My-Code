let runningTotal = 0;
let buffer = "0";
let prevoiousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNan(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);

    }
    screen.innerText = buffer;

}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(prevoiousOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            prevoiousOperator = null;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length ===1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length - 1);
            }
            break;
            
    }
}