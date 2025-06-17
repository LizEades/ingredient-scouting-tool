import React, { useState } from "react";

const ingredientsData = [
  {
    name: "Sea Fennel Extract",
    benefit: "Hydration",
    source: "Marine",
    novelty: "Mainstream",
    links: [
      { label: "Passport Report", url: "https://rmit.lib.link/passport" },
      { label: "PubMed Abstract", url: "https://pubmed.ncbi.nlm.nih.gov/" }
    ]
  },
  {
    name: "Moringa Oil",
    benefit: "Oil Control",
    source: "Plant",
    novelty: "Emerging",
    links: [
      { label: "MarketLine Report", url: "https://rmit.lib.link/marketline" },
      { label: "ScienceDirect Study", url: "https://sciencedirect.com" }
    ]
  },
  {
    name: "Glyceryl Glucoside",
    benefit: "Barrier Support",
    source: "Biotech",
    novelty: "Saturated",
    links: [
      { label: "IBISWorld Snapshot", url: "https://rmit.lib.link/ibisworld" }
    ]
  }
];

function App() {
  const [benefit, setBenefit] = useState("");
  const [source, setSource] = useState("");

  const filteredIngredients = ingredientsData.filter((item) => {
    return (
      (benefit ? item.benefit === benefit : true) &&
      (source ? item.source === source : true)
    );
  });

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">🧪 Ingredient + Innovation Scouting Tool</h2>

      <div className="filters">
        <select onChange={(e) => setBenefit(e.target.value)}>
          <option value="">Filter by Benefit</option>
          <option value="Hydration">Hydration</option>
          <option value="Oil Control">Oil Control</option>
          <option value="Barrier Support">Barrier Support</option>
        </select>

        <select onChange={(e) => setSource(e.target.value)}>
          <option value="">Filter by Source</option>
          <option value="Marine">Marine</option>
          <option value="Plant">Plant</option>
          <option value="Biotech">Biotech</option>
        </select>
      </div>

      <div className="ingredient-cards">
        {filteredIngredients.map((ingredient, index) => (
          <div key={index} className="card">
            <h3>{ingredient.name}</h3>
            <p><strong>Benefit:</strong> {ingredient.benefit}</p>
            <p><strong>Source:</strong> {ingredient.source}</p>
            <p><strong>Trend Status:</strong> {ingredient.novelty}</p>
            <ul>
              {ingredient.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="trend-reports">
        <h3>🔎 Explore Public Trend Reports</h3>
        <ul>
          <li><a href="https://www.trendhunter.com/search?query=skincare" target="_blank">TrendHunter – Skincare Trends</a></li>
          <li><a href="https://www.cosmeticsdesign-asia.com/Hot-Topics" target="_blank">CosmeticsDesign Asia – Hot Topics</a></li>
          <li><a href="https://www.mintel.com/blog/beauty-market-news" target="_blank">Mintel Beauty Blog (Free)</a></li>
          <li><a href="https://beautymatter.com/category/ingredients" target="_blank">BeautyMatter – Ingredient News</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/?term=hydration+skincare" target="_blank">PubMed – Skincare Research</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
