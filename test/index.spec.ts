import App from '../src/app';
import * as chai from 'chai';
import chaiHttp = require('chai-http');
import 'mocha';

chai.use(chaiHttp);

describe('Test default route', () => {
    it('should return initial setup', () => {
        return chai.request(App).get('/')
            .then(res => {
                chai.expect(res.body).to.have.property("message");
                chai.expect(res.body.message).to.eql("Initial Code setup");
            })
    });
});
