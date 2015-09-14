var input1 = $("#phone-full"),
    input2 = $("#phone-single"),
    input3 = $("#phone-none");

input1.intlTelInput({
    utilsScript: "../../lib/libphonenumber/build/utils.js" // just for formatting/placeholders etc
});
input2.intlTelInput({
    countryMode:'single'
});
input3.intlTelInput({
    countryMode:'none'
});

