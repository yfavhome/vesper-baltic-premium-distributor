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
  image?: string;
  shopUrl?: string;
}

export const brands: Brand[] = [
  // ── PROSECCO ──
  {
    name: "De Bernard", category: "Prosecco", country: "Italy", est: "1948",
    desc: "Italian sparkling wine producer known for premium Prosecco DOC.",
    products: [
      { name: "De Bernard Prosecco DOC Rosé Brut", type: "Prosecco Rosé", volume: "0.75L", abv: "11%", image: "https://www.alko.lv/cdn/shop/products/Bernard_prosecco_rose_60x.png?v=1676549572", shopUrl: "https://www.alko.lv/products/de-bernard-prosecco-doc-rose-brut-11-0-75l" },
      { name: "De Bernard Prosecco Extra Dry DOC", type: "Prosecco", volume: "200ml", abv: "11%", image: "https://www.alko.lv/cdn/shop/products/ProseccoDOCExtraDry200ml_60x.jpg?v=1678802233", shopUrl: "https://www.alko.lv/products/de-bernard-prosecco-extra-dry-doc-11-200ml" },
    ],
  },
  {
    name: "Sutto", category: "Prosecco", country: "Italy", est: "1933",
    desc: "Family-run Prosecco and wine estate from Veneto.",
    products: [
      { name: "Prosecco Sutto DOC Brut", type: "Prosecco", volume: "0.75L", abv: "11%", shopUrl: "https://www.alko.lv/products/sutto-prosecco-doc-brut-0-75l-1" },
      { name: "Prosecco Sutto Valdobbiadene DOCG Brut", type: "Prosecco", volume: "0.75L", abv: "11%", shopUrl: "https://www.alko.lv/products/prosecco-sutto-valdobbiadene-docg-brut-11-0-75l" },
      { name: "Prosecco Sutto DOC Extra Dry Magnum", type: "Prosecco", volume: "1.5L", abv: "11%", shopUrl: "https://www.alko.lv/products/sutto-prosecco-doc-extra-dry-magnum-1-5l-1" },
    ],
  },
  {
    name: "Donna Gloria", category: "Prosecco", country: "Italy", est: "",
    desc: "Premium Prosecco from Valdobbiadene DOCG region.",
    products: [
      { name: "Donna Gloria Valdobbiadene Prosecco Superiore DOCG Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11.5%", shopUrl: "https://www.alko.lv/products/donna-gloria-valdobbiadene-prosecco-superiore-docg-11-5-0-75l" },
      { name: "Donna Gloria Prosecco Extra Dry DOC", type: "Prosecco", volume: "0.75L", abv: "11%", shopUrl: "https://www.alko.lv/products/donna-gloria-prosecco-extra-dry-doc-11-0-75l" },
    ],
  },

  // ── CHAMPAGNE ──
  {
    name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859",
    desc: "Prestigious French Champagne house with organic vineyards and a woman-led vision.",
    products: [
      { name: "Duval-Leroy Brut Réserve GB", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/duval-leroy-brut-reserve-gb" },
      { name: "Duval-Leroy Blanc de Blancs Grand Cru Prestige", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/duval-leroy-blanc-de-blancs-grand-cru-prestige-gb" },
    ],
  },
  {
    name: "Laurent Lequart", category: "Champagne", country: "France", est: "",
    desc: "Artisan grower Champagne from Festigny — Cœur de Cuvée Extra Brut and more.",
    products: [
      { name: "Laurent Lequart Cœur de Cuvée Extra Brut LIMITED + GB", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-coeur-de-cuvee-extra-brut" },
      { name: "Laurent Lequart Millésime 2010 Brut", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-millesime-2010-brut-12-0-75l" },
      { name: "Laurent Lequart Millésime 2008 Brut", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-millesime-2008-brut" },
      { name: "Laurent Lequart Rosé Blanche D'Andesyne Extra Brut", type: "Champagne Rosé", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-rose-blanche-andesyne-extra-brut" },
      { name: "Laurent Lequart Cuvée l'Héritière Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-decouverte-champagne-l-heritiere-extra-brut" },
      { name: "Laurent Lequart Gourmande Blanc de Meunier Brut Nature", type: "Champagne", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/laurent-lequart-gourmande-champagne-blanc-de-meunier-brut-nature" },
    ],
  },
  {
    name: "Moët & Chandon", category: "Champagne", country: "France", est: "1743",
    desc: "Iconic French Champagne house, synonymous with celebration worldwide.",
    products: [
      { name: "Moët & Chandon Brut Impérial", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/moet-chandon-brut-imperial-12-0-75l" },
      { name: "Moët & Chandon Brut Impérial Rosé", type: "Champagne Rosé", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/moet-chandon-brut-imperial-rose-12-0-75l-1" },
    ],
  },
  {
    name: "Dom Pérignon", category: "Champagne", country: "France", est: "1921",
    desc: "The ultimate prestige cuvée — vintage-only Champagne of legendary status.",
    products: [
      { name: "Dom Pérignon Grand Vintage 2012", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/dom-perignon-grand-vintage-2012-12-5-0-75l" },
      { name: "Dom Pérignon Grand Vintage 2010", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/dom-perignon-grand-vintage-2010-12-5-0-75l" },
      { name: "Dom Pérignon Vintage 2010 Lady Gaga Limited Edition", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/dom-perignon-vintage-2010-lady-gaga-limited-edition-12-5-0-75l" },
    ],
  },
  {
    name: "Veuve Clicquot", category: "Champagne", country: "France", est: "1772",
    desc: "One of the world's most prestigious Champagne houses, famed for Yellow Label.",
    products: [
      { name: "Veuve Clicquot Brut", type: "Champagne", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/veuve-clicquot-brut-12-5-0-75l-1" },
      { name: "Veuve Clicquot Brut", type: "Champagne", volume: "0.375L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/veuve-clicquot-brut-12-5-0-375l" },
    ],
  },

  // ── SPARKLING WINE ──
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
    desc: "Modern Italian sparkling wines and still wines from Trentino.",
    products: [
      { name: "Forte Alto Prosecco DOC", type: "Sparkling Wine", volume: "0.75L", abv: "11%" },
      { name: "Forte Alto Pinot Grigio Delle Venezie DOC", type: "White Wine", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/forte-alto-pinot-grigio-vigneti-delle-dolomiti-igt" },
      { name: "Forte Alto Merlot Delle Dolomiti IGT", type: "Red Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/forte-alto-merlot" },
    ],
  },

  // ── RED WINE ──
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
    name: "Tenuta Angoris", category: "Red Wine", country: "Italy", est: "1648",
    desc: "Historic Italian winery in Friuli Venezia Giulia — wines and Pinot Grigio.",
    products: [
      { name: "Villa Locatelli Cabernet Sauvignon (Angoris)", type: "Red Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/angoris-villa-locatelli-cabernet-sauvignon-friuli-isonzo" },
      { name: "Angoris Albertina Pinot Nero", type: "Red Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/angoris-albertina-pinot-noir-2016" },
      { name: "Villa Locatelli Pinot Grigio Friuli Isonzo DOC (Angoris)", type: "White Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/angoris-villa-locatelli-pinot-grigio" },
      { name: "Villa Locatelli Sauvignon Blanc Friuli Isonzo DOC (Angoris)", type: "White Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/angoris-villa-locatelli-sauvignon-blanc" },
    ],
  },
  {
    name: "Feudo Arancio", category: "Red Wine", country: "Italy", est: "",
    desc: "Sicilian winery producing excellent value DOC wines across many grape varieties.",
    products: [
      { name: "Feudo Arancio Merlot Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/feudo-arancio-merlot-sicilia-doc" },
      { name: "Feudo Arancio Nero d'Avola Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/feudo-arancio-nero-davola-sicilia" },
      { name: "Feudo Arancio Syrah Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/feudo-arancio-syrah-sicilia-doc" },
      { name: "Feudo Arancio Cabernet Sauvignon Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/feudo-arancio-cabernet-sauvignon-sicilia-doc" },
      { name: "Feudo Arancio Cantodoro Rosso Riserva Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/feudo-arancio-cantodoro-sicilia-doc" },
      { name: "Feudo Arancio Pinot Grigio Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/feudo-arancio-pinot-grigio-sicilia-doc" },
      { name: "Feudo Arancio Inzolia Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/feudo-arancio-inzolia-sicilia-igt" },
      { name: "Feudo Arancio Chardonnay Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/feudo-arancio-chardonnay-sicilia-doc" },
      { name: "Feudo Arancio Tinchité Grillo Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/feudo-arancio-tinchite-grillo-sicillia-doc" },
    ],
  },
  {
    name: "Domaine Bousquet", category: "Red Wine", country: "Argentina", est: "",
    desc: "Organic Argentine winery producing premium Malbec from Mendoza.",
    products: [
      { name: "Domaine Bousquet Malbec", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/domaine-bosquet-malbec-14-0-75l" },
      { name: "Domaine Bousquet Malbec Reserva", type: "Red Wine", volume: "0.75L", abv: "14.5%", shopUrl: "https://www.alko.lv/products/domaine-bosquet-malbec-reserva-14-5-0-75l" },
    ],
  },
  {
    name: "Roberto Sarotto", category: "Red Wine", country: "Italy", est: "",
    desc: "Piedmontese winery known for Barbera d'Asti and Moscato d'Asti.",
    products: [
      { name: "Roberto Sarotto Barbera d'Asti DOCG", type: "Red Wine", volume: "0.75L", abv: "13.5%", shopUrl: "https://www.alko.lv/products/roberto-sarotto-barbera-dasti-docg" },
      { name: "Roberto Sarotto Moscato d'Asti", type: "White Wine", volume: "0.75L", abv: "5%", shopUrl: "https://www.alko.lv/products/roberto-sarotto-moscato-d-asti" },
      { name: "Roberto Sarotto Grappa di Moscato", type: "Brandy", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/roberto-sarotto-grappa-di-moscato" },
    ],
  },
  {
    name: "Villa Spinosa", category: "Red Wine", country: "Italy", est: "",
    desc: "Valpolicella Classico DOC wines from Veneto.",
    products: [
      { name: "Villa Spinosa Valpolicella Classico DOC", type: "Red Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/villa-spinosa-valpolicella-classico-doc" },
    ],
  },
  {
    name: "Castello di Buttrio", category: "Red Wine", country: "Italy", est: "",
    desc: "Premium wines from Friuli Colli Orientali DOC.",
    products: [
      { name: "Castello di Buttrio Merlot DOC Friuli Colli Orientali", type: "Red Wine", volume: "0.75L", abv: "12.5%", shopUrl: "https://www.alko.lv/products/castelo-di-buttrio-merlot-doc-friuli-colli-orientali" },
      { name: "Castello di Buttrio Pinot Grigio DOC Friuli Colli Orientali", type: "White Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/castelo-di-buttrio-pinot-grigio-doc-friuli-colli-orientali" },
    ],
  },
  {
    name: "Torres", category: "Red Wine", country: "Spain", est: "1870",
    desc: "One of Spain's most iconic wine families from Penedès.",
    products: [
      { name: "Torres Celeste Crianza", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Torres Gran Coronas Reserva", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Torres Mas La Plana", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Catena Zapata", category: "Red Wine", country: "Argentina", est: "1902",
    desc: "Argentina's pioneer of high-altitude Malbec wines from Mendoza.",
    products: [
      { name: "Aruma Malbec (Catena)", type: "Red Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/bodegas-caro-aruma-malbec" },
    ],
  },
  {
    name: "Spier", category: "Red Wine", country: "South Africa", est: "1692",
    desc: "Historic South African wine estate in Stellenbosch.",
    products: [
      { name: "Spier Signature Pinotage", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },

  // ── WHITE WINE ──
  {
    name: "Wolfgang Pfaffmann", category: "White Wine", country: "Germany", est: "",
    desc: "German winery from the Pfalz region producing excellent Riesling and Pinot Blanc.",
    products: [
      { name: "Wolfgang Pfaffmann Riesling vom Löss QbA trocken", type: "White Wine", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/wolfgang-pfaffmann-riesling-trocken" },
      { name: "Wolfgang Pfaffmann Weissburgunder Kalkstein QbA trocken", type: "White Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/wolfgang-pfaffmann-weissburgunder-kalkstein-trocken-pinot-blanc" },
    ],
  },
  {
    name: "Villa Hochdörffer", category: "White Wine", country: "Germany", est: "",
    desc: "German estate producing refined Riesling from Pfalz.",
    products: [
      { name: "Villa Hochdörffer Riesling halbtrocken Kalkmergel", type: "White Wine", volume: "0.75L", abv: "11.5%", shopUrl: "https://www.alko.lv/products/villa-hochdorffer-riesling-halbtrocken-kalkmergel" },
    ],
  },
  {
    name: "Ken Forrester", category: "White Wine", country: "South Africa", est: "",
    desc: "South Africa's Chenin Blanc specialist from Stellenbosch.",
    products: [
      { name: "Ken Forrester Petit Chenin Blanc", type: "White Wine", volume: "0.75L", abv: "13%", shopUrl: "https://www.alko.lv/products/ken-forrester-petit-chenin-blanc" },
    ],
  },
  {
    name: "Domaine du Chardonnay", category: "White Wine", country: "France", est: "",
    desc: "Classic Chablis producer from Burgundy.",
    products: [
      { name: "Domaine du Chardonnay Chablis", type: "White Wine", volume: "0.75L", abv: "12%", shopUrl: "https://www.alko.lv/products/domaine-du-chardonnay-chablis" },
    ],
  },
  {
    name: "Villa Maria", category: "White Wine", country: "New Zealand", est: "1961",
    desc: "New Zealand's most awarded winery, famous for Sauvignon Blanc.",
    products: [
      { name: "Villa Maria Private Bin Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
    ],
  },
  {
    name: "Brancott Estate", category: "White Wine", country: "New Zealand", est: "1976",
    desc: "Marlborough Sauvignon Blanc pioneer.",
    products: [
      { name: "Brancott Estate Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
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
    ],
  },
  {
    name: "Château Tirecul La Gravière", category: "White Wine", country: "France", est: "",
    desc: "Prestigious Monbazillac sweet wines from Bergerac.",
    products: [
      { name: "Tirecul La Gravière Monbazillac", type: "Sweet White Wine", volume: "0.75L", abv: "13%" },
    ],
  },

  // ── WHISKY ──
  {
    name: "Moonshine Runners", category: "Whisky", country: "USA", est: "",
    desc: "The Legendary range of blended whiskeys from America, Scotland, and Canada.",
    products: [
      { name: "Moonshine Runners The Legendary Blended American Whiskey", type: "Blended Whiskey", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/moonshine-runners-the-legendary-blended-american-whisky" },
      { name: "Moonshine Runners Blended Scotch Whiskey", type: "Scotch", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/moonshine-runners-blended-scotch-whiskey-40-0-7l" },
      { name: "Moonshine Runners The Legendary Straight Bourbon Whiskey", type: "Bourbon", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/moonshine-runners-the-legendary-straight-bourbon-whisky" },
      { name: "Moonshine Runners The Legendary Blended Canadian Whiskey", type: "Canadian Whisky", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/moonshine-runners-the-legendary-blended-canadian-whisky" },
    ],
  },
  {
    name: "Back to Black", category: "Whisky", country: "UK", est: "",
    desc: "Premium Scotch whisky with a bold, smooth character.",
    products: [
      { name: "Back to Black Scotch Whiskey", type: "Scotch", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/back-to-black-blended-scotch-whisky-40-0-7l" },
    ],
  },
  {
    name: "Bandwagon", category: "Whisky", country: "USA", est: "",
    desc: "Straight Bourbon and ready-to-drink cocktails.",
    products: [
      { name: "Bandwagon Straight Bourbon Original Whiskey", type: "Bourbon", volume: "0.7L", abv: "41.3%", shopUrl: "https://www.alko.lv/products/bandwagon-straight-bourbon-original-whisky" },
      { name: "OldFashioned Cocktail Bandwagon", type: "Ready-to-Drink", volume: "0.7L", abv: "35%", shopUrl: "https://www.alko.lv/products/oldfashioned-coctail" },
      { name: "Manhattan Cocktail Bandwagon", type: "Ready-to-Drink", volume: "0.7L", abv: "35%", shopUrl: "https://www.alko.lv/products/manhattan-coctail" },
    ],
  },
  {
    name: "Compass Box", category: "Whisky", country: "UK", est: "",
    desc: "Artisan Scotch whisky blender known for The Peat Monster and The Spice Tree.",
    products: [
      { name: "Compass Box The Peat Monster Coffret 2 Verres", type: "Blended Malt Scotch", volume: "0.7L", abv: "46%", shopUrl: "https://www.alko.lv/products/compass-box-the-peat-monster-coffret-2-verres-46-0-7l" },
      { name: "Compass Box The Spice Tree Coffret 2 Verres", type: "Blended Malt Scotch", volume: "0.7L", abv: "46%", shopUrl: "https://www.alko.lv/products/compass-box-the-spice-tree-coffret-2-verres-46-0-7l" },
    ],
  },
  {
    name: "Mars", category: "Whisky", country: "Japan", est: "",
    desc: "Japanese whisky distillery producing Mars Kasei and Mars Cosmo.",
    products: [
      { name: "Mars Kasei", type: "Japanese Whisky", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/mars-kasei" },
      { name: "Mars Cosmo", type: "Japanese Whisky", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/mars-cosmo" },
    ],
  },
  {
    name: "Amrut", category: "Whisky", country: "India", est: "",
    desc: "Award-winning Indian single malt whisky.",
    products: [
      { name: "Amrut Indian Single Malt", type: "Single Malt", volume: "0.7L", abv: "46%", shopUrl: "https://www.alko.lv/products/amrut-indian-single-malt-of" },
    ],
  },
  {
    name: "Macallan", category: "Whisky", country: "UK", est: "1824",
    desc: "One of the world's most iconic single malt Scotch whisky distilleries.",
    products: [
      { name: "Macallan 12 Years Sherry Oak GB", type: "Single Malt Scotch", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/macallan-12-years-sherry-oak-gb-0-7l-40" },
    ],
  },
  {
    name: "Chivas Regal", category: "Whisky", country: "UK", est: "1801",
    desc: "Prestigious blended Scotch whisky house.",
    products: [
      { name: "Chivas Regal 21 Years Royal Salute The Signature Blend + GB", type: "Blended Scotch", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/chivas-regal-21years-royal-salute-the-signature-blend-gb-40-0-7-l" },
    ],
  },
  {
    name: "The New Zealand Whisky", category: "Whisky", country: "New Zealand", est: "",
    desc: "Rare whisky from New Zealand — Diggers & Ditch.",
    products: [
      { name: "NEW ZEALAND WHISKY Diggers & Ditch", type: "Whisky", volume: "0.5L", abv: "45%", shopUrl: "https://www.alko.lv/products/new-zealand-whisky-the-diggers-ditch-45-0-5l" },
    ],
  },

  // ── VODKA ──
  {
    name: "Ice Palace", category: "Vodka", country: "Latvia", est: "",
    desc: "Premium Latvian vodka brand with multiple expressions.",
    products: [
      { name: "Ice Palace Degvīns 40%", type: "Vodka", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-vodka" },
      { name: "Ice Palace Degvīns 40%", type: "Vodka", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-vodka-40-0-7l" },
      { name: "Ice Palace Degvīns 40%", type: "Vodka", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-vodka-40-0-5l" },
      { name: "Ice Palace CRANBERRY Degvīns 40%", type: "Flavored Vodka", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-vodka-cranberry-40-1l" },
      { name: "Ice Palace CRANBERRY Degvīns 40%", type: "Flavored Vodka", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-vodka-cranberry-40-0-5l" },
      { name: "Ice Palace Degvīns + GB 40%", type: "Vodka Gift Box", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/ice-palace-degvins-gb-40-1l" },
    ],
  },
  {
    name: "Grey Goose", category: "Vodka", country: "France", est: "1997",
    desc: "Ultra-premium French vodka made from fine French wheat.",
    products: [
      { name: "Grey Goose Le Citron", type: "Flavored Vodka", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/grey-goose-le-citron-40-0-7-l" },
    ],
  },
  {
    name: "J.J. Kurberg", category: "Vodka", country: "Estonia", est: "",
    desc: "Estonian organic vodka with unique botanical infusions.",
    products: [
      { name: "J.J. Kurberg Humal/HOPS Organic Vodka", type: "Organic Vodka", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/vodka-j-j-kurberg-humal-hops-organic-40-0-0-5l" },
      { name: "J.J. Kurberg Kuldjuur/Golden Root Vodka", type: "Organic Vodka", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/vodka-j-j-kurberg-kuldjuur-golden-root-40-0-0-5l" },
    ],
  },
  {
    name: "Vestal", category: "Vodka", country: "Poland", est: "",
    desc: "Small-batch vintage Polish potato vodka with terroir character.",
    products: [
      { name: "Vestal Vodka", type: "Vodka", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/vestal-vodka-40-0-5l" },
    ],
  },
  {
    name: "Tovaritch", category: "Vodka", country: "Russia", est: "",
    desc: "Premium vodka with classic character.",
    products: [
      { name: "Tovaritch Degvīns", type: "Vodka", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/tovaritch-vodka-40-0-7l" },
      { name: "Tovaritch Degvīns", type: "Vodka", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/tovaritch-vodka-40-1l" },
    ],
  },
  {
    name: "Fly", category: "Vodka", country: "Latvia", est: "",
    desc: "Latvian premium vodka brand — Fly Superior.",
    products: [
      { name: "Fly Degvīns Superior", type: "Vodka", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/fly-vodka-superior-40-1l" },
      { name: "Fly Degvīns Superior + GB", type: "Vodka Gift Box", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/fly-degvins-superior-gb-gb-40-1l" },
    ],
  },
  {
    name: "Louers", category: "Vodka", country: "Latvia", est: "",
    desc: "Ultra-premium Latvian vodka with LED light gift box.",
    products: [
      { name: "Louers Premium Vodka + light + GB", type: "Ultra Premium Vodka", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/louers-premium-vodka-light-gb-1l-40" },
    ],
  },

  // ── RUM ──
  {
    name: "Black Tears", category: "Rum", country: "Cuba", est: "",
    desc: "Dry Spiced Rum — a unique Cuban rum with distinctive character and bold flavor.",
    products: [
      { name: "Black Tears Dry Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Dad Joke", category: "Rum", country: "USA", est: "",
    desc: "Spiced rum and prosecco brand with a playful personality.",
    products: [
      { name: "Dad Joke Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Dad Joke Prosecco DOC Extra Dry", type: "Prosecco", volume: "0.7L", abv: "11%" },
    ],
  },
  {
    name: "Zacapa", category: "Rum", country: "Guatemala", est: "",
    desc: "Iconic Guatemalan rum aged using the solera method.",
    products: [
      { name: "Zacapa 23 YO Solera Gran Reserva + GB", type: "Aged Rum", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/zacapa-23yo-solera-gran-reserva-gb-40-0-7l" },
      { name: "Zacapa 23 Centenario Gran Reserva + GB", type: "Aged Rum", volume: "1L", abv: "40%", shopUrl: "https://www.alko.lv/products/zacapa-23-centenario-gran-reserva-gb-40-1l" },
    ],
  },
  {
    name: "Santos Dumont", category: "Rum", country: "Brazil", est: "",
    desc: "Brazilian XO rum with unique cask finishes.",
    products: [
      { name: "Santos Dumont XO Palmira", type: "Aged Rum", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/santos-dumont-xo-palmira-40-0-7l" },
      { name: "Santos Dumont XO Gewürztraminer", type: "Aged Rum", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/santos-dumont-xo-gewurztraminer-40-0-7l" },
      { name: "Santos Dumont Rum GP", type: "Aged Rum", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/santos-dumont-rum-gp-40-0-7l" },
    ],
  },
  {
    name: "Remedy", category: "Rum", country: "Germany", est: "",
    desc: "Craft rum brand with spiced and elixir expressions.",
    products: [
      { name: "Remedy Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "42%", shopUrl: "https://www.alko.lv/products/remedy-spiced-rum-42-0-7l" },
      { name: "Remedy Elixir Rum Liqueur", type: "Rum Liqueur", volume: "0.7L", abv: "34%", shopUrl: "https://www.alko.lv/products/remedy-elixir-rum-liqueur-34-0-7l" },
    ],
  },
  {
    name: "Transcontinental Rum Line (TCRL)", category: "Rum", country: "France", est: "",
    desc: "Single-cask rum bottlings from across the Caribbean and beyond.",
    products: [
      { name: "NIGHT RAMBLER TCRL", type: "Blended Rum", volume: "0.7L", abv: "42%", shopUrl: "https://www.alko.lv/products/night-rambler-tcrl-42-0-7l" },
      { name: "PANAMA 6 ans 2015 TCRL GB", type: "Aged Rum", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/panama-6-ans-2015-tcrl-gb-43-0-7l" },
      { name: "TRINIDAD 2006 SB TCRL", type: "Aged Rum", volume: "0.7L", abv: "56.5%", shopUrl: "https://www.alko.lv/products/trinidad-2006-sb-tcrl-56-5-0-7l" },
      { name: "VENEZUELA 2008 Single Cask TCRL", type: "Aged Rum", volume: "0.7L", abv: "62%", shopUrl: "https://www.alko.lv/products/venezuela-2008-single-cask-tcrl-62-0-7l" },
      { name: "NICARAGUA 2004 Coffret 2 Verres TCRL", type: "Aged Rum", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/nicaragua-2004-coffret-2-verres-transcontinental" },
    ],
  },
  {
    name: "Papalin", category: "Rum", country: "Jamaica", est: "",
    desc: "Jamaican high-ester rum with serious character.",
    products: [
      { name: "PAPALIN 5 ans Jamaica High Ester", type: "Rum", volume: "0.7L", abv: "47%", shopUrl: "https://www.alko.lv/products/papalin-5-ans-jamaica-high-ester-47-0-7l" },
      { name: "PAPALIN 5 ans Jamaica High Ester Overproof", type: "Overproof Rum", volume: "0.7L", abv: "57%", shopUrl: "https://www.alko.lv/products/papalin-5-ans-jamaica-high-ester-overproof-57-0-7l" },
    ],
  },
  {
    name: "Vieux Sajous", category: "Rum", country: "Haiti", est: "",
    desc: "Haitian clairin and aged rum — raw and authentic.",
    products: [
      { name: "VIEUX SAJOUS 5 ans 2019 Haiti", type: "Aged Rum", volume: "0.7L", abv: "58.3%", shopUrl: "https://www.alko.lv/products/vieux-sajous-5-ans-2019-haiti-58-3-0-7l" },
    ],
  },

  // ── GIN ──
  {
    name: "Gin Mare", category: "Gin", country: "Spain", est: "",
    desc: "Mediterranean-inspired premium Spanish gin with olive, basil, rosemary and thyme.",
    products: [
      { name: "Gin Mare Mediterranean Gin", type: "Gin", volume: "0.7L", abv: "42.7%" },
    ],
  },
  {
    name: "KI NO BI", category: "Gin", country: "Japan", est: "",
    desc: "Artisanal Japanese dry gin from Kyoto Distillery.",
    products: [
      { name: "KI NO BI Kyoto Dry Gin", type: "Gin", volume: "0.7L", abv: "45.7%" },
    ],
  },
  {
    name: "City of London", category: "Gin", country: "UK", est: "",
    desc: "Classic London dry gin from the heart of the City.",
    products: [
      { name: "City Of London Gin", type: "London Dry Gin", volume: "0.7L", abv: "41.3%", shopUrl: "https://www.alko.lv/products/city-of-london" },
    ],
  },
  {
    name: "Strange Luve", category: "Gin", country: "Latvia", est: "",
    desc: "Latvian craft gin in classic London Dry and Pink expressions.",
    products: [
      { name: "Strange Luve London Dry Gin", type: "London Dry Gin", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/strange-luve-london-dry" },
      { name: "Strange Luve London Pink Gin", type: "Pink Gin", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/strange-luve-london-pink-gin-40-0-7l" },
    ],
  },
  {
    name: "Whitley Neill", category: "Gin", country: "UK", est: "",
    desc: "Award-winning British gin with unique botanical infusions.",
    products: [
      { name: "Whitley Neill Quince Gin", type: "Flavored Gin", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/whitley-neill-quince" },
      { name: "Whitley Neill Pink Grapefruit Gin", type: "Flavored Gin", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/whitley-neill-pink-grapefruit" },
    ],
  },
  {
    name: "Edinburgh Gin", category: "Gin", country: "UK", est: "",
    desc: "Premium Scottish gin from the heart of Edinburgh.",
    products: [
      { name: "Edinburgh Gin", type: "Gin", volume: "0.7L", abv: "43%", shopUrl: "https://www.alko.lv/products/edinburgh-gin-43-0-7l" },
    ],
  },
  {
    name: "The London No.1", category: "Gin", country: "UK", est: "",
    desc: "Distinctive blue-colored premium London gin.",
    products: [
      { name: "The London No.1 Gin", type: "London Dry Gin", volume: "0.7L", abv: "47%", shopUrl: "https://www.alko.lv/products/the-london-no-1-gin-47-0-7l" },
    ],
  },
  {
    name: "Tarquin's", category: "Gin", country: "UK", est: "",
    desc: "Cornish handcrafted gin with distinctive fruit expressions.",
    products: [
      { name: "Tarquin's Blackberry Gin", type: "Fruit Gin", volume: "0.7L", abv: "38%", shopUrl: "https://www.alko.lv/products/tarquins-blackberry-gin-38-0-7l" },
    ],
  },
  {
    name: "Tanqueray", category: "Gin", country: "UK", est: "1830",
    desc: "World-renowned London dry gin brand.",
    products: [
      { name: "Tanqueray Rangpur Gin", type: "Gin", volume: "0.7L", abv: "47.3%", shopUrl: "https://www.alko.lv/products/tanqueray-rangpur-gin-47-3-0-7l" },
    ],
  },
  {
    name: "Bobby's Gin", category: "Gin", country: "Netherlands", est: "",
    desc: "Dutch gin with Indonesian-inspired botanicals.",
    products: [
      { name: "Bobby's Gin", type: "Gin", volume: "0.7L", abv: "42%", shopUrl: "https://www.alko.lv/products/bobbys-gin-42-0-7l" },
    ],
  },
  {
    name: "UMAMi Gin", category: "Gin", country: "Estonia", est: "",
    desc: "Estonian craft gin with umami character.",
    products: [
      { name: "UMAMi Gin", type: "Gin", volume: "0.5L", abv: "42%", shopUrl: "https://www.alko.lv/products/umami-gin-42-0-5l" },
    ],
  },
  {
    name: "Berkshire", category: "Gin", country: "UK", est: "",
    desc: "British dry gin with honey and fruit variations.",
    products: [
      { name: "Berkshire Dry Gin", type: "London Dry Gin", volume: "0.5L", abv: "40.3%", shopUrl: "https://www.alko.lv/products/berkshire-dry-gin-40-3-0-5l" },
      { name: "Berkshire Honey Orange Gin", type: "Flavored Gin", volume: "0.5L", abv: "40.3%", shopUrl: "https://www.alko.lv/products/berkshire-honey-orange-gin-40-3-0-5l" },
    ],
  },
  {
    name: "Cold Gin", category: "Gin", country: "Latvia", est: "",
    desc: "Latvian craft gin with exotic flavors — Brazilian Lime and Rhubarb & Rose.",
    products: [
      { name: "Cold Brasilian Lime Gin", type: "Flavored Gin", volume: "0.7L", abv: "40.3%", shopUrl: "https://www.alko.lv/products/cold-brasilian-lime-gin-40-3-0-7l" },
      { name: "Cold Rhubarb & Rose Gin", type: "Flavored Gin", volume: "0.7L", abv: "40.3%", shopUrl: "https://www.alko.lv/products/cold-rhubarb-rose-gin-40-3-0-7l" },
    ],
  },

  // ── TEQUILA / MEZCAL ──
  {
    name: "Don Fulano", category: "Tequila", country: "Mexico", est: "",
    desc: "Premium artisanal Mexican tequila from Jalisco highlands.",
    products: [
      { name: "Don Fulano Blanco Fuerte", type: "Tequila Blanco", volume: "0.7L", abv: "50%", shopUrl: "https://www.alko.lv/products/don-fulano-blanco-fuerte" },
      { name: "Don Fulano Blanco", type: "Tequila Blanco", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/don-fulano-blanco" },
      { name: "Don Fulano Reposado", type: "Tequila Reposado", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/don-fulano-reposado" },
      { name: "Don Fulano Imperial Decanter", type: "Tequila Añejo", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/don-fulano-imperial-decanter-40-0-7l" },
    ],
  },
  {
    name: "Derrumbes", category: "Tequila", country: "Mexico", est: "",
    desc: "Artisanal Mexican mezcal from different terroirs — Oaxaca, San Luis, Michoacán.",
    products: [
      { name: "Derrumbes N.1 Oaxaca", type: "Mezcal", volume: "0.7L", abv: "46.6%", shopUrl: "https://www.alko.lv/products/derrumbes-mezcal-n-1-oaxaca" },
      { name: "Derrumbes N.3 San Luis", type: "Mezcal", volume: "0.7L", abv: "44.3%", shopUrl: "https://www.alko.lv/products/derrumbes-mezcal-n-3-san" },
      { name: "Derrumbes N.2 Michoacán", type: "Mezcal", volume: "0.7L", abv: "46.3%", shopUrl: "https://www.alko.lv/products/derrumbes-n-2-michoacan-49-3-0-7l" },
    ],
  },
  {
    name: "Dos Compañeros", category: "Tequila", country: "Mexico", est: "",
    desc: "Accessible Mexican tequila in Gold and Silver expressions.",
    products: [
      { name: "Dos Compañeros Gold", type: "Tequila Gold", volume: "0.7L", abv: "38%", shopUrl: "https://www.alko.lv/products/dos-companeros-gold-38-0-7l" },
      { name: "Dos Compañeros Silver", type: "Tequila Silver", volume: "0.7L", abv: "38%", shopUrl: "https://www.alko.lv/products/dos-companeros-silver-38-0-7l" },
    ],
  },

  // ── SAKE ──
  {
    name: "Dassai", category: "Sake", country: "Japan", est: "",
    desc: "World-renowned premium Japanese sake, crafted from Yamada Nishiki rice.",
    products: [
      { name: "Dassai 45 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 23 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 39 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
    ],
  },

  // ── COGNAC ──
  {
    name: "Rémi Landier", category: "Cognac", country: "France", est: "",
    desc: "Family-owned Grande and Fine Champagne cognac house.",
    products: [
      { name: "Rémi Landier VS", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-vs-gb" },
      { name: "Rémi Landier VSOP Double Matured", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-vsop-double-matured-40-0-7l" },
      { name: "Rémi Landier Napoléon GB", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-napoleon-gb" },
      { name: "Rémi Landier XO Vieille Réserve GB", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-xo-vieille-reserve-gb" },
      { name: "Rémi Landier XO Artisanal GB", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-xo-artisanal-gb" },
      { name: "Rémi Landier Très Vieux Grande Champagne", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/remi-landier-tres-vieux-grande-champagne" },
    ],
  },
  {
    name: "Tesseron", category: "Cognac", country: "France", est: "",
    desc: "Prestigious Cognac house known for Lot No. expressions.",
    products: [
      { name: "Tesseron 76 X.O.", type: "Cognac XO", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/tesseron-76-xo" },
    ],
  },
  {
    name: "DEAU Cognac", category: "Cognac", country: "France", est: "",
    desc: "Modern French cognac house with distinctive black bottles.",
    products: [
      { name: "DEAU Cognac VS GB", type: "Cognac VS", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/deau-cognac-vs-gb-40-0-7l" },
      { name: "DEAU Cognac VSOP GB", type: "Cognac VSOP", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/deau-cognac-vsop-gb-40-0-7l" },
      { name: "DEAU Cognac XO GB", type: "Cognac XO", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/deau-cognac-xo-gb-40-0-7l" },
      { name: "DEAU Cognac Black GB", type: "Cognac", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/deau-cognac-black-gb-40-0-7l" },
    ],
  },
  {
    name: "VITI Collection", category: "Cognac", country: "France", est: "",
    desc: "Cognac from the Landier family — Napoléon expression.",
    products: [
      { name: "VITI COLLECTION Napoléon Cognac Landier Family", type: "Cognac", volume: "0.7L", abv: "45%", shopUrl: "https://www.alko.lv/products/viti-collection-napoleon-landier-family-45-0-7l" },
    ],
  },
  {
    name: "Camus", category: "Cognac", country: "France", est: "1863",
    desc: "One of the last independent Cognac houses, known for VSOP.",
    products: [
      { name: "Camus VSOP Intensely Aromatic", type: "Cognac VSOP", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/camus-vsop-intensely-aromatic-40-0-7l-gb" },
    ],
  },

  // ── BRANDY ──
  {
    name: "Aivazovsky", category: "Brandy", country: "Armenia", est: "",
    desc: "Premium Armenian brandy — 3 star expression.",
    products: [
      { name: "Aivazovsky 3★ Brendijs", type: "Brandy", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/aivazovsky-3-brendijs-40-0-5l" },
    ],
  },
  {
    name: "Gocha Brandy Askaneli", category: "Brandy", country: "Georgia", est: "",
    desc: "Georgian brandy aged 3, 5, and 8 years.",
    products: [
      { name: "Gocha Brandy Askaneli 3 YO", type: "Brandy", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/gocha-brandy-askaneli-3-yo-40-0-5l" },
      { name: "Gocha Brandy Askaneli 5 YO", type: "Brandy", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/gocha-brandy-askaneli-5-yo-40-0-5l" },
      { name: "Gocha Brandy Askaneli 8 YO", type: "Brandy", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/gocha-brandy-askaneli-8-yo-40-0-5l" },
    ],
  },
  {
    name: "Handsa", category: "Brandy", country: "Ukraine", est: "",
    desc: "Organic rye brandy — unique Eastern European style.",
    products: [
      { name: "Handsa Organic Rye Brandy", type: "Rye Brandy", volume: "0.5L", abv: "63.2%", shopUrl: "https://www.alko.lv/products/handsa-organic-rye-brandy-63-2-0-5l" },
      { name: "Handsa Organic Rye Brandy", type: "Rye Brandy", volume: "0.5L", abv: "50%", shopUrl: "https://www.alko.lv/products/handsa-organic-rye-brandy-50-0-0-5l" },
      { name: "Handsa Organic Rye Brandy", type: "Rye Brandy", volume: "0.2L", abv: "63.2%", shopUrl: "https://www.alko.lv/products/handsa-organic-rye-brandy-63-2-0-2l" },
    ],
  },
  {
    name: "Castarede", category: "Brandy", country: "France", est: "",
    desc: "Historic Armagnac house — VSOP and XO expressions.",
    products: [
      { name: "Castarède V.S.O.P.", type: "Armagnac", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/castarede-vsop" },
      { name: "Castarède X.O.", type: "Armagnac", volume: "0.5L", abv: "40%", shopUrl: "https://www.alko.lv/products/castarede-xo" },
    ],
  },

  // ── LIQUEURS ──
  {
    name: "Lazzaroni", category: "Liqueurs", country: "Italy", est: "",
    desc: "Italian liqueur house — Amaretto, Limoncino, and more.",
    products: [
      { name: "Lazzaroni Amaretto", type: "Amaretto", volume: "0.5L", abv: "24%", shopUrl: "https://www.alko.lv/products/lazzaroni-amaretto-24-0-5l" },
      { name: "Lazzaroni Amaretto", type: "Amaretto", volume: "0.7L", abv: "24%", shopUrl: "https://www.alko.lv/products/lazzaroni-amaretto-24-0-7l" },
      { name: "Lazzaroni Limoncino", type: "Limoncello", volume: "0.5L", abv: "32%", shopUrl: "https://www.alko.lv/products/lazzaroni-limoncino-32-0-5l" },
      { name: "Lazzaroni Limoncino", type: "Limoncello", volume: "0.7L", abv: "32%", shopUrl: "https://www.alko.lv/products/lazzaroni-limoncino-32-0-7l" },
      { name: "Lazzaroni Triple Sec", type: "Liqueur", volume: "0.7L", abv: "38%", shopUrl: "https://www.alko.lv/products/lazzaroni-triple-sec-38-0-7l" },
      { name: "Lazzaroni Mela Verde Sour Apple", type: "Liqueur", volume: "0.5L", abv: "21%", shopUrl: "https://www.alko.lv/products/lazzaroni-mela-verde-sour-apple-21-0-5l" },
      { name: "Lazzaroni Aperitivo Happy Red", type: "Aperitivo", volume: "0.7L", abv: "11%", shopUrl: "https://www.alko.lv/products/lazzaroni-aperitivo-happy-red-11-0-7l" },
    ],
  },
  {
    name: "Aperol", category: "Liqueurs", country: "Italy", est: "",
    desc: "The iconic Italian aperitivo — essential for Spritz.",
    products: [
      { name: "Aperol", type: "Aperitivo", volume: "1L", abv: "11%", shopUrl: "https://www.alko.lv/products/aperol-11-1l" },
    ],
  },
  {
    name: "Kahlúa", category: "Liqueurs", country: "Mexico", est: "",
    desc: "World-famous coffee liqueur.",
    products: [
      { name: "Kahlúa Coffee Liqueur", type: "Coffee Liqueur", volume: "1L", abv: "16%", shopUrl: "https://www.alko.lv/products/kahlua-16-1l-1" },
    ],
  },
  {
    name: "Dubai Chocolate Pechery", category: "Liqueurs", country: "UAE", est: "",
    desc: "Chocolate liqueur with a Middle Eastern twist.",
    products: [
      { name: "Dubai Chocolate Pechery Liqueur", type: "Chocolate Liqueur", volume: "0.7L", abv: "17%", shopUrl: "https://www.alko.lv/products/dubai-chocolate-pechery-likieris-17-0-7l" },
    ],
  },
  {
    name: "Ancho Reyes", category: "Liqueurs", country: "Mexico", est: "",
    desc: "Ancho chile liqueur — bold and unique.",
    products: [
      { name: "Ancho Reyes Verde", type: "Chile Liqueur", volume: "0.7L", abv: "40%", shopUrl: "https://www.alko.lv/products/ancho-reyes-verde-40-0-7l" },
    ],
  },
  {
    name: "Passoa", category: "Liqueurs", country: "France", est: "",
    desc: "The Passion Drink — passion fruit liqueur for cocktails.",
    products: [
      { name: "Passoa The Passion Drink", type: "Passion Fruit Liqueur", volume: "0.7L", abv: "17%", shopUrl: "https://www.alko.lv/products/passoa-the-passion-drink-17-0-7l" },
    ],
  },
];

export const productCategories = [
  "Whisky", "Vodka", "Rum", "Gin", "Tequila", "Sake",
  "Red Wine", "White Wine", "Rosé Wine", "Champagne", "Prosecco",
  "Sparkling Wine", "Brandy", "Cognac", "Liqueurs",
] as const;

export const countries = [
  ...new Set(brands.map(b => b.country))
].sort() as string[];

export function getBrandsByCategory(category: string): Brand[] {
  return brands.filter(b => b.category === category);
}

export function getAllProducts() {
  return brands.flatMap(b =>
    (b.products || []).map(p => ({
      ...p,
      brand: b.name,
      brandCategory: b.category,
      country: b.country,
    }))
  );
}

export function getCategoryProductCount(category: string): number {
  return brands
    .filter(b => b.category === category)
    .reduce((sum, b) => sum + (b.products?.length || 1), 0);
}
