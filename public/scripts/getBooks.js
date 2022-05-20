let count = 0;
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
        // console.log(i,divClassToSet[i]); 
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
            
            for(j=0;j<3;++j)
            {
                t=document.createElement('a');
                tempEle.appendChild(t);
                t.setAttribute("href",`{fetchedValue}`);
                t.setAttribute("class",iconClassToSet[j]);
            }
        }
        
        if (i==1)
        {
            tempEle.setAttribute("id",`imgURL${count}`);
            t=document.createElement('img');
            tempEle.appendChild(t);
            t.setAttribute("src",`{fetchedValue}`);
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
        }
    }

    tempDiv=document.getElementsByClassName("icons");
    console.log(tempDiv);

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
