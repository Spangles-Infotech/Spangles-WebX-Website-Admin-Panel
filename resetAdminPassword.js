const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { hashPassword } = require("./Utilities/hashing");
const User = require("./Models/user.model");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  try {
    const user = await User.findOne({ username: "rohits0729" });
    if (!user) {
      console.log("❌ Admin not found");
      process.exit();
    }

    const newPassword = "Test@123"; // <- Set new password here
    user.password = hashPassword(newPassword);
    await user.save();

    console.log("✅ Password reset successfully to:", newPassword);
    process.exit();
  } catch (error) {
    console.error("❌ Error resetting password:", error);
    process.exit(1);
  }
})();
