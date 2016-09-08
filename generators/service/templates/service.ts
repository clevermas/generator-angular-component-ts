'use strict';

/// <reference path="../../../typings/main.d.ts" />

/**
 * @ngdoc service
 * @name <%= componentCamel %>.service:<%= nameCapitalize %>
 * @requires config
 * @description
 */
class <%= nameCapitalize %>
{
    /**
     * @ngdoc method
     * @name <%= nameCapitalize %>#firstMethod
     * @methodOf <%= componentCamel %>.service:<%= nameCapitalize %>
     * @description
     *
     * The first method of service
     *
     */
    firstMethod = ():any =>
    {
    }

    constructor(private config:any)
    {

    }
}

angular
    .module('<%= componentCamel %>')
    .service('<%= nameCapitalize %>', <%= nameCapitalize %>);
