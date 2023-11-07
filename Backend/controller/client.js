const ClientSchema = require("../modals/client");

const createclient = async (req, res) => {
  try {
    const client = await ClientSchema.create(req.body);
    res.json({
      message: "Client Created Successfully",
      data: client,
      status: 200,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getclient = async (req, res) => {
  try {
    const clients = await ClientSchema.find({});
    res.json({
      data: clients,
      status: 200,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateclient = async (req, res) => {
  const body = req.body;
  console.log(body)
  try {
    const client = await ClientSchema.findByIdAndUpdate(body._id, body);
    if (client) {
      res.json({
        message: "Client updated Successfully",
        data: client,
        status: 200,
      });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteclient = async (req, res) => {
  const { id } = req.body;
  try {
    const client = await ClientSchema.findByIdAndDelete(id);
    if (client) {
      res.json({
        message: "Client removed Successfully",
        data: client,
        status: 200,
      });
    } else {
      res.status(404).json({ message: "Client not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createclient,
  getclient,
  updateclient,
  deleteclient,
};
