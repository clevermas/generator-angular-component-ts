'use strict';
<%= (ctrlName = noSection ? nameCamel + 'Ctrl' : sectionCamel + nameCapitalize  + 'Ctrl')&&('') %>
describe('Controller: <%= ctrlName %>', function () {

    // load the controller's module
    beforeEach(module('<%= appName %>'));

    var config, <%= ctrlName %>, scope;

    beforeEach(inject(function (_config_) {
        config = _config_;
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
