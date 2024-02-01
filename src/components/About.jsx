import React from "react";

function About() {
    return (
        <div className="h-full w-full relative">
            <img src={'./Image/Greenwashing.png'} className="w-full h-auto object-cover
             absolute mix-blend-overlay"/>
            <div className="p-4">
                <h1 className="flex justify-center text-color-2 font-semibold text-6xl">
                    Greenwashing
                </h1>
                <p className="text-gray-200 text-color-5 text-xl text-center">
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                    reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
        </div>
    )
}

export default About