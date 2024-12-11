import nodemailer from "nodemailer";

export const mailer = async ({ name, email, message, subject = "" }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: "fetamuse@gmail.com",
      subject: subject || `${name} sent you a message from your portfolio`,
      html: `<p><strong>Message from:</strong> ${name} (${email})</p><p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Email could not be sent.");
  }
};
