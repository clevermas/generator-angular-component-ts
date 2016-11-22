/// <reference path="../../../typings/main.d.ts" />

'use strict';

interface I<%= nameCapitalize %>Ctrl
{
    updateEvent: String
    data: any
}

/**
 * @ngdoc controller
 * @name <%= componentCamel %>.controller:<%= nameCamel %>Ctrl
 * @description
 *
 * Controller
 *
 */
class <%= nameCamel %>Ctrl implements I<%= nameCapitalize %>Ctrl
{
    updateEvent: String
    data: any

    update()
    {
        let $self = this
        $self.$scope.$emit($self.updateEvent, $self.data)
    }

    constructor(private $scope)
    {
        let $self = this
    }
}

angular
    .module('<%= componentCamel %>')
    .controller('<%= nameCamel %>Ctrl', <%= nameCamel %>Ctrl)
