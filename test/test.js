describe("Basic Function",function(){
	it("reverse word",function(){
		expect("DCBA").toEqual(reverse("ABCD"));
		expect("Conan").toEqual(reverse("nanoC"));
	})
})

describe("Example Function",function(){
	it("add something",function(){
		expect(3).toEqual(add(1,2));
		expect(3).toEqual(add(1,2));
	})
})

describe("My test",function(){

 it("The 'toMatch' matcher is for regular expressions", function() {
    var message = "foo bar baz";

    expect(message).toMatch(/bar/);
    expect(message).toMatch("bar");
    expect(message).not.toMatch(/quux/);
  });

	
})
