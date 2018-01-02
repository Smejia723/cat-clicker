var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://github.com/udacity/ud989-cat-clicker-ko-starter/blob/master/img/434164568_fea0ad4013_z.jpg');

    self.nickname = ko.observableArray([
        'kitty',
        'orange',
        'pupper',
        'smol'
    ]);

    self.addNickname = function(){
        self.nickname.push({ name: "New at " + new Date() });
    };

    self.removeNickname = function(){
        self.nickname.remove(this);
    }

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

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());