import fs from 'fs';
import path from 'path';

// Remaining vendors (starting from where we left off)
const remainingVendors = [
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

// OneDrive path
const oneDrivePath = "C:\\Users\\scott\\OneDrive\\sa-homes-website\\vendor-icons";

async function downloadImage(url, filename) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(oneDrivePath, filename);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

async function generateRemainingIcons() {
  console.log(`Starting generation of remaining ${remainingVendors.length} vendor icons...`);
  
  for (let i = 0; i < remainingVendors.length; i++) {
    const vendor = remainingVendors[i];
    const filename = `${vendor.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`;
    
    try {
      console.log(`Generating ${i + 1}/${remainingVendors.length}: ${vendor.name}...`);
      
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
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`❌ Error: ${vendor.name}:`, error.message);
    }
  }
  
  console.log('🎉 Remaining icons complete!');
}

generateRemainingIcons();