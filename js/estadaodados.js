//$(".porcentagens input").slider();

var currentValues = {
    'OtB': 0,
    'R': 0
};

$(document).ready(function(){


    function atualizaSmall(otbValue, rValue, rpValue) {
        $(".valorOtB small").text(otbValue);
        $(".valorR small").text(rValue);
        $(".valorRP small").text(rpValue);
    }
    var ChangeInt = function() {
        console.log("teste2");
        if (RP.slider('getValue') > 0) {
            RP.slider('setValue',(100 - OtB.slider('getValue') - R.slider('getValue')));
        } else {
            if (currentValues[this.id] <= this.value) {
                if (this.id == "OtB") {
                    R.slider('setValue',(100 - OtB.slider('getValue')));
                } else {
                    OtB.slider('setValue',(100 - R.slider('getValue')));
                }
            } else {
                RP.slider('setValue',(100 - OtB.slider('getValue') - R.slider('getValue')));
            }
        }
        currentValues[this.id] = this.value;
        atualizaSmall(OtB.slider('getValue'), R.slider('getValue'), RP.slider('getValue'));
    };

    function DispatchSlide() {
        this.trigger({
                'type': 'slide',
                'value': slideEventValue
            })
            .data('value', this.value)
            .prop('value', this.value);
            console.log("teste")
    };

    var RP = $('#RP').slider({});
    var OtB = $('#OtB').slider({})
            .on('slide', ChangeInt);
    $('#OtB').slider().click(function(){alert("teste")});
    var R = $('#R').slider({})
            .on('slide', ChangeInt)
            .on('touch', ChangeInt)
            .on('click', DispatchSlide);
    $(".valorOtB small").text(OtB.slider('getValue'));
    $(".valorR small").text(R.slider('getValue'));
    $(".valorRP small").text(RP.slider('getValue'));
});
