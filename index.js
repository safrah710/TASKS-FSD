let div=document.querySelector(".mine");
setTimeout(()=>{
    div.append="<h1>1</h1>"
    setTimeout(()=>{
        let p=document.createElement("p");
        p.innerText="1";
        div.appendChild(p);
        setTimeout(()=>{
            let p=document.createElement("p");
            p.innerText="2";
            div.appendChild(p);
            setTimeout(()=>{
                let p=document.createElement("p");
                p.innerText="3";
                div.appendChild(p);
                setTimeout(()=>{
                    let p=document.createElement("p");
                    p.innerText="4";
                    div.appendChild(p);
                    setTimeout(()=>{
                        let p=document.createElement("p");
                        p.innerText="5";
                        div.appendChild(p);
                        setTimeout(()=>{
                            let p=document.createElement("p");
                            p.innerText="6";
                            div.appendChild(p);
                            setTimeout(()=>{
                                let p=document.createElement("p");
                                p.innerText="7";
                                div.appendChild(p);
                                setTimeout(()=>{
                                    let p=document.createElement("p");
                                    p.innerText="8";
                                    div.appendChild(p);
                                    setTimeout(()=>{
                                        let p=document.createElement("p");
                                        p.innerText="9";
                                        div.appendChild(p);
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)