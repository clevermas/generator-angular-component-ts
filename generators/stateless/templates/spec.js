'use strict';
<%= (ctrlName = nameCamel + 'Ctrl')&&('') %>

describe('<%= nameCamel %>', function () {

    beforeEach(module('<%= appName %>'));
    beforeEach(module('user/home/home.html'));
    beforeEach(module('login/login.html'));
    beforeEach(module('components/<%= componentDash %>/<%= nameCamel %>.html'));

    var backend;

    // instantiate service
    var config;

    // dependencies
    beforeEach(inject(function (_config_, $httpBackend) {
        config = _config_;
        backend = $httpBackend;
    }));

    // override general requests
    beforeEach(function () {
        backend.when('GET', config.goodco_api.host + '/v2/users/me').respond(200, {data: {}});
        backend.when('GET', 'assets/i18n/en.json').respond(200, '');
    });

    describe('Component', function() {
        var component;

        beforeEach(inject(function (_$componentController_) {
            component = _$componentController_;
        }));

        it('should set fake data', function () {
            var data = 'fake_data';
            var ctrl = component('<%= nameCamel %>', null, { updateEvent: 'someEvent', data: { data: data }});
            expect(ctrl.data).toBe(data);
        });
    });
});
