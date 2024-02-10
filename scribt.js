const api = "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";
const images = document.querySelector(".images");
const inp = document.getElementById("inp");


const getImages =async ()=>{
    const methods = {
        method:"post",
        headers:{
            "Content-Type": "application/json" ,
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify({
            "prompt":inp.value,
            "n":3,
            "size": "1024x1024"
    })
    }
    const res = await fetch("https://api.openai.com/v1/images/generations",methods);
     //parse the response as json
     const data =await res.json();
     const imgList = data.data;
     imgList.map(photo=>{
        const container = document.createElement("div");
        images.appendChild(container);
        const img = document.createElement("img");
        container.appendChild(img);
        img.src=photo.url;
     })

}