export interface Brand {
  name: string;
  category: string;
  country: string;
  est: string;
  desc: string;
  logo?: string;
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
  // ══════════════════════════════════════
  // ── CHAMPAGNE
  // ══════════════════════════════════════
  {
    name: "Duval-Leroy", category: "Champagne", country: "France", est: "1859",
    logo: "https://vesper.lv/uploads/file-1759354137593-78717973.png",
    desc: "Prestigious French Champagne house with organic vineyards and a woman-led vision.",
    products: [
      { name: "Duval-Leroy Brut Réserve", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Duval-Leroy Brut Réserve", type: "Champagne", volume: "0.375L", abv: "12%" },
      { name: "Duval-Leroy Rosé Prestige Premier Cru", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
      { name: "Duval-Leroy Blanc de Blancs Grand Cru Prestige", type: "Champagne", volume: "0.75L", abv: "12.5%" },
      { name: "Duval-Leroy Femme de Champagne Grand Cru", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Duval-Leroy Femme de Champagne Rosé de Saignée 2007", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Laurent Lequart", category: "Champagne", country: "France", est: "",
    desc: "Artisan grower Champagne from Festigny — Cœur de Cuvée Extra Brut and more.",
    products: [
      { name: "Laurent Lequart Cuvée Réserve Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Cuvée Réserve Brut Jéroboam", type: "Champagne", volume: "3L", abv: "12%" },
      { name: "Laurent Lequart Cuvée Réserve Demi Sec", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Blanc de Noirs Brut Nature", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart L'Héritière Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Blanc de Blanc Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Blanc de Meunier Brut Nature", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Rosé Blanche Andésyne Extra Brut", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Rosé Blanche Andésyne Brut", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Meunier Millésime 2019 Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Prestige Pur Meunier Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Saignée de Meunier Extra Brut", type: "Champagne Rosé", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Millésime 2015 Extra Brut", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Cœur de Cuvée Extra Brut +GB", type: "Champagne", volume: "0.75L", abv: "12%" },
      { name: "Laurent Lequart Prestige Pure Meunier Extra Brut Magnum +GB", type: "Champagne", volume: "1.5L", abv: "12%" },
    ],
  },

  // ══════════════════════════════════════
  // ── SPARKLING WINE / PROSECCO
  // ══════════════════════════════════════
  {
    name: "Sutto", category: "Prosecco", country: "Italy", est: "1933",
    logo: "https://vesper.lv/uploads/file-1759354346391-41266234.jpg",
    desc: "Family-run Prosecco and wine estate from Veneto.",
    products: [
      { name: "Sutto Prosecco DOC Brut", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "Sutto Prosecco DOC Extra Dry +GB Magnum", type: "Prosecco", volume: "1.5L", abv: "11%" },
      { name: "Sutto Prosecco Valdobbiadene DOCG Brut", type: "Prosecco", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Donna Gloria", category: "Prosecco", country: "Italy", est: "",
    desc: "Premium Prosecco from Tenute Piccini — Valdobbiadene DOCG and DOC.",
    products: [
      { name: "Donna Gloria Spumante Gran Cuvée", type: "Sparkling Wine", volume: "0.75L", abv: "11%" },
      { name: "Donna Gloria Prosecco Extra Dry DOC", type: "Prosecco", volume: "0.2L", abv: "11%" },
      { name: "Donna Gloria Prosecco Edizione Prima DOC", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "Donna Gloria Valdobbiadene Prosecco Superiore DOCG", type: "Prosecco", volume: "0.75L", abv: "11.5%" },
    ],
  },
  {
    name: "Tor Dell'Elmo", category: "Sparkling Wine", country: "Italy", est: "",
    desc: "Italian sparkling from Togni — Dolce and Brut expressions.",
    products: [
      { name: "Tor Dell'Elmo Dolce", type: "Sparkling Wine", volume: "0.75L", abv: "9.5%" },
      { name: "Tor Dell'Elmo Brut", type: "Sparkling Wine", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Maistral", category: "Prosecco", country: "Italy", est: "",
    desc: "Prosecco DOC — private label for The Artisan Spirits Box.",
    products: [
      { name: "Prosecco Maistral DOC Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "De Bernard", category: "Prosecco", country: "Italy", est: "1948",
    logo: "https://vesper.lv/uploads/file-1759442281388-781786605.jpg",
    desc: "Italian sparkling wine producer known for premium Prosecco DOC.",
    products: [
      { name: "De Bernard Cuvée Millesimato Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "De Bernard Cuvée Rosé Brut", type: "Prosecco Rosé", volume: "0.75L", abv: "11.5%" },
      { name: "De Bernard Prosecco DOC Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11%" },
      { name: "De Bernard Prosecco DOC Extra Dry", type: "Prosecco", volume: "0.2L", abv: "11%" },
      { name: "De Bernard Prosecco DOC Rosé Extra Dry", type: "Prosecco Rosé", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Rotari", category: "Sparkling Wine", country: "Italy", est: "1977",
    logo: "https://www.rotari.it/media/bnijnkmy/rotarilogo.png",
    desc: "Italian Trento DOC sparkling wine — Metodo Classico.",
    products: [
      { name: "Rotari Brut Platinum Classico", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Rotari Brut Classico", type: "Sparkling Wine", volume: "0.187L", abv: "12.5%" },
      { name: "Rotari Arte Italiana Metodo Classico", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Rotari Trento DOC Rosé", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
    ],
  },
  {
    name: "Bella Conchi", category: "Sparkling Wine", country: "Spain", est: "",
    desc: "Spanish Cava from Catalonia — Brut and Rosé expressions.",
    products: [
      { name: "Bella Conchi Brut", type: "Cava", volume: "0.75L", abv: "11.5%" },
      { name: "Bella Conchi Brut Rosé", type: "Cava Rosé", volume: "0.75L", abv: "11.5%" },
    ],
  },
  {
    name: "Frey Sohler", category: "Sparkling Wine", country: "France", est: "",
    desc: "Alsatian family winery — Crémant Riesling and still wines.",
    products: [
      { name: "Frey Sohler Crémant Riesling Alsace", type: "Crémant", volume: "0.75L", abv: "12%" },
      { name: "Frey Sohler Riesling AOC Alsace", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Frey Sohler Gewürztraminer Réserve AOC Alsace", type: "White Wine", volume: "0.75L", abv: "12.5%" },
    ],
  },
  {
    name: "Loire Propriétés", category: "Sparkling Wine", country: "France", est: "",
    desc: "Loire Valley wines — Crémant de Loire, Saumur, Vouvray, and more.",
    products: [
      { name: "Saumur AOC Demi-Sec Diamant de Loire", type: "Sparkling Wine", volume: "0.75L", abv: "12%" },
      { name: "Château de Mauny AOC Crémant de Loire Brut", type: "Crémant", volume: "0.75L", abv: "12.5%" },
      { name: "Château Dess Cosse AOC Crémant Loire Brut", type: "Crémant", volume: "0.75L", abv: "12.5%" },
      { name: "Château Dess Cosse AOC Crémant Loire Brut Rosé", type: "Crémant Rosé", volume: "0.75L", abv: "12.5%" },
      { name: "Château de Valmer AOC Vouvray Brut", type: "Sparkling Wine", volume: "0.75L", abv: "12.5%" },
    ],
  },
  {
    name: "Leo Hillinger", category: "Sparkling Wine", country: "Austria", est: "",
    desc: "Premium Austrian organic wines from Burgenland — whites, reds, rosé and sparkling.",
    products: [
      { name: "Hillinger Secco Rosé", type: "Sparkling Wine", volume: "0.75L", abv: "12%" },
      { name: "Hillinger Welschriesling Organic", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Hillinger Small HILL White", type: "White Wine", volume: "0.75L", abv: "11.5%" },
      { name: "Hillinger Grüner Veltliner Terroir Organic", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Hillinger Traminer Eiswein", type: "Sweet Wine", volume: "0.375L", abv: "8.5%" },
      { name: "Hillinger Small HILL Rosé", type: "Rosé Wine", volume: "0.75L", abv: "11.5%" },
      { name: "Hillinger Blaufränkisch Organic", type: "Red Wine", volume: "0.75L", abv: "12%" },
      { name: "Hillinger Zweigelt Organic", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Hillinger St. Laurent Organic", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Hillinger Blaufränkisch Leithaberg DAC Organic", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Hillinger Blaufränkisch Terroir Organic", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Pierre Chavin", category: "Sparkling Wine", country: "France", est: "",
    desc: "Non-alcoholic sparkling wines and still wines — Chavin Zero and Le Petit Chavin.",
    products: [
      { name: "Chavin Zero Chardonnay Sparkling", type: "Non-Alcoholic Sparkling", volume: "0.75L", abv: "0%" },
      { name: "Chavin Zero Chardonnay Sparkling", type: "Non-Alcoholic Sparkling", volume: "0.2L", abv: "0%" },
      { name: "Le Petit Chavin Chardonnay Sparkling", type: "Non-Alcoholic Sparkling", volume: "0.75L", abv: "0%" },
      { name: "Le Petit Chavin Rosé Sparkling", type: "Non-Alcoholic Sparkling", volume: "0.75L", abv: "0%" },
      { name: "Le Petit Chavin Chardonnay Still", type: "Non-Alcoholic Wine", volume: "0.75L", abv: "0%" },
      { name: "Le Petit Chavin Merlot Still", type: "Non-Alcoholic Wine", volume: "0.75L", abv: "0%" },
      { name: "Chavin Zero Sauvignon Blanc", type: "Non-Alcoholic Wine", volume: "0.75L", abv: "0%" },
    ],
  },

  // ══════════════════════════════════════
  // ── WHITE WINE
  // ══════════════════════════════════════
  {
    name: "Tiraki", category: "White Wine", country: "New Zealand", est: "",
    desc: "Marlborough wines — Sauvignon Blanc and Chardonnay.",
    products: [
      { name: "Tiraki Sauvignon Blanc Marlborough", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Tiraki Chardonnay", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Tiraki Pinot Noir", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Villa Hochdörffer", category: "White Wine", country: "Germany", est: "",
    desc: "German Riesling from the Pfalz region.",
    products: [
      { name: "Villa Hochdörffer Riesling Halbtrocken Kalkmergel", type: "White Wine", volume: "0.75L", abv: "11.5%" },
      { name: "Villa Hochdörffer Riesling Trocken", type: "White Wine", volume: "1L", abv: "11.5%" },
    ],
  },
  {
    name: "J. Meyer (Moselland)", category: "White Wine", country: "Germany", est: "",
    desc: "German wines from the Pfalz — Riesling and Gewürztraminer.",
    products: [
      { name: "J. Meyer Riesling Pfalz", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "J. Meyer Gewürztraminer Pfalz", type: "White Wine", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Tenuta Angoris", category: "White Wine", country: "Italy", est: "1648",
    logo: "https://vesper.lv/uploads/file-1759442408415-148984540.png",
    desc: "Historic Italian winery in Friuli Venezia Giulia — Pinot Grigio, Sauvignon, and Metodo Charmat.",
    products: [
      { name: "Villa Locatelli Pinot Grigio", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Villa Locatelli Pinot Grigio", type: "White Wine", volume: "0.375L", abv: "12.5%" },
      { name: "Villa Locatelli Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Angoris Sauvignon Blanc DOC Collio", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Angoris Spiule Chardonnay Riserva Giulio Locatelli DOC", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Angoris Collio Bianco Riserva Giulio Locatelli DOC", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Angoris Modolet Bianco Brut Metodo Charmat", type: "Sparkling Wine", volume: "0.75L", abv: "12%" },
      { name: "Angoris Albertina Pinot Noir", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Angoris Cabernet Sauvignon DOC Collio", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Angoris Ravost Merlot Riserva Giulio Locatelli DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Pignolo Riserva Giulio Locatelli DOC", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Tenuta Moraia", category: "Red Wine", country: "Italy", est: "",
    desc: "Tuscan estate from Tenute Piccini — Maremma Toscana Riserva.",
    products: [
      { name: "Tenuta Moraia Albus Maremma Toscana Riserva Bianco BIO", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Tenuta Moraia Vesper Maremma Toscana Riserva", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Tenuta Moraia Perpiero Toscana IGT", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Tenuta Moraia Apricaia Toscana IGT", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Bentu Luna", category: "Red Wine", country: "Italy", est: "",
    desc: "Sardinian wines — Vermentino and Mandrolisai DOC.",
    products: [
      { name: "Bentu Luna UNDA Vermentino DOC", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Bentu Luna MARI Red Mandrolisai DOC", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Castello di Buttrio", category: "White Wine", country: "Italy", est: "",
    desc: "Premium wines from Friuli Colli Orientali DOC.",
    products: [
      { name: "Castello di Buttrio Pinot Grigio DOC Friuli Colli Orientali", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Castello di Buttrio Ettaro Sauvignon Riserva DOC", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Castello di Buttrio Mon Rouge IGT Venezia Giulia", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Castello di Buttrio Merlot DOC Friuli Colli Orientali", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
    ],
  },
  {
    name: "Roberto Sarotto", category: "Red Wine", country: "Italy", est: "",
    desc: "Piedmontese winery — Barolo, Barbaresco, Barbera d'Asti, Moscato d'Asti.",
    products: [
      { name: "Roberto Sarotto Moscato d'Asti", type: "White Wine", volume: "0.75L", abv: "5%" },
      { name: "Roberto Sarotto Tenuta Manenti Aurora Gavi DOCG", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Roberto Sarotto Langhe Arneis", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Roberto Sarotto Bric Sassi Gavi del Comune di Gavi", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Roberto Sarotto Chardonnay", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Roberto Sarotto Barbera d'Asti DOCG", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Roberto Sarotto Barbera d'Asti Superiore", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Roberto Sarotto Barbera Elena la Luna D'Alba DOC", type: "Red Wine", volume: "0.75L", abv: "15.5%" },
      { name: "Roberto Sarotto Langhe DOC Nebbiolo", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Roberto Sarotto Barbaresco Curra", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Roberto Sarotto Barbaresco Riserva DOCG", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Roberto Sarotto Barolo DOCG", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Roberto Sarotto Barolo Riserva DOCG", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Roberto Sarotto Barolo Audace", type: "Red Wine", volume: "0.75L", abv: "16%" },
      { name: "Roberto Sarotto Grappa di Moscato", type: "Grappa", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Cantine Lento", category: "White Wine", country: "Italy", est: "",
    desc: "Calabrian winery — Greco di Lamezia and Dragone Selezione.",
    products: [
      { name: "Cantine Lento Greco Lamezia", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Calabria Dragone Selezione Bianco", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Calabria Dragone Selezione Rosso", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Forte Alto", category: "White Wine", country: "Italy", est: "1999",
    desc: "Modern Italian wines from Trentino — Pinot Grigio, Merlot, Teroldego.",
    products: [
      { name: "Forte Alto Pinot Grigio Vigneti delle Dolomiti IGT", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Forte Alto Pinot Grigio Rosé Vigneti delle Dolomiti IGT", type: "Rosé Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Forte Alto Teroldego Vigneti delle Dolomiti IGT", type: "Red Wine", volume: "0.75L", abv: "12%" },
      { name: "Forte Alto Merlot Vigneti delle Dolomiti IGT", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Forte Alto Red Blend Vigneti delle Dolomiti IGT", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Feudo Arancio", category: "Red Wine", country: "Italy", est: "",
    desc: "Sicilian winery producing excellent DOC wines across many grape varieties.",
    products: [
      { name: "Feudo Arancio Grillo Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Feudo Arancio Chardonnay Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Pinot Grigio Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Feudo Arancio Tinchité Grillo Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Feudo Arancio Inzolia Sicilia IGT", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Feudo Arancio Dalila Sicilia DOC", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Feudo Arancio Tinchité Frappato Rosé Terre Siciliane IGT", type: "Rosé Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Rosato Terre Siciliane IGT", type: "Rosé Wine", volume: "0.75L", abv: "12%" },
      { name: "Feudo Arancio Syrah Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Merlot Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Cabernet Sauvignon Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Nero d'Avola Sicilia", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Feudo Arancio Passiari Appassimento", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Feudo Arancio Cantodoro Sicilia DOC", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Cantore di Castelforte", category: "Red Wine", country: "Italy", est: "",
    desc: "Puglia wines — Primitivo Salento IGT and Primitivo di Manduria DOC.",
    products: [
      { name: "Castelforte Chardonnay Salento IGT", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Castelforte Primitivo Salento IGT Masserie Centonze", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Castelforte Primitivo di Manduria DOC Donna Maria", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "La Colline aux Princes", category: "White Wine", country: "France", est: "",
    desc: "Loire Valley — Pouilly-Fumé and Sancerre AOC.",
    products: [
      { name: "La Colline aux Princes AOC Pouilly-Fumé", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "La Colline aux Princes AOC Sancerre", type: "White Wine", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Inwinectus (AdViNi)", category: "Red Wine", country: "France", est: "",
    desc: "Languedoc wines — Pays d'Oc IGP varietal range.",
    products: [
      { name: "Inwinectus Chardonnay", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Inwinectus Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Inwinectus Merlot", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Inwinectus Syrah", type: "Red Wine", volume: "0.75L", abv: "13%" },
    ],
  },
  {
    name: "Borie Manoux (Bordeaux)", category: "Red Wine", country: "France", est: "",
    desc: "Prestigious Bordeaux négociant — Châteaux from Pauillac to Saint-Émilion.",
    products: [
      { name: "Beau-Rivage AOC Bordeaux Rouge", type: "Red Wine", volume: "0.187L", abv: "13%" },
      { name: "Château du Pin Blanc Bordeaux", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Château Canteloup Rouge", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Mont Pérat Bordeaux Rouge", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Sénejac Haut-Médoc", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Haut Madrac Haut-Médoc", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Cantemerle Haut-Médoc", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Grand-Puy-Lacoste Lacoste-Borie Pauillac", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Fleur de Pédesclaux Pauillac", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Teyssier Saint-Émilion Grand Cru", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Fonbel Saint-Émilion", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château De Ferrand Saint-Émilion", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château D'Issan Margaux", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Pontac Lynch Margaux", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Ferrière Margaux", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Domaine de Chevalier L'Esprit Pessac-Léognan", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Lalande Borie Saint-Julien", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Lagrange Saint-Julien", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Talbot Saint-Julien", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Gloria Saint-Julien", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Beau-Site Saint-Estèphe", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Clinet Pomerol", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Château Nénin Pomerol", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Château Gazin Pomerol", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Peyrassol", category: "Rosé Wine", country: "France", est: "",
    desc: "Prestigious Côtes de Provence rosé estate — Cuvée des Commandeurs, Château, and Le Clos.",
    products: [
      { name: "Peyrassol Cuvée les Commandeurs Côtes de Provence", type: "Rosé Wine", volume: "0.75L", abv: "13%" },
      { name: "Peyrassol Château Rosé AOC Côtes de Provence", type: "Rosé Wine", volume: "0.75L", abv: "13%" },
      { name: "Peyrassol Le Clos Rosé Côtes de Provence", type: "Rosé Wine", volume: "0.75L", abv: "13%" },
    ],
  },
  {
    name: "Woodhaven (Delicato)", category: "Red Wine", country: "USA", est: "",
    desc: "California wines from Delicato Family — Chardonnay, Cabernet, Zinfandel.",
    products: [
      { name: "Woodhaven Chardonnay", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Woodhaven Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Woodhaven Zinfandel", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Noble Vines (Delicato)", category: "Red Wine", country: "USA", est: "",
    desc: "Premium Napa Valley wines — Chardonnay, Cabernet, Pinot Noir.",
    products: [
      { name: "Noble Vines 446 Chardonnay", type: "White Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Noble Vines 337 Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Noble Vines 667 Pinot Noir", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Noble Vines Red Blend", type: "Red Wine", volume: "0.75L", abv: "14%" },
    ],
  },
  {
    name: "Brazin (Delicato)", category: "Red Wine", country: "USA", est: "",
    desc: "Old Vine Zinfandel from Lodi, California.",
    products: [
      { name: "Brazin Old Vine Zinfandel Lodi", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "The Federalist", category: "Red Wine", country: "USA", est: "",
    desc: "California wines from Terlato — Cabernet, Zinfandel, BBA.",
    products: [
      { name: "Steep Ridge Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "The Federalist 1776 Cabernet Sauvignon Lodi", type: "Red Wine", volume: "0.75L", abv: "14.9%" },
      { name: "The Federalist 1776 Zinfandel Lodi", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Federalist BBA Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Federalist Chardonnay Mendocino", type: "White Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Synthesis", category: "Red Wine", country: "USA", est: "",
    desc: "Napa Valley Cabernet Sauvignon.",
    products: [
      { name: "Synthesis Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Villa Spinosa", category: "Red Wine", country: "Italy", est: "",
    desc: "Valpolicella — Classico, Ripasso, and Amarone DOCG.",
    products: [
      { name: "Villa Spinosa Valpolicella Classico DOC", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Villa Spinosa Valpolicella Classico Superiore Figari", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Villa Spinosa Valpolicella Ripasso Classico Superiore Jago", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Villa Spinosa Amarone della Valpolicella DOCG", type: "Red Wine", volume: "0.75L", abv: "16.5%" },
      { name: "Villa Spinosa Amarone Albasini della Valpolicella Classico DOCG", type: "Red Wine", volume: "0.75L", abv: "16%" },
    ],
  },
  {
    name: "Geografico", category: "Red Wine", country: "Italy", est: "",
    desc: "Tuscan wines — Chianti DOCG, Brunello di Montalcino, Bolgheri.",
    products: [
      { name: "Chianti DOCG Geografico Rombo", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Chianti Colli Senesi DOCG Geografico", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Chianti Riserva DOCG Borgo alla Terra", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "La Pevera Rosso Toscano IGT", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Brunello di Montalcino DOCG Corte dei Pazzi Sellaio", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Bolgheri DOC Corte dei Pazzi Sellaio", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Quinta Quietud", category: "Red Wine", country: "Spain", est: "",
    desc: "Premium Toro DO wines — La Mula de la Quietud.",
    products: [
      { name: "La Mula de la Quietud", type: "Red Wine", volume: "0.75L", abv: "15%" },
      { name: "La Mula de la Quietud Magnum + Wooden Box", type: "Red Wine", volume: "1.5L", abv: "15%" },
    ],
  },
  {
    name: "Domaine Bousquet", category: "Red Wine", country: "Argentina", est: "",
    desc: "Organic Argentine winery producing premium Malbec from Mendoza.",
    products: [
      { name: "Domaine Bousquet Chardonnay", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Domaine Bousquet Malbec", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Domaine Bousquet Malbec Reserva", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Caleuche (Viña Aromo)", category: "Red Wine", country: "Chile", est: "",
    desc: "Chilean wines from Maule Valley — Cabernet, Carménère, Chardonnay, Sauvignon Blanc.",
    products: [
      { name: "Caleuche Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Caleuche Chardonnay", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Caleuche Reserve Chardonnay", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Caleuche Reserve Sauvignon Blanc", type: "White Wine", volume: "0.75L", abv: "13%" },
      { name: "Caleuche Family Collection Chardonnay", type: "White Wine", volume: "0.75L", abv: "14%" },
      { name: "Caleuche Cabernet Sauvignon", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
      { name: "Caleuche Carménère", type: "Red Wine", volume: "0.75L", abv: "13%" },
      { name: "Caleuche Reserve Carménère", type: "Red Wine", volume: "0.75L", abv: "14%" },
      { name: "Caleuche Family Collection Red Blend", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Telurico", category: "Red Wine", country: "Chile", est: "",
    desc: "Chilean Carignan from Maule Valley.",
    products: [
      { name: "Telurico Carignan Red", type: "Red Wine", volume: "0.75L", abv: "15%" },
    ],
  },
  {
    name: "Gocha (Askaneli Brothers)", category: "Red Wine", country: "Georgia", est: "",
    desc: "Georgian wines and brandies from Kakheti — Saperavi, Kindzmarauli, Tsinandali.",
    products: [
      { name: "Gocha Alazani Valley White Semi Sweet", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Gocha Kakheti Valley White Semi Sweet", type: "White Wine", volume: "0.75L", abv: "12%" },
      { name: "Gocha Tsinandali Dry White", type: "White Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Gocha Alazani Valley Red Semi Sweet", type: "Red Wine", volume: "0.75L", abv: "12%" },
      { name: "Gocha Kakheti Valley Red Semi Sweet", type: "Red Wine", volume: "0.75L", abv: "12%" },
      { name: "Gocha Saperavi Red Dry", type: "Red Wine", volume: "0.75L", abv: "12.5%" },
      { name: "Gocha Kindzmarauli Red Semi Sweet", type: "Red Wine", volume: "0.75L", abv: "12%" },
    ],
  },
  {
    name: "Hesketh", category: "Red Wine", country: "Australia", est: "",
    desc: "Australian wine — Great Australian Red blend.",
    products: [
      { name: "Hesketh Great Australian Red", type: "Red Wine", volume: "0.75L", abv: "13.5%" },
    ],
  },
  {
    name: "Parker Estate", category: "Red Wine", country: "Australia", est: "",
    desc: "Australian premium Cabernet — First Growth.",
    products: [
      { name: "Parker Estate First Growth Cabernet", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
    ],
  },
  {
    name: "Quinta da Corte", category: "Red Wine", country: "Portugal", est: "",
    desc: "Douro wines and Port — Reserva, LBV, Tawny 10/20 years.",
    products: [
      { name: "Quinta da Corte Princesa Reserva DOC Douro", type: "Red Wine", volume: "0.75L", abv: "14.5%" },
      { name: "Porto Quinta da Corte LBV +GB", type: "Port Wine", volume: "0.75L", abv: "19.5%" },
      { name: "Porto Quinta da Corte Tawny 10 Years +GB", type: "Port Wine", volume: "0.75L", abv: "19%" },
      { name: "Porto Quinta da Corte Tawny 20 Years +GB", type: "Port Wine", volume: "0.75L", abv: "20%" },
      { name: "Porto Quinta da Corte Vintage 2020 +GB", type: "Port Wine", volume: "0.75L", abv: "19.5%" },
    ],
  },

  // ══════════════════════════════════════
  // ── RUM
  // ══════════════════════════════════════
  {
    name: "Colonist", category: "Rum", country: "Belgium", est: "",
    desc: "Premium rum — White, Dark, Spiced Black, and Reserva.",
    products: [
      { name: "Colonist Premium Rum White", type: "White Rum", volume: "0.7L", abv: "40%" },
      { name: "Colonist Premium Rum Dark", type: "Dark Rum", volume: "0.7L", abv: "40%" },
      { name: "Colonist Premium Rum Spiced Black", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Colonist Rum Spiced Black 1st Man in Space", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Colonist Premium Rum Reserva", type: "Aged Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Dad Joke", category: "Rum", country: "Belgium", est: "",
    desc: "Spiced rum and Prosecco brand with playful personality.",
    products: [
      { name: "Dad Joke Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Dad Joke Ananas Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Dad Joke Coconut Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Dad Joke Salted Caramel & Banana Spiced Rum", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Dad Joke Prosecco DOC Extra Dry", type: "Prosecco", volume: "0.75L", abv: "11%" },
    ],
  },
  {
    name: "Hampden", category: "Rum", country: "Jamaica", est: "",
    desc: "Legendary Jamaican rum distillery — overproof and aged expressions.",
    products: [
      { name: "Hampden Overproof +GB", type: "Overproof Rum", volume: "0.7L", abv: "60%" },
      { name: "Hampden +GB", type: "Rum", volume: "0.7L", abv: "46%" },
      { name: "Hampden 8 ans", type: "Aged Rum", volume: "0.7L", abv: "46%" },
    ],
  },
  {
    name: "Mhoba", category: "Rum", country: "South Africa", est: "",
    desc: "South African sugarcane rum — Bushfire, Pineapple, Select Release.",
    products: [
      { name: "Mhoba Bushfire", type: "Rum", volume: "0.7L", abv: "55%" },
      { name: "Mhoba Franky's Pineapple", type: "Rum", volume: "0.7L", abv: "43%" },
      { name: "Mhoba Select Release White", type: "White Rum", volume: "0.7L", abv: "58%" },
    ],
  },
  {
    name: "Neisson", category: "Rum", country: "Martinique", est: "",
    desc: "Premium Martinique rhum agricole — Bio and Le Vieux.",
    products: [
      { name: "Neisson Le Rhum Bio", type: "Rhum Agricole", volume: "0.7L", abv: "52.5%" },
      { name: "Neisson Le Rhum par Neisson", type: "Rhum Agricole", volume: "0.7L", abv: "52.5%" },
      { name: "Neisson Profil 105", type: "Rhum Agricole", volume: "0.7L", abv: "54.2%" },
      { name: "Neisson Le Vieux par Neisson", type: "Aged Rhum", volume: "0.7L", abv: "45%" },
    ],
  },
  {
    name: "Canoubier", category: "Rum", country: "France", est: "",
    desc: "Caribbean rum bottled in France — Barbados, Trinidad, Guadeloupe.",
    products: [
      { name: "Canoubier Barbade Rum", type: "Rum", volume: "0.7L", abv: "40%" },
      { name: "Canoubier Trinidad Rum", type: "Rum", volume: "0.7L", abv: "40%" },
      { name: "Canoubier Guadeloupe Dark", type: "Dark Rum", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Black Tears", category: "Rum", country: "Cuba", est: "",
    desc: "Cuban Dry Spiced Rum by Vigia — distinctive character and bold flavor.",
    products: [
      { name: "Black Tears Dry Spiced", type: "Spiced Rum", volume: "0.7L", abv: "40%" },
      { name: "Black Tears Dry Spiced", type: "Spiced Rum", volume: "1L", abv: "40%" },
      { name: "Black Tears Aguardiente", type: "Aguardiente", volume: "0.7L", abv: "40%" },
      { name: "Black Tears Super Dry White Rum", type: "White Rum", volume: "0.7L", abv: "40%" },
      { name: "Black Tears Roble Superior Gold Rum", type: "Gold Rum", volume: "0.7L", abv: "40%" },
      { name: "La Progresiva Mezcla 13 Premium Aged +GB", type: "Aged Rum", volume: "0.7L", abv: "41%" },
      { name: "La Progresiva Mezcla 8 LE Premium Aged", type: "Aged Rum", volume: "0.7L", abv: "41%" },
    ],
  },
  {
    name: "Transcontinental Rum Line (TCRL)", category: "Rum", country: "France", est: "",
    desc: "Single-cask rum bottlings from across the Caribbean and beyond.",
    products: [
      { name: "Night Rambler TCRL", type: "Blended Rum", volume: "0.7L", abv: "42%" },
      { name: "Flying King TCRL", type: "Blended Rum", volume: "0.7L", abv: "42%" },
      { name: "Nicaragua 2004 Coffret 2 Verres TCRL +GB", type: "Aged Rum", volume: "0.7L", abv: "43%" },
      { name: "Panama 6 ans 2015 TCRL +GB", type: "Aged Rum", volume: "0.7L", abv: "43%" },
      { name: "Jamaica 2016 TCRL +GB", type: "Rum", volume: "0.7L", abv: "57.2%" },
      { name: "Australia 7 ans 2014 TCRL +GB", type: "Rum", volume: "0.7L", abv: "48%" },
    ],
  },
  {
    name: "Papalin", category: "Rum", country: "Jamaica", est: "",
    desc: "Jamaican high-ester rum with serious character.",
    products: [
      { name: "Papalin 5 ans Jamaica High Ester", type: "Rum", volume: "0.7L", abv: "47%" },
      { name: "Papalin 5 ans Jamaica High Ester Overproof", type: "Overproof Rum", volume: "0.7L", abv: "47%" },
    ],
  },
  {
    name: "Veritas", category: "Rum", country: "Barbados", est: "",
    desc: "Barbadian rum — pure and authentic.",
    products: [
      { name: "Veritas Rum", type: "Rum", volume: "0.7L", abv: "47%" },
    ],
  },
  {
    name: "Clairin", category: "Rum", country: "Haiti", est: "",
    desc: "Haitian clairin — raw, unaged cane spirit from small distillers.",
    products: [
      { name: "Clairin Sonson", type: "Clairin", volume: "0.7L", abv: "51.1%" },
      { name: "Clairin Casimir", type: "Clairin", volume: "0.7L", abv: "53.3%" },
      { name: "Clairin Sajous", type: "Clairin", volume: "0.7L", abv: "56.4%" },
      { name: "Providence 3 ans 2020", type: "Aged Clairin", volume: "0.7L", abv: "52%" },
      { name: "Vieux Sajous 5 ans 2019 Haiti", type: "Aged Clairin", volume: "0.7L", abv: "58.3%" },
    ],
  },

  // ══════════════════════════════════════
  // ── WHISKY
  // ══════════════════════════════════════
  {
    name: "Moonshine Runners", category: "Whisky", country: "Belgium", est: "",
    desc: "Blended whiskeys from America, Scotland, and Canada.",
    products: [
      { name: "Moonshine Runners Blended American Whisky", type: "Blended Whiskey", volume: "0.7L", abv: "40%" },
      { name: "Moonshine Runners Blended Canadian Whisky", type: "Canadian Whisky", volume: "0.7L", abv: "40%" },
      { name: "Moonshine Runners Blended Scotch Whisky", type: "Scotch", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Bandwagon", category: "Whisky", country: "Belgium", est: "",
    desc: "Straight Bourbon whiskey.",
    products: [
      { name: "Bandwagon Straight Bourbon Original Whisky", type: "Bourbon", volume: "0.7L", abv: "41.3%" },
    ],
  },
  {
    name: "Kentucky Jack", category: "Whisky", country: "USA", est: "",
    desc: "American bourbon — Original and Black Edition.",
    products: [
      { name: "Kentucky Jack Original Bourbon", type: "Bourbon", volume: "0.7L", abv: "40%" },
      { name: "Kentucky Jack Black Edition Bourbon", type: "Bourbon", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Bowsaw", category: "Whisky", country: "USA", est: "",
    desc: "American whiskey — Rye and Bourbon expressions.",
    products: [
      { name: "Bowsaw Rye Straight American Whiskey", type: "Rye Whiskey", volume: "0.7L", abv: "40%" },
      { name: "Bowsaw 100% Straight American Bourbon", type: "Bourbon", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Back to Black", category: "Whisky", country: "Belgium", est: "",
    desc: "Blended Scotch and Irish whisky.",
    products: [
      { name: "Back to Black Blended Scotch Whisky", type: "Scotch", volume: "0.7L", abv: "40%" },
      { name: "Back to Black Blended Irish Whisky", type: "Irish Whiskey", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Born Irish", category: "Whisky", country: "Ireland", est: "",
    desc: "Irish whiskey.",
    products: [
      { name: "Born Irish Whiskey", type: "Irish Whiskey", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Glen Mansion", category: "Whisky", country: "UK", est: "",
    desc: "Blended Scotch whisky — private label.",
    products: [
      { name: "Glen Mansion Blended Scotch Whisky", type: "Scotch", volume: "0.7L", abv: "40%" },
      { name: "Glen Mansion Blended Scotch Whisky", type: "Scotch", volume: "1L", abv: "40%" },
    ],
  },
  {
    name: "Broody Hen", category: "Whisky", country: "UK", est: "",
    desc: "Scottish whisky — Blended and 10 Year Single Malt.",
    products: [
      { name: "Broody Hen Blended Scotch Whisky", type: "Scotch", volume: "0.7L", abv: "40%" },
      { name: "Broody Hen 10 Years Single Malt Scotch", type: "Single Malt", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "The New Zealand Whisky", category: "Whisky", country: "New Zealand", est: "",
    desc: "Rare whisky from New Zealand — Diggers & Ditch and aged expressions.",
    products: [
      { name: "NZ Whisky 18 ans Dunedin Double Wood", type: "Whisky", volume: "0.5L", abv: "40%" },
      { name: "NZ Whisky Diggers & Ditch", type: "Whisky", volume: "0.5L", abv: "45%" },
      { name: "NZ Whisky 21 ans High Wheeler", type: "Whisky", volume: "0.35L", abv: "43%" },
    ],
  },
  {
    name: "Hellyers Road", category: "Whisky", country: "Australia", est: "",
    desc: "Tasmanian single malt whisky — Peated, Pinot Noir cask, and aged expressions.",
    products: [
      { name: "Hellyers Road Pinot Noir +GB", type: "Single Malt", volume: "0.7L", abv: "46.2%" },
      { name: "Hellyers Road Peated +GB", type: "Single Malt", volume: "0.7L", abv: "46.2%" },
      { name: "Hellyers Road Twin Oak", type: "Single Malt", volume: "0.7L", abv: "48.9%" },
      { name: "Hellyers Road 12 ans Original", type: "Single Malt", volume: "0.7L", abv: "46.2%" },
    ],
  },
  {
    name: "Mackmyra", category: "Whisky", country: "Sweden", est: "",
    desc: "Swedish whisky — Brukswhisky, Svensk Ek, Svensk Rök, Björksav.",
    products: [
      { name: "Mackmyra Brukswhisky +GB", type: "Swedish Whisky", volume: "0.7L", abv: "41.4%" },
      { name: "Mackmyra Svensk Ek +GB", type: "Swedish Whisky", volume: "0.7L", abv: "46.1%" },
      { name: "Mackmyra Svensk Rök +GB", type: "Swedish Whisky", volume: "0.7L", abv: "46.1%" },
      { name: "Mackmyra Björksav +GB", type: "Swedish Whisky", volume: "0.7L", abv: "46.1%" },
    ],
  },
  {
    name: "Mars", category: "Whisky", country: "Japan", est: "",
    desc: "Japanese whisky distillery — Mars Kasei, Mars Cosmo, and Komagatake series.",
    products: [
      { name: "Mars Kasei +GB", type: "Japanese Whisky", volume: "0.7L", abv: "40%" },
      { name: "Mars Cosmo +GB", type: "Japanese Whisky", volume: "0.7L", abv: "43%" },
      { name: "Mars Cosmo Wine Cask Finish", type: "Japanese Whisky", volume: "0.7L", abv: "43%" },
      { name: "Mars Tsunuki Peated", type: "Japanese Whisky", volume: "0.7L", abv: "50%" },
      { name: "Mars Wa Bi Gin +GB", type: "Gin", volume: "0.7L", abv: "45%" },
    ],
  },
  {
    name: "Ichiro's Malt", category: "Whisky", country: "Japan", est: "",
    desc: "Prestigious Japanese whisky — Malt & Grain.",
    products: [
      { name: "Ichiro's Malt & Grain", type: "Japanese Whisky", volume: "0.7L", abv: "46.5%" },
    ],
  },
  {
    name: "Amrut", category: "Whisky", country: "India", est: "",
    desc: "Award-winning Indian single malt whisky — many expressions.",
    products: [
      { name: "Amrut Raj Igala +GB", type: "Indian Whisky", volume: "0.7L", abv: "40%" },
      { name: "Amrut Indian Single Malt +GB", type: "Single Malt", volume: "0.7L", abv: "46%" },
      { name: "Amrut Peated +GB", type: "Single Malt", volume: "0.7L", abv: "46%" },
      { name: "Amrut Fusion +GB", type: "Single Malt", volume: "0.7L", abv: "50%" },
      { name: "Amrut Cask Strength +GB", type: "Single Malt", volume: "0.7L", abv: "61.8%" },
      { name: "Amrut Peated Cask Strength +GB", type: "Single Malt", volume: "0.7L", abv: "62.8%" },
      { name: "Amrut Bagheera", type: "Single Malt", volume: "0.7L", abv: "46%" },
      { name: "Amrut Naarangi", type: "Single Malt", volume: "0.7L", abv: "50%" },
      { name: "Amrut Triparva Triple Distilled", type: "Single Malt", volume: "0.7L", abv: "50%" },
      { name: "Amrut Neidhal", type: "Single Malt", volume: "0.7L", abv: "46%" },
      { name: "Amrut Two Indies Rum", type: "Rum", volume: "0.7L", abv: "42.8%" },
    ],
  },
  {
    name: "Compass Box", category: "Whisky", country: "UK", est: "2000",
    desc: "Artisan Scotch whisky blender — The Peat Monster, Orchard House, Hedonism, and many limited editions.",
    products: [
      { name: "Compass Box Great King Artist Blend", type: "Blended Scotch", volume: "0.7L", abv: "43%" },
      { name: "Compass Box Great King Glasgow Blend", type: "Blended Scotch", volume: "0.7L", abv: "43%" },
      { name: "Compass Box Orchard House", type: "Blended Malt", volume: "0.7L", abv: "46%" },
      { name: "Compass Box The Peat Monster", type: "Blended Malt", volume: "0.7L", abv: "46%" },
      { name: "Compass Box The Story of the Spaniard", type: "Blended Malt", volume: "0.7L", abv: "43%" },
      { name: "Compass Box Spice Tree Coffret 2 Verres", type: "Blended Malt", volume: "0.7L", abv: "46%" },
      { name: "Compass Box Nectarosity", type: "Blended Malt", volume: "0.7L", abv: "46%" },
      { name: "Compass Box Crimson Casks", type: "Blended Malt", volume: "0.7L", abv: "46%" },
      { name: "Compass Box Hedonism +GB", type: "Blended Grain", volume: "0.7L", abv: "43%" },
      { name: "Compass Box Celestial +GB", type: "Blended Malt", volume: "0.7L", abv: "50%" },
      { name: "Compass Box Flaming Heart 7th Edition", type: "Blended Malt", volume: "0.7L", abv: "48.9%" },
      { name: "Compass Box Secret of Smoke", type: "Blended Malt", volume: "0.7L", abv: "52%" },
    ],
  },
  {
    name: "Proper No. Twelve", category: "Whisky", country: "Ireland", est: "",
    desc: "Conor McGregor's Irish whiskey — Original and Apple.",
    products: [
      { name: "Proper No. Twelve Irish Whiskey", type: "Irish Whiskey", volume: "0.7L", abv: "40%" },
      { name: "Proper No. Twelve Irish Whiskey", type: "Irish Whiskey", volume: "1L", abv: "40%" },
      { name: "Proper No. Twelve Irish Apple Whiskey", type: "Irish Whiskey", volume: "0.7L", abv: "35%" },
    ],
  },

  // ══════════════════════════════════════
  // ── GIN
  // ══════════════════════════════════════
  {
    name: "Strange Luve", category: "Gin", country: "Belgium", est: "",
    desc: "Craft gin — London Dry, Pink, and Quince expressions.",
    products: [
      { name: "Strange Luve London Dry Gin", type: "London Dry Gin", volume: "0.7L", abv: "40%" },
      { name: "Strange Luve London Dry Pink Gin", type: "Pink Gin", volume: "0.7L", abv: "40%" },
      { name: "Strange Luve Quince Gin", type: "Flavored Gin", volume: "0.7L", abv: "40%" },
      { name: "Strange Luve Negroni Cocktail", type: "Ready-to-Drink", volume: "0.7L", abv: "27%" },
    ],
  },
  {
    name: "UMAMi Gin", category: "Gin", country: "France", est: "",
    desc: "Craft gin with umami character — Distillerie des Moisans.",
    products: [
      { name: "UMAMi Gin", type: "Gin", volume: "0.5L", abv: "42%" },
    ],
  },

  // ══════════════════════════════════════
  // ── VODKA
  // ══════════════════════════════════════
  {
    name: "Fly", category: "Vodka", country: "Ukraine", est: "",
    desc: "Premium vodka — Fly Superior.",
    products: [
      { name: "Fly Vodka Superior", type: "Vodka", volume: "1L", abv: "40%" },
      { name: "Fly Vodka Superior +GB", type: "Vodka Gift Box", volume: "1L", abv: "40%" },
    ],
  },
  {
    name: "Ice Palace", category: "Vodka", country: "Ukraine", est: "",
    desc: "Premium vodka brand with Cranberry expression.",
    products: [
      { name: "Ice Palace Vodka", type: "Vodka", volume: "1L", abv: "40%" },
      { name: "Ice Palace Vodka", type: "Vodka", volume: "0.7L", abv: "40%" },
      { name: "Ice Palace Vodka", type: "Vodka", volume: "0.5L", abv: "40%" },
      { name: "Ice Palace Vodka +GB", type: "Vodka Gift Box", volume: "1L", abv: "40%" },
      { name: "Ice Palace Cranberry Vodka", type: "Flavored Vodka", volume: "0.5L", abv: "40%" },
      { name: "Ice Palace Cranberry Vodka", type: "Flavored Vodka", volume: "1L", abv: "40%" },
    ],
  },
  {
    name: "Tovaritch", category: "Vodka", country: "Switzerland", est: "",
    desc: "Premium vodka.",
    products: [
      { name: "Tovaritch Vodka", type: "Vodka", volume: "0.7L", abv: "40%" },
      { name: "Tovaritch Vodka", type: "Vodka", volume: "1L", abv: "40%" },
      { name: "Tovaritch Vodka", type: "Vodka", volume: "0.2L", abv: "37.5%" },
    ],
  },

  // ══════════════════════════════════════
  // ── TEQUILA & MEZCAL
  // ══════════════════════════════════════
  {
    name: "Dos Compañeros", category: "Tequila", country: "Mexico", est: "",
    desc: "Mexican tequila — Gold and Silver.",
    products: [
      { name: "Dos Compañeros Silver", type: "Tequila Silver", volume: "0.7L", abv: "38%" },
      { name: "Dos Compañeros Gold", type: "Tequila Gold", volume: "0.7L", abv: "38%" },
    ],
  },
  {
    name: "Don Fulano", category: "Tequila", country: "Mexico", est: "",
    desc: "Premium artisanal tequila from Jalisco highlands.",
    products: [
      { name: "Don Fulano Blanco", type: "Tequila Blanco", volume: "0.7L", abv: "40%" },
      { name: "Don Fulano Reposado", type: "Tequila Reposado", volume: "0.7L", abv: "40%" },
      { name: "Don Fulano Blanco Fuerte", type: "Tequila Blanco", volume: "0.7L", abv: "50%" },
      { name: "Don Fulano Imperial Decanter", type: "Tequila Añejo", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Derrumbes", category: "Tequila", country: "Mexico", est: "",
    desc: "Artisanal mezcal from different terroirs — Oaxaca, San Luis, Michoacán.",
    products: [
      { name: "Derrumbes N.1 Oaxaca", type: "Mezcal", volume: "0.7L", abv: "47.5%" },
      { name: "Derrumbes N.3 San Luis", type: "Mezcal", volume: "0.7L", abv: "44.4%" },
      { name: "Derrumbes N.2 Michoacán", type: "Mezcal", volume: "0.7L", abv: "49.3%" },
    ],
  },
  {
    name: "Nucano", category: "Tequila", country: "Mexico", est: "",
    desc: "Artisanal Oaxacan mezcal — Espadín and Tobalá.",
    products: [
      { name: "Nucano Espadín Joven Mezcal", type: "Mezcal", volume: "0.7L", abv: "45%" },
      { name: "Nucano Espadín Reposado Mezcal", type: "Mezcal", volume: "0.7L", abv: "40%" },
      { name: "Nucano Tobalá Joven Mezcal", type: "Mezcal", volume: "0.7L", abv: "44.2%" },
    ],
  },

  // ══════════════════════════════════════
  // ── SAKE
  // ══════════════════════════════════════
  {
    name: "Dassai", category: "Sake", country: "Japan", est: "",
    desc: "World-renowned premium Japanese sake, crafted from Yamada Nishiki rice.",
    products: [
      { name: "Dassai 23 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 39 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 45 Junmai Daiginjo", type: "Sake", volume: "0.72L", abv: "16%" },
      { name: "Dassai 45 Junmai Daiginjo", type: "Sake", volume: "0.3L", abv: "15%" },
    ],
  },
  {
    name: "Bijito", category: "Sake", country: "Japan", est: "",
    desc: "Japanese sake — Junmai and Junmai Ginjo.",
    products: [
      { name: "Bijito Junmai", type: "Sake", volume: "0.72L", abv: "14.5%" },
      { name: "Bijito Junmai Ginjo", type: "Sake", volume: "0.72L", abv: "14.5%" },
    ],
  },
  {
    name: "Miyako", category: "Sake", country: "Japan", est: "",
    desc: "Japanese Nihonshu saké.",
    products: [
      { name: "Miyako Nihonshu Saké", type: "Sake", volume: "0.72L", abv: "14.5%" },
    ],
  },

  // ══════════════════════════════════════
  // ── COGNAC
  // ══════════════════════════════════════
  {
    name: "DEAU Cognac", category: "Cognac", country: "France", est: "",
    desc: "Modern French cognac house — VS, VSOP, XO, and Black.",
    products: [
      { name: "DEAU Cognac VS +GB", type: "Cognac VS", volume: "0.7L", abv: "40%" },
      { name: "DEAU Cognac VSOP +GB", type: "Cognac VSOP", volume: "0.7L", abv: "40%" },
      { name: "DEAU Cognac XO +GB", type: "Cognac XO", volume: "0.7L", abv: "40%" },
      { name: "DEAU Cognac Black +GB", type: "Cognac", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "Rémi Landier", category: "Cognac", country: "France", est: "",
    desc: "Family-owned Grande and Fine Champagne cognac house.",
    products: [
      { name: "Rémi Landier VS +GB", type: "Cognac VS", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier VS Original Blend", type: "Cognac VS", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier VSOP +GB", type: "Cognac VSOP", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier VSOP Double Matured", type: "Cognac VSOP", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier Napoléon +GB", type: "Cognac", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier XO Vieille Réserve +GB", type: "Cognac XO", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier XO Fins Bois", type: "Cognac XO", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier XO Artisanal +GB", type: "Cognac XO", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier Très Vieux Fins Bois", type: "Cognac", volume: "0.7L", abv: "40%" },
      { name: "Rémi Landier Très Vieux Grande Champagne", type: "Cognac", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "VITI Collection", category: "Cognac", country: "France", est: "",
    desc: "Cognac from the Landier family — Napoléon expression.",
    products: [
      { name: "VITI Collection Napoléon Cognac Landier Family", type: "Cognac", volume: "0.7L", abv: "45%" },
    ],
  },

  // ══════════════════════════════════════
  // ── BRANDY & ARMAGNAC
  // ══════════════════════════════════════
  {
    name: "Gocha Brandy (Askaneli)", category: "Brandy", country: "Georgia", est: "",
    desc: "Georgian brandy aged 3, 5, and 8 years.",
    products: [
      { name: "Gocha Brandy Askaneli 3 YO", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Gocha Brandy Askaneli 5 YO", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Gocha Brandy Askaneli 8 YO", type: "Brandy", volume: "0.5L", abv: "40%" },
    ],
  },
  {
    name: "Aivazovsky", category: "Brandy", country: "Armenia", est: "",
    desc: "Premium Armenian brandy — 3, 5, and 7 star.",
    products: [
      { name: "Aivazovsky 3★ Brendijs", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Aivazovsky 5★ Brendijs", type: "Brandy", volume: "0.5L", abv: "40%" },
      { name: "Aivazovsky 7★ Brendijs", type: "Brandy", volume: "0.5L", abv: "40%" },
    ],
  },
  {
    name: "Duc Moisans (Armagnac)", category: "Brandy", country: "France", est: "",
    desc: "Vintage Armagnac — 1974, 1984, 1994 expressions.",
    products: [
      { name: "Armagnac Duc Moisans 1994 +GB", type: "Armagnac", volume: "0.7L", abv: "40%" },
      { name: "Armagnac Duc Moisans 1984 +GB", type: "Armagnac", volume: "0.7L", abv: "40%" },
      { name: "Armagnac Duc Moisans 1974 +GB", type: "Armagnac", volume: "0.7L", abv: "40%" },
    ],
  },
  {
    name: "30&40 Calvados", category: "Brandy", country: "France", est: "",
    desc: "Calvados Extra Old from La Maison du Whisky.",
    products: [
      { name: "30&40 Calvados Extra Old", type: "Calvados", volume: "0.5L", abv: "42%" },
    ],
  },

  // ══════════════════════════════════════
  // ── LIQUEURS & VERMOUTH
  // ══════════════════════════════════════
  {
    name: "Lazzaroni", category: "Liqueurs", country: "Italy", est: "",
    desc: "Italian liqueur house — Amaretto, Limoncino, Triple Sec, Sambuca, and more.",
    products: [
      { name: "Lazzaroni Amaretto", type: "Amaretto", volume: "0.5L", abv: "24%" },
      { name: "Lazzaroni Amaretto", type: "Amaretto", volume: "0.7L", abv: "24%" },
      { name: "Lazzaroni Amaretto +GB", type: "Amaretto", volume: "0.7L", abv: "24%" },
      { name: "Lazzaroni Amaretto + Amaretti Crunchy", type: "Amaretto", volume: "0.5L", abv: "24%" },
      { name: "Lazzaroni Limoncino", type: "Limoncello", volume: "0.5L", abv: "32%" },
      { name: "Lazzaroni Limoncino", type: "Limoncello", volume: "0.7L", abv: "32%" },
      { name: "Lazzaroni Limoncino +GB", type: "Limoncello", volume: "0.7L", abv: "32%" },
      { name: "Lazzaroni Triple Sec", type: "Liqueur", volume: "0.7L", abv: "38%" },
      { name: "Lazzaroni Mela Verde Sour Apple", type: "Liqueur", volume: "0.7L", abv: "21%" },
      { name: "Lazzaroni Sambuca del Chiostro", type: "Sambuca", volume: "0.7L", abv: "38%" },
      { name: "Lazzaroni Black Coffee", type: "Coffee Liqueur", volume: "0.7L", abv: "27%" },
      { name: "Lazzaroni Aperitivo Happy Red", type: "Aperitivo", volume: "0.7L", abv: "11%" },
    ],
  },
  {
    name: "Beniamino Maschio", category: "Liqueurs", country: "Italy", est: "",
    desc: "Italian liqueurs — Limoncello San Pietro and Amaretto Sofia.",
    products: [
      { name: "Limoncello San Pietro", type: "Limoncello", volume: "0.7L", abv: "28%" },
      { name: "Amaretto Sofia", type: "Amaretto", volume: "0.7L", abv: "28%" },
    ],
  },
  {
    name: "Mulassano", category: "Liqueurs", country: "Italy", est: "1907",
    desc: "Historic Italian vermouth from Turin — Rosso, Bianco, Extra Dry, and Aperitivo.",
    products: [
      { name: "Mulassano Vermouth Rosso", type: "Vermouth", volume: "0.75L", abv: "18%" },
      { name: "Mulassano Vermouth Bianco", type: "Vermouth", volume: "0.75L", abv: "18%" },
      { name: "Mulassano Vermouth Extra Dry", type: "Vermouth", volume: "0.75L", abv: "18%" },
      { name: "Mulassano Aperitivo", type: "Aperitivo", volume: "0.7L", abv: "24%" },
    ],
  },
  {
    name: "Waqar", category: "Liqueurs", country: "Chile", est: "",
    desc: "Premium Chilean Pisco — handcrafted from Muscat grapes.",
    products: [
      { name: "Waqar Pisco", type: "Pisco", volume: "0.7L", abv: "40%" },
    ],
  },

  // ══════════════════════════════════════
  // ── READY TO DRINK
  // ══════════════════════════════════════
  {
    name: "Almare Spritz", category: "Liqueurs", country: "Italy", est: "",
    desc: "Ready-to-drink Italian spritzes — Elderflower Hugo and Aperitivo Italiano.",
    products: [
      { name: "Almare Spritz Elderflower Hugo", type: "Ready-to-Drink", volume: "0.75L", abv: "8%" },
      { name: "Almare Spritz Aperitivo Italiano", type: "Ready-to-Drink", volume: "0.75L", abv: "8%" },
    ],
  },

  // ══════════════════════════════════════
  // ── MIXERS & SYRUPS
  // ══════════════════════════════════════
  {
    name: "Malafemmina", category: "Mixers", country: "Italy", est: "",
    desc: "Italian craft mixers — premium tonics, sodas, and lemonades.",
    products: [
      { name: "Malafemmina Tonic Water", type: "Mixer", volume: "0.2L", abv: "0%" },
      { name: "Malafemmina Ginger Beer", type: "Mixer", volume: "0.2L", abv: "0%" },
      { name: "Malafemmina Grapefruit Soda", type: "Mixer", volume: "0.2L", abv: "0%" },
      { name: "Malafemmina Lemon Tonic", type: "Mixer", volume: "0.2L", abv: "0%" },
      { name: "Malafemmina Rose Lemonade", type: "Mixer", volume: "0.2L", abv: "0%" },
    ],
  },
  {
    name: "GocciaBlue", category: "Mixers", country: "Italy", est: "",
    desc: "Italian mineral water — sparkling and still, glass and PET.",
    products: [
      { name: "GocciaBlue Sparkling Glass", type: "Water", volume: "0.75L", abv: "0%" },
      { name: "GocciaBlue Still Glass", type: "Water", volume: "0.75L", abv: "0%" },
      { name: "GocciaBlue Sparkling PET", type: "Water", volume: "1.5L", abv: "0%" },
      { name: "GocciaBlue Still PET", type: "Water", volume: "1.5L", abv: "0%" },
    ],
  },
  {
    name: "Orsadrinks", category: "Mixers", country: "Italy", est: "",
    desc: "Professional Italian cocktail syrups, fruit mixes, and barista products — gluten-free.",
    products: [
      { name: "Orsadrinks Agave Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Caramel Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Elderflower Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Grenadine Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Hibiscus Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Italian Spritz Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Lavender Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Passion Fruit Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Rhubarb Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Strawberry Syrup", type: "Syrup", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Premium Sour Lemon", type: "Juice", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Premium Sour Lime", type: "Juice", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Iced Tea", type: "Iced Tea", volume: "0.75L", abv: "0%" },
      { name: "Orsadrinks Iced Tea Peach", type: "Iced Tea", volume: "0.75L", abv: "0%" },
    ],
  },
];

export const productCategories = [
  "Champagne", "Prosecco", "Sparkling Wine",
  "White Wine", "Rosé Wine", "Red Wine",
  "Whisky", "Rum", "Gin", "Vodka",
  "Tequila", "Sake",
  "Cognac", "Brandy", "Liqueurs", "Mixers",
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
