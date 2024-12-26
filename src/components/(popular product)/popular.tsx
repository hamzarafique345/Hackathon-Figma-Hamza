import Image from 'next/image'
import React from 'react'

export default function Popular() {
  return (
    <div>
            {/* Popular Products Section */}
            <div className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Popular Products
          </h3>
          <div className="flex flex-wrap justify-between items-start gap-6">
            {/* Product 1 */}
            <div className="rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full sm:w-[48%] lg:w-[530px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Large.png"
                  alt="The Poplar suede sofa"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-lg">The Poplar suede sofa</h4>
                <p className="text-gray-600">$99.00</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full sm:w-[48%] lg:w-[280px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Parent1.png"
                  alt="The Dandy chair"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-lg">The Dandy chair</h4>
                <p className="text-gray-600">$99.00</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full sm:w-[48%] lg:w-[280px]">
              <div className="relative h-[375px]">
                <Image
                  src="/Parent2.png"
                  alt="The Dandy chair"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  priority
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-lg">The Dandy chair</h4>
                <p className="text-gray-600">$99.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
