let result = document.getElementById('viewfinder-result')

function insert(num){
    var number = document.getElementById('viewfinder-result').innerHTML;
    document.getElementById('viewfinder-result').innerHTML = number + num;
}

function fullClear(){
    document.getElementById('viewfinder-result').innerHTML = '';
}
function back(){
    let result = document.getElementById('viewfinder-result').innerHTML;
    document.getElementById('viewfinder-result').innerHTML = result.substring(0, result.length -1);
}

function calc(){
    let result = document.getElementById('viewfinder-result').innerHTML;
    if (result){
        document.getElementById('viewfinder-result').innerHTML = eval(result);
    } else {
        document.getElementById('viewfinder-result').innerHTML = '0'
    }
}