export default function formatFloatValue(value, suffix = '') {
  const num = parseFloat(value);
  return num % 1 === 0 ? `${parseInt(num)}${suffix}` : `${num.toFixed(2)}${suffix}`;
}
