let leftarrow=document.getElementsByClassName("fa-arrow-left")[0];
let rightarrow=document.getElementsByClassName("fa-arrow-right")[0];
let cards=document.getElementsByClassName("cards")[0];
leftarrow.addEventListener('click',()=>{
    cards.scrollLeft -=140;
})
rightarrow.addEventListener('click',()=>{
    cards.scrollLeft +=140;


})




let json_url="movies.json";
fetch(json_url).then(Responce => Responce.json())
.then((data)=>{
    data.forEach((ele ,i) => {
        let {poster , url} = ele;
        let card =document.createElement('a');
        card.classList.add('card');
        card.href=url
        card.innerHTML=`
        <img src="${poster}" alt="">
        `
        cards.appendChild(card);
    });
})