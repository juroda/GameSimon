export default function(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
  }
  