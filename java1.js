// initialize database
import  "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

      

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZQ7VB1F71U7mhi24uEP0tvrlO0GM6ym4",
    authDomain: "buahahahah-68f02.firebaseapp.com",
    databaseURL: "https://buahahahah-68f02-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "buahahahah-68f02",
    storageBucket: "buahahahah-68f02.appspot.com",
    messagingSenderId: "956224252959",
    appId: "1:956224252959:web:b466c2261de71dff8c392a",
    measurementId: "G-WPTPKM77PW",
    databaseURL: "https://buahahahah-68f02-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
      
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();



setInterval ( ()=>{
      database.ref("/project").child("suhu").get().then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          document.getElementById("suhu").innerHTML = snapshot.val();
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      database.ref("/project").child("kelembaban").get().then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          document.getElementById("lembab").innerHTML = snapshot.val();
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      database.ref("/project").child("cahaya").get().then((snapshot) => {
        if (snapshot.exists()) {
          //console.log(snapshot.val());
          document.getElementById("cahaya").innerHTML = snapshot.val();
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
      database.ref("/project").child("schedule").get().then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val()
          console.log(data[1].event)
          console.log(snapshot.val());
          //document.getElementById("lembab").innerHTML = snapshot.val();
          //return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
},3000)

let i = 1;

// document.querySelector(".plus").addEventListener("click",()=>{
//   i++;
//   let div = document.createElement("div");
//   div.classList.add("isiscedule1");
//   div.setAttribute("id", "s"+i);
//   let kegiatan = document.createElement("input");
//   kegiatan.setAttribute("type","text");
//   kegiatan.classList.add("kegiatan");
//   kegiatan.setAttribute("id", "k"+i);
//   kegiatan.disabled = true;
//   let waktu = document.createElement("input");
//   waktu.setAttribute("type","datetime-local");
//   waktu.classList.add("waktu");
//   waktu.setAttribute("id", "e"+i);
//   waktu.disabled = true;
//   let hapus = document.createElement("div");
//   hapus.classList.add("hapus");
//   hapus.setAttribute("id", i);
//   // hapus.setAttribute("onclick","deletee(this.id)");
//   let hapusicon = document.createElement("img");
//   hapusicon.setAttribute("src", "delete.png");
//   hapusicon.setAttribute("id", "i"+i);
  
//   hapus.appendChild(hapusicon);
//   div.appendChild(kegiatan);
//   div.appendChild(waktu);
//   div.appendChild(hapus);
//   let form1 = document.getElementById("formschedule");
//   form1.appendChild(div);

// })

// document.querySelector(".tombolschedule").addEventListener("click", ()=> {
//   let kegiatan1 = document.querySelectorAll(".kegiatan");
//   let waktu1 = document.querySelectorAll(".waktu");
//   let tombol = document.querySelector(".tombolschedule");
//   let statetombol = tombol.innerHTML;
//   console.log(statetombol)
//   if (statetombol == "Edit"){
//     tombol.innerHTML = "Save";
//     for (let i = 0; i <kegiatan1.length ; i++){
//       kegiatan1[i].disabled = false;
//       kegiatan1[i].style.backgroundColor = "white";
//       kegiatan1[i].style.color = "#110C1C";
//     }
//     for (let i = 0; i <waktu1.length ; i++){
//       waktu1[i].disabled = false;
//       waktu1[i].style.backgroundColor = "white";
//       waktu1[i].style.color = "#110C1C";
//     }
    
//   }

//   else{
//     tombol.innerHTML = "Edit";
//     for (let i = 0; i <kegiatan1.length ; i++){
//       kegiatan1[i].disabled = true;
//       kegiatan1[i].style.backgroundColor = "#110C1C";
//       kegiatan1[i].style.color = "white";
//       let kegvalue = kegiatan1[i].value;
//       //console.log(kegvalue);
//     }
//     for (let i = 0; i <waktu1.length ; i++){
//       waktu1[i].disabled = true;
//       waktu1[i].style.backgroundColor = "#110C1C";
//       waktu1[i].style.color = "white";
//       let wakvalue = waktu1[i].value;
//       //console.log(wakvalue);
//     }
    
//   }
  

// })


// document.getElementById("formschedule").addEventListener("mouseenter", (e)=>{
//   let hapus = document.querySelectorAll(".hapus");
//   //console.log(hapus);
  
//   let cild = e["srcElement"]["lastElementChild"];
//   //console.log(cild);
//   for (let x = 0; x < hapus.length ; x++){
//     hapus[x].addEventListener("click",(a)=>{
//       let q = a['srcElement'];
//       console.log(q);
//       let r = String(q)
//       r = r.slice(1,-1)
//       console.log(r)
//       let anak;
//       if (r == "object HTMLDivElement"){
//         console.log("benar");
//         anak = (q.parentNode);
//       }

//       if (r == "object HTMLImageElement"){
//         console.log("salah");
//         anak = (q.parentNode);
//         anak = (anak.parentNode);
//       }
//       console.log(anak);
//       let p = document.getElementById("formschedule");
//       // let id = x+1
//       // let c = document.getElementById("s"+id);
//       // c.innerHTML = " ";
//       // console.log("id = " + id);
//       // console.log(c);
//       p.removeChild(anak);
//       console.log("end");
//     })
// }
// })
