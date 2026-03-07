import fs from 'fs';
import path from 'path';

// Each vendor with unique color scheme and style
const vendors = [
  { name: "Appliance Depot DE", prompt: "Modern appliance store logo with red and silver colors, refrigerator icon, bold geometric design, single centered icon on white background" },
  { name: "Atlantic Insulation", prompt: "Insulation company logo with orange and grey colors, house with thermal layers icon, professional corporate style, single centered icon on white background" },
  { name: "Bay Area Drywall", prompt: "Drywall contractor logo with green and white colors, wall panel with trowel icon, construction industry style, single centered icon on white background" },
  { name: "Bayshore Landscaping", prompt: "Landscaping business logo with forest green and brown colors, tree with roots icon, organic natural style, single centered icon on white background" },
  { name: "Bayside Plumbing", prompt: "Plumbing company logo with deep blue and copper colors, wrench and water drop icon, traditional craftsman style, single centered icon on white background" },
  { name: "Beachside Pools", prompt: "Pool construction logo with turquoise and navy colors, swimming pool with waves icon, coastal resort style, single centered icon on white background" },
  { name: "Beachside Siding", prompt: "Siding contractor logo with charcoal and yellow colors, house exterior panels icon, modern architectural style, single centered icon on white background" },
  { name: "Cape HVAC Services", prompt: "HVAC company logo with purple and white colors, air conditioning unit icon, high-tech industrial style, single centered icon on white background" },
  { name: "Coastal Cabinets", prompt: "Cabinet maker logo with warm wood brown and gold colors, kitchen cabinet icon, craftsman woodworking style, single centered icon on white background" },
  { name: "Coastal Concrete LLC", prompt: "Concrete contractor logo with dark grey and orange colors, cement mixer truck icon, heavy construction style, single centered icon on white background" },
  { name: "Coastal Mechanical Inspections", prompt: "Building inspector logo with navy blue and red colors, clipboard with checkmark icon, professional services style, single centered icon on white background" },
  { name: "Coastal Waterproofing", prompt: "Waterproofing company logo with teal and silver colors, water shield with droplets icon, protective services style, single centered icon on white background" },
  { name: "Crystal Glass & Mirror", prompt: "Glass company logo with crystal clear blue and silver colors, geometric glass panels icon, elegant modern style, single centered icon on white background" },
  { name: "DelMarVa Building Inspectors", prompt: "Building inspection logo with burgundy and gold colors, magnifying glass over house icon, premium professional style, single centered icon on white background" },
  { name: "Delmarva Excavating", prompt: "Excavation company logo with bright yellow and black colors, excavator machine icon, heavy equipment industrial style, single centered icon on white background" },
  { name: "Delmarva Foundation Co", prompt: "Foundation contractor logo with solid brown and cream colors, house foundation blocks icon, structural engineering style, single centered icon on white background" },
  { name: "Diamond Tile and Stone", prompt: "Tile contractor logo with diamond pattern in blue and white colors, mosaic tile design icon, artistic decorator style, single centered icon on white background" },
  { name: "Eastern Shore Electric", prompt: "Electrical contractor logo with electric blue and bright yellow colors, lightning bolt icon, energetic modern style, single centered icon on white background" },
  { name: "Fine Trim Carpentry", prompt: "Carpentry company logo with rich mahogany and brass colors, hammer and chisel icon, fine craftsmanship style, single centered icon on white background" },
  { name: "First State Roofing", prompt: "Roofing contractor logo with slate grey and red colors, house roof with shingles icon, traditional home building style, single centered icon on white background" },
  { name: "General Contractors DE", prompt: "General contractor logo with construction orange and steel blue colors, hard hat and tools icon, professional building style, single centered icon on white background" },
  { name: "Heritage Trim & Doors", prompt: "Door and trim company logo with classic forest green and gold colors, elegant door icon, heritage craftsman style, single centered icon on white background" },
  { name: "Lewes Countertops", prompt: "Countertop installer logo with marble white and rose gold colors, kitchen counter surface icon, luxury home style, single centered icon on white background" },
  { name: "Lewes Drywall Pros", prompt: "Drywall professional logo with lime green and grey colors, trowel spreading compound icon, skilled trades style, single centered icon on white background" },
  { name: "Pinnacle Insulation", prompt: "Insulation specialist logo with mountain peak purple and white colors, thermal barrier layers icon, peak performance style, single centered icon on white background" },
  { name: "Premier HVAC Systems", prompt: "HVAC systems logo with premium black and silver colors, thermostat with temperature icon, luxury tech style, single centered icon on white background" },
  { name: "Rehoboth Painting", prompt: "Painting contractor logo with rainbow colors and white, paint brush with colorful strokes icon, artistic creative style, single centered icon on white background" },
  { name: "Seaside Painting LLC", prompt: "Painting company logo with ocean blue and sunset orange colors, paint roller icon, coastal inspired style, single centered icon on white background" },
  { name: "Shore Electric", prompt: "Electrician logo with bright coral and white colors, electrical outlet with spark icon, coastal electrical style, single centered icon on white background" },
  { name: "Shore Garage Doors", prompt: "Garage door company logo with deep red and silver colors, garage door panels icon, residential services style, single centered icon on white background" },
  { name: "Sparkle Clean Crew", prompt: "Cleaning service logo with bright pink and sparkle white colors, cleaning spray with sparkles icon, fun energetic style, single centered icon on white background" },
  { name: "Summit Roofing DE", prompt: "Roofing company logo with mountain green and snow white colors, peaked roof on mountain icon, summit achievement style, single centered icon on white background" },
  { name: "Sussex County Inspections", prompt: "Home inspector logo with county blue and official gold colors, house with magnifying glass icon, government professional style, single centered icon on white background" },
  { name: "Sussex Flooring", prompt: "Flooring company logo with natural wood tan and copper colors, wooden floor planks icon, natural materials style, single centered icon on white background" },
  { name: "Sussex Framing Co", prompt: "Framing contractor logo with construction yellow and brown colors, house wooden frame icon, structural building style, single centered icon on white background" },
  { name: "Sussex Sitework LLC", prompt: "Sitework company logo with earth brown and machinery orange colors, construction site with equipment icon, site development style, single centered icon on white background" },
  { name: "Tideline Plumbing", prompt: "Plumbing service logo with tide pool teal and sandy beige colors, water wave with pipe icon, coastal plumbing style, single centered icon on white background" },
  { name: "Tidewater Landscaping", prompt: "Landscaping service logo with water blue and grass green colors, lawn mower cutting grass icon, professional lawn care style, single centered icon on white background" }
];

