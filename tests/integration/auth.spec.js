const app = require("../../app");
const request = require("supertest");

describe("test POST /api/v1/login", () => {
  // Menggunakan email yang tidak terdaftar
  test("test menggunakan email yang tidak terdaftar -> error", async () => {
    try {
      let { statusCode, body } = await request(app)
        .post("/api/v1/login")
        .send({ email: "usertest222@mail.com", password: "password123" });

      expect(statusCode).toBe(404);
      expect(body.error).toBe("email tidak terdaftar");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  // Menggunakan email terdaftar, password tidak sesuai
  test("menggunakan email terdaftar, password tidak sesuai -> error", async () => {
    try {
      let { statusCode, body } = await request(app)
        .post("/api/v1/login")
        .send({ email: "usertest2@mail.com", password: "password12345" });

      expect(statusCode).toBe(400);
      expect(body.error).toBe("password tidak sesuai");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  // Test menggunakan email dan password yang sesuai -> sukses
  test("test menggunakan email dan password yang sesuai -> sukses", async () => {
    try {
      let { statusCode, body } = await request(app)
        .post("/api/v1/login")
        .send({ email: "usertest2@mail.com", password: "password123" });

      console.log("body", body);
      expect(statusCode).toBe(200);
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("email", email);
      expect(body).toHaveProperty("token");
      expect(body.email).toBe(email);
      expect(body.password).toBe(password);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
