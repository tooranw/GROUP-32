function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    console.log(doc.data().name);//for debug. no other use
                    var n = doc.data().name;
                    $("#name-goes-here").text(n);
                })
        }
    })

}
sayHello();

function getUsername() {
    firebase.auth().onAuthStateChanged(function(somebody){
        if(somebody) {

            console.log(somebody.uid);
            //this will sonsole log the current logged in user
            // uid -uS9qwFZNjHP5GFfwcFvXKWKycEG3
            

            //doc is a pointer to the user in firestore
            
            db.collection("users")
            .doc(somebody.uid)
            .get()
            .then(function(doc){

                //this will also show in the console log
                // ie seo dam mi 
                console.log(doc.data().username);
                var uN = doc.data().username;

                //jquery
                //name of the id in main
                //assigning the text to the id from n
                $("#username-goes-here").text(uN);
            })
        }else {
            // No user is signed in.
        }
    })
}

getUsername();

// function getCurrentBalance() {
//     firebase.auth().onAuthStateChanged(function(somebody){
//         if(somebody) {

//             console.log(somebody.uid);
//             //this will sonsole log the current logged in user
//             // uid -uS9qwFZNjHP5GFfwcFvXKWKycEG3
            

//             //doc is a pointer to the user in firestore
            
//             db.collection("users")
//             .doc(somebody.uid)
//             .get()
//             .then(function(doc){

//                 //this will also show in the console log
//                 // ie seo dam mi 
//                 console.log(doc.data().name);
//                 var cB = doc.data().currentBalance;

//                 //jquery
//                 //name of the id in main
//                 //assigning the text to the id from n
//                 $("#currentBalance-goes-here").text(cB);
//             })
//         }else {
//             // No user is signed in.
//         }
//     })
// }

// getCurrentBalance();


function citiesQuery(){
    db.collection("cities")
    .where("population", ">", 1000000)
    //.where("hemisphere", "==", "south")
    //.limit(2)
    //.orderBy("population")
    .orderBy("population", "desc")

    //^^ these are db queries. like SQL you can order th stuff around
    .get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            var pop = doc.data().population;
            console.log(n);
            var newdom = "<p> " + n + " " + pop + "</p>";
            $("#cities-go-here").append(newdom);
            //document.getElementById("cities-go-here").innerHTML = newdom;
        })
    })
}
citiesQuery();


// stuff learnt
//query of collection
//user uid extraction, to say hello to the user which creates
// a customised experience.