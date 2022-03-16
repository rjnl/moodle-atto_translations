YUI.add('moodle-atto_translations-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @package atto_translations
 * @author Andrew Hancox <andrewdchancox@googlemail.com>
 * @author Open Source Learning <enquiries@opensourcelearning.co.uk>
 * @link https://opensourcelearning.co.uk
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @copyright 2021, Andrew Hancox
 */

Y.namespace('M.atto_translations').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function () {
        var host = this.get('host');
        var initialvalue = host.textarea.get('value');
        var translationhashregex = /<span data-translationhash[ ]*=[ ]*[\'"]+([a-zA-Z0-9]+)[\'"]+[ ]*>[ ]*<\/span>/g;
        var unusedhash = this.get('unusedhash');

        if (!unusedhash || translationhashregex.exec(initialvalue)) {
            return;
        }

        host.textarea.set('value', "<span data-translationhash='" + unusedhash + "'></span>" + initialvalue);
        host.updateFromTextArea();
    }
}, {
    ATTRS: {
        unusedhash: {
            value: false
        }
    }
});


}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});