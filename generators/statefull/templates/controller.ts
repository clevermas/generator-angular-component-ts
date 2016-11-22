/// <reference path="../../../typings/main.d.ts" />

'use strict';

interface I<%= nameCapitalize %>Ctrl
{
  state: String
  listeners: any
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
    state
    listeners
    data

    responseHandler($event, res:any) {
        this.data = res.data.data
    }

    errorHandler($event, error:any) {

    }

    constructor(DataFlow, $state)
    {
        let $self = this
        DataFlow.subscribe(
            $state.current.name,
            DataFlow.formServiceString('SomeService', 'someMethod', ['argument']),
            $self.responseHandler,
            $self.errorHandler
        )
    }
}

angular
    .module('<%= componentCamel %>')
    .controller('<%= nameCamel %>Ctrl', <%= nameCamel %>Ctrl)
