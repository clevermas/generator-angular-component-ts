/// <reference path="../../../typings/main.d.ts" />

'use strict';

interface I<%= nameCapitalize %>Ctrl
{
  state: String
  destroyListeners: Array
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
    data
    destroyListeners = []

    successHandler($event, res:any)
    {
        this.data = res.data.data
    }

    errorHandler($event, error:any)
    {

    }

    $onDestroy()
    {
        this.destroyListeners.forEach(listener => listener())
    }

    constructor(DataFlow, $state)
    {
        let $self = this

        $self.destroyListeners.push(DataFlow.subscribe(
            $state.current.name,
            DataFlow.formServiceString('SomeService', 'someMethod', [$self.state]),
            $self.successHandler,
            $self.errorHandler
        ))
    }
}

angular
    .module('<%= componentCamel %>')
    .controller('<%= nameCamel %>Ctrl', <%= nameCamel %>Ctrl)
