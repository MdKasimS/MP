let count = 0;
let booksData = [];

let k = 0;
let sampleURL = [
    'http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    'http://books.google.com/books/content?id=by4ytBy63o0C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    'http://books.google.com/books/content?id=_9u7AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
];

function createBookCard()
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
            t.setAttribute("src",sampleURL[k++ % 3]);
        }

        if (i==2)
        {
            tempEle.setAttribute("id",`bkCntnt${count}`);

            t=document.createElement('h3');
            tempEle.appendChild(t);
            
            t=document.createElement('div');
            tempEle.appendChild(t);
            t.setAttribute("class",`price`);

            et=document.createElement('span');
            t.appendChild(et);

            t=document.createElement('a');
            tempEle.appendChild(t);
            t.setAttribute("href",`{fetchedValue}`);
            t.setAttribute("class","btn");
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

function fetchBooks()
{
    let i=0;
    for(i=0;i<5;++i)
    {   
        createBookCard();
        ++count;
    }
}

let data;
let resp;
let counter=2;
async function getData()
{
    resp = await fetch("http://127.0.0.1:5001/books/data");
    data = await resp.json();
 
    // console.log(data);
    console.log(typeof(data));

    // for(i=0;i<counter;++i)
    // {
    //     console.log(data[i]);
    // }
    // console.log("I am at client", ++counter);
}

function moreData()
{
    for(i=0;i<counter;++i)
    {
        console.log(data[i]);
    }
    console.log("I am at client", ++counter);
}