/// <reference path="<%= !noSection&&('../') %>../../../typings/main.d.ts" />
<%= (IName = noSection ? 'I' + nameCapitalize + 'CtrlScope' : 'I' + sectionCapitalize + nameCapitalize + 'CtrlScope')&&(moduleName = noSection ? nameCamel + 'Page' : sectionCamel + nameCapitalize + 'Page')&&(ctrlName = noSection ? nameCamel + 'Ctrl' : sectionCamel + nameCapitalize  + 'Ctrl')&&('') %>
'use strict';

interface <%= IName %> extends ng.IScope
{
    isPageLoaded: boolean
}

/**
 * @ngdoc controller
 * @name routes.controller:<%= noSection ? nameCamel : sectionCamel + nameCapitalize %>Ctrl
 * @requires $scope
 * @description
 *
 * Controller
 *
 */
class <%= ctrlName %>
{
    constructor(public $scope:<%= IName %>)
    {
        $scope.$on('$destroy', =>
            $scope.$on('DataFlow.bucketLoaded(mainView)', () =>
                $scope.isPageLoaded = true))
    }
}

angular
    .module('<%= moduleName %>')
    .controller('<%= ctrlName %>', <%= ctrlName %>);
