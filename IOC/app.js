var autoplay = {
    init: function () {
        console.log('Autoplay init');
    },
    run: function () {
        console.log('Autoplay run');
    }
};
var record = {
    init: function () {
        console.log('Record init');
    },
    run: function () {
        console.log('Record run');
    }
};
var createMode = {
    init: function () {
        console.log('CreateMode init');
    },
    run: function () {
        console.log('CreateMode run');
    },
    initByApp: function (app) {
        app.mode = { pending: "top" };
    }
};
var App = /** @class */ (function () {
    function App() {
        this.modules = [];
        this.mode = {};
    }
    App.prototype.use = function () {
        var _a;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        (_a = this.modules).push.apply(_a, modules);
        return this;
    };
    App.prototype.init = function () {
        var _this = this;
        this.modules.forEach(function (module) {
            module.init();
            if (module.initByApp) {
                module.initByApp(_this);
            }
        });
    };
    App.prototype.run = function () {
        this.modules.forEach(function (module) {
            module.run();
        });
    };
    return App;
}());
var app = new App();
app.use(autoplay, record, createMode).init();
app.run();
console.log(app.mode);
