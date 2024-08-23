import TransitionPage from "@/components/transition-page";


const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage/>
            <div className="min-h-svh flex flex-col justify-center items-center px-2"> {/* Agregado px-4 para padding horizontal */}
                <div className="w-full max-w-xl p-4 border border-teal-50 rounded-xl"> {/* Agregado max-w-lg para limitar el ancho */}
                    <h1 className="font-bold text-3xl mb-4 text-center">
                        <span className="text-white">Información</span> <span className="text-secondary">Personal</span>
                    </h1>
                
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
                        </div>
                    </div>

                    <div className="flex items-center mt-4 justify-center">
                        <a 
                            href="/Emanuel_Radino_CV.pdf" 
                            download 
                            className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default TestimonialsPage;
