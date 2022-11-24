import { Link } from 'react-router-dom';

function Main() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">The Walking Dead API</h1>
            <p className="mt-3 text-2xl">
              A simple API to get information about everything from The Walking Dead TV Show.
            </p>
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <Link to='/characters' className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">Characters &rarr;</h3>
                <p className="mt-4 text-xl">
                  Get information about the characters of The Walking Dead TV Show.
                </p>
                <p className="mt-4 text-xl italic">
                  Check it out.
                </p>
              </Link>
              <Link to='/episodes' className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">Episodes &rarr;</h3>
                <p className="mt-4 text-xl">
                  Get information about the episodes of The Walking Dead TV Show.
                </p>
                <p className="mt-4 text-xl italic">
                  Still in development.
                </p>
              </Link>
              <Link to='/quotes' className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
                <h3 className="text-2xl font-bold">Quotes &rarr;</h3>
                <p className="mt-4 text-xl">
                  Get most famous quotes from The Walking Dead TV Show.
                </p>
                <p className="mt-4 text-xl italic">
                  Check it out.
                </p>
              </Link>
            </div>
          </div>
          <footer className="flex items-center justify-center w-full h-24 border-t">
            <a className="flex items-center justify-center" href="https://github.com/renatoka" target="_blank" rel="noopener noreferrer">
              Made with ❤️ by renatoka
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Main;