import Image from "next/image";
import EffectImg from "../../public/Herosection.png"
import { BorderBeam } from "../magicui/border-beam";

export function ImageEffect() {
    return ( 
        <div className="w-screen h-screen flex justify-center items-center">
        <span>
          <Image
          src={EffectImg}
          width={900}
          height={800}
          alt="Course Curriculum Overview"
          className="w-full h-auto rounded-lg"
          />
        </span>
        {/* <BorderBeam size={250} duration={12} delay={9} /> */}

      </div>
    )
}