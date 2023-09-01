export default function ListItems({ quotes, searchTerm }) {
  const quotesList = quotes.map((quote, index) =>
    quote.toLowerCase().includes(searchTerm.toLowerCase()) ? (
      <li key={index}>{quote}</li>
    ) : undefined
  );
  return <ul style={{ textAlign: 'left' }}>{quotesList}</ul>;
}
