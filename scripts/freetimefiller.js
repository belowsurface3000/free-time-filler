let activities = [
    {activity: "Football", social: "group", type: "sport", mintime: 1, cost: 0, need: ["Ball", "Spot"], img: "./images/football.jpg"},
    {activity: "Bouldering", social: "both", type: "sport", mintime: 1, cost: 10, need: ["Shoes", "Spot"], img: "./images/bouldering.jpg"},
    {activity: "Biking", social: "both", type: "sport", mintime: 1, cost: 0, need: ["Bike", "Clothing", "Helmet", "Destination"], img: "./images/biking.jpg"},
    {activity: "Basketball", social: "both", type: "sport", mintime: 1, cost: 0, need: ["Ball", "Spot"], img: "./images/basketball.jpg"},
    {activity: "Gaming", social: "both", type: "lazy", mintime: 1, cost: 0, need: ["Device", "Game"], img: "./images/gaming.jpg"},
    {activity: "Hiking", social: "both", type: "sport", mintime: 2, cost: 0, need: ["Shoes", "Destination"], img: "./images/hiking.jpg"},
    {activity: "Photography", social: "both", type: "art", mintime: 1, cost: 0, need: ["Camera", "Object(s)"], img: "./images/photography.jpg"},
    {activity: "Baking", social: "both", type: "recreational", mintime: 2, cost: 5, need: ["Kitchen", "Ingredients", "Recipe"], img: "./images/baking.jpg"},
    {activity: "Binge Watching", social: "both", type: "lazy", mintime: 5, cost: 5, need: ["Device", "Subscription"], img: "./images/binge-watching.jpg"},
    {activity: "Language Learning", social: "both", type: "educational", mintime: 1, cost: 0, need: ["Book", "Partner", "TV Show"], img: "./images/language-learning.jpg"},
    {activity: "Reading", social: "single", type: "recreational", mintime: 1, cost: 0, need: ["Book"], img: "./images/reading.jpg"},
    {activity: "DJing", social: "both", type: "recreational", mintime: 1, cost: 0, need: ["Equipment", "Music"], img: "./images/djing.jpg"},
    {activity: "Genealogy", social: "both", type: "recreational", mintime: 4, cost: 0, need: ["Internet"], img: "./images/genealogy.jpg"},
    {activity: "Karaoke", social: "group", type: "recreational", mintime: 2, cost: 5, need: ["Karaoke Bar", "Friends"], img: "./images/karaoke.jpg"},
    {activity: "Kung Fu", social: "group", type: "sport", mintime: 2, cost: 10, need: ["Partner", "Spot"], img: "./images/kung-fu.jpg"},
    {activity: "Lego Building", social: "both", type: "recreational", mintime: 1, cost: 25, need: ["Lego Bricks"], img: "./images/lego-building.jpg"},
    {activity: "Hacking", social: "single", type: "art", mintime: 4, cost: 0, need: ["Computer", "Target"], img: "./images/hacking.jpg"},
    {activity: "Meditation", social: "single", type: "recreational", mintime: 1, cost: 0, need: ["Silent Spot"], img: "./images/meditation.jpg"},
    {activity: "Model Building", social: "single", type: "recreational", mintime: 2, cost: 50, need: ["Model", "Tools"], img: "./images/model-building.jpg"},
    {activity: "Scuba Diving", social: "group", type: "sport", mintime: 3, cost: 150, need: ["Equipment", "Spot", "Partner"], img: "./images/scuba-diving.jpg"},
    {activity: "Crying", social: "single", type: "recreational", mintime: 1, cost: 0, need: ["Tissues", "Sad Thoughts"], img: "./images/crying.jpg"},
    {activity: "Podcast Listening", social: "single", type: "educational", mintime: 1, cost: 0, need: ["Device"], img: "./images/podcast-listening.jpg"},
    {activity: "Instrument Learning", social: "single", type: "art", mintime: 2, cost: 0, need: ["Instrument", "Notes", "Tutorial"], img: "./images/instrument-learning.jpg"},
    {activity: "Writing", social: "single", type: "recreational", mintime: 1, cost: 0, need: ["Pen", "Paper"], img: "./images/writing.jpg"},
    {activity: "Knitting", social: "single", type: "recreational", mintime: 1, cost: 10, need: ["Equipment", "Wool"], img: "./images/knitting.jpg"},
    {activity: "Gardening", social: "single", type: "recreational", mintime: 2, cost: 0, need: ["Garden", "Tools"], img: "./images/gardening.jpg"},
    {activity: "3D Printing", social: "single", type: "recreational", mintime: 1, cost: 50, need: ["Printer", "Computer"], img: "./images/3d-printing.jpg"},
    {activity: "Sleeping", social: "single", type: "lazy", mintime: 5, cost: 0, need: ["Bed"], img: "./images/sleeping.jpg"},
    {activity: "Staring", social: "single", type: "lazy", mintime: 1, cost: 0, need: ["Target"], img: "./images/staring.jpg"},
    {activity: "Puzzling", social: "both", type: "recreational", mintime: 1, cost: 0, need: ["Puzzle"], img: "./images/puzzling.jpg"},
    {activity: "Cooking", social: "both", type: "recreational", mintime: 2, cost: 5, need: ["Kitchen", "Ingredients"], img: "./images/cooking.jpg"},
    {activity: "Makeup", social: "both", type: "recreational", mintime: 1, cost: 5, need: ["Makeup", "Mirror"], img: "./images/makeup.jpg"},
    {activity: "Painting", social: "single", type: "art", mintime: 1, cost: 0, need: ["Paper", "Paint"], img: "./images/painting.jpg"},
    {activity: "Drinking", social: "both", type: "lazy", mintime: 4, cost: 100, need: ["Alkohol"], img: "./images/drinking.jpg"},
    {activity: "Airbrushing", social: "single", type: "art", mintime: 1, cost: 25, need: ["Equipment", "Paper"], img: "./images/airbrushing.jpg"},
    {activity: "Filming", social: "both", type: "art", mintime: 2, cost: 0, need: ["Camera", "Object(s)"], img: "./images/filming.jpg"},
    {activity: "Jewelry Making", social: "both", type: "art", mintime: 2, cost: 25, need: ["Pearls", "Strings"], img: "./images/jewelry-makin.jpg"},
    {activity: "Candle Making", social: "both", type: "art", mintime: 2, cost: 10, need: ["Wax", "Strings"], img: "./images/candle-making.jpg"},
    {activity: "Poetry", social: "single", type: "art", mintime: 2, cost: 0, need: ["Pen", "Paper"], img: "./images/poetry.jpg"},
    {activity: "Stamp Collecting", social: "single", type: "recreational", mintime: 1, cost: 25, need: ["Stamps"], img: "./images/stamp-collecting.jpg"},
    {activity: "Shopping", social: "both", type: "recreational", mintime: 4, cost: 1000, need: ["Money"], img: "./images/shopping.jpg"},
    {activity: "Train Spotting", social: "both", type: "lazy", mintime: 3, cost: 0, need: ["Tracks", "Station"], img: "./images/train-spotting.jpg"},
    {activity: "Procrastinating", social: "single", type: "lazy", mintime: 12, cost: 0, need: ["Nothing"], img: "./images/procrastinating.jpg"},
    {activity: "Smoking", social: "both", type: "lazy", mintime: 1, cost: 5, need: ["Cigarettes", "Vaporizer"], img: "./images/smoking.jpg"},
    {activity: "Boxing", social: "group", type: "sport", mintime: 1, cost: 0, need: ["Gloves", "Partner"], img: "./images/boxing.jpg"},
    {activity: "Dancing", social: "group", type: "sport", mintime: 1, cost: 0, need: ["Music", "Partner"], img: "./images/dancing.jpg"},
    {activity: "Handball", social: "group", type: "sport", mintime: 1, cost: 0, need: ["Ball", "People"], img: "./images/handball.jpg"},
    {activity: "Board Game", social: "group", type: "recreational", mintime: 1, cost: 0, need: ["Game", "Partner"], img: "./images/board-game.jpg"},
    {activity: "Chess", social: "group", type: "recreational", mintime: 1, cost: 0, need: ["Chess Game", "Partner"], img: "./images/chess.jpg"},
    {activity: "Investing", social: "single", type: "art", mintime: 100, cost: 1000, need: ["Money", "Computer"], img: "./images/investing.jpg"},
    {activity: "Crypto", social: "single", type: "art", mintime: 50, cost: 1000, need: ["Money", "Computer", "Tissues"], img: "./images/crypto.jpg"},
    {activity: "Volunteering", social: "both", type: "recreational", mintime: 2, cost: 0, need: ["Organisation"], img: "./images/volunteering.jpg"},
    {activity: "Magic Tricks", social: "both", type: "art", mintime: 3, cost: 0, need: ["Tutorials"], img: "./images/magic-tricks.jpg"},
    {activity: "Origami", social: "both", type: "art", mintime: 2, cost: 1, need: ["Paper", "Tutorials"], img: "./images/origami.jpg"},
    {activity: "Songwriting", social: "single", type: "art", mintime: 2, cost: 0, need: ["Pen", "Paper"], img: "./images/songwriting.jpg"},
    {activity: "Sightseeing", social: "both", type: "recreational", mintime: 3, cost: 0, need: ["Guide"], img: "./images/sightseeing.jpg"},
    {activity: "Running", social: "both", type: "sport", mintime: 1, cost: 0, need: ["Shoes", "Destination"], img: "./images/running.jpg"},
    {activity: "Blogging", social: "both", type: "recreational", mintime: 5, cost: 0, need: ["Blog", "Ideas"], img: "./images/blogging.jpg"},
    {activity: "Kite Building", social: "both", type: "recreational", mintime: 2, cost: 10, need: ["Materials", "Tutorial"], img: "./images/kite-building.jpg"},
    {activity: "Coding", social: "single", type: "art", mintime: 4, cost: 0, need: ["Computer", "Tutorials"], img: "./images/coding.jpg"},
    {activity: "Calligraphy", social: "single", type: "art", mintime: 2, cost: 0, need: ["Pen", "Paper", "Tutorial"], img: "./images/calligraphy.jpg"},
    {activity: "People Watching", social: "single", type: "lazy", mintime: 1, cost: 0, need: ["People", "Spot"], img: "./images/people-watching.jpg"},
    {activity: "Geocaching", social: "both", type: "recreational", mintime: 2, cost: 0, need: ["App"], img: "./images/geocaching.jpg"},
    {activity: "Cosplaying", social: "both", type: "recreational", mintime: 2, cost: 150, need: ["Costume(s)"], img: "./images/cosplaying.jpg"},
    {activity: "Amateur Radio", social: "both", type: "recreational", mintime: 4, cost: 500, need: ["Electronics"], img: "./images/amateur-radio.jpg"},
    {activity: "Wikipedia Editing", social: "single", type: "recreational", mintime: 1, cost: 0, need: ["Computer"], img: "./images/wikipedia-editing.jpg"},
    {activity: "Billiards", social: "group", type: "sport", mintime: 1, cost: 10, need: ["Table", "Partner"], img: "./images/billiards.jpg"},
    {activity: "Furniture Buildung", social: "single", type: "recreational", mintime: 4, cost: 50, need: ["Tools", "Materials"], img: "./images/furniture-building.jpg"},
    {activity: "Welding", social: "single", type: "recreational", mintime: 3, cost: 500, need: ["Welding Machine", "Materials"], img: "./images/welding.jpg"},
    {activity: "Pottery", social: "single", type: "art", mintime: 2, cost: 50, need: ["Materials"], img: "./images/pottery.jpg"},
    {activity: "Bread Making", social: "single", type: "recreational", mintime: 4, cost: 10, need: ["Ingredients", "Oven"], img: "./images/bread-making.jpg"},
    {activity: "Collecting", social: "single", type: "recreational", mintime: 2, cost: 25, need: ["Store", "Source"], img: "./images/collecting.jpg"},
    {activity: "Astronomy", social: "single", type: "recreational", mintime: 2, cost: 0, need: ["Tutorials", "Telescope"], img: "./images/astronomy.jpg"},
    {activity: "Parkour", social: "both", type: "sport", mintime: 1, cost: 0, need: ["Clothing", "Shoes"], img: "./images/parkour.jpg"},
    {activity: "Metal Detecting", social: "both", type: "recreational", mintime: 3, cost: 350, need: ["Device", "Spot"], img: "./images/metal-detecting.jpg"},
    {activity: "Drone Flying", social: "both", type: "recreational", mintime: 1, cost: 250, need: ["Drone", "Spot"], img: "./images/drone-flying.jpg"},
    {activity: "Fishing", social: "both", type: "recreational", mintime: 3, cost: 0, need: ["Rod", "Bait"], img: "./images/fishing.jpg"},
    {activity: "Hunting", social: "single", type: "recreational", mintime: 5, cost: 350, need: ["Weapon", "Spot"], img: "./images/hunting.jpg"},
    {activity: "Archery", social: "both", type: "sport", mintime: 2, cost: 0, need: ["Bow", "Arrows", "Target"], img: "./images/archery.jpg"}
    // {activity: "", social: "", type: "", mintime: 1, cost: 0, need: [""], img: "./images/.jpg"}
]

