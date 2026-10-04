```javascript
const positiveWords = [
    "good",
    "great",
    "excellent",
    "amazing",
    "awesome",
    "love",
    "like",
    "happy",
    "wonderful",
    "fantastic",
    "best",
    "beautiful",
    "perfect",
    "nice",
    "success",
    "successful",
    "enjoy",
    "enjoyed",
    "helpful",
    "easy",
    "brilliant",
    "excited",
    "fun",
    "thank",
    "thanks"
];

const negativeWords = [
    "bad",
    "worst",
    "terrible",
    "horrible",
    "hate",
    "dislike",
    "sad",
    "angry",
    "poor",
    "awful",
    "useless",
    "boring",
    "difficult",
    "failure",
    "failed",
    "problem",
    "problems",
    "disappointed",
    "disappointing",
    "annoying",
    "pain",
    "wrong",
    "slow"
];

function analyzeSentiment() {

    const textInput =
        document.getElementById("textInput");

    const text =
        textInput.value.trim().toLowerCase();

    if (text === "") {

        alert("Please enter some text.");

        return;
    }

    const words =
        text.match(/\b[\w']+\b/g) || [];

    let positiveCount = 0;
    let negativeCount = 0;

    words.forEach(function(word) {

        if (positiveWords.includes(word)) {
            positiveCount++;
        }

        if (negativeWords.includes(word)) {
            negativeCount++;
        }

    });

    let sentiment;
    let emoji;
    let message;

    if (
        positiveCount > negativeCount &&
        positiveCount > 0
    ) {

        sentiment = "Positive";
        emoji = "😊";

        message =
            "Your text expresses a positive feeling.";

    } else if (
        negativeCount > positiveCount &&
        negativeCount > 0
    ) {

        sentiment = "Negative";
        emoji = "😞";

        message =
            "Your text expresses a negative feeling.";

    } else {

        sentiment = "Neutral";
        emoji = "😐";

        message =
            "Your text appears to be neutral.";
    }

    let totalWords = words.length;

    let positiveScore = 0;
    let negativeScore = 0;
    let neutralScore = 0;

    if (totalWords > 0) {

        positiveScore =
            Math.round(
                (positiveCount / totalWords) * 100
            );

        negativeScore =
            Math.round(
                (negativeCount / totalWords) * 100
            );

        neutralScore =
            100 -
            positiveScore -
            negativeScore;

    }

    document.getElementById("emoji").textContent =
        emoji;

    document.getElementById("sentiment").textContent =
        sentiment;

    document.getElementById("message").textContent =
        message;

    document.getElementById("positiveScore").textContent =
        positiveScore + "%";

    document.getElementById("neutralScore").textContent =
        neutralScore + "%";

    document.getElementById("negativeScore").textContent =
        negativeScore + "%";

    document.getElementById("result")
        .classList.remove("hidden");
}

function clearText() {

    document.getElementById("textInput").value = "";

    document.getElementById("result")
        .classList.add("hidden");
}

function useExample(text) {

    document.getElementById("textInput").value =
        text;

    analyzeSentiment();
}
```
