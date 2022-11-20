// const bluetoothBtn = document.querySelector("#bluetoothBtn")
const copyBtn = document.querySelector("#copyBtn")
const div = document.querySelector("#outbox")
// const pasteBtn = document.querySelector("#pasteBtn")
// const Blob1 = new Blob([text],{type : "text/strings"})

copyBtn.addEventListener("click",()=>{
    const buffer = new ArrayBuffer(2);
    const dv = new DataView(buffer)
    dv.setInt8(0, 65);
    dv.setInt8(1, 109 );
    // console.log(new Uint8Array(buffer).toString())
    // const Blob1 = new Blob([buffer],{type : "text/plain"})
    const f = new File([buffer],"info.txt",{type:"text/plain"})
    const url = URL.createObjectURL(f)
    const a = document.createElement("a")
    a.href = url
    a.textContent = `Download ${f.name}`
    // a.download  = f.name
    div.appendChild(a)

})
   

   // window.addEventListener("myEvent",()=>{
       //     navigator.serviceWorker
       //     .register('./sw.js')
       //     .then((registration) => {
       //         console.log('Service worker registration succeeded:', registration);
       //       }, /*catch*/ (error) => {
       //         console.error(`Service worker registration failed: ${error}`);
       //       });
       // })
//    }else{
//        console.log("Not supported.")
//    }