const oneDrivePath = "C:\\Users\\scott\\OneDrive\\sa-homes-website\\vendor-icons";

async function downloadImage(url, filename) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(oneDrivePath, filename);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

async function generateUniqueIcons() {
  console.log(`Generating ${vendors.length} unique vendor icons with different colors/styles...`);
  
  // Clear existing icons first
  if (fs.existsSync(oneDrivePath)) {
    const files = fs.readdirSync(oneDrivePath);
    for (const file of files) {
      if (file.endsWith('.png')) {
        fs.unlinkSync(path.join(oneDrivePath, file));
      }
    }
  }
  
  for (let i = 0; i < vendors.length; i++) {
    const vendor = vendors[i];
    const filename = `${vendor.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`;
    
    try {
      console.log(`Generating ${i + 1}/${vendors.length}: ${vendor.name}...`);
      
      const response = await fetch('http://localhost:3001/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: vendor.prompt, filename: filename })
      });
      
      const result = await response.json();
      
      if (result.success && result.images?.length > 0) {
        const savedPath = await downloadImage(result.images[0].url, filename);
        console.log(`✅ Saved: ${savedPath}`);
      } else {
        console.error(`❌ Failed: ${vendor.name}`, result.error);
      }
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
    } catch (error) {
      console.error(`❌ Error: ${vendor.name}:`, error.message);
    }
  }
  
  console.log('🎉 Unique icons complete!');
}

generateUniqueIcons();