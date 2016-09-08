/// <reference path="<%= !noSection&&('../') %>../../../typings/main.d.ts" />
'use strict';

angular
    .module('<%= noSection ? nameCamel : sectionCamel + nameCapitalize %>Page', ['ui.router'])
    .config(['$stateProvider', ($stateProvider: any) => {
        $stateProvider.state("<%= !noSection&&(sectionDash+'-')+nameDash %>", {
            url: "/<%= nameDash %>",
            templateUrl: "<%= routePath + '/' + nameCamel %>.html",
            controller: "<%= noSection ? nameCamel : sectionCamel + nameCapitalize %>Ctrl",
            data: {
                authorization: true
            }
        });
    }]);
