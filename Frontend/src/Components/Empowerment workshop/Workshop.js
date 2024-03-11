import React, { useState, useEffect } from "react";

const Workshop = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contact: '',
    })

    //Get data from the backend

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    }

    //Posting data to the backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/workshops/register/1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            // Close the modal after successful submission
            closeModal();
        } catch (error) {
            console.error(error);
        }
    }

    //Modal functions
    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return <>
    {/* <div class="py-4 px-20 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Welcome to the Empowerment Workshop section of HerLegalRights!</h2>
        <p class="mb-4">Here, we offer a series of workshops and seminars aimed at empowering women to advocate for themselves, navigate legal challenges, and effect positive change in their lives and communities. Our workshops are designed to provide practical skills, insights, and support to help you harness your legal rights effectively.</p>
        
        <h3 class="text-lg font-semibold mb-2">What We Offer:</h3>
        <ul class="list-disc ml-6 mb-4">
            <li>Interactive Workshops: Engage in hands-on workshops covering various topics, including legal literacy, self-defense, negotiation skills, and more.</li>
            <li>Expert-led Sessions: Learn from experienced professionals, including lawyers, activists, and counselors, who share their expertise and insights.</li>
            <li>Peer Support: Connect with like-minded individuals and form a supportive community where you can share experiences, seek advice, and offer encouragement.</li>
            <li>Practical Exercises: Participate in role-plays, case studies, and simulations to apply legal concepts in real-life scenarios and build confidence.</li>
        </ul>
        
        <h3 class="text-lg font-semibold mb-2">How It Works:</h3>
        <ul class="list-disc ml-6 mb-4">
            <li>Workshop Schedule: Stay updated on upcoming workshops and events through our interactive calendar.</li>
            <li>Registration: Sign up for workshops that interest you and reserve your spot in advance.</li>
            <li>Virtual Platform: Attend workshops from the comfort of your home via our online platform, ensuring accessibility for all.</li>
            <li>Feedback Mechanism: Provide feedback on workshops to help us continually improve and tailor our offerings to your needs and preferences.</li>
        </ul>
        
        <h3 class="text-lg font-semibold mb-2">Why Choose Us:</h3>
        <ul class="list-disc ml-6 mb-4">
            <li>Holistic Approach: Our workshops address not only legal issues but also personal development and empowerment, fostering a well-rounded approach to women's rights.</li>
            <li>Inclusive Environment: We welcome women from all backgrounds, ages, and experiences to participate in our workshops, creating a diverse and inclusive community.</li>
            <li>Action-Oriented: Our workshops empower you to take concrete steps towards asserting your rights and effecting positive change in your life and society.</li>
            <li>Safe Space: We prioritize creating a safe and supportive environment where you can freely express yourself, seek guidance, and learn without judgment.</li>
        </ul>
    </div> */}
    <div className='relative flex flex-col items-center w-3/4 h-[18rem]  mx-auto mt-5 px-5 py-3 rounded-md shadow-customDark'>
      <header className='border-b w-full flex flex-col items-start mb-3 pb-3'>
        <h1 className='text-lg'>This is the title</h1>
        <p className='text-sm'>This is the description</p>
      </header>
      <div className='w-full flex flex-row justify-around items-center mb-10'>
        <span>
          <p className='text-sm font-bold'>Date</p>
          <p>10th Feb 2024</p>
        </span>
        <span>
          <p className='text-sm font-bold'>Time</p>
          <p>10:00 AM</p>
        </span>
        <span>
          <p className='text-sm font-bold'>Venue</p>
          <p>Online</p>
        </span>
        <span>
          <p className='text-sm font-bold'>Duration</p>
          <p>2 hours</p>
        </span>
        <span>
          <p className='text-sm font-bold'>Price</p>
          <p>Free</p>
        </span>
      </div>
      <span>
        <button onClick={openModal} className='px-10 pt-1 pb-2 rounded-sm bg-red-500 text-white hover:bg-white hover:text-black hover:border duration-200'>
          Apply
        </button>
      </span>
    </div>
    {isModalOpen && (
                <div className="absolute top-0 modal w-full h-full bg-yellow-50/90">
                    <div className="relative">
                        <form onSubmit className="flex flex-col items-center gap-4 mt-[12rem]">
                            <h2 className="text-lg">Title</h2>
                            <input type="email" className="w-1/2 h-8 px-3 rounded-md outline-none shadow-customDark" id="email" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} required />
                            <input type="text" className="w-1/2 h-8 px-3 rounded-md outline-none shadow-customDark" id="firstName" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" className="w-1/2 h-8 px-3 rounded-md outline-none shadow-customDark" id="lastName" placeholder="Enter Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            <input type="text" className="w-1/2 h-8 px-3 rounded-md outline-none shadow-customDark" id="contact" placeholder="Enter Phone Number" name="contact" value={formData.contact} onChange={handleChange} required />
                            <button type="submit" className="bg-red-500 text-white rounded-sm px-5 hover:bg-red-800 duration-200 mt-4">Submit</button>
                        </form>
                    </div>
                    <span className="close absolute right-12 top-5 text-lg font-bold cursor-pointer" onClick={closeModal}>&times;</span>
                </div>
            )}
</>;
};

export default Workshop;
