// ============================================================
// Belgian Beer Recommender — Data & Scoring
// ============================================================

// === Beer Database ===

const BEERS = [
  {
    name: "Westmalle Tripel",
    brewery: "Brouwerij der Trappisten van Westmalle",
    abv: 9.5,
    style: "Tripel",
    description:
      "A golden Trappist ale with a brilliant clarity and dense white head. Complex fruity esters mingle with a firm hop bitterness, finishing dry and warming. Widely regarded as the benchmark for the tripel style.",
    funFact:
      "Westmalle Tripel essentially defined the modern tripel style when it was first brewed in 1934, and the monks still use the same yeast strain today.",
    profile: { bitter: 3, sweet: 2, fruity: 2, strong: 4, complexity: 4 },
  },
  {
    name: "Chimay Blue",
    brewery: "Bières de Chimay",
    abv: 9.0,
    style: "Belgian Dark Strong Ale",
    description:
      "A deep copper Trappist ale with aromas of caramel, dark fruit, and a hint of chocolate. The palate is rich and full-bodied with dried fig and raisin notes that deepen with age. One of the most widely available Trappist beers in the world.",
    funFact:
      "Chimay Blue is also sold as 'Grande Réserve' in 750 ml corked bottles and can be aged for several years, developing port-like complexity.",
    profile: { bitter: 2, sweet: 3, fruity: 2, strong: 4, complexity: 5 },
  },
  {
    name: "Orval",
    brewery: "Brasserie d'Orval",
    abv: 6.2,
    style: "Belgian Pale Ale",
    description:
      "A unique Trappist ale that is dry-hopped and refermented with Brettanomyces, giving it a distinctive funky, leathery character. Pours a hazy amber-orange with a rocky white head. The flavour evolves dramatically as the bottle ages.",
    funFact:
      "Orval is the only Trappist brewery that uses Brettanomyces in its main beer. A fresh bottle tastes almost completely different from one aged six months.",
    profile: { bitter: 4, sweet: 1, fruity: 2, strong: 3, complexity: 5 },
  },
  {
    name: "Rochefort 10",
    brewery: "Brasserie de Rochefort",
    abv: 11.3,
    style: "Belgian Quadrupel",
    description:
      "A dark mahogany Trappist ale of immense depth, offering waves of dark chocolate, toffee, dried plum, and fig. The mouthfeel is velvety and full, with a warming alcohol presence that is remarkably well-integrated for its strength.",
    funFact:
      "The monks at Rochefort use water drawn from a well inside the abbey walls, and production has been deliberately kept small — they brew only four days per week.",
    profile: { bitter: 2, sweet: 4, fruity: 3, strong: 5, complexity: 5 },
  },
  {
    name: "Westvleteren 12",
    brewery: "Brouwerij Westvleteren (Sint-Sixtusabdij)",
    abv: 10.2,
    style: "Belgian Quadrupel",
    description:
      "Often called the best beer in the world, this deep brown Trappist quad presents rich layers of caramel, dark fruit, brown sugar, and subtle spice. The finish is long and warming, with a smoothness that belies its high alcohol content.",
    funFact:
      "Westvleteren 12 can only be purchased by calling a 'beer phone' to make a reservation at the abbey, and buyers must agree not to resell it.",
    profile: { bitter: 2, sweet: 4, fruity: 3, strong: 5, complexity: 5 },
  },
  {
    name: "Duvel",
    brewery: "Brouwerij Duvel Moortgat",
    abv: 8.5,
    style: "Belgian Strong Golden Ale",
    description:
      "A pale golden ale with a towering white head and effervescent carbonation. Deceptively light in body for its strength, it delivers crisp pear and citrus notes with a dry, peppery finish. The iconic tulip glass was specifically designed for this beer.",
    funFact:
      "The name 'Duvel' means 'Devil' in Flemish dialect — a name given by a local shoemaker who tasted the beer and declared, 'This is a real devil!'",
    profile: { bitter: 3, sweet: 1, fruity: 1, strong: 4, complexity: 3 },
  },
  {
    name: "Delirium Tremens",
    brewery: "Brouwerij Huyghe",
    abv: 8.5,
    style: "Belgian Strong Golden Ale",
    description:
      "A pale straw-coloured ale with a spicy, slightly fruity nose and a smooth, malty body. It has a warming finish with hints of citrus and gentle bitterness. Instantly recognisable by its iconic pink-elephant-adorned ceramic bottle.",
    funFact:
      "Delirium Tremens was named 'Best Beer in the World' at the World Beer Championships in 2008, and its pink elephant logo has become one of the most recognised beer symbols globally.",
    profile: { bitter: 3, sweet: 2, fruity: 2, strong: 4, complexity: 3 },
  },
  {
    name: "Tripel Karmeliet",
    brewery: "Brouwerij Bosteels",
    abv: 8.4,
    style: "Tripel",
    description:
      "A refined golden tripel brewed with wheat, oats, and barley, giving it a creamy texture and complex grain character. Notes of vanilla, banana, and citrus rise above a restrained sweetness. Beautifully balanced and supremely drinkable.",
    funFact:
      "Tripel Karmeliet's recipe is said to be inspired by a 1679 grain recipe from the Carmelite convent in Dendermonde, making it one of the few Belgian beers brewed with three grains.",
    profile: { bitter: 2, sweet: 3, fruity: 2, strong: 4, complexity: 4 },
  },
  {
    name: "La Chouffe",
    brewery: "Brasserie d'Achouffe",
    abv: 8.0,
    style: "Belgian Strong Golden Ale",
    description:
      "A hazy golden ale with a distinctive spicy hop character and notes of coriander and fresh citrus peel. Light and effervescent on the palate with a dry, gently bitter finish. The label features a red-capped gnome — the mascot of the Achouffe village brewery.",
    funFact:
      "Brasserie d'Achouffe was founded in 1982 in a small Ardennes village with a population of just a few hundred people, and the gnome mascot was inspired by local folklore.",
    profile: { bitter: 2, sweet: 2, fruity: 3, strong: 4, complexity: 3 },
  },
  {
    name: "Leffe Blonde",
    brewery: "Abbaye de Leffe (brewed by AB InBev)",
    abv: 6.6,
    style: "Belgian Blonde Ale",
    description:
      "A smooth, approachable abbey blonde with soft malt sweetness, hints of vanilla and clove, and a mild hop finish. Its gentle character makes it one of Belgium's most popular gateway beers. Pours a clear golden colour with a lasting white head.",
    funFact:
      "Leffe has been associated with the Premonstratensian Abbey of Leffe in Dinant since 1240, though today it is brewed industrially by AB InBev under licence.",
    profile: { bitter: 2, sweet: 3, fruity: 1, strong: 3, complexity: 2 },
  },
  {
    name: "Cantillon Gueuze",
    brewery: "Brasserie Cantillon",
    abv: 5.0,
    style: "Gueuze",
    description:
      "A bone-dry, intensely tart blend of young and old lambics, spontaneously fermented in the open Brussels air. Bright gold with a thin white head, it delivers piercing acidity, lemon zest, and a long, bracingly sour finish. A benchmark of the gueuze style.",
    funFact:
      "Cantillon is one of the last remaining traditional lambic breweries in Brussels and uses a coolship — an open vessel that exposes hot wort to wild yeasts drifting through the night air.",
    profile: { bitter: 3, sweet: 0, fruity: 3, strong: 2, complexity: 5 },
  },
  {
    name: "Lindemans Kriek",
    brewery: "Brouwerij Lindemans",
    abv: 3.5,
    style: "Fruit Lambic",
    description:
      "A ruby-red fruit lambic bursting with sweet cherry flavour and a candy-like aroma. Light-bodied and gently carbonated, it drinks almost like sparkling juice. A popular introduction to the world of lambic beers, though purists prefer unsweetened versions.",
    funFact:
      "Lindemans has been a family-run brewery in Vlezenbeek since 1822 — seven generations of the same family have brewed lambics on the farm.",
    profile: { bitter: 0, sweet: 5, fruity: 5, strong: 1, complexity: 2 },
  },
  {
    name: "Rodenbach Grand Cru",
    brewery: "Brouwerij Rodenbach",
    abv: 6.0,
    style: "Flanders Red Ale",
    description:
      "A deep reddish-brown sour ale aged for two years in massive oak foeders. It offers a complex interplay of cherry, balsamic vinegar, and oak tannins, with a dry, wine-like finish. Often described as the 'Burgundy of Belgium'.",
    funFact:
      "Rodenbach's cellar houses nearly 300 oak foeders, some over 150 years old and holding up to 65,000 litres each — the largest collection of wine-sized oak vessels used for beer in the world.",
    profile: { bitter: 2, sweet: 2, fruity: 4, strong: 3, complexity: 5 },
  },
  {
    name: "3 Fonteinen Oude Geuze",
    brewery: "Brouwerij 3 Fonteinen",
    abv: 6.0,
    style: "Oude Geuze",
    description:
      "A masterful blend of one-, two-, and three-year-old lambics that is intensely tart yet remarkably nuanced. Aromas of green apple, hay, and barnyard funk give way to a bone-dry, citrusy palate with a lingering mineral finish.",
    funFact:
      "In 2009 a thermostat failure nearly destroyed 3 Fonteinen's entire stock. Owner Armand Debelder salvaged what he could and distilled the rest into a spirit called 'Armand'Spirit', saving the brewery from bankruptcy.",
    profile: { bitter: 3, sweet: 0, fruity: 3, strong: 3, complexity: 5 },
  },
  {
    name: "Hoegaarden",
    brewery: "Brouwerij van Hoegaarden (AB InBev)",
    abv: 4.9,
    style: "Witbier",
    description:
      "A hazy, pale yellow wheat beer spiced with coriander and Curaçao orange peel. Light, refreshing, and slightly tart, with a pillowy mouthfeel and a clean, citrusy finish. The beer that single-handedly revived the Belgian witbier style.",
    funFact:
      "Pierre Celis revived the extinct Hoegaarden witbier style in 1966 using a recipe from the last local brewer. After a fire destroyed his brewery, he sold it and moved to Texas to start another.",
    profile: { bitter: 1, sweet: 2, fruity: 3, strong: 1, complexity: 2 },
  },
  {
    name: "Blanche de Bruxelles",
    brewery: "Brasserie Lefebvre",
    abv: 4.5,
    style: "Witbier",
    description:
      "A silky, unfiltered wheat beer with a gentle bouquet of citrus zest, coriander, and a hint of chamomile. Soft carbonation and a slightly creamy texture make it exceptionally easy-drinking. A quintessential Belgian white beer.",
    funFact:
      "Brasserie Lefebvre, founded in 1876, is still family-owned after more than seven generations and produces over 40 different beers from a single site in Quenast.",
    profile: { bitter: 1, sweet: 2, fruity: 3, strong: 2, complexity: 2 },
  },
  {
    name: "Saison Dupont",
    brewery: "Brasserie Dupont",
    abv: 6.5,
    style: "Saison",
    description:
      "The definitive farmhouse ale: hazy gold with a dense white head and explosive carbonation. Peppery, earthy, and citrusy, with a bone-dry finish that practically demands another sip. Regarded by many brewers worldwide as the saison to measure all others against.",
    funFact:
      "Brasserie Dupont nearly closed in the 1990s because the local market preferred lagers, but international craft beer enthusiasts discovered Saison Dupont and turned it into a global icon.",
    profile: { bitter: 3, sweet: 1, fruity: 2, strong: 3, complexity: 4 },
  },
  {
    name: "Gulden Draak",
    brewery: "Brouwerij Van Steenberge",
    abv: 10.5,
    style: "Belgian Dark Strong Ale",
    description:
      "A dark, garnet-hued strong ale with a creamy tan head and rich aromas of toasted malt, dark fruit, and caramel. The palate is full and warming with notes of chocolate, raisin, and a slightly vinous character. Comes in a distinctive white bottle.",
    funFact:
      "The name 'Gulden Draak' (Golden Dragon) refers to the gilded dragon statue atop the belfry of Ghent, placed there in 1377 after it was taken from the prow of a Scandinavian ship.",
    profile: { bitter: 3, sweet: 3, fruity: 2, strong: 5, complexity: 4 },
  },
  {
    name: "St. Bernardus Abt 12",
    brewery: "Brouwerij St. Bernardus",
    abv: 10.0,
    style: "Belgian Quadrupel",
    description:
      "A dark chestnut quad with an intoxicating nose of ripe banana, dark caramel, and plum pudding. The body is lush and velvety with flavours of toffee, dried fruit, and subtle spice, finishing long and warming. Often ranked alongside the greatest Trappist ales.",
    funFact:
      "St. Bernardus originally brewed Westvleteren's beers under licence from 1946 to 1992, using the same yeast strain. When the licence ended, they continued brewing under their own name with a remarkably similar recipe.",
    profile: { bitter: 2, sweet: 4, fruity: 3, strong: 5, complexity: 5 },
  },
  {
    name: "Bush Ambrée",
    brewery: "Brasserie Dubuisson",
    abv: 12.0,
    style: "Belgian Strong Ale",
    description:
      "An amber-copper powerhouse and Belgium's strongest mainstream beer. Intense aromas of caramel, honey, and overripe fruit give way to a sweet, malty palate with a warming, almost brandy-like finish. Deceptively smooth for 12% ABV.",
    funFact:
      "Bush Ambrée, first brewed in 1933, was originally called 'Bush Beer' in English, but was renamed in the US market to avoid confusion with Anheuser-Busch. Brasserie Dubuisson is the oldest brewery in Wallonia, founded in 1769.",
    profile: { bitter: 2, sweet: 3, fruity: 2, strong: 5, complexity: 3 },
  },
];

// === Scoring Maps ===
// Each entry corresponds to a quiz question.
// Each sub-array contains the profile adjustments for that question's answer options.

const SCORING = [
  // Q1: What's your mood right now?
  [
    { bitter: 1, sweet: 2, fruity: 2, strong: 1, complexity: 2 }, // Relaxed & chill
    { bitter: 3, sweet: 1, fruity: 2, strong: 3, complexity: 4 }, // Adventurous
    { bitter: 1, sweet: 3, fruity: 3, strong: 4, complexity: 3 }, // Celebrating
    { bitter: 1, sweet: 4, fruity: 2, strong: 2, complexity: 2 }, // Need comfort
  ],
  // Q2: How do you feel about bitterness?
  [
    { bitter: 5, sweet: 0, fruity: 1, strong: 3, complexity: 4 }, // Love it
    { bitter: 3, sweet: 2, fruity: 2, strong: 2, complexity: 3 }, // It's okay
    { bitter: 1, sweet: 3, fruity: 3, strong: 2, complexity: 2 }, // Prefer mild
    { bitter: 0, sweet: 4, fruity: 3, strong: 1, complexity: 1 }, // Not for me
  ],
  // Q3: Pick a dessert
  [
    { bitter: 3, sweet: 2, fruity: 1, strong: 3, complexity: 4 }, // Dark chocolate
    { bitter: 1, sweet: 2, fruity: 5, strong: 1, complexity: 3 }, // Fruit tart
    { bitter: 1, sweet: 5, fruity: 2, strong: 2, complexity: 2 }, // Caramel pudding
    { bitter: 4, sweet: 0, fruity: 0, strong: 3, complexity: 3 }, // Cheese board / savory
  ],
  // Q4: How strong do you like it?
  [
    { bitter: 1, sweet: 2, fruity: 3, strong: 1, complexity: 1 }, // Light & easy
    { bitter: 2, sweet: 2, fruity: 2, strong: 3, complexity: 3 }, // Medium & balanced
    { bitter: 3, sweet: 2, fruity: 1, strong: 4, complexity: 4 }, // Strong & bold
    { bitter: 3, sweet: 3, fruity: 1, strong: 5, complexity: 5 }, // Knock me out
  ],
  // Q5: Which flavour world appeals to you?
  [
    { bitter: 3, sweet: 1, fruity: 1, strong: 3, complexity: 5 }, // Spicy & herbal
    { bitter: 1, sweet: 2, fruity: 5, strong: 1, complexity: 3 }, // Fruity & citrusy
    { bitter: 2, sweet: 4, fruity: 1, strong: 3, complexity: 3 }, // Malty & toasty
    { bitter: 3, sweet: 0, fruity: 3, strong: 2, complexity: 5 }, // Sour & funky
  ],
];

// === Quiz Logic ===

document.addEventListener("DOMContentLoaded", () => {
  let currentStep = 1;
  const userAnswers = [];

  // DOM references
  const ageGate = document.getElementById("age-gate");
  const ageYes = document.getElementById("age-yes");
  const ageNo = document.getElementById("age-no");
  const quiz = document.getElementById("quiz");
  const results = document.getElementById("results");
  const underage = document.getElementById("underage");
  const beerCards = document.getElementById("beer-cards");
  const restartBtn = document.getElementById("restart");
  const progressBar = document.querySelector(".progress-bar");
  const progressFill = document.querySelector(".progress-fill");
  const quizSteps = document.querySelectorAll(".quiz-step");
  const totalSteps = quizSteps.length;
  progressBar.setAttribute("aria-valuemax", totalSteps);

  // --- Age Gate ---
  ageYes.addEventListener("click", () => {
    ageGate.classList.add("hidden");
    quiz.classList.remove("hidden");
    showStep(1);
    updateProgress();
  });

  ageNo.addEventListener("click", () => {
    ageGate.classList.add("hidden");
    underage.classList.remove("hidden");
  });

  // --- Quiz Navigation (event delegation) ---
  quiz.addEventListener("click", (e) => {
    const btn = e.target.closest(".answer-btn");
    if (!btn) return;

    userAnswers.push(parseInt(btn.dataset.value));

    if (currentStep < totalSteps) {
      hideStep(currentStep);
      currentStep++;
      showStep(currentStep);
      updateProgress();
    } else {
      quiz.classList.add("hidden");
      const recommendations = getRecommendations();
      showResults(recommendations);
      results.classList.remove("hidden");
    }
  });

  // --- Restart ---
  restartBtn.addEventListener("click", () => {
    results.classList.add("hidden");
    currentStep = 1;
    userAnswers.length = 0;
    quizSteps.forEach((step) => step.classList.remove("active"));
    showStep(1);
    updateProgress();
    quiz.classList.remove("hidden");
  });

  // --- Helpers ---
  function showStep(n) {
    const step = document.querySelector(`.quiz-step[data-step="${n}"]`);
    if (step) step.classList.add("active");
  }

  function hideStep(n) {
    const step = document.querySelector(`.quiz-step[data-step="${n}"]`);
    if (step) step.classList.remove("active");
  }

  function updateProgress() {
    progressFill.style.width = (currentStep / totalSteps) * 100 + "%";
    progressBar.setAttribute("aria-valuenow", currentStep);
  }

  // --- Scoring Algorithm ---
  function getRecommendations() {
    // Build user profile from answers
    const profile = { bitter: 0, sweet: 0, fruity: 0, strong: 0, complexity: 0 };
    userAnswers.forEach((answerIndex, questionIndex) => {
      const scores = SCORING[questionIndex][answerIndex];
      for (const key in scores) profile[key] += scores[key];
    });

    // Normalize to 0-5 range
    const maxVal = Math.max(...Object.values(profile));
    if (maxVal > 0) {
      for (const key in profile) profile[key] = (profile[key] / maxVal) * 5;
    }

    // Euclidean distance to each beer
    const dimensions = ["bitter", "sweet", "fruity", "strong", "complexity"];
    const scored = BEERS.map((beer) => {
      const dist = Math.sqrt(
        dimensions.reduce((sum, dim) => {
          const diff = profile[dim] - beer.profile[dim];
          return sum + diff * diff;
        }, 0)
      );
      return { beer, dist };
    });

    scored.sort((a, b) => a.dist - b.dist);

    // Pick top 3 with style variety
    const picks = [];
    const usedStyles = new Set();
    for (const entry of scored) {
      if (picks.length >= 3) break;
      if (usedStyles.has(entry.beer.style)) continue;
      usedStyles.add(entry.beer.style);
      picks.push(entry.beer);
    }

    return picks;
  }

  // --- Results Rendering ---
  function showResults(beers) {
    beerCards.innerHTML = "";
    beers.forEach((beer) => {
      const card = document.createElement("div");
      card.className = "beer-card";
      card.innerHTML = `
        <h3>🍺 ${beer.name}</h3>
        <div class="beer-meta">${beer.style} · ${beer.abv}% · ${beer.brewery}</div>
        <p class="beer-description">${beer.description}</p>
        <div class="beer-funfact">💡 ${beer.funFact}</div>
      `;
      beerCards.appendChild(card);
    });
  }
});
