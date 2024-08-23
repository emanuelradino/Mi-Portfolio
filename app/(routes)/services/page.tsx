import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import { Avatar } from "@/components/avatar";
import AvatarServices from "@/components/avatar-services";
import SliderServices from "@/components/slider-services";

const ServicesPage = () => {
    return(
        <>
            <TransitionPage/>
            <CircleImage/>
            <AvatarServices/>
            <div className="grid items-center justify-center h-screen max-w-5xl
            gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20 md:mt-0 ">
            <h1 className="text-2xl leading-tight text-justify md:text-left md:text-4xl md:mb-5">
                Mis {" "}
                <span className="font-bold text-secondary" >
                    servicios.
                </span>
            </h1>
                <p className="mb-20 text-lg text-gray-300 md:text-left">Ofrezco servicios de 
                    desarrollo web frontend especializados en la creación
                    de sitios web y aplicaciones atractivas y funcionales.
                    Utilizando las últimas tecnologías como: <br/> Html,JavaScript,NextJS,React,NodeJs,diseño 
                    interfaces de usuario intuitivas y responsivas.</p>
                   
              </div>
            
            {/* SLIDER */ }
            <div>
                <SliderServices/>
            </div>
         </div>
        </>
    );
}

export default ServicesPage

