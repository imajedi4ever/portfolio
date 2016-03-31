'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {
  it('should automatically redirect to /index when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/index");
  });

  describe('home', function() {
    beforeEach(function() {
      browser.get('index.html#/home');
    });

    it('should render home when user navigates to /', function() {
      expect(element.all(by.css('[ng-view]')).first('.lifeHeader').getText()).
        toMatch(/Life of/);
    });
  });


  describe('paintings', function() {

    beforeEach(function() {
      browser.get('index.html#/paintings');
    });


    it('should render paintings when user navigates to /paintings', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/Paintings Article/);
    });
  });
});
