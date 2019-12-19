const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig");

describe("hobbits model", function() {
  beforeEach(async () => {
    db("hobbits").truncate();
  });
  describe("insert()", function() {
    it("should add the hobbit to the database", function() {
      // call insert, passing a hobbit object
      //

      return Hobbits.insert({ name: "jerry" }).then(ids => {
        expect().toHaveLength(1);
      });
    });
  });

  describe("insert()", function() {
    it("should add the hobbit to the database", async function() {
      // call insert, passing a hobbit object
      //

      await Hobbits.insert({ name: "sam" });
      await Hobbits.insert({ name: "Gaffer" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(3);
    });
  });
});
