var key,GenericAPI={__offlineAPIWrapper:!0,__storageWarningTimeoutId:null,store:function(t){!1!==window.ISCOOKIELMS&&(!t&&void 0===window.Cookies.get("_spoor")||(window.Cookies.set("_spoor",this.data),window.Cookies.get("_spoor").length!==JSON.stringify(this.data).length&&null==this.__storageWarningTimeoutId&&(this.__storageWarningTimeoutId=setTimeout(function(){this.storageWarning()}.bind(this),1e3))))},fetch:function(){if(!1!==window.ISCOOKIELMS)return this.data=window.Cookies.getJSON("_spoor"),!!this.data||!(this.data={});this.data={}},reset:function(){window.Cookies.remove("_spoor")},createResetButton:function(){$("body").append($('<style id="spoor-clear-button">.spoor-reset-button { position:fixed; right:0px; bottom:0px; } </style>'));var t=$('<button class="spoor-reset-button">Reset</button>');$("body").append(t),t.on("click",function(){this.reset(),alert("SCORM tracking cookie has been deleted!"),window.location.reload()}.bind(this))},storageWarning:function(){var t,e=alert;this.__storageWarningTimeoutId=null,(e=(t=require?require("core/js/adapt"):t)&&t.config&&t.config.has("_spoor")&&t.config.get("_spoor")._advancedSettings&&!0===t.config.get("_spoor")._advancedSettings._suppressErrors?console.error:e)("Warning: possible cookie storage limit exceeded - tracking may malfunction")}};for(key in window.API={LMSInitialize:function(){return this.fetch()||(this.data["cmi.core.lesson_status"]="not attempted",this.data["cmi.suspend_data"]="",this.data["cmi.core.student_name"]="Surname, Sam",this.data["cmi.core.student_id"]="sam.surname@example.org",this.store(!0)),"true"},LMSFinish:function(){return"true"},LMSGetValue:function(t){return this.data[t]},LMSSetValue:function(t,e){return-1!==t.indexOf("cmi.interactions.")||(this.data[t]=e,this.store()),"true"},LMSCommit:function(){return"true"},LMSGetLastError:function(){return 0},LMSGetErrorString:function(){return"Fake error string."},LMSGetDiagnostic:function(){return"Fake diagnostic information."}},window.API_1484_11={Initialize:function(){return this.fetch()||(this.data["cmi.completion_status"]="not attempted",this.data["cmi.suspend_data"]="",this.data["cmi.learner_name"]="Surname, Sam",this.data["cmi.learner_id"]="sam.surname@example.org",this.store(!0)),"true"},Terminate:function(){return"true"},GetValue:function(t){return this.data[t]},SetValue:function(t,e){return-1!==t.indexOf("cmi.interactions.")||(this.data[t]=e,this.store()),"true"},Commit:function(){return"true"},GetLastError:function(){return 0},GetErrorString:function(){return"Fake error string."},GetDiagnostic:function(){return"Fake diagnostic information."}},GenericAPI)window.API[key]=window.API_1484_11[key]=GenericAPI[key];