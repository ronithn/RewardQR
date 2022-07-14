function ValidateEmail(inputText)
{
    console.log("input text val: ", inputText);
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.add.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.add.email.focus();
return false;
}
}