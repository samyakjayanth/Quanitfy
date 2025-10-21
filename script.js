window.FLASHCARDS = [
  {
    term: "RSI (Relative Strength Index)",
    definition:
      "Momentum oscillator (0–100) measuring speed and magnitude of recent price changes. Classic interpretation: overbought >70, oversold <30. Often computed with 14 periods."
  },
  {
    term: "MACD",
    definition:
      "Moving Average Convergence Divergence: difference between a fast EMA (e.g., 12) and slow EMA (e.g., 26). Signal line is EMA of MACD (e.g., 9). Crosses and divergences are used for signals."
  },
  {
    term: "Bollinger Bands",
    definition:
      "Volatility bands around a moving average, typically MA ± 2 standard deviations. Price touching bands often indicates volatility expansion or potential mean reversion zones."
  },
  {
    term: "SMA / EMA",
    definition:
      "Simple/Exponential Moving Averages smooth price. Crossovers (e.g., 50/200 SMA) are used to indicate trend changes. EMA weights recent data more heavily."
  },
  {
    term: "VWAP",
    definition:
      "Volume-Weighted Average Price: average price weighted by volume, commonly used intraday to gauge fair value and institutional execution quality."
  },
  {
    term: "Sharpe Ratio",
    definition:
      "Risk-adjusted return = (mean portfolio excess return) / (std dev of returns). Higher is better; compares strategies on a per-unit-risk basis."
  },
  {
    term: "Drawdown",
    definition:
      "Peak-to-trough decline of equity curve, often tracked as Max Drawdown (MDD). Measures risk and pain of a strategy."
  },
  {
    term: "Alpha / Beta",
    definition:
      "Alpha: excess return vs. benchmark. Beta: sensitivity to market moves (β≈1 moves with market, >1 amplifies, <1 dampens)."
  },
  {
    term: "Overfitting",
    definition:
      "When a model captures noise rather than signal, performing well in-sample but poorly out-of-sample. Prevent with cross-validation and simplicity."
  },
  {
    term: "Position Sizing",
    definition:
      "How much to buy/sell per trade (e.g., fixed fractional, Kelly). Critical for risk control and compounding."
  }
];

console.log("Welcome to Quantify!");
