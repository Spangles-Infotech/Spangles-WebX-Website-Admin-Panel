const nodemailer = require("nodemailer");

async function sendOtpEmail(email, otp) {
  if (!email) {
    throw new Error("Recipient email is not defined");
  }

  console.log("📨 Attempting to send OTP email to:", email); // Debug

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: process.env.SECURE === "true", // ✅ Convert string to boolean
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: `"Spangles Admin" <${process.env.USER}>`,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}`,
      html: `<p>Your OTP for password reset is: <strong>${otp}</strong></p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response); // 🟢 Important log
    return { success: true };
  } catch (error) {
    console.error("❌ Error sending email:", error); // 🔴 Log full error
    return { success: false, error: error.message };
  }
}

module.exports = sendOtpEmail;
