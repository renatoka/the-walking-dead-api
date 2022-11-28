import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";

export const Quotes = () => {
  const [quotes, setQuotes] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://thewalkingdead-api.onrender.com/api/quotes/random?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (<>
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-3 py-2 border-b shadow-lg bg-white/90 backdrop-blur-sm border-slate-400/40">
      <div className="flex items-center flex-grow basis-0">
        <h1 className="text-lg font-semibold tracking-tight text-slate-900">
          The Walking Dead API
        </h1>
      </div>
      <div className="items-center justify-end flex-grow hidden basis-0 md:flex gap-3">
        <div>
          <a href="https://github.com/renatoka/the-walking-dead-api" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github Repository"
              className="w-8 h-8 rounded-full" />
          </a>
        </div>
        <a href="https://thewalkingdead-api.onrender.com/api/quotes"
          className="px-4 py-2 text-sm font-semibold rounded bg-slate-900 text-slate-50 transition ease-in-out delay-75 hover:scale-105 duration-200">
          Go Explore API
        </a>
      </div>
    </header>

    <main className="relative flex justify-center mx-auto max-w-8xl sm:px-2 lg:px-8 xl:px-12 overflow-hidden">
      <label htmlFor="navigation"
        className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-12 h-12 mb-4 ml-4 bg-white border rounded-full shadow-lg cursor-pointer text-slate-600 border-slate-300 lg:hidden transition duration-200 ease-in-out active:scale-95">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
        </svg>
      </label>

      <input type="checkbox" name="navigation" id="navigation" className="hidden peer" />
      <div
        className="fixed top-[3.5rem] h-screen shadow-xl px-4 left-0 hidden peer-checked:block lg:relative lg:top-0 lg:h-auto lg:px-0 lg:block lg:flex-none lg:shadow-none">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[50vw] bg-white lg:bg-slate-50"></div>
        <nav className="sticky top-[4.5rem] w-64 pr-8 text-base lg:text-sm xl:w-72 xl:pr-16">
          <ul role="list" className="h-[calc(100vh-4.5rem)] overflow-y-auto pl-0.5 space-y-8">
            <li>
              <h3 className="font-semibold tracking-tight text-xl text-slate-900">
                Quotes
              </h3>
              {/* Sidebar */}
              <ul role="list" className="mt-3 space-y-2">
                <li>
                  <a href="" className="text-slate-900 hover:text-slate-800">
                    Get All Quotes
                  </a>
                </li>
                <li>
                  <a href="" className="text-slate-900 hover:text-slate-800">
                    Get Random Quotes
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-auto max-w-2xl min-w-0 px-4 py-10 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 ">
        <article className="">
          <header className="">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Documentation
            </h1>
          </header>
          <p className="mt-2 text-xl text-slate-600">
            The Walking Dead API is a RESTful API based on the popular TV series The Walking Dead. It is a free to use API with no authentication required.
            Make sure to read the documentation carefully before using the API.
          </p>
          <div className="mt-8 ">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 underline">
              Get All Quotes
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Get the most famous quotes from the API. Current database contains around 100 quotes, so it can take a while to load all of them.  In case you want to limit the number of quotes returned, you can use the <code className="text-slate-900">limit</code> query parameter. The default limit is 1.
              There are also other parameters you can use to filter the results. Currently there are 4 parameters available: <code className="text-slate-900">author</code>, <code className="text-slate-900">season</code>, <code className="text-slate-900">episode</code> and <code className="text-slate-900">id</code>
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Endpoints
              </h3>
              <p className="mt-2 text-lg text-slate-600">
                <code className=""><a href="https://thewalkingdead-api.onrender.com/api/quotes">https://thewalkingdead-api.onrender.com/api/quotes</a></code>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Response
              </h3>
              <pre className="mt-2 text-sm text-slate-600 overflow-scroll">
                <code className="text-slate-900 w-fit">
                  {'{'} <br />
                  "id": 16, <br />
                  "quote": "Anything is possible until your heart stops beating.", <br />
                  "author": "Father Gabriel Stokes", <br />
                  "season": "7", <br />
                  "episode": "Say Yes" <br />
                  {'}'}
                </code>
              </pre>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Parameters
              </h3>
              <p className="mt-2 text-lg text-slate-600">
                <code className="text-slate-900">limit</code> - Limit the number of quotes returned. <strong>Default is 1</strong>. <br />
                <code className="text-slate-900">author</code> - Filter quotes by author. If there are multiple quotes with the same author name, all of them will be returned. <br />
                <code className="text-slate-900">episode</code> - Filter quotes by episode. <br />
                <code className="text-slate-900">id</code> - Filter quotes by its id. <br />
              </p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Examples
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  <code className="text-slate-900">https://thewalkingdead-api.onrender.com/api/quotes?limit=10</code> - Return 10 quotes. <br />
                  <code className="text-slate-900">https://thewalkingdead-api.onrender.com/api/quotes?author=Rick Grimes</code> - Return all quotes said by Rick Grimes <br />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 ">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 underline">
              Get Random Quote
            </h2>
            <p className="mt-2 text-lg text-slate-600">
              Get a random quote from the API. You can also use the <code className="text-slate-900">limit</code> query parameter to return multiple random quotes.
            </p>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Endpoints
              </h3>
              <p className="mt-2 text-lg text-slate-600">
                <code className=""><a href="https://thewalkingdead-api.onrender.com/api/quotes/random">https://thewalkingdead-api.onrender.com/api/quotes/random</a></code>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Response
              </h3>
              <p className="mt-2 text-lg text-slate-600">
                Same as the <code className="text-slate-900">Get All Quotes</code> endpoint but quotes are randomised.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                Parameters
              </h3>
              <p className="mt-2 text-lg text-slate-600">
                <code className="text-slate-900">limit</code> - Limit the number of characters returned. Parameter <strong>must be included</strong> if you are searching with other parameters aswell. <br />
              </p>

              <div className="mt-4">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                  Examples
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  <code className="text-slate-900">https://thewalkingdead-api.onrender.com/api/quotes/random?limit=10</code> - Return 10 random quotes. <br />
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col flex-wrap">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 underline">
              Example Quotes
            </h1>
            {
              quotes.map((quote, index) => (
                <div key={index} className="mt-4 rounded-xl bg-slate-100">
                  <div className="p-4">
                    <p className="text-lg text-slate-900">
                      {quote.quote}
                    </p>
                    <p className="mt-2 text-lg text-slate-900">
                      - {quote.author}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </article>
      </div>
    </main>
    <div>
      <footer className="flex flex-col items-center justify-center w-full h-24 mt-8 border-t border-slate-300">
        <p className="text-sm text-slate-600">
          Made with ❤️ by <a href="https://github.com/renatoka"
            className="underline hover:no-underline">@renatoka</a>
        </p>
      </footer>
    </div>
  </>)
};
