import Image from 'next/image'

function SearchBar() {
  return (
    <div className="w-[1260px] mt-20 bg-white rounded-[96px] drop-shadow-[0_24px_50px_rgba(0,0,0,0.05)] px-[62px] py-[34.5px]">
      <div className="flex gap-8 justify-around">
        <div className="search-bar-item">
          <p className="text-gray-1">Location</p>
          <div className="flex gap-2">
            <Image src="/assets/Location.svg" alt="location" width={24} height={24} />
            <p className="font-medium">Choose Location</p>
          </div>
        </div>

        <div className="search-bar-item">
          <p className="text-gray-1">Car Type</p>
          <div className="flex gap-6">
            <div className="flex gap-2 w-[152px]">
              <Image src="/assets/Car.svg" alt="car" width={24} height={24} />
              <p className="font-medium">City Car</p>
            </div>
            <Image src="/assets/chevron-down.svg" alt="arrow down" width={24} height={24} />
          </div>
        </div>

        <div className="border bg-gray-1 h-[60px] opacity-50" />

        <div className="search-bar-item">
          <p className="text-gray-1">Pick Up</p>
          <div className="flex gap-6">
            <div className="flex gap-2 w-[152px]">
              <Image src="/assets/Location.svg" alt="calendar" width={24} height={24} />
              <p className="font-medium">17 July 2021</p>
            </div>
            <Image src="/assets/chevron-down.svg" alt="arrow down" width={24} height={24} />
          </div>
        </div>

        <div className="search-bar-item">
          <p className="text-gray-1">Return</p>
          <div className="flex gap-6">
            <div className="flex gap-2 w-[152px]">
              <Image src="/assets/Location.svg" alt="calendar" width={24} height={24} />
              <p className="font-medium">17 July 2021</p>
            </div>
            <Image src="/assets/chevron-down.svg" alt="arrow down" width={24} height={24} />
          </div>
        </div>

        <button className="button w-40 bg-cyan-1">Search</button>
      </div>
    </div>
  )
}

export default SearchBar
