import nodemailer from "nodemailer";


export const mailer = ({ name, email, message}) => {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER, // Use environment variable
            pass: process.env.EMAIL_PASS, // Use environment variable
          },
        });
        
       

        const mailOptions = {
          from: email, // sender address
          to: "fetamuse@gmail.com", // list of receivers
          subject: `${name} sent you a message from your portfolio`, // Subject line
          html: message, // plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) console.log(err);
          else console.log(info);
        });
}

