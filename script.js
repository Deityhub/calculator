$(document).ready(function () {
    $('#input').html('0');
    $('#result').html('0');
    var decimal = true;
    //stores the input
    var inputs = [''];
    //stores the total
    var total;
    //array of  operators for validation without zero
    var operator = ['+', '-', '*', '/'];
    //array of zero
    var opzero = ['.'];
    //numbers for validation
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getValue(input) {
        //gets the input to the screen 
        if (opzero.includes(inputs[inputs.length - 1]) === true && input === '.') {
            console.log('duplicate dots not allowed');

        }
        else if (inputs.length === 1) {
            if (operator.includes(input) === false) {
                inputs.push(input);
                console.log(input);
            } else if (operator.includes(input)) {
                if (input === '*' || input === '/') {
                    console.log('Number or decimal first!')
                } else {
                    inputs.push(input);
                    console.log(input);
                }
            }
        } else if (operator.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
            console.log(input);
        } else if (nums.includes(Number(input))) {
            inputs.push(input);
            console.log(input);
        }
        update();
        testNum(total);
    }
    function update() {
        //gets the current input value and displays to the screen
        total = inputs.join('');
        $('#input').html(total);
    }
    //evaluates inputs and gives the result to the screen
    function getTotal() {
        //gets the evaluated result into the screen
        total = inputs.join('');
        $('#result').html(eval(total));
        $('#input').html('0');
        clear();
    }
    //clear display
    function clear() {
        inputs = [''];
        $('#input').html('0');
    }
    //checks the length of inputted values including the operators
    function testNum(number) {
        if (number.length > 16) {
            $('#input').text(number.substr(number.length - 16, 16));
            if (number.length > 17) {
                number = "";
                clear();
                $('#input').html("Length exceeded!");
                $('#result').html('0');
                
            }
        }
    };
    //handles the click event of the buttons
    $('button').click(function () {
        if (this.id === 'clearall') {
            //console.log('clearing all');
            $('#result').html('0');
            clear();
        } else if (this.id === 'clear') {
            if (inputs[inputs.length - 1] === '') {
                //console.log('go')
                $('#input').html('0');
            } else {
                //console.log('clearing some');
                inputs.pop();
                update();
            }
        } else if (this.id === 'equalButton') {
            getTotal();
            console.log('show me answer');
        } else {
            if (inputs[inputs.length - 1].indexOf('+', '-', '*', '/') === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }
    });
    //perform click action when specified keys are pressed
    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#1").click();
        } else if (keycode === 50) {
            $("#2").click();
        } else if (keycode === 51) {
            $("#3").click();
        } else if (keycode === 52) {
            $("#4").click();
        } else if (keycode === 53) {
            $("#5").click();
        } else if (keycode === 54) {
            $("#6").click();
        } else if (keycode === 55) {
            $("#7").click();
        } else if (keycode === 56) {
            $("#8").click();
        } else if (keycode === 57) {
            $("#9").click();
        } else if (keycode === 48) {
            $("#0").click();
        } else if (keycode === 46) {
            $(".dot").click();
        } else if (keycode === 8) {
            $("#clear").click();
        } else if (keycode === 61 || keycode === 13) {
            $("#equalButton").click();
        } else if (keycode === 43 || keycode === 222) {
            $(".plus").click();
        } else if (keycode === 45) {
            $("#-").click();
        } else if (keycode === 42 || keycode === 120) {
            $(".times").click();
        } else if (keycode === 47) {
            $(".divide").click();
        }
    }).keyup(function (event){
       var keycode = (event.keyCode ? event.keyCode : event.which);
       if(keycode === 46){
           $("#clearall").click();
       } 
    });
});
