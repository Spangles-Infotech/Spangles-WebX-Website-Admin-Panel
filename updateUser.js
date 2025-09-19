const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const User = require("./Models/user.model");

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  try {
    const updated = await User.findByIdAndUpdate(
      "687e2ae9520d9ba52b748a5f", // your admin _id
      {
        name: "Spangles Admin",
        username: "Admin@123",
        email: "spanglesinfotech@gmail.com"
      }, 
      { new: true } // return the updated doc
    );
    console.log("✅ User updated:", updated);
    process.exit();
  } catch (err) {
    console.error("❌ Update error:", err);
    process.exit(1);
  }
})();
