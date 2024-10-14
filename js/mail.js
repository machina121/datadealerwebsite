//--------------------------------------------------------------------------------------------------
function inputKeyDown()
{
    if(event.key === 'Enter')
        submitEmail();        
}

//--------------------------------------------------------------------------------------------------
function submitEmail()
{
    email = document.getElementById("emailInput").value;
    
    if (email.length < 6 || email.length > 64 || !email.includes("@") || !email.includes("."))
    {
        return;
    }
    
    $.ajax({
            type : "POST",
            url  : "https://www.defendthecake.com/cgi-bin/mail.php",
            data : { email : email },
            success: function(res){}
    });
    
    document.getElementById("enterEmailText").style.display = "none";
    document.getElementById("emailInput").style.display = "none";
    document.getElementById("submitEmailButton").style.display = "none";
    document.getElementById("successText").style.display = "inherit";
}
