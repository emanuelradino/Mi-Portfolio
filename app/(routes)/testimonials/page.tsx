import TransitionPage from "@/components/transition-page";


const TestimonialsPage = () => {
    return (
     <>
           <TransitionPage/>
                     <div className="min-h-screen flex flex-col justify-center items-center">  {/* Contenedor principal centrado */}
                        <div className="p-4 border border-teal-50 rounded-xl text-xl">  {/* Contenedor con borde y padding */}
                            <h1 className="font-bold text-3xl mb-4 text-center">
                             <span className="text-white">Personal</span> <span className="text-secondary">Information</span>
                            </h1>  {/* Título con "Personal" en blanco y "Information" en text-secondary */}
            
                    <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                            <strong className="text-white text-lg w-32">Name:</strong> 
                                 <span className="text-secondary text-lg">Emanuel Radino</span>
                        </div>

                    <div className="flex items-center mb-2">
                        <strong className="text-white text-lg w-32">Date of Birth:</strong> 
                            <span className="text-secondary text-lg">29/12/1987</span>
                    </div>
            
                    <div className="flex items-center mb-2">
                        <strong className="text-white text-lg w-32">Phone:</strong> 
                            <span className="text-secondary text-lg">+5493816065258</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <strong className="text-white text-lg w-32">Email:</strong> 
                            <span className="text-secondary text-lg">emanuelradino@hotmail.com</span>
                    </div>

                    <div className="flex items-center mb-2">
                        <strong className="text-white text-lg w-32">LinkedIn:</strong> 
                            <a href="http://linkedin.com/in/emanuelradino" target="_blank" rel="noopener noreferrer" className="text-secondary text-lg">
                              http://linkedin.com/in/emanuelradino
                            </a>
                    </div>
            
                    <div className="flex items-center mb-2">
                        <strong className="text-white text-lg w-32">GitHub:</strong> 
                            <a href="https://github.com/emanuelradino" target="_blank" rel="noopener noreferrer" className="text-secondary text-lg">
                            github.com/emanuelradino
                            </a>
                    <div>
               
                </div>
                
            </div>
        </div>
                    <div className="flex items-center mb-2 justify-center">  {/* Flex container para centrar el botón */}
                        <a 
                            href="/Emanuel_Radino_CV.pdf " 
                            
                            download 
                            className="flex items-center mb-0 bg-secondary text-white rounded-lg hover:bg-secondary-dark">
                            Download CV
                        </a>
                    </div>
            </div>
    
        </div>


    </>
    );
}

export default TestimonialsPage;
