const employee = require('../controller/empcontroller');
const dept = require('../controller/deptcontroller');
const router = require('express').Router();

//add employee
router.post('/addemp',employee.add);
//add Department
router.post('/adddept',dept.add);

//getallemployees
router.get('/getallemp',employee.getallemployees);

//getalldepatments
router.get('/getalldept',dept.getalldepartments);

//getone employee
router.get('/getoneemployee/:id',employee.findemployee);

//getone Department
router.get('/getonedepartment/:dept_id',dept.findoneemployee);
//delete employee
router.delete("/deleteemp/:id", employee.deleteemployeebyid);
//delete department
router.delete("/deleteinfo/:dept_id", dept.deletedepartmentbyid);
//update employee
router.put("/updateemployee/:id", employee.updateemployeebyid);
//update department
router.put("/updatedepartment/:dept_id", dept.updatedepartment);




module.exports = router;