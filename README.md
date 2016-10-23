Node Testing Workshop
---------------------
Preparation
-----------
Install [mocha](https://mochajs.org/) and [istanbul](https://github.com/gotwarlost/istanbul) globally

    npm install -g mocha
    npm install -g mocha-cli
    npm install -g istanbul
    
Fork the repository, clone it into your workspace and install the dependencies

    git clone https://github.com/YOUR_NAME/node-testing-workshop.git
    cd node-testing-workshop
    npm install

Execute `npm test` and `npm run coverage` to verify your setup.

Exercise 1
----------
Implement unit tests for fizz-buzz-number. Place your test file(s) in the folder `test`. Use [chai](http://chaijs.com/api/bdd/) for asserting your expectations.
Run the tests with 
    
    mocha
    
Check the coverage by running 

    istanbul cover _mocha -- -R spec
    
An html coverage report is created in `coverage/lcov-report`. Open `index.html` in a browser and navigate to fizz-buzz-number.js.
Implement more test cases until all lines are covered.

Exercise 2
----------
Implement unit tests for fizz-buzz-sequence.

Exercise 3
----------
Implement unit tests for fizz-buzz-callback.

Exercise 4
----------
Implement unit tests for random-fizz-buzz.

Exercise 5
----------
Implement integration tests for the Messages API you can find in `app.js`. Use [supertest](https://github.com/visionmedia/supertest) for making requests and assertions.