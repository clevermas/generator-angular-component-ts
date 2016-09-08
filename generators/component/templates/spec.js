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

        it('should define model data', function () {
            var modelData = 'fake_data';
            var ctrl = component('<%= nameCamel %>', null, { model: { data: modelData },  onModelChange: function(model) {});
            expect(ctrl.model.data).toBe(modelData);
        });

        it('should change model data', function () {
            var modelData = 'changed_data';
            var ctrl = component('<%= nameCamel %>', null,
                {
                    model: {
                        data: 'fake_data'
                    },
                    onModelChange: function(model) {
                        model.data = modelData;
                    }
                });
            ctrl.modelChange();
            expect(ctrl.model.data).toBe(modelData);
        });
    });
});
