import axios from "axios";
import React, { useEffect, useState } from "react";
const DataTable = () => {
  const [clients, setClients] = useState([]);
  const getAllClient = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getclient");
      const data = await response.json();
      setClients(data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllClient();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete("http://localhost:8000/api/deleteclient", {
        data: { id },
      });
      if (res.data.success) {
        getAllClient();
      }
    } catch (error) {}
  };
  const handleEditClient = async (id) => {
    try {
      const res = await axios.put("http://localhost:8000/api/updateclient", {
        id,
        update: { lastname: "krishna" },
      });
      if (res.data.success) {
        getAllClient();
      }
    } catch (error) {}
  };
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Firstname</th>
          <th scope="col">Lastname</th>
          <th scope="col">Email</th>
          <th scope="col">Mobile</th>
          <th scope="col">Project</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.length > 0 ? (
          clients.map((client) => (
            <tr key={client._id}>
              <td>{client.firstname}</td>
              <td>{client.lastname}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.project}</td>
              <td className="text-primary" style={{ cursor: "pointer" }}>
                <span onClick={() => handleDelete(client._id)}>Delect</span> |{" "}
                <span onClick={() => handleEditClient(client._id)}>Edit</span>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan="6" className="text-dark text-center">No data found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default DataTable;
