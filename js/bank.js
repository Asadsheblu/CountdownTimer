const loginbtn=document.getElementById("login")
loginbtn.addEventListener('click', function () {
    const bankArea=document.getElementById("Bank-Area");
    bankArea.style.color="red"
    bankArea.style.fontSize="50px"
    bankArea.style.textAlign="center"
    bankArea.innerText="I love u"

    })
   
const loveBtn=document.getElementById("login1")
loveBtn.addEventListener('click',function () {
    const loveArea=document.getElementById("Bank-Area");
    loveArea.innerText="I Love You very Much"
    loveArea.style.color="red"
    loveArea.style.fontSize="50px"
    loveArea.style.textAlign="center"
    
    
})
