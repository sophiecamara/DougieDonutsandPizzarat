// // https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN&agency=NYPD

// const btnmanhatt = document.querySelector("button"); //getELtbyID gets/looks only ID, html tags.  
// const userInput = document.querySelector("input");
// const result = document.querySelector("p");    //queryselector looking for <P> tags and storing data in partic
// btnmanhatt.addEventListener('click', () => {
//     let input = userInput.value // extracting the value out of input/ means when enters any num, this var input will Store it here
//     // basically,means that the Qu Selector looks for input and keeps/store it in this var
//     let btnmanhattvalue = btnmanhatt.value
//     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnmanhattvalue}&agency=NYPD`          // using

//     fetch(url)
//         .then((urlresponse) => urlresponse.json())// receives the response from the promise
//         .then((data) => { //here Data is doing the same thing as Json( retrieving data)  but it has to pass first by Json
//             let msgdata = data  // msgdata holdin data from url, therefore is our array
//             console.log(msgdata)
//             //rslt.innerhtml is displaying the result in the HTML 
//             result.innerHTML = `<ul>` + msgdata.map(function (complaints) {
//                 return ` <li>` + complaints.complaint_type+`<button id="display descriptor">display</button>` + complaints.resolution_description + `</li>` //complaint_type is what be modified with any selection inside the msgdata
//                 //
//             }).join('') + `</ul>`       //here complaints is like the i inside the for(let i=0)
//             //    result.innerHTML = ` this is my + ${ JSON.stringify(msgdata)}`;

//         })
//         .catch((error) => {
//             console.log(error)
//         })
//     })

const btnqueens = document.querySelector("button"); //getELtbyID gets/looks only ID, html tags.  
        const userInput = document.querySelector("input");
     const result = document.querySelector("p");    //queryselector looking for <P> tags and storing data in partic
         btnqueesns.addEventListener('click', () => {
             let input = userInput.value // extracting the value out of input/ means when enters any num, this var input will Store it here
        //     // basically,means that the Qu Selector looks for input and keeps/store it in this var
        //     let btnqueensvalue = btnqueens.value
        //     const url = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnmanhattvalue}&agency=NYPD`          // using
        
        //     fetch(url)
                 .then((urlresponse) => urlresponse.json())// receives the response from the promise
                .then((data) => { //here Data is doing the same thing as Json( retrieving data)  but it has to pass first by Json
                    let msgdata = data  // msgdata holdin data from url, therefore is our array
                    console.log(msgdata)
                     //rslt.innerhtml is displaying the result in the HTML 
                    result.innerHTML = `<ul>` + msgdata.map(function (complaints, ) {
                        return ` <li>` + complaints.complaint_type + complaints.description_resolution `</li>` //complaint_type is what be modified with any selection inside the msgdata
      
                     }).join('') + `</ul>`       //here complaints is like the i inside the for(let i=0)
                     //    result.innerHTML = ` this is my + ${ JSON.stringify(msgdata)}`;
        
                })
                .catch((error) => {
                console.log(error)
                 })
        
        









//         fetch(url)
//         .then((urlresponse) => urlresponse.json())
//         .then((data) => { 
//             let msgdata = data  
//             console.log(msgdata)
//             //rslt.innerhtml is displaying the result in the HTML 
//             result.innerHTML = `<ul>` + msgdata.map(function (complaints) {
//                 return ` <li>` + complaints.complaint_type + `</li>` //complaint_type is what be modified with any selection inside the msgdata
//                 //
//             }).join('') + `</ul>`       //here complaints is like the i inside the for(let i=0)
//             //   result.innerHTML = ` this is my + ${ JSON.stringify(msgdata)}`;

//         })  




// // }                //const getSquares = (array) => array.map((num)=>num*num)= getSquares is the result
// //     //array will be the msgdata

// // )
//  const btnbrook = document.querySelector("button"); 
//  const userInput1 = document.querySelector("input");
//  const result = document.querySelector("p");    
//  btnbrook.addEventListener('click', () => {
//      let input = userInput1.value 
//      let btnbrookvalue = btnbrook.value
//      const url1 = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${btnbrookvalue}&agency=NYPD`


//      fetch(url1)
//        .then((url1response) => url1response.json())
//         .then((data) => { 
//         let msgdata = data  
//              console.log(msgdata) 
//            result.innerHTML = `<ul>` + msgdata.map(function (complaints) {
//            return ` <li>` + complaints.complaint_type + `</li>` 
    
//              }).join('') + `</ul>`       
//              //   result.innerHTML = ` this is my + ${ JSON.stringify(msgdata)}`;

//          })
//          .catch((error) => {
//              console.log(error)
//          })
                 //const getSquares = (array) => array.map((num)=>num*num)= getSquares is the result
     //array will be the msgdata

 




// //https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD
// const btnbronx = document.querySelector("button");
// const userInput = document.querySelector("input");
// const result = document.querySelector("p");    //queryselector looking for <P> tags and storing data in partic
// btnbronx.addEventListener('click', () => {
//     let input = userInput.value // extracting the value out of input/ means when enters any num, this var input will Store it here
//     // basically,means that the Qu Selector looks for input and keeps/store it in this var
//     let btnbronxvalue = btnbronx.value
//     const url2 =`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX&agency=NYPD`

//         fetch(url2)
//             .then((url2response) => url2response.json())// receives the response from the promise
//             .then((data) => { //here Data is doing the same thing as Json( retrieving data)  but it has to pass first by Json
//                 let msgdata = data  // msgdata holdin data from url, therefore is our array
//                 console.log(msgdata)
//                 //rslt.innerhtml is displaying the result in the HTML 
//                 result.innerHTML = `<ul>` + msgdata.map(function (complaints) {
//                     return ` <li>` + complaints.complaint_type + `</li>` //complaint_type is what be modified with any selection inside the msgdata
//                     //
//                 }).join('') + `</ul>`       //here complaints is like the i inside the for(let i=0)
//                 //   result.innerHTML = ` this is my + ${ JSON.stringify(msgdata)}`;

//             })
//             .catch((error) => {
//                 console.log(error)
//             })
// }                
// )https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BROOKLYN
//  https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=QUEENS
//  https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=STATEN ISLAND
//  https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=BRONX