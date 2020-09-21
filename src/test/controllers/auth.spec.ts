import server from '../../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

describe('Login', () => {
    describe('/POST auth/login', () => {
        it('returns a token if login successful', (done) => {
            const credentials = {
                username: "arun",
                password: "testpassword"
            }
            chai.request(server)
                .post('/auth/login')
                .send(credentials)
                .then(res => {
                    chai.expect(res).have.status(200);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("message");
                    chai.expect(res.body.message).to.eq("User logged in");
                    chai.expect(res.body).to.have.property("token");
                    chai.expect(res.body.token).to.be.a("string");
                }).catch(err => {});
                done();
        });
    });

    describe('/POST auth/login with invalid password', () => {
        it('return invalid credentials', (done) => {
            const credentials = {
                username: "arun",
                password: "wrongpassword"
            }
            chai.request(server)
                .post('/auth/login')
                .send(credentials)
                .then(res => {
                    chai.expect(res).have.status(401);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("message");
                    chai.expect(res.body.message).to.eq("Invalid credentials");
                }).catch(err => {});
                done();
        });
    });

    describe('/POST auth/login with invalid username', () => {
        it('return no user', (done) => {
            const credentials = {
                username: "wrongname",
                password: "testpassword"
            }
            chai.request(server)
                .post('/auth/login')
                .send(credentials)
                .then(res => {
                    chai.expect(res).have.status(400);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("message");
                    chai.expect(res.body.message).to.eq("No User");
                }).catch(err => {});
                done();
        });
    });

    describe('/POST auth/login with no username or password', () => {
        it('return validation failed', (done) => {
            const credentials = {
                username: "arun",
            }
            chai.request(server)
                .post('/auth/login')
                .send(credentials)
                .then(res => {
                    chai.expect(res).have.status(422);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("error");
                    chai.expect(res.body.error).to.eq("Validation failed");
                }).catch(err => {});
                done();
        });
    });

});

describe('Profile', () => {

    describe('/GET auth/profile', () => {
        it('it should GET profile of a user', (done) => {
            const credentials = {
                username: "arun",
                password: "testpassword"
            }
            chai.request(server)
                .post("/auth/login")
                .send(credentials)
                .then(res => {
                    chai.request(server)
                        .get('/auth/profile')
                        .set({ Authorization: `Bearer ${res.body.token}` })
                        .then(res => {
                            chai.expect(res).have.status(200);
                            chai.expect(res.body).to.be.a("object");
                            chai.expect(res.body).to.have.property("profile");
                            chai.expect(res.body.profile).to.have.property("id");
                            chai.expect(res.body.profile.id).to.eq(1);
                        }).catch(err => {});
                        
                }).catch(err => {})
                done();

        });
    });

    describe('/GET auth/profile with invalid token', () => {
        it('it should return error due to invalid token', (done) => {
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjAwMzUxODEzLCJleHAiOjE2MDAzNTE4MTh9.ugHl5YZku8V7U6F-R7KII7KInVbQ1IBb_k7MUkk__Z0";
            chai.request(server)
                .get('/auth/profile')
                .set({ Authorization: `Bearer ${token}` })
                .then(res => {
                    chai.expect(res).have.status(401);
                }).catch(err => {});
                done();
        });
    });

});
