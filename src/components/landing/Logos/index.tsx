import Image from "next/image";

import HeroImage from "@/assets/images/hero-image.png"

export default function LogoCloud() {
  return (
    <>
      <div className="mt-0 bg-white py-24 sm:py-32">
        <div className="mb-8 flex justify-center"> 
          <Image
            src={HeroImage}
            width={1000}
            height={256}
            alt="HeroImage"
          />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center">
          <div  
            x-data="{}"
            x-init="$nextTick(() => {
                let ul = $refs.logos;
                ul.insertAdjacentHTML('afterend', ul.outerHTML);
                ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                <li>
                  <Image
                    className="max-h-12 w-full object-contain"
                    src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-arifu_wcjwkv.png"
                    alt="Arifu"
                    width={128}
                    height={38}
                  />
                </li>
                
                <li>
                  <Image
                      className="max-h-12 w-full object-contain"
                      src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-54gene_bseu02.png"
                      alt="54gene"
                      width={128}
                      height={38}
                    />
                </li>
                
                <li>
                  <Image
                      className="max-h-12 w-full object-contain"
                      src="https://res.cloudinary.com/soss/image/upload/v1631100661/Sidebrief%20Assets/logo-edubridge_lyhr9z.png"
                      alt="Edubridge"
                      width={128}
                      height={38}
                    />
                </li>
                
                <li>
                  <Image
                      className="max-h-12 w-full object-contain"
                      src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-seamlesshr_fuh8ye.png"
                      alt="SeamlessHR"
                      width={128}
                      height={38}
                    />
                </li>
                
                <li>
                  <Image
                      className="max-h-12 w-full object-contain"
                      src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-payqin_lg4zwc.png"
                      alt="PayQin"
                      width={128}
                      height={38}
                    />
                </li>

                <li>
                  <Image
                      className="max-h-12 w-full object-contain"
                      src="https://res.cloudinary.com/soss/image/upload/v1631100662/Sidebrief%20Assets/logo-spleet_nvggfx.png"
                      alt="Spleet"
                      width={128}
                      height={38}
                    />
                </li>
            </ul>   
          </div>
        </div>
      </div>
    </>
  )
}
