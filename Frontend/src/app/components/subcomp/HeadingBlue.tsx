import { FC } from "react";

interface HeadingProps {
  title: string;
}

const HeadingBlue: FC<HeadingProps> = ({title}) => {
    return(
        <>
        <div className="text-center"> 
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-600 mb-6 sm:mb-8 relative inline-block group cursor-pointer text-center leading-tight">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:via-blue-800 group-hover:to-blue-600 transition-all duration-700">
                {title}
                </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 rounded-full shadow-sm"></div>
       </div> 
       </>
    );
};

export default HeadingBlue;