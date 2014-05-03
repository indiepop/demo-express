describe("Basic Function",function(){
	it("reverse word",function(){
		expect("DCBA").toEqual(reverse("ABCD"));
		expect("Conan").toEqual(reverse("nanoC"));
	});

	it("add something",function(){
		expect(3).toEqual(add(1,2));
		expect(3).toEqual(add(1,2));
	});


	it("The 'toMatch' matcher is for regular expressions", function() {
    	var message = "foo bar baz";

    	expect(message).toMatch(/bar/);
    	expect(message).toMatch("bar");
    	expect(message).not.toMatch(/quux/);
  	});

	
});

describe("My Demo",function(){
	it("setServermessage function",function(){
		
		document.body.innerHTML = __html__['index.html'];
		//setServerMsg('exexexex');
		//var result = document.getElementById('serverMsg').text();
	expect(document.getElementById('serverMsg')).toBeDefined();
	//	expect(result).tobe('');
	});
})

