const {dataSource} = require('../database');
const {dept} = require('../entity/department');
const deptRepo = dataSource.getRepository('dept');
const appConst = require('../constants');

const add = async (req, res) => {
    try{
        const resp =await deptRepo.save(req.body);
        res.status(200).json({
            status: appConst.status.success,
            response: resp.count,
            message: "record inserted"
        });
    }
    catch(error)
    {
        console.error(error.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: error.message,
    })
    }
}

//getalldepatments
const getalldepartments = async (req, res) => {
    try {
      const resp = await deptRepo.find();
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

  //getoneemployee
const findoneemployee = async (req, res) => {
    try {
      const resp = await deptRepo.findOneBy({ dept_id: req.params.dept_id });
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

  //delete department by id

const deletedepartmentbyid = async (req, res) => {
    try {
      const resp = await deptRepo.delete({ dept_id: req.params.dept_id });
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
  //update department
  const updatedepartment = async (req, res) => {
    try {
      const id = req.params.dept_id;
  
      await deptRepo.update({ dept_id: id }, req.body);
      res.send(id + " updated  successfully");
    } catch (error) {
      console.log(err.message);
    }
  };
  
module.exports ={add,getalldepartments,findoneemployee,deletedepartmentbyid,updatedepartment}