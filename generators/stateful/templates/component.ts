/// <reference path="../../../typings/main.d.ts" />

'use strict';

/**
 * @description
 *
 * Component
 *
 */
class <%= nameCamel %> implements ng.IComponentOptions  {

    bindings:any = {
        state: '@'
    }

    templateUrl:string = 'components/<%= componentDash %>/<%= nameCamel %>.html'

    controller:string = '<%= nameCamel %>Ctrl'

    constructor()
    {
    }
}

angular
    .module('<%= componentCamel %>')
    .component('<%= nameCamel %>', new <%= nameCamel %>())




