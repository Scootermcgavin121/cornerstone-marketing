import fs from 'fs';
import path from 'path';

// All vendors with better prompts for single logo icons
const vendors = [
  { name: "Appliance Depot DE", service: "Appliances", prompt: "appliance store with refrigerator or kitchen appliance icon" },
  { name: "Atlantic Insulation", service: "Insulation", prompt: "insulation company with house insulation icon" },
  { name: "Bay Area Drywall", service: "Drywall", prompt: "drywall contractor with wall panel icon" },
  { name: "Bayshore Landscaping", service: "Landscaping", prompt: "landscaping business with tree or garden icon" },
  { name: "Bayside Plumbing", service: "Plumbing", prompt: "plumbing company with wrench or pipe icon" },
  { name: "Beachside Pools", service: "General", prompt: "pool construction with swimming pool icon" },
  { name: "Beachside Siding", service: "Siding", prompt: "siding contractor with house exterior icon" },
  { name: "Cape HVAC Services", service: "HVAC", prompt: "HVAC company with air conditioning unit icon" },
  { name: "Coastal Cabinets", service: "Cabinets", prompt: "cabinet maker with kitchen cabinet icon" },
  { name: "Coastal Concrete LLC", service: "Concrete", prompt: "concrete contractor with cement mixer icon" },
  { name: "Coastal Mechanical Inspections", service: "Inspection", prompt: "building inspector with clipboard and checklist icon" },
  { name: "Coastal Waterproofing", service: "Waterproofing", prompt: "waterproofing company with water shield icon" },
  { name: "Crystal Glass & Mirror", service: "Glass", prompt: "glass company with window or mirror icon" },
  { name: "DelMarVa Building Inspectors", service: "Inspection", prompt: "building inspection with magnifying glass and house icon" },
  { name: "Delmarva Excavating", service: "Excavation", prompt: "excavation company with bulldozer or excavator icon" },
  { name: "Delmarva Foundation Co", service: "Foundation", prompt: "foundation contractor with house foundation icon" },
  { name: "Diamond Tile and Stone", service: "Tile", prompt: "tile contractor with decorative tile pattern icon" },
  { name: "Eastern Shore Electric", service: "Electrical", prompt: "electrical contractor with lightning bolt or plug icon" },
  { name: "Fine Trim Carpentry", service: "Trim Carpentry", prompt: "carpentry company with hammer and wood icon" },
  { name: "First State Roofing", service: "Roofing", prompt: "roofing contractor with house roof and shingles icon" },
  { name: "General Contractors DE", service: "General", prompt: "general contractor with hard hat and tools icon" },
  { name: "Heritage Trim & Doors", service: "Trim Carpentry", prompt: "door and trim company with door icon" },
  { name: "Lewes Countertops", service: "Countertops", prompt: "countertop installer with kitchen counter icon" },
  { name: "Lewes Drywall Pros", service: "Drywall", prompt: "drywall professional with trowel icon" },
  { name: "Pinnacle Insulation", service: "Insulation", prompt: "insulation specialist with thermal barrier icon" },
  { name: "Premier HVAC Systems", service: "HVAC", prompt: "HVAC systems with thermostat icon" },
  { name: "Rehoboth Painting", service: "Painting", prompt: "painting contractor with paint brush icon" },
  { name: "Seaside Painting LLC", service: "Paint", prompt: "painting company with paint roller icon" },
  { name: "Shore Electric", service: "Electrical", prompt: "electrician with electrical outlet icon" },
  { name: "Shore Garage Doors", service: "Garage Door", prompt: "garage door company with garage door icon" },
  { name: "Sparkle Clean Crew", service: "Cleaning", prompt: "cleaning service with sparkle and cleaning icon" },
  { name: "Summit Roofing DE", service: "Roofing", prompt: "roofing company with mountain peak roof icon" },
  { name: "Sussex County Inspections", service: "Inspection", prompt: "home inspector with house and check mark icon" },
  { name: "Sussex Flooring", service: "Flooring", prompt: "flooring company with wood floor planks icon" },
  { name: "Sussex Framing Co", service: "Framing", prompt: "framing contractor with house frame icon" },
  { name: "Sussex Sitework LLC", service: "Sitework", prompt: "sitework company with construction site icon" },
  { name: "Tideline Plumbing", service: "Plumbing", prompt: "plumbing service with water drop and pipe icon" },
  { name: "Tidewater Landscaping", service: "Landscaping", prompt: "landscaping service with lawn mower icon" }
];

// OneDrive path
const oneDrivePath = "C:\\Users\\scott\\OneDrive\\sa-homes-website\\vendor-icons";

// Create backup folder
const backupPath = "C:\\Users\\scott\\OneDrive\\sa-homes-website\\vendor-icons-backup";
if (!fs.existsSync(backupPath)) {
  fs.mkdirSync(backupPath, { recursive: true });
}

async function downloadImage(url, filename) {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const filePath = path.join(oneDrivePath, filename);
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

async function generateBetterIcons() {
  console.log(`Regenerating all ${vendors.length} vendor icons with better style...`);
  
  // Move existing icons to backup
  if (fs.existsSync(oneDrivePath)) {
    const files = fs.readdirSync(oneDrivePath);
    for (const file of files) {
      if (file.endsWith('.png')) {
        fs.renameSync(path.join(oneDrivePath, file), path.join(backupPath, file));
      }
    }
    console.log(`Backed up ${files.length} existing icons`);
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
      
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 second delay
      
    } catch (error) {
      console.error(`❌ Error: ${vendor.name}:`, error.message);
    }
  }
  
  console.log('🎉 Better icon generation complete!');
}

generateBetterIcons();