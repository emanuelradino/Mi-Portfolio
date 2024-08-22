import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, PenLineIcon, PenBoxIcon, Github, Instagram } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@emanuelradino947",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/emanuelradino/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/Emanuel_Radino",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/emanuelradino",
    },
    {
        id: 5,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/emanuelradino/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Empresa CiatWare (Práctica Profesional)",
        subtitle: "Analista Funcional",
        description: "Análisis y diseño de funcionalidades/requerimientos. Creación y definición de historias de usuario. Pruebas funcionales. Diseño y ejecución de casos de prueba. Reporte de incidentes (Jira).",
        date: "03/2023",
    },
    {
        id: 2,
        title: "Empresa TELEFÓNICA MÓVILES ARGENTINA S.A (MOVISTAR)",
        subtitle: "Recepción de Clientes / Atención a Clientes Individuos / Atención a Empresas/Negocios / Vendedor / Ejecutivo de Negocios",
        description: "Recepción de clientes con actitud amigable y profesional, proporcionando información clave sobre los servicios y procedimientos de la empresa. Atención personalizada a clientes individuales, identificando sus necesidades y proporcionando soluciones adaptadas. Atención especializada a empresas y negocios, ofreciendo soluciones personalizadas. Cumplimiento y superación de objetivos de ventas. Manejo de carteras de clientes, cuentas y seguimiento de su facturación.",
        date: "2015-2022",
    },
    {
        id: 3,
        title: "Empresa ATENTO S.A",
        subtitle: "Asesor Telefónico / Soporte Técnico / Televentas / Supervisor",
        description: "Asesoramiento experto a clientes a través de comunicaciones telefónicas, garantizando una experiencia excepcional. Soporte técnico de primer nivel a clientes, resolviendo problemas de hardware y software por teléfono, correo electrónico o chat en vivo. Cumplimiento consistente con los objetivos de ventas establecidos. Resolución de problemas y manejo de situaciones conflictivas para asegurar la satisfacción del cliente, elaboración de informes sobre el rendimiento del equipo, y capacidad para motivar y guiar a un equipo hacia el logro de objetivos.",
        date: "2009-2015",
    }
];



export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia en ventas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1 ,
        endCounter: 1,
        text: "Analista Funcional",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 3,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
  
];

export const serviceData = [
   
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "",
    },
    {
        icon: <Crop />,
        title: "Analista Funcional",
        description: "",
    },
    {
        icon: <Pencil/>,
        title: "QA/tester",
        description: "",
    },
    
    {
        icon: <Rocket />,
        title: "Vendedor",
        description: "",
    },
    {
        icon: <PenBoxIcon/>,
        title: "Ejecutivo",
        description: "",

    },
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/emanuelradino/pagina-alquiler-de-autos",
        urlDemo: "https://pagina-alquiler-de-autos.vercel.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/emanuelradino/Landing-bank/",
        urlDemo: "https://radinodev-landing-bank.netlify.app/",
    },
    {
        id: 3,
        title: "web page",
        image: "/image-8.jpg",
        urlGithub: "https://github.com/emanuelradino/web-spa-yt",
        urlDemo: "https://web-spa-b7f199ejp-emanuel-radinos-projects.vercel.app/",
    },
    
    
   
];


