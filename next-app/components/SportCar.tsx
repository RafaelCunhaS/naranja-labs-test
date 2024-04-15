import Image from 'next/image'

function SportCar() {
  return (
    <aside className="absolute right-[156px] top-[222px] w-[890px] h-[559px]">
      <Image
        src="/assets/sport-car.svg"
        alt="blue sport car"
        width={890}
        height={559}
        className="drop-shadow-[0_24px_24px_rgba(0,0,0,0.5)]"
      />
      <Image
        src="/assets/Rectangle.svg"
        alt="orange rectangle"
        width={815}
        height={539}
        className="-z-20 absolute -right-1 bottom-[26px]"
      />
      <div className="w-[192px] h-[470px] bg-gradient-to-b from-white/40 to-white/10 -z-10 rounded-t-[32px] absolute bottom-[26px] right-[84px]" />
    </aside>
  )
}

export default SportCar
