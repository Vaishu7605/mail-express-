nodemailer = require('nodemailer');

// sendEmail = async(email,body)=>{
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:465,
        secure:true,
        auth:{
            user:'vaishnavikesherwani786@gmail.com',
            pass:'utyt zzar jvsx smsw'
        }
    })
// }

// mail object

mail = {
    from: 'vaishnavikesherwani786@gmail.com',
    to: 'gufrannitkkr@gmail.com',
    subject: 'OTP ',
    text: 'your otp is here... '
}

//send mail

transporter.sendMail(mail, (err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})