import React, { useState } from "react";

const ingredientsData = [
  {
    name: "Sea Fennel Extract",
    benefit: "Hydration",
    source: "Marine Algae",
    novelty: "Mainstream",
    links: [
      { label: "Passport Report", url: "https://rmit.edu.au/library" },
      { label: "PubMed Abstract", url: "https://pubmed.ncbi.nlm.nih.gov/" }
    ]
  },
  {
    name: "Moringa Oil",
    benefit: "Oil Control",
    source: "Plant-Based",
    novelty: "Emerging",
    links: [
      { label: "MarketLine Report", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" },
      { label: "ScienceDirect Study", url: "https://sciencedirect.com" }
    ]
  },
  {
    name: "Glyceryl Glucoside",
    benefit: "Barrier Support",
    source: "Biotech-Derived",
    novelty: "Saturated",
    links: [
      { label: "IBISWorld Snapshot", url: "https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" }
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
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold">Ingredient + Innovation Scouting Tool</h2>

      <div className="flex flex-wrap gap-4">
        <select onChange={(e) => setBenefit(e.target.value)} className="p-2 border rounded">
          <option value="">Filter by Benefit</option>
          <option value="Hydration">Hydration</option>
          <option value="Oil Control">Oil Control</option>
          <option value="Barrier Support">Barrier Support</option>
          <option value="Soothing">Soothing</option>
          <option value="Brightening">Brightening</option>
          <option value="Anti-aging">Anti-aging</option>
          <option value="Antioxidant Protection">Antioxidant Protection</option>
        </select>

        <select onChange={(e) => setSource(e.target.value)} className="p-2 border rounded">
          <option value="">Filter by Source</option>
          <option value="Marine Algae">Marine Algae</option>
          <option value="Plant-Based">Plant-Based</option>
          <option value="Biotech-Derived">Biotech-Derived</option>
          <option value="Fermentation">Fermentation</option>
          <option value="Mineral-Based">Mineral-Based</option>
          <option value="Fungal Extract">Fungal Extract</option>
          <option value="Upcycled Ingredient">Upcycled Ingredient</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredIngredients.map((ingredient, index) => (
          <div key={index} className="card p-4 border rounded bg-white">
            <h3 className="text-lg font-semibold mb-2">{ingredient.name}</h3>
            <p><strong>Benefit:</strong> {ingredient.benefit}</p>
            <p><strong>Source:</strong> {ingredient.source}</p>
            <p><strong>Trend Status:</strong> {ingredient.novelty}</p>
            <ul className="mt-2 list-disc list-inside text-blue-700">
              {ingredient.links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gray-100 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">🔎 Explore Public Trend Reports</h3>
        <ul className="list-disc pl-6 space-y-2 text-blue-700">
          <li><a href="https://www.trendhunter.com/search?query=skincare" target="_blank">TrendHunter – Skincare Trends</a></li>
          <li><a href="https://www.cosmeticsdesign-asia.com/Hot-Topics" target="_blank">CosmeticsDesign Asia – Hot Topics</a></li>
          <li><a href="https://www.mintel.com/blog/beauty-market-news" target="_blank">Mintel Beauty Blog (Free)</a></li>
          <li><a href="https://beautymatter.com/category/ingredients" target="_blank">BeautyMatter – Ingredient News</a></li>
          <li><a href="https://pubmed.ncbi.nlm.nih.gov/?term=hydration+skincare" target="_blank">PubMed – Skincare Research</a></li>
          <li><a href="https://www.rmit.edu.au/library" target="_blank">RMIT Library Homepage</a></li>
          <li><a href="https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921449710901341" target="_blank">Passport (RMIT Access)</a></li>
          <li><a href="https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921476111401341" target="_blank">MarketLine (RMIT Access)</a></li>
          <li><a href="https://rmit.primo.exlibrisgroup.com/permalink/61RMIT_INST/1b6r78u/alma9921596911501341" target="_blank">IBISWorld (RMIT Access)</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
