import Link from "next/link"

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-6">Page Not Found</h2>
            <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
            >
                Return Home
            </Link>
        </div>
    )
}

export default NotFound