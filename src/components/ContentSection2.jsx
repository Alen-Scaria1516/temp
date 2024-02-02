

const ContentSection2 = ({img,heading,para}) => {
    return ( 
        <div className='w-full py-10 px-4'> 
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>   
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>{heading}</h1>
                    <p>{para} </p>
                </div>
                <img className='w-[450px] mx-auto my-4' src={img}  alt='/' /> 
            </div>
        </div>
    );
}

export default ContentSection2;