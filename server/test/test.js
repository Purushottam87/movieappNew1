var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the saving of route", function(err){
  it("should save data", function(done){
    url
        .post("/movie/favmovie")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("movie created");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});


describe("Testing the deleting route", function(err){
  it("should delete data", function(done){
    url
        .delete("/movie/deleted")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("deleted user");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the updating route", function(err){
  it("should update data", function(done){
    url
        .put("/movie/update")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("update user");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the json", function(err){
  it("should handle the json", function(done){
    url
        .get("/movie/Fav")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].Title.should.be.equal("purushottam");
          done();
        });
  });
});
