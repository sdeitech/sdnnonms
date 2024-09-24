import { HTTP_CODE, MESSSAGE } from "../config/constants";
import sendMailToStdudents from "../helpers/nodeMailer";
import Students from "../models/students";


const createStudent = async (req, res) => {
    // console.log(`ccreating student`)

    // checking fields are empty
    const { firstName, lastName, email, english, science, math, about } = req.body
    if (!firstName || !lastName || !email || !english || !science || !math || !about) {
        return res.status(HTTP_CODE.BAD_REQ).json({ msg: MESSSAGE.ALL_FILED_REQ })
    }
    try {

        //  calculating percentage

        const percent = ((Number(english) + Number(science) + Number(math)) / 300) * 100
        console.log(percent)

        // calculating grade based 
        let grade;
        if (percent >= 90) {
            grade = "A"
        }
        else if (percent >= 60) {
            grade = "B"
        }
        else {
            grade = "C"
        }
        // console.log(grade)

        // check user alredy exist in db or not
        const stdFound = await Students.findOne({ email });
        console.log(stdFound)
        if (stdFound) {
            return res.status(HTTP_CODE.BAD_REQ).json({ msg: MESSSAGE.ALREADY_EXISTS })
        }

        // object to save in database
        const student = new Students({
            firstName: firstName,
            lastName: lastName,
            email: email,
            english: english,
            science: science,
            math: math,
            percent: percent.toFixed(2),
            grade: grade,
            about: about
        })

        const data = await student.save()

        // email text
        const text = `
        Hello ${firstName},
        Your percentage : ${percent.toFixed(2)}
        Your Grade : ${grade}
        `

        // email sender
        const sendMail = await sendMailToStdudents(email, text)
        if (sendMail.status) {
            return res.status(HTTP_CODE.NEW_CREATED).json(data)
        }
        if (!sendMail.status) {
            return res.status(HTTP_CODE.NEW_CREATED).json({ msg: "Mail failed", data })
        }

    } catch (error) {
        // console.log(`Error ${error.message}`)
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERR).json({ msg: error.message })
    }
}


const getAllStudents = async (req, res) => {
    // console.log(`getting all student`)

    try {
        const stds = await Students.find({})
        return res.status(HTTP_CODE.SUCCESS).json(stds)

    } catch (error) {
        console.log(`Error ${error.message}`)
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERR).json({ msg: error.message })
    }
}


const getPaginated = async (req, res) => {
    // console.log(`getting paginated data student`)

    const { page = 1, limit = 5 } = req.query
    const pageNo = Number(page)
    const pageLimit = Number(limit)
    const skip = (pageNo - 1) * pageLimit

    try {
        const students = await Students.find({}).skip(skip).limit(pageLimit)
        const totalRecoed = await Students.countDocuments()
        const totalPages = Math.ceil(totalRecoed / pageLimit)
        return res.status(HTTP_CODE.SUCCESS).json({
            students,
            totalRecoed,
            totalPages,
            pageNo
        })

    } catch (error) {
        // console.log(`Error ${error.message}`)
        return res.status(HTTP_CODE.INTERNAL_SERVER_ERR).json({ msg: error.message })
    }
}


export { createStudent, getAllStudents, getPaginated };
