import React, { useState } from "react";

const Faq = () => {
  let data = [
    { title: "Question1", content: "Answer1" },
    { title: "Question2", content: "Answer2" },
    { title: "Question3", content: "Answer3" },
    { title: "Question4", content: "Answer4" },
    { title: "Question5", content: "Answer5" },
    { title: "Question6", content: "Answer6" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    field1: "",
    field2: "",
    field3: "",
    selectField: "",
    textareaField: "",
  });

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or other operations with formData
    console.log(formData);
    // Reset form fields
    setFormData({
      field1: "",
      field2: "",
      field3: "",
      selectField: "",
      textareaField: "",
    });
  };

    return (
      
    <section>
      <div>
        <span>FAQs</span>
        <h3>
          <span>Frequently Asked Question</span>
        </h3>
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <div onClick={() => toggleAccordion(index)}>{item.title}</div>
              {activeIndex === index && <div>{item.content}</div>}
            </div>
          ))}
        </div>
      </div>
      <div>
        <span>Get In Touch</span>
        <h3>
          <span>Make An Free IT Consultant</span>
        </h3>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="field1"
                value={formData.field1}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="field2"
                value={formData.field2}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="field3"
                value={formData.field3}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <select
                name="selectField"
                value={formData.selectField}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div>
              <textarea
                name="textareaField"
                value={formData.textareaField}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Faq;
