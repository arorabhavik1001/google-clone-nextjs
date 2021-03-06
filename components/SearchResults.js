function SearchResults({results}) {
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 mb-5 mt-3 text-md">About {results.searchInformation?.formattedTotalResults} results in {results.searchInformation?.formattedSearchTime} seconds</p>
            {results?.items.map((result) =>(
                <div key={result.link} className="max-w-xl mb-8">
                  <div className="group">
                      {/* <div className="max-w-sm sm:max-w-xl"> */}
                      <a href={result.link} className="text-sm break-words line-clamp-2">{result.formattedUrl}</a>
                      {/* </div> */}
                      <a href={result.link}>
                          <h2 className="group-hover:underline truncate text-xl text-blue-800 font-medium  ">
                              {result.title}
                          </h2>
                      </a>
                  </div>
                  <p className="line-clamp-2">{result.snippet}</p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults
