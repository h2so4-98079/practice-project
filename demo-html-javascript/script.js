var cnt = 0;

function buttonClick(){
    window.print();
    // console.log("Button is clicked!");
    // document.write(4 + 5);
    // window.alert("Button is clicked! " + cnt);
}

function myFunc(){
    document.getElementById('demo').innerHTML = "Hello!";
    // sleep(1);
    buttonClick();
    ++cnt;
}