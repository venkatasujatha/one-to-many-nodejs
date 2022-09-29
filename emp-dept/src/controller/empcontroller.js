const { dataSource } = require("../database");
const { employee } = require("../entity/employee");
const empRepo = dataSource.getRepository("employee");
const appConst = require("../constants");

//post

const add = async (req, res) => {
  try {
    const resp = await empRepo.save(req.body);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: "record inserted",
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

//getallemployees
const getallemployees = async (req, res) => {
  try {
    const resp = await empRepo.find();
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

//get one employee
const findemployee = async (req, res) => {
  try {
    const resp = await empRepo.findOneBy({ id: req.params.id });
    res.send(resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};

//delete employee

const deleteemployeebyid = async (req, res) => {
  try {
    const resp = await empRepo.delete({ id: req.params.id });
    console.log("deleted successfully", resp);
    res.status(200).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    });
  }
};
//update employee

const updateemployeebyid = async (req, res) => {
  try {
    const id = req.params.id;

    await empRepo.update({ id: id }, req.body);
    res.send(id + " is updated successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  add,
  getallemployees,
  findemployee,
  deleteemployeebyid,
  updateemployeebyid,
};
