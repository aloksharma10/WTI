import axios from "axios";
import React, { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/createclient",
        formData
      );
      console.log(res.data);
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-2">
        <label htmlFor="name">First Name</label>
        <input
          class="form-control"
          type="text"
          name="firstname"
          id="fname"
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Last Name</label>
        <input
          class="form-control"
          type="text"
          name="lastname"
          id="lname"
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Email</label>
        <input
          class="form-control"
          type="text"
          name="email"
          id="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Phone</label>
        <input
          class="form-control"
          type="text"
          name="mobile"
          id="mobile"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Project</label>
        <input
          class="form-control"
          type="text"
          name="project"
          id="project"
          onChange={(e) =>
            setFormData({ ...formData, project: e.target.value })
          }
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Create Client
      </button>
    </form>
  );
};
export default Form;
