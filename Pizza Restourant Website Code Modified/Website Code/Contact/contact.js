let pname=document.getElementById("pname")
let email=document.getElementById("email")
let cmassage=document.getElementById("cmassage")
const msg=()=>{
    if((pname.value=="")||(email.value=="")||(cmassage.value==""))
    {
      window.alert("Invalid Data")
    }
    else
    {
        localStorage.setItem("pname",JSON.stringify(pname.value))
        localStorage.setItem("email",JSON.stringify(email.value))
        localStorage.setItem("massage",JSON.stringify(cmassage.value))
        let e=""
        e+="Name : "+pname.value+"\n"+"Email : "+email.value+"\n"+"Massage : "+cmassage.value
        window.alert(e)
        pname.value=""
        email.value=""
        cmassage.value=""
    }
    
   }
