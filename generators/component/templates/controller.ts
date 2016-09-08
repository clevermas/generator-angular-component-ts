/// <reference path="../../../typings/main.d.ts" />

'use strict';

interface I<%= nameCapitalize %>Ctrl
{
    onModelChange: any,
    model: {
        data: any
    }
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
    onModelChange: any;
    model: any;

    modelChange() {
        this.onModelChange({ model: this.model });
    }

    constructor()
    {
        let $self = this;

        this.modelChange();
    }
}

angular
    .module('<%= componentCamel %>')
    .controller('<%= nameCamel %>Ctrl', <%= nameCamel %>Ctrl);
