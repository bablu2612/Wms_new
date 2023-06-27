import React, { useState } from "react";
import Faqstyle from "../styles/Faq.style";
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
    <Faqstyle>
      <section className="parent_fq py-80">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="faqwrap">
                <h4>FAQs</h4>
                <h3>Frequently Asked Question</h3>
                <div className="wrap-qs">
                  {data.map((item, index) => (
                    <div key={index} className="slide_acc">
                      <div
                        onClick={() => toggleAccordion(index)}
                        className="box_bx"
                      >
                        {item.title}
                        <i class="ct-accordion-icon-plus"></i>
                      </div>
                      {activeIndex === index && <div>{item.content}</div>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Get In Touch</h4>
              <h3>Make An Free IT Consultant</h3>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="d-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        name="field1"
                        value={formData.field1}
                        placeholder="Your Name*"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="field2"
                        value={formData.field2}
                        placeholder="Mail*"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="form-group">
                      <input
                        type="text"
                        placeholder="Your Phone"
                        name="field3"
                        value={formData.field3}
                        onChange={handleInputChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        placeholder="Select Service"
                        name="selectField"
                        value={formData.selectField}
                        onChange={handleInputChange}
                        className="form-control"
                      >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="comment">
                    <textarea
                      placeholder="Your Message*"
                      name="textareaField"
                      value={formData.textareaField}
                      onChange={handleInputChange}
                      className="form-control"
                    ></textarea>
                  </div>
                  <div className="btn-wrap">
                    <button type="submit" className="btn btn_purple">
                      Submit Now +
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Faqstyle>
  );
};

export default Faq;
