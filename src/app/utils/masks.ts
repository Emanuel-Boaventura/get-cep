export function cepMask(text?: string | null) {
  if (!text) return '';

  const cleaned = text.replace(/\D/g, '');
  const limited = cleaned.length > 8 ? cleaned.slice(0, 8) : cleaned;

  return limited.replace(/^(\d{5})(\d)/, '$1-$2');
}
