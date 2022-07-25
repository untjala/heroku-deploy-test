import { useState, useEffect } from 'react';
import ResultList from './ResultList';

// Import our search method
import search from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(5);

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const response = await search(query, limit);
    console.log('RESPONSE', response);
    setResults(response.data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy('kittens');
  }, [limit]);

  const adjustLimit = (num) => {
    setLimit(num);
  };

  return (
    <div>
      {/* Pass our results to the ResultsList component to map over */}
      <h2>Limit: {limit}</h2>
      <ResultList results={results} />
      <div style={{ position: 'fixed', bottom: 0 }}>
        <button
          className="btn btn-primary"
          onClick={() => adjustLimit(5)}
        >
          Show 5
        </button>
        <button
          className="btn btn-primary"
          onClick={() => adjustLimit(10)}
        >
          Show 10
        </button>
        <button
          className="btn btn-primary"
          onClick={() => adjustLimit(20)}
        >
          Show 20
        </button>
      </div>
    </div>
  );
};

export default SearchResultContainer;