let Mobile = function (name) {
    this.name = name;
    this.battenry = 100;
    this.inbox = [];
    this.outbox =[];
    this.msg = " ";
    this.writeMsg = function (value) {
        this.msg = value;
    }
    this.sendMsg = function (mobile) {
        this.outbox.push(this.msg);
        mobile.reveiceMsg(this.msg,this.name);
    }
    this.revecieMsg = function (msg,name) {
        this.inbox.push(msg);
    }
}
let nokia = new Mobile(nokia);
let iphone = new Mobile(iphone);