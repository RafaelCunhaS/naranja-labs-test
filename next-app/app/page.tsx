import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className="w-[784px] h-[372px] mt-[100px]">
        <h1 className="bebas-neue text-8xl leading-[112px]">ACCOMPANY YOUR JOURNEY WITH COMFORT</h1>
        <p className="text-2xl text-gray-1">
          Car rent services for various terrain with guaranteed quality
        </p>
        <div className="flex gap-8 pt-8">
          <button className="button bg-primary text-black-1 border border-black-1">
            Learn More
          </button>
          <div className="flex gap-4 items-center">
            <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full drop-shadow-[0_24px_50px_rgba(0,0,0,0.15)]">
              <Image
                src="/assets/Play.svg"
                alt="play arrow"
                width={24}
                height={24}
                className="decoration-black-1"
              />
            </span>
            <p>Watch Video</p>
          </div>
        </div>
      </div>

      <div className="w-[1260px] mt-20 bg-white rounded-[96px] drop-shadow-[0_24px_50px_rgba(0,0,0,0.05)] px-[62px] py-[34.5px]">
        <div className="flex gap-8 justify-around">
          <div className="flex flex-col gap-2 justify-start">
            <p className="text-gray-1">Location</p>
            <div className="flex gap-2">
              <Image src="/assets/Location.svg" alt="location" width={24} height={24} />
              <p className="font-medium">Choose Location</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-start">
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

          <div className="flex flex-col gap-2 justify-start">
            <p className="text-gray-1">Pick Up</p>
            <div className="flex gap-6">
              <div className="flex gap-2 w-[152px]">
                <Image src="/assets/Location.svg" alt="calendar" width={24} height={24} />
                <p className="font-medium">17 July 2021</p>
              </div>
              <Image src="/assets/chevron-down.svg" alt="arrow down" width={24} height={24} />
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-start">
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

      <aside className="absolute right-[156px] top-[222px] w-[890px] h-[559px]">
        <Image
          src="/assets/sport-car.svg"
          alt="sport car"
          width={890}
          height={559}
          className="-z-10 drop-shadow-[0_24px_24px_rgba(0,0,0,0.5)]"
        />
        <Image
          src="/assets/Rectangle.svg"
          alt="rectangle"
          width={815}
          height={539}
          className="-z-30 absolute -right-1 bottom-[26px]"
        />
        <div className="w-[192px] h-[470px] bg-gradient-to-b from-white/40 to-white/10 -z-20 rounded-t-[32px] absolute bottom-[26px] right-[84px]" />
      </aside>

      <div className="mt-[144px] w-full flex gap-20 text-4xl text-gray-1">
        <p className="playfair-display pl-[246.5px]">SimSong</p>
        <p className="font-medium">Harps</p>
        <p className="vidaloka">DiskVan</p>
        <p className="montserrat font-bold">Ikon</p>
        <p className="nunito font-bold">Strons</p>
        <p className="inter font-bold pr-[246.5px]">Cocoon</p>
      </div>
    </main>
  )
}
