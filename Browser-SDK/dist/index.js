var e=require("websocket-ts");module.exports=/*#__PURE__*/function(){function n(n){var t=this;this.WSCObject=null,this.DomElement=null,this.DomElement=document.getElementById(n.elementId);var o=new e.WebsocketBuilder(n.connectionUrl).onMessage(function(e,n){console.log("message",e,n);var o=n.data;console.log(t.DomElement);var l=t.DomElement.innerHTML;t.DomElement.innerHTML=l+="<li>RECV: "+o+"</li>"}).build();this.WSCObject=o}return n.prototype.sendMassage=function(e){var n;this.WSCObject.send(e);var t=null==(n=this.DomElement)?void 0:n.innerHTML;this.DomElement.innerHTML=t+="<li>Send: "+e+"</li>"},n}();
