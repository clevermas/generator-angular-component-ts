'use strict';
<%= (ctrlName = noSection ? nameCamel + 'Ctrl' : sectionCamel + nameCapitalize  + 'Ctrl')&&('') %>
describe('Controller: <%= ctrlName %>', function () {

    // load the controller's module
    beforeEach(module('<%= appName %>'));
    beforeEach(module('<%= routePath + '/' + nameCamel %>.html'));

    var config, <%= ctrlName %>, scope;

    beforeEach(inject(function (_config_) {
        config = _config_;
    }));

    // override general requests
    beforeEach(inject(function ($httpBackend) {
        $httpBackend.when('GET', 'assets/i18n/en.json').respond(200, '');
        $httpBackend.when('GET', config.goodco_api.host + '/v2/users/me').respond(200, {data: {}});
    }));

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        <%= ctrlName %> = $controller('<%= ctrlName %>', {
            $scope: scope
        });
        scope.$apply();
    }));

    it('should define the scope', function () {
        expect(scope).toBeDefined();
    });
});
