"use client"
import { NextGen } from "nextgen"
import { Management } from "management"
import { Agency } from "agency"

const WellnessSection = () => {
  // Initialize variables here
  const nextGen = new NextGen()
  const management = new Management()
  const agency = new Agency()

  // Function to handle wellness data
  const handleWellnessData = () => {
    // Logic to fetch and process wellness data
    console.log("Fetching wellness data...")
    // Example data processing
    const data = {
      tenant: "NextGen Management Agency",
      features: ["Scalable", "Secure", "User-friendly"],
    }
    console.log(data)
  }

  // Render the wellness section
  return (
    <div>
      <h1>Wellness Section</h1>
      <button onClick={handleWellnessData}>Fetch Wellness Data</button>
    </div>
  )
}

export default WellnessSection
