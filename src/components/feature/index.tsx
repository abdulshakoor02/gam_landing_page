import Image from "next/image";

export default function Features() {
  return (
    <section className= "w-full py-20 bg-gray-50" >
    <div className="container mx-auto px-4" >
      <h2 className="text-4xl font-bold text-center mb-12" > Features </h2>
        < div className = "grid grid-cols-1 md:grid-cols-3 gap-8" >
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md" >
            <Image src="/file.svg" alt = "Feature 1" width = { 80} height = { 80} className = "mb-4" />
              <h3 className="text-2xl font-semibold mb-2" > Feature One </h3>
                < p className = "text-gray-700" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  < div className = "flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md" >
                    <Image src="/globe.svg" alt = "Feature 2" width = { 80} height = { 80} className = "mb-4" />
                      <h3 className="text-2xl font-semibold mb-2" > Feature Two </h3>
                        < p className = "text-gray-700" > Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                          </div>
                          < div className = "flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md" >
                            <Image src="/window.svg" alt = "Feature 3" width = { 80} height = { 80} className = "mb-4" />
                              <h3 className="text-2xl font-semibold mb-2" > Feature Three </h3>
                                < p className = "text-gray-700" > Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                  </div>
                                  </div>
                                  </div>
                                  </section>
  )
}
