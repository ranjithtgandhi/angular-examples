"use strict";
describe("Angular Pagination",function(){
  var pg
  // load the app
  beforeEach(module("pagination"))
  // get service
  beforeEach(inject(function(Pagination){
    pg = new Pagination()
  }))
  it("should have defaults as documented",function(){
    expect(pg.start).toBe(0)
    expect(pg.limit).toBe(10)
    expect(pg.total).toBe(0)
    expect(pg.pages).toBe(0)
    expect(pg.page).toBe(1)
    expect(pg.range.start).toBe(0)
    expect(pg.range.end).toBe(0)
    expect(pg.range.total).toBe(0)
  })
  describe("Value Checks",function(){
    describe("Empty Dataset",function(){
      beforeEach(function(){
        pg.set({start: 0,limit: 10,total: 0})
      })
      it("should have correct values after set()",function(){
        expect(pg.start).toBe(0)
        expect(pg.limit).toBe(10)
        expect(pg.total).toBe(0)
        expect(pg.pages).toBe(0)
        expect(pg.page).toBe(1)
        expect(pg.range.start).toBe(0)
        expect(pg.range.end).toBe(0)
        expect(pg.range.total).toBe(0)
      })
      it("should have correct values from previous()",function(){
        pg.set({start: pg.previous()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from next()",function(){
        pg.set({start: pg.next()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from first()",function(){
        pg.set({start: pg.first()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from last()",function(){
        pg.set({start: pg.last()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from forPage(page)",function(){
        pg.set({start: pg.forPage(2)})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
    })
    describe("Single-entry Dataset",function(){
      beforeEach(function(){
        pg.set({start: 0,limit: 10,total: 1})
      })
      it("should have correct values after set()",function(){
        expect(pg.start).toBe(0)
        expect(pg.limit).toBe(10)
        expect(pg.total).toBe(1)
        expect(pg.pages).toBe(1)
        expect(pg.page).toBe(1)
        expect(pg.range.start).toBe(1)
        expect(pg.range.end).toBe(1)
        expect(pg.range.total).toBe(1)
      })
      it("should have correct values from previous()",function(){
        pg.set({start: pg.previous()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from next()",function(){
        pg.set({start: pg.next()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from first()",function(){
        pg.set({start: pg.first()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from last()",function(){
        pg.set({start: pg.last()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from forPage(page)",function(){
        pg.set({start: pg.forPage(2)})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
    })
    describe("Many-page Dataset",function(){
      beforeEach(function(){
        pg.set({start: 40,limit: 20,total: 120})
      })
      it("should have correct values after set()",function(){
        expect(pg.start).toBe(40)
        expect(pg.limit).toBe(20)
        expect(pg.total).toBe(120)
        expect(pg.pages).toBe(6)
        expect(pg.page).toBe(3)
        expect(pg.range.start).toBe(41)
        expect(pg.range.end).toBe(60)
        expect(pg.range.total).toBe(120)
      })
      it("should have correct values from previous()",function(){
        pg.set({start: pg.previous()})
        expect(pg.page).toBe(2)
        expect(pg.start).toBe(20)
      })
      it("should have correct values from next()",function(){
        pg.set({start: pg.next()})
        expect(pg.page).toBe(4)
        expect(pg.start).toBe(60)
      })
      it("should have correct values from first()",function(){
        pg.set({start: pg.first()})
        expect(pg.page).toBe(1)
        expect(pg.start).toBe(0)
      })
      it("should have correct values from last()",function(){
        pg.set({start: pg.last()})
        expect(pg.page).toBe(6)
        expect(pg.start).toBe(100)
      })
      it("should have correct values from forPage(page)",function(){
        pg.set({start: pg.forPage(2)})
        expect(pg.page).toBe(2)
        expect(pg.start).toBe(20)
      })
    })
  })
  describe("Button Generator Checks",function(){
    describe("Empty Dataset",function(){
      beforeEach(function(){
        pg.set({start: 0,limit: 10,total: 0})
      })
      it("should have no buttons",function(){
        pg.set({start: pg.first()})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(0)
      })
    })
    describe("Three-page Dataset",function(){
      beforeEach(function(){
        pg.set({start: 0,limit: 10,total: 30})
      })
      it("should have 3 buttons with 2 on the right, on first() page",function(){
        pg.set({start: pg.first()})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(3)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(3)
      })
      it("should have 3 buttons with 1 on each side, on middle page",function(){
        pg.set({start: pg.forPage(2)})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(3)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(3)
      })
      it("should generate 3 buttons with 2 on the left, on last() page",function(){
        pg.set({start: pg.last()})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(3)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(3)
      })
    })
    describe("Many-page Dataset",function(){
      beforeEach(function(){
        pg.set({start: 40,limit: 20,total: 120})
      })
      it("should have 5 buttons with 4 on the right, on first() page",function(){
        pg.set({start: pg.first()})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(pg.buttons_max)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(5)
      })
      it("should have 5 buttons with 3 on the right and 1 on the right, one page after first()",function(){
        pg.set({start: pg.forPage(2)})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(pg.buttons_max)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(5)
      })
      it("should have 5 buttons with 2 on each side, on midrange page of larger sets",function(){
        pg.set({start: pg.forPage(3)})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(pg.buttons_max)
        expect(buttons.shift()).toBe(1)
        expect(buttons.pop()).toBe(5)
      })
      it("should have 5 buttons with 3 on the left and 1 on the right, one page before last()",function(){
        pg.set({start: pg.forPage(pg.pages - 1)})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(pg.buttons_max)
        expect(buttons.shift()).toBe(2)
        expect(buttons.pop()).toBe(6)
      })
      it("should have 5 buttons with 4 on the left, on last() page",function(){
        pg.set({start: pg.last()})
        var buttons = pg.buttons()
        expect(buttons.length).toBe(pg.buttons_max)
        expect(buttons.shift()).toBe(2)
        expect(buttons.pop()).toBe(6)
      })
    })
  })
  describe("Action Checks",function(){
    beforeEach(function(){
      pg.set({start: 40,limit: 20,total: 120})
    })
    it("should be unable to forPage() above max",function(){
      pg.set({start: pg.forPage(20)})
      expect(pg.page).toBe(6)
      expect(pg.start).toBe(100)
    })
    it("should be unable to forPage() below min",function(){
      pg.set({start: pg.forPage(-50)})
      expect(pg.page).toBe(1)
      expect(pg.start).toBe(0)
    })
    it("should be unable to previous() below min",function(){
      pg.set({start: pg.first()})
      pg.set({start: pg.previous()})
      expect(pg.page).toBe(1)
      expect(pg.start).toBe(0)
    })
    it("should be unable to next() above max",function(){
      pg.set({start: pg.last()})
      pg.set({start: pg.next()})
      expect(pg.page).toBe(6)
      expect(pg.start).toBe(100)
    })
  })
  describe("Issues",function(){
    it("should not display user input start values when greater than total count; issue #1",function(){
      pg.set({start: 50, limit: 10, total: 1})
      expect(pg.range.start).toBe(1)
      expect(pg.range.end).toBe(1)
      expect(pg.range.total).toBe(1)
    })
    it("should not use old start when limit changes on the last page; issue #3",function(){
      pg.set({start: 0, limit: 10, total: 666})
      pg.set({start: pg.last()})
      expect(pg.start).toBe(660)
      pg.set({limit: 50})
      expect(pg.forLimitChange()).toBe(650)
      expect(pg.forLimitChange(20)).toBe(660)
      expect(pg.forLimitChange(40)).toBe(640)
      expect(pg.forLimitChange(100)).toBe(600)
    })
  })
})
