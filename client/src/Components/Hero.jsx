import heroImg from '../assets/Designer.jpeg';
import Typed from 'react-typed';

const Hero = () =>{
    return(
        <div className="md:mt-24 md:grid grid-cols-2 items-center md:m-40 m-5">
            <div className="cols text-white md:ml-24">
                <p className="md:mb-4 text-center ml-4">
                <Typed
                    strings={['*****************************']}
                    typeSpeed={40}
                />
                </p>
                <h1 className="text-8xl font-medium mb-4 text-center"><i>{` Jaxel `}</i></h1>
                <p className="md:mb-4 text-justify">Welcome to Jaxel, where data transformation meets simplicity. We specialize in converting CSV to JSON and vice versa, offering a user-friendly platform for seamless file transitions. Whether you're a novice or an expert, Jaxel empowers you with efficient data handling. Experience innovation in data transformation—join us and redefine your workflow.</p>
                <input className="p-4 w-full mb-4  bg-purple-600 rounded-md text-white" type="submit" name="" id="" value={"Get Started"} />
                <p className="mb-4 opacity-[0.5]">*Assuring no storage of personal data</p>
            </div>
            
            <div className="cols ">
                <img 
                className="rounded-2xl w-[65%] float-end border-8 border-double border-gray-600 border-spacing-4"
                src={heroImg} alt="Jaxel" />
            </div>
        </div>
    );
}

export default Hero;