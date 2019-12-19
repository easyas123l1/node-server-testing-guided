const request = require("supertest");

const server = require("./server");

describe("server.js", function() {
  describe("environment", function() {
    it("should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});

describe("GET /", function() {
  it("should return a 200 ok", function() {
    // spin up the server
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
        // make GET request to /
        // look at the HTTP status code for the response.
      });
  });

  it("should return JSON", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it("should return up", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.body.api).toBe("up");
      });
  });

  it.skip("sample of setting header", function() {
    return request(server)
      .post("/login")
      .send({ username: "me", password: "pass" })
      .then(res => {
        const token = res.body.token;
        return request(server)
          .get("/")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });
});
