import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';
import { Sidebar, Navbar } from '../components';

const CreateCampaign = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        title: '',
        description: '',
        target: '',
        deadline: '',
        image: ''
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({ ...form, [fieldName]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        checkIfImage(form.image, async (exists) => {
            if (exists) {
                setIsLoading(true)
                await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18) })
                setIsLoading(false);
                navigate('/');
            } else {
                alert('Provide valid image URL')
                setForm({ ...form, image: '' });
            }
        })
    }

    return (
        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
            </div>

            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar />

                <div>
                    {isLoading && <Loader />}
                    <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-color-1 rounded-[10px]">
                        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-color-5">Start a Campaign</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px] text-color-5">
                        <div className="flex flex-wrap gap-[40px]">
                            <FormField
                                labelName="Your Name *"
                                placeholder="John Doe"
                                inputType="text"
                                value={form.name}
                                handleChange={(e) => handleFormFieldChange('name', e)}
                            />
                            <FormField
                                labelName="Campaign Title *"
                                placeholder="Write a title"
                                inputType="text"
                                value={form.title}
                                handleChange={(e) => handleFormFieldChange('title', e)}
                            />
                        </div>

                        <FormField
                            labelName="Story *"
                            placeholder="Write your story"
                            isTextArea
                            value={form.description}
                            handleChange={(e) => handleFormFieldChange('description', e)}
                        />

                        <div className="w-full flex justify-start items-center p-4 bg-color-1 h-[120px] rounded-[10px]">
                            <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" />
                            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
                        </div>

                        <div className="flex flex-wrap gap-[40px]">
                            <FormField
                                labelName="Goal *"
                                placeholder="ETH 0.50"
                                inputType="text"
                                value={form.target}
                                handleChange={(e) => handleFormFieldChange('target', e)}
                            />
                            <FormField
                                labelName="End Date *"
                                placeholder="End Date"
                                inputType="date"
                                value={form.deadline}
                                handleChange={(e) => handleFormFieldChange('deadline', e)}
                            />
                        </div>

                        <FormField
                            labelName="Campaign image *"
                            placeholder="Place image URL of your campaign"
                            inputType="url"
                            value={form.image}
                            handleChange={(e) => handleFormFieldChange('image', e)}
                        />

                        <div className="flex justify-center items-center mt-[40px]">
                            <CustomButton
                                btnType="submit"
                                title="Submit new campaign"
                                styles="bg-[#1dc071]"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCampaign