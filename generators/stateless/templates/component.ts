/// <reference path="../../../typings/main.d.ts" />

'use strict';

/**
 * @description
 *
 * Component
 *
 */
class <%= nameCamel %> implements ng.IComponentOptions  {

    bindings:any =
    {
        updateEvent: '@',
        data: '<modelData',
    }

    templateUrl:string = 'components/<%= componentDash %>/<%= nameCamel %>.html'

    controller:string = '<%= nameCamel %>Ctrl'

    constructor()
    {
        let $self = this
    }
}

angular
    .module('<%= componentCamel %>')
    .component('<%= nameCamel %>', new <%= nameCamel %>())




