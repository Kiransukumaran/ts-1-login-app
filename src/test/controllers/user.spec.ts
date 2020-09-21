import server from '../../app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

describe('User', () => {

    describe('/GET user', () => {
        it('result will be the list of all users', (done) => {
            chai.request(server).get('/user')
                .then(res => {
                    chai.expect(res).have.status(200);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("users");
                    chai.expect(res.body.users).to.be.a("array");
                }).catch(err => {})
                done();
        });
    });

    describe('/GET user with id', () => {
        it('it should GET details of a user', (done) => {
            chai.request(server)
                .get('/user/1')
                .then(res => {
                    chai.expect(res).have.status(200);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("user");
                    chai.expect(res.body.user).to.be.a("object");
                    chai.expect(res.body.user).to.have.property("id");
                    chai.expect(res.body.user.id).to.eq(1)
                    done();
                }).catch(err => {});
        });
    });

    describe('/GET user with id which is not available', () => {
        it('try to get the user which is not available', (done) => {
            chai.request(server)
                .get('/user/6')
                .then(res => {
                    chai.expect(res).have.status(400);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("user");
                    chai.expect(res.body.user).to.have.property("message");
                    chai.expect(res.body.user.message).to.eq("No user found!")
                    done();
                }).catch(err => {});
        });
    });

    describe('/GET user with id which is invalid', () => {
        it('it should GET details of an invalid user', (done) => {
            chai.request(server)
                .get('/user/6a')
                .then(res => {
                    chai.expect(res).have.status(422);
                    chai.expect(res.body).to.be.a("object");
                    chai.expect(res.body).to.have.property("error");
                    chai.expect(res.body.error).to.eq("Validation failed")
                    done();
                }).catch(err => {});
        });
    });

});