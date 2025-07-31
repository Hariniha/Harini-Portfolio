import { Twitter, Linkedin,  Github } from "lucide-react";


const Footer = () => {
    return (
        <div className='flex justify-between items-center bg-black px-10 py-4'>
            <div className=" flex gap-3 items-center text-white">
                <a
                    href="https://x.com/HariniPriya1218"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-blue-400 transition-all duration-300 bg-black border border-white/[0.15] p-2 rounded-xl hover:border-blue-400 hover:scale-105"
                >
                    <Twitter size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/harini-priya-k-5390b1331"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-blue-600 transition-all duration-300 bg-black border border-white/[0.15] p-2 rounded-xl hover:border-blue-600 hover:scale-105"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="https://github.com/Hariniha"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" transition-all duration-300 bg-black border border-white/[0.15] p-2 rounded-xl hover:border-white hover:scale-105"
                >
                    <Github size={20} />
                </a>
                
            </div>
            <p className='text-white/50'>Designed & Developed by <span className='text-white'>Harini Priya</span></p>
        </div>
    )
}

export default Footer