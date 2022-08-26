export default function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {day: 'numeric', month: 'long', year: 'numeric' })
}