import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: "",
        pass: ""
    }
})

const sendMailToStdudents = async (to, text) => {
    const mailOptions = {
        from: "abhishekdhole60@gmail.com",
        to: to,
        subject: "Your grade point",
        text: text
    }
    try {
        const info = await transporter.sendMail(mailOptions)
        return { status: true }
    } catch (error) {
        return { status: false }
    }
}

export default sendMailToStdudents