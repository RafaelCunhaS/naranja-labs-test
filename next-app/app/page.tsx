import SearchBar from '@/components/SearchBar'
import SportCar from '@/components/SportCar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
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

      <SearchBar />

      <SportCar />

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