// class template with methods ready to use
class FreeTimeFiller {
    constructor (activities, social, type, time, cost) {
        this.activities = activities;
        this.social = social;
        this.type = type;
        this.time = time;
        this.cost = cost;
    }
    // social filtering
    groupOnly = () => this.activities.filter(activity => activity.social == "group" || activity.social == "both")
    singleOnly = () => this.activities.filter(activity => activity.social == "single")
    // time filtering
    oneHourOnly = (array) => array.filter(activity => activity.mintime <= 1)
    twoHourOnly = (array) => array.filter(activity => activity.mintime <= 2)
    // money filtering
    freeOnly = (array) => array.filter(activity => activity.cost == 0)
    cheapOnly = (array) => array.filter(activity => activity.cost <= 5)
}

// run the following code after finishing the html page load
window.addEventListener("DOMContentLoaded", () => {
    // get all the html elements
    let freetimeForm = document.querySelector(".freetime-filler-form");
    let noActivityOutput = document.querySelector(".no-activity-output");
    let headingOutput = document.querySelector(".heading-output");
    let activityOutput = document.querySelector(".activity-output");
    let timeOutput = document.querySelector(".time-output");
    let costOutput = document.querySelector(".cost-output");
    let needsOutput = document.querySelector(".needs-output");
    let moreOutput = document.querySelector(".more-output");
    let imgOutput = document.querySelector(".image-output");
    let nextActivityBtn = document.querySelector(".next-activity");

    // hide the "next activity" button at start
    nextActivityBtn.style.display = "none";

    // display a random activity on startup
    let randomOne = activities[Math.floor(Math.random() * activities.length)];
    headingOutput.innerHTML = "<h3>Random Activity:</h3>";
    activityOutput.innerHTML = `<p><b>${randomOne.activity}</b></p>`;
    timeOutput.innerHTML = `<p>You will need at least ${randomOne.mintime} hour(s) of time.</p>`;
    costOutput.innerHTML = `<p>It should cost about ${randomOne.cost}€</p>`;
    needsOutput.innerHTML = `<p>You may need: ${randomOne.need.join(", ")}</p>`;
    imgOutput.setAttribute("src", randomOne.img);

    // on click on the forms submit button, create an array with matching activites and display a random one 
    freetimeForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // display the "next activity" button
        nextActivityBtn.style.display = "block";

        // receive the users choices as string / array values from the html file
        let socialChoice = document.querySelector("#social").value;
        // the checkbox input send a nodelist, which needs to be converted to an array
        let typeChoice = Array.from(document.querySelectorAll("[name='type']:checked")).map(element => element.value);
        let timeChoice = document.querySelector("#time").value;
        let costChoice = document.querySelector("#cost").value;
        
        // create a personal class instance with the users choices
        let personalActivity = new FreeTimeFiller(activities, socialChoice, typeChoice, timeChoice, costChoice); 
       
        // 1. create a new array with activities filtered according to social choice by the user
        if (socialChoice != "both") {
            if (socialChoice == "group") {
                // add only the non single ones to the new array
                activitiesArray = personalActivity.groupOnly();
            } else if (socialChoice == "single") {
                // add only the single ones
                activitiesArray = personalActivity.singleOnly();
            }
        } else {
            // add all activities
            activitiesArray = activities.map(obj => obj);
        }

        // 2. filter the just new array by user selected interests (typeChoice is an array filled with the users selected interests)
        let interestFiltered = [];
        typeChoice.map(item => {
            for (let activity of activitiesArray) {
                if (activity.type == item) {
                    interestFiltered.push(activity);
                }
            }
        })

        // 3. filter out activities by the users time selection
        if (timeChoice != "unlimited") {
            if (timeChoice == 1) {
                timeFiltered = personalActivity.oneHourOnly(interestFiltered);
            } else if (timeChoice == 2) {
                timeFiltered = personalActivity.twoHourOnly(interestFiltered);
            }
        } else {
            timeFiltered = interestFiltered.map(obj => obj);
        }
       
        // filter out activities by the users cost selection
        if (costChoice != "all") {
            if (costChoice == "free") {
                costFiltered = personalActivity.freeOnly(timeFiltered);
            } else if (costChoice == "cheap") {
                costFiltered = personalActivity.cheapOnly(timeFiltered);
            }
        } else {
            costFiltered = timeFiltered.map(obj => obj);
        }

        // output the first matching activity
        // 1. if nothing can be presented, let the user know
        if (costFiltered.length == 0) {
            nextActivityBtn.style.display = "none";
            headingOutput.innerHTML = "<h3>Big sad!</h3>";
            noActivityOutput.innerHTML = "<p>Wow, we have no activity for you. Maybe you can be less picky?</p>"
            moreOutput.innerHTML = "";
            activityOutput.innerHTML = "";
            timeOutput.innerHTML = "";
            costOutput.innerHTML = "";
            needsOutput.innerHTML = "";
            imgOutput.setAttribute("src", activities[20].img);
        } 
        // 2. if there is only one activity, make sure the "next activity" button is not displayed
        else if (costFiltered.length == 1) {
            nextActivityBtn.style.display = "none";
            headingOutput.innerHTML = "<h3>Activity:</h3>";
            noActivityOutput.innerHTML = "";
            activityOutput.innerHTML = "<p>Activity</p>";
            timeOutput.innerHTML = "<p>Minimum time needed:</p>";
            costOutput.innerHTML = "<p>How much it will cost:</p>";
            needsOutput.innerHTML = "<p>What you will need:</p>";

            // randomly pick one from the costFiltered array and present it.
            let randomOne = costFiltered[Math.floor(Math.random() * costFiltered.length)];
            // remove the selected object from the array, so it does not get shown twice
            costFiltered.splice([costFiltered.indexOf(randomOne)], 1);

            // output the activity
            activityOutput.innerHTML = `<p><b>${randomOne.activity}</b></p>`;
            noActivityOutput.innerHTML = "";
            timeOutput.innerHTML = `<p>You will need at least ${randomOne.mintime} hour(s) of time.</p>`;
            costOutput.innerHTML = `<p>It should cost about ${randomOne.cost}€</p>`;
            needsOutput.innerHTML = `<p>You may need: ${randomOne.need.join(", ")}</p>`;
            moreOutput.innerHTML = `<p>We got <b>${costFiltered[0].length}</b> more idea(s) for you!</p>`;
            imgOutput.setAttribute("src", randomOne.img);
        } 
        // 3. if the array has more than one item, display a random one, plus the "next activity" button
        else {
            headingOutput.innerHTML = "<h3>Activity:</h3>";
            noActivityOutput.innerHTML = "";
            activityOutput.innerHTML = "<p>Activity</p>";
            timeOutput.innerHTML = "<p>Minimum time needed:</p>";
            costOutput.innerHTML = "<p>How much it will cost:</p>";
            needsOutput.innerHTML = "<p>What you will need:</p>";

            // randomly pick one from the costFiltered array and present it.
            let randomOne = costFiltered[Math.floor(Math.random() * costFiltered.length)];
            // remove the selected object from the array, so it does not get shown twice
            costFiltered.splice([costFiltered.indexOf(randomOne)], 1);

            // output the activity
            activityOutput.innerHTML = `<p><b>${randomOne.activity}</b></p>`;
            noActivityOutput.innerHTML = "";
            timeOutput.innerHTML = `<p>You will need at least ${randomOne.mintime} hour(s) of time.</p>`;
            costOutput.innerHTML = `<p>It should cost about ${randomOne.cost}€</p>`;
            needsOutput.innerHTML = `<p>You may need: ${randomOne.need.join(", ")}</p>`;
            moreOutput.innerHTML = `<p>We got ${costFiltered.length} more idea(s) for you!</p>`;
            imgOutput.setAttribute("src", randomOne.img);
        }

    })

    // on click of the "next activity" button, go to the next random activity
    nextActivityBtn.addEventListener("click", () => {

        // randomly pick one from the costFiltered array and present it.
        let randomOne = costFiltered[Math.floor(Math.random() * costFiltered.length)];
        // remove the selected object from the array, so it does not get shown twice
        costFiltered.splice([costFiltered.indexOf(randomOne)], 1);

        // output the activity
        activityOutput.innerHTML = `<p><b>${randomOne.activity}</b></p>`;
        timeOutput.innerHTML = `<p>You will need at least ${randomOne.mintime} hour(s) of time.</p>`;
        costOutput.innerHTML = `<p>It should cost about ${randomOne.cost}€</p>`;
        needsOutput.innerHTML = `<p>You may need: ${randomOne.need.join(", ")}</p>`;
        moreOutput.innerHTML = `<p>We got ${costFiltered.length} more idea(s) for you!</p>`;
        imgOutput.setAttribute("src", randomOne.img);

        // if the array is empty, remove the next button and display a message
        if (costFiltered.length == 0) {
            nextActivityBtn.style.display = "none";
            moreOutput.innerHTML = `<p><b>Sorry, no more ideas for now!</b></p>`;
        } 
    })
})