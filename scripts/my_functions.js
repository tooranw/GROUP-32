// Greets the current logged in user
function sayHello() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {
            console.log(somebody.uid);
            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {
                    console.log(doc.data().name); //for debug. no other use
                    var n = doc.data().name;
                    $("#name-goes-here").text(n);
                })
        }
    })

}
sayHello();

//Returns the username
function getUsername() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        if (somebody) {

            console.log(somebody.uid);
            //this will sonsole log the current logged in user
            // uid -uS9qwFZNjHP5GFfwcFvXKWKycEG3


            //doc is a pointer to the user in firestore

            db.collection("users")
                .doc(somebody.uid)
                .get()
                .then(function (doc) {

                    //this will also show in the console log
                    // ie seo dam mi 
                    console.log(doc.data().username);
                    var uN = doc.data().username;

                    //jquery
                    //name of the id in main
                    //assigning the text to the id from n
                    $("#username-goes-here").text(uN);
                })
        } else {
            // No user is signed in.
        }
    })
}

getUsername();


// Displays the top 3 items based on invetory less than 5
function topThreeItemsQuery() {
    db.collection("items")
        .where("stock", "<", 5)
        .orderBy("stock", "desc")
        .get()
        .then(function (snap) {
            snap.forEach(function (doc) {
                var iN = doc.data().itemName;
                var s = doc.data().stock;

                console.log(iN);

                console.log(s);
                var newdom = "<p> " + iN + " " + s + "</p>";
                $("#topThreeItems").append(newdom);
            })
        })
}
topThreeItemsQuery();




// Return cart balance.
function getCartBalance() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        console.log(somebody.uid);
        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("total-goes-here").innerHTML = snap.data().cartBalance;
            })

    })

}

// Return user balance
function getUserBalance() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        console.log(somebody.uid);
        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("balance-goes-here").innerHTML = snap.data().currentBalance;
            })
    })

}

// Calculates the balance minus the cart
function calculate() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        var cart = document.getElementById("total-goes-here").innerHTML;


        var balance = document.getElementById("balance-goes-here").innerHTML;

        var numCart = parseFloat(cart);
        var numBalance = parseFloat(balance);

        console.log(cart);
        console.log(balance);


        var netBalance = (balance - cart).toFixed(2);


        $("#userNewBalance").text("Your New Balance: CAD$ " + netBalance);

        console.log(netBalance);

        db.collection("users").doc(somebody.uid).update({

            currentBalance: netBalance, //increments field!
            cartBalance: 0
        })
        $("#thankYou").text("Thank you for purchasing from JustBuyIt! Have a heavenly day and stay safe!");

    })

}


//Return store name.
function readQuote() {
    db.collection("Store").doc("notice")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here").innerHTML = snap.data().limit;
        })
}
//Return store name.
function readQuoteReturn() {
    db.collection("Store").doc("return")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here").innerHTML = snap.data().policy;
        })
}
//Return store name.
function readQuote1() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here1").innerHTML = snap.data().superstore1;
        })
}
//Return store name.
function readQuote2() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here2").innerHTML = snap.data().superstore2;
        })
}


//Return store name.
function readQuote4() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here4").innerHTML = snap.data().walmart2;
        })
}


//Return store name.
function readQuote5() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here5").innerHTML = snap.data().tnt1;
        })
}
//Return store name.
function readQuote6() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here6").innerHTML = snap.data().tnt2;
        })
}
//Return store name.
function readQuote7() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here7").innerHTML = snap.data().tnt3;
        })
}

//Return store name.
function readQuote8() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here8").innerHTML = snap.data().shoppers1;
        })
}
//Return store name.
function readQuote9() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here9").innerHTML = snap.data().shoppers2;
        })
}
//Return store name.
function readQuote10() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here10").innerHTML = snap.data().shoppers3;
        })
}


//Return store name.
function readQuote11() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here11").innerHTML = snap.data().shoppers4;
        })
}





//Return store name.
function readQuote12() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here12").innerHTML = snap.data().foody;
        })
}



//Return store name.
function readQuote13() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here13").innerHTML = snap.data().tire1;
        })
}


//Return store name.
function readQuote14() {
    db.collection("Store").doc("store")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("quote-goes-here14").innerHTML = snap.data().tire2;
        })
}






// Return delivery policy.
function getDeliveryPolicy() {
    db.collection("Store").doc("delivery")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("delivery-goes-here").innerHTML = snap.data().deliveryPolicy;
        })
}


// Add product to cart.
function addCoffeeMakerToCart3() {
    //document.getElementById(addToCart).addEventListener("click", function (somebody) {
    console.log("addCoffeeMakerToCart3 was clicked!");
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid).update({

            cart: "Coffee Maker",
            cartBalance: firebase.firestore.FieldValue.increment(38.89) //increments field!

        })


        db.collection("items")
            .doc("wo9y5zoXoPwt34ncxzXN")
            .update({
                coffeeMaker: firebase.firestore.FieldValue.increment(-1) //increments field!
            })


    })

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// Displays product inventory.
function showCoffeeMakerInventory() {
    db.collection("items").doc("wo9y5zoXoPwt34ncxzXN")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("coffeeMakerInventory").innerHTML = snap.data()
                .coffeeMaker;
        })
}

// Add product to cart.
function addFirstAidKitToCart() {
    //document.getElementById(addToCart).addEventListener("click", function (somebody) {
    console.log("addFirstAidKitToCart was clicked!");
    firebase.auth().onAuthStateChanged(function (somebody) {
        db.collection("users").doc(somebody.uid).update({

            cart: "First Aid Kit",
            cartBalance: firebase.firestore.FieldValue.increment(49.49) //increments field!

        })

        db.collection("items")
            .doc("wo9y5zoXoPwt34ncxzXN")
            .update({
                firstAidKit: firebase.firestore.FieldValue.increment(-1) //increments field!
            })

    })

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}




// Displays product inventory.
function showHandSanitizerInventory() {
    db.collection("items").doc("wo9y5zoXoPwt34ncxzXN")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("firstAidKitInventory").innerHTML = snap.data()
                .firstAidKit;
        })
}



// Add product to cart.
function addHandSanitizerToCart() {
    //document.getElementById(addToCart).addEventListener("click", function (somebody) {
    console.log("addHandSanitizerToCart was clicked!");
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid).update({

            cart: "Hand Sanitizer",
            cartBalance: firebase.firestore.FieldValue.increment(6.49) //increments field!

        })

        db.collection("items")
            .doc("wo9y5zoXoPwt34ncxzXN")
            .update({
                handSanitizer: firebase.firestore.FieldValue.increment(-1) //increments field!
            })
    })

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

}

// Add product to cart.
function addMaskToCart() {
    //document.getElementById(addToCart).addEventListener("click", function (somebody) {
    console.log("addMaskToCart was clicked!");
    firebase.auth().onAuthStateChanged(function (somebody) {
        db.collection("users").doc(somebody.uid).update({

            cart: "Mask",
            cartBalance: firebase.firestore.FieldValue.increment(17.99) //increments field!

        })

        db.collection("items")
            .doc("wo9y5zoXoPwt34ncxzXN")
            .update({
                masks: firebase.firestore.FieldValue.increment(-1) //increments field!
            })
    })

    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// Displays product inventory.
function showMasksInventory() {
    db.collection("items").doc("wo9y5zoXoPwt34ncxzXN")
        .onSnapshot(function (snap) {
            console.log(snap.data())
            document.getElementById("masksInventory").innerHTML = snap.data()
                .masks;
        })
}


// Returns user's balance.
function getCurrentBalance() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("currentBalance-goes-here").innerHTML = snap.data()
                    .currentBalance;
            })
    })
}
// Returns user's username.
function getUserName() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("username-goes-here").innerHTML = snap.data().username;
            })
    })
}

// Returns user's email.
function getUserEamil() {
    firebase.auth().onAuthStateChanged(function (somebody) {
        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("email-goes-here").innerHTML = snap.data().email;
            })
    })
}
// Returns user firstname.
function getFirstName() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("firstName-goes-here").innerHTML = snap.data().firstName;
            })
    })
}

// Returns user middle name.
function getMiddleName() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("middleName-goes-here").innerHTML = snap.data().middleName;
            })
    })
}

// Returns user last name.
function getLastName() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        db.collection("users").doc(somebody.uid)
            .onSnapshot(function (snap) {
                console.log(snap.data())
                document.getElementById("lastName-goes-here").innerHTML = snap.data().lastName;
            })
    })
}


// Increments the user's current balance.
function writeNewBalance() {
    firebase.auth().onAuthStateChanged(function (somebody) {

        var input = document.getElementById("userInput").value;
        console.log(input);

        db.collection("users").doc(somebody.uid).update({

            currentBalance: firebase.firestore.FieldValue.increment(input) //increments field!

        })

    })

}