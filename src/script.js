/**
 * Calculates simple interest.
 * @param {number|string} principal
 * @param {number|string} rate - annual interest rate in percent
 * @param {number|string} time - time in years
 * @returns {number|null} simple interest or null for invalid input
 */
function calculate(principal, rate, time) {
  // Convert all inputs to numbers before any calculation
  const p = Number(principal);
  const r = Number(rate);
  const t = Number(time);

  // Validate that all values are finite numbers
  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(t)) {
    return null;
  }

  // Ensure positive values
  if (p <= 0 || r <= 0 || t <= 0) {
    return null;
  }

  // Simple Interest = P * (R/100) * T
  return p * (r / 100) * t;
}

// Browser DOM wiring
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("calculateBtn");
    if (!button) return;

    button.addEventListener("click", () => {
      const principal = document.getElementById("principal").value;
      const rate = document.getElementById("rate").value;
      const time = document.getElementById("time").value;

      const interest = calculate(principal, rate, time);
      const resultEl = document.getElementById("result");
      if (!resultEl) return;

      if (interest === null) {
        resultEl.textContent = "Please enter valid positive numbers.";
        resultEl.style.color = "#e94560";
      } else {
        resultEl.textContent = "Simple Interest: $" + interest.toFixed(2);
        resultEl.style.color = "#4ecca3";
      }
    });
  });
}

// Export for Jasmine tests (Node environment)
if (typeof module !== "undefined" && module.exports) {
  module.exports = { calculate };
}
