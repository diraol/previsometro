var referencias = {
    'sim_dilma': 38,
    'nao_dilma': 32
}

var conversao = {
    'OtB': 0.6,
    'R': 0.3,
    'RP': 0.1,
    'BN': 0.3
}

$(document).ready(function(){
  function atualizaSmall(otbValue, rValue, rpValue) {
    $(".valorOtB small").text(otbValue);
    $(".valorR small").text(rValue);
    $(".valorRP small").text(rpValue);
  }
  function changeInt(event) {
    if (event.currentTarget.id == "OtB") {
        if (event.value + R.slider('getValue') > 100) {
            R.slider('setValue', (100 - event.value));
        } else {
            RP.slider('setValue',(100 - event.value - R.slider('getValue')));
        }
    } else {
        if (event.value + OtB.slider('getValue') >= 100) {
            OtB.slider('setValue', (100 - event.value));
        } else {
            RP.slider('setValue',(100 - event.value - OtB.slider('getValue')));
        }
    }
    atualizaSmall(OtB.slider('getValue'), R.slider('getValue'), RP.slider('getValue'));
  };

  var RP = $('#RP').slider({});
  var BN = $('#BN').slider({});
  var OtB = $('#OtB').slider({})
        .on('slideStart', function(event){changeInt(event);})
        .on('slide', function(event){changeInt(event);});
  var R = $('#R').slider({})
        .on('slideStart', function(event){changeInt(event);})
        .on('slide', function(event){changeInt(event);});

  $(".valorOtB small").text(OtB.slider('getValue'));
  $(".valorR small").text(R.slider('getValue'));
  $(".valorRP small").text(RP.slider('getValue'));

    var tangle = new Tangle(document,{
        initialize: function() {

        },
        update: function() {
          console.log(this)
          conversao_dilma = OtB.slider('getValue') * 1;
          console.log(conversao_dilma);
          this.sim_dilma = referencias.sim_dilma + conversao_dilma * BN.slider('getValue');
          this.nao_dilma = referencias.nao_dilma + BN.slider('getValue') * (1 - conversao_dilma);
        }
    })
});
