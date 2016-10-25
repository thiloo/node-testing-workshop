var request = require('supertest');
var app = require('../app');

describe('message api', function() {
    it('post message should add message', function(done) {
        request(app)
            .post('/message')
            .send({id: 1, text: "hello"})
            .expect(200, done);
    });
    it('get message posted before', function(done){
        request(app)
            .get('/messages')
            .expect(200, [
                {
                    id: 1,
                    text: "hello"
                }
            ], done);
    });
    it('post message thrown an error because message already exists', function(done) {
        request(app)
            .post('/message')
            .send({id: 1, text: "hello"})
            .expect(400, done);
    });
    describe('delete messages', function() {
        it('should delete message', function(done) {
            request(app)
                .delete('/message?messageId=1')
                .expect(200, [], done);
        });
        it('should return an empty object', function(done) {
            request(app)
                .get('/messages')
                .expect(200, [], done);
        });
    });
});
