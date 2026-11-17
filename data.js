/*
  TOP 10 QUIZ — all rounds, lists and sources live in this file.
  Edit freely; save; refresh index.html (F5).

  How it is built
  - A round has a format (rules) and 1 to 3 "lists". Every list is one question:
    timer, board, paste the chat. The scoreboard comes after the last list of a round.
  - Which lists you play is set in the game: press I, "Lists to play".
    "play: false" below only means: switched off until you switch it on.

  Points (change them here if you like)
  - points.hit: an answer that is in the top 10
  - points.top: the answer at place 1
  - points.bomb: the answer at place 11 (the bomb)
  - points.sortPlace: every card in the right place (sort rounds)
  - points.finalePlace: every colleague in the right place (finale)

  Top-10 lists
  - Exactly 10 items plus one "bomb" (place 11). "rank" is the order (1 to 10, each once).
  - "place" (optional) is what the board shows, for ties: e.g. two countries on "=3".
  - "label" is the big text on a tile, "sub" the small line under it.
  - "alias" = other ways people may write an answer (Dutch names, abbreviations).
    Small typos are forgiven anyway.
  - "extra" = an optional card after the bomb. "dataDate" shows on the board.

  Sort lists ("Sort it" rounds)
  - "cards" are the 5 things shown to players, in this order: A, B, C, D, E.
  - "order" is the right position (1 = first). "hint" shows on the card, "reveal" after the answer.
*/

