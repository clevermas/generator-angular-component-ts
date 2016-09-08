'use strict';

var generators = require('yeoman-generator');
var _ = require('underscore.string');

module.exports = generators.Base.extend({

    constructor: function () {
        generators.Base.apply(this, arguments);

        // This makes `section` a required argument.
        this.argument('section', {type: String, required: true});

        // This makes `name` a required argument.
        this.argument('name', {type: String, required: false});

        // set first character lower-case
        this.section = this.section[0].toLowerCase() + this.section.substr(1);

        this.sectionCamel = _.camelize(this.section);
        this.sectionCapitalize = _.camelize('_' + this.section);
        this.sectionDash = _.dasherize(this.section);

        if (!this.name) {
            this.name = this.section;
            this.noSection = true;
        }

        this.routePath = this.noSection ? this.sectionDash : this.sectionDash + '/' + _.dasherize(this.name);
        this.specPath = this.noSection ? this.sectionCamel : this.sectionCamel + _.camelize('_' + this.name);

        this.name = this.name[0].toLowerCase() + this.name.substr(1);

        // And you can then access it later on this way; e.g. CamelCased
        this.nameCamel = _.camelize(this.name);
        this.nameCapitalize = _.camelize('_' + this.name);
        this.nameDash = _.dasherize(this.name);

        this.templateObj = {
            sectionCamel: this.sectionCamel,
            sectionCapitalize: this.sectionCapitalize,
            sectionDash: this.sectionDash,
            nameCamel: this.nameCamel,
            nameCapitalize: this.nameCapitalize,
            nameDash: this.nameDash,
            appName: 'goodCoWebApp',
            noSection: this.noSection,
            routePath: this.routePath
        };
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('module.ts'),
            this.destinationPath('app/' + this.routePath + '/' + this.nameCamel + '.module.ts'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('controller.ts'),
            this.destinationPath('app/' + this.routePath + '/' + this.nameCamel + '.controller.ts'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('style.scss'),
            this.destinationPath('app/' + this.routePath + '/' + this.nameCamel + '.scss'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('template.html'),
            this.destinationPath('app/' + this.routePath + '/' + this.nameCamel + '.html'), this.templateObj
        );

        this.fs.copyTpl(
            this.templatePath('spec.js'),
            this.destinationPath('test/unit/routes/' + this.specPath + '.controller.spec.js'), this.templateObj
        );
    }
});
