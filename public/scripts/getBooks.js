// let count = 0;
let counter=20;

let data;
let resp;
async function getData()
{
    resp = await fetch("http://127.0.0.1:5001/books/data");
    data = await resp.json();
    console.log(data)
    // counter= data.length%20;
    console.log(typeof(data));
}

function moreData()
{
    for(i=0;i<counter;++i)
    {
        console.log(data[i].isbn10);
        console.log(data[i].thumbnail);
    }
    console.log("I am at client", ++counter);
}

function createBookCard(count)
{
    // console.log('Salam Hindusthan !!!');

    let root = document.getElementById("imageRoot");
    let sect = document.createElement("section");
    let tempDiv=root;
    sect.setAttribute("class", 'featured');
    sect.setAttribute("id", 'featured');
    tempDiv.appendChild(sect);
    tempDiv=sect;

    divClassToSet = ['swiper featured-slider', 'swiper-wrapper', 'swiper-slide box', ""];

    for(i=0;i<divClassToSet.length;++i)
    {
        tempEle = document.createElement('div');
        tempDiv.appendChild(tempEle);   
        if(i!=3)
            tempEle.setAttribute("class",divClassToSet[i]);
        
        if(i==3)
            tempEle.setAttribute("id",`actualCard${count}`);
        
        tempDiv =tempEle;
    }

    divClassToSet = ["icons","image","content"];
    iconClassToSet = ['fas fa-search','fas fa-heart',"fas fa-eye"];
    let t, et;
    for(i=0;i<divClassToSet.length;++i)
    {
        tempEle = document.createElement('div');
        tempDiv.appendChild(tempEle);   
        tempEle.setAttribute("class",divClassToSet[i]);
        
        if (i==0)
        {
            tempEle.setAttribute("id",`imgIcons${count}`);
        }
        
        if (i==1)
        {
            tempEle.setAttribute("id",`imgURL${count}`);
            t=document.createElement('img');
            tempEle.appendChild(t);
            t.setAttribute("src", `${data[count].thumbnail}`);
        }

        if (i==2)
        {
            tempEle.setAttribute("id",`bkCntnt${count}`);

            t=document.createElement('h3');
            tempEle.appendChild(t);
            t.appendChild(document.createTextNode(`${data[count].title}`));

            t=document.createElement('h4');
            tempEle.appendChild(t);
            t.appendChild(document.createTextNode(`-${data[count].authors}`));
            
            t=document.createElement('div');
            tempEle.appendChild(t);
            t.setAttribute("class",`price`);
            t.setAttribute("id",`price${count}`);
            t.innerText=`Rs.${(data[count].num_pages * 2)/5}`;


            et=document.createElement('span');
            t.appendChild(et);

            t=document.createElement('a');
            tempEle.appendChild(t);
            t.setAttribute("class","btn");
            t.setAttribute("id",`${data[count].isbn10}`);//cartItem${count}`);
            // t.setAttribute("onclick",`sendToCart('bkCntnt${count}')`)//${data[i].isbn10})`);
            t.setAttribute("onclick",`sendToCart('${data[count].isbn10}')`);//${data[i].isbn10})`);
            t.innerText="Add To Cart";
        }
    }

    tempEle = document.getElementById(`imgIcons${count}`);
    for(j=0;j<3;++j)
    {
        t=document.createElement('a');
        tempEle.appendChild(t);
        t.setAttribute("href",`{fetchedValue}`);
        t.setAttribute("class",iconClassToSet[j]);
    }
}

async function displayBooks()
{
    await getData();
    let i=0;
    console.log(data);
    for(i=0;i<counter;++i)
    {   
        createBookCard(i);
    }
}

function sendToCart(itemId)
{
    let itemDetails = document.getElementById(itemId);
    console.log(itemDetails.id);
    // console.log(itemDetails.e);
}  