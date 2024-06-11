const Loading: React.FC = () => {

    return (
        <div className="flex flex-col items-center justify-center h-4/5 bg-gray-100 w-2/5">
            <h2 className="text-gray-700 text-sm font-bold mb-6">
                Loading...
            </h2>
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4">

            </div>
        </div>)
}

export default Loading 