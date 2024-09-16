import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/User.js"; // Assuming this is the correct path to your User model

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.PRIVATE_KEY, // Ensure the key is properly named
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

const Sign = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ message: "Name, email, and password are required." });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ email, password: hashedPassword, name });
        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id },
            process.env.PRIVATE_KEY,
            { expiresIn: "1h" }
        );

        return res.status(201).json({ token, user: { id: newUser._id, email: newUser.email, name: newUser.name } });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error." });
    }
};

export { login, Sign };
