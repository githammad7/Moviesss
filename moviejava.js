let cards=document.getElementsByClassName("cards")[0];
let search=document.getElementsByClassName("searchbox");
let search_input=document.getElementById('search');
let searchs=document.getElementsByClassName('searchs')[0];
// this will fetch json movies to div
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
    // this will give list of all search
     data.forEach(element => {
        let {name ,poster , url} = element;
        let card =document.createElement('a');
        card.classList.add('card');
        card.href=url;
        card.innerHTML=`
        <img src="${poster}" alt="">
        <div class="cont">
            <h3> ${name}</h3>
        </div>
        `
        searchs.appendChild(card)
        
    });
    // this will give sort search
   search_input.addEventListener('keyup',()=>{
    let filter=search_input.value.toUpperCase();
    let a=searchs.getElementsByTagName('a');
    for (let index=0 ; index < a.length; index++){
        b=a[index].getElementsByClassName('cont')[0];
        let textvalue =b.textContent ||  b.innerText;
        if(textvalue.toUpperCase().indexOf(filter)>-1){
            a[index].style.display='flex';
            searchs.style.visibility='visible';
            searchs.style.opacity=1;
        }
        else{
            a[index].style.display='none';
        }
        
    }
   })

})

