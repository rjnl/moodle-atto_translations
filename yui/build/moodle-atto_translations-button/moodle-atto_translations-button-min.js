YUI.add("moodle-atto_translations-button",function(e,t){var a={CONFIRMTEXT:"atto_translations_confirmtext"},n=".submit",o=".cancel",i={translationhashregex:/<span data-translationhash[ ]*=[ ]*[\'"]+([a-zA-Z0-9]+)[\'"]+[ ]*>[ ]*<\/span>/,_content:null,initializer:function(){var t,e=this.addButton({icon:"icon",iconComponent:"atto_translations",callback:this._displayDialogue,title:"replacehash"}),a=this.get("host"),n=a.textarea.get("value"),o=this.get("unusedhash"),s=i.translationhashregex.exec(n);o&&!s?(t='<span data-translationhash="'+o+'"></span>',a.textarea.set("value",t+n),a.updateFromTextArea(),e.setAttribute("disabled","disabled"),(o=a.textarea.ancestor("form"))&&o.on("submit",function(){a.textarea.get("value")===t&&(a.textarea.set("value",""),a.updateFromTextArea())},this)):t=s},_replaceHash:function(t){var e,a=this.get("unusedhash");this._closeDialogue(t),e=(e=(t=this.get("host")).textarea.get("value")).replaceAll(/<span data-translationhash[ ]*=[ ]*[\'"]+([a-zA-Z0-9]+)[\'"]+[ ]*>[ ]*<\/span>/g,""),t.textarea.set("value",'<span data-translationhash="'+a+'"></span>'+e),t.updateFromTextArea()},_closeDialogue:function(t){t.preventDefault(),this.getDialogue({focusAfterHide:null}).hide()},_displayDialogue:function(){var t=this.getDialogue({headerContent:M.util.get_string("confirm","moodle"),width:"auto",focusAfterHide:!0});t.set("bodyContent",this._getDialogueContent()),t.show()},_getDialogueContent:function(){var t=e.Handlebars.compile('<form class="atto_form"><div class="mb-1"><label for="{{elementid}}_atto_translations_confirmtext">{{get_string "confirmtext" component}}</label></div><div class="mdl-align"><br/><button type="button" class="btn btn-primary submit">{{get_string "yes" "moodle"}}</button> <button type="button" class="btn btn-secondary cancel">{{get_string "cancel" "moodle"}}</button></div></form>');return this._content=e.Node.create(t({component:"atto_translations",CSS:a})),this._content.one(n).on("click",this._replaceHash,this),this._content.one(o).on("click",this._closeDialogue,this),this._content}};e.namespace("M.atto_translations").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],i,{ATTRS:{unusedhash:{value:!1}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});