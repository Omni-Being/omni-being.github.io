function CheckAuthentication()
{

    var user_name=document.getElementById('user_name').value;
    var user_password=document.getElementById('user_password').value;
    var auth_user=false;

    if(user_name=="Shreya" && user_password=="shreya@123")
    {
        auth_user=true;
    }
    else if(user_name=="Omni" && user_password=="omni@123")
    {
        auth_user=true;
    }
    else if(user_name=="Kashish" && user_password=="kashish@123")
    {
        auth_user=true;
    }
    else if(user_name=="Guest" && user_password=="guest@69")
    {
        auth_user=true;
    }
    else
    {
        auth_user=false;
    }
    
    if(auth_user)
    {
        window.location.href="";
    }
    else
    {
        alert("Authentication Failed...");
    }
       
}
