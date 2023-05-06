import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
import { checkIfImage } from "../utils";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [selectedImage, setSelectedImage] = useState(null); //added
  const [imageUrl, setImageUrl] = useState(""); //added
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
    category: ""
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    checkIfImage(form.image, async (exists) => {
      setIsLoading(true)
      form['image'] = imageUrl;
      // console.log(form);
        await createCampaign({ ...form, target: ethers.utils.parseUnits(form.target, 18)})
        setIsLoading(false);
        navigate('/');
    });
  }
  const [value, setValue] = useState("");
  const handleImageUpload = () => {
    if (selectedImage == null) return;
    const imageRef = ref(storage, `images/${selectedImage.name}`);
    uploadBytes(imageRef, selectedImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl(url);
      });
    });
  };

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  return (
    <div className="bg-white shadow-xl flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-stone-50 rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-gray-600">
          Start a Campaign
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange("name", e)}
          />
          <FormField
            labelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange("title", e)}
          />
        </div>

        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          value={form.description}
          handleChange={(e) => handleFormFieldChange("description", e)}
        />
        {/* <ReactQuill
          placeholder="Your story ..."
          theme="snow"
          value={form.description}
          onChange={(e) => handleFormFieldChange("description", e)}
        /> */}

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange("target", e)}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange("deadline", e)}
          />
        </div>

        <label htmlFor="image-input" className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>Select an image for Campaign image*</label>
        <input type="file" id="image-input" className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-black text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]' onChange={handleImageSelect} />
        <button type="button" className='font-epilogue font-normal text-[14px] leading-[23px] text-white min-h-[47px] px-4 rounded-[8px] border-white bg-black' onClick={handleImageUpload}>
          Upload image
        </button>

        <FormField 
            labelName="Campaign image link"
            placeholder="Auto fill link from your image uploaded"
            inputType="url"
            value={imageUrl}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />

        <FormField
            labelName="Category"
            placeholder="Category of Campaign"
            inputType="text"
            value={form.category}
            handleChange={(e) => handleFormFieldChange("category", e)}
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
  );
};

export default CreateCampaign;
