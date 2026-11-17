# Sources

All lists were checked on **13–14 November 2026**, directly on the source. Nothing is made up.
Where a list changes over time, the date is shown on the board.

**Scoring:** an answer in the top 10 = 1 point, the answer at place 1 = 3 points, the bomb (place 11) = −1. Sort lists: 1 point per item in the right place. Change it in `data.js` under `points`.

**Not used, and why:**
- Working hours per country from the OECD: the OECD itself says those figures are unsuitable for comparing countries. (The Eurostat figures used below are harmonised for comparison.)
- The IDF's own age-adjusted prevalence: places 10 and 11 are tied (Sudan and Syria, both 19%). That's why the adults list uses the exact calculation below.
- Medtech companies by stock market value or R&D spending: no reliable full list.
- Glycemic index and carbs as a top 10: too many ties in the tables. They're used as sort lists, with 5 foods whose values are clearly apart.

---

## Round 1: Diabetes around the world (with medtech as list 4)

The IDF publishes counts per country. I calculated the percentages from two IDF tables of the same edition, and only included countries with **at least 1 million people in that age group** (this keeps out tiny islands whose figures are heavily rounded, such as Niue: 300 out of 1,200 adults).

### List 1: Highest share of adults with diabetes

- **Source:** IDF Diabetes Atlas, 11th edition, 2024 estimates: *People with diabetes (20–79 y)* https://diabetesatlas.org/data-by-indicator/diabetes-estimates-20-79-y/people-with-diabetes-in-1000s/ ÷ *Total adult population (20–79 y)* https://diabetesatlas.org/data-by-indicator/demographics/total-adult-population-20-79-y-in-1000s/
- **Check:** global 588.7 million ÷ 5,301.7 million = 11.1%, the IDF's headline "1 in 9".
- **Confidence:** High for the numbers. This is the crude share (not age-adjusted), so countries with many older people come out a bit higher than in the IDF's own comparison.

| Place | Country | Adults with diabetes | Adults (20–79) | Share |
|---|---|---|---|---|
| 1 | Kuwait | 908,500 | 3,203,000 | 28.36% |
| 2 | Pakistan | 34,532,400 | 130,417,400 | 26.48% |
| 3 | Saudi Arabia | 5,344,600 | 24,983,100 | 21.39% |
| 4 | Malaysia | 4,753,900 | 23,936,500 | 19.86% |
| 5 | Egypt | 13,214,500 | 66,602,500 | 19.84% |
| 6 | Qatar | 409,300 | 2,193,100 | 18.66% |
| 7 | Bahrain | 197,600 | 1,107,100 | 17.85% |
| 8 | Algeria | 4,761,800 | 28,219,300 | 16.87% |
| 9 | Tunisia | 1,392,900 | 8,391,400 | 16.60% |
| 10 | Dominican Republic | 1,203,700 | 7,255,500 | 16.59% |
| **11 (bomb)** | **United Arab Emirates** | 1,274,200 | 7,710,700 | 16.53% |
| 12 | Türkiye | 9,603,100 | 58,964,300 | 16.29% |
| 17 | United States | | | 15.70% |
| 53 | Lithuania | | | 10.63% |
| 91 | Belgium | | | 7.56% |
| 101 | Netherlands | | | 6.85% |

### List 2: Where type 1 is most common in children and teens

- **Source:** IDF Diabetes Atlas, 11th edition, 2024 estimates: *People with type 1 diabetes (0–19 y)* https://diabetesatlas.org/data-by-indicator/type-1-diabetes-estimates/people-with-type-1-diabetes-0-19-y/ ÷ *Population of children and adolescents (0–19 y)* https://diabetesatlas.org/data-by-indicator/demographics/population-of-children-and-adolescents-0-19-y/
- **Confidence:** High for the numbers. Lithuania is left out by the 1-million rule (fewer than 1 million people aged 0–19).

| Place | Country | Share of 0–19 with type 1 | 1 in … |
|---|---|---|---|
| 1 | Finland | 0.672% | 149 |
| 2 | Saudi Arabia | 0.442% | 226 |
| 3 | United Arab Emirates | 0.436% | 229 |
| 4 | Oman | 0.409% | 245 |
| 5 | Sweden | 0.384% | 260 |
| 6 | Kuwait | 0.347% | 288 |
| 7 | Norway | 0.344% | 291 |
| 8 | Canada | 0.338% | 296 |
| 9 | Libya | 0.336% | 298 |
| 10 | Tunisia | 0.331% | 302 |
| **11 (bomb)** | **Morocco** | 0.328% | 305 |
| 12 | Algeria | 0.315% | 318 |
| 31 | Belgium | 0.185% | about 540 |
| 32 | Netherlands | 0.184% | about 540 |

### List 3: Highest diabetes spending per person

- **Source:** IDF Diabetes Atlas, 11th edition, *Diabetes-related health expenditure per person, USD* (2024): https://diabetesatlas.org/data-by-indicator/diabetes-related-health-expenditure/diabetes-related-health-expenditure-per-person-usd/
- **Check:** global average $1,760.3 = the IDF global page. **Confidence:** High as IDF estimates. Germany and the Netherlands differ by $1.50.

| Place | Country | USD per person | | Place | Country | USD per person |
|---|---|---|---|---|---|---|
| 1 | Switzerland | 12,234 | | 7 | Ireland | 7,234 |
| 2 | United States | 10,497 | | 8 | Sweden | 7,081 |
| 3 | Norway | 10,227 | | 9 | Austria | 6,268 |
| 4 | Iceland | 8,055 | | 10 | Germany | 6,237 |
| 5 | Luxembourg | 8,026 | | **11 (bomb)** | **Netherlands** | 6,235 |
| 6 | Denmark | 7,718 | | 12 | Belgium | 5,689 |

### List 4: Biggest medical device companies

- **Source:** Medical Design & Outsourcing, *Medtech Big 100* (2026 edition, by annual revenue): https://www.medicaldesignandoutsourcing.com/2026-medtech-big-100-worlds-largest-medical-device-companies/
- **Confidence:** High. Some companies count only their device segment (Abbott, BD).

| Place | Company | Revenue | | Place | Company | Revenue |
|---|---|---|---|---|---|---|
| 1 | Medtronic | $36.4 bn | | 7 | GE HealthCare | $20.6 bn |
| 2 | Johnson & Johnson MedTech | $33.8 bn | | 8 | Royal Philips | $20.2 bn |
| 3 | Medline Industries | $28.4 bn | | 9 | Boston Scientific | $20.1 bn |
| 4 | Siemens Healthineers | $26.4 bn | | 10 | BD | $18.5 bn |
| 5 | Stryker | $25.1 bn | | **11 (bomb)** | **Henry Schein** | $13.2 bn |
| 6 | Abbott (devices) | $21.4 bn | | 27 | **Dexcom** | $4.66 bn |

---

## Round 2: Spike or not? (sort)

### Glycemic index lists (gi1, gi2, gi3)

- **Source:** Atkinson FS, Foster-Powell K, Brand-Miller JC. *International tables of glycemic index and glycemic load values: 2008.* Diabetes Care 2008;31(12):2281–2283, table "The average GI of 62 common foods": https://pmc.ncbi.nlm.nih.gov/articles/PMC2584181/ (the table Harvard Health's "Glycemic index for 60+ foods" is based on).
- **Confidence:** High; values are averages with a margin, so only foods that are clearly apart were picked.

| List | Foods (GI, glucose = 100) | Right order |
|---|---|---|
| gi1 | Watermelon 76, White rice 73, Popcorn 65, Banana 51, Chocolate 40 | C, E, D, A, B |
| gi2 | Potato (boiled) 78, Whole wheat bread 74, Table sugar 65, Soft drink 59, Ice cream 51 | B, D, E, C, A |
| gi3 (off) | Cornflakes 81, Brown rice 68, Honey 61, Orange juice 50, Lentils 32 | C, E, A, D, B |

### Carb lists (carbs1, carbs2)

- **Source:** USDA FoodData Central, SR Legacy (https://fdc.nal.usda.gov/): carbohydrate per 100 g × the USDA's own portion weight.
- **Confidence:** High. These are reference values; real portions and brands vary.

| List | Portion (USDA food, portion weight) | Carbs | Order |
|---|---|---|---|
| carbs1 | A bowl of white rice (long-grain, cooked, 1 cup = 158 g) | 44.6 g | 1 (C) |
| | A can of cola (regular, 12 fl oz = 370 g) | 38.5 g | 2 (A) |
| | A banana (raw, medium = 118 g) | 26.9 g | 3 (E) |
| | A glass of milk (whole, 1 cup = 244 g) | 11.7 g | 4 (D) |
| | A slice of gouda (1 oz = 28 g) | 0.6 g | 5 (B) |
| carbs2 (off) | A bagel (plain, medium = 105 g) | 55.0 g | 1 (C) |
| | A Snickers (regular bar = 57 g) | 35.1 g | 2 (E) |
| | An apple (golden delicious, medium = 169 g) | 23.0 g | 3 (A) |
| | A can of beer (regular, 1 can = 356 g) | 12.6 g | 4 (D) |
| | A handful of almonds (1 oz = 23 almonds, 28 g) | 6.1 g | 5 (B) |

---

## Round 3: Work life in Europe

European countries in Eurostat's labour force survey (EU countries plus Iceland, Norway, Switzerland and candidate countries). EU and euro-area averages are not counted as places.

### List 1: Most people usually working from home

- **Source:** Eurostat, *Employed persons working from home* (lfsa_ehomp): usually, all employed, 15–64, % of employment, 2025 (updated 30 October 2026). https://ec.europa.eu/eurostat/databrowser/view/lfsa_ehomp/default/table
- **Confidence:** High. France's figure is flagged by Eurostat as "definition differs".

| Place | Country | % | | Place | Country | % |
|---|---|---|---|---|---|---|
| 1 | Finland | 20.5 | | 7 | Estonia | 11.6 |
| 2 | Ireland | 19.2 | | 8 | Netherlands | 11.3 |
| 3 | Belgium | 13.2 | | 9 | Luxembourg | 11.2 |
| 4 | Germany | 13.0 | | 10 | France | 11.1 |
| 5 | Malta | 12.5 | | **11 (bomb)** | **Austria** | 10.8 |
| 6 | Sweden | 12.4 | | 23 | Lithuania | 5.1 |

EU average: 8.8%.

### List 2: Shortest working week

- **Source:** Eurostat, *Average number of usual weekly hours of work in main job* (lfsa_ewhun2): all employed, all activities, full-time and part-time together, 15–64, 2025. https://ec.europa.eu/eurostat/databrowser/view/lfsa_ewhun2/default/table
- **Confidence:** High. Ties (same value to one decimal) are shown as "=3" and "=6"; they don't change anyone's points. France and Spain are flagged "definition differs".

| Place | Country | Hours | | Place | Country | Hours |
|---|---|---|---|---|---|---|
| 1 | Netherlands | 31.5 | | =6 | Austria | 35.8 |
| 2 | Denmark | 33.6 | | 8 | Switzerland | 35.9 |
| =3 | Norway | 34.8 | | 9 | Belgium | 36.1 |
| =3 | Germany | 34.8 | | 10 | France | 37.0 |
| 5 | Ireland | 35.7 | | **11 (bomb)** | **Italy** | 37.2 |
| =6 | Finland | 35.8 | | | Lithuania | 39.2 |

Longest: Türkiye 44.0 hours. EU average 37.0.

---

## Round 4: Then and now (sort)

### Dexcom history (timeline)

- **Source:** Wikipedia, *Dexcom*: https://en.wikipedia.org/wiki/Dexcom (founded 1999; public 2005; STS approved 2006; G6 approved 2018) and *iPhone (1st generation)* (on sale June 2007).
- **Right order:** C (founded 1999), E (Nasdaq 2005), D (STS 2006), B (iPhone 2007), A (G6 2018).

### Dexcom vs the world (timeline2)

- **Source:** Wikipedia, *Dexcom* (Share approved January 2015; joins the Nasdaq-100 on 20 April 2020; G7 approved December 2022), *Apple Watch* (on sale April 2015) and *ChatGPT* (launched November 2022).
- **Right order:** C (Share, Jan 2015), D (Apple Watch, Apr 2015), E (Nasdaq-100, Apr 2020), B (ChatGPT, Nov 2022), A (G7, Dec 2022).

### Most streamed Christmas songs (xmas, off by default)

- **Source:** kworb.net, Spotify most streamed songs of all time, 13 Nov 2026: https://kworb.net/spotify/songs.html
- Wham! Last Christmas 2.28 bn (#2), Sia Snowman 1.54 bn (#4), Brenda Lee Rockin' Around the Christmas Tree 1.44 bn (#6), Andy Williams It's the Most Wonderful Time of the Year 1.21 bn (#8), Kelly Clarkson Underneath the Tree 1.04 bn (#10). **Right order:** D, B, E, A, C.
