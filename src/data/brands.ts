export interface Brand {
  name: string;
  category: string;
  country: string;
  est: string;
  desc: string;
  products?: Product[];
}

export interface Product {
  name: string;
  type: string;
  volume?: string;
  abv?: string;
}

export const brands: Brand[] = [
  {
    name: "De Bernard", category: "Prosecco", country: "Italy", est: "1948",
    desc: "Italian sparkling wine producer known for premium Prosecco.",
    products: [
      { name: "De Bernard Prosecco DOC Brut", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "De Bernard Prosecco DOC Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "De Bernard Prosecco DOC Rosé", type: "Prosecco Rosé", volume: "0.75L", abv: "11.5%" },
    ],
  },
  {
    name: "Tenuta Angoris", category: "White Wine", country: "Italy", est: "1648",
    desc: "Historic Italian winery with centuries of winemaking tradition in Friuli Venezia Giulia.",
    products: [
      { name: "Angoris Pinot Grigio DOC Friuli", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Angoris Sauvignon Blanc DOC", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Angoris Ribolla Gialla", type: "White Wine", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Rotari", category: "Sparkling Wine", country: "Italy", est: "1977",
    desc: "Italian Trento DOC sparkling wine producer using the traditional method.",
    products: [
      { name: "Rotari Brut Trento DOC", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Rotari Rosé Trento DOC", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Rotari Flavio Riserva", type: "Sparkling Wine", volume: "0.75L", abv: "13%" },
    ],
  },
  {
    name: "Forte Alto", category: "Sparkling Wine", country: "Italy", est: "1999",
    desc: "Modern Italian sparkling wines from Trentino.",
    products: [
      { name: "Forte Alto Prosecco DOC", type: "Sparkling Wine", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859",
    desc: "Prestigious French Champagne house with organic vineyards and a woman-led vision.",
    products: [
      { name: "Duval-Leroy Brut Réserve", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Duval-Leroy Rosé Prestige", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Duval-Leroy Femme de Champagne", type: "Champagne", volume: "0.75L", abv: "12.5%" },
      { name: "Duval-Leroy Blanc de Blancs", type: "Champagne", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Sutto", category: "Prosecco", country: "Italy", est: "1933",
    desc: "Family-run Prosecco and wine estate from Veneto.",
    products: [
      { name: "Sutto Prosecco DOC Treviso Brut", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "Sutto Prosecco Superiore DOCG", type: "Prosecco", volume: "0.75L", abv: "11.5%" },
    ],
  },
  {
    name: "Piccini 1882", category: "Red Wine", country: "Italy", est: "1882",
    desc: "Tuscan wine house known for Chianti and premium Italian reds.",
    products: [
      { name: "Piccini Chianti DOCG", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Piccini Chianti Riserva", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Piccini Brunello di Montalcino", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Piccini Memoro Rosso", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Togni", category: "Red Wine", country: "Italy", est: "1954",
    desc: "Italian winery crafting distinctive wines since 1954.",
    products: [
      { name: "Togni Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Black Tears", category: "Rum", country: "Cuba", est: "",
    desc: "Dry Spiced Rum — a unique Cuban rum with distinctive character and bold flavor profile.",
    products: [
      { name: "Black Tears Dry Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Dad Joke", category: "Rum", country: "USA", est: "",
    desc: "Spiced rum brand with a playful personality and smooth taste.",
    products: [
      { name: "Dad Joke Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "35%" },
    ],
  },
  {
    name: "Laurent Lequart", category: "Champagne", country: "France", est: "",
    desc: "Cœur de Cuvée Extra Brut — artisan grower Champagne from Festigny.",
    products: [
      { name: "Laurent Lequart Cœur de Cuvée Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Dassai", category: "Sake", country: "Japan", est: "",
    desc: "World-renowned premium Japanese sake, crafted from Yamada Nishiki rice.",
    products: [
      { name: "Dassai 45 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 23 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 39 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
    ],
  },
  {
    name: "Aivazovsky", category: "Brandy", country: "Armenia", est: "",
    desc: "Premium Armenian brandy with rich heritage and exceptional aging.",
    products: [
      { name: "Aivazovsky 5 Year Brandy", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Aivazovsky 10 Year Brandy", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Aivazovsky 20 Year Brandy", type: "Brandy", volume: "0.5L", abv: "40%" },
    ],
  },
  {
    name: "Château Tirecul La Gravière", category: "White Wine", country: "France", est: "",
    desc: "Prestigious Monbazillac sweet wines from Bergerac, a hidden gem of French wine.",
    products: [
      { name: "Tirecul La Gravière Monbazillac", type: "Sweet White Wine", volume: "0.75L", abv: "13%" },
    ],
  },
  {
    name: "Viña Errazuriz", category: "Red Wine", country: "Chile", est: "1870",
    desc: "One of Chile's most historic wine producers from the Aconcagua Valley.",
    products: [
      { name: "Errazuriz Max Reserva Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Errazuriz Max Reserva Carménère", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Errazuriz Aconcagua Alto Pinot Noir", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Catena Zapata", category: "Red Wine", country: "Argentina", est: "1902",
    desc: "Argentina's pioneer of high-altitude Malbec wines from Mendoza.",
    products: [
      { name: "Catena Malbec", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Catena Alta Malbec", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Catena Zapata Adrianna Vineyard Malbec", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Spier", category: "Red Wine", country: "South Africa", est: "1692",
    desc: "Historic South African wine estate in Stellenbosch.",
    products: [
      { name: "Spier Signature Pinotage", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Spier 21 Gables Chenin Blanc", type: "White Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Villa Maria", category: "White Wine", country: "New Zealand", est: "1961",
    desc: "New Zealand's most awarded winery, famous for Sauvignon Blanc.",
    products: [
      { name: "Villa Maria Private Bin Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Villa Maria Cellar Selection Pinot Noir", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Schloss Gobelsburg", category: "White Wine", country: "Austria", est: "1171",
    desc: "Historic Austrian wine estate known for Grüner Veltliner and Riesling from Kamptal.",
    products: [
      { name: "Gobelsburg Grüner Veltliner Kamptal DAC", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Gobelsburg Riesling Kamptal DAC", type: "White Wine", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Weingut Dr. Loosen", category: "White Wine", country: "Germany", est: "1150",
    desc: "World-class German Riesling producer from the Mosel valley.",
    products: [
      { name: "Dr. Loosen Blue Slate Riesling Kabinett", type: "White Wine", volume: "0.75L", abv: "8%" },
      { name: "Dr. Loosen Erdener Treppchen Riesling Spätlese", type: "White Wine", volume: "0.75L", abv: "8%" },
    ],
  },
  {
    name: "Plantation", category: "Rum", country: "Jamaica", est: "",
    desc: "Multi-origin Caribbean rum blending house with vintage expressions.",
    products: [
      { name: "Plantation Original Dark", type: "Dark Rum", volume: "0.7L", abv: "40%" },
      { name: "Plantation 3 Stars", type: "White Rum", volume: "0.7L", abv: "41.2%" },
      { name: "Plantation XO 20th Anniversary", type: "Aged Rum", volume: "0.7L", abv: "40%" },
      { name: "Plantation Barbados 5 Years", type: "Aged Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Rhum Clément", category: "Rum", country: "Martinique", est: "1887",
    desc: "Premium AOC Martinique rhum agricole with centuries of tradition.",
    products: [
      { name: "Clément VSOP", type: "Aged Rum", volume: "0.7L", abv: "40%" },
      { name: "Clément XO", type: "Aged Rum", volume: "0.7L", abv: "42%" },
      { name: "Clément Blanc", type: "White Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Spirits of Old Man", category: "Rum", country: "Germany", est: "",
    desc: "Crafted blended rums from around the world with unique profiles.",
    products: [
      { name: "Old Man Rum Project One", type: "Blended Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Gin Mare", category: "Gin", country: "Spain", est: "",
    desc: "Mediterranean-inspired premium Spanish gin with olive, basil, rosemary and thyme.",
    products: [
      { name: "Gin Mare Mediterranean Gin", type: "Gin", volume: "0.7L", abv: "42.7%" },
      { name: "Gin Mare Capri", type: "Gin", volume: "0.7L", abv: "42.7%" },
    ],
  },
  {
    name: "KI NO BI", category: "Gin", country: "Japan", est: "",
    desc: "Artisanal Japanese dry gin from Kyoto Distillery — crafted with Japanese botanicals.",
    products: [
      { name: "KI NO BI Kyoto Dry Gin", type: "Gin", volume: "0.7L", abv: "45.7%" },
      { name: "KI NO BI SEI", type: "Gin", volume: "0.7L", abv: "54.5%" },
    ],
  },
  {
    name: "Espolòn", category: "Tequila", country: "Mexico", est: "1998",
    desc: "Authentic Mexican tequila with artisanal craftsmanship from Jalisco.",
    products: [
      { name: "Espolòn Blanco", type: "Tequila", volume: "0.7L", abv: "40%" },
      { name: "Espolòn Reposado", type: "Tequila", volume: "0.7L", abv: "40%" },
      { name: "Espolòn Añejo", type: "Tequila", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Stolichnaya", category: "Vodka", country: "Latvia", est: "1938",
    desc: "Legendary premium vodka brand, now proudly produced in Latvia.",
    products: [
      { name: "Stolichnaya Premium Vodka", type: "Vodka", volume: "0.7L", abv: "40%" },
      { name: "Stolichnaya Elit", type: "Ultra Premium Vodka", volume: "0.7L", abv: "40%" },
      { name: "Stoli Cucumber", type: "Flavored Vodka", volume: "0.7L", abv: "37.5%" },
      { name: "Stoli Vanilla", type: "Flavored Vodka", volume: "0.7L", abv: "37.5%" },
    ],
  },
  {
    name: "Vestal", category: "Vodka", country: "Poland", est: "",
    desc: "Small-batch vintage Polish potato vodka with terroir character.",
    products: [
      { name: "Vestal Vodka Kaszëbë", type: "Vodka", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Bols", category: "Liqueurs", country: "Netherlands", est: "1575",
    desc: "The world's oldest distillery brand, known for liqueurs and genever.",
    products: [
      { name: "Bols Genever", type: "Genever", volume: "0.7L", abv: "42%" },
      { name: "Bols Blue Curaçao", type: "Liqueur", volume: "0.7L", abv: "21%" },
      { name: "Bols Triple Sec", type: "Liqueur", volume: "0.7L", abv: "38%" },
      { name: "Bols Amaretto", type: "Liqueur", volume: "0.7L", abv: "24%" },
    ],
  },
  {
    name: "Chartreuse", category: "Liqueurs", country: "France", est: "1737",
    desc: "Legendary herbal liqueur made by Carthusian monks with 130 botanicals.",
    products: [
      { name: "Chartreuse Verte (Green)", type: "Herbal Liqueur", volume: "0.7L", abv: "55%" },
      { name: "Chartreuse Jaune (Yellow)", type: "Herbal Liqueur", volume: "0.7L", abv: "40%" },
      { name: "Chartreuse VEP Verte", type: "Herbal Liqueur", volume: "1L", abv: "54%" },
    ],
  },
  {
    name: "Vana Tallinn", category: "Liqueurs", country: "Estonia", est: "1962",
    desc: "Iconic Estonian rum-based liqueur with a distinctive taste.",
    products: [
      { name: "Vana Tallinn Original", type: "Liqueur", volume: "0.5L", abv: "40%" },
      { name: "Vana Tallinn Cream", type: "Cream Liqueur", volume: "0.5L", abv: "16%" },
    ],
  },
  {
    name: "MV Group", category: "Vodka", country: "Lithuania", est: "",
    desc: "Leading Baltic spirits producer with a wide portfolio.",
    products: [
      { name: "MV Group Lithuanian Vodka", type: "Vodka", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Aura", category: "Brandy", country: "Georgia", est: "",
    desc: "Georgian brandy with rich Caucasus tradition.",
    products: [
      { name: "Aura 5 Star Brandy", type: "Brandy", volume: "0.5L", abv: "40%" },
    ],
  },
  {
    name: "Jägermeister", category: "Liqueurs", country: "Germany", est: "1935",
    desc: "World-famous German herbal liqueur made with 56 herbs and spices.",
    products: [
      { name: "Jägermeister Original", type: "Herbal Liqueur", volume: "0.7L", abv: "35%" },
      { name: "Jägermeister Cold Brew Coffee", type: "Liqueur", volume: "0.5L", abv: "33%" },
    ],
  },
  {
    name: "Appleton Estate", category: "Rum", country: "Jamaica", est: "1749",
    desc: "Jamaica's oldest and most celebrated rum producer from Nassau Valley.",
    products: [
      { name: "Appleton Estate Signature", type: "Rum", volume: "0.7L", abv: "40%" },
      { name: "Appleton Estate 8 Year Reserve", type: "Aged Rum", volume: "0.7L", abv: "43%" },
      { name: "Appleton Estate 12 Year Rare Casks", type: "Aged Rum", volume: "0.7L", abv: "43%" },
      { name: "Appleton Estate 21 Year Nassau Valley", type: "Aged Rum", volume: "0.7L", abv: "43%" },
    ],
  },
  {
    name: "Brancott Estate", category: "White Wine", country: "New Zealand", est: "1976",
    desc: "Marlborough Sauvignon Blanc pioneer.",
    products: [
      { name: "Brancott Estate Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Brancott Estate Pinot Grigio", type: "White Wine", volume: "0.75L", abv: "12.5%" },
    ],
  },
  {
    name: "Torres", category: "Red Wine", country: "Spain", est: "1870",
    desc: "One of Spain's most iconic wine families from Penedès.",
    products: [
      { name: "Torres Celeste Crianza", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Torres Gran Coronas Reserva", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Torres Mas La Plana", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Torres Viña Sol", type: "White Wine", volume: "0.75L", abv: "11.5%" },
    ],
  },
];

export const productCategories = [
  "Whisky", "Vodka", "Rum", "Gin", "Tequila", "Sake",
  "Red Wine", "White Wine", "Rosé Wine", "Champagne", "Prosecco",
  "Sparkling Wine", "Brandy", "Cognac", "Liqueurs",
] as const;

export const countries = [
  "Argentina", "Armenia", "Austria", "Chile", "Cuba",
  "Estonia", "France", "Georgia", "Germany", "Italy",
  "Jamaica", "Japan", "Latvia", "Lithuania", "Martinique", "Mexico",
  "Netherlands", "New Zealand", "Poland", "South Africa", "Spain", "USA",
] as const;

export function getBrandsByCategory(category: string): Brand[] {
  return brands.filter(b => b.category === category);
}

export function getAllProducts() {
  return brands.flatMap(b => (b.products || []).map(p => ({ ...p, brand: b.name, brandCategory: b.category, country: b.country })));
}

export function getCategoryProductCount(category: string): number {
  return brands
    .filter(b => b.category === category)
    .reduce((sum, b) => sum + (b.products?.length || 1), 0);
}