window.QUIZ = {
  title: "Top 10 in Range",
  subtitle: "The Dexcom team quiz",
  timerSeconds: 45,

  points: { hit: 1, top: 3, bomb: -1, sortPlace: 1, finalePlace: 1 },

  // Optional: names to pre-fill on the "Who's playing?" screen (max 10).
  players: [],

  rules: [
    { icon: "✅", title: "In the top 10 = 1 point", text: "Every answer that's on the list gets you 1 point. It doesn't matter where on the list." },
    { icon: "🥇", title: "Number 1 = 3 points", text: "Guessed the answer at place 1? That one is worth 3 points." },
    { icon: "💣", title: "The bomb: urgent low", text: "Place 11 just missed the list. Guessed it? That's minus 1." },
    { icon: "🧮", title: "We count for you", text: "Send your answers in the chat. The host pastes them in and the game does the maths. Typos are fine." }
  ],

  rounds: [
    /* ------------------------------------------------------------------ */
    {
      type: "classic",
      format: "Diabetes around the world",
      icon: "🌍",
      intro: "Three lists from the IDF Diabetes Atlas, the world's reference for diabetes numbers. Countries with at least 1 million people in that age group.",
      howTo: [
        "Type 3 countries in the Teams chat. Don't send yet.",
        "English or Dutch country names both work."
      ],
      scoring: "In the top 10 = 1 point, number 1 = 3 points, bomb = −1.",
      guesses: 3,
      lists: [
        {
          id: "adultspct",
          topic: "Where is the share of adults with diabetes the highest?",
          hook: "Not the most people, but the biggest percentage of adults (20 to 79).",
          source: "IDF Diabetes Atlas, 11th edition (2024 estimates): people with diabetes ÷ adult population (20–79 y), countries with at least 1 million adults",
          year: "2024",
          items: [
            { rank: 1, label: "Kuwait", sub: "28.36% of adults", alias: ["Koeweit"] },
            { rank: 2, label: "Pakistan", sub: "26.48% of adults" },
            { rank: 3, label: "Saudi Arabia", sub: "21.39% of adults", alias: ["Saudi", "KSA", "Saoedi-Arabië", "Saoedi Arabie"] },
            { rank: 4, label: "Malaysia", sub: "19.86% of adults", alias: ["Maleisië", "Maleisie"] },
            { rank: 5, label: "Egypt", sub: "19.84% of adults", alias: ["Egypte"] },
            { rank: 6, label: "Qatar", sub: "18.66% of adults" },
            { rank: 7, label: "Bahrain", sub: "17.85% of adults" },
            { rank: 8, label: "Algeria", sub: "16.87% of adults", alias: ["Algerije"] },
            { rank: 9, label: "Tunisia", sub: "16.60% of adults", alias: ["Tunesië", "Tunesie"] },
            { rank: 10, label: "Dominican Republic", sub: "16.59% of adults", alias: ["Dominicaanse Republiek", "Dominican Rep"] }
          ],
          bomb: { rank: 11, label: "United Arab Emirates", sub: "16.53% of adults", alias: ["UAE", "Emirates", "Dubai", "Verenigde Arabische Emiraten", "VAE"] },
          extra: { title: "And closer to home?", big: "#101", text: "The Netherlands: 6.9% of adults. Belgium is #91 (7.6%), Lithuania #53 (10.6%)." }
        },
        {
          id: "kidspct",
          topic: "Where is type 1 diabetes most common in children and teens?",
          hook: "The share of everyone aged 0 to 19 who lives with type 1: the people who grow up with a sensor on their arm.",
          source: "IDF Diabetes Atlas, 11th edition (2024 estimates): people with type 1 diabetes (0–19 y) ÷ population 0–19, countries with at least 1 million children and teens",
          year: "2024",
          items: [
            { rank: 1, label: "Finland", sub: "0.67%: 1 in 149 children", alias: ["Finland", "Suomi"] },
            { rank: 2, label: "Saudi Arabia", sub: "0.44%: 1 in 226 children", alias: ["Saudi", "KSA", "Saoedi-Arabië", "Saoedi Arabie"] },
            { rank: 3, label: "United Arab Emirates", sub: "0.44%: 1 in 229 children", alias: ["UAE", "Emirates", "Dubai", "Verenigde Arabische Emiraten", "VAE"] },
            { rank: 4, label: "Oman", sub: "0.41%: 1 in 245 children" },
            { rank: 5, label: "Sweden", sub: "0.38%: 1 in 260 children", alias: ["Zweden"] },
            { rank: 6, label: "Kuwait", sub: "0.35%: 1 in 288 children", alias: ["Koeweit"] },
            { rank: 7, label: "Norway", sub: "0.34%: 1 in 291 children", alias: ["Noorwegen"] },
            { rank: 8, label: "Canada", sub: "0.34%: 1 in 296 children" },
            { rank: 9, label: "Libya", sub: "0.34%: 1 in 298 children", alias: ["Libië", "Libie"] },
            { rank: 10, label: "Tunisia", sub: "0.33%: 1 in 302 children", alias: ["Tunesië", "Tunesie"] }
          ],
          bomb: { rank: 11, label: "Morocco", sub: "0.33%: 1 in 305 children", alias: ["Marokko"] },
          extra: { title: "And closer to home?", big: "#32", text: "The Netherlands: 0.18%, about 1 in 540 children. Belgium is #31, at the same level." }
        },
        {
          id: "spend",
          topic: "Which countries spend the most on diabetes care per person?",
          hook: "Health spending per person with diabetes (20 to 79), in US dollars. Who pays the most?",
          source: "IDF Diabetes Atlas, 11th edition: diabetes-related health expenditure per person (USD), 2024 estimates",
          year: "2024",
          items: [
            { rank: 1, label: "Switzerland", sub: "$12,234 per person", alias: ["Zwitserland", "Swiss"] },
            { rank: 2, label: "United States", sub: "$10,497 per person", alias: ["USA", "US", "America", "United States of America", "Verenigde Staten", "Amerika", "VS"] },
            { rank: 3, label: "Norway", sub: "$10,227 per person", alias: ["Noorwegen"] },
            { rank: 4, label: "Iceland", sub: "$8,055 per person", alias: ["IJsland", "Ijsland"] },
            { rank: 5, label: "Luxembourg", sub: "$8,026 per person", alias: ["Luxemburg"] },
            { rank: 6, label: "Denmark", sub: "$7,718 per person", alias: ["Denemarken"] },
            { rank: 7, label: "Ireland", sub: "$7,234 per person", alias: ["Ierland"] },
            { rank: 8, label: "Sweden", sub: "$7,081 per person", alias: ["Zweden"] },
            { rank: 9, label: "Austria", sub: "$6,268 per person", alias: ["Oostenrijk"] },
            { rank: 10, label: "Germany", sub: "$6,237 per person", alias: ["Duitsland"] }
          ],
          bomb: { rank: 11, label: "Netherlands", sub: "$6,235 per person", alias: ["Nederland", "Holland", "The Netherlands", "NL"] },
          extra: { title: "So close!", big: "$1.50", text: "That's how much less the Netherlands spends per person than Germany (#10). Belgium is #12, Lithuania #70." }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      type: "classic",
      format: "One shot",
      icon: "🎯",
      intro: "Our own industry. Just one guess, so think before you type.",
      howTo: [
        "You get just 1 guess. Make it count.",
        "Type one company name in the Teams chat. Don't send yet."
      ],
      scoring: "In the top 10 = 1 point, number 1 = 3 points, bomb = −1.",
      guesses: 1,
      lists: [
        {
          id: "medtech",
          topic: "The biggest medical device companies in the world",
          hook: "Ranked by annual revenue. Can you name one of the top 10? And where does Dexcom land?",
          source: "Medical Design & Outsourcing, Medtech Big 100 (2026 edition)",
          year: "2026",
          items: [
            { rank: 1, label: "Medtronic", sub: "$36.4 billion" },
            { rank: 2, label: "Johnson & Johnson MedTech", sub: "$33.8 billion", alias: ["Johnson & Johnson", "Johnson and Johnson", "J&J", "JnJ", "J&J MedTech", "DePuy Synthes", "Ethicon"] },
            { rank: 3, label: "Medline Industries", sub: "$28.4 billion", alias: ["Medline"] },
            { rank: 4, label: "Siemens Healthineers", sub: "$26.4 billion", alias: ["Siemens", "Siemens Healthcare"] },
            { rank: 5, label: "Stryker", sub: "$25.1 billion" },
            { rank: 6, label: "Abbott", sub: "medical devices: $21.4 billion", alias: ["Abbott Laboratories", "Abbott Diabetes Care", "Abbott Medical"] },
            { rank: 7, label: "GE HealthCare", sub: "$20.6 billion", alias: ["GE", "GE Healthcare", "General Electric", "GEHC"] },
            { rank: 8, label: "Philips", sub: "$20.2 billion", alias: ["Royal Philips", "Philips Healthcare", "Phillips"] },
            { rank: 9, label: "Boston Scientific", sub: "$20.1 billion", alias: ["Boston Sci", "BSci", "BSX"] },
            { rank: 10, label: "BD", sub: "medical + interventional: $18.5 billion", alias: ["Becton Dickinson", "Becton, Dickinson and Company", "Becton"] }
          ],
          bomb: { rank: 11, label: "Henry Schein", sub: "$13.2 billion", alias: ["Schein"] },
          extra: { title: "And Dexcom?", big: "#27", text: "$4.66 billion in revenue, up 3 places from last year." }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      type: "sort",
      format: "Spike or not?",
      icon: "📈",
      intro: "Life with a CGM: what does food do to your glucose? Put 5 foods in order, as the question says.",
      howTo: [
        "Put the 5 foods in order, highest first.",
        "Type the 5 letters in order. Example: C A E B D"
      ],
      scoring: "1 point for every food in the right place.",
      lists: [
        {
          id: "gi1",
          topic: "Which food spikes your glucose the most?",
          hook: "The glycemic index (GI) shows how fast a food raises your glucose; pure glucose = 100. Sweet doesn't always mean spike.",
          sortLabel: "highest GI",
          source: "Atkinson, Foster-Powell & Brand-Miller, International tables of glycemic index values (Diabetes Care, 2008), table of 62 common foods",
          year: "2008",
          cards: [
            { label: "Banana", hint: "raw", reveal: "GI 51", order: 4 },
            { label: "Chocolate", hint: "a bar of it", reveal: "GI 40", order: 5 },
            { label: "Watermelon", hint: "raw", reveal: "GI 76", order: 1 },
            { label: "Popcorn", hint: "a bowl of it", reveal: "GI 65", order: 3 },
            { label: "White rice", hint: "boiled", reveal: "GI 73", order: 2 }
          ]
        },
        {
          id: "carbs1",
          topic: "Carb counting: which one has the most carbs?",
          hook: "Grams of carbohydrate in one normal portion. Every CGM user's daily maths.",
          sortLabel: "most carbs",
          source: "USDA FoodData Central (SR Legacy): carbohydrate per 100 g × portion weight",
          year: "2019",
          cards: [
            { label: "A can of cola", hint: "355 ml", reveal: "38.5 g carbs", order: 2 },
            { label: "A slice of gouda", hint: "28 g", reveal: "0.6 g carbs", order: 5 },
            { label: "A bowl of white rice", hint: "1 cup, cooked", reveal: "44.6 g carbs", order: 1 },
            { label: "A glass of milk", hint: "whole milk, 240 ml", reveal: "11.7 g carbs", order: 4 },
            { label: "A banana", hint: "medium", reveal: "26.9 g carbs", order: 3 }
          ]
        },
        {
          id: "gi2",
          topic: "Which one spikes the most this time?",
          hook: "Table sugar is in here. Is it the winner?",
          sortLabel: "highest GI",
          source: "Atkinson, Foster-Powell & Brand-Miller, International tables of glycemic index values (Diabetes Care, 2008), table of 62 common foods",
          year: "2008",
          cards: [
            { label: "Ice cream", hint: "regular", reveal: "GI 51", order: 5 },
            { label: "Potato", hint: "boiled", reveal: "GI 78", order: 1 },
            { label: "Soft drink", hint: "a regular soda", reveal: "GI 59", order: 4 },
            { label: "Whole wheat bread", hint: "a slice", reveal: "GI 74", order: 2 },
            { label: "Table sugar", hint: "sucrose", reveal: "GI 65", order: 3 }
          ]
        },
        {
          id: "carbs2",
          play: false,
          topic: "Snack time: which one has the most carbs?",
          hook: "One portion each. The office snack drawer, ranked.",
          sortLabel: "most carbs",
          source: "USDA FoodData Central (SR Legacy): carbohydrate per 100 g × portion weight",
          year: "2019",
          cards: [
            { label: "An apple", hint: "medium", reveal: "23.0 g carbs", order: 3 },
            { label: "A handful of almonds", hint: "23 almonds, 28 g", reveal: "6.1 g carbs", order: 5 },
            { label: "A bagel", hint: "plain, medium", reveal: "55.0 g carbs", order: 1 },
            { label: "A can of beer", hint: "355 ml", reveal: "12.6 g carbs", order: 4 },
            { label: "A Snickers", hint: "regular bar, 57 g", reveal: "35.1 g carbs", order: 2 }
          ]
        },
        {
          id: "gi3",
          play: false,
          topic: "Breakfast edition: which one spikes the most?",
          hook: "What's on the table before your first Teams call?",
          sortLabel: "highest GI",
          source: "Atkinson, Foster-Powell & Brand-Miller, International tables of glycemic index values (Diabetes Care, 2008), table of 62 common foods",
          year: "2008",
          cards: [
            { label: "Honey", hint: "a spoonful", reveal: "GI 61", order: 3 },
            { label: "Lentils", hint: "cooked", reveal: "GI 32", order: 5 },
            { label: "Cornflakes", hint: "a bowl", reveal: "GI 81", order: 1 },
            { label: "Orange juice", hint: "a glass", reveal: "GI 50", order: 4 },
            { label: "Brown rice", hint: "boiled", reveal: "GI 68", order: 2 }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      type: "classic",
      format: "Work life in Europe",
      icon: "💼",
      intro: "Home office, short weeks, long weeks: how does Europe work? European countries in Eurostat's labour force survey.",
      howTo: [
        "Type 3 countries in the Teams chat. Don't send yet.",
        "English or Dutch country names both work."
      ],
      scoring: "In the top 10 = 1 point, number 1 = 3 points, bomb = −1.",
      guesses: 3,
      lists: [
        {
          id: "wfh",
          topic: "Where in Europe do the most people usually work from home?",
          hook: "Share of everyone with a job (15 to 64) who usually works from home.",
          source: "Eurostat, Employed persons working from home (lfsa_ehomp): usually, 15–64, % of employment",
          year: "2025",
          dataDate: "Eurostat data for 2025",
          items: [
            { rank: 1, label: "Finland", sub: "20.5% usually work from home", alias: ["Suomi"] },
            { rank: 2, label: "Ireland", sub: "19.2%", alias: ["Ierland"] },
            { rank: 3, label: "Belgium", sub: "13.2%", alias: ["België", "Belgie"] },
            { rank: 4, label: "Germany", sub: "13.0%", alias: ["Duitsland"] },
            { rank: 5, label: "Malta", sub: "12.5%" },
            { rank: 6, label: "Sweden", sub: "12.4%", alias: ["Zweden"] },
            { rank: 7, label: "Estonia", sub: "11.6%", alias: ["Estland"] },
            { rank: 8, label: "Netherlands", sub: "11.3%", alias: ["Nederland", "Holland", "The Netherlands", "NL"] },
            { rank: 9, label: "Luxembourg", sub: "11.2%", alias: ["Luxemburg"] },
            { rank: 10, label: "France", sub: "11.1%", alias: ["Frankrijk"] }
          ],
          bomb: { rank: 11, label: "Austria", sub: "10.8%", alias: ["Oostenrijk"] },
          extra: { title: "And Lithuania?", big: "5.1%", text: "Lithuania is #23 of 34 countries. The EU average is 8.8%." }
        },
        {
          id: "shortweek",
          topic: "Where in Europe is the working week the shortest?",
          hook: "Average usual hours per week in the main job, full-time and part-time together.",
          source: "Eurostat, Average number of usual weekly hours of work in main job (lfsa_ewhun2): employed, 15–64, all jobs",
          year: "2025",
          dataDate: "Eurostat data for 2025",
          items: [
            { rank: 1, label: "Netherlands", sub: "31.5 hours a week", alias: ["Nederland", "Holland", "The Netherlands", "NL"] },
            { rank: 2, label: "Denmark", sub: "33.6 hours", alias: ["Denemarken"] },
            { rank: 3, place: "=3", label: "Norway", sub: "34.8 hours", alias: ["Noorwegen"] },
            { rank: 4, place: "=3", label: "Germany", sub: "34.8 hours", alias: ["Duitsland"] },
            { rank: 5, label: "Ireland", sub: "35.7 hours", alias: ["Ierland"] },
            { rank: 6, place: "=6", label: "Finland", sub: "35.8 hours", alias: ["Suomi"] },
            { rank: 7, place: "=6", label: "Austria", sub: "35.8 hours", alias: ["Oostenrijk"] },
            { rank: 8, label: "Switzerland", sub: "35.9 hours", alias: ["Zwitserland", "Swiss"] },
            { rank: 9, label: "Belgium", sub: "36.1 hours", alias: ["België", "Belgie"] },
            { rank: 10, label: "France", sub: "37.0 hours", alias: ["Frankrijk"] }
          ],
          bomb: { rank: 11, label: "Italy", sub: "37.2 hours", alias: ["Italië", "Italie"] },
          extra: { title: "And the longest?", big: "44.0", text: "Hours a week in Türkiye. Lithuania: 39.2 hours, the EU average 37.0." }
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      type: "sort",
      format: "Then and now",
      icon: "⏳",
      intro: "Dexcom's own history, mixed with things everyone remembers. Earliest first.",
      howTo: [
        "Put the 5 cards in order, earliest first.",
        "Type the 5 letters in order. Example: C A E B D"
      ],
      scoring: "1 point for every card in the right place.",
      lists: [
        {
          id: "timeline",
          topic: "Dexcom history: what happened first?",
          hook: "Our own timeline, with one famous gadget mixed in.",
          sortLabel: "earliest",
          source: "Wikipedia, Dexcom (company history) and iPhone (1st generation)",
          year: "2026",
          cards: [
            { label: "Dexcom G6 approved by the FDA", hint: "Dexcom", reveal: "2018", order: 5 },
            { label: "The first iPhone goes on sale", hint: "Apple", reveal: "June 2007", order: 4 },
            { label: "Dexcom is founded", hint: "Dexcom", reveal: "1999, San Diego", order: 1 },
            { label: "First Dexcom CGM approved (the STS)", hint: "Dexcom", reveal: "2006", order: 3 },
            { label: "Dexcom goes public on the Nasdaq", hint: "Dexcom", reveal: "2005", order: 2 }
          ]
        },
        {
          id: "timeline2",
          topic: "Dexcom vs the world: what came first?",
          hook: "Some of these are only weeks apart. Careful!",
          sortLabel: "earliest",
          source: "Wikipedia, Dexcom (company history), Apple Watch and ChatGPT",
          year: "2026",
          cards: [
            { label: "Dexcom G7 approved by the FDA", hint: "Dexcom", reveal: "December 2022", order: 5 },
            { label: "ChatGPT launches", hint: "OpenAI", reveal: "November 2022", order: 4 },
            { label: "Share approved: follow someone's glucose on your phone", hint: "Dexcom", reveal: "January 2015", order: 1 },
            { label: "The Apple Watch goes on sale", hint: "Apple", reveal: "April 2015", order: 2 },
            { label: "Dexcom joins the Nasdaq-100", hint: "Dexcom", reveal: "April 2020", order: 3 }
          ]
        },
        {
          id: "xmas",
          play: false,
          topic: "The most streamed Christmas songs on Spotify",
          hook: "The office party playlist. Most streams first.",
          sortLabel: "most streamed",
          source: "kworb.net, Spotify most streamed songs of all time (total streams)",
          year: "2026",
          dataDate: "Spotify streams as of 13 Nov 2026",
          cards: [
            { label: "It's the Most Wonderful Time of the Year", hint: "Andy Williams", reveal: "#8 of all Christmas songs, 1.21 billion streams", order: 4 },
            { label: "Snowman", hint: "Sia", reveal: "#4 of all Christmas songs, 1.54 billion streams", order: 2 },
            { label: "Underneath the Tree", hint: "Kelly Clarkson", reveal: "#10 of all Christmas songs, 1.04 billion streams", order: 5 },
            { label: "Last Christmas", hint: "Wham!", reveal: "#2 of all Christmas songs, 2.28 billion streams", order: 1 },
            { label: "Rockin' Around the Christmas Tree", hint: "Brenda Lee", reveal: "#6 of all Christmas songs, 1.44 billion streams", order: 3 }
          ]
        }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      type: "finale",
      format: "Finale: team top 8",
      icon: "👑",
      intro: "You all answered some questions before the meeting. Time to rank your colleagues.",
      howTo: [
        "Rank everyone, highest answer first.",
        "Type the first names in order, separated by commas."
      ],
      scoring: "1 point for every colleague in the right place.",
      source: "Your answers to the pre-meeting form",
      // Pick 1 to 3 of these in the game (press I). Highest number = place 1.
      questions: [
        { id: "commute", text: "How many minutes is your commute to the office (one way)?", unit: "min" },
        { id: "emails", text: "How many unread emails are in your inbox right now?", unit: "emails" },
        { id: "tabs", text: "How many browser tabs do you have open right now?", unit: "tabs" },
        { id: "meetings", text: "How many meetings are in your calendar this week?", unit: "meetings" },
        { id: "coffee", text: "How many cups of coffee and tea do you drink in a normal work week?", unit: "cups" },
        { id: "countries", text: "How many countries have you visited?", unit: "countries" },
        { id: "months", text: "How many months have you worked at Dexcom?", unit: "months" },
        { id: "photos", text: "How many photos are on your phone right now?", unit: "photos" },
        { id: "calls", text: "How many calls or Teams meetings did you have yesterday?", unit: "calls" },
        { id: "lunch", text: "How many minutes does your lunch break usually take?", unit: "min" },
        { id: "wfh", text: "How many days did you work from home last month?", unit: "days" },
        { id: "steps", text: "How many steps is it from your desk to the coffee machine?", unit: "steps" }
      ]
    }
  ]
};
