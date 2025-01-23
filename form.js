const FirstEle = document.getElementById("FirstEle");
const SecondEle = document.getElementById('SecondEle');
const ThirdEle = document.getElementById('ThirdEle');
const FourthEle = document.getElementById('FourthEle');
const FivthEle = document.getElementById('FivthEle');
const FirstEleInput = document.querySelectorAll('#FirstEle input')
const SecondEleInput = document.querySelectorAll('#SecondEle input')
const ThirdEleInput = document.querySelectorAll('#ThirdEle input')
const qr_image = document.getElementById('qr_image');
const link = `upi://pay?pa=hj076379@ybl%26am=1500%26tn=`
const UPI = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;
const onNextFirst = () => {
    FirstEleInput.forEach((element) => {
        if (element.value !== "") {
            FirstEle.style.display = "none";
            SecondEle.style.display = "flex";
        }
    })

}
const onNextSecond = () => {
    SecondEleInput.forEach((element)=>{
        if(element.value !== ""){
            SecondEle.style.display = 'none'
            ThirdEle.style.display = 'flex'
        }
    })
}
const onNextThird = () => {
    ThirdEleInput.forEach((element)=>{
        if(element.value !== ""){
            ThirdEle.style.display = 'none';
            FourthEle.style.display = 'flex';
        }
    })
}
const onNextFourth = ()=>{
    FourthEle.style.display = 'none'
    FivthEle.style.display = 'flex'
}
qr_image.src = UPI;

