
// ====== 1. Footer Date Logic ======
const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = lastModified;


// ====== 2. Wind Chill Calculation ======
function calculateWindChill(tempC, speedKmh) {
  // Convert to imperial for formula: °C to °F, km/h to mph
  const tempF = (tempC * 9/5) + 32;
  const speedMph = speedKmh * 0.621371;

  return (
    35.74 + 0.6215 * tempF - 35.75 * Math.pow(speedMph, 0.16) + 
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// ====== 3. Wind Chill Display Logic ======
const temperatureC = 10;       // Example static value
const windSpeedKmh = 5;        // Example static value

let windChillDisplay = "N/A";

if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  const windChillF = calculateWindChill(temperatureC, windSpeedKmh);
  const windChillC = ((windChillF - 32) * 5) / 9;
  windChillDisplay = windChillC.toFixed(1) + " °C";
}

document.getElementById("windChill").textContent = windChillDisplay;

