import fs from 'fs';
import path from 'path';

// Vendor list with services
const vendors = [
  { name: "Appliance Depot DE", service: "Appliances", prompt: "Kitchen appliances like refrigerator, stove, dishwasher" },
  { name: "Atlantic Insulation", service: "Insulation", prompt: "House insulation materials, thermal protection" },
  { name: "Bay Area Drywall", service: "Drywall", prompt: "Drywall installation, wall construction" },
  { name: "Bayshore Landscaping", service: "Landscaping", prompt: "Garden landscaping, trees, outdoor design" },
  { name: "Bayside Plumbing", service: "Plumbing", prompt: "Plumbing pipes, water faucet, plumber tools" },
  { name: "Beachside Pools", service: "General", prompt: "Swimming pool construction, water" },
  { name: "Beachside Siding", service: "Siding", prompt: "House exterior siding, wall panels" },
  { name: "Cape HVAC Services", service: "HVAC", prompt: "Air conditioning unit, heating system, ventilation" },
  { name: "Coastal Cabinets", service: "Cabinets", prompt: "Kitchen cabinets, wooden cabinetry" },
  { name: "Coastal Concrete LLC", service: "Concrete", prompt: "Concrete mixing, construction cement" },
  { name: "Coastal Mechanical Inspections", service: "Inspection", prompt: "Building inspection, quality control clipboard" },
  { name: "Coastal Waterproofing", service: "Waterproofing", prompt: "Water protection, waterproof barrier" },
  { name: "Crystal Glass & Mirror", service: "Glass", prompt: "Glass panels, mirrors, window installation" },
  { name: "DelMarVa Building Inspectors", service: "Inspection", prompt: "Building inspection, safety checklist" },
  { name: "Delmarva Excavating", service: "Excavation", prompt: "Excavator machine, earth moving, digging" },
  { name: "Delmarva Foundation Co", service: "Foundation", prompt: "House foundation, concrete base, structural support" },
  { name: "Diamond Tile and Stone", service: "Tile", prompt: "Ceramic tiles, stone flooring, bathroom tiles" },
  { name: "Eastern Shore Electric", service: "Electrical", prompt: "Electrical wiring, light bulb, power lines" },
  { name: "Fine Trim Carpentry", service: "Trim Carpentry", prompt: "Wood trim, carpentry tools, finishing work" },
  { name: "First State Roofing", service: "Roofing", prompt: "House roof, roofing shingles, construction" },
  { name: "General Contractors DE", service: "General", prompt: "Hard hat, construction tools, building" },
  { name: "Heritage Trim & Doors", service: "Trim Carpentry", prompt: "Door installation, wooden trim, carpentry" },
  { name: "Lewes Countertops", service: "Countertops", prompt: "Kitchen countertops, granite surface" },
  { name: "Lewes Drywall Pros", service: "Drywall", prompt: "Drywall sheets, wall installation tools" },
  { name: "Pinnacle Insulation", service: "Insulation", prompt: "Insulation foam, thermal barrier" },
  { name: "Premier HVAC Systems", service: "HVAC", prompt: "HVAC system, air conditioning, heating unit" },
  { name: "Rehoboth Painting", service: "Painting", prompt: "Paint brush, paint roller, house painting" },
  { name: "Seaside Painting LLC", service: "Paint", prompt: "Paint bucket, painting equipment, wall paint" },
  { name: "Shore Electric", service: "Electrical", prompt: "Electrical outlet, wiring, electrician tools" },
  { name: "Shore Garage Doors", service: "Garage Door", prompt: "Garage door, automatic door opener" },
  { name: "Sparkle Clean Crew", service: "Cleaning", prompt: "Cleaning supplies, mop, cleaning equipment" },
  { name: "Summit Roofing DE", service: "Roofing", prompt: "Roof installation, roofing materials, shingles" },
  { name: "Sussex County Inspections", service: "Inspection", prompt: "Home inspection, quality assessment" },
  { name: "Sussex Flooring", service: "Flooring", prompt: "Wooden flooring, floor installation" },
  { name: "Sussex Framing Co", service: "Framing", prompt: "House framing, wooden frame construction" },
  { name: "Sussex Sitework LLC", service: "Sitework", prompt: "Construction site, land preparation" },
  { name: "Tideline Plumbing", service: "Plumbing", prompt: "Plumbing pipes, water system, plumber wrench" },
  { name: "Tidewater Landscaping", service: "Landscaping", prompt: "Landscape design, garden maintenance, lawn care" }
];

// OneDrive path for SA homes website
const oneDrivePath = "C:\\Users\\scott\\OneDrive\\sa-homes-website\\vendor-icons";

// Create directory if it doesn't exist
if (!fs.existsSync(oneDrivePath)) {
  fs.mkdirSync(oneDrivePath, { recursive: true });
  console.log(`Created directory: ${oneDrivePath}`);
}

// Function to download and save image
async function downloadImage(url, filename) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(oneDrivePath, filename);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

// Generate all vendor icons
async function generateAllIcons() {
  console.log(`Starting generation of ${vendors.length} vendor icons...`);
  
  for (let i = 0; i < vendors.length; i++) {
    const vendor = vendors[i];
    const filename = `${vendor.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`;
    
    try {
      console.log(`Generating ${i + 1}/${vendors.length}: ${vendor.name}...`);
      
      // Call the image generation API
      const response = await fetch('http://localhost:3001/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: vendor.prompt,
          filename: filename
        })
      });
      
      const result = await response.json();
      
      if (result.success && result.images?.length > 0) {
        // Download and save the image
        const savedPath = await downloadImage(result.images[0].url, filename);
        console.log(`✅ Saved: ${savedPath}`);
      } else {
        console.error(`❌ Failed to generate: ${vendor.name}`, result.error);
      }
      
      // Wait 2 seconds between requests to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`❌ Error generating ${vendor.name}:`, error.message);
    }
  }
  
  console.log('🎉 Icon generation complete!');
}

generateAllIcons();