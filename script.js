// BOOKS 

// THIRUKKURAL https://api-thirukkural.vercel.app/api?num=x

var thirukkural = Number(prompt('Total 1330 thirukkural in this website. Enter the number get the that particular number of thirukkural'))
// console.log(thirukkural)

 var url = `https://api-thirukkural.vercel.app/api?num=${thirukkural}`

function Thirukkural_API(){
    return new Promise((resolve, reject) => {
        //  fetch(`https://api-thirukkural.vercel.app/api?num=${thirukkural}`)
        fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}
Thirukkural_API()
.then(data => {
   console.log(data);
   console.log(data.line1,data.line2);
})
.catch(error=>{
    console.log(error);
})
