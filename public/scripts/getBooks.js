let counter = 0;
let booksData = [];

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

    divClassToSet = ['swiper featured-slider', 'swiper-wrapper', 'swiper-slide box', ""];//, "icons", "image", 'content'];

    for(i=0;i<divClassToSet.length;++i)
    {
        console.log(i,divClassToSet[i]);
        tempEle = document.createElement('div');
        tempDiv.appendChild(tempEle);   
        if(i!=3)
            tempEle.setAttribute("class",divClassToSet[i]);
        
        if(i==3)
            tempEle.setAttribute("id","actualCard");
        
        tempDiv =tempEle;
    }
}

function fetchBooks()
{
    let i=0;
    for(i=0;i<5;++i)
    {   
        console.log("i am ",i)
        createBookCard();
        console.log("data added ?");
    }
}
