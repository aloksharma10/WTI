import axios from "axios";
import React from "react";
const Form = ({ formData, setFormData }) => {
  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/createclient",
        formData
      );
      console.log(res.data);
    } catch (error) {}
  };
  const handleUpdate = async (e) => {
    try {
      const res = await axios.put(
        "http://localhost:8000/api/updateclient",
        formData
      );
      console.log(res.data);
    } catch (error) {}
  };
  return (
    <form>
      <div className="my-2">
        <label htmlFor="name">First Name</label>
        <input
          className="form-control"
          type="text"
          name="firstname"
          id="fname"
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Last Name</label>
        <input
          className="form-control"
          type="text"
          name="lastname"
          id="lname"
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Phone</label>
        <input
          className="form-control"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="my-2">
        <label htmlFor="name">Project</label>
        <input
          className="form-control"
          type="text"
          name="project"
          id="project"
          value={formData.project}
          onChange={(e) =>
            setFormData({ ...formData, project: e.target.value })
          }
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={formData.update ? handleUpdate : handleSubmit}
      >
        {formData.update ? "Update" : "Create Client"}
      </button>
    </form>
  );
};
export default Form;
