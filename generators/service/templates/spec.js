'use strict';

describe('Service: <%= nameCapitalize %>', function () {

    // load the service's module
    beforeEach(module('<%= appName %>'));

    // instantiate service
    var config, API, <%= nameCapitalize %>, backend;

    // dependencies
    beforeEach(inject(function (_config_, _API_, _<%= nameCapitalize %>_, $httpBackend) {
        API = _API_;
        <%= nameCapitalize %> = _<%= nameCapitalize %>_;
        config = _config_;
        backend = $httpBackend;
    }));

    // override general requests
    beforeEach(function () {
        backend.when('GET', config.goodco_api.host + '/v2/users/me').respond(200, {data: {}});
        backend.when('GET', 'assets/i18n/en.json').respond(200, '');
    });

    it('should be defined', function () {
        expect(<%= nameCapitalize %>).toBeDefined();
    });
});
