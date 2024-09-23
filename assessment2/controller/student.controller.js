const student = require("../model/student.model");

/*
http get method 
 */
const getDetails = async(req, res)=>
{
    try {
        const students=await student.find(req.body);
        res.status(200).json(students);
        
    } catch (error) {
        res.status(500).json({message:error})
        
    }
}

/*
http get by id
*/

const getDetailById=async(req,res)=>
{
    try {
        const newStudent=await student.findById(req.params.id);
        res.status(200).json(newStudent);
        
    } catch (error) {
        res.status(500).json({message:error})
    }
}

/*
http post method controller for student 
*/

const createReport = async (req, res) => {
  try {
    const newStudent = new student(req.body);
    await newStudent.save();
    res.status(200).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "error while creating collection" });
  }
};


/*
exports method to routes
*/

module.exports={createReport,getDetailById,getDetails};