const TestimonialBox = ({ star, name, location, description }) => {
    return (
        <div className="mb-8 sm:break-inside-avoid">
            < div className="group relative block" >
                <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                <div
                    className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
                >
                    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                        <div className="flex items-center gap-4">

                            <div>
                                <div className="flex justify-left gap-0.5 text-green-500">
                                    {Array(star).fill().map((_, index) => (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    ))}

                                </div>

                                <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
                                <p className="text-md font-medium text-gray-500">{location}</p>
                            </div>
                        </div>

                        <p className="mt-4 text-gray-700">
                            {description}
                        </p>
                    </blockquote>
                </div>
            </div >
        </div>
    )
}

export default TestimonialBox