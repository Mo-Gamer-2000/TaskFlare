const request = require("supertest");
const app = require("../app/api/Users/route"); // Adjust the path as per your route file location

describe("POST /api/Users", () => {
  it("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "securepassword",
    };

    const response = await request(app)
      .post("/api/Users")
      .send({ formData: newUser })
      .expect(201); // Assuming 201 Created status for successful user creation

    expect(response.body.message).toBe("User Has been Created!");
  });

  it("should return 400 if required fields are missing", async () => {
    const response = await request(app)
      .post("/api/Users")
      .send({ formData: { email: "test@example.com" } })
      .expect(400);

    expect(response.body.message).toBe("All Fields Must Be Filled!");
  });

  it("should return 409 if email is already registered", async () => {
    // Assuming 'test@example.com' is already registered
    const response = await request(app)
      .post("/api/Users")
      .send({
        formData: { email: "test@example.com", password: "password123" },
      })
      .expect(409);

    expect(response.body.message).toBe(
      "This Email Has Already Been Registered!"
    );
  });
});
