let pname=document.getElementById("name")
let hour=document.getElementById("hour")
let minute=document.getElementById("minute")
let pcount=document.getElementById("pcount")
let date=document.getElementById("date")
let button1 = [...document.querySelectorAll(".btn")]
// const show=()=>{
//     let d=""
//      d+="Name : "+pname.value+"\n"+"Date : "+date.value+"\n"+"Booking Time : "+hour.value+" : "+minute.value+"\n"+"Person Count : "+pcount.value
//    window.alert(d)
// }

const switchplace=(id)=>{
  let location=document.getElementById("location")
  let newbtn=button1.find(item=> item.dataset.id==id)
  newbtn.disabled=true
  location.innerHTML=newbtn.innerHTML
  // console.log(newbtn)
  let restbtn=button1.filter(item=> item.dataset.id!=id)
  restbtn.map(item=> {
       item.disabled=false
  })
  // console.log(restbtn)
}
const show=()=>{
 if((pname.value=="")||(hour.value=="")||(minute.value=="")||(pcount.value=="")||(date.value==""))
 {
   window.alert("Invalid Data")
 }
 else
 {
  localStorage.setItem("pname",JSON.stringify(pname.value))
  localStorage.setItem("date",JSON.stringify(date.value))
  localStorage.setItem("Timing",JSON.stringify(hour.value +":"+minute.value))
  localStorage.setItem("Person Count",JSON.stringify(pcount.value))
  pname.value=""
  date.value=""
  hour.value=""
  minute.value=""
  pcount.value=""
 }
 
}

