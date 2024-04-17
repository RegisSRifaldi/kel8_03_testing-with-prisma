const { getUserByEmail } = require("../services/login");

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await getUserByEmail(email);

      if (!user) {
        return res.status(404).json({ error: "Email tidak terdaftar" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: "Password tidak sesuai" });
      }

      const token = `${user.email}_token`;

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        token: "xyzzyx123asbsasads2313edfqsdq43213",
      });
    } catch (err) {
      return res.status(500).json({ error: "Terjadi kesalahan internal" });
    }
  },
};
