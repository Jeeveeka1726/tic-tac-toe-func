var boxes = document.querySelectorAll(".box");
console.log(boxes);

var winnigCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var xAttempt = [];
var oAttempt = [];

var result = document.getElementById("result");
var message = document.getElementById("message");
var button = document.getElementById("button");

boxes.forEach(box =>{
    box.onclick = handleClick;
})

var click = 0;

function handleClick(e){
    var id_d = e.target.id
    var texttobeinserted = document.createElement("p");
    boxes[id_d-1].append(texttobeinserted);

    if(click%2==0){
        xAttempt.push(id_d-1);
        texttobeinserted.textContent = "X";
        texttobeinserted.style.color = "orange";
        checkResult(winnigCombinations, xAttempt, "X");
    }else{
        oAttempt.push(id_d-1);
        texttobeinserted.textContent = "O";
        texttobeinserted.style.color = "orange";
        checkResult(winnigCombinations, oAttempt, "O");
    }
    click++;
    if(click == 9 && flag==False){
        result.style.visibility = "visible";
        message.textContent = "It's a tie!";
    }
}

function checkResult(winnigCombinations, attempts, player){

    var ans = [];
    var count = 0;
    for(var i=0; i<winnigCombinations.length; i++){
        if(Array.isArray(winnigCombinations[i])){
            checkResult(winnigCombinations[i], attempts, player);
        }else{
            if(attempts.includes(winnigCombinations[i])){
                ans.push(true);
                count++;
            }else{
                ans.push(false);
            }
        }
    }

    if(ans.every((answer) => answer == true) && count>2){
        result.style.visibility = "visible";
        message.textContent = `${player} won the game!`;
        var flag=True
    }    
}

button.onclick = () =>{
    window.location.reload();
}
