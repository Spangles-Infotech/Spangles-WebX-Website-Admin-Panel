const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./Models/user.model");
const { hashPassword } = require("./Utilities/hashing");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    // Encrypt the password before saving
    const encryptedPassword = hashPassword("07-11-2003");

    const newAdmin = new User({
      name: "Spangles Webx Admin",
      username: "WebXAdmin@123",
      password: {
        iv: encryptedPassword.iv,
        encryptedData: encryptedPassword.encryptedData,
      },
      phone_number: "8903169029",
      access_to: [
        "Job Post",
        "Blogs",
        "Gallery",
        "Register",
        "Applicants",
        "Enquiries & Messages",
      ],
      isAdmin: true,
      email: "hr.spangleswebx@gmail.com",
      Otp: null,
    });

    const saved = await newAdmin.save();
    console.log("✅ Admin created:", saved);
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
})();
