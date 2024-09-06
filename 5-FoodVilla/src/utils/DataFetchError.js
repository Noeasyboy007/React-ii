const DtataFetchError = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center p-6 bg-gray-300 rounded-lg shadow-lg">
                <div className="text-red-500 mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v2m0 4h.01M6.938 14.469a8 8 0 0110.125 0m1.414-1.414a10 10 0 00-12.728 0m1.414 1.414a8 8 0 0110.125 0M12 9v2m0 4h.01"
                        />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    No Internet Connection
                </h1>
                <p className="text-gray-600">
                    Please check your internet connection and try again.
                </p>
            </div>
        </div>
    )

}

export default DtataFetchError;