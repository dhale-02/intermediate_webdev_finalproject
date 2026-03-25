/**
 * Calculates simple interest.
 * @param {number|string} principal - The principal amount
 * @param {number|string} rate     - Annual interest rate in percent
 * @param {number|string} time     - Time in years
 * @returns {number|null} - Calculated interest or null for invalid inputs
 */
function calculate(principal, rate, time) {
  // Convert all inputs to numbers to prevent TypeErrors
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);

  // Validate that all values are finite numbers
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    return null;
  }

  if (principal <= 0 || rate <= 0 || time <= 0) {
    return null;
  }

  // Simple Interest = P * (R/100) * T
  return principal * (rate / 100) * time;
}

// Wire up the button click in browser context
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('calculateBtn');
    if (btn) {
      btn.addEventListener('click', function () {
        var principal = document.getElementById('principal').value;
        var rate = document.getElementById('rate').value;
        var time = document.getElementById('time').value;
        var result = calculate(principal, rate, time);
        var resultEl = document.getElementById('result');
        if (result === null) {
          resultEl.textContent = 'Please enter valid positive numbers.';
          resultEl.style.color = '#e94560';
        } else {
          resultEl.textContent = 'Simple Interest: $' + result.toFixed(2);
          resultEl.style.color = '#4ecca3';
        }
      });
    }
  });
}

module.exports = { calculate };
