export function PrintButton() {
  const handlePrint = () => {
    window.print()
  }
  return <button onClick={handlePrint}>Print Resume</button>
}
