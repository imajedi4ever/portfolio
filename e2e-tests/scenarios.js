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

  describe('sketches', function() {
    beforeEach(function() {
      browser.get('index.html#/sketches');
    });

    it('should render sketches when user navigates to /sketches', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/Sketches Article/);
    });
  });

  describe('graphic-art', function() {
    beforeEach(function() {
      browser.get('index.html#/graphic-art');
    });

    it('should render graphic-art when user navigates to /graphic-art', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/Graphic Art Article/);
    });
  });

  describe('typography', function() {
    beforeEach(function() {
      browser.get('index.html#/typography');
    });

    it('should render typography when user navigates to /typography', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/Typography Article/);
    });
  });

  describe('about', function() {
    beforeEach(function() {
      browser.get('index.html#/about');
    });

    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/About Article/);
    });
  });
  
  describe('contact', function() {
    beforeEach(function() {
      browser.get('index.html#/contact');
    });

    it('should render contact when user navigates to /typography', function() {
      expect(element.all(by.css('[ng-view]')).first('h1').getText()).
        toMatch(/Contact Article/);
    });
  });
});
