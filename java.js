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

function getvaluetimer(name){
    const dbRef = database.ref("/fishfeeder");
    dbRef.child(name).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById(name).value = snapshot.val();
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

function getvaluestate(name){
    const dbRef = database.ref("/fishfeeder");
    let swicth;
    name == "state1" ? swicth = "switch1" : swicth = "switch2"
    dbRef.child(name).get().then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        if (snapshot.val() == "green"){
            document.getElementById(name).style.backgroundColor = "green";
            document.getElementById(swicth).style.float = "right";
        }
        else{
            document.getElementById(name).style.backgroundColor = "red";
            document.getElementById(swicth).style.float = "left";
        }
        
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}

//initialize value timer
getvaluetimer("timer1");
getvaluetimer("timer2");

//initialize value state
getvaluestate("state1");
getvaluestate("state2");






document.querySelector(".timerswitch1").addEventListener("click", ()=>{
    let status1 = document.getElementById("state1")
    let state1 = getComputedStyle(status1);
    let warna = state1.backgroundColor;
    console.log("tese1" , warna, typeof(warna));
    
    if (warna == "rgb(255, 0, 0)"){
        document.getElementById("state1").style.backgroundColor = "green";
        document.getElementById("switch1").style.float = "right";
        console.log("timer1 ON");
        database.ref( "/fishfeeder").update( {
            state1 : "green"
        })
        .then(()=>{
            console.log("state1 berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })
    } else{
        document.getElementById("state1").style.backgroundColor = "red";
        document.getElementById("switch1").style.float = "left";
        console.log("timer1 OFF");
        database.ref( "/fishfeeder").update( {
            state1 : "red"
        })
        .then(()=>{
            console.log("state1 berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })
    }
})

document.querySelector(".timerswitch2").addEventListener("click", ()=>{
    let status1 = document.getElementById("state2")
    let state1 = getComputedStyle(status1);
    let warna = state1.backgroundColor;
    console.log("tese1" , warna, typeof(warna));
    
    if (warna == "rgb(255, 0, 0)"){
        document.getElementById("state2").style.backgroundColor = "green";
        document.getElementById("switch2").style.float = "right";
        console.log("timer2 ON");
        database.ref( "/fishfeeder").update( {
            state2 : "green"
        })
        .then(()=>{
            console.log("state2 berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })
    } else{
        document.getElementById("state2").style.backgroundColor = "red";
        document.getElementById("switch2").style.float = "left";
        console.log("timer2 OFF");
        database.ref( "/fishfeeder").update( {
            state2 : "red"
        })
        .then(()=>{
            console.log("state2 berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })
    }
})

document.getElementById("button").addEventListener("click", (e)=>{
    e.preventDefault();
    let cek = document.getElementById("button").innerHTML;
    
    if (cek == "Edit"){
        document.getElementById("timer1").disabled = false;
        document.getElementById("timer2").disabled = false;
        document.getElementById("timer1").style.backgroundColor = "white";
        document.getElementById("timer2").style.backgroundColor = "white";
        document.getElementById("timer1").style.color = "black";
        document.getElementById("timer2").style.color = "black";
        document.getElementById("button").innerHTML = "Save";
    } else {
        document.getElementById("timer1").disabled = true;
        document.getElementById("timer2").disabled = true;
        document.getElementById("timer1").style.backgroundColor = "#110C1C";
        document.getElementById("timer2").style.backgroundColor = "#110C1C";
        document.getElementById("timer1").style.color = "white";
        document.getElementById("timer2").style.color = "white";
        document.getElementById("button").innerHTML = "Edit";
        let timerr1 = document.getElementById("timer1").value;
        let timerr2 = document.getElementById("timer2").value;
        console.log(timerr1);
        console.log(timerr2);
        database.ref( "/fishfeeder").update( {
            timer1 : timerr1,
            timer2 : timerr2
        })
        .then(()=>{
            console.log("timer berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })        
    }
})

document.querySelector(".feedbtn1").addEventListener("click", ()=>{
    database.ref( "/fishfeeder").update( {
        feed : 1
    })
    .then(()=>{
        console.log("state2 berhasil diganti")
    })
    .catch((error)=>{
        alert("error"+ error );
    })
    setTimeout(()=>{
        database.ref( "/fishfeeder").update( {
            feed : 0
        })
        .then(()=>{
            console.log("state2 berhasil diganti")
        })
        .catch((error)=>{
            alert("error"+ error );
        })
    }, 1500)
})

setInterval ( ()=>{
    database.ref("/project").child("suhu").get().then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          document.getElementById("suhu").innerHTML = snapshot.val();
          return snapshot.val();
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
},3000)