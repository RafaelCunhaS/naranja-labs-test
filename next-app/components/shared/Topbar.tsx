import Image from 'next/image'

function Topbar() {
  return (
    <div>
      <div className="flex justify-between mt-[18px]">
        <div className="flex gap-8">
          <span className="flex gap-4">
            <Image src="/assets/Call.svg" alt="logo" width={24} height={24} />
            +12 345 6789 0
          </span>
          <span className="flex gap-4">
            <Image src="/assets/Email.svg" alt="logo" width={24} height={24} />
            support@homie.com
          </span>
        </div>

        <div className="flex gap-8">
          <a href="">
            <Image src="/assets/instagram.svg" alt="logo" width={24} height={24} />
          </a>
          <a href="">
            <Image src="/assets/facebook.svg" alt="logo" width={24} height={24} />
          </a>
          <a href="">
            <Image src="/assets/Twitter.svg" alt="logo" width={24} height={24} />
          </a>
          <a href="">
            <Image src="/assets/Linkedin.svg" alt="logo" width={24} height={24} />
          </a>
        </div>
      </div>

      <hr className="border bg-gray-1 my-4" />

      <div className="flex items-center justify-between">
        <p className="font-semibold text-4xl">
          Adven<span className="font-semibold text-secondary">car</span>
        </p>
        <nav className="flex gap-14 items-center">
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Car Catalogue</a>
          <a href="">FAQ</a>
          <a href="" className="flex gap-[0.5px]">
            More <Image src="/assets/chevron-down.svg" alt="logo" width={24} height={24} />
          </a>
        </nav>
        <div className="flex gap-8 items-center">
          <a href="" className="underline text-secondary">
            Sign In
          </a>
          <button className="button bg-secondary">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar
