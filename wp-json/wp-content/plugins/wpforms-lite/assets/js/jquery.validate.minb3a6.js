function submitToAPI(e) {
       e.preventDefault();
       var URL = "https://4rbst4m2j4.execute-api.us-east-1.amazonaws.com/submit/submit";

            var Namere = /[A-Za-z]{1}[A-Za-z]/;
            if (!Namere.test($("#firstname-input").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }
            if (!Namere.test($("#lastname-input").val())) {
                         alert ("Name can not less than 2 char");
                return;
            }
            if ($("#email-input").val()=="") {
                alert ("Please enter your email id");
                return;
            }
