import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

function NewItem({ data, username }) {
  const { navbar, jobsCategories } = data;
  const [selectedCategories, setSelectedCategories] = useState("");
  const [currentMake, setCurrentMake] = useState("");
  const [currentModel, setCurrentModel] = useState("");
  const [imageSelected, setImageSelected] = useState("");

  const { carMakeAndModel } = data;
  //Get list of car make from object keys.
  const makeList = Object.keys(carMakeAndModel);

  //Get list of categories
  const generateCategories = (categories) => {
    let options = [];
    if (categories) {
      categories.forEach((category) => {
        options.push({ value: category.toLowerCase(), label: category });
      });
      return options;
    }
    return;
  };

  //Handle Form submit
  const handleSubmit = e => {
    if (!document.getElementById("thumbnail").value) {
      e.preventDefault();
      alert('Please upload your item\'s image');
    };
  };

  //Change label text and save image to state
  const handleSelectedImage = file => {
    setImageSelected(file);
    let fileName = file.name;
    if (fileName.length >= 20) {
      fileName = fileName.substring(0, 15) + "..."
    }
    document.getElementById('label').innerHTML = fileName;
  }

  //Upload Image to cloud storage
  const uploadImage = e => {
    e.preventDefault();
    // Use form data object to send files rather than json
    let formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset","w9pu9eax")
    axios.post("https://api.cloudinary.com/v1_1/dixd5lojp/image/upload", formData)
    .then(res => {
      document.getElementById("thumbnail").value = res.data.secure_url;
      alert("Successfully uploaded image.");
    }).catch(err => alert("Error upload your image, please try again."));
  }
  
  // Styling object for Select Component
  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "80%",
      marginBottom: "1.5rem",
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: "15px",
      width: "100%",
    }),
  };

  return (
    <form action="/item/add" method="POST" className="item-form" onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder={`Item's name`} />
      <input
        type="number"
        name="price"
        id="price"
        placeholder={selectedCategories === "jobs" ? "Salary" : "Item's price"}
      />
      {/* Choose the categories of Posting Item */}
      <Select
        defaultValue={{ value: "", label: "Categories" }}
        options={generateCategories(navbar.mainMenu.concat(navbar.dropdown))}
        styles={customStyles}
        onChange={(selectedOption) => {
          document.getElementById("category").value = selectedOption.value;
          setSelectedCategories(selectedOption.value);
        }}
      />
      {selectedCategories === "cars" && (
        <>
          <Select
            defaultValue={{ value: "", label: "Make" }}
            options={generateCategories(makeList)}
            onChange={(selectedOption) => {
              setCurrentMake(selectedOption.label);
              setCurrentModel("");
            }}
            styles={customStyles}
          />
          <Select
            value={{
              value: currentModel,
              label: currentModel !== "" ? currentModel : "Model",
            }}
            options={generateCategories(carMakeAndModel[currentMake])}
            onChange={(selectedOption) => setCurrentModel(selectedOption.label)}
            styles={customStyles}
          />
        </>
      )}

      {selectedCategories === "jobs" && (
        <Select
          defaultValue={{ value: "", label: "What types of job?" }}
          options={generateCategories(jobsCategories)}
          styles={customStyles}
          onChange={(selectedOption) => {
            document.getElementById("jobs-categories").value =
              selectedOption.value;
          }}
        />
      )}

      {
        selectedCategories === "accomodation" && (
          <textarea name="description" id = "description" placeholder="Description" rows="4"/>
        )
      }
      <input type="text" name="location" id="location" placeholder="Location" />
      <input type="hidden" name="thumbnail" id="thumbnail"/>
      <input type="hidden" name="category" id="category" />
      <input type="hidden" name="username" id="username" value={username} required/>
      
      {/* Hidden input to record the job category and send to backend */}
      <input type="hidden" name="jobs-categories" id="jobs-categories" />

      <input type="file" id="imageUpload" onChange={(e) => handleSelectedImage(e.target.files[0])}/>
      <label htmlFor="imageUpload" id="label">Choose your thumbnail</label>
      <button onClick={uploadImage}>Submit Image</button>
      <button type="submit">Post New Item</button>
    </form>
  );
}

export default NewItem;
