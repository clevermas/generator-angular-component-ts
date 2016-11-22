'use strict';

var generators = require('yeoman-generator');
var _ = require('underscore.string');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);


        // This makes `statefull` a required argument.
        this.argument('statefull', {type: String, required: true});

        // This makes `name` a required argument.
        this.argument('name', {type: String, required: false});

        // Set first character lower-case
        this.component = this.statefull[0].toLowerCase() + this.statefull.substr(1);
        if (!this.name) this.name = this.component;
        this.name = this.name[0].toLowerCase() + this.name.substr(1);

        this.componentCamel = _.camelize(this.component);
        this.componentCapitalize = _.camelize('_' + this.component);
        this.componentDash = _.dasherize(this.component);

        this.nameCamel = _.camelize(this.name);
        this.nameCapitalize = _.camelize('_' + this.name);
        this.nameDash = _.dasherize(this.name);

        // Set template object
        this.templateObj = {
            componentCamel: this.componentCamel,
            componentCapitalize: this.componentCapitalize,
            componentDash: this.componentDash,
            nameCamel: this.nameCamel,
            nameCapitalize: this.nameCapitalize,
            nameDash: this.nameDash,
            appName: 'goodCoWebApp'
        };
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('module.ts'),
            this.destinationPath('app/components/' + this.componentDash + '/' + this.componentCamel + '.module.ts'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('controller.ts'),
            this.destinationPath('app/components/' + this.componentDash + '/' + this.nameCamel + '.controller.ts'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('component.ts'),
            this.destinationPath('app/components/' + this.componentDash + '/' + this.nameCamel + '.component.ts'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('style.scss'),
            this.destinationPath('app/components/' + this.componentDash + '/' + this.nameCamel + '.scss'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('template.html'),
            this.destinationPath('app/components/' + this.componentDash + '/' + this.nameCamel + '.html'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('spec.js'),
            this.destinationPath('test/unit/components/' + this.nameCamel + '.component.spec.js'), this.templateObj
        );
    }
});
