const request = require("supertest");
const app = require("../app/api/Users/route");

describe("POST /api/Users", () => {
  it("should create a new user", async () => {
    const newUser = {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "securepassword",
    };

    // Send a POST request to create a new user
    const response = await request(app)
      .post("/api/Users")
      .send({ formData: newUser })
      .expect(201); // Assuming 201 Created status for successful user creation

    // Assert that the response message is as expected
    expect(response.body.message).toBe("User Has been Created!");
  });

  it("should return 400 if required fields are missing", async () => {
    // Send a POST request with missing required fields
    const response = await request(app)
      .post("/api/Users")
      .send({ formData: { email: "test@example.com" } })
      .expect(400); // Expecting a 400 Bad Request status

    // Assert that the response message is as expected
    expect(response.body.message).toBe("All Fields Must Be Filled!");
  });

  it("should return 409 if email is already registered", async () => {
    // Send a POST request with an email that is already registered
    const response = await request(app)
      .post("/api/Users")
      .send({
        formData: { email: "test@example.com", password: "password123" },
      })
      .expect(409); // Expecting a 409 Conflict status

    // Assert that the response message is as expected
    expect(response.body.message).toBe(
      "This Email Has Already Been Registered!"
    );
  });
});
