var Cat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    self.nickname = ko.observableArray(data.nickname);

    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if (clicks < 20){
            title = 'Newborn';
        } else if (clicks < 30){
            title = 'infant';
        } else if (clicks < 50){
            title = 'child';
        } else if (clicks < 75){
            title = 'teen';
        } else if (clicks < 100){
            title = 'adult';
        }
        return title;
        console.log(title);
    }, this);
}


var initialCats = [];


var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem){
        self.catList.push( new Cat(catItem));
    });

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://github.com/udacity/ud989-cat-clicker-ko-starter/blob/master/img/434164568_fea0ad4013_z.jpg',
        nickname:['kitty','orange','pupper','smol']
    }) );
    self.addNickname = function(data){
        self.nickname.push({ name: "New at " + new Date(data.nickname) });
    };

    self.removeNickname = function(data){
        self.nickname.remove(data.nickname);
    };

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());