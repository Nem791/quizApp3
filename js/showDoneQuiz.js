import { ViewItem } from "../components/savedItem.js";

let resultList = document.querySelector('.search-results-list');

for(let i = 0; i < 3; i++) {
    const viewItem = new ViewItem();
    resultList.appendChild(viewItem.render());
}

var docRef = db.collection("userQuizInfo").doc("harleydashievn6968@gmail.com");

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

