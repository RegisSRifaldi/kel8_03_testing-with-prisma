const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  getUserByEmail: async (email, password) => {
    try {
      let auth = await prisma.user.findUnique({ where: { email } });
      if (!auth) throw "email tidak terdaftar";
      if (user.password !== password) return "password tidak tersedia";
      return auth;
    } catch (error) {
      throw error;
    }
  },
};
