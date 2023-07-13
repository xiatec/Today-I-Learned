// initial data
const initialFacts = [
    {
        id: 1,
        text: "React is being developed by Meta (formerly facebook)",
        source: "https://opensource.fb.com/",
        category: "technology",
        votesInteresting: 24,
        votesMindblowing: 9,
        votesFalse: 4,
        createdIn: 2021,
    },
    {
        id: 2,
        text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
        source:
            "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
        category: "society",
        votesInteresting: 11,
        votesMindblowing: 2,
        votesFalse: 0,
        createdIn: 2019,
    },
    {
        id: 3,
        text: "Lisbon is the capital of Portugal",
        source: "https://en.wikipedia.org/wiki/Lisbon",
        category: "society",
        votesInteresting: 8,
        votesMindblowing: 3,
        votesFalse: 1,
        createdIn: 2015,
    },
];

const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];


const btn = document.querySelector('.btn-open')
const formList = document.querySelector('.fact-form')
const factLists = document.querySelector(".fact-lists")

factLists.innerHTML = ""
// createLists(initialFacts)

loadFacts()
// fetch data
async function loadFacts() {
    const res = await fetch("https://utixqfwanlepsxkehune.supabase.co/rest/v1/facts", {
        headers: {
            apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aXhxZndhbmxlcHN4a2VodW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2ODQzNTUsImV4cCI6MjAwNDI2MDM1NX0.hdXyJ68Y2oj-YW4OhZqo448X4dRV43rOm9iwaQJriOo",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aXhxZndhbmxlcHN4a2VodW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2ODQzNTUsImV4cCI6MjAwNDI2MDM1NX0.hdXyJ68Y2oj-YW4OhZqo448X4dRV43rOm9iwaQJriOo"
        },
    })
    const data = await res.json()
    createLists(data)
}


// createLists use DOM
function createLists(initialFacts) {
    const htmlArr = initialFacts.map((fact) => `
    <li class="fact">
                        <p>
                            ${fact.text}
                            <a class="source" href=${fact.source} target="_blank">(Source)</a>
                        </p>
                        <span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${fact.category}</span>
                    </li>
`)
    console.log(htmlArr)
    const html = htmlArr.join("")
    factLists.insertAdjacentHTML("afterbegin", html)
}

btn.addEventListener('click', function () {
    if (formList.classList.contains('hidden')) {
        formList.classList.remove("hidden")
        btn.textContent = 'close'
    } else {
        formList.classList.add('hidden')
        btn.textContent = 'Share A Fact'

    }
})