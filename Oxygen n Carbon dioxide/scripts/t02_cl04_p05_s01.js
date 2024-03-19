(function (lib, img, cjs, ss) {

	var p; // shortcut to reference prototypes
	
	// library properties:
	lib.properties = {
		width: 664,
		height: 310,
		fps: 25,
		color: "#FFFFFF",
		manifest: [
			{src:"sounds/b_03.mp3", id:"b_03"},
			{src:"sounds/ab_01.mp3", id:"ab_01"},
			{src:"sounds/stawianie_dzbanekwav.mp3", id:"stawianie_dzbanekwav"},
			{src:"sounds/szklo_przesuwaniewav.mp3", id:"szklo_przesuwaniewav"},
			{src:"sounds/uc_b4_l101_05_01nwavA.mp3", id:"uc_b4_l101_05_01nwavA"},
			{src:"sounds/uc_b4_l101_05_01nwavB.mp3", id:"uc_b4_l101_05_01nwavB"},
			{src:"sounds/uc_b4_l101_05_01nwavC.mp3", id:"uc_b4_l101_05_01nwavC"}
		]
	};
	
	
	
	// symbols:
	
	
	
	(lib.Bitmap1 = function() {
		this.spriteSheet = ss["t02_cl04_p05_s01_atlas_"];
		this.gotoAndStop(0);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Bitmap2 = function() {
		this.spriteSheet = ss["t02_cl04_p05_s01_atlas_"];
		this.gotoAndStop(1);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Bitmap3 = function() {
		this.spriteSheet = ss["t02_cl04_p05_s01_atlas_"];
		this.gotoAndStop(2);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.plant = function() {
		this.spriteSheet = ss["t02_cl04_p05_s01_atlas_"];
		this.gotoAndStop(3);
	}).prototype = p = new cjs.Sprite();
	
	
	
	(lib.Tween2copy = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#66B821").s().p("AhoBpIAAjQIDRAAIAADQg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,21,21);
	
	
	(lib.Tween2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFCC00").s().p("AhoBpIAAjQIDRAAIAADQg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,21,21);
	
	
	(lib.tlo_01 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D8D9BD").s().p("EgprAPCIgB+2MBTIAAAIARfpg");
		this.shape.setTransform(266.9,101.3);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#D1D2B0").s().p("EgpsAIyIABxjMBTYAAzIgRQwg");
		this.shape_1.setTransform(266.9,253.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,533.8,310);
	
	
	(lib.Symbol12 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,196,0.8)","rgba(255,255,255,0)"],[0.239,0.773,1],0,0,0,0,0,57.7).s().p("AmOGPQililAAjqQAAjpCkilIABgBQClikDpAAQDqAAClClQClClAADpQABDqimClIAAAAQilCmjqgBQjpAAililgAiViWIgBAAQg+A/AABXQAABYA+A+IABABQA+A+BXAAQBYAAA+g+IABgBQA+g+AAhYQAAhXg+g/IgBAAQg+g+hYAAIAAAAQhXAAg+A+g");
		this.shape.setTransform(-44.5,44.5);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-101,-12,113,113);
	
	
	(lib.Symbol4a = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D9BC91").s().p("AgGAGIAAgCIABgBIACgDIABAAIAFgJIADgDIABAMIAAAAIgKANIgDgHg");
		this.shape.setTransform(-20.1,203.8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CB9F5F").s().p("AgeASIgBgMIADgDIAGgDIADgCIAEgCIAHgFIAIgEIAFgDIACAAIAEgBIABgBIAGAAIAOAAIgBAEIgBACIAAADIgBAHIgBAAIgPAAIAAAAIgDABIgFABIgQAHQgJAFgIAHIgCABIAAgCg");
		this.shape_1.setTransform(-16.3,201.9);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#BA893F").s().p("AgaArIgMgBIgMgDIASAAQAQAAAPgHQAMgGANgNIACgDQANgcgOgYIAIAEQAFADAEAGIAEAIIACADIACAGIABACIgBACIAAABQgBAFgCADQgFAJgFAIQgFAGgFAEIgBABIgHAEIgLAFIgJADIgNACIgGAAIgGAAg");
		this.shape_2.setTransform(-12.2,209.5);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#D6B37E").s().p("AAXAlIgLgBIgFgBIgHAAIgSgDIgBAAIgFgCIgIgDIgFgCIgBAAQgNgHgNgNIASAFIAMADIALACIANAAIAKgDIALgDIAMgFIAGgEIABAAQAGgCAFgHQAFgIAEgJQADgFAAgFIADADIAFAHIAEAGQgBARgFANQgFARgJAIIgCAAIgEABIgBAAIgGABIgJAAg");
		this.shape_3.setTransform(-12.6,212.4);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#D3AE76").s().p("AgUYQIgEgGQgJgRgLgHQASgdAHgqIAJABIAFAAIAJABIAJAAIAGgBIACAGIAAABIgBAAIABABQALAogTAnIgCAFIAAABIgBACQgNAcgUAMIgBAAIgFABQATgLgKgZgAhFUMIALgrIAAgBQAWiHAEiZQAJksAAklQABjHANjGQAGhsAChvQAGmvAjmlIAEgNIAAgFIAGkHIgBgNQgKgqABg0IAChjIAiAEIgLJCIgBAPIgBAOIgCAQIgDBKIgCAPIgBAPIgBAPIgHFfIABAQIABAPIABAOIgDB4IgBAPIgBAPIgCAPIgDBDIgBANIgCAOIgBAMIgEBJIgBAPIgCAPIgBAPIgMKQIABAPIABAPIAAAPIgFFRIgCALIgBALIgBALIgEA4IgBALIgCAMIgBALIgBALIgBALIgBAJIgBAKIgEAlIgBALIgBAIIgBAHIgDAiIgCAJIAAAAIgBAGIgCAFIgCATIgBAIIgBABIgOAAIgGABIgBABIgEABIgBAAIgIADIgHAEIgIAFIgEACQAEgHACgIg");
		this.shape_4.setTransform(-10.7,70.8);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#E7D3B6").s().p("AABAmQgNgBgNgPQgSgUAFgSIAIgJQAMgMAPgBQAHAAAJAFQALAHAJARIADAHQAKAWgSAMIgBAAIgKAFQgGACgGAAIgEgBg");
		this.shape_5.setTransform(-16.6,226.5);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#DEC29A").s().p("ABSZNIAAgHIAAAAIABgBIgBAGIABACIgBABIgBABgAAqXwIAAgBIACAAIgCABgAhAXgIAKgIQAjgcgMgyIAGADIAIACIAEACIABAAIAQADQgFAqgSAdQgIgFgKAAQgOABgNALgAgoV7IgSgFIgIgEQgJgWgGgaIgBgIQADgJAEgGIAAgCIAAgIIADAHIAMgNIABgBQAIgHAJgEIATgIIAEgCIADgBIAAgBIAPAAIABAAIAAADIAAAAQAFACAHAFQAHAGAHAJIAJAMQAOAYgNAeIgDADQgMANgPAGQgNAHgPAAIgJAAIgJAAgAhKUXIABgZIABgIIACgGIABgFIACgTIACgIIABgFIABgEIAKABIgKgBIAAgDIADghIACgLIABgIIABgIIADghIACgLIABgKIACgJIABgJIACgJIACgMIABgLIADg4IABgLIACgLIABgMIAGlqIAAgPIgBgPIgBgPIALpyIABgPIADgPIABgPIADhLIABgNIACgNIACgNIADhBIABgPIACgPIABgPIABiWIgBgPIAAgPIAAgPIAElBIABgPIACgPIACgPIADhLIABgPIACgPIABgPIALpVIAoADIgCBjQAAA0AJAqIABANIgFEHIgBAFIgEANQgiGlgJGvQgBBvgHBsQgNDGAADHQAAElgHEsQgFCZgVCHIAAAAIgLAsQgDAIgEAHIgDACIgGAFIgCACIgEADIgHAKIgBABIgCADIABgHg");
		this.shape_6.setTransform(-13.2,73.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-21.6,-88.5,18.6,323.2);
	
	
	(lib.Symbol4 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C7C7C7").s().p("AOhAdI8QgIIg1gzIdIAEIgCA5g");
		this.shape.setTransform(221.6,45.5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AuzRgMAAAgi/IA0A2MAA4AgvIbiArIAZAkIAAALg");
		this.shape_1.setTransform(223.1,154.3);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#141218").s().p("AAAAAIAAAAIAAAAg");
		this.shape_2.setTransform(314.5,48.5);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#2F4B7B").s().p("AAAAAIAAAAIAAABg");
		this.shape_3.setTransform(314.5,48.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		// Layer 4
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#E9E9E9").s().p("AwiTgMAAAgm/MAhFAAAMAAAAm/gAt0QGIciAKMgAIghFI8aAAg");
		this.shape_4.setTransform(220.5,157.5);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(114.6,32.6,211.9,249.8);
	
	
	(lib.Symbol2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["rgba(255,255,255,0.6)","rgba(255,255,255,0)"],[0,1],52.1,0,0,52.1,0,178.3).s().p("ADXbHIDgzLIjFTQIgbgFgAg2aEII655IADgBIgLBCIoSZDIgggLgAIQAUIAAgCILGY6IhBAcgAwDNNIT9qyIzpLWIgUgkgAyjG3IZAmMI4kHwQgPgxgNgzgAzVBRIbJhII6LntQAQg5ATg4IYbI6IBTAiIgZAOIgdAKI55FGQgaiGgGiOgAIJACIABABIAGANIgBABgAIIABIAAAAIgBAIIgDABgAG8gTIA4ATIhugsI3FqqQAbg+Aig7IXsM6IAdAVIgNAHgAIJACIgBgCIABACgAHugTIAPAJIALAKIAAAAIgBAAIgZgTgAIKgDIACABIgBABgAIIgGIth37QAwgbAxgYIMKYrIET7CQBsARBnAdInfaRIgMAJgAGMhjQpqn8pmoCQA1g/A8g8IAJgKIS4TMgAxaqYIAMgeIVgJagAt5wgIAbghISTOeg");
		this.shape.setTransform(-123.8,174);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-247.6,0,247.7,348);
	
	
	(lib.slupek22 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 8
		this.shape = new cjs.Shape();
		this.shape.graphics.lf(["#019FC7","#027888"],[0,1],0,-97.7,0,95.4).s().p("AhTuZIABAAIB2g6IAxgWIAAeFIioBOg");
		this.shape.setTransform(48.5,107.6);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#5ADEFE").s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_1.setTransform(28.4,11.4);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-97.7,-9.5,95.4).s().p("AjGPDIAA+FIACAAIgBABIABAAIGLAAIAAeDIAAABg");
		this.shape_2.setTransform(20,111.6);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.lf(["#FFFF00","#FF9900"],[0,1],11.1,-7.7,25.7,-14.7).s().p("AAAAAIAAAAIAAAAg");
		this.shape_3.setTransform(0.2,15.3);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-97.9,-9.5,95.2).s().p("AjGPBIAA+BIACAAIAAABIGLAAIAAd/IAAABg");
		this.shape_4.setTransform(20,111.8);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.lf(["#019FC7","#027888"],[0,1],0,-97.9,0,95.2).s().p("AhTuXIABAAIB2g6IAxgWIAAeBIioBOg");
		this.shape_5.setTransform(48.5,107.8);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-98.1,-9.5,95).s().p("AjGO/IAA99IACAAIAAAAIGLAAIAAd8IAAABg");
		this.shape_6.setTransform(20,111.9);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#5ADEFE").s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_7.setTransform(28.4,12.1);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.lf(["#019FC7","#027888"],[0,1],0,-98.1,0,95).s().p("AhTuWIABAAIB2g5IAxgWIAAd9IioBOg");
		this.shape_8.setTransform(48.5,107.9);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-98.3,-9.5,94.8).s().p("AjGO9IAA96IACAAIAAABIGLAAIAAd5IAAAAg");
		this.shape_9.setTransform(20,112.1);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.lf(["#019FC7","#027888"],[0,1],0,-98.3,0,94.8).s().p("AhTuUIABAAIB2g5IAxgXIAAd6IioBPg");
		this.shape_10.setTransform(48.5,108.1);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-98.4,-9.5,94.7).s().p("AjGO8IAA93IACAAIAAABIGLAAIAAd1IAAABg");
		this.shape_11.setTransform(20,112.3);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.lf(["#019FC7","#027888"],[0,1],0,-98.4,0,94.7).s().p("AhTuSIABAAIB2g6IAxgWIAAd3IioBOg");
		this.shape_12.setTransform(48.5,108.3);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-98.6,-9.5,94.5).s().p("AjGO6IAA9zIACAAIAAAAIGLAAIAAdyIAAABg");
		this.shape_13.setTransform(20,112.5);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#5ADEFE").s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_14.setTransform(28.4,13.1);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.lf(["#019FC7","#027888"],[0,1],0,-98.6,0,94.5).s().p("AhTuRIABAAIB2g5IAxgWIAAdzIioBOg");
		this.shape_15.setTransform(48.5,108.5);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-98.8,-9.5,94.3).s().p("AjGO4IAA9vIACAAIAAAAIGLAAIAAduIAAABg");
		this.shape_16.setTransform(20,112.6);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#5ADEFE").s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_17.setTransform(28.4,13.5);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.lf(["#019FC7","#027888"],[0,1],0,-98.8,0,94.3).s().p("AhTuPIABAAIB2g5IAxgWIAAdvIioBOg");
		this.shape_18.setTransform(48.5,108.6);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99,-9.5,94.1).s().p("AjGO2IAA9rIACAAIAAAAIGLAAIAAdrIAAAAg");
		this.shape_19.setTransform(20,112.8);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.lf(["#019FC7","#027888"],[0,1],0,-99,0,94.1).s().p("AhTuNIABAAIB2g6IAxgVIAAdrIioBPg");
		this.shape_20.setTransform(48.5,108.8);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99.1,-9.5,94).s().p("AjGO1IAA9pIACAAIAAABIGLAAIAAdnIAAABg");
		this.shape_21.setTransform(20,113);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.lf(["#019FC7","#027888"],[0,1],0,-99.1,0,94).s().p("AhTuLIABAAIB2g6IAxgWIAAdpIioBOg");
		this.shape_22.setTransform(48.5,109);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99.3,-9.5,93.8).s().p("AjGOzIAA9lIACAAIAAAAIGLAAIAAdkIAAABg");
		this.shape_23.setTransform(20,113.2);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.lf(["#019FC7","#027888"],[0,1],0,-99.3,0,93.8).s().p("AhTuKIABAAIB2g5IAxgWIAAdlIioBOg");
		this.shape_24.setTransform(48.5,109.2);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99.5,-9.5,93.6).s().p("AjGOxIAA9hIACAAIAAAAIGLAAIAAdgIAAABg");
		this.shape_25.setTransform(20,113.3);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.lf(["#019FC7","#027888"],[0,1],0,-99.5,0,93.6).s().p("AhTuIIABAAIB2g5IAxgWIAAdhIioBOg");
		this.shape_26.setTransform(48.5,109.3);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99.7,-9.5,93.4).s().p("AjGOvIAA9eIACAAIAAABIGLAAIAAddIAAAAg");
		this.shape_27.setTransform(20,113.5);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.lf(["#019FC7","#027888"],[0,1],0,-99.7,0,93.4).s().p("AhTuGIABAAIB2g5IAxgXIAAdeIioBPg");
		this.shape_28.setTransform(48.5,109.5);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-99.8,-9.5,93.3).s().p("AjGOuIAA9bIACAAIAAABIGLAAIAAdZIAAABg");
		this.shape_29.setTransform(20,113.7);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.lf(["#019FC7","#027888"],[0,1],0,-99.8,0,93.3).s().p("AhTuEIABAAIB2g6IAxgWIAAdbIioBOg");
		this.shape_30.setTransform(48.5,109.7);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100,-9.5,93.1).s().p("AjGOsIAA9XIACAAIAAAAIGLAAIAAdWIAAABg");
		this.shape_31.setTransform(20,113.8);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.lf(["#019FC7","#027888"],[0,1],0,-100,0,93.1).s().p("AhTuDIABAAIB2g5IAxgWIAAdXIioBOg");
		this.shape_32.setTransform(48.5,109.8);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100.2,-9.5,92.9).s().p("AjGOqIAA9UIACAAIAAABIGLAAIAAdTIAAAAg");
		this.shape_33.setTransform(20,114);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.lf(["#019FC7","#027888"],[0,1],0,-100.2,0,92.9).s().p("AhTuBIABAAIB2g6IAxgVIAAdTIioBPg");
		this.shape_34.setTransform(48.5,110);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100.3,-9.5,92.8).s().p("AjGOpIAA9RIACAAIAAABIGLAAIAAdPIAAABg");
		this.shape_35.setTransform(20,114.2);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.lf(["#019FC7","#027888"],[0,1],0,-100.3,0,92.8).s().p("AhTt/IABAAIB2g6IAxgWIAAdRIioBOg");
		this.shape_36.setTransform(48.5,110.2);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100.5,-9.5,92.6).s().p("AjGOnIAA9NIACAAIAAABIGLAAIAAdLIAAABg");
		this.shape_37.setTransform(20,114.4);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.lf(["#019FC7","#027888"],[0,1],0,-100.5,0,92.6).s().p("AhTt9IABAAIB2g6IAxgWIAAdNIioBOg");
		this.shape_38.setTransform(48.5,110.4);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100.7,-9.5,92.4).s().p("AjGOlIAA9JIACAAIAAAAIGLAAIAAdIIAAABg");
		this.shape_39.setTransform(20,114.5);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.lf(["#019FC7","#027888"],[0,1],0,-100.7,0,92.4).s().p("AhTt8IABAAIB2g5IAxgWIAAdJIioBOg");
		this.shape_40.setTransform(48.5,110.5);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-100.9,-9.5,92.2).s().p("AjGOjIAA9FIACAAIAAAAIGLAAIAAdFIAAAAg");
		this.shape_41.setTransform(20,114.7);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.lf(["#019FC7","#027888"],[0,1],0,-100.9,0,92.2).s().p("AhTt6IABAAIB2g5IAxgXIAAdGIioBPg");
		this.shape_42.setTransform(48.5,110.7);
	
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101,-9.5,92.1).s().p("AjGOiIAA9DIACAAIAAABIGLAAIAAdBIAAABg");
		this.shape_43.setTransform(20,114.9);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.lf(["#019FC7","#027888"],[0,1],0,-101,0,92.1).s().p("AhTt4IABAAIB2g6IAxgWIAAdDIioBOg");
		this.shape_44.setTransform(48.5,110.9);
	
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101.2,-9.5,91.9).s().p("AjGOgIAA8/IACAAIAAAAIGLAAIAAc+IAAABg");
		this.shape_45.setTransform(20,115.1);
	
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.lf(["#019FC7","#027888"],[0,1],0,-101.2,0,91.9).s().p("AhTt3IABAAIB2g5IAxgWIAAc/IioBOg");
		this.shape_46.setTransform(48.5,111.1);
	
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101.4,-9.5,91.7).s().p("AjGOeIAA87IACAAIAAAAIGLAAIAAc6IAAABg");
		this.shape_47.setTransform(20,115.2);
	
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.lf(["#019FC7","#027888"],[0,1],0,-101.4,0,91.7).s().p("AhTt1IABAAIB2g5IAxgWIAAc7IioBOg");
		this.shape_48.setTransform(48.5,111.2);
	
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101.6,-9.5,91.5).s().p("AjGOcIAA84IACAAIAAABIGLAAIAAc3IAAAAg");
		this.shape_49.setTransform(20,115.4);
	
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.lf(["#019FC7","#027888"],[0,1],0,-101.6,0,91.5).s().p("AhTtzIABAAIB2g6IAxgVIAAc3IioBPg");
		this.shape_50.setTransform(48.5,111.4);
	
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101.7,-9.5,91.4).s().p("AjGObIAA81IACAAIAAABIGLAAIAAczIAAABg");
		this.shape_51.setTransform(20,115.6);
	
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.lf(["#019FC7","#027888"],[0,1],0,-101.7,0,91.4).s().p("AhTtxIABAAIB2g6IAxgWIAAc1IioBOg");
		this.shape_52.setTransform(48.5,111.6);
	
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-101.9,-9.5,91.2).s().p("AjGOZIAA8xIACAAIAAABIGLAAIAAcvIAAABg");
		this.shape_53.setTransform(20,115.8);
	
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.lf(["#019FC7","#027888"],[0,1],0,-101.9,0,91.2).s().p("AhTtvIABAAIB2g6IAxgWIAAcxIioBOg");
		this.shape_54.setTransform(48.5,111.8);
	
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-102.1,-9.5,91).s().p("AjGOXIAA8tIACAAIAAAAIGLAAIAAcsIAAABg");
		this.shape_55.setTransform(20,115.9);
	
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.lf(["#019FC7","#027888"],[0,1],0,-102.1,0,91).s().p("AhTtuIABAAIB2g5IAxgWIAActIioBOg");
		this.shape_56.setTransform(48.5,111.9);
	
		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-102.3,-9.5,90.8).s().p("AjGOVIAA8qIACAAIAAABIGLAAIAAcpIAAAAg");
		this.shape_57.setTransform(20,116.1);
	
		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.lf(["#019FC7","#027888"],[0,1],0,-102.3,0,90.8).s().p("AhTtsIABAAIB2g5IAxgXIAAcqIioBPg");
		this.shape_58.setTransform(48.5,112.1);
	
		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-102.4,-9.5,90.7).s().p("AjGOUIAA8nIACAAIAAABIGLAAIAAclIAAABg");
		this.shape_59.setTransform(20,116.3);
	
		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.lf(["#019FC7","#027888"],[0,1],0,-102.4,0,90.7).s().p("AhTtqIABAAIB2g6IAxgWIAAcnIioBOg");
		this.shape_60.setTransform(48.5,112.3);
	
		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-102.6,-9.5,90.5).s().p("AjGOSIAA8jIACAAIAAAAIGLAAIAAciIAAABg");
		this.shape_61.setTransform(20,116.5);
	
		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.lf(["#019FC7","#027888"],[0,1],0,-102.6,0,90.5).s().p("AhTtpIABAAIB2g5IAxgWIAAcjIioBOg");
		this.shape_62.setTransform(48.5,112.5);
	
		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-102.8,-9.5,90.3).s().p("AjGOQIAA8fIACAAIAAAAIGLAAIAAceIAAABg");
		this.shape_63.setTransform(20,116.6);
	
		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.lf(["#019FC7","#027888"],[0,1],0,-102.8,0,90.3).s().p("AhTtnIABAAIB2g5IAxgWIAAcfIioBOg");
		this.shape_64.setTransform(48.5,112.6);
	
		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103,-9.5,90.1).s().p("AjGOOIAA8bIACAAIAAAAIGLAAIAAcbIAAAAg");
		this.shape_65.setTransform(20,116.8);
	
		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.lf(["#019FC7","#027888"],[0,1],0,-103,0,90.1).s().p("AhTtlIABAAIB2g6IAxgVIAAcbIioBPg");
		this.shape_66.setTransform(48.5,112.8);
	
		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103.1,-9.5,90).s().p("AjGONIAA8ZIACAAIAAABIGLAAIAAcXIAAABg");
		this.shape_67.setTransform(20,117);
	
		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.lf(["#019FC7","#027888"],[0,1],0,-103.1,0,90).s().p("AhTtjIABAAIB2g6IAxgWIAAcZIioBOg");
		this.shape_68.setTransform(48.5,113);
	
		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103.3,-9.5,89.8).s().p("AjGOLIAA8VIACAAIAAABIGLAAIAAcTIAAABg");
		this.shape_69.setTransform(20,117.2);
	
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.lf(["#019FC7","#027888"],[0,1],0,-103.3,0,89.8).s().p("AhTthIABAAIB2g6IAxgWIAAcVIioBOg");
		this.shape_70.setTransform(48.5,113.2);
	
		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103.5,-9.5,89.6).s().p("AjGOJIAA8RIACAAIAAAAIGLAAIAAcQIAAABg");
		this.shape_71.setTransform(20,117.3);
	
		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.lf(["#019FC7","#027888"],[0,1],0,-103.5,0,89.6).s().p("AhTtgIABAAIB2g5IAxgWIAAcRIioBOg");
		this.shape_72.setTransform(48.5,113.3);
	
		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103.7,-9.5,89.4).s().p("AjGOHIAA8OIACAAIAAABIGLAAIAAcNIAAAAg");
		this.shape_73.setTransform(20,117.5);
	
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.lf(["#019FC7","#027888"],[0,1],0,-103.7,0,89.4).s().p("AhTteIABAAIB2g5IAxgXIAAcOIioBPg");
		this.shape_74.setTransform(48.5,113.5);
	
		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-103.8,-9.5,89.3).s().p("AjGOGIAA8LIACAAIAAABIGLAAIAAcJIAAABg");
		this.shape_75.setTransform(20,117.7);
	
		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.lf(["#019FC7","#027888"],[0,1],0,-103.8,0,89.3).s().p("AhTtcIABAAIB2g6IAxgWIAAcLIioBOg");
		this.shape_76.setTransform(48.5,113.7);
	
		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104,-9.5,89.1).s().p("AjGOEIAA8HIACAAIAAAAIGLAAIAAcGIAAABg");
		this.shape_77.setTransform(20,117.9);
	
		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.lf(["#019FC7","#027888"],[0,1],0,-104,0,89.1).s().p("AhTtbIABAAIB2g5IAxgWIAAcHIioBOg");
		this.shape_78.setTransform(48.5,113.9);
	
		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104.2,-9.5,88.9).s().p("AjGOCIAA8DIACAAIAAAAIGLAAIAAcCIAAABg");
		this.shape_79.setTransform(20,118);
	
		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.lf(["#019FC7","#027888"],[0,1],0,-104.2,0,88.9).s().p("AhTtZIABAAIB2g5IAxgWIAAcDIioBOg");
		this.shape_80.setTransform(48.5,114);
	
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104.3,-9.5,88.8).s().p("AjGOBIAA8BIACAAIAAABIGLAAIAAb/IAAABg");
		this.shape_81.setTransform(20,118.2);
	
		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.lf(["#019FC7","#027888"],[0,1],0,-104.3,0,88.8).s().p("AhTtXIABAAIB2g6IAxgWIAAcBIioBOg");
		this.shape_82.setTransform(48.5,114.2);
	
		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104.5,-9.5,88.6).s().p("AjGN/IAA79IACAAIAAABIGLAAIAAb7IAAABg");
		this.shape_83.setTransform(20,118.4);
	
		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.lf(["#019FC7","#027888"],[0,1],0,-104.5,0,88.6).s().p("AhTtVIABAAIB2g6IAxgWIAAb9IioBOg");
		this.shape_84.setTransform(48.5,114.4);
	
		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104.7,-9.5,88.4).s().p("AjGN9IAA75IACAAIAAAAIGLAAIAAb4IAAABg");
		this.shape_85.setTransform(20,118.5);
	
		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.lf(["#019FC7","#027888"],[0,1],0,-104.7,0,88.4).s().p("AhTtUIABAAIB2g5IAxgWIAAb5IioBOg");
		this.shape_86.setTransform(48.5,114.5);
	
		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-104.9,-9.5,88.2).s().p("AjGN7IAA71IACAAIAAAAIGLAAIAAb1IAAAAg");
		this.shape_87.setTransform(20,118.7);
	
		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.lf(["#019FC7","#027888"],[0,1],0,-104.9,0,88.2).s().p("AhTtSIABAAIB2g6IAxgVIAAb1IioBPg");
		this.shape_88.setTransform(48.5,114.7);
	
		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105,-9.5,88.1).s().p("AjGN6IAA7zIACAAIAAABIGLAAIAAbxIAAABg");
		this.shape_89.setTransform(20,118.9);
	
		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.lf(["#019FC7","#027888"],[0,1],0,-105,0,88.1).s().p("AhTtQIABAAIB2g6IAxgWIAAbzIioBOg");
		this.shape_90.setTransform(48.5,114.9);
	
		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105.2,-9.5,87.9).s().p("AjGN4IAA7vIACAAIAAAAIGLAAIAAbuIAAABg");
		this.shape_91.setTransform(20,119.1);
	
		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.lf(["#019FC7","#027888"],[0,1],0,-105.2,0,87.9).s().p("AhTtPIABAAIB2g5IAxgWIAAbvIioBOg");
		this.shape_92.setTransform(48.5,115.1);
	
		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105.4,-9.5,87.7).s().p("AjGN2IAA7rIACAAIAAAAIGLAAIAAbqIAAABg");
		this.shape_93.setTransform(20,119.2);
	
		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.lf(["#019FC7","#027888"],[0,1],0,-105.4,0,87.7).s().p("AhTtNIABAAIB2g5IAxgWIAAbrIioBOg");
		this.shape_94.setTransform(48.5,115.2);
	
		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105.6,-9.5,87.5).s().p("AjGN0IAA7oIACAAIAAABIGLAAIAAbnIAAAAg");
		this.shape_95.setTransform(20,119.4);
	
		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.lf(["#019FC7","#027888"],[0,1],0,-105.6,0,87.5).s().p("AhTtLIABAAIB2g6IAxgVIAAbnIioBPg");
		this.shape_96.setTransform(48.5,115.4);
	
		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105.7,-9.5,87.4).s().p("AjGNzIAA7lIACAAIAAABIGLAAIAAbjIAAABg");
		this.shape_97.setTransform(20,119.6);
	
		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.lf(["#019FC7","#027888"],[0,1],0,-105.7,0,87.4).s().p("AhTtJIABAAIB2g6IAxgWIAAblIioBOg");
		this.shape_98.setTransform(48.5,115.6);
	
		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-105.9,-9.5,87.2).s().p("AjGNxIAA7hIACAAIAAABIGLAAIAAbfIAAABg");
		this.shape_99.setTransform(20,119.8);
	
		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.lf(["#019FC7","#027888"],[0,1],0,-105.9,0,87.2).s().p("AhTtHIABAAIB2g6IAxgWIAAbhIioBOg");
		this.shape_100.setTransform(48.5,115.8);
	
		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-106.1,-9.5,87).s().p("AjGNvIAA7dIACAAIAAAAIGLAAIAAbcIAAABg");
		this.shape_101.setTransform(20,119.9);
	
		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.lf(["#019FC7","#027888"],[0,1],0,-106.1,0,87).s().p("AhTtGIABAAIB2g5IAxgWIAAbdIioBOg");
		this.shape_102.setTransform(48.5,115.9);
	
		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-106.3,-9.5,86.8).s().p("AjGNtIAA7ZIACAAIAAAAIGLAAIAAbZIAAAAg");
		this.shape_103.setTransform(20,120.1);
	
		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.lf(["#019FC7","#027888"],[0,1],0,-106.3,0,86.8).s().p("AhTtEIABAAIB2g5IAxgXIAAbaIioBPg");
		this.shape_104.setTransform(48.5,116.1);
	
		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-106.4,-9.5,86.7).s().p("AjGNsIAA7XIACAAIAAABIGLAAIAAbVIAAABg");
		this.shape_105.setTransform(20,120.3);
	
		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.lf(["#019FC7","#027888"],[0,1],0,-106.4,0,86.7).s().p("AhTtCIABAAIB2g6IAxgWIAAbXIioBOg");
		this.shape_106.setTransform(48.5,116.3);
	
		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-106.6,-9.5,86.5).s().p("AjGNqIAA7TIACAAIAAAAIGLAAIAAbSIAAABg");
		this.shape_107.setTransform(20,120.5);
	
		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.lf(["#019FC7","#027888"],[0,1],0,-106.6,0,86.5).s().p("AhTtBIABAAIB2g5IAxgWIAAbTIioBOg");
		this.shape_108.setTransform(48.5,116.5);
	
		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-106.8,-9.5,86.3).s().p("AjGNoIAA7PIACAAIAAAAIGLAAIAAbOIAAABg");
		this.shape_109.setTransform(20,120.6);
	
		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.lf(["#019FC7","#027888"],[0,1],0,-106.8,0,86.3).s().p("AhTs/IABAAIB2g5IAxgWIAAbPIioBOg");
		this.shape_110.setTransform(48.5,116.6);
	
		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107,-9.5,86.1).s().p("AjGNmIAA7MIACAAIAAABIGLAAIAAbLIAAAAg");
		this.shape_111.setTransform(20,120.8);
	
		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.lf(["#019FC7","#027888"],[0,1],0,-107,0,86.1).s().p("AhTs9IABAAIB2g6IAxgVIAAbLIioBPg");
		this.shape_112.setTransform(48.5,116.8);
	
		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107.1,-9.5,86).s().p("AjGNlIAA7JIACAAIAAABIGLAAIAAbHIAAABg");
		this.shape_113.setTransform(20,121);
	
		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.lf(["#019FC7","#027888"],[0,1],0,-107.1,0,86).s().p("AhTs7IABAAIB2g6IAxgWIAAbJIioBOg");
		this.shape_114.setTransform(48.5,117);
	
		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107.3,-9.5,85.8).s().p("AjGNjIAA7FIACAAIAAABIGLAAIAAbDIAAABg");
		this.shape_115.setTransform(20,121.2);
	
		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.lf(["#019FC7","#027888"],[0,1],0,-107.3,0,85.8).s().p("AhTs5IABAAIB2g6IAxgWIAAbFIioBOg");
		this.shape_116.setTransform(48.5,117.2);
	
		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107.5,-9.5,85.6).s().p("AjGNhIAA7BIACAAIAAAAIGLAAIAAbAIAAABg");
		this.shape_117.setTransform(20,121.3);
	
		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.lf(["#019FC7","#027888"],[0,1],0,-107.5,0,85.6).s().p("AhTs4IABAAIB2g5IAxgWIAAbBIioBOg");
		this.shape_118.setTransform(48.5,117.3);
	
		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107.7,-9.5,85.4).s().p("AjGNfIAA6+IACAAIAAABIGLAAIAAa9IAAAAg");
		this.shape_119.setTransform(20,121.5);
	
		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.lf(["#019FC7","#027888"],[0,1],0,-107.7,0,85.4).s().p("AhTs2IABAAIB2g5IAxgXIAAa+IioBPg");
		this.shape_120.setTransform(48.5,117.5);
	
		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-107.8,-9.5,85.3).s().p("AjGNeIAA67IACAAIAAABIGLAAIAAa5IAAABg");
		this.shape_121.setTransform(20,121.7);
	
		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.lf(["#019FC7","#027888"],[0,1],0,-107.8,0,85.3).s().p("AhTs0IABAAIB2g6IAxgWIAAa7IioBOg");
		this.shape_122.setTransform(48.5,117.7);
	
		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108,-9.5,85.1).s().p("AjGNcIAA63IACAAIAAAAIGLAAIAAa2IAAABg");
		this.shape_123.setTransform(20,121.9);
	
		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.lf(["#019FC7","#027888"],[0,1],0,-108,0,85.1).s().p("AhTszIABAAIB2g5IAxgWIAAa3IioBOg");
		this.shape_124.setTransform(48.5,117.9);
	
		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108.2,-9.5,84.9).s().p("AjGNaIAA6zIACAAIAAAAIGLAAIAAayIAAABg");
		this.shape_125.setTransform(20,122);
	
		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.lf(["#019FC7","#027888"],[0,1],0,-108.2,0,84.9).s().p("AhTsxIABAAIB2g5IAxgWIAAazIioBOg");
		this.shape_126.setTransform(48.5,118);
	
		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108.4,-9.5,84.7).s().p("AjGNYIAA6vIACAAIAAAAIGLAAIAAavIAAAAg");
		this.shape_127.setTransform(20,122.2);
	
		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.lf(["#019FC7","#027888"],[0,1],0,-108.4,0,84.7).s().p("AhTsvIABAAIB2g6IAxgVIAAavIioBPg");
		this.shape_128.setTransform(48.5,118.2);
	
		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108.5,-9.5,84.6).s().p("AjGNXIAA6tIACAAIAAAAIGLAAIAAasIAAABg");
		this.shape_129.setTransform(20,122.4);
	
		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.lf(["#019FC7","#027888"],[0,1],0,-108.5,0,84.6).s().p("AhTsuIABAAIB2g5IAxgWIAAatIioBOg");
		this.shape_130.setTransform(48.5,118.4);
	
		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108.7,-9.5,84.4).s().p("AjGNVIAA6pIACAAIAAABIGLAAIAAanIAAABg");
		this.shape_131.setTransform(20,122.6);
	
		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.lf(["#019FC7","#027888"],[0,1],0,-108.7,0,84.4).s().p("AhTsrIABAAIB2g6IAxgWIAAapIioBOg");
		this.shape_132.setTransform(48.5,118.6);
	
		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-108.9,-9.5,84.2).s().p("AjGNTIAA6lIACAAIAAAAIGLAAIAAalIAAAAg");
		this.shape_133.setTransform(20,122.7);
	
		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.lf(["#019FC7","#027888"],[0,1],0,-108.9,0,84.2).s().p("AhTsqIABAAIB2g6IAxgVIAAalIioBPg");
		this.shape_134.setTransform(48.5,118.7);
	
		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109,-9.5,84.1).s().p("AjGNSIAA6jIACAAIAAABIGLAAIAAahIAAABg");
		this.shape_135.setTransform(20,122.9);
	
		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.lf(["#019FC7","#027888"],[0,1],0,-109,0,84.1).s().p("AhTsoIABAAIB2g6IAxgWIAAajIioBOg");
		this.shape_136.setTransform(48.5,118.9);
	
		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109.2,-9.5,83.9).s().p("AjGNQIAA6fIACAAIAAAAIGLAAIAAaeIAAABg");
		this.shape_137.setTransform(20,123.1);
	
		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.lf(["#019FC7","#027888"],[0,1],0,-109.2,0,83.9).s().p("AhTsnIABAAIB2g5IAxgWIAAafIioBOg");
		this.shape_138.setTransform(48.5,119.1);
	
		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109.4,-9.5,83.7).s().p("AjGNOIAA6bIACAAIAAAAIGLAAIAAaaIAAABg");
		this.shape_139.setTransform(20,123.2);
	
		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.lf(["#019FC7","#027888"],[0,1],0,-109.4,0,83.7).s().p("AhTslIABAAIB2g5IAxgWIAAabIioBOg");
		this.shape_140.setTransform(48.5,119.2);
	
		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109.6,-9.5,83.5).s().p("AjGNMIAA6YIACAAIAAABIGLAAIAAaXIAAAAg");
		this.shape_141.setTransform(20,123.4);
	
		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.lf(["#019FC7","#027888"],[0,1],0,-109.6,0,83.5).s().p("AhTsjIABAAIB2g5IAxgXIAAaYIioBPg");
		this.shape_142.setTransform(48.5,119.4);
	
		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109.7,-9.5,83.4).s().p("AjGNLIAA6VIACAAIAAABIGLAAIAAaTIAAABg");
		this.shape_143.setTransform(20,123.6);
	
		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.lf(["#019FC7","#027888"],[0,1],0,-109.7,0,83.4).s().p("AhTshIABAAIB2g6IAxgWIAAaVIioBOg");
		this.shape_144.setTransform(48.5,119.6);
	
		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-109.9,-9.5,83.2).s().p("AjGNJIAA6RIACAAIAAABIGLAAIAAaPIAAABg");
		this.shape_145.setTransform(20,123.8);
	
		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.lf(["#019FC7","#027888"],[0,1],0,-109.9,0,83.2).s().p("AhTsfIABAAIB2g6IAxgWIAAaRIioBOg");
		this.shape_146.setTransform(48.5,119.8);
	
		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-110.1,-9.5,83).s().p("AjGNHIAA6NIACAAIAAAAIGLAAIAAaMIAAABg");
		this.shape_147.setTransform(20,123.9);
	
		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.lf(["#019FC7","#027888"],[0,1],0,-110.1,0,83).s().p("AhTseIABAAIB2g5IAxgWIAAaNIioBOg");
		this.shape_148.setTransform(48.5,119.9);
	
		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-110.3,-9.5,82.8).s().p("AjGNFIAA6JIACAAIAAAAIGLAAIAAaJIAAAAg");
		this.shape_149.setTransform(20,124.1);
	
		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.lf(["#019FC7","#027888"],[0,1],0,-110.3,0,82.8).s().p("AhTscIABAAIB2g6IAxgWIAAaKIioBPg");
		this.shape_150.setTransform(48.5,120.1);
	
		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-110.4,-9.5,82.7).s().p("AjGNEIAA6HIACAAIAAABIGLAAIAAaFIAAABg");
		this.shape_151.setTransform(20,124.3);
	
		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.lf(["#019FC7","#027888"],[0,1],0,-110.4,0,82.7).s().p("AhTsaIABAAIB2g6IAxgWIAAaHIioBOg");
		this.shape_152.setTransform(48.5,120.3);
	
		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-110.6,-9.5,82.5).s().p("AjGNCIAA6DIACAAIAAAAIGLAAIAAaCIAAABg");
		this.shape_153.setTransform(20,124.5);
	
		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.lf(["#019FC7","#027888"],[0,1],0,-110.6,0,82.5).s().p("AhTsZIABAAIB2g5IAxgWIAAaDIioBOg");
		this.shape_154.setTransform(48.5,120.5);
	
		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-110.8,-9.5,82.3).s().p("AjGNAIAA5/IACAAIAAAAIGLAAIAAZ+IAAABg");
		this.shape_155.setTransform(20,124.6);
	
		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.lf(["#019FC7","#027888"],[0,1],0,-110.8,0,82.3).s().p("AhTsXIABAAIB2g5IAxgWIAAZ/IioBOg");
		this.shape_156.setTransform(48.5,120.6);
	
		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111,-9.5,82.1).s().p("AjGM+IAA58IACAAIAAABIGLAAIAAZ7IAAAAg");
		this.shape_157.setTransform(20,124.8);
	
		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.lf(["#019FC7","#027888"],[0,1],0,-111,0,82.1).s().p("AhTsVIABAAIB2g6IAxgVIAAZ7IioBPg");
		this.shape_158.setTransform(48.5,120.8);
	
		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111.1,-9.5,82).s().p("AjGM9IAA55IACAAIAAABIGLAAIAAZ3IAAABg");
		this.shape_159.setTransform(20,125);
	
		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.lf(["#019FC7","#027888"],[0,1],0,-111.1,0,82).s().p("AhTsTIABAAIB2g6IAxgWIAAZ5IioBOg");
		this.shape_160.setTransform(48.5,121);
	
		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111.3,-9.5,81.8).s().p("AjGM7IAA51IACAAIAAABIGLAAIAAZzIAAABg");
		this.shape_161.setTransform(20,125.2);
	
		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.lf(["#019FC7","#027888"],[0,1],0,-111.3,0,81.8).s().p("AhTsRIABAAIB2g6IAxgWIAAZ1IioBOg");
		this.shape_162.setTransform(48.5,121.2);
	
		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111.5,-9.5,81.6).s().p("AjGM5IAA5xIACAAIAAAAIGLAAIAAZwIAAABg");
		this.shape_163.setTransform(20,125.3);
	
		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.lf(["#019FC7","#027888"],[0,1],0,-111.5,0,81.6).s().p("AhTsQIABAAIB2g5IAxgWIAAZxIioBOg");
		this.shape_164.setTransform(48.5,121.3);
	
		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111.7,-9.5,81.4).s().p("AjGM3IAA5tIACAAIAAAAIGLAAIAAZtIAAAAg");
		this.shape_165.setTransform(20,125.5);
	
		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.lf(["#019FC7","#027888"],[0,1],0,-111.7,0,81.4).s().p("AhTsOIABAAIB2g5IAxgXIAAZuIioBPg");
		this.shape_166.setTransform(48.5,121.5);
	
		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-111.8,-9.5,81.3).s().p("AjGM2IAA5rIACAAIAAABIGLAAIAAZpIAAABg");
		this.shape_167.setTransform(20,125.7);
	
		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.lf(["#019FC7","#027888"],[0,1],0,-111.8,0,81.3).s().p("AhTsMIABAAIB2g6IAxgWIAAZrIioBOg");
		this.shape_168.setTransform(48.5,121.7);
	
		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112,-9.5,81.1).s().p("AjGM0IAA5nIACAAIAAAAIGLAAIAAZmIAAABg");
		this.shape_169.setTransform(20,125.9);
	
		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.lf(["#019FC7","#027888"],[0,1],0,-112,0,81.1).s().p("AhTsLIABAAIB2g5IAxgWIAAZnIioBOg");
		this.shape_170.setTransform(48.5,121.9);
	
		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112.2,-9.5,80.9).s().p("AjGMyIAA5jIACAAIAAAAIGLAAIAAZiIAAABg");
		this.shape_171.setTransform(20,126);
	
		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.lf(["#019FC7","#027888"],[0,1],0,-112.2,0,80.9).s().p("AhTsJIABAAIB2g5IAxgWIAAZjIioBOg");
		this.shape_172.setTransform(48.5,122);
	
		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112.4,-9.5,80.7).s().p("AjGMwIAA5gIACAAIAAABIGLAAIAAZfIAAAAg");
		this.shape_173.setTransform(20,126.2);
	
		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.lf(["#019FC7","#027888"],[0,1],0,-112.4,0,80.7).s().p("AhTsHIABAAIB2g6IAxgVIAAZfIioBPg");
		this.shape_174.setTransform(48.5,122.2);
	
		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112.5,-9.5,80.6).s().p("AjGMvIAA5dIACAAIAAABIGLAAIAAZbIAAABg");
		this.shape_175.setTransform(20,126.4);
	
		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.lf(["#019FC7","#027888"],[0,1],0,-112.5,0,80.6).s().p("AhTsFIABAAIB2g6IAxgWIAAZdIioBOg");
		this.shape_176.setTransform(48.5,122.4);
	
		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112.7,-9.5,80.4).s().p("AjGMtIAA5ZIACAAIAAABIGLAAIAAZXIAAABg");
		this.shape_177.setTransform(20,126.6);
	
		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.lf(["#019FC7","#027888"],[0,1],0,-112.7,0,80.4).s().p("AhTsDIABAAIB2g6IAxgWIAAZZIioBOg");
		this.shape_178.setTransform(48.5,122.6);
	
		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-112.9,-9.5,80.2).s().p("AjGMrIAA5VIACAAIAAAAIGLAAIAAZUIAAABg");
		this.shape_179.setTransform(20,126.7);
	
		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.lf(["#019FC7","#027888"],[0,1],0,-112.9,0,80.2).s().p("AhTsCIABAAIB2g5IAxgWIAAZVIioBOg");
		this.shape_180.setTransform(48.5,122.7);
	
		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113,-9.5,80.1).s().p("AjGMqIAA5TIACAAIAAABIGLAAIAAZRIAAABg");
		this.shape_181.setTransform(20,126.9);
	
		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.lf(["#019FC7","#027888"],[0,1],0,-113,0,80.1).s().p("AhTsAIABAAIB2g6IAxgWIAAZTIioBOg");
		this.shape_182.setTransform(48.5,122.9);
	
		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113.2,-9.5,79.9).s().p("AjGMoIAA5PIACAAIAAABIGLAAIAAZNIAAABg");
		this.shape_183.setTransform(20,127.1);
	
		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.lf(["#019FC7","#027888"],[0,1],0,-113.2,0,79.9).s().p("AhTr+IABAAIB2g6IAxgWIAAZPIioBOg");
		this.shape_184.setTransform(48.5,123.1);
	
		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113.4,-9.5,79.7).s().p("AjGMmIAA5LIACAAIAAAAIGLAAIAAZKIAAABg");
		this.shape_185.setTransform(20,127.2);
	
		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.lf(["#019FC7","#027888"],[0,1],0,-113.4,0,79.7).s().p("AhTr9IABAAIB2g5IAxgWIAAZLIioBOg");
		this.shape_186.setTransform(48.5,123.2);
	
		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113.6,-9.5,79.5).s().p("AjGMkIAA5IIACAAIAAABIGLAAIAAZHIAAAAg");
		this.shape_187.setTransform(20,127.4);
	
		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.lf(["#019FC7","#027888"],[0,1],0,-113.6,0,79.5).s().p("AhTr7IABAAIB2g5IAxgXIAAZIIioBPg");
		this.shape_188.setTransform(48.5,123.4);
	
		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113.7,-9.5,79.4).s().p("AjGMjIAA5FIACAAIAAABIGLAAIAAZDIAAABg");
		this.shape_189.setTransform(20,127.6);
	
		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.lf(["#019FC7","#027888"],[0,1],0,-113.7,0,79.4).s().p("AhTr5IABAAIB2g6IAxgWIAAZFIioBOg");
		this.shape_190.setTransform(48.5,123.6);
	
		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-113.9,-9.5,79.2).s().p("AjGMhIAA5BIACAAIAAAAIGLAAIAAZAIAAABg");
		this.shape_191.setTransform(20,127.8);
	
		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.lf(["#019FC7","#027888"],[0,1],0,-113.9,0,79.2).s().p("AhTr4IABAAIB2g5IAxgWIAAZBIioBOg");
		this.shape_192.setTransform(48.5,123.8);
	
		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-114.1,-9.5,79).s().p("AjGMfIAA49IACAAIAAAAIGLAAIAAY8IAAABg");
		this.shape_193.setTransform(20,127.9);
	
		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.lf(["#019FC7","#027888"],[0,1],0,-114.1,0,79).s().p("AhTr2IABAAIB2g5IAxgWIAAY9IioBOg");
		this.shape_194.setTransform(48.5,123.9);
	
		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-114.3,-9.5,78.8).s().p("AjGMdIAA45IACAAIAAAAIGLAAIAAY5IAAAAg");
		this.shape_195.setTransform(20,128.1);
	
		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.lf(["#019FC7","#027888"],[0,1],0,-114.3,0,78.8).s().p("AhTr0IABAAIB2g6IAxgVIAAY5IioBPg");
		this.shape_196.setTransform(48.5,124.1);
	
		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-114.4,-9.5,78.7).s().p("AjGMcIAA43IACAAIAAABIGLAAIAAY1IAAABg");
		this.shape_197.setTransform(20,128.3);
	
		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.lf(["#019FC7","#027888"],[0,1],0,-114.4,0,78.7).s().p("AhTryIABAAIB2g6IAxgWIAAY3IioBOg");
		this.shape_198.setTransform(48.5,124.3);
	
		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-114.6,-9.5,78.5).s().p("AjGMaIAA4zIACAAIAAAAIGLAAIAAYyIAAABg");
		this.shape_199.setTransform(20,128.5);
	
		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.lf(["#019FC7","#027888"],[0,1],0,-114.6,0,78.5).s().p("AhTrxIABAAIB2g5IAxgWIAAYzIioBOg");
		this.shape_200.setTransform(48.5,124.5);
	
		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-114.8,-9.5,78.3).s().p("AjGMYIAA4vIACAAIAAAAIGLAAIAAYuIAAABg");
		this.shape_201.setTransform(20,128.6);
	
		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.lf(["#019FC7","#027888"],[0,1],0,-114.8,0,78.3).s().p("AhTrvIABAAIB2g5IAxgWIAAYvIioBOg");
		this.shape_202.setTransform(48.5,124.6);
	
		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115,-9.5,78.1).s().p("AjGMWIAA4sIACAAIAAABIGLAAIAAYrIAAAAg");
		this.shape_203.setTransform(20,128.8);
	
		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.lf(["#019FC7","#027888"],[0,1],0,-115,0,78.1).s().p("AhTrtIABAAIB2g5IAxgXIAAYsIioBPg");
		this.shape_204.setTransform(48.5,124.8);
	
		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115.1,-9.5,78).s().p("AjGMVIAA4pIACAAIAAABIGLAAIAAYnIAAABg");
		this.shape_205.setTransform(20,129);
	
		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.lf(["#019FC7","#027888"],[0,1],0,-115.1,0,78).s().p("AhTrrIABAAIB2g6IAxgWIAAYpIioBOg");
		this.shape_206.setTransform(48.5,125);
	
		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115.3,-9.5,77.8).s().p("AjGMTIAA4lIACAAIAAABIGLAAIAAYjIAAABg");
		this.shape_207.setTransform(20,129.2);
	
		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.lf(["#019FC7","#027888"],[0,1],0,-115.3,0,77.8).s().p("AhTrpIABAAIB2g6IAxgWIAAYlIioBOg");
		this.shape_208.setTransform(48.5,125.2);
	
		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115.5,-9.5,77.6).s().p("AjGMRIAA4hIACAAIAAAAIGLAAIAAYgIAAABg");
		this.shape_209.setTransform(20,129.3);
	
		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.lf(["#019FC7","#027888"],[0,1],0,-115.5,0,77.6).s().p("AhTroIABAAIB2g5IAxgWIAAYhIioBOg");
		this.shape_210.setTransform(48.5,125.3);
	
		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115.7,-9.5,77.4).s().p("AjGMPIAA4dIACAAIAAAAIGLAAIAAYdIAAAAg");
		this.shape_211.setTransform(20,129.5);
	
		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.lf(["#019FC7","#027888"],[0,1],0,-115.7,0,77.4).s().p("AhTrmIABAAIB2g6IAxgVIAAYdIioBPg");
		this.shape_212.setTransform(48.5,125.5);
	
		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-115.8,-9.5,77.3).s().p("AjGMOIAA4bIACAAIAAABIGLAAIAAYZIAAABg");
		this.shape_213.setTransform(20,129.7);
	
		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.lf(["#019FC7","#027888"],[0,1],0,-115.8,0,77.3).s().p("AhTrkIABAAIB2g6IAxgWIAAYbIioBOg");
		this.shape_214.setTransform(48.5,125.7);
	
		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116,-9.5,77.1).s().p("AjGMMIAA4XIACAAIAAAAIGLAAIAAYWIAAABg");
		this.shape_215.setTransform(20,129.9);
	
		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.lf(["#019FC7","#027888"],[0,1],0,-116,0,77.1).s().p("AhTrjIABAAIB2g5IAxgWIAAYXIioBOg");
		this.shape_216.setTransform(48.5,125.9);
	
		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116.2,-9.5,76.9).s().p("AjGMKIAA4TIACAAIAAAAIGLAAIAAYSIAAABg");
		this.shape_217.setTransform(20,130);
	
		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.lf(["#019FC7","#027888"],[0,1],0,-116.2,0,76.9).s().p("AhTrhIABAAIB2g5IAxgWIAAYTIioBOg");
		this.shape_218.setTransform(48.5,126);
	
		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116.4,-9.5,76.7).s().p("AjGMIIAA4QIACAAIAAABIGLAAIAAYPIAAAAg");
		this.shape_219.setTransform(20,130.2);
	
		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.lf(["#019FC7","#027888"],[0,1],0,-116.4,0,76.7).s().p("AhTrfIABAAIB2g6IAxgVIAAYPIioBPg");
		this.shape_220.setTransform(48.5,126.2);
	
		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116.5,-9.5,76.6).s().p("AjGMHIAA4NIACAAIAAABIGLAAIAAYLIAAABg");
		this.shape_221.setTransform(20,130.4);
	
		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.lf(["#019FC7","#027888"],[0,1],0,-116.5,0,76.6).s().p("AhTrdIABAAIB2g6IAxgWIAAYNIioBOg");
		this.shape_222.setTransform(48.5,126.4);
	
		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116.7,-9.5,76.4).s().p("AjGMFIAA4JIACAAIAAABIGLAAIAAYHIAAABg");
		this.shape_223.setTransform(20,130.6);
	
		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.lf(["#019FC7","#027888"],[0,1],0,-116.7,0,76.4).s().p("AhTrbIABAAIB2g6IAxgWIAAYJIioBOg");
		this.shape_224.setTransform(48.5,126.6);
	
		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-116.9,-9.5,76.2).s().p("AjGMDIAA4FIACAAIAAAAIGLAAIAAYEIAAABg");
		this.shape_225.setTransform(20,130.7);
	
		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.lf(["#019FC7","#027888"],[0,1],0,-116.9,0,76.2).s().p("AhTraIABAAIB2g5IAxgWIAAYFIioBOg");
		this.shape_226.setTransform(48.5,126.7);
	
		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.1,-9.5,76).s().p("AjGMBIAA4BIACAAIAAAAIGLAAIAAYBIAAAAg");
		this.shape_227.setTransform(20,130.9);
	
		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.1,0,76).s().p("AhTrYIABAAIB2g5IAxgXIAAYCIioBPg");
		this.shape_228.setTransform(48.5,126.9);
	
		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.2,-9.5,75.9).s().p("AjGMAIAA3/IACAAIAAABIGLAAIAAX9IAAABg");
		this.shape_229.setTransform(20,131.1);
	
		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.2,0,75.9).s().p("AhTrWIABAAIB2g6IAxgWIAAX/IioBOg");
		this.shape_230.setTransform(48.5,127.1);
	
		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.4,-9.5,75.7).s().p("AjGL+IAA37IACAAIAAAAIGLAAIAAX6IAAABg");
		this.shape_231.setTransform(20,131.2);
	
		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.4,0,75.7).s().p("AhTrVIABAAIB2g5IAxgWIAAX7IioBOg");
		this.shape_232.setTransform(48.5,127.2);
	
		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.6,-9.5,75.5).s().p("AjGL8IAA34IACAAIAAABIGLAAIAAX3IAAAAg");
		this.shape_233.setTransform(20,131.4);
	
		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.6,0,75.5).s().p("AhTrTIABAAIB2g5IAxgXIAAX4IioBPg");
		this.shape_234.setTransform(48.5,127.4);
	
		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.7,0,75.4).s().p("AhTrRIABAAIB2g6IAxgWIAAX1IioBOg");
		this.shape_235.setTransform(48.5,127.6);
	
		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.7,-9.5,75.4).s().p("AjGL7IAA31IACAAIAAABIGLAAIAAXzIAAABg");
		this.shape_236.setTransform(20,131.6);
	
		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.lf(["#019FC7","#027888"],[0,1],0,-117.9,0,75.2).s().p("AhTrQIABAAIB2g5IAxgWIAAXxIioBOg");
		this.shape_237.setTransform(48.5,127.8);
	
		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-117.9,-9.5,75.2).s().p("AjGL5IAA3xIACAAIAAAAIGLAAIAAXwIAAABg");
		this.shape_238.setTransform(20,131.8);
	
		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.lf(["#019FC7","#027888"],[0,1],0,-118.1,0,75).s().p("AhTrOIABAAIB2g5IAxgWIAAXtIioBOg");
		this.shape_239.setTransform(48.5,127.9);
	
		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-118.1,-9.5,75).s().p("AjGL3IAA3tIACAAIAAAAIGLAAIAAXsIAAABg");
		this.shape_240.setTransform(20,131.9);
	
		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.lf(["#019FC7","#027888"],[0,1],0,-118.3,0,74.8).s().p("AhTrMIABAAIB2g6IAxgVIAAXpIioBPg");
		this.shape_241.setTransform(48.5,128.1);
	
		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-118.3,-9.5,74.8).s().p("AjGL1IAA3pIACAAIAAAAIGLAAIAAXpIAAAAg");
		this.shape_242.setTransform(20,132.1);
	
		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.lf(["#019FC7","#027888"],[0,1],0,-118.4,0,74.7).s().p("AhTrKIABAAIB2g6IAxgWIAAXnIioBOg");
		this.shape_243.setTransform(48.5,128.3);
	
		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-118.4,-9.5,74.7).s().p("AjGL0IAA3nIACAAIAAABIGLAAIAAXlIAAABg");
		this.shape_244.setTransform(20,132.3);
	
		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.lf(["#019FC7","#027888"],[0,1],0,-118.6,0,74.5).s().p("AhTrIIABAAIB2g6IAxgWIAAXjIioBOg");
		this.shape_245.setTransform(48.5,128.5);
	
		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-118.6,-9.5,74.5).s().p("AjGLyIAA3jIACAAIAAABIGLAAIAAXhIAAABg");
		this.shape_246.setTransform(20,132.5);
	
		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.lf(["#019FC7","#027888"],[0,1],0,-118.8,0,74.3).s().p("AhTrHIABAAIB2g5IAxgWIAAXfIioBOg");
		this.shape_247.setTransform(48.5,128.6);
	
		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-118.8,-9.5,74.3).s().p("AjGLwIAA3fIACAAIAAAAIGLAAIAAXeIAAABg");
		this.shape_248.setTransform(20,132.6);
	
		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.lf(["#019FC7","#027888"],[0,1],0,-119,0,74.1).s().p("AhTrFIABAAIB2g5IAxgXIAAXcIioBPg");
		this.shape_249.setTransform(48.5,128.8);
	
		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119,-9.5,74.1).s().p("AjGLuIAA3cIACAAIAAABIGLAAIAAXbIAAAAg");
		this.shape_250.setTransform(20,132.8);
	
		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.lf(["#019FC7","#027888"],[0,1],0,-119.1,0,74).s().p("AhTrDIABAAIB2g6IAxgWIAAXZIioBOg");
		this.shape_251.setTransform(48.5,129);
	
		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119.1,-9.5,74).s().p("AjGLtIAA3ZIACAAIAAABIGLAAIAAXXIAAABg");
		this.shape_252.setTransform(20,133);
	
		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.lf(["#019FC7","#027888"],[0,1],0,-119.3,0,73.8).s().p("AhTrCIABAAIB2g5IAxgWIAAXVIioBOg");
		this.shape_253.setTransform(48.5,129.2);
	
		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119.3,-9.5,73.8).s().p("AjGLrIAA3VIACAAIAAAAIGLAAIAAXUIAAABg");
		this.shape_254.setTransform(20,133.2);
	
		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.lf(["#019FC7","#027888"],[0,1],0,-119.5,0,73.6).s().p("AhTrAIABAAIB2g5IAxgWIAAXRIioBOg");
		this.shape_255.setTransform(48.5,129.3);
	
		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119.5,-9.5,73.6).s().p("AjGLpIAA3RIACAAIAAAAIGLAAIAAXQIAAABg");
		this.shape_256.setTransform(20,133.3);
	
		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.lf(["#019FC7","#027888"],[0,1],0,-119.7,0,73.4).s().p("AhTq+IABAAIB2g6IAxgVIAAXNIioBPg");
		this.shape_257.setTransform(48.5,129.5);
	
		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119.7,-9.5,73.4).s().p("AjGLnIAA3NIACAAIAAAAIGLAAIAAXNIAAAAg");
		this.shape_258.setTransform(20,133.5);
	
		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.lf(["#019FC7","#027888"],[0,1],0,-119.8,0,73.3).s().p("AhTq8IABAAIB2g6IAxgWIAAXLIioBOg");
		this.shape_259.setTransform(48.5,129.7);
	
		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-119.8,-9.5,73.3).s().p("AjGLmIAA3LIACAAIAAABIGLAAIAAXJIAAABg");
		this.shape_260.setTransform(20,133.7);
	
		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.lf(["#019FC7","#027888"],[0,1],0,-120,0,73.1).s().p("AhTq7IABAAIB2g5IAxgWIAAXHIioBOg");
		this.shape_261.setTransform(48.5,129.9);
	
		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120,-9.5,73.1).s().p("AjGLkIAA3HIACAAIAAAAIGLAAIAAXGIAAABg");
		this.shape_262.setTransform(20,133.9);
	
		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.lf(["#019FC7","#027888"],[0,1],0,-120.2,0,72.9).s().p("AhTq5IABAAIB2g5IAxgWIAAXDIioBOg");
		this.shape_263.setTransform(48.5,130);
	
		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120.2,-9.5,72.9).s().p("AjGLiIAA3DIACAAIAAAAIGLAAIAAXCIAAABg");
		this.shape_264.setTransform(20,134);
	
		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.lf(["#019FC7","#027888"],[0,1],0,-120.4,0,72.7).s().p("AhTq3IABAAIB2g5IAxgXIAAXAIioBPg");
		this.shape_265.setTransform(48.5,130.2);
	
		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120.4,-9.5,72.7).s().p("AjGLgIAA3AIACAAIAAABIGLAAIAAW/IAAAAg");
		this.shape_266.setTransform(20,134.2);
	
		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.lf(["#019FC7","#027888"],[0,1],0,-120.5,0,72.6).s().p("AhTq1IABAAIB2g6IAxgWIAAW9IioBOg");
		this.shape_267.setTransform(48.5,130.4);
	
		this.shape_268 = new cjs.Shape();
		this.shape_268.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120.5,-9.5,72.6).s().p("AjGLfIAA29IACAAIAAABIGLAAIAAW7IAAABg");
		this.shape_268.setTransform(20,134.4);
	
		this.shape_269 = new cjs.Shape();
		this.shape_269.graphics.lf(["#019FC7","#027888"],[0,1],0,-120.7,0,72.4).s().p("AhTqzIABAAIB2g6IAxgWIAAW5IioBOg");
		this.shape_269.setTransform(48.5,130.6);
	
		this.shape_270 = new cjs.Shape();
		this.shape_270.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120.7,-9.5,72.4).s().p("AjGLdIAA25IACAAIAAABIGLAAIAAW3IAAABg");
		this.shape_270.setTransform(20,134.6);
	
		this.shape_271 = new cjs.Shape();
		this.shape_271.graphics.lf(["#019FC7","#027888"],[0,1],0,-120.9,0,72.2).s().p("AhTqyIABAAIB2g5IAxgWIAAW1IioBOg");
		this.shape_271.setTransform(48.5,130.7);
	
		this.shape_272 = new cjs.Shape();
		this.shape_272.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-120.9,-9.5,72.2).s().p("AjGLbIAA21IACAAIAAAAIGLAAIAAW0IAAABg");
		this.shape_272.setTransform(20,134.7);
	
		this.shape_273 = new cjs.Shape();
		this.shape_273.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.1,0,72).s().p("AhTqwIABAAIB2g6IAxgWIAAWyIioBPg");
		this.shape_273.setTransform(48.5,130.9);
	
		this.shape_274 = new cjs.Shape();
		this.shape_274.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.1,-9.5,72).s().p("AjGLZIAA2xIACAAIAAAAIGLAAIAAWxIAAAAg");
		this.shape_274.setTransform(20,134.9);
	
		this.shape_275 = new cjs.Shape();
		this.shape_275.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.2,0,71.9).s().p("AhTquIABAAIB2g6IAxgWIAAWvIioBOg");
		this.shape_275.setTransform(48.5,131.1);
	
		this.shape_276 = new cjs.Shape();
		this.shape_276.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.2,-9.5,71.9).s().p("AjGLYIAA2vIACAAIAAABIGLAAIAAWtIAAABg");
		this.shape_276.setTransform(20,135.1);
	
		this.shape_277 = new cjs.Shape();
		this.shape_277.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.4,0,71.7).s().p("AhTqtIABAAIB2g5IAxgWIAAWrIioBOg");
		this.shape_277.setTransform(48.5,131.3);
	
		this.shape_278 = new cjs.Shape();
		this.shape_278.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.4,-9.5,71.7).s().p("AjGLWIAA2rIACAAIAAAAIGLAAIAAWqIAAABg");
		this.shape_278.setTransform(20,135.3);
	
		this.shape_279 = new cjs.Shape();
		this.shape_279.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.6,0,71.5).s().p("AhTqrIABAAIB2g5IAxgWIAAWnIioBOg");
		this.shape_279.setTransform(48.5,131.4);
	
		this.shape_280 = new cjs.Shape();
		this.shape_280.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.6,-9.5,71.5).s().p("AjGLUIAA2nIACAAIAAAAIGLAAIAAWmIAAABg");
		this.shape_280.setTransform(20,135.4);
	
		this.shape_281 = new cjs.Shape();
		this.shape_281.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.7,0,71.4).s().p("AhTqpIABAAIB2g6IAxgWIAAWlIioBOg");
		this.shape_281.setTransform(48.5,131.6);
	
		this.shape_282 = new cjs.Shape();
		this.shape_282.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.7,-9.5,71.4).s().p("AjGLTIAA2lIACAAIAAABIGLAAIAAWjIAAABg");
		this.shape_282.setTransform(20,135.6);
	
		this.shape_283 = new cjs.Shape();
		this.shape_283.graphics.lf(["#019FC7","#027888"],[0,1],0,-121.9,0,71.2).s().p("AhTqoIABAAIB2g5IAxgWIAAWhIioBOg");
		this.shape_283.setTransform(48.5,131.8);
	
		this.shape_284 = new cjs.Shape();
		this.shape_284.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-121.9,-9.5,71.2).s().p("AjGLRIAA2hIACAAIAAAAIGLAAIAAWgIAAABg");
		this.shape_284.setTransform(20,135.8);
	
		this.shape_285 = new cjs.Shape();
		this.shape_285.graphics.lf(["#019FC7","#027888"],[0,1],0,-122.1,0,71).s().p("AhTqmIABAAIB2g5IAxgWIAAWdIioBOg");
		this.shape_285.setTransform(48.5,131.9);
	
		this.shape_286 = new cjs.Shape();
		this.shape_286.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-122.1,-9.5,71).s().p("AjGLPIAA2dIACAAIAAAAIGLAAIAAWcIAAABg");
		this.shape_286.setTransform(20,135.9);
	
		this.shape_287 = new cjs.Shape();
		this.shape_287.graphics.lf(["#019FC7","#027888"],[0,1],0,-122.3,0,70.8).s().p("AhTqkIABAAIB2g6IAxgVIAAWZIioBPg");
		this.shape_287.setTransform(48.5,132.1);
	
		this.shape_288 = new cjs.Shape();
		this.shape_288.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-122.3,-9.5,70.8).s().p("AjGLNIAA2aIACAAIAAABIGLAAIAAWZIAAAAg");
		this.shape_288.setTransform(20,136.1);
	
		this.shape_289 = new cjs.Shape();
		this.shape_289.graphics.lf(["#019FC7","#027888"],[0,1],0,-122.4,0,70.7).s().p("AhTqiIABAAIB2g6IAxgWIAAWXIioBOg");
		this.shape_289.setTransform(48.5,132.3);
	
		this.shape_290 = new cjs.Shape();
		this.shape_290.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-122.4,-9.5,70.7).s().p("AjGLMIAA2XIACAAIAAABIGLAAIAAWVIAAABg");
		this.shape_290.setTransform(20,136.3);
	
		this.shape_291 = new cjs.Shape();
		this.shape_291.graphics.lf(["#019FC7","#027888"],[0,1],0,-122.6,0,70.5).s().p("AhTqgIABAAIB2g6IAxgWIAAWTIioBOg");
		this.shape_291.setTransform(48.5,132.5);
	
		this.shape_292 = new cjs.Shape();
		this.shape_292.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-122.6,-9.5,70.5).s().p("AjGLKIAA2TIACAAIAAABIGLAAIAAWRIAAABg");
		this.shape_292.setTransform(20,136.5);
	
		this.shape_293 = new cjs.Shape();
		this.shape_293.graphics.lf(["#019FC7","#027888"],[0,1],0,-122.8,0,70.3).s().p("AhTqfIABAAIB2g5IAxgWIAAWPIioBOg");
		this.shape_293.setTransform(48.5,132.6);
	
		this.shape_294 = new cjs.Shape();
		this.shape_294.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-122.8,-9.5,70.3).s().p("AjGLIIAA2PIACAAIAAAAIGLAAIAAWOIAAABg");
		this.shape_294.setTransform(20,136.6);
	
		this.shape_295 = new cjs.Shape();
		this.shape_295.graphics.lf(["#019FC7","#027888"],[0,1],0,-123,0,70.1).s().p("AhTqdIABAAIB2g5IAxgXIAAWMIioBPg");
		this.shape_295.setTransform(48.5,132.8);
	
		this.shape_296 = new cjs.Shape();
		this.shape_296.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123,-9.5,70.1).s().p("AjGLGIAA2MIACAAIAAABIGLAAIAAWLIAAAAg");
		this.shape_296.setTransform(20,136.8);
	
		this.shape_297 = new cjs.Shape();
		this.shape_297.graphics.lf(["#019FC7","#027888"],[0,1],0,-123.1,0,70).s().p("AhTqbIABAAIB2g6IAxgWIAAWJIioBOg");
		this.shape_297.setTransform(48.5,133);
	
		this.shape_298 = new cjs.Shape();
		this.shape_298.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123.1,-9.5,70).s().p("AjGLFIAA2JIACAAIAAABIGLAAIAAWHIAAABg");
		this.shape_298.setTransform(20,137);
	
		this.shape_299 = new cjs.Shape();
		this.shape_299.graphics.lf(["#019FC7","#027888"],[0,1],0,-123.3,0,69.8).s().p("AhTqaIABAAIB2g5IAxgWIAAWFIioBOg");
		this.shape_299.setTransform(48.5,133.2);
	
		this.shape_300 = new cjs.Shape();
		this.shape_300.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123.3,-9.5,69.8).s().p("AjGLDIAA2FIACAAIAAAAIGLAAIAAWEIAAABg");
		this.shape_300.setTransform(20,137.2);
	
		this.shape_301 = new cjs.Shape();
		this.shape_301.graphics.lf(["#019FC7","#027888"],[0,1],0,-123.5,0,69.6).s().p("AhTqYIABAAIB2g5IAxgWIAAWBIioBOg");
		this.shape_301.setTransform(48.5,133.3);
	
		this.shape_302 = new cjs.Shape();
		this.shape_302.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123.5,-9.5,69.6).s().p("AjGLBIAA2BIACAAIAAAAIGLAAIAAWAIAAABg");
		this.shape_302.setTransform(20,137.3);
	
		this.shape_303 = new cjs.Shape();
		this.shape_303.graphics.lf(["#019FC7","#027888"],[0,1],0,-123.7,0,69.4).s().p("AhTqWIABAAIB2g6IAxgVIAAV9IioBPg");
		this.shape_303.setTransform(48.5,133.5);
	
		this.shape_304 = new cjs.Shape();
		this.shape_304.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123.7,-9.5,69.4).s().p("AjGK/IAA19IACAAIAAAAIGLAAIAAV9IAAAAg");
		this.shape_304.setTransform(20,137.5);
	
		this.shape_305 = new cjs.Shape();
		this.shape_305.graphics.lf(["#019FC7","#027888"],[0,1],0,-123.8,0,69.3).s().p("AhTqUIABAAIB2g6IAxgWIAAV7IioBOg");
		this.shape_305.setTransform(48.5,133.7);
	
		this.shape_306 = new cjs.Shape();
		this.shape_306.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-123.8,-9.5,69.3).s().p("AjGK+IAA17IACAAIAAABIGLAAIAAV5IAAABg");
		this.shape_306.setTransform(20,137.7);
	
		this.shape_307 = new cjs.Shape();
		this.shape_307.graphics.lf(["#019FC7","#027888"],[0,1],0,-124,0,69.1).s().p("AhTqSIABAAIB2g6IAxgWIAAV3IioBOg");
		this.shape_307.setTransform(48.5,133.9);
	
		this.shape_308 = new cjs.Shape();
		this.shape_308.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124,-9.5,69.1).s().p("AjGK8IAA13IACAAIAAABIGLAAIAAV1IAAABg");
		this.shape_308.setTransform(20,137.9);
	
		this.shape_309 = new cjs.Shape();
		this.shape_309.graphics.lf(["#019FC7","#027888"],[0,1],0,-124.2,0,68.9).s().p("AhTqRIABAAIB2g5IAxgWIAAVzIioBOg");
		this.shape_309.setTransform(48.5,134);
	
		this.shape_310 = new cjs.Shape();
		this.shape_310.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124.2,-9.5,68.9).s().p("AjGK6IAA1zIACAAIAAAAIGLAAIAAVyIAAABg");
		this.shape_310.setTransform(20,138);
	
		this.shape_311 = new cjs.Shape();
		this.shape_311.graphics.lf(["#019FC7","#027888"],[0,1],0,-124.4,0,68.7).s().p("AhTqPIABAAIB2g5IAxgXIAAVwIioBPg");
		this.shape_311.setTransform(48.5,134.2);
	
		this.shape_312 = new cjs.Shape();
		this.shape_312.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124.4,-9.5,68.7).s().p("AjGK4IAA1wIACAAIAAABIGLAAIAAVvIAAAAg");
		this.shape_312.setTransform(20,138.2);
	
		this.shape_313 = new cjs.Shape();
		this.shape_313.graphics.lf(["#019FC7","#027888"],[0,1],0,-124.5,0,68.6).s().p("AhTqNIABAAIB2g6IAxgWIAAVtIioBOg");
		this.shape_313.setTransform(48.5,134.4);
	
		this.shape_314 = new cjs.Shape();
		this.shape_314.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124.5,-9.5,68.6).s().p("AjGK3IAA1tIACAAIAAABIGLAAIAAVrIAAABg");
		this.shape_314.setTransform(20,138.4);
	
		this.shape_315 = new cjs.Shape();
		this.shape_315.graphics.lf(["#019FC7","#027888"],[0,1],0,-124.7,0,68.4).s().p("AhTqMIABAAIB2g5IAxgWIAAVpIioBOg");
		this.shape_315.setTransform(48.5,134.6);
	
		this.shape_316 = new cjs.Shape();
		this.shape_316.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124.7,-9.5,68.4).s().p("AjGK1IAA1pIACAAIAAAAIGLAAIAAVoIAAABg");
		this.shape_316.setTransform(20,138.6);
	
		this.shape_317 = new cjs.Shape();
		this.shape_317.graphics.lf(["#019FC7","#027888"],[0,1],0,-124.9,0,68.2).s().p("AhTqKIABAAIB2g5IAxgWIAAVlIioBOg");
		this.shape_317.setTransform(48.5,134.7);
	
		this.shape_318 = new cjs.Shape();
		this.shape_318.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-124.9,-9.5,68.2).s().p("AjGKzIAA1lIACAAIAAAAIGLAAIAAVkIAAABg");
		this.shape_318.setTransform(20,138.7);
	
		this.shape_319 = new cjs.Shape();
		this.shape_319.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.1,0,68).s().p("AhTqIIABAAIB2g6IAxgVIAAVhIioBPg");
		this.shape_319.setTransform(48.5,134.9);
	
		this.shape_320 = new cjs.Shape();
		this.shape_320.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.1,-9.5,68).s().p("AjGKxIAA1hIACAAIAAAAIGLAAIAAVhIAAAAg");
		this.shape_320.setTransform(20,138.9);
	
		this.shape_321 = new cjs.Shape();
		this.shape_321.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.2,0,67.9).s().p("AhTqGIABAAIB2g6IAxgWIAAVfIioBOg");
		this.shape_321.setTransform(48.5,135.1);
	
		this.shape_322 = new cjs.Shape();
		this.shape_322.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.2,-9.5,67.9).s().p("AjGKwIAA1fIACAAIAAABIGLAAIAAVdIAAABg");
		this.shape_322.setTransform(20,139.1);
	
		this.shape_323 = new cjs.Shape();
		this.shape_323.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.4,0,67.7).s().p("AhTqEIABAAIB2g6IAxgWIAAVbIioBOg");
		this.shape_323.setTransform(48.5,135.3);
	
		this.shape_324 = new cjs.Shape();
		this.shape_324.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.4,-9.5,67.7).s().p("AjGKuIAA1bIACAAIAAABIGLAAIAAVZIAAABg");
		this.shape_324.setTransform(20,139.3);
	
		this.shape_325 = new cjs.Shape();
		this.shape_325.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.6,0,67.5).s().p("AhTqDIABAAIB2g5IAxgWIAAVXIioBOg");
		this.shape_325.setTransform(48.5,135.4);
	
		this.shape_326 = new cjs.Shape();
		this.shape_326.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.6,-9.5,67.5).s().p("AjGKsIAA1XIACAAIAAAAIGLAAIAAVWIAAABg");
		this.shape_326.setTransform(20,139.4);
	
		this.shape_327 = new cjs.Shape();
		this.shape_327.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.8,0,67.3).s().p("AhTqBIABAAIB2g5IAxgXIAAVUIioBPg");
		this.shape_327.setTransform(48.5,135.6);
	
		this.shape_328 = new cjs.Shape();
		this.shape_328.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.8,-9.5,67.3).s().p("AjGKqIAA1UIACAAIAAABIGLAAIAAVTIAAAAg");
		this.shape_328.setTransform(20,139.6);
	
		this.shape_329 = new cjs.Shape();
		this.shape_329.graphics.lf(["#019FC7","#027888"],[0,1],0,-125.9,0,67.2).s().p("AhTp/IABAAIB2g6IAxgWIAAVRIioBOg");
		this.shape_329.setTransform(48.5,135.8);
	
		this.shape_330 = new cjs.Shape();
		this.shape_330.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-125.9,-9.5,67.2).s().p("AjGKpIAA1RIACAAIAAABIGLAAIAAVPIAAABg");
		this.shape_330.setTransform(20,139.8);
	
		this.shape_331 = new cjs.Shape();
		this.shape_331.graphics.lf(["#019FC7","#027888"],[0,1],0,-126.1,0,67).s().p("AhTp+IABAAIB2g5IAxgWIAAVNIioBOg");
		this.shape_331.setTransform(48.5,135.9);
	
		this.shape_332 = new cjs.Shape();
		this.shape_332.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-126.1,-9.5,67).s().p("AjGKnIAA1NIACAAIAAAAIGLAAIAAVMIAAABg");
		this.shape_332.setTransform(20,139.9);
	
		this.shape_333 = new cjs.Shape();
		this.shape_333.graphics.lf(["#019FC7","#027888"],[0,1],0,-126.3,0,66.8).s().p("AhTp8IABAAIB2g6IAxgVIAAVJIioBPg");
		this.shape_333.setTransform(48.5,136.1);
	
		this.shape_334 = new cjs.Shape();
		this.shape_334.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-126.3,-9.5,66.8).s().p("AjGKlIAA1KIACAAIAAABIGLAAIAAVJIAAAAg");
		this.shape_334.setTransform(20,140.1);
	
		this.shape_335 = new cjs.Shape();
		this.shape_335.graphics.lf(["#019FC7","#027888"],[0,1],0,-126.4,0,66.7).s().p("AhTp6IABAAIB2g6IAxgWIAAVHIioBOg");
		this.shape_335.setTransform(48.5,136.3);
	
		this.shape_336 = new cjs.Shape();
		this.shape_336.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-126.4,-9.5,66.7).s().p("AjGKkIAA1HIACAAIAAABIGLAAIAAVFIAAABg");
		this.shape_336.setTransform(20,140.3);
	
		this.shape_337 = new cjs.Shape();
		this.shape_337.graphics.lf(["#019FC7","#027888"],[0,1],0,-126.6,0,66.5).s().p("AhTp4IABAAIB2g6IAxgWIAAVDIioBOg");
		this.shape_337.setTransform(48.5,136.5);
	
		this.shape_338 = new cjs.Shape();
		this.shape_338.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-126.6,-9.5,66.5).s().p("AjGKiIAA1DIACAAIAAABIGLAAIAAVBIAAABg");
		this.shape_338.setTransform(20,140.5);
	
		this.shape_339 = new cjs.Shape();
		this.shape_339.graphics.lf(["#019FC7","#027888"],[0,1],0,-126.8,0,66.3).s().p("AhTp3IABAAIB2g5IAxgWIAAU/IioBOg");
		this.shape_339.setTransform(48.5,136.6);
	
		this.shape_340 = new cjs.Shape();
		this.shape_340.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-126.8,-9.5,66.3).s().p("AjGKgIAA0/IACAAIAAAAIGLAAIAAU+IAAABg");
		this.shape_340.setTransform(20,140.6);
	
		this.shape_341 = new cjs.Shape();
		this.shape_341.graphics.lf(["#019FC7","#027888"],[0,1],0,-127,0,66.1).s().p("AhTp1IABAAIB2g5IAxgXIAAU8IioBPg");
		this.shape_341.setTransform(48.5,136.8);
	
		this.shape_342 = new cjs.Shape();
		this.shape_342.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127,-9.5,66.1).s().p("AjGKeIAA07IACAAIAAAAIGLAAIAAU7IAAAAg");
		this.shape_342.setTransform(20,140.8);
	
		this.shape_343 = new cjs.Shape();
		this.shape_343.graphics.lf(["#019FC7","#027888"],[0,1],0,-127.1,0,66).s().p("AhTpzIABAAIB2g6IAxgWIAAU5IioBOg");
		this.shape_343.setTransform(48.5,137);
	
		this.shape_344 = new cjs.Shape();
		this.shape_344.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127.1,-9.5,66).s().p("AjGKdIAA05IACAAIAAABIGLAAIAAU3IAAABg");
		this.shape_344.setTransform(20,141);
	
		this.shape_345 = new cjs.Shape();
		this.shape_345.graphics.lf(["#019FC7","#027888"],[0,1],0,-127.3,0,65.8).s().p("AhTpyIABAAIB2g5IAxgWIAAU1IioBOg");
		this.shape_345.setTransform(48.5,137.2);
	
		this.shape_346 = new cjs.Shape();
		this.shape_346.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127.3,-9.5,65.8).s().p("AjGKbIAA01IACAAIAAAAIGLAAIAAU0IAAABg");
		this.shape_346.setTransform(20,141.2);
	
		this.shape_347 = new cjs.Shape();
		this.shape_347.graphics.lf(["#019FC7","#027888"],[0,1],0,-127.5,0,65.6).s().p("AhTpwIABAAIB2g5IAxgWIAAUxIioBOg");
		this.shape_347.setTransform(48.5,137.3);
	
		this.shape_348 = new cjs.Shape();
		this.shape_348.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127.5,-9.5,65.6).s().p("AjGKZIAA0xIACAAIAAAAIGLAAIAAUwIAAABg");
		this.shape_348.setTransform(20,141.3);
	
		this.shape_349 = new cjs.Shape();
		this.shape_349.graphics.lf(["#019FC7","#027888"],[0,1],0,-127.7,0,65.4).s().p("AhTpuIABAAIB2g6IAxgVIAAUtIioBPg");
		this.shape_349.setTransform(48.5,137.5);
	
		this.shape_350 = new cjs.Shape();
		this.shape_350.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127.7,-9.5,65.4).s().p("AjGKXIAA0uIACAAIAAABIGLAAIAAUtIAAAAg");
		this.shape_350.setTransform(20,141.5);
	
		this.shape_351 = new cjs.Shape();
		this.shape_351.graphics.lf(["#019FC7","#027888"],[0,1],0,-127.8,0,65.3).s().p("AhTpsIABAAIB2g6IAxgWIAAUrIioBOg");
		this.shape_351.setTransform(48.5,137.7);
	
		this.shape_352 = new cjs.Shape();
		this.shape_352.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-127.8,-9.5,65.3).s().p("AjGKWIAA0rIACAAIAAABIGLAAIAAUpIAAABg");
		this.shape_352.setTransform(20,141.7);
	
		this.shape_353 = new cjs.Shape();
		this.shape_353.graphics.lf(["#019FC7","#027888"],[0,1],0,-128,0,65.1).s().p("AhTpqIABAAIB2g6IAxgWIAAUnIioBOg");
		this.shape_353.setTransform(48.5,137.9);
	
		this.shape_354 = new cjs.Shape();
		this.shape_354.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128,-9.5,65.1).s().p("AjGKUIAA0nIACAAIAAABIGLAAIAAUlIAAABg");
		this.shape_354.setTransform(20,141.9);
	
		this.shape_355 = new cjs.Shape();
		this.shape_355.graphics.lf(["#019FC7","#027888"],[0,1],0,-128.2,0,64.9).s().p("AhTppIABAAIB2g5IAxgWIAAUjIioBOg");
		this.shape_355.setTransform(48.5,138);
	
		this.shape_356 = new cjs.Shape();
		this.shape_356.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128.2,-9.5,64.9).s().p("AjGKSIAA0jIACAAIAAAAIGLAAIAAUiIAAABg");
		this.shape_356.setTransform(20,142);
	
		this.shape_357 = new cjs.Shape();
		this.shape_357.graphics.lf(["#019FC7","#027888"],[0,1],0,-128.4,0,64.7).s().p("AhTpnIABAAIB2g5IAxgXIAAUgIioBPg");
		this.shape_357.setTransform(48.5,138.2);
	
		this.shape_358 = new cjs.Shape();
		this.shape_358.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128.4,-9.5,64.7).s().p("AjGKQIAA0fIACAAIAAAAIGLAAIAAUfIAAAAg");
		this.shape_358.setTransform(20,142.2);
	
		this.shape_359 = new cjs.Shape();
		this.shape_359.graphics.lf(["#019FC7","#027888"],[0,1],0,-128.5,0,64.6).s().p("AhTplIABAAIB2g6IAxgWIAAUdIioBOg");
		this.shape_359.setTransform(48.5,138.4);
	
		this.shape_360 = new cjs.Shape();
		this.shape_360.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128.5,-9.5,64.6).s().p("AjGKPIAA0dIACAAIAAABIGLAAIAAUbIAAABg");
		this.shape_360.setTransform(20,142.4);
	
		this.shape_361 = new cjs.Shape();
		this.shape_361.graphics.lf(["#019FC7","#027888"],[0,1],0,-128.7,0,64.4).s().p("AhTpkIABAAIB2g5IAxgWIAAUZIioBOg");
		this.shape_361.setTransform(48.5,138.6);
	
		this.shape_362 = new cjs.Shape();
		this.shape_362.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128.7,-9.5,64.4).s().p("AjGKNIAA0ZIACAAIAAAAIGLAAIAAUYIAAABg");
		this.shape_362.setTransform(20,142.6);
	
		this.shape_363 = new cjs.Shape();
		this.shape_363.graphics.lf(["#019FC7","#027888"],[0,1],0,-128.9,0,64.2).s().p("AhTpiIABAAIB2g5IAxgWIAAUVIioBOg");
		this.shape_363.setTransform(48.5,138.7);
	
		this.shape_364 = new cjs.Shape();
		this.shape_364.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-128.9,-9.5,64.2).s().p("AjGKLIAA0VIACAAIAAAAIGLAAIAAUUIAAABg");
		this.shape_364.setTransform(20,142.7);
	
		this.shape_365 = new cjs.Shape();
		this.shape_365.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.1,0,64).s().p("AhTpgIABAAIB2g6IAxgVIAAURIioBPg");
		this.shape_365.setTransform(48.5,138.9);
	
		this.shape_366 = new cjs.Shape();
		this.shape_366.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.1,-9.5,64).s().p("AjGKJIAA0RIACAAIAAAAIGLAAIAAURIAAAAg");
		this.shape_366.setTransform(20,142.9);
	
		this.shape_367 = new cjs.Shape();
		this.shape_367.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.2,0,63.9).s().p("AhTpeIABAAIB2g6IAxgWIAAUPIioBOg");
		this.shape_367.setTransform(48.5,139.1);
	
		this.shape_368 = new cjs.Shape();
		this.shape_368.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.2,-9.5,63.9).s().p("AjGKIIAA0PIACAAIAAABIGLAAIAAUNIAAABg");
		this.shape_368.setTransform(20,143.1);
	
		this.shape_369 = new cjs.Shape();
		this.shape_369.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.4,0,63.7).s().p("AhTpcIABAAIB2g6IAxgWIAAULIioBOg");
		this.shape_369.setTransform(48.5,139.3);
	
		this.shape_370 = new cjs.Shape();
		this.shape_370.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.4,-9.5,63.7).s().p("AjGKGIAA0LIACAAIAAABIGLAAIAAUJIAAABg");
		this.shape_370.setTransform(20,143.3);
	
		this.shape_371 = new cjs.Shape();
		this.shape_371.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.6,0,63.5).s().p("AhTpbIABAAIB2g5IAxgWIAAUHIioBOg");
		this.shape_371.setTransform(48.5,139.4);
	
		this.shape_372 = new cjs.Shape();
		this.shape_372.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.6,-9.5,63.5).s().p("AjGKEIAA0HIACAAIAAAAIGLAAIAAUGIAAABg");
		this.shape_372.setTransform(20,143.4);
	
		this.shape_373 = new cjs.Shape();
		this.shape_373.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.8,0,63.3).s().p("AhTpZIABAAIB2g5IAxgXIAAUEIioBPg");
		this.shape_373.setTransform(48.5,139.6);
	
		this.shape_374 = new cjs.Shape();
		this.shape_374.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.8,-9.5,63.3).s().p("AjGKCIAA0EIACAAIAAABIGLAAIAAUDIAAAAg");
		this.shape_374.setTransform(20,143.6);
	
		this.shape_375 = new cjs.Shape();
		this.shape_375.graphics.lf(["#019FC7","#027888"],[0,1],0,-129.9,0,63.2).s().p("AhTpXIABAAIB2g6IAxgWIAAUBIioBOg");
		this.shape_375.setTransform(48.5,139.8);
	
		this.shape_376 = new cjs.Shape();
		this.shape_376.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-129.9,-9.5,63.2).s().p("AjGKBIAA0BIACAAIAAABIGLAAIAAT/IAAABg");
		this.shape_376.setTransform(20,143.8);
	
		this.shape_377 = new cjs.Shape();
		this.shape_377.graphics.lf(["#019FC7","#027888"],[0,1],0,-130.1,0,63).s().p("AhTpWIABAAIB2g5IAxgWIAAT9IioBOg");
		this.shape_377.setTransform(48.5,140);
	
		this.shape_378 = new cjs.Shape();
		this.shape_378.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-130.1,-9.5,63).s().p("AjGJ/IAAz9IACAAIAAAAIGLAAIAAT8IAAABg");
		this.shape_378.setTransform(20,144);
	
		this.shape_379 = new cjs.Shape();
		this.shape_379.graphics.lf(["#019FC7","#027888"],[0,1],0,-130.3,0,62.8).s().p("AhTpUIABAAIB2g5IAxgXIAAT6IioBPg");
		this.shape_379.setTransform(48.5,140.1);
	
		this.shape_380 = new cjs.Shape();
		this.shape_380.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-130.3,-9.5,62.8).s().p("AjGJ9IAAz6IACAAIAAABIGLAAIAAT5IAAAAg");
		this.shape_380.setTransform(20,144.1);
	
		this.shape_381 = new cjs.Shape();
		this.shape_381.graphics.lf(["#019FC7","#027888"],[0,1],0,-130.5,0,62.6).s().p("AhTpSIABAAIB2g6IAxgVIAAT1IioBPg");
		this.shape_381.setTransform(48.5,140.3);
	
		this.shape_382 = new cjs.Shape();
		this.shape_382.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-130.5,-9.5,62.6).s().p("AjGJ7IAAz1IACAAIAAAAIGLAAIAAT1IAAAAg");
		this.shape_382.setTransform(20,144.3);
	
		this.shape_383 = new cjs.Shape();
		this.shape_383.graphics.lf(["#019FC7","#027888"],[0,1],0,-130.6,0,62.5).s().p("AhTpQIABAAIB2g6IAxgWIAATzIioBOg");
		this.shape_383.setTransform(48.5,140.5);
	
		this.shape_384 = new cjs.Shape();
		this.shape_384.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-130.6,-9.5,62.5).s().p("AjGJ6IAAzzIACAAIAAABIGLAAIAATxIAAABg");
		this.shape_384.setTransform(20,144.5);
	
		this.shape_385 = new cjs.Shape();
		this.shape_385.graphics.lf(["#019FC7","#027888"],[0,1],0,-130.8,0,62.3).s().p("AhTpPIABAAIB2g5IAxgWIAATvIioBOg");
		this.shape_385.setTransform(48.5,140.6);
	
		this.shape_386 = new cjs.Shape();
		this.shape_386.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-130.8,-9.5,62.3).s().p("AjGJ4IAAzvIACAAIAAAAIGLAAIAATuIAAABg");
		this.shape_386.setTransform(20,144.6);
	
		this.shape_387 = new cjs.Shape();
		this.shape_387.graphics.lf(["#019FC7","#027888"],[0,1],0,-131,0,62.1).s().p("AhTpNIABAAIB2g6IAxgWIAATsIioBPg");
		this.shape_387.setTransform(48.5,140.8);
	
		this.shape_388 = new cjs.Shape();
		this.shape_388.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131,-9.5,62.1).s().p("AjGJ2IAAzrIACAAIAAAAIGLAAIAATrIAAAAg");
		this.shape_388.setTransform(20,144.8);
	
		this.shape_389 = new cjs.Shape();
		this.shape_389.graphics.lf(["#019FC7","#027888"],[0,1],0,-131.1,0,62).s().p("AhTpLIABAAIB2g6IAxgWIAATpIioBOg");
		this.shape_389.setTransform(48.5,141);
	
		this.shape_390 = new cjs.Shape();
		this.shape_390.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131.1,-9.5,62).s().p("AjGJ1IAAzpIACAAIAAABIGLAAIAATnIAAABg");
		this.shape_390.setTransform(20,145);
	
		this.shape_391 = new cjs.Shape();
		this.shape_391.graphics.lf(["#019FC7","#027888"],[0,1],0,-131.3,0,61.8).s().p("AhTpKIABAAIB2g5IAxgWIAATlIioBOg");
		this.shape_391.setTransform(48.5,141.2);
	
		this.shape_392 = new cjs.Shape();
		this.shape_392.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131.3,-9.5,61.8).s().p("AjGJzIAAzlIACAAIAAAAIGLAAIAATkIAAABg");
		this.shape_392.setTransform(20,145.2);
	
		this.shape_393 = new cjs.Shape();
		this.shape_393.graphics.lf(["#019FC7","#027888"],[0,1],0,-131.5,0,61.6).s().p("AhTpIIABAAIB2g5IAxgWIAAThIioBOg");
		this.shape_393.setTransform(48.5,141.3);
	
		this.shape_394 = new cjs.Shape();
		this.shape_394.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131.5,-9.5,61.6).s().p("AjGJxIAAzhIACAAIAAAAIGLAAIAATgIAAABg");
		this.shape_394.setTransform(20,145.3);
	
		this.shape_395 = new cjs.Shape();
		this.shape_395.graphics.lf(["#019FC7","#027888"],[0,1],0,-131.7,0,61.4).s().p("AhTpGIABAAIB2g5IAxgWIAATdIioBPg");
		this.shape_395.setTransform(48.5,141.5);
	
		this.shape_396 = new cjs.Shape();
		this.shape_396.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131.7,-9.5,61.4).s().p("AjGJvIAAzeIACAAIAAABIGLAAIAATdIAAAAg");
		this.shape_396.setTransform(20,145.5);
	
		this.shape_397 = new cjs.Shape();
		this.shape_397.graphics.lf(["#019FC7","#027888"],[0,1],0,-131.8,0,61.3).s().p("AhTpEIABAAIB2g6IAxgWIAATbIioBOg");
		this.shape_397.setTransform(48.5,141.7);
	
		this.shape_398 = new cjs.Shape();
		this.shape_398.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-131.8,-9.5,61.3).s().p("AjGJuIAAzbIACAAIAAABIGLAAIAATZIAAABg");
		this.shape_398.setTransform(20,145.7);
	
		this.shape_399 = new cjs.Shape();
		this.shape_399.graphics.lf(["#019FC7","#027888"],[0,1],0,-132,0,61.1).s().p("AhTpCIABAAIB2g6IAxgWIAATXIioBOg");
		this.shape_399.setTransform(48.5,141.9);
	
		this.shape_400 = new cjs.Shape();
		this.shape_400.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132,-9.5,61.1).s().p("AjGJsIAAzXIACAAIAAABIGLAAIAATVIAAABg");
		this.shape_400.setTransform(20,145.9);
	
		this.shape_401 = new cjs.Shape();
		this.shape_401.graphics.lf(["#019FC7","#027888"],[0,1],0,-132.2,0,60.9).s().p("AhTpBIABAAIB2g5IAxgWIAATTIioBOg");
		this.shape_401.setTransform(48.5,142);
	
		this.shape_402 = new cjs.Shape();
		this.shape_402.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132.2,-9.5,60.9).s().p("AjGJqIAAzTIACAAIAAAAIGLAAIAATSIAAABg");
		this.shape_402.setTransform(20,146);
	
		this.shape_403 = new cjs.Shape();
		this.shape_403.graphics.lf(["#019FC7","#027888"],[0,1],0,-132.4,0,60.7).s().p("AhTo/IABAAIB2g5IAxgXIAATQIioBPg");
		this.shape_403.setTransform(48.5,142.2);
	
		this.shape_404 = new cjs.Shape();
		this.shape_404.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132.4,-9.5,60.7).s().p("AjGJoIAAzPIACAAIAAAAIGLAAIAATPIAAAAg");
		this.shape_404.setTransform(20,146.2);
	
		this.shape_405 = new cjs.Shape();
		this.shape_405.graphics.lf(["#019FC7","#027888"],[0,1],0,-132.5,0,60.6).s().p("AhTo9IABAAIB2g6IAxgWIAATNIioBOg");
		this.shape_405.setTransform(48.5,142.4);
	
		this.shape_406 = new cjs.Shape();
		this.shape_406.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132.5,-9.5,60.6).s().p("AjGJnIAAzNIACAAIAAABIGLAAIAATLIAAABg");
		this.shape_406.setTransform(20,146.4);
	
		this.shape_407 = new cjs.Shape();
		this.shape_407.graphics.lf(["#019FC7","#027888"],[0,1],0,-132.7,0,60.4).s().p("AhTo8IABAAIB2g5IAxgWIAATJIioBOg");
		this.shape_407.setTransform(48.5,142.6);
	
		this.shape_408 = new cjs.Shape();
		this.shape_408.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132.7,-9.5,60.4).s().p("AjGJlIAAzJIACAAIAAAAIGLAAIAATIIAAABg");
		this.shape_408.setTransform(20,146.6);
	
		this.shape_409 = new cjs.Shape();
		this.shape_409.graphics.lf(["#019FC7","#027888"],[0,1],0,-132.9,0,60.2).s().p("AhTo6IABAAIB2g5IAxgWIAATFIioBOg");
		this.shape_409.setTransform(48.5,142.7);
	
		this.shape_410 = new cjs.Shape();
		this.shape_410.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-132.9,-9.5,60.2).s().p("AjGJjIAAzFIACAAIAAAAIGLAAIAATEIAAABg");
		this.shape_410.setTransform(20,146.7);
	
		this.shape_411 = new cjs.Shape();
		this.shape_411.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.1,0,60).s().p("AhTo4IABAAIB2g6IAxgVIAATBIioBPg");
		this.shape_411.setTransform(48.5,142.9);
	
		this.shape_412 = new cjs.Shape();
		this.shape_412.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.1,-9.5,60).s().p("AjGJhIAAzCIACAAIAAABIGLAAIAATBIAAAAg");
		this.shape_412.setTransform(20,146.9);
	
		this.shape_413 = new cjs.Shape();
		this.shape_413.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.2,0,59.9).s().p("AhTo2IABAAIB2g6IAxgWIAAS/IioBOg");
		this.shape_413.setTransform(48.5,143.1);
	
		this.shape_414 = new cjs.Shape();
		this.shape_414.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.2,-9.5,59.9).s().p("AjGJgIAAy/IACAAIAAABIGLAAIAAS9IAAABg");
		this.shape_414.setTransform(20,147.1);
	
		this.shape_415 = new cjs.Shape();
		this.shape_415.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.4,0,59.7).s().p("AhTo0IABAAIB2g6IAxgWIAAS7IioBOg");
		this.shape_415.setTransform(48.5,143.3);
	
		this.shape_416 = new cjs.Shape();
		this.shape_416.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.4,-9.5,59.7).s().p("AjGJeIAAy7IACAAIAAABIGLAAIAAS5IAAABg");
		this.shape_416.setTransform(20,147.3);
	
		this.shape_417 = new cjs.Shape();
		this.shape_417.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.6,0,59.5).s().p("AhTozIABAAIB2g5IAxgWIAAS3IioBOg");
		this.shape_417.setTransform(48.5,143.4);
	
		this.shape_418 = new cjs.Shape();
		this.shape_418.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.6,-9.5,59.5).s().p("AjGJcIAAy3IACAAIAAAAIGLAAIAAS2IAAABg");
		this.shape_418.setTransform(20,147.4);
	
		this.shape_419 = new cjs.Shape();
		this.shape_419.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.8,0,59.3).s().p("AhToxIABAAIB2g5IAxgXIAAS0IioBPg");
		this.shape_419.setTransform(48.5,143.6);
	
		this.shape_420 = new cjs.Shape();
		this.shape_420.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.8,-9.5,59.3).s().p("AjGJaIAAy0IACAAIAAABIGLAAIAASzIAAAAg");
		this.shape_420.setTransform(20,147.6);
	
		this.shape_421 = new cjs.Shape();
		this.shape_421.graphics.lf(["#019FC7","#027888"],[0,1],0,-133.9,0,59.2).s().p("AhTovIABAAIB2g6IAxgWIAASxIioBOg");
		this.shape_421.setTransform(48.5,143.8);
	
		this.shape_422 = new cjs.Shape();
		this.shape_422.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-133.9,-9.5,59.2).s().p("AjGJZIAAyxIACAAIAAABIGLAAIAASvIAAABg");
		this.shape_422.setTransform(20,147.8);
	
		this.shape_423 = new cjs.Shape();
		this.shape_423.graphics.lf(["#019FC7","#027888"],[0,1],0,-134.1,0,59).s().p("AhTouIABAAIB2g5IAxgWIAAStIioBOg");
		this.shape_423.setTransform(48.5,144);
	
		this.shape_424 = new cjs.Shape();
		this.shape_424.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-134.1,-9.5,59).s().p("AjGJXIAAytIACAAIAAAAIGLAAIAASsIAAABg");
		this.shape_424.setTransform(20,148);
	
		this.shape_425 = new cjs.Shape();
		this.shape_425.graphics.lf(["#019FC7","#027888"],[0,1],0,-134.3,0,58.8).s().p("AhTosIABAAIB2g5IAxgWIAASpIioBOg");
		this.shape_425.setTransform(48.5,144.1);
	
		this.shape_426 = new cjs.Shape();
		this.shape_426.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-134.3,-9.5,58.8).s().p("AjGJVIAAypIACAAIAAAAIGLAAIAASoIAAABg");
		this.shape_426.setTransform(20,148.1);
	
		this.shape_427 = new cjs.Shape();
		this.shape_427.graphics.lf(["#019FC7","#027888"],[0,1],0,-134.5,0,58.6).s().p("AhToqIABAAIB2g6IAxgVIAASlIioBPg");
		this.shape_427.setTransform(48.5,144.3);
	
		this.shape_428 = new cjs.Shape();
		this.shape_428.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-134.5,-9.5,58.6).s().p("AjGJTIAAylIACAAIAAAAIGLAAIAASlIAAAAg");
		this.shape_428.setTransform(20,148.3);
	
		this.shape_429 = new cjs.Shape();
		this.shape_429.graphics.lf(["#019FC7","#027888"],[0,1],0,-134.6,0,58.5).s().p("AhTooIABAAIB2g6IAxgWIAASjIioBOg");
		this.shape_429.setTransform(48.5,144.5);
	
		this.shape_430 = new cjs.Shape();
		this.shape_430.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-134.6,-9.5,58.5).s().p("AjGJSIAAyjIACAAIAAABIGLAAIAAShIAAABg");
		this.shape_430.setTransform(20,148.5);
	
		this.shape_431 = new cjs.Shape();
		this.shape_431.graphics.lf(["#019FC7","#027888"],[0,1],0,-134.8,0,58.3).s().p("AhTonIABAAIB2g5IAxgWIAASfIioBOg");
		this.shape_431.setTransform(48.5,144.6);
	
		this.shape_432 = new cjs.Shape();
		this.shape_432.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-134.8,-9.5,58.3).s().p("AjGJQIAAyfIACAAIAAAAIGLAAIAASeIAAABg");
		this.shape_432.setTransform(20,148.6);
	
		this.shape_433 = new cjs.Shape();
		this.shape_433.graphics.lf(["#019FC7","#027888"],[0,1],0,-135,0,58.1).s().p("AhTolIABAAIB2g6IAxgVIAASbIioBPg");
		this.shape_433.setTransform(48.5,144.8);
	
		this.shape_434 = new cjs.Shape();
		this.shape_434.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135,-9.5,58.1).s().p("AjGJOIAAybIACAAIAAAAIGLAAIAASbIAAAAg");
		this.shape_434.setTransform(20,148.8);
	
		this.shape_435 = new cjs.Shape();
		this.shape_435.graphics.lf(["#019FC7","#027888"],[0,1],0,-135.1,0,58).s().p("AhTojIABAAIB2g6IAxgWIAASZIioBOg");
		this.shape_435.setTransform(48.5,145);
	
		this.shape_436 = new cjs.Shape();
		this.shape_436.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135.1,-9.5,58).s().p("AjGJNIAAyZIACAAIAAABIGLAAIAASXIAAABg");
		this.shape_436.setTransform(20,149);
	
		this.shape_437 = new cjs.Shape();
		this.shape_437.graphics.lf(["#019FC7","#027888"],[0,1],0,-135.3,0,57.8).s().p("AhToiIABAAIB2g5IAxgWIAASVIioBOg");
		this.shape_437.setTransform(48.5,145.2);
	
		this.shape_438 = new cjs.Shape();
		this.shape_438.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135.3,-9.5,57.8).s().p("AjGJLIAAyVIACAAIAAAAIGLAAIAASUIAAABg");
		this.shape_438.setTransform(20,149.2);
	
		this.shape_439 = new cjs.Shape();
		this.shape_439.graphics.lf(["#019FC7","#027888"],[0,1],0,-135.5,0,57.6).s().p("AhTogIABAAIB2g5IAxgWIAASRIioBOg");
		this.shape_439.setTransform(48.5,145.3);
	
		this.shape_440 = new cjs.Shape();
		this.shape_440.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135.5,-9.5,57.6).s().p("AjGJJIAAyRIACAAIAAAAIGLAAIAASQIAAABg");
		this.shape_440.setTransform(20,149.3);
	
		this.shape_441 = new cjs.Shape();
		this.shape_441.graphics.lf(["#019FC7","#027888"],[0,1],0,-135.7,0,57.4).s().p("AhToeIABAAIB2g5IAxgXIAASOIioBPg");
		this.shape_441.setTransform(48.5,145.5);
	
		this.shape_442 = new cjs.Shape();
		this.shape_442.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135.7,-9.5,57.4).s().p("AjGJHIAAyOIACAAIAAABIGLAAIAASNIAAAAg");
		this.shape_442.setTransform(20,149.5);
	
		this.shape_443 = new cjs.Shape();
		this.shape_443.graphics.lf(["#019FC7","#027888"],[0,1],0,-135.8,0,57.3).s().p("AhTocIABAAIB2g6IAxgWIAASLIioBOg");
		this.shape_443.setTransform(48.5,145.7);
	
		this.shape_444 = new cjs.Shape();
		this.shape_444.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-135.8,-9.5,57.3).s().p("AjGJGIAAyLIACAAIAAABIGLAAIAASJIAAABg");
		this.shape_444.setTransform(20,149.7);
	
		this.shape_445 = new cjs.Shape();
		this.shape_445.graphics.lf(["#019FC7","#027888"],[0,1],0,-136,0,57.1).s().p("AhToaIABAAIB2g6IAxgWIAASHIioBOg");
		this.shape_445.setTransform(48.5,145.9);
	
		this.shape_446 = new cjs.Shape();
		this.shape_446.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136,-9.5,57.1).s().p("AjGJEIAAyHIACAAIAAABIGLAAIAASFIAAABg");
		this.shape_446.setTransform(20,149.9);
	
		this.shape_447 = new cjs.Shape();
		this.shape_447.graphics.lf(["#019FC7","#027888"],[0,1],0,-136.2,0,56.9).s().p("AhToZIABAAIB2g5IAxgWIAASDIioBOg");
		this.shape_447.setTransform(48.5,146);
	
		this.shape_448 = new cjs.Shape();
		this.shape_448.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136.2,-9.5,56.9).s().p("AjGJCIAAyDIACAAIAAAAIGLAAIAASCIAAABg");
		this.shape_448.setTransform(20,150);
	
		this.shape_449 = new cjs.Shape();
		this.shape_449.graphics.lf(["#019FC7","#027888"],[0,1],0,-136.4,0,56.7).s().p("AhToXIABAAIB2g6IAxgWIAASAIioBPg");
		this.shape_449.setTransform(48.5,146.2);
	
		this.shape_450 = new cjs.Shape();
		this.shape_450.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136.4,-9.5,56.7).s().p("AjGJAIAAx/IACAAIAAAAIGLAAIAAR/IAAAAg");
		this.shape_450.setTransform(20,150.2);
	
		this.shape_451 = new cjs.Shape();
		this.shape_451.graphics.lf(["#019FC7","#027888"],[0,1],0,-136.5,0,56.6).s().p("AhToVIABAAIB2g6IAxgWIAAR9IioBOg");
		this.shape_451.setTransform(48.5,146.4);
	
		this.shape_452 = new cjs.Shape();
		this.shape_452.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136.5,-9.5,56.6).s().p("AjGI/IAAx9IACAAIAAABIGLAAIAAR7IAAABg");
		this.shape_452.setTransform(20,150.4);
	
		this.shape_453 = new cjs.Shape();
		this.shape_453.graphics.lf(["#019FC7","#027888"],[0,1],0,-136.7,0,56.4).s().p("AhToUIABAAIB2g5IAxgWIAAR5IioBOg");
		this.shape_453.setTransform(48.5,146.6);
	
		this.shape_454 = new cjs.Shape();
		this.shape_454.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136.7,-9.5,56.4).s().p("AjGI9IAAx5IACAAIAAAAIGLAAIAAR4IAAABg");
		this.shape_454.setTransform(20,150.6);
	
		this.shape_455 = new cjs.Shape();
		this.shape_455.graphics.lf(["#019FC7","#027888"],[0,1],0,-136.9,0,56.2).s().p("AhToSIABAAIB2g5IAxgWIAAR1IioBOg");
		this.shape_455.setTransform(48.5,146.7);
	
		this.shape_456 = new cjs.Shape();
		this.shape_456.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-136.9,-9.5,56.2).s().p("AjGI7IAAx1IACAAIAAAAIGLAAIAAR0IAAABg");
		this.shape_456.setTransform(20,150.7);
	
		this.shape_457 = new cjs.Shape();
		this.shape_457.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.1,0,56).s().p("AhToQIABAAIB2g6IAxgVIAARxIioBPg");
		this.shape_457.setTransform(48.5,146.9);
	
		this.shape_458 = new cjs.Shape();
		this.shape_458.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.1,-9.5,56).s().p("AjGI5IAAxyIACAAIAAABIGLAAIAARxIAAAAg");
		this.shape_458.setTransform(20,150.9);
	
		this.shape_459 = new cjs.Shape();
		this.shape_459.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.2,0,55.9).s().p("AhToOIABAAIB2g6IAxgWIAARvIioBOg");
		this.shape_459.setTransform(48.5,147.1);
	
		this.shape_460 = new cjs.Shape();
		this.shape_460.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.2,-9.5,55.9).s().p("AjGI4IAAxvIACAAIAAABIGLAAIAARtIAAABg");
		this.shape_460.setTransform(20,151.1);
	
		this.shape_461 = new cjs.Shape();
		this.shape_461.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.4,0,55.7).s().p("AhToMIABAAIB2g6IAxgWIAARrIioBOg");
		this.shape_461.setTransform(48.5,147.3);
	
		this.shape_462 = new cjs.Shape();
		this.shape_462.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.4,-9.5,55.7).s().p("AjGI2IAAxrIACAAIAAABIGLAAIAARpIAAABg");
		this.shape_462.setTransform(20,151.3);
	
		this.shape_463 = new cjs.Shape();
		this.shape_463.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.6,0,55.5).s().p("AhToLIABAAIB2g5IAxgWIAARnIioBOg");
		this.shape_463.setTransform(48.5,147.4);
	
		this.shape_464 = new cjs.Shape();
		this.shape_464.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.6,-9.5,55.5).s().p("AjGI0IAAxnIACAAIAAAAIGLAAIAARmIAAABg");
		this.shape_464.setTransform(20,151.4);
	
		this.shape_465 = new cjs.Shape();
		this.shape_465.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.8,0,55.3).s().p("AhToJIABAAIB2g5IAxgXIAARkIioBPg");
		this.shape_465.setTransform(48.5,147.6);
	
		this.shape_466 = new cjs.Shape();
		this.shape_466.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.8,-9.5,55.3).s().p("AjGIyIAAxjIACAAIAAAAIGLAAIAARjIAAAAg");
		this.shape_466.setTransform(20,151.6);
	
		this.shape_467 = new cjs.Shape();
		this.shape_467.graphics.lf(["#019FC7","#027888"],[0,1],0,-137.9,0,55.2).s().p("AhToHIABAAIB2g6IAxgWIAARhIioBOg");
		this.shape_467.setTransform(48.5,147.8);
	
		this.shape_468 = new cjs.Shape();
		this.shape_468.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-137.9,-9.5,55.2).s().p("AjGIxIAAxhIACAAIAAABIGLAAIAARfIAAABg");
		this.shape_468.setTransform(20,151.8);
	
		this.shape_469 = new cjs.Shape();
		this.shape_469.graphics.lf(["#019FC7","#027888"],[0,1],0,-138.1,0,55).s().p("AhToGIABAAIB2g5IAxgWIAARdIioBOg");
		this.shape_469.setTransform(48.5,148);
	
		this.shape_470 = new cjs.Shape();
		this.shape_470.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-138.1,-9.5,55).s().p("AjGIvIAAxdIACAAIAAAAIGLAAIAARcIAAABg");
		this.shape_470.setTransform(20,152);
	
		this.shape_471 = new cjs.Shape();
		this.shape_471.graphics.lf(["#019FC7","#027888"],[0,1],0,-138.3,0,54.8).s().p("AhToEIABAAIB2g5IAxgWIAARZIioBOg");
		this.shape_471.setTransform(48.5,148.1);
	
		this.shape_472 = new cjs.Shape();
		this.shape_472.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-138.3,-9.5,54.8).s().p("AjGItIAAxZIACAAIAAAAIGLAAIAARYIAAABg");
		this.shape_472.setTransform(20,152.1);
	
		this.shape_473 = new cjs.Shape();
		this.shape_473.graphics.lf(["#019FC7","#027888"],[0,1],0,-138.5,0,54.6).s().p("AhToCIABAAIB2g6IAxgVIAARVIioBPg");
		this.shape_473.setTransform(48.5,148.3);
	
		this.shape_474 = new cjs.Shape();
		this.shape_474.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-138.5,-9.5,54.6).s().p("AjGIrIAAxWIACAAIAAABIGLAAIAARVIAAAAg");
		this.shape_474.setTransform(20,152.3);
	
		this.shape_475 = new cjs.Shape();
		this.shape_475.graphics.lf(["#019FC7","#027888"],[0,1],0,-138.6,0,54.5).s().p("AhToAIABAAIB2g6IAxgWIAARTIioBOg");
		this.shape_475.setTransform(48.5,148.5);
	
		this.shape_476 = new cjs.Shape();
		this.shape_476.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-138.6,-9.5,54.5).s().p("AjGIqIAAxTIACAAIAAABIGLAAIAARRIAAABg");
		this.shape_476.setTransform(20,152.5);
	
		this.shape_477 = new cjs.Shape();
		this.shape_477.graphics.lf(["#019FC7","#027888"],[0,1],0,-138.8,0,54.3).s().p("AhTn+IABAAIB2g6IAxgWIAARPIioBOg");
		this.shape_477.setTransform(48.5,148.7);
	
		this.shape_478 = new cjs.Shape();
		this.shape_478.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-138.8,-9.5,54.3).s().p("AjGIoIAAxPIACAAIAAABIGLAAIAARNIAAABg");
		this.shape_478.setTransform(20,152.7);
	
		this.shape_479 = new cjs.Shape();
		this.shape_479.graphics.lf(["#019FC7","#027888"],[0,1],0,-139,0,54.1).s().p("AhTn9IABAAIB2g5IAxgWIAARLIioBOg");
		this.shape_479.setTransform(48.5,148.8);
	
		this.shape_480 = new cjs.Shape();
		this.shape_480.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139,-9.5,54.1).s().p("AjGImIAAxLIACAAIAAAAIGLAAIAARKIAAABg");
		this.shape_480.setTransform(20,152.8);
	
		this.shape_481 = new cjs.Shape();
		this.shape_481.graphics.lf(["#019FC7","#027888"],[0,1],0,-139.1,0,54).s().p("AhTn7IABAAIB2g6IAxgWIAARJIioBOg");
		this.shape_481.setTransform(48.5,149);
	
		this.shape_482 = new cjs.Shape();
		this.shape_482.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139.1,-9.5,54).s().p("AjGIlIAAxJIACAAIAAABIGLAAIAARHIAAABg");
		this.shape_482.setTransform(20,153);
	
		this.shape_483 = new cjs.Shape();
		this.shape_483.graphics.lf(["#019FC7","#027888"],[0,1],0,-139.3,0,53.8).s().p("AhTn5IABAAIB2g6IAxgWIAARFIioBOg");
		this.shape_483.setTransform(48.5,149.2);
	
		this.shape_484 = new cjs.Shape();
		this.shape_484.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139.3,-9.5,53.8).s().p("AjGIjIAAxFIACAAIAAABIGLAAIAARDIAAABg");
		this.shape_484.setTransform(20,153.2);
	
		this.shape_485 = new cjs.Shape();
		this.shape_485.graphics.lf(["#019FC7","#027888"],[0,1],0,-139.5,0,53.6).s().p("AhTn4IABAAIB2g5IAxgWIAARBIioBOg");
		this.shape_485.setTransform(48.5,149.3);
	
		this.shape_486 = new cjs.Shape();
		this.shape_486.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139.5,-9.5,53.6).s().p("AjGIhIAAxBIACAAIAAAAIGLAAIAARAIAAABg");
		this.shape_486.setTransform(20,153.3);
	
		this.shape_487 = new cjs.Shape();
		this.shape_487.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139.7,-9.5,53.4).s().p("AjGIfIAAw+IACAAIAAABIGLAAIAAQ9IAAAAg");
		this.shape_487.setTransform(20,153.5);
	
		this.shape_488 = new cjs.Shape();
		this.shape_488.graphics.lf(["#019FC7","#027888"],[0,1],0,-139.7,0,53.4).s().p("AhTn2IABAAIB2g5IAxgXIAAQ+IioBPg");
		this.shape_488.setTransform(48.5,149.5);
	
		this.shape_489 = new cjs.Shape();
		this.shape_489.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-139.8,-9.5,53.3).s().p("AjGIeIAAw7IACAAIAAABIGLAAIAAQ5IAAABg");
		this.shape_489.setTransform(20,153.7);
	
		this.shape_490 = new cjs.Shape();
		this.shape_490.graphics.lf(["#019FC7","#027888"],[0,1],0,-139.8,0,53.3).s().p("AhTn0IABAAIB2g6IAxgWIAAQ7IioBOg");
		this.shape_490.setTransform(48.5,149.7);
	
		this.shape_491 = new cjs.Shape();
		this.shape_491.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140,-9.5,53.1).s().p("AjGIcIAAw3IACAAIAAAAIGLAAIAAQ2IAAABg");
		this.shape_491.setTransform(20,153.9);
	
		this.shape_492 = new cjs.Shape();
		this.shape_492.graphics.lf(["#019FC7","#027888"],[0,1],0,-140,0,53.1).s().p("AhTnzIABAAIB2g5IAxgWIAAQ3IioBOg");
		this.shape_492.setTransform(48.5,149.9);
	
		this.shape_493 = new cjs.Shape();
		this.shape_493.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140.2,-9.5,52.9).s().p("AjGIaIAAwzIACAAIAAAAIGLAAIAAQyIAAABg");
		this.shape_493.setTransform(20,154);
	
		this.shape_494 = new cjs.Shape();
		this.shape_494.graphics.lf(["#019FC7","#027888"],[0,1],0,-140.2,0,52.9).s().p("AhTnxIABAAIB2g5IAxgWIAAQzIioBOg");
		this.shape_494.setTransform(48.5,150);
	
		this.shape_495 = new cjs.Shape();
		this.shape_495.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140.4,-9.5,52.7).s().p("AjGIYIAAwvIACAAIAAAAIGLAAIAAQvIAAAAg");
		this.shape_495.setTransform(20,154.2);
	
		this.shape_496 = new cjs.Shape();
		this.shape_496.graphics.lf(["#019FC7","#027888"],[0,1],0,-140.4,0,52.7).s().p("AhTnvIABAAIB2g6IAxgVIAAQvIioBPg");
		this.shape_496.setTransform(48.5,150.2);
	
		this.shape_497 = new cjs.Shape();
		this.shape_497.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140.5,-9.5,52.6).s().p("AjGIXIAAwtIACAAIAAABIGLAAIAAQrIAAABg");
		this.shape_497.setTransform(20,154.4);
	
		this.shape_498 = new cjs.Shape();
		this.shape_498.graphics.lf(["#019FC7","#027888"],[0,1],0,-140.5,0,52.6).s().p("AhTntIABAAIB2g6IAxgWIAAQtIioBOg");
		this.shape_498.setTransform(48.5,150.4);
	
		this.shape_499 = new cjs.Shape();
		this.shape_499.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140.7,-9.5,52.4).s().p("AjGIVIAAwpIACAAIAAAAIGLAAIAAQoIAAABg");
		this.shape_499.setTransform(20,154.6);
	
		this.shape_500 = new cjs.Shape();
		this.shape_500.graphics.lf(["#019FC7","#027888"],[0,1],0,-140.7,0,52.4).s().p("AhTnsIABAAIB2g5IAxgWIAAQpIioBOg");
		this.shape_500.setTransform(48.5,150.6);
	
		this.shape_501 = new cjs.Shape();
		this.shape_501.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-140.9,-9.5,52.2).s().p("AjGITIAAwlIACAAIAAAAIGLAAIAAQkIAAABg");
		this.shape_501.setTransform(20,154.7);
	
		this.shape_502 = new cjs.Shape();
		this.shape_502.graphics.lf(["#019FC7","#027888"],[0,1],0,-140.9,0,52.2).s().p("AhTnqIABAAIB2g5IAxgWIAAQlIioBOg");
		this.shape_502.setTransform(48.5,150.7);
	
		this.shape_503 = new cjs.Shape();
		this.shape_503.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.1,-9.5,52).s().p("AjGIRIAAwiIACAAIAAABIGLAAIAAQhIAAAAg");
		this.shape_503.setTransform(20,154.9);
	
		this.shape_504 = new cjs.Shape();
		this.shape_504.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.1,0,52).s().p("AhTnoIABAAIB2g5IAxgXIAAQiIioBPg");
		this.shape_504.setTransform(48.5,150.9);
	
		this.shape_505 = new cjs.Shape();
		this.shape_505.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.2,-9.5,51.9).s().p("AjGIQIAAwfIACAAIAAABIGLAAIAAQdIAAABg");
		this.shape_505.setTransform(20,155.1);
	
		this.shape_506 = new cjs.Shape();
		this.shape_506.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.2,0,51.9).s().p("AhTnmIABAAIB2g6IAxgWIAAQfIioBOg");
		this.shape_506.setTransform(48.5,151.1);
	
		this.shape_507 = new cjs.Shape();
		this.shape_507.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.4,-9.5,51.7).s().p("AjGIOIAAwbIACAAIAAABIGLAAIAAQZIAAABg");
		this.shape_507.setTransform(20,155.3);
	
		this.shape_508 = new cjs.Shape();
		this.shape_508.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.4,0,51.7).s().p("AhTnkIABAAIB2g6IAxgWIAAQbIioBOg");
		this.shape_508.setTransform(48.5,151.3);
	
		this.shape_509 = new cjs.Shape();
		this.shape_509.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.6,-9.5,51.5).s().p("AjGIMIAAwXIACAAIAAAAIGLAAIAAQWIAAABg");
		this.shape_509.setTransform(20,155.4);
	
		this.shape_510 = new cjs.Shape();
		this.shape_510.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.6,0,51.5).s().p("AhTnjIABAAIB2g5IAxgWIAAQXIioBOg");
		this.shape_510.setTransform(48.5,151.4);
	
		this.shape_511 = new cjs.Shape();
		this.shape_511.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.8,-9.5,51.3).s().p("AjGIKIAAwTIACAAIAAAAIGLAAIAAQTIAAAAg");
		this.shape_511.setTransform(20,155.6);
	
		this.shape_512 = new cjs.Shape();
		this.shape_512.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.8,0,51.3).s().p("AhTnhIABAAIB2g6IAxgVIAAQTIioBPg");
		this.shape_512.setTransform(48.5,151.6);
	
		this.shape_513 = new cjs.Shape();
		this.shape_513.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-141.9,-9.5,51.2).s().p("AjGIJIAAwRIACAAIAAABIGLAAIAAQPIAAABg");
		this.shape_513.setTransform(20,155.8);
	
		this.shape_514 = new cjs.Shape();
		this.shape_514.graphics.lf(["#019FC7","#027888"],[0,1],0,-141.9,0,51.2).s().p("AhTnfIABAAIB2g6IAxgWIAAQRIioBOg");
		this.shape_514.setTransform(48.5,151.8);
	
		this.shape_515 = new cjs.Shape();
		this.shape_515.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-142.1,-9.5,51).s().p("AjGIHIAAwNIACAAIAAAAIGLAAIAAQMIAAABg");
		this.shape_515.setTransform(20,156);
	
		this.shape_516 = new cjs.Shape();
		this.shape_516.graphics.lf(["#019FC7","#027888"],[0,1],0,-142.1,0,51).s().p("AhTneIABAAIB2g5IAxgWIAAQNIioBOg");
		this.shape_516.setTransform(48.5,152);
	
		this.shape_517 = new cjs.Shape();
		this.shape_517.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-142.3,-9.5,50.8).s().p("AjGIFIAAwJIACAAIAAAAIGLAAIAAQIIAAABg");
		this.shape_517.setTransform(20,156.1);
	
		this.shape_518 = new cjs.Shape();
		this.shape_518.graphics.lf(["#019FC7","#027888"],[0,1],0,-142.3,0,50.8).s().p("AhTncIABAAIB2g5IAxgWIAAQJIioBOg");
		this.shape_518.setTransform(48.5,152.1);
	
		this.shape_519 = new cjs.Shape();
		this.shape_519.graphics.lf(["#019FC7","#027888"],[0,1],0,-142.5,0,50.6).s().p("AhTnaIABAAIB2g6IAxgVIAAQFIioBPg");
		this.shape_519.setTransform(48.5,152.3);
	
		this.shape_520 = new cjs.Shape();
		this.shape_520.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-142.5,-9.5,50.6).s().p("AjGIDIAAwGIACAAIAAABIGLAAIAAQFIAAAAg");
		this.shape_520.setTransform(20,156.3);
	
		this.shape_521 = new cjs.Shape();
		this.shape_521.graphics.lf(["#019FC7","#027888"],[0,1],0,-142.6,0,50.5).s().p("AhTnYIABAAIB2g6IAxgWIAAQDIioBOg");
		this.shape_521.setTransform(48.5,152.5);
	
		this.shape_522 = new cjs.Shape();
		this.shape_522.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-142.6,-9.5,50.5).s().p("AjGICIAAwDIACAAIAAABIGLAAIAAQBIAAABg");
		this.shape_522.setTransform(20,156.5);
	
		this.shape_523 = new cjs.Shape();
		this.shape_523.graphics.lf(["#019FC7","#027888"],[0,1],0,-142.8,0,50.3).s().p("AhTnWIABAAIB2g6IAxgWIAAP/IioBOg");
		this.shape_523.setTransform(48.5,152.7);
	
		this.shape_524 = new cjs.Shape();
		this.shape_524.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-142.8,-9.5,50.3).s().p("AjGIAIAAv/IACAAIAAABIGLAAIAAP9IAAABg");
		this.shape_524.setTransform(20,156.7);
	
		this.shape_525 = new cjs.Shape();
		this.shape_525.graphics.lf(["#019FC7","#027888"],[0,1],0,-143,0,50.1).s().p("AhTnVIABAAIB2g5IAxgWIAAP7IioBOg");
		this.shape_525.setTransform(48.5,152.8);
	
		this.shape_526 = new cjs.Shape();
		this.shape_526.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143,-9.5,50.1).s().p("AjGH+IAAv7IACAAIAAAAIGLAAIAAP6IAAABg");
		this.shape_526.setTransform(20,156.8);
	
		this.shape_527 = new cjs.Shape();
		this.shape_527.graphics.lf(["#019FC7","#027888"],[0,1],0,-143.2,0,49.9).s().p("AhTnTIABAAIB2g5IAxgXIAAP4IioBPg");
		this.shape_527.setTransform(48.5,153);
	
		this.shape_528 = new cjs.Shape();
		this.shape_528.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143.2,-9.5,49.9).s().p("AjGH8IAAv3IACAAIAAAAIGLAAIAAP3IAAAAg");
		this.shape_528.setTransform(20,157);
	
		this.shape_529 = new cjs.Shape();
		this.shape_529.graphics.lf(["#019FC7","#027888"],[0,1],0,-143.3,0,49.8).s().p("AhTnRIABAAIB2g6IAxgWIAAP1IioBOg");
		this.shape_529.setTransform(48.5,153.2);
	
		this.shape_530 = new cjs.Shape();
		this.shape_530.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143.3,-9.5,49.8).s().p("AjGH7IAAv1IACAAIAAABIGLAAIAAPzIAAABg");
		this.shape_530.setTransform(20,157.2);
	
		this.shape_531 = new cjs.Shape();
		this.shape_531.graphics.lf(["#019FC7","#027888"],[0,1],0,-143.5,0,49.6).s().p("AhTnQIABAAIB2g5IAxgWIAAPxIioBOg");
		this.shape_531.setTransform(48.5,153.3);
	
		this.shape_532 = new cjs.Shape();
		this.shape_532.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143.5,-9.5,49.6).s().p("AjGH5IAAvxIACAAIAAAAIGLAAIAAPwIAAABg");
		this.shape_532.setTransform(20,157.3);
	
		this.shape_533 = new cjs.Shape();
		this.shape_533.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143.7,-9.5,49.4).s().p("AjGH3IAAvuIACAAIAAABIGLAAIAAPtIAAAAg");
		this.shape_533.setTransform(20,157.5);
	
		this.shape_534 = new cjs.Shape();
		this.shape_534.graphics.lf(["#019FC7","#027888"],[0,1],0,-143.7,0,49.4).s().p("AhTnOIABAAIB2g5IAxgXIAAPuIioBPg");
		this.shape_534.setTransform(48.5,153.5);
	
		this.shape_535 = new cjs.Shape();
		this.shape_535.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-143.8,-9.5,49.3).s().p("AjGH2IAAvrIACAAIAAABIGLAAIAAPpIAAABg");
		this.shape_535.setTransform(20,157.7);
	
		this.shape_536 = new cjs.Shape();
		this.shape_536.graphics.lf(["#019FC7","#027888"],[0,1],0,-143.8,0,49.3).s().p("AhTnMIABAAIB2g6IAxgWIAAPrIioBOg");
		this.shape_536.setTransform(48.5,153.7);
	
		this.shape_537 = new cjs.Shape();
		this.shape_537.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144,-9.5,49.1).s().p("AjGH0IAAvnIACAAIAAAAIGLAAIAAPmIAAABg");
		this.shape_537.setTransform(20,157.9);
	
		this.shape_538 = new cjs.Shape();
		this.shape_538.graphics.lf(["#019FC7","#027888"],[0,1],0,-144,0,49.1).s().p("AhTnLIABAAIB2g5IAxgWIAAPnIioBOg");
		this.shape_538.setTransform(48.5,153.9);
	
		this.shape_539 = new cjs.Shape();
		this.shape_539.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144.2,-9.5,48.9).s().p("AjGHyIAAvjIACAAIAAAAIGLAAIAAPiIAAABg");
		this.shape_539.setTransform(20,158);
	
		this.shape_540 = new cjs.Shape();
		this.shape_540.graphics.lf(["#019FC7","#027888"],[0,1],0,-144.2,0,48.9).s().p("AhTnJIABAAIB2g5IAxgWIAAPjIioBOg");
		this.shape_540.setTransform(48.5,154);
	
		this.shape_541 = new cjs.Shape();
		this.shape_541.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144.4,-9.5,48.7).s().p("AjGHwIAAvfIACAAIAAAAIGLAAIAAPfIAAAAg");
		this.shape_541.setTransform(20,158.2);
	
		this.shape_542 = new cjs.Shape();
		this.shape_542.graphics.lf(["#019FC7","#027888"],[0,1],0,-144.4,0,48.7).s().p("AhTnHIABAAIB2g6IAxgVIAAPfIioBPg");
		this.shape_542.setTransform(48.5,154.2);
	
		this.shape_543 = new cjs.Shape();
		this.shape_543.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144.5,-9.5,48.6).s().p("AjGHvIAAvdIACAAIAAABIGLAAIAAPbIAAABg");
		this.shape_543.setTransform(20,158.4);
	
		this.shape_544 = new cjs.Shape();
		this.shape_544.graphics.lf(["#019FC7","#027888"],[0,1],0,-144.5,0,48.6).s().p("AhTnFIABAAIB2g6IAxgWIAAPdIioBOg");
		this.shape_544.setTransform(48.5,154.4);
	
		this.shape_545 = new cjs.Shape();
		this.shape_545.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144.7,-9.5,48.4).s().p("AjGHtIAAvZIACAAIAAABIGLAAIAAPXIAAABg");
		this.shape_545.setTransform(20,158.6);
	
		this.shape_546 = new cjs.Shape();
		this.shape_546.graphics.lf(["#019FC7","#027888"],[0,1],0,-144.7,0,48.4).s().p("AhTnDIABAAIB2g6IAxgWIAAPZIioBOg");
		this.shape_546.setTransform(48.5,154.6);
	
		this.shape_547 = new cjs.Shape();
		this.shape_547.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-144.9,-9.5,48.2).s().p("AjGHrIAAvVIACAAIAAAAIGLAAIAAPUIAAABg");
		this.shape_547.setTransform(20,158.7);
	
		this.shape_548 = new cjs.Shape();
		this.shape_548.graphics.lf(["#019FC7","#027888"],[0,1],0,-144.9,0,48.2).s().p("AhTnCIABAAIB2g5IAxgWIAAPVIioBOg");
		this.shape_548.setTransform(48.5,154.7);
	
		this.shape_549 = new cjs.Shape();
		this.shape_549.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.1,-9.5,48).s().p("AjGHpIAAvSIACAAIAAABIGLAAIAAPRIAAAAg");
		this.shape_549.setTransform(20,158.9);
	
		this.shape_550 = new cjs.Shape();
		this.shape_550.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.1,0,48).s().p("AhTnAIABAAIB2g5IAxgXIAAPSIioBPg");
		this.shape_550.setTransform(48.5,154.9);
	
		this.shape_551 = new cjs.Shape();
		this.shape_551.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.2,-9.5,47.9).s().p("AjGHoIAAvPIACAAIAAABIGLAAIAAPNIAAABg");
		this.shape_551.setTransform(20,159.1);
	
		this.shape_552 = new cjs.Shape();
		this.shape_552.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.2,0,47.9).s().p("AhTm+IABAAIB2g6IAxgWIAAPPIioBOg");
		this.shape_552.setTransform(48.5,155.1);
	
		this.shape_553 = new cjs.Shape();
		this.shape_553.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.4,-9.5,47.7).s().p("AjGHmIAAvLIACAAIAAAAIGLAAIAAPKIAAABg");
		this.shape_553.setTransform(20,159.3);
	
		this.shape_554 = new cjs.Shape();
		this.shape_554.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.4,0,47.7).s().p("AhTm9IABAAIB2g5IAxgWIAAPLIioBOg");
		this.shape_554.setTransform(48.5,155.3);
	
		this.shape_555 = new cjs.Shape();
		this.shape_555.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.6,-9.5,47.5).s().p("AjGHkIAAvHIACAAIAAAAIGLAAIAAPGIAAABg");
		this.shape_555.setTransform(20,159.4);
	
		this.shape_556 = new cjs.Shape();
		this.shape_556.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.6,0,47.5).s().p("AhTm7IABAAIB2g5IAxgWIAAPHIioBOg");
		this.shape_556.setTransform(48.5,155.4);
	
		this.shape_557 = new cjs.Shape();
		this.shape_557.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.8,-9.5,47.3).s().p("AjGHiIAAvDIACAAIAAAAIGLAAIAAPDIAAAAg");
		this.shape_557.setTransform(20,159.6);
	
		this.shape_558 = new cjs.Shape();
		this.shape_558.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.8,0,47.3).s().p("AhTm5IABAAIB2g6IAxgVIAAPDIioBPg");
		this.shape_558.setTransform(48.5,155.6);
	
		this.shape_559 = new cjs.Shape();
		this.shape_559.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-145.9,-9.5,47.2).s().p("AjGHhIAAvBIACAAIAAABIGLAAIAAO/IAAABg");
		this.shape_559.setTransform(20,159.8);
	
		this.shape_560 = new cjs.Shape();
		this.shape_560.graphics.lf(["#019FC7","#027888"],[0,1],0,-145.9,0,47.2).s().p("AhTm3IABAAIB2g6IAxgWIAAPBIioBOg");
		this.shape_560.setTransform(48.5,155.8);
	
		this.shape_561 = new cjs.Shape();
		this.shape_561.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-146.1,-9.5,47).s().p("AjGHfIAAu9IACAAIAAAAIGLAAIAAO8IAAABg");
		this.shape_561.setTransform(20,160);
	
		this.shape_562 = new cjs.Shape();
		this.shape_562.graphics.lf(["#019FC7","#027888"],[0,1],0,-146.1,0,47).s().p("AhTm2IABAAIB2g5IAxgWIAAO9IioBOg");
		this.shape_562.setTransform(48.5,156);
	
		this.shape_563 = new cjs.Shape();
		this.shape_563.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-146.3,-9.5,46.8).s().p("AjGHdIAAu5IACAAIAAAAIGLAAIAAO4IAAABg");
		this.shape_563.setTransform(20,160.1);
	
		this.shape_564 = new cjs.Shape();
		this.shape_564.graphics.lf(["#019FC7","#027888"],[0,1],0,-146.3,0,46.8).s().p("AhTm0IABAAIB2g5IAxgWIAAO5IioBOg");
		this.shape_564.setTransform(48.5,156.1);
	
		this.shape_565 = new cjs.Shape();
		this.shape_565.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-146.5,-9.5,46.6).s().p("AjGHbIAAu2IACAAIAAABIGLAAIAAO1IAAAAg");
		this.shape_565.setTransform(20,160.3);
	
		this.shape_566 = new cjs.Shape();
		this.shape_566.graphics.lf(["#019FC7","#027888"],[0,1],0,-146.5,0,46.6).s().p("AhTmyIABAAIB2g5IAxgXIAAO2IioBPg");
		this.shape_566.setTransform(48.5,156.3);
	
		this.shape_567 = new cjs.Shape();
		this.shape_567.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-146.6,-9.5,46.5).s().p("AjGHaIAAuzIACAAIAAABIGLAAIAAOxIAAABg");
		this.shape_567.setTransform(20,160.5);
	
		this.shape_568 = new cjs.Shape();
		this.shape_568.graphics.lf(["#019FC7","#027888"],[0,1],0,-146.6,0,46.5).s().p("AhTmwIABAAIB2g6IAxgWIAAOzIioBOg");
		this.shape_568.setTransform(48.5,156.5);
	
		this.shape_569 = new cjs.Shape();
		this.shape_569.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-146.8,-9.5,46.3).s().p("AjGHYIAAuvIACAAIAAABIGLAAIAAOtIAAABg");
		this.shape_569.setTransform(20,160.7);
	
		this.shape_570 = new cjs.Shape();
		this.shape_570.graphics.lf(["#019FC7","#027888"],[0,1],0,-146.8,0,46.3).s().p("AhTmuIABAAIB2g6IAxgWIAAOvIioBOg");
		this.shape_570.setTransform(48.5,156.7);
	
		this.shape_571 = new cjs.Shape();
		this.shape_571.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147,-9.5,46.1).s().p("AjGHWIAAurIACAAIAAAAIGLAAIAAOqIAAABg");
		this.shape_571.setTransform(20,160.8);
	
		this.shape_572 = new cjs.Shape();
		this.shape_572.graphics.lf(["#019FC7","#027888"],[0,1],0,-147,0,46.1).s().p("AhTmtIABAAIB2g5IAxgWIAAOrIioBOg");
		this.shape_572.setTransform(48.5,156.8);
	
		this.shape_573 = new cjs.Shape();
		this.shape_573.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147.2,-9.5,45.9).s().p("AjGHUIAAunIACAAIAAAAIGLAAIAAOnIAAAAg");
		this.shape_573.setTransform(20,161);
	
		this.shape_574 = new cjs.Shape();
		this.shape_574.graphics.lf(["#019FC7","#027888"],[0,1],0,-147.2,0,45.9).s().p("AhTmrIABAAIB2g6IAxgWIAAOoIioBPg");
		this.shape_574.setTransform(48.5,157);
	
		this.shape_575 = new cjs.Shape();
		this.shape_575.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147.3,-9.5,45.8).s().p("AjGHTIAAulIACAAIAAABIGLAAIAAOjIAAABg");
		this.shape_575.setTransform(20,161.2);
	
		this.shape_576 = new cjs.Shape();
		this.shape_576.graphics.lf(["#019FC7","#027888"],[0,1],0,-147.3,0,45.8).s().p("AhTmpIABAAIB2g6IAxgWIAAOlIioBOg");
		this.shape_576.setTransform(48.5,157.2);
	
		this.shape_577 = new cjs.Shape();
		this.shape_577.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147.5,-9.5,45.6).s().p("AjGHRIAAuhIACAAIAAAAIGLAAIAAOgIAAABg");
		this.shape_577.setTransform(20,161.4);
	
		this.shape_578 = new cjs.Shape();
		this.shape_578.graphics.lf(["#019FC7","#027888"],[0,1],0,-147.5,0,45.6).s().p("AhTmoIABAAIB2g5IAxgWIAAOhIioBOg");
		this.shape_578.setTransform(48.5,157.4);
	
		this.shape_579 = new cjs.Shape();
		this.shape_579.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147.7,-9.5,45.4).s().p("AjGHPIAAudIACAAIAAAAIGLAAIAAOcIAAABg");
		this.shape_579.setTransform(20,161.5);
	
		this.shape_580 = new cjs.Shape();
		this.shape_580.graphics.lf(["#019FC7","#027888"],[0,1],0,-147.7,0,45.4).s().p("AhTmmIABAAIB2g5IAxgWIAAOdIioBOg");
		this.shape_580.setTransform(48.5,157.5);
	
		this.shape_581 = new cjs.Shape();
		this.shape_581.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-147.8,-9.5,45.3).s().p("AjGHOIAAubIACAAIAAABIGLAAIAAOZIAAABg");
		this.shape_581.setTransform(20,161.7);
	
		this.shape_582 = new cjs.Shape();
		this.shape_582.graphics.lf(["#019FC7","#027888"],[0,1],0,-147.8,0,45.3).s().p("AhTmkIABAAIB2g6IAxgWIAAObIioBOg");
		this.shape_582.setTransform(48.5,157.7);
	
		this.shape_583 = new cjs.Shape();
		this.shape_583.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148,-9.5,45.1).s().p("AjGHMIAAuXIACAAIAAAAIGLAAIAAOWIAAABg");
		this.shape_583.setTransform(20,161.9);
	
		this.shape_584 = new cjs.Shape();
		this.shape_584.graphics.lf(["#019FC7","#027888"],[0,1],0,-148,0,45.1).s().p("AhTmjIABAAIB2g5IAxgWIAAOXIioBOg");
		this.shape_584.setTransform(48.5,157.9);
	
		this.shape_585 = new cjs.Shape();
		this.shape_585.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148.2,-9.5,44.9).s().p("AjGHKIAAuTIACAAIAAAAIGLAAIAAOSIAAABg");
		this.shape_585.setTransform(20,162);
	
		this.shape_586 = new cjs.Shape();
		this.shape_586.graphics.lf(["#019FC7","#027888"],[0,1],0,-148.2,0,44.9).s().p("AhTmhIABAAIB2g5IAxgWIAAOTIioBOg");
		this.shape_586.setTransform(48.5,158);
	
		this.shape_587 = new cjs.Shape();
		this.shape_587.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148.4,-9.5,44.7).s().p("AjGHIIAAuQIACAAIAAABIGLAAIAAOPIAAAAg");
		this.shape_587.setTransform(20,162.2);
	
		this.shape_588 = new cjs.Shape();
		this.shape_588.graphics.lf(["#019FC7","#027888"],[0,1],0,-148.4,0,44.7).s().p("AhTmfIABAAIB2g6IAxgVIAAOPIioBPg");
		this.shape_588.setTransform(48.5,158.2);
	
		this.shape_589 = new cjs.Shape();
		this.shape_589.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148.5,-9.5,44.6).s().p("AjGHHIAAuNIACAAIAAABIGLAAIAAOLIAAABg");
		this.shape_589.setTransform(20,162.4);
	
		this.shape_590 = new cjs.Shape();
		this.shape_590.graphics.lf(["#019FC7","#027888"],[0,1],0,-148.5,0,44.6).s().p("AhTmdIABAAIB2g6IAxgWIAAONIioBOg");
		this.shape_590.setTransform(48.5,158.4);
	
		this.shape_591 = new cjs.Shape();
		this.shape_591.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148.7,-9.5,44.4).s().p("AjGHFIAAuJIACAAIAAABIGLAAIAAOHIAAABg");
		this.shape_591.setTransform(20,162.6);
	
		this.shape_592 = new cjs.Shape();
		this.shape_592.graphics.lf(["#019FC7","#027888"],[0,1],0,-148.7,0,44.4).s().p("AhTmbIABAAIB2g6IAxgWIAAOJIioBOg");
		this.shape_592.setTransform(48.5,158.6);
	
		this.shape_593 = new cjs.Shape();
		this.shape_593.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-148.9,-9.5,44.2).s().p("AjGHDIAAuFIACAAIAAAAIGLAAIAAOEIAAABg");
		this.shape_593.setTransform(20,162.7);
	
		this.shape_594 = new cjs.Shape();
		this.shape_594.graphics.lf(["#019FC7","#027888"],[0,1],0,-148.9,0,44.2).s().p("AhTmaIABAAIB2g5IAxgWIAAOFIioBOg");
		this.shape_594.setTransform(48.5,158.7);
	
		this.shape_595 = new cjs.Shape();
		this.shape_595.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.1,-9.5,44).s().p("AjGHBIAAuBIACAAIAAAAIGLAAIAAOBIAAAAg");
		this.shape_595.setTransform(20,162.9);
	
		this.shape_596 = new cjs.Shape();
		this.shape_596.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.1,0,44).s().p("AhTmYIABAAIB2g5IAxgXIAAOCIioBPg");
		this.shape_596.setTransform(48.5,158.9);
	
		this.shape_597 = new cjs.Shape();
		this.shape_597.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.2,-9.5,43.9).s().p("AjGHAIAAt/IACAAIAAABIGLAAIAAN9IAAABg");
		this.shape_597.setTransform(20,163.1);
	
		this.shape_598 = new cjs.Shape();
		this.shape_598.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.2,0,43.9).s().p("AhTmWIABAAIB2g6IAxgWIAAN/IioBOg");
		this.shape_598.setTransform(48.5,159.1);
	
		this.shape_599 = new cjs.Shape();
		this.shape_599.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.4,-9.5,43.7).s().p("AjGG+IAAt7IACAAIAAAAIGLAAIAAN6IAAABg");
		this.shape_599.setTransform(20,163.3);
	
		this.shape_600 = new cjs.Shape();
		this.shape_600.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.4,0,43.7).s().p("AhTmVIABAAIB2g5IAxgWIAAN7IioBOg");
		this.shape_600.setTransform(48.5,159.3);
	
		this.shape_601 = new cjs.Shape();
		this.shape_601.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.6,-9.5,43.5).s().p("AjGG8IAAt3IACAAIAAAAIGLAAIAAN2IAAABg");
		this.shape_601.setTransform(20,163.4);
	
		this.shape_602 = new cjs.Shape();
		this.shape_602.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.6,0,43.5).s().p("AhTmTIABAAIB2g5IAxgWIAAN3IioBOg");
		this.shape_602.setTransform(48.5,159.4);
	
		this.shape_603 = new cjs.Shape();
		this.shape_603.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.8,-9.5,43.3).s().p("AjGG6IAAtzIACAAIAAAAIGLAAIAANzIAAAAg");
		this.shape_603.setTransform(20,163.6);
	
		this.shape_604 = new cjs.Shape();
		this.shape_604.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.8,0,43.3).s().p("AhTmRIABAAIB2g6IAxgVIAANzIioBPg");
		this.shape_604.setTransform(48.5,159.6);
	
		this.shape_605 = new cjs.Shape();
		this.shape_605.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-149.9,-9.5,43.2).s().p("AjGG5IAAtxIACAAIAAABIGLAAIAANvIAAABg");
		this.shape_605.setTransform(20,163.8);
	
		this.shape_606 = new cjs.Shape();
		this.shape_606.graphics.lf(["#019FC7","#027888"],[0,1],0,-149.9,0,43.2).s().p("AhTmPIABAAIB2g6IAxgWIAANxIioBOg");
		this.shape_606.setTransform(48.5,159.8);
	
		this.shape_607 = new cjs.Shape();
		this.shape_607.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-150.1,-9.5,43).s().p("AjGG3IAAttIACAAIAAABIGLAAIAANrIAAABg");
		this.shape_607.setTransform(20,164);
	
		this.shape_608 = new cjs.Shape();
		this.shape_608.graphics.lf(["#019FC7","#027888"],[0,1],0,-150.1,0,43).s().p("AhTmNIABAAIB2g6IAxgWIAANtIioBOg");
		this.shape_608.setTransform(48.5,160);
	
		this.shape_609 = new cjs.Shape();
		this.shape_609.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-150.3,-9.5,42.8).s().p("AjGG1IAAtpIACAAIAAAAIGLAAIAANoIAAABg");
		this.shape_609.setTransform(20,164.1);
	
		this.shape_610 = new cjs.Shape();
		this.shape_610.graphics.lf(["#019FC7","#027888"],[0,1],0,-150.3,0,42.8).s().p("AhTmMIABAAIB2g5IAxgWIAANpIioBOg");
		this.shape_610.setTransform(48.5,160.1);
	
		this.shape_611 = new cjs.Shape();
		this.shape_611.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-150.5,-9.5,42.6).s().p("AjGGzIAAtmIACAAIAAABIGLAAIAANlIAAAAg");
		this.shape_611.setTransform(20,164.3);
	
		this.shape_612 = new cjs.Shape();
		this.shape_612.graphics.lf(["#019FC7","#027888"],[0,1],0,-150.5,0,42.6).s().p("AhTmKIABAAIB2g5IAxgXIAANmIioBPg");
		this.shape_612.setTransform(48.5,160.3);
	
		this.shape_613 = new cjs.Shape();
		this.shape_613.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-150.6,-9.5,42.5).s().p("AjGGyIAAtjIACAAIAAABIGLAAIAANhIAAABg");
		this.shape_613.setTransform(20,164.5);
	
		this.shape_614 = new cjs.Shape();
		this.shape_614.graphics.lf(["#019FC7","#027888"],[0,1],0,-150.6,0,42.5).s().p("AhTmIIABAAIB2g6IAxgWIAANjIioBOg");
		this.shape_614.setTransform(48.5,160.5);
	
		this.shape_615 = new cjs.Shape();
		this.shape_615.graphics.lf(["#33CCFF","#01A5CD"],[0,1],-9.5,-150.8,-9.5,42.3).s().p("AjGGwIAAtfIACAAIAAAAIGLAAIAANeIAAABg");
		this.shape_615.setTransform(20,164.7);
	
		this.shape_616 = new cjs.Shape();
		this.shape_616.graphics.lf(["#019FC7","#027888"],[0,1],0,-150.8,0,42.3).s().p("AhTmHIABAAIB2g5IAxgWIAANfIioBOg");
		this.shape_616.setTransform(48.5,160.7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:11.4}},{t:this.shape}]},499).to({state:[{t:this.shape_5},{t:this.shape_1,p:{y:11.7}},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7,p:{y:12.1}},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_7,p:{y:12.4}},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_7,p:{y:12.8}},{t:this.shape_11}]},1).to({state:[{t:this.shape_15},{t:this.shape_14,p:{y:13.1}},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17,p:{y:13.5}},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_17,p:{y:13.8}},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_17,p:{y:14.2}},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_1,p:{y:14.5}},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_7,p:{y:14.9}},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_7,p:{y:15.2}},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_7,p:{y:15.6}},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_1,p:{y:15.9}},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_1,p:{y:16.2}},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_7,p:{y:16.6}},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_7,p:{y:16.9}},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_7,p:{y:17.3}},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_14,p:{y:17.6}},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_17,p:{y:18}},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_17,p:{y:18.3}},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_17,p:{y:18.7}},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_1,p:{y:19}},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_1,p:{y:19.4}},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_7,p:{y:19.7}},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_7,p:{y:20.1}},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_7,p:{y:20.4}},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_14,p:{y:20.8}},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_17,p:{y:21.1}},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_17,p:{y:21.5}},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_17,p:{y:21.8}},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_1,p:{y:22.2}},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_1,p:{y:22.5}},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_7,p:{y:22.9}},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_7,p:{y:23.2}},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_7,p:{y:23.6}},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_14,p:{y:23.9}},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_17,p:{y:24.3}},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_7,p:{y:24.6}},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_7,p:{y:24.9}},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_14,p:{y:25.3}},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_17,p:{y:25.6}},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_17,p:{y:26}},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_17,p:{y:26.3}},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_1,p:{y:26.7}},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_1,p:{y:27}},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_7,p:{y:27.4}},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_7,p:{y:27.7}},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_14,p:{y:28.1}},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_14,p:{y:28.4}},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_17,p:{y:28.8}},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_17,p:{y:29.1}},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_17,p:{y:29.5}},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_1,p:{y:29.8}},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_7,p:{y:30.2}},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_7,p:{y:30.5}},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_7,p:{y:30.9}},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_7,p:{y:31.2}},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_14,p:{y:31.6}},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_17,p:{y:31.9}},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_17,p:{y:32.3}},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_17,p:{y:32.6}},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_14,p:{y:32.9}},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_7,p:{y:33.3}},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_17,p:{y:33.6}},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_17,p:{y:34}},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_1,p:{y:34.3}},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_1,p:{y:34.7}},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_7,p:{y:35}},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_7,p:{y:35.4}},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_7,p:{y:35.7}},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_14,p:{y:36.1}},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_17,p:{y:36.4}},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_17,p:{y:36.8}},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_17,p:{y:37.1}},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_1,p:{y:37.5}},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_7,p:{y:37.8}},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_7,p:{y:38.2}},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_7,p:{y:38.5}},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_14,p:{y:38.9}},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_14,p:{y:39.2}},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_17,p:{y:39.6}},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_17,p:{y:39.9}},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_17,p:{y:40.3}},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_1,p:{y:40.6}},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_1,p:{y:41}},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_7,p:{y:41.3}},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_7,p:{y:41.7}},{t:this.shape_179}]},1).to({state:[{t:this.shape_182},{t:this.shape_1,p:{y:42}},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_7,p:{y:42.3}},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_7,p:{y:42.7}},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_7,p:{y:43}},{t:this.shape_187}]},1).to({state:[{t:this.shape_190},{t:this.shape_14,p:{y:43.4}},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_14,p:{y:43.7}},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_17,p:{y:44.1}},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_17,p:{y:44.4}},{t:this.shape_195}]},1).to({state:[{t:this.shape_198},{t:this.shape_17,p:{y:44.8}},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_1,p:{y:45.1}},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_1,p:{y:45.5}},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_7,p:{y:45.8}},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_7,p:{y:46.2}},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_7,p:{y:46.5}},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_14,p:{y:46.9}},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_17,p:{y:47.2}},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_17,p:{y:47.6}},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_17,p:{y:47.9}},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_1,p:{y:48.3}},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_1,p:{y:48.6}},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_7,p:{y:49}},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_7,p:{y:49.3}},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_7,p:{y:49.7}},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_14,p:{y:50}},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_17,p:{y:50.4}},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_7,p:{y:50.7}},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_7,p:{y:51}},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_14,p:{y:51.4}},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_17,p:{y:51.7}},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_17,p:{y:52.1}},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_17,p:{y:52.4}},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_1,p:{y:52.8}},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_1,p:{y:53.1}},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_7,p:{y:53.5}},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_7,p:{y:53.8}},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_7,p:{y:54.2}},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_14,p:{y:54.5}},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_17,p:{y:54.9}},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_17,p:{y:55.2}},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_17,p:{y:55.6}},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_1,p:{y:55.9}},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_7,p:{y:56.3}},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_7,p:{y:56.6}},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_7,p:{y:57}},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_14,p:{y:57.3}},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_14,p:{y:57.7}},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_17,p:{y:58}},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_17,p:{y:58.4}},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_17,p:{y:58.7}},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_1,p:{y:59.1}},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_17,p:{y:59.4}},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_17,p:{y:59.7}},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_17,p:{y:60.1}},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_1,p:{y:60.4}},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_7,p:{y:60.8}},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_7,p:{y:61.1}},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_7,p:{y:61.5}},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_7,p:{y:61.8}},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_14,p:{y:62.2}},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_17,p:{y:62.5}},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_17,p:{y:62.9}},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_17,p:{y:63.2}},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_1,p:{y:63.6}},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_1,p:{y:63.9}},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_7,p:{y:64.3}},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_7,p:{y:64.6}},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_7,p:{y:65}},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_14,p:{y:65.3}},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_17,p:{y:65.7}},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_17,p:{y:66}},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_17,p:{y:66.4}},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_1,p:{y:66.7}},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_7,p:{y:67.1}},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_7,p:{y:67.4}},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_7,p:{y:67.8}},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_1,p:{y:68.1}},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_1,p:{y:68.4}},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_7,p:{y:68.8}},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_7,p:{y:69.1}},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_7,p:{y:69.5}},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_14,p:{y:69.8}},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_17,p:{y:70.2}},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_17,p:{y:70.5}},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_17,p:{y:70.9}},{t:this.shape_347}]},1).to({state:[{t:this.shape_350},{t:this.shape_1,p:{y:71.2}},{t:this.shape_349}]},1).to({state:[{t:this.shape_352},{t:this.shape_7,p:{y:71.6}},{t:this.shape_351}]},1).to({state:[{t:this.shape_354},{t:this.shape_7,p:{y:71.9}},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_7,p:{y:72.3}},{t:this.shape_355}]},1).to({state:[{t:this.shape_358},{t:this.shape_14,p:{y:72.6}},{t:this.shape_357}]},1).to({state:[{t:this.shape_360},{t:this.shape_14,p:{y:73}},{t:this.shape_359}]},1).to({state:[{t:this.shape_362},{t:this.shape_17,p:{y:73.3}},{t:this.shape_361}]},1).to({state:[{t:this.shape_364},{t:this.shape_17,p:{y:73.7}},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_17,p:{y:74}},{t:this.shape_365}]},1).to({state:[{t:this.shape_368},{t:this.shape_1,p:{y:74.4}},{t:this.shape_367}]},1).to({state:[{t:this.shape_370},{t:this.shape_7,p:{y:74.7}},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_7,p:{y:75.1}},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_7,p:{y:75.4}},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_14,p:{y:75.8}},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_14,p:{y:76.1}},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_7,p:{y:76.4}},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_17,p:{y:76.8}},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_14,p:{y:77.1}},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_14,p:{y:77.5}},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_17,p:{y:77.8}},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_17,p:{y:78.2}},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_17,p:{y:78.5}},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_1,p:{y:78.9}},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_7,p:{y:79.2}},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_7,p:{y:79.6}},{t:this.shape_397}]},1).to({state:[{t:this.shape_400},{t:this.shape_7,p:{y:79.9}},{t:this.shape_399}]},1).to({state:[{t:this.shape_402},{t:this.shape_14,p:{y:80.3}},{t:this.shape_401}]},1).to({state:[{t:this.shape_404},{t:this.shape_14,p:{y:80.6}},{t:this.shape_403}]},1).to({state:[{t:this.shape_406},{t:this.shape_17,p:{y:81}},{t:this.shape_405}]},1).to({state:[{t:this.shape_408},{t:this.shape_17,p:{y:81.3}},{t:this.shape_407}]},1).to({state:[{t:this.shape_410},{t:this.shape_17,p:{y:81.7}},{t:this.shape_409}]},1).to({state:[{t:this.shape_412},{t:this.shape_1,p:{y:82}},{t:this.shape_411}]},1).to({state:[{t:this.shape_414},{t:this.shape_1,p:{y:82.4}},{t:this.shape_413}]},1).to({state:[{t:this.shape_416},{t:this.shape_7,p:{y:82.7}},{t:this.shape_415}]},1).to({state:[{t:this.shape_418},{t:this.shape_7,p:{y:83.1}},{t:this.shape_417}]},1).to({state:[{t:this.shape_420},{t:this.shape_7,p:{y:83.4}},{t:this.shape_419}]},1).to({state:[{t:this.shape_422},{t:this.shape_14,p:{y:83.8}},{t:this.shape_421}]},1).to({state:[{t:this.shape_424},{t:this.shape_17,p:{y:84.1}},{t:this.shape_423}]},1).to({state:[{t:this.shape_426},{t:this.shape_17,p:{y:84.5}},{t:this.shape_425}]},1).to({state:[{t:this.shape_428},{t:this.shape_17,p:{y:84.8}},{t:this.shape_427}]},1).to({state:[{t:this.shape_430},{t:this.shape_1,p:{y:85.2}},{t:this.shape_429}]},1).to({state:[{t:this.shape_432},{t:this.shape_17,p:{y:85.5}},{t:this.shape_431}]},1).to({state:[{t:this.shape_434},{t:this.shape_17,p:{y:85.8}},{t:this.shape_433}]},1).to({state:[{t:this.shape_436},{t:this.shape_17,p:{y:86.2}},{t:this.shape_435}]},1).to({state:[{t:this.shape_438},{t:this.shape_1,p:{y:86.5}},{t:this.shape_437}]},1).to({state:[{t:this.shape_440},{t:this.shape_1,p:{y:86.9}},{t:this.shape_439}]},1).to({state:[{t:this.shape_442},{t:this.shape_7,p:{y:87.2}},{t:this.shape_441}]},1).to({state:[{t:this.shape_444},{t:this.shape_7,p:{y:87.6}},{t:this.shape_443}]},1).to({state:[{t:this.shape_446},{t:this.shape_7,p:{y:87.9}},{t:this.shape_445}]},1).to({state:[{t:this.shape_448},{t:this.shape_14,p:{y:88.3}},{t:this.shape_447}]},1).to({state:[{t:this.shape_450},{t:this.shape_17,p:{y:88.6}},{t:this.shape_449}]},1).to({state:[{t:this.shape_452},{t:this.shape_17,p:{y:89}},{t:this.shape_451}]},1).to({state:[{t:this.shape_454},{t:this.shape_17,p:{y:89.3}},{t:this.shape_453}]},1).to({state:[{t:this.shape_456},{t:this.shape_1,p:{y:89.7}},{t:this.shape_455}]},1).to({state:[{t:this.shape_458},{t:this.shape_1,p:{y:90}},{t:this.shape_457}]},1).to({state:[{t:this.shape_460},{t:this.shape_7,p:{y:90.4}},{t:this.shape_459}]},1).to({state:[{t:this.shape_462},{t:this.shape_7,p:{y:90.7}},{t:this.shape_461}]},1).to({state:[{t:this.shape_464},{t:this.shape_7,p:{y:91.1}},{t:this.shape_463}]},1).to({state:[{t:this.shape_466},{t:this.shape_14,p:{y:91.4}},{t:this.shape_465}]},1).to({state:[{t:this.shape_468},{t:this.shape_17,p:{y:91.8}},{t:this.shape_467}]},1).to({state:[{t:this.shape_470},{t:this.shape_17,p:{y:92.1}},{t:this.shape_469}]},1).to({state:[{t:this.shape_472},{t:this.shape_17,p:{y:92.5}},{t:this.shape_471}]},1).to({state:[{t:this.shape_474},{t:this.shape_1,p:{y:92.8}},{t:this.shape_473}]},1).to({state:[{t:this.shape_476},{t:this.shape_1,p:{y:93.2}},{t:this.shape_475}]},1).to({state:[{t:this.shape_478},{t:this.shape_7,p:{y:93.5}},{t:this.shape_477}]},1).to({state:[{t:this.shape_480},{t:this.shape_7,p:{y:93.9}},{t:this.shape_479}]},1).to({state:[{t:this.shape_482},{t:this.shape_1,p:{y:94.2}},{t:this.shape_481}]},1).to({state:[{t:this.shape_484},{t:this.shape_1,p:{y:94.5}},{t:this.shape_483}]},1).to({state:[{t:this.shape_486},{t:this.shape_7,p:{y:94.9}},{t:this.shape_485}]},1).to({state:[{t:this.shape_488},{t:this.shape_7,p:{y:95.2}},{t:this.shape_487}]},1).to({state:[{t:this.shape_490},{t:this.shape_7,p:{y:95.6}},{t:this.shape_489}]},1).to({state:[{t:this.shape_492},{t:this.shape_14,p:{y:95.9}},{t:this.shape_491}]},1).to({state:[{t:this.shape_494},{t:this.shape_17,p:{y:96.3}},{t:this.shape_493}]},1).to({state:[{t:this.shape_496},{t:this.shape_17,p:{y:96.6}},{t:this.shape_495}]},1).to({state:[{t:this.shape_498},{t:this.shape_17,p:{y:97}},{t:this.shape_497}]},1).to({state:[{t:this.shape_500},{t:this.shape_1,p:{y:97.3}},{t:this.shape_499}]},1).to({state:[{t:this.shape_502},{t:this.shape_1,p:{y:97.7}},{t:this.shape_501}]},1).to({state:[{t:this.shape_504},{t:this.shape_7,p:{y:98}},{t:this.shape_503}]},1).to({state:[{t:this.shape_506},{t:this.shape_7,p:{y:98.4}},{t:this.shape_505}]},1).to({state:[{t:this.shape_508},{t:this.shape_7,p:{y:98.7}},{t:this.shape_507}]},1).to({state:[{t:this.shape_510},{t:this.shape_14,p:{y:99.1}},{t:this.shape_509}]},1).to({state:[{t:this.shape_512},{t:this.shape_17,p:{y:99.4}},{t:this.shape_511}]},1).to({state:[{t:this.shape_514},{t:this.shape_17,p:{y:99.8}},{t:this.shape_513}]},1).to({state:[{t:this.shape_516},{t:this.shape_17,p:{y:100.1}},{t:this.shape_515}]},1).to({state:[{t:this.shape_518},{t:this.shape_1,p:{y:100.5}},{t:this.shape_517}]},1).to({state:[{t:this.shape_7,p:{y:100.8}},{t:this.shape_520},{t:this.shape_519}]},1).to({state:[{t:this.shape_7,p:{y:101.2}},{t:this.shape_522},{t:this.shape_521}]},1).to({state:[{t:this.shape_7,p:{y:101.5}},{t:this.shape_524},{t:this.shape_523}]},1).to({state:[{t:this.shape_14,p:{y:101.9}},{t:this.shape_526},{t:this.shape_525}]},1).to({state:[{t:this.shape_14,p:{y:102.2}},{t:this.shape_528},{t:this.shape_527}]},1).to({state:[{t:this.shape_17,p:{y:102.6}},{t:this.shape_530},{t:this.shape_529}]},1).to({state:[{t:this.shape_7,p:{y:102.9}},{t:this.shape_532},{t:this.shape_531}]},1).to({state:[{t:this.shape_534},{t:this.shape_7,p:{y:103.2}},{t:this.shape_533}]},1).to({state:[{t:this.shape_536},{t:this.shape_14,p:{y:103.6}},{t:this.shape_535}]},1).to({state:[{t:this.shape_538},{t:this.shape_17,p:{y:103.9}},{t:this.shape_537}]},1).to({state:[{t:this.shape_540},{t:this.shape_17,p:{y:104.3}},{t:this.shape_539}]},1).to({state:[{t:this.shape_542},{t:this.shape_17,p:{y:104.6}},{t:this.shape_541}]},1).to({state:[{t:this.shape_544},{t:this.shape_1,p:{y:105}},{t:this.shape_543}]},1).to({state:[{t:this.shape_546},{t:this.shape_7,p:{y:105.3}},{t:this.shape_545}]},1).to({state:[{t:this.shape_548},{t:this.shape_7,p:{y:105.7}},{t:this.shape_547}]},1).to({state:[{t:this.shape_550},{t:this.shape_7,p:{y:106}},{t:this.shape_549}]},1).to({state:[{t:this.shape_552},{t:this.shape_14,p:{y:106.4}},{t:this.shape_551}]},1).to({state:[{t:this.shape_554},{t:this.shape_14,p:{y:106.7}},{t:this.shape_553}]},1).to({state:[{t:this.shape_556},{t:this.shape_17,p:{y:107.1}},{t:this.shape_555}]},1).to({state:[{t:this.shape_558},{t:this.shape_17,p:{y:107.4}},{t:this.shape_557}]},1).to({state:[{t:this.shape_560},{t:this.shape_17,p:{y:107.8}},{t:this.shape_559}]},1).to({state:[{t:this.shape_562},{t:this.shape_1,p:{y:108.1}},{t:this.shape_561}]},1).to({state:[{t:this.shape_564},{t:this.shape_7,p:{y:108.5}},{t:this.shape_563}]},1).to({state:[{t:this.shape_566},{t:this.shape_7,p:{y:108.8}},{t:this.shape_565}]},1).to({state:[{t:this.shape_568},{t:this.shape_7,p:{y:109.2}},{t:this.shape_567}]},1).to({state:[{t:this.shape_570},{t:this.shape_14,p:{y:109.5}},{t:this.shape_569}]},1).to({state:[{t:this.shape_572},{t:this.shape_14,p:{y:109.9}},{t:this.shape_571}]},1).to({state:[{t:this.shape_574},{t:this.shape_17,p:{y:110.2}},{t:this.shape_573}]},1).to({state:[{t:this.shape_576},{t:this.shape_17,p:{y:110.6}},{t:this.shape_575}]},1).to({state:[{t:this.shape_578},{t:this.shape_17,p:{y:110.9}},{t:this.shape_577}]},1).to({state:[{t:this.shape_580},{t:this.shape_1,p:{y:111.3}},{t:this.shape_579}]},1).to({state:[{t:this.shape_582},{t:this.shape_17,p:{y:111.6}},{t:this.shape_581}]},1).to({state:[{t:this.shape_584},{t:this.shape_17,p:{y:111.9}},{t:this.shape_583}]},1).to({state:[{t:this.shape_586},{t:this.shape_17,p:{y:112.3}},{t:this.shape_585}]},1).to({state:[{t:this.shape_588},{t:this.shape_1,p:{y:112.6}},{t:this.shape_587}]},1).to({state:[{t:this.shape_590},{t:this.shape_7,p:{y:113}},{t:this.shape_589}]},1).to({state:[{t:this.shape_592},{t:this.shape_7,p:{y:113.3}},{t:this.shape_591}]},1).to({state:[{t:this.shape_594},{t:this.shape_7,p:{y:113.7}},{t:this.shape_593}]},1).to({state:[{t:this.shape_596},{t:this.shape_14,p:{y:114}},{t:this.shape_595}]},1).to({state:[{t:this.shape_598},{t:this.shape_14,p:{y:114.4}},{t:this.shape_597}]},1).to({state:[{t:this.shape_600},{t:this.shape_17,p:{y:114.7}},{t:this.shape_599}]},1).to({state:[{t:this.shape_602},{t:this.shape_17,p:{y:115.1}},{t:this.shape_601}]},1).to({state:[{t:this.shape_604},{t:this.shape_17,p:{y:115.4}},{t:this.shape_603}]},1).to({state:[{t:this.shape_606},{t:this.shape_1,p:{y:115.8}},{t:this.shape_605}]},1).to({state:[{t:this.shape_608},{t:this.shape_1,p:{y:116.1}},{t:this.shape_607}]},1).to({state:[{t:this.shape_610},{t:this.shape_7,p:{y:116.5}},{t:this.shape_609}]},1).to({state:[{t:this.shape_612},{t:this.shape_7,p:{y:116.8}},{t:this.shape_611}]},1).to({state:[{t:this.shape_614},{t:this.shape_7,p:{y:117.2}},{t:this.shape_613}]},1).to({state:[{t:this.shape_616},{t:this.shape_14,p:{y:117.5}},{t:this.shape_615}]},1).to({state:[]},1).wait(195));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,181.4,57,26.6);
	
	
	(lib.slupek2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 8
		this.shape = new cjs.Shape();
		this.shape.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,185.4,28.4,185.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape.setTransform(28.4,185.4);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.lf(["#999999","#333333"],[0,1],0,-184.7,0,8.4).s().p("AhTgzIABAAIB2g6IAxgWIAAC5IioBOg");
		this.shape_1.setTransform(48.5,194.6);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-184.7,-9.5,8.4).s().p("AjGBdIAAi5IACAAIgBABIABAAIGLAAIAAC3IAAABg");
		this.shape_2.setTransform(20,198.6);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.lf(["#FFFF00","#FF9900"],[0,1],11.1,-181.7,25.7,-188.7).s().p("AAAAAIAAAAIAAAAg");
		this.shape_3.setTransform(0.2,189.3);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.lf(["#999999","#333333"],[0,1],0,-184.6,0,8.5).s().p("AhTg1IABAAIB2g5IAxgXIAAC8IioBPg");
		this.shape_4.setTransform(48.5,194.4);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,185,28.4,185).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_5.setTransform(28.4,185);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-184.6,-9.5,8.5).s().p("AjGBeIAAi7IACAAIAAAAIGLAAIAAC7IAAAAg");
		this.shape_6.setTransform(20,198.4);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.lf(["#999999","#333333"],[0,1],0,-184.4,0,8.7).s().p("AhTg3IABAAIB2g5IAxgWIAAC/IioBOg");
		this.shape_7.setTransform(48.5,194.2);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,184.7,28.4,184.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_8.setTransform(28.4,184.7);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-184.4,-9.5,8.7).s().p("AjGBgIAAi/IACAAIAAAAIGLAAIAAC+IAAABg");
		this.shape_9.setTransform(20,198.2);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.lf(["#999999","#333333"],[0,1],0,-184.2,0,8.9).s().p("AhTg4IABAAIB2g6IAxgWIAADDIioBOg");
		this.shape_10.setTransform(48.5,194.1);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,184.3,28.4,184.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_11.setTransform(28.4,184.3);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-184.2,-9.5,8.9).s().p("AjGBiIAAjDIACAAIAAABIGLAAIAADBIAAABg");
		this.shape_12.setTransform(20,198.1);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.lf(["#999999","#333333"],[0,1],0,-184,0,9.1).s().p("AhTg6IABAAIB2g6IAxgWIAADHIioBOg");
		this.shape_13.setTransform(48.5,193.9);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,184,28.4,184).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_14.setTransform(28.4,184);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-184,-9.5,9.1).s().p("AjGBkIAAjHIACAAIAAABIGLAAIAADFIAAABg");
		this.shape_15.setTransform(20,197.9);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.lf(["#999999","#333333"],[0,1],0,-183.9,0,9.2).s().p("AhTg8IABAAIB2g5IAxgWIAADJIioBPg");
		this.shape_16.setTransform(48.5,193.7);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,183.6,28.4,183.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_17.setTransform(28.4,183.6);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183.9,-9.5,9.2).s().p("AjGBlIAAjKIACAAIAAABIGLAAIAADJIAAAAg");
		this.shape_18.setTransform(20,197.7);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.lf(["#999999","#333333"],[0,1],0,-183.7,0,9.4).s().p("AhTg+IABAAIB2g5IAxgWIAADNIioBOg");
		this.shape_19.setTransform(48.5,193.5);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,183.3,28.4,183.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_20.setTransform(28.4,183.3);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183.7,-9.5,9.4).s().p("AjGBnIAAjNIACAAIAAAAIGLAAIAADMIAAABg");
		this.shape_21.setTransform(20,197.5);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.lf(["#999999","#333333"],[0,1],0,-183.5,0,9.6).s().p("AhThAIABAAIB2g5IAxgWIAADRIioBOg");
		this.shape_22.setTransform(48.5,193.4);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,182.9,28.4,182.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_23.setTransform(28.4,182.9);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183.5,-9.5,9.6).s().p("AjGBpIAAjRIACAAIAAAAIGLAAIAADQIAAABg");
		this.shape_24.setTransform(20,197.4);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.lf(["#999999","#333333"],[0,1],0,-183.3,0,9.8).s().p("AhThBIABAAIB2g6IAxgWIAADVIioBOg");
		this.shape_25.setTransform(48.5,193.2);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,182.6,28.4,182.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_26.setTransform(28.4,182.6);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183.3,-9.5,9.8).s().p("AjGBrIAAjVIACAAIAAABIGLAAIAADTIAAABg");
		this.shape_27.setTransform(20,197.2);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.lf(["#999999","#333333"],[0,1],0,-183.2,0,9.9).s().p("AhThDIABAAIB2g6IAxgWIAADYIioBPg");
		this.shape_28.setTransform(48.5,193);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,182.2,28.4,182.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_29.setTransform(28.4,182.2);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183.2,-9.5,9.9).s().p("AjGBsIAAjXIACAAIAAAAIGLAAIAADXIAAAAg");
		this.shape_30.setTransform(20,197);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.lf(["#999999","#333333"],[0,1],0,-183,0,10.1).s().p("AhThFIABAAIB2g5IAxgWIAADbIioBOg");
		this.shape_31.setTransform(48.5,192.8);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,181.9,28.4,181.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_32.setTransform(28.4,181.9);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-183,-9.5,10.1).s().p("AjGBuIAAjbIACAAIAAAAIGLAAIAADaIAAABg");
		this.shape_33.setTransform(20,196.8);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.lf(["#999999","#333333"],[0,1],0,-182.8,0,10.3).s().p("AhThGIABAAIB2g6IAxgWIAADfIioBOg");
		this.shape_34.setTransform(48.5,192.7);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,181.5,28.4,181.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_35.setTransform(28.4,181.5);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182.8,-9.5,10.3).s().p("AjGBwIAAjfIACAAIAAABIGLAAIAADdIAAABg");
		this.shape_36.setTransform(20,196.7);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.lf(["#999999","#333333"],[0,1],0,-182.6,0,10.5).s().p("AhThIIABAAIB2g6IAxgWIAADjIioBOg");
		this.shape_37.setTransform(48.5,192.5);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,181.2,28.4,181.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_38.setTransform(28.4,181.2);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182.6,-9.5,10.5).s().p("AjGByIAAjjIACAAIAAABIGLAAIAADhIAAABg");
		this.shape_39.setTransform(20,196.5);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.lf(["#999999","#333333"],[0,1],0,-182.5,0,10.6).s().p("AhThKIABAAIB2g5IAxgWIAADlIioBOg");
		this.shape_40.setTransform(48.5,192.3);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,180.9,28.4,180.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_41.setTransform(28.4,180.9);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182.5,-9.5,10.6).s().p("AjGBzIAAjlIACAAIAAAAIGLAAIAADkIAAABg");
		this.shape_42.setTransform(20,196.3);
	
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.lf(["#999999","#333333"],[0,1],0,-182.3,0,10.8).s().p("AhThMIABAAIB2g5IAxgWIAADpIioBOg");
		this.shape_43.setTransform(48.5,192.2);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,180.5,28.4,180.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_44.setTransform(28.4,180.5);
	
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182.3,-9.5,10.8).s().p("AjGB1IAAjpIACAAIAAAAIGLAAIAADoIAAABg");
		this.shape_45.setTransform(20,196.2);
	
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.lf(["#999999","#333333"],[0,1],0,-182.1,0,11).s().p("AhThNIABAAIB2g6IAxgWIAADtIioBOg");
		this.shape_46.setTransform(48.5,192);
	
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,180.2,28.4,180.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_47.setTransform(28.4,180.2);
	
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182.1,-9.5,11).s().p("AjGB3IAAjtIACAAIAAABIGLAAIAADrIAAABg");
		this.shape_48.setTransform(20,196);
	
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.lf(["#999999","#333333"],[0,1],0,-182,0,11.1).s().p("AhThPIABAAIB2g5IAxgXIAADwIioBPg");
		this.shape_49.setTransform(48.5,191.8);
	
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,179.8,28.4,179.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_50.setTransform(28.4,179.8);
	
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-182,-9.5,11.1).s().p("AjGB4IAAjwIACAAIAAABIGLAAIAADvIAAAAg");
		this.shape_51.setTransform(20,195.8);
	
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.lf(["#999999","#333333"],[0,1],0,-181.8,0,11.3).s().p("AhThRIABAAIB2g5IAxgWIAADzIioBOg");
		this.shape_52.setTransform(48.5,191.6);
	
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,179.5,28.4,179.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_53.setTransform(28.4,179.5);
	
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-181.8,-9.5,11.3).s().p("AjGB6IAAjzIACAAIAAAAIGLAAIAADyIAAABg");
		this.shape_54.setTransform(20,195.6);
	
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.lf(["#999999","#333333"],[0,1],0,-181.6,0,11.5).s().p("AhThSIABAAIB2g6IAxgWIAAD3IioBOg");
		this.shape_55.setTransform(48.5,191.5);
	
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,179.1,28.4,179.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_56.setTransform(28.4,179.1);
	
		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-181.6,-9.5,11.5).s().p("AjGB8IAAj3IACAAIAAABIGLAAIAAD1IAAABg");
		this.shape_57.setTransform(20,195.5);
	
		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.lf(["#999999","#333333"],[0,1],0,-181.4,0,11.7).s().p("AhThUIABAAIB2g6IAxgWIAAD7IioBOg");
		this.shape_58.setTransform(48.5,191.3);
	
		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,178.8,28.4,178.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_59.setTransform(28.4,178.8);
	
		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-181.4,-9.5,11.7).s().p("AjGB+IAAj7IACAAIAAABIGLAAIAAD5IAAABg");
		this.shape_60.setTransform(20,195.3);
	
		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.lf(["#999999","#333333"],[0,1],0,-181.3,0,11.8).s().p("AhThWIABAAIB2g6IAxgVIAAD9IioBPg");
		this.shape_61.setTransform(48.5,191.1);
	
		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,178.4,28.4,178.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_62.setTransform(28.4,178.4);
	
		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-181.3,-9.5,11.8).s().p("AjGB/IAAj9IACAAIAAAAIGLAAIAAD9IAAAAg");
		this.shape_63.setTransform(20,195.1);
	
		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.lf(["#999999","#333333"],[0,1],0,-181.1,0,12).s().p("AhThYIABAAIB2g5IAxgWIAAEBIioBOg");
		this.shape_64.setTransform(48.5,190.9);
	
		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,178.1,28.4,178.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_65.setTransform(28.4,178.1);
	
		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-181.1,-9.5,12).s().p("AjGCBIAAkBIACAAIAAAAIGLAAIAAEAIAAABg");
		this.shape_66.setTransform(20,194.9);
	
		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.lf(["#999999","#333333"],[0,1],0,-180.9,0,12.2).s().p("AhThaIABAAIB2g5IAxgWIAAEFIioBOg");
		this.shape_67.setTransform(48.5,190.8);
	
		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,177.7,28.4,177.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_68.setTransform(28.4,177.7);
	
		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180.9,-9.5,12.2).s().p("AjGCDIAAkFIACAAIAAAAIGLAAIAAEEIAAABg");
		this.shape_69.setTransform(20,194.8);
	
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.lf(["#999999","#333333"],[0,1],0,-180.7,0,12.4).s().p("AhThbIABAAIB2g6IAxgWIAAEJIioBOg");
		this.shape_70.setTransform(48.5,190.6);
	
		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,177.4,28.4,177.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_71.setTransform(28.4,177.4);
	
		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180.7,-9.5,12.4).s().p("AjGCFIAAkJIACAAIAAABIGLAAIAAEHIAAABg");
		this.shape_72.setTransform(20,194.6);
	
		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.lf(["#999999","#333333"],[0,1],0,-180.6,0,12.5).s().p("AhThdIABAAIB2g5IAxgXIAAEMIioBPg");
		this.shape_73.setTransform(48.5,190.4);
	
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,177,28.4,177).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_74.setTransform(28.4,177);
	
		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180.6,-9.5,12.5).s().p("AjGCGIAAkMIACAAIAAABIGLAAIAAELIAAAAg");
		this.shape_75.setTransform(20,194.4);
	
		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.lf(["#999999","#333333"],[0,1],0,-180.4,0,12.7).s().p("AhThfIABAAIB2g5IAxgWIAAEPIioBOg");
		this.shape_76.setTransform(48.5,190.2);
	
		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,176.7,28.4,176.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_77.setTransform(28.4,176.7);
	
		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180.4,-9.5,12.7).s().p("AjGCIIAAkPIACAAIAAAAIGLAAIAAEOIAAABg");
		this.shape_78.setTransform(20,194.2);
	
		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.lf(["#999999","#333333"],[0,1],0,-180.2,0,12.9).s().p("AhThgIABAAIB2g6IAxgWIAAETIioBOg");
		this.shape_79.setTransform(48.5,190.1);
	
		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,176.3,28.4,176.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_80.setTransform(28.4,176.3);
	
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180.2,-9.5,12.9).s().p("AjGCKIAAkTIACAAIAAABIGLAAIAAERIAAABg");
		this.shape_81.setTransform(20,194.1);
	
		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.lf(["#999999","#333333"],[0,1],0,-180,0,13.1).s().p("AhThiIABAAIB2g6IAxgWIAAEXIioBOg");
		this.shape_82.setTransform(48.5,189.9);
	
		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,176,28.4,176).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_83.setTransform(28.4,176);
	
		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-180,-9.5,13.1).s().p("AjGCMIAAkXIACAAIAAABIGLAAIAAEVIAAABg");
		this.shape_84.setTransform(20,193.9);
	
		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.lf(["#999999","#333333"],[0,1],0,-179.9,0,13.2).s().p("AhThkIABAAIB2g6IAxgVIAAEZIioBPg");
		this.shape_85.setTransform(48.5,189.7);
	
		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,175.6,28.4,175.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_86.setTransform(28.4,175.6);
	
		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179.9,-9.5,13.2).s().p("AjGCNIAAkaIACAAIAAABIGLAAIAAEZIAAAAg");
		this.shape_87.setTransform(20,193.7);
	
		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.lf(["#999999","#333333"],[0,1],0,-179.7,0,13.4).s().p("AhThmIABAAIB2g5IAxgWIAAEdIioBOg");
		this.shape_88.setTransform(48.5,189.5);
	
		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,175.3,28.4,175.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_89.setTransform(28.4,175.3);
	
		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179.7,-9.5,13.4).s().p("AjGCPIAAkdIACAAIAAAAIGLAAIAAEcIAAABg");
		this.shape_90.setTransform(20,193.5);
	
		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.lf(["#999999","#333333"],[0,1],0,-179.5,0,13.6).s().p("AhThoIABAAIB2g5IAxgWIAAEhIioBOg");
		this.shape_91.setTransform(48.5,189.4);
	
		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,174.9,28.4,174.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_92.setTransform(28.4,174.9);
	
		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179.5,-9.5,13.6).s().p("AjGCRIAAkhIACAAIAAAAIGLAAIAAEgIAAABg");
		this.shape_93.setTransform(20,193.4);
	
		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.lf(["#999999","#333333"],[0,1],0,-179.3,0,13.8).s().p("AhThpIABAAIB2g6IAxgWIAAElIioBOg");
		this.shape_94.setTransform(48.5,189.2);
	
		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,174.6,28.4,174.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_95.setTransform(28.4,174.6);
	
		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179.3,-9.5,13.8).s().p("AjGCTIAAklIACAAIAAABIGLAAIAAEjIAAABg");
		this.shape_96.setTransform(20,193.2);
	
		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.lf(["#999999","#333333"],[0,1],0,-179.2,0,13.9).s().p("AhThrIABAAIB2g5IAxgXIAAEoIioBPg");
		this.shape_97.setTransform(48.5,189);
	
		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,174.2,28.4,174.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_98.setTransform(28.4,174.2);
	
		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179.2,-9.5,13.9).s().p("AjGCUIAAknIACAAIAAAAIGLAAIAAEnIAAAAg");
		this.shape_99.setTransform(20,193);
	
		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.lf(["#999999","#333333"],[0,1],0,-179,0,14.1).s().p("AhThtIABAAIB2g5IAxgWIAAErIioBOg");
		this.shape_100.setTransform(48.5,188.8);
	
		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,173.9,28.4,173.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_101.setTransform(28.4,173.9);
	
		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-179,-9.5,14.1).s().p("AjGCWIAAkrIACAAIAAAAIGLAAIAAEqIAAABg");
		this.shape_102.setTransform(20,192.8);
	
		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.lf(["#999999","#333333"],[0,1],0,-178.8,0,14.3).s().p("AhThuIABAAIB2g6IAxgWIAAEvIioBOg");
		this.shape_103.setTransform(48.5,188.7);
	
		this.shape_104 = new cjs.Shape();
		this.shape_104.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,173.5,28.4,173.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_104.setTransform(28.4,173.5);
	
		this.shape_105 = new cjs.Shape();
		this.shape_105.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178.8,-9.5,14.3).s().p("AjGCYIAAkvIACAAIAAABIGLAAIAAEtIAAABg");
		this.shape_105.setTransform(20,192.7);
	
		this.shape_106 = new cjs.Shape();
		this.shape_106.graphics.lf(["#999999","#333333"],[0,1],0,-178.6,0,14.5).s().p("AhThwIABAAIB2g6IAxgWIAAEzIioBOg");
		this.shape_106.setTransform(48.5,188.5);
	
		this.shape_107 = new cjs.Shape();
		this.shape_107.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,173.2,28.4,173.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_107.setTransform(28.4,173.2);
	
		this.shape_108 = new cjs.Shape();
		this.shape_108.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178.6,-9.5,14.5).s().p("AjGCaIAAkzIACAAIAAABIGLAAIAAExIAAABg");
		this.shape_108.setTransform(20,192.5);
	
		this.shape_109 = new cjs.Shape();
		this.shape_109.graphics.lf(["#999999","#333333"],[0,1],0,-178.5,0,14.6).s().p("AhThyIABAAIB2g6IAxgVIAAE1IioBPg");
		this.shape_109.setTransform(48.5,188.3);
	
		this.shape_110 = new cjs.Shape();
		this.shape_110.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,172.8,28.4,172.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_110.setTransform(28.4,172.8);
	
		this.shape_111 = new cjs.Shape();
		this.shape_111.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178.5,-9.5,14.6).s().p("AjGCbIAAk2IACAAIAAABIGLAAIAAE1IAAAAg");
		this.shape_111.setTransform(20,192.3);
	
		this.shape_112 = new cjs.Shape();
		this.shape_112.graphics.lf(["#999999","#333333"],[0,1],0,-178.3,0,14.8).s().p("AhTh0IABAAIB2g5IAxgWIAAE5IioBOg");
		this.shape_112.setTransform(48.5,188.1);
	
		this.shape_113 = new cjs.Shape();
		this.shape_113.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,172.5,28.4,172.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_113.setTransform(28.4,172.5);
	
		this.shape_114 = new cjs.Shape();
		this.shape_114.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178.3,-9.5,14.8).s().p("AjGCdIAAk5IACAAIAAAAIGLAAIAAE4IAAABg");
		this.shape_114.setTransform(20,192.1);
	
		this.shape_115 = new cjs.Shape();
		this.shape_115.graphics.lf(["#999999","#333333"],[0,1],0,-178.1,0,15).s().p("AhTh1IABAAIB2g6IAxgWIAAE9IioBOg");
		this.shape_115.setTransform(48.5,188);
	
		this.shape_116 = new cjs.Shape();
		this.shape_116.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,172.2,28.4,172.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_116.setTransform(28.4,172.2);
	
		this.shape_117 = new cjs.Shape();
		this.shape_117.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178.1,-9.5,15).s().p("AjGCfIAAk9IACAAIAAABIGLAAIAAE7IAAABg");
		this.shape_117.setTransform(20,192);
	
		this.shape_118 = new cjs.Shape();
		this.shape_118.graphics.lf(["#999999","#333333"],[0,1],0,-178,0,15.1).s().p("AhTh3IABAAIB2g5IAxgXIAAFAIioBPg");
		this.shape_118.setTransform(48.5,187.8);
	
		this.shape_119 = new cjs.Shape();
		this.shape_119.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,171.8,28.4,171.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_119.setTransform(28.4,171.8);
	
		this.shape_120 = new cjs.Shape();
		this.shape_120.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-178,-9.5,15.1).s().p("AjGCgIAAlAIACAAIAAABIGLAAIAAE/IAAAAg");
		this.shape_120.setTransform(20,191.8);
	
		this.shape_121 = new cjs.Shape();
		this.shape_121.graphics.lf(["#999999","#333333"],[0,1],0,-177.8,0,15.3).s().p("AhTh5IABAAIB2g5IAxgWIAAFDIioBOg");
		this.shape_121.setTransform(48.5,187.6);
	
		this.shape_122 = new cjs.Shape();
		this.shape_122.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,171.5,28.4,171.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_122.setTransform(28.4,171.5);
	
		this.shape_123 = new cjs.Shape();
		this.shape_123.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-177.8,-9.5,15.3).s().p("AjGCiIAAlDIACAAIAAAAIGLAAIAAFCIAAABg");
		this.shape_123.setTransform(20,191.6);
	
		this.shape_124 = new cjs.Shape();
		this.shape_124.graphics.lf(["#999999","#333333"],[0,1],0,-177.6,0,15.5).s().p("AhTh6IABAAIB2g6IAxgWIAAFHIioBOg");
		this.shape_124.setTransform(48.5,187.5);
	
		this.shape_125 = new cjs.Shape();
		this.shape_125.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,171.1,28.4,171.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_125.setTransform(28.4,171.1);
	
		this.shape_126 = new cjs.Shape();
		this.shape_126.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-177.6,-9.5,15.5).s().p("AjGCkIAAlHIACAAIAAABIGLAAIAAFFIAAABg");
		this.shape_126.setTransform(20,191.5);
	
		this.shape_127 = new cjs.Shape();
		this.shape_127.graphics.lf(["#999999","#333333"],[0,1],0,-177.4,0,15.7).s().p("AhTh8IABAAIB2g6IAxgWIAAFLIioBOg");
		this.shape_127.setTransform(48.5,187.3);
	
		this.shape_128 = new cjs.Shape();
		this.shape_128.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,170.8,28.4,170.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_128.setTransform(28.4,170.8);
	
		this.shape_129 = new cjs.Shape();
		this.shape_129.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-177.4,-9.5,15.7).s().p("AjGCmIAAlLIACAAIAAABIGLAAIAAFJIAAABg");
		this.shape_129.setTransform(20,191.3);
	
		this.shape_130 = new cjs.Shape();
		this.shape_130.graphics.lf(["#999999","#333333"],[0,1],0,-177.3,0,15.8).s().p("AhTh+IABAAIB2g6IAxgVIAAFNIioBPg");
		this.shape_130.setTransform(48.5,187.1);
	
		this.shape_131 = new cjs.Shape();
		this.shape_131.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,170.4,28.4,170.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_131.setTransform(28.4,170.4);
	
		this.shape_132 = new cjs.Shape();
		this.shape_132.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-177.3,-9.5,15.8).s().p("AjGCnIAAlNIACAAIAAAAIGLAAIAAFNIAAAAg");
		this.shape_132.setTransform(20,191.1);
	
		this.shape_133 = new cjs.Shape();
		this.shape_133.graphics.lf(["#999999","#333333"],[0,1],0,-177.1,0,16).s().p("AhTiAIABAAIB2g5IAxgWIAAFRIioBOg");
		this.shape_133.setTransform(48.5,186.9);
	
		this.shape_134 = new cjs.Shape();
		this.shape_134.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,170.1,28.4,170.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_134.setTransform(28.4,170.1);
	
		this.shape_135 = new cjs.Shape();
		this.shape_135.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-177.1,-9.5,16).s().p("AjGCpIAAlRIACAAIAAAAIGLAAIAAFQIAAABg");
		this.shape_135.setTransform(20,190.9);
	
		this.shape_136 = new cjs.Shape();
		this.shape_136.graphics.lf(["#999999","#333333"],[0,1],0,-176.9,0,16.2).s().p("AhTiCIABAAIB2g5IAxgWIAAFVIioBOg");
		this.shape_136.setTransform(48.5,186.8);
	
		this.shape_137 = new cjs.Shape();
		this.shape_137.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,169.7,28.4,169.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_137.setTransform(28.4,169.7);
	
		this.shape_138 = new cjs.Shape();
		this.shape_138.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176.9,-9.5,16.2).s().p("AjGCrIAAlVIACAAIAAAAIGLAAIAAFUIAAABg");
		this.shape_138.setTransform(20,190.8);
	
		this.shape_139 = new cjs.Shape();
		this.shape_139.graphics.lf(["#999999","#333333"],[0,1],0,-176.7,0,16.4).s().p("AhTiDIABAAIB2g6IAxgWIAAFZIioBOg");
		this.shape_139.setTransform(48.5,186.6);
	
		this.shape_140 = new cjs.Shape();
		this.shape_140.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,169.4,28.4,169.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_140.setTransform(28.4,169.4);
	
		this.shape_141 = new cjs.Shape();
		this.shape_141.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176.7,-9.5,16.4).s().p("AjGCtIAAlZIACAAIAAABIGLAAIAAFXIAAABg");
		this.shape_141.setTransform(20,190.6);
	
		this.shape_142 = new cjs.Shape();
		this.shape_142.graphics.lf(["#999999","#333333"],[0,1],0,-176.6,0,16.5).s().p("AhTiFIABAAIB2g5IAxgXIAAFcIioBPg");
		this.shape_142.setTransform(48.5,186.4);
	
		this.shape_143 = new cjs.Shape();
		this.shape_143.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,169,28.4,169).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_143.setTransform(28.4,169);
	
		this.shape_144 = new cjs.Shape();
		this.shape_144.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176.6,-9.5,16.5).s().p("AjGCuIAAlcIACAAIAAABIGLAAIAAFbIAAAAg");
		this.shape_144.setTransform(20,190.4);
	
		this.shape_145 = new cjs.Shape();
		this.shape_145.graphics.lf(["#999999","#333333"],[0,1],0,-176.4,0,16.7).s().p("AhTiHIABAAIB2g5IAxgWIAAFfIioBOg");
		this.shape_145.setTransform(48.5,186.2);
	
		this.shape_146 = new cjs.Shape();
		this.shape_146.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,168.7,28.4,168.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_146.setTransform(28.4,168.7);
	
		this.shape_147 = new cjs.Shape();
		this.shape_147.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176.4,-9.5,16.7).s().p("AjGCwIAAlfIACAAIAAAAIGLAAIAAFeIAAABg");
		this.shape_147.setTransform(20,190.2);
	
		this.shape_148 = new cjs.Shape();
		this.shape_148.graphics.lf(["#999999","#333333"],[0,1],0,-176.2,0,16.9).s().p("AhTiIIABAAIB2g6IAxgWIAAFjIioBOg");
		this.shape_148.setTransform(48.5,186.1);
	
		this.shape_149 = new cjs.Shape();
		this.shape_149.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,168.3,28.4,168.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_149.setTransform(28.4,168.3);
	
		this.shape_150 = new cjs.Shape();
		this.shape_150.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176.2,-9.5,16.9).s().p("AjGCyIAAljIACAAIAAABIGLAAIAAFhIAAABg");
		this.shape_150.setTransform(20,190.1);
	
		this.shape_151 = new cjs.Shape();
		this.shape_151.graphics.lf(["#999999","#333333"],[0,1],0,-176,0,17.1).s().p("AhTiKIABAAIB2g6IAxgWIAAFnIioBOg");
		this.shape_151.setTransform(48.5,185.9);
	
		this.shape_152 = new cjs.Shape();
		this.shape_152.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,168,28.4,168).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_152.setTransform(28.4,168);
	
		this.shape_153 = new cjs.Shape();
		this.shape_153.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-176,-9.5,17.1).s().p("AjGC0IAAlnIACAAIAAABIGLAAIAAFlIAAABg");
		this.shape_153.setTransform(20,189.9);
	
		this.shape_154 = new cjs.Shape();
		this.shape_154.graphics.lf(["#999999","#333333"],[0,1],0,-175.9,0,17.2).s().p("AhTiMIABAAIB2g6IAxgVIAAFpIioBPg");
		this.shape_154.setTransform(48.5,185.7);
	
		this.shape_155 = new cjs.Shape();
		this.shape_155.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,167.6,28.4,167.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_155.setTransform(28.4,167.6);
	
		this.shape_156 = new cjs.Shape();
		this.shape_156.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175.9,-9.5,17.2).s().p("AjGC1IAAlpIACAAIAAAAIGLAAIAAFpIAAAAg");
		this.shape_156.setTransform(20,189.7);
	
		this.shape_157 = new cjs.Shape();
		this.shape_157.graphics.lf(["#999999","#333333"],[0,1],0,-175.7,0,17.4).s().p("AhTiOIABAAIB2g5IAxgWIAAFtIioBOg");
		this.shape_157.setTransform(48.5,185.5);
	
		this.shape_158 = new cjs.Shape();
		this.shape_158.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,167.3,28.4,167.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_158.setTransform(28.4,167.3);
	
		this.shape_159 = new cjs.Shape();
		this.shape_159.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175.7,-9.5,17.4).s().p("AjGC3IAAltIACAAIAAAAIGLAAIAAFsIAAABg");
		this.shape_159.setTransform(20,189.5);
	
		this.shape_160 = new cjs.Shape();
		this.shape_160.graphics.lf(["#999999","#333333"],[0,1],0,-175.5,0,17.6).s().p("AhTiQIABAAIB2g5IAxgWIAAFxIioBOg");
		this.shape_160.setTransform(48.5,185.4);
	
		this.shape_161 = new cjs.Shape();
		this.shape_161.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,166.9,28.4,166.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_161.setTransform(28.4,166.9);
	
		this.shape_162 = new cjs.Shape();
		this.shape_162.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175.5,-9.5,17.6).s().p("AjGC5IAAlxIACAAIAAAAIGLAAIAAFwIAAABg");
		this.shape_162.setTransform(20,189.4);
	
		this.shape_163 = new cjs.Shape();
		this.shape_163.graphics.lf(["#999999","#333333"],[0,1],0,-175.3,0,17.8).s().p("AhTiRIABAAIB2g6IAxgWIAAF1IioBOg");
		this.shape_163.setTransform(48.5,185.2);
	
		this.shape_164 = new cjs.Shape();
		this.shape_164.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,166.6,28.4,166.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_164.setTransform(28.4,166.6);
	
		this.shape_165 = new cjs.Shape();
		this.shape_165.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175.3,-9.5,17.8).s().p("AjGC7IAAl1IACAAIAAABIGLAAIAAFzIAAABg");
		this.shape_165.setTransform(20,189.2);
	
		this.shape_166 = new cjs.Shape();
		this.shape_166.graphics.lf(["#999999","#333333"],[0,1],0,-175.2,0,17.9).s().p("AhTiTIABAAIB2g5IAxgXIAAF4IioBPg");
		this.shape_166.setTransform(48.5,185);
	
		this.shape_167 = new cjs.Shape();
		this.shape_167.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,166.2,28.4,166.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_167.setTransform(28.4,166.2);
	
		this.shape_168 = new cjs.Shape();
		this.shape_168.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175.2,-9.5,17.9).s().p("AjGC8IAAl4IACAAIAAABIGLAAIAAF3IAAAAg");
		this.shape_168.setTransform(20,189);
	
		this.shape_169 = new cjs.Shape();
		this.shape_169.graphics.lf(["#999999","#333333"],[0,1],0,-175,0,18.1).s().p("AhTiVIABAAIB2g5IAxgWIAAF7IioBOg");
		this.shape_169.setTransform(48.5,184.8);
	
		this.shape_170 = new cjs.Shape();
		this.shape_170.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,165.9,28.4,165.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_170.setTransform(28.4,165.9);
	
		this.shape_171 = new cjs.Shape();
		this.shape_171.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-175,-9.5,18.1).s().p("AjGC+IAAl7IACAAIAAAAIGLAAIAAF6IAAABg");
		this.shape_171.setTransform(20,188.8);
	
		this.shape_172 = new cjs.Shape();
		this.shape_172.graphics.lf(["#999999","#333333"],[0,1],0,-174.8,0,18.3).s().p("AhTiWIABAAIB2g6IAxgWIAAF/IioBOg");
		this.shape_172.setTransform(48.5,184.7);
	
		this.shape_173 = new cjs.Shape();
		this.shape_173.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,165.5,28.4,165.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_173.setTransform(28.4,165.5);
	
		this.shape_174 = new cjs.Shape();
		this.shape_174.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174.8,-9.5,18.3).s().p("AjGDAIAAl/IACAAIAAABIGLAAIAAF9IAAABg");
		this.shape_174.setTransform(20,188.7);
	
		this.shape_175 = new cjs.Shape();
		this.shape_175.graphics.lf(["#999999","#333333"],[0,1],0,-174.6,0,18.5).s().p("AhTiYIABAAIB2g6IAxgWIAAGDIioBOg");
		this.shape_175.setTransform(48.5,184.5);
	
		this.shape_176 = new cjs.Shape();
		this.shape_176.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,165.2,28.4,165.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_176.setTransform(28.4,165.2);
	
		this.shape_177 = new cjs.Shape();
		this.shape_177.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174.6,-9.5,18.5).s().p("AjGDCIAAmDIACAAIAAABIGLAAIAAGBIAAABg");
		this.shape_177.setTransform(20,188.5);
	
		this.shape_178 = new cjs.Shape();
		this.shape_178.graphics.lf(["#999999","#333333"],[0,1],0,-174.5,0,18.6).s().p("AhTiaIABAAIB2g6IAxgVIAAGFIioBPg");
		this.shape_178.setTransform(48.5,184.3);
	
		this.shape_179 = new cjs.Shape();
		this.shape_179.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,164.8,28.4,164.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_179.setTransform(28.4,164.8);
	
		this.shape_180 = new cjs.Shape();
		this.shape_180.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174.5,-9.5,18.6).s().p("AjGDDIAAmGIACAAIAAABIGLAAIAAGFIAAAAg");
		this.shape_180.setTransform(20,188.3);
	
		this.shape_181 = new cjs.Shape();
		this.shape_181.graphics.lf(["#999999","#333333"],[0,1],0,-174.3,0,18.8).s().p("AhTicIABAAIB2g5IAxgWIAAGJIioBOg");
		this.shape_181.setTransform(48.5,184.1);
	
		this.shape_182 = new cjs.Shape();
		this.shape_182.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,164.5,28.4,164.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_182.setTransform(28.4,164.5);
	
		this.shape_183 = new cjs.Shape();
		this.shape_183.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174.3,-9.5,18.8).s().p("AjGDFIAAmJIACAAIAAAAIGLAAIAAGIIAAABg");
		this.shape_183.setTransform(20,188.1);
	
		this.shape_184 = new cjs.Shape();
		this.shape_184.graphics.lf(["#999999","#333333"],[0,1],0,-174.1,0,19).s().p("AhTieIABAAIB2g5IAxgWIAAGNIioBOg");
		this.shape_184.setTransform(48.5,184);
	
		this.shape_185 = new cjs.Shape();
		this.shape_185.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,164.1,28.4,164.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_185.setTransform(28.4,164.1);
	
		this.shape_186 = new cjs.Shape();
		this.shape_186.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174.1,-9.5,19).s().p("AjGDHIAAmNIACAAIAAAAIGLAAIAAGMIAAABg");
		this.shape_186.setTransform(20,188);
	
		this.shape_187 = new cjs.Shape();
		this.shape_187.graphics.lf(["#999999","#333333"],[0,1],0,-174,0,19.1).s().p("AhTifIABAAIB2g6IAxgVIAAGPIioBPg");
		this.shape_187.setTransform(48.5,183.8);
	
		this.shape_188 = new cjs.Shape();
		this.shape_188.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,163.8,28.4,163.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_188.setTransform(28.4,163.8);
	
		this.shape_189 = new cjs.Shape();
		this.shape_189.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-174,-9.5,19.1).s().p("AjGDIIAAmQIACAAIAAABIGLAAIAAGPIAAAAg");
		this.shape_189.setTransform(20,187.8);
	
		this.shape_190 = new cjs.Shape();
		this.shape_190.graphics.lf(["#999999","#333333"],[0,1],0,-173.8,0,19.3).s().p("AhTihIABAAIB2g5IAxgXIAAGUIioBPg");
		this.shape_190.setTransform(48.5,183.6);
	
		this.shape_191 = new cjs.Shape();
		this.shape_191.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,163.4,28.4,163.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_191.setTransform(28.4,163.4);
	
		this.shape_192 = new cjs.Shape();
		this.shape_192.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-173.8,-9.5,19.3).s().p("AjGDKIAAmTIACAAIAAAAIGLAAIAAGTIAAAAg");
		this.shape_192.setTransform(20,187.6);
	
		this.shape_193 = new cjs.Shape();
		this.shape_193.graphics.lf(["#999999","#333333"],[0,1],0,-173.6,0,19.5).s().p("AhTijIABAAIB2g5IAxgWIAAGXIioBOg");
		this.shape_193.setTransform(48.5,183.5);
	
		this.shape_194 = new cjs.Shape();
		this.shape_194.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,163.1,28.4,163.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_194.setTransform(28.4,163.1);
	
		this.shape_195 = new cjs.Shape();
		this.shape_195.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-173.6,-9.5,19.5).s().p("AjGDMIAAmXIACAAIAAAAIGLAAIAAGWIAAABg");
		this.shape_195.setTransform(20,187.5);
	
		this.shape_196 = new cjs.Shape();
		this.shape_196.graphics.lf(["#999999","#333333"],[0,1],0,-173.4,0,19.7).s().p("AhTikIABAAIB2g6IAxgWIAAGbIioBOg");
		this.shape_196.setTransform(48.5,183.3);
	
		this.shape_197 = new cjs.Shape();
		this.shape_197.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,162.8,28.4,162.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_197.setTransform(28.4,162.8);
	
		this.shape_198 = new cjs.Shape();
		this.shape_198.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-173.4,-9.5,19.7).s().p("AjGDOIAAmbIACAAIAAABIGLAAIAAGZIAAABg");
		this.shape_198.setTransform(20,187.3);
	
		this.shape_199 = new cjs.Shape();
		this.shape_199.graphics.lf(["#999999","#333333"],[0,1],0,-173.3,0,19.8).s().p("AhTimIABAAIB2g6IAxgWIAAGeIioBPg");
		this.shape_199.setTransform(48.5,183.1);
	
		this.shape_200 = new cjs.Shape();
		this.shape_200.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,162.4,28.4,162.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_200.setTransform(28.4,162.4);
	
		this.shape_201 = new cjs.Shape();
		this.shape_201.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-173.3,-9.5,19.8).s().p("AjGDPIAAmdIACAAIAAAAIGLAAIAAGdIAAAAg");
		this.shape_201.setTransform(20,187.1);
	
		this.shape_202 = new cjs.Shape();
		this.shape_202.graphics.lf(["#999999","#333333"],[0,1],0,-173.1,0,20).s().p("AhTioIABAAIB2g5IAxgWIAAGhIioBOg");
		this.shape_202.setTransform(48.5,182.9);
	
		this.shape_203 = new cjs.Shape();
		this.shape_203.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,162.1,28.4,162.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_203.setTransform(28.4,162.1);
	
		this.shape_204 = new cjs.Shape();
		this.shape_204.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-173.1,-9.5,20).s().p("AjGDRIAAmhIACAAIAAAAIGLAAIAAGgIAAABg");
		this.shape_204.setTransform(20,186.9);
	
		this.shape_205 = new cjs.Shape();
		this.shape_205.graphics.lf(["#999999","#333333"],[0,1],0,-172.9,0,20.2).s().p("AhTipIABAAIB2g6IAxgWIAAGlIioBOg");
		this.shape_205.setTransform(48.5,182.8);
	
		this.shape_206 = new cjs.Shape();
		this.shape_206.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,161.7,28.4,161.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_206.setTransform(28.4,161.7);
	
		this.shape_207 = new cjs.Shape();
		this.shape_207.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172.9,-9.5,20.2).s().p("AjGDTIAAmlIACAAIAAABIGLAAIAAGjIAAABg");
		this.shape_207.setTransform(20,186.8);
	
		this.shape_208 = new cjs.Shape();
		this.shape_208.graphics.lf(["#999999","#333333"],[0,1],0,-172.7,0,20.4).s().p("AhTirIABAAIB2g6IAxgWIAAGpIioBOg");
		this.shape_208.setTransform(48.5,182.6);
	
		this.shape_209 = new cjs.Shape();
		this.shape_209.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,161.4,28.4,161.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_209.setTransform(28.4,161.4);
	
		this.shape_210 = new cjs.Shape();
		this.shape_210.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172.7,-9.5,20.4).s().p("AjGDVIAAmpIACAAIAAABIGLAAIAAGnIAAABg");
		this.shape_210.setTransform(20,186.6);
	
		this.shape_211 = new cjs.Shape();
		this.shape_211.graphics.lf(["#999999","#333333"],[0,1],0,-172.6,0,20.5).s().p("AhTitIABAAIB2g5IAxgXIAAGsIioBPg");
		this.shape_211.setTransform(48.5,182.4);
	
		this.shape_212 = new cjs.Shape();
		this.shape_212.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,161,28.4,161).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_212.setTransform(28.4,161);
	
		this.shape_213 = new cjs.Shape();
		this.shape_213.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172.6,-9.5,20.5).s().p("AjGDWIAAmsIACAAIAAABIGLAAIAAGrIAAAAg");
		this.shape_213.setTransform(20,186.4);
	
		this.shape_214 = new cjs.Shape();
		this.shape_214.graphics.lf(["#999999","#333333"],[0,1],0,-172.4,0,20.7).s().p("AhTivIABAAIB2g5IAxgWIAAGvIioBOg");
		this.shape_214.setTransform(48.5,182.2);
	
		this.shape_215 = new cjs.Shape();
		this.shape_215.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,160.7,28.4,160.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_215.setTransform(28.4,160.7);
	
		this.shape_216 = new cjs.Shape();
		this.shape_216.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172.4,-9.5,20.7).s().p("AjGDYIAAmvIACAAIAAAAIGLAAIAAGuIAAABg");
		this.shape_216.setTransform(20,186.2);
	
		this.shape_217 = new cjs.Shape();
		this.shape_217.graphics.lf(["#999999","#333333"],[0,1],0,-172.2,0,20.9).s().p("AhTixIABAAIB2g5IAxgWIAAGzIioBOg");
		this.shape_217.setTransform(48.5,182.1);
	
		this.shape_218 = new cjs.Shape();
		this.shape_218.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,160.3,28.4,160.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_218.setTransform(28.4,160.3);
	
		this.shape_219 = new cjs.Shape();
		this.shape_219.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172.2,-9.5,20.9).s().p("AjGDaIAAmzIACAAIAAAAIGLAAIAAGyIAAABg");
		this.shape_219.setTransform(20,186.1);
	
		this.shape_220 = new cjs.Shape();
		this.shape_220.graphics.lf(["#999999","#333333"],[0,1],0,-172,0,21.1).s().p("AhTiyIABAAIB2g6IAxgWIAAG3IioBOg");
		this.shape_220.setTransform(48.5,181.9);
	
		this.shape_221 = new cjs.Shape();
		this.shape_221.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,160,28.4,160).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_221.setTransform(28.4,160);
	
		this.shape_222 = new cjs.Shape();
		this.shape_222.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-172,-9.5,21.1).s().p("AjGDcIAAm3IACAAIAAABIGLAAIAAG1IAAABg");
		this.shape_222.setTransform(20,185.9);
	
		this.shape_223 = new cjs.Shape();
		this.shape_223.graphics.lf(["#999999","#333333"],[0,1],0,-171.9,0,21.2).s().p("AhTi0IABAAIB2g6IAxgVIAAG5IioBPg");
		this.shape_223.setTransform(48.5,181.7);
	
		this.shape_224 = new cjs.Shape();
		this.shape_224.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,159.6,28.4,159.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_224.setTransform(28.4,159.6);
	
		this.shape_225 = new cjs.Shape();
		this.shape_225.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171.9,-9.5,21.2).s().p("AjGDdIAAm5IACAAIAAAAIGLAAIAAG5IAAAAg");
		this.shape_225.setTransform(20,185.7);
	
		this.shape_226 = new cjs.Shape();
		this.shape_226.graphics.lf(["#999999","#333333"],[0,1],0,-171.7,0,21.4).s().p("AhTi2IABAAIB2g5IAxgWIAAG9IioBOg");
		this.shape_226.setTransform(48.5,181.5);
	
		this.shape_227 = new cjs.Shape();
		this.shape_227.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,159.3,28.4,159.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_227.setTransform(28.4,159.3);
	
		this.shape_228 = new cjs.Shape();
		this.shape_228.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171.7,-9.5,21.4).s().p("AjGDfIAAm9IACAAIAAAAIGLAAIAAG8IAAABg");
		this.shape_228.setTransform(20,185.5);
	
		this.shape_229 = new cjs.Shape();
		this.shape_229.graphics.lf(["#999999","#333333"],[0,1],0,-171.5,0,21.6).s().p("AhTi4IABAAIB2g5IAxgWIAAHBIioBOg");
		this.shape_229.setTransform(48.5,181.4);
	
		this.shape_230 = new cjs.Shape();
		this.shape_230.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,158.9,28.4,158.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_230.setTransform(28.4,158.9);
	
		this.shape_231 = new cjs.Shape();
		this.shape_231.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171.5,-9.5,21.6).s().p("AjGDhIAAnBIACAAIAAAAIGLAAIAAHAIAAABg");
		this.shape_231.setTransform(20,185.4);
	
		this.shape_232 = new cjs.Shape();
		this.shape_232.graphics.lf(["#999999","#333333"],[0,1],0,-171.3,0,21.8).s().p("AhTi5IABAAIB2g6IAxgWIAAHFIioBOg");
		this.shape_232.setTransform(48.5,181.2);
	
		this.shape_233 = new cjs.Shape();
		this.shape_233.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,158.6,28.4,158.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_233.setTransform(28.4,158.6);
	
		this.shape_234 = new cjs.Shape();
		this.shape_234.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171.3,-9.5,21.8).s().p("AjGDjIAAnFIACAAIAAABIGLAAIAAHDIAAABg");
		this.shape_234.setTransform(20,185.2);
	
		this.shape_235 = new cjs.Shape();
		this.shape_235.graphics.lf(["#999999","#333333"],[0,1],0,-171.2,0,21.9).s().p("AhTi7IABAAIB2g5IAxgXIAAHIIioBPg");
		this.shape_235.setTransform(48.5,181);
	
		this.shape_236 = new cjs.Shape();
		this.shape_236.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,158.2,28.4,158.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_236.setTransform(28.4,158.2);
	
		this.shape_237 = new cjs.Shape();
		this.shape_237.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171.2,-9.5,21.9).s().p("AjGDkIAAnIIACAAIAAABIGLAAIAAHHIAAAAg");
		this.shape_237.setTransform(20,185);
	
		this.shape_238 = new cjs.Shape();
		this.shape_238.graphics.lf(["#999999","#333333"],[0,1],0,-171,0,22.1).s().p("AhTi9IABAAIB2g5IAxgWIAAHLIioBOg");
		this.shape_238.setTransform(48.5,180.8);
	
		this.shape_239 = new cjs.Shape();
		this.shape_239.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,157.9,28.4,157.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_239.setTransform(28.4,157.9);
	
		this.shape_240 = new cjs.Shape();
		this.shape_240.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-171,-9.5,22.1).s().p("AjGDmIAAnLIACAAIAAAAIGLAAIAAHKIAAABg");
		this.shape_240.setTransform(20,184.8);
	
		this.shape_241 = new cjs.Shape();
		this.shape_241.graphics.lf(["#999999","#333333"],[0,1],0,-170.8,0,22.3).s().p("AhTi+IABAAIB2g6IAxgWIAAHPIioBOg");
		this.shape_241.setTransform(48.5,180.7);
	
		this.shape_242 = new cjs.Shape();
		this.shape_242.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,157.5,28.4,157.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_242.setTransform(28.4,157.5);
	
		this.shape_243 = new cjs.Shape();
		this.shape_243.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-170.8,-9.5,22.3).s().p("AjGDoIAAnPIACAAIAAABIGLAAIAAHNIAAABg");
		this.shape_243.setTransform(20,184.7);
	
		this.shape_244 = new cjs.Shape();
		this.shape_244.graphics.lf(["#999999","#333333"],[0,1],0,-170.6,0,22.5).s().p("AhTjAIABAAIB2g6IAxgWIAAHTIioBOg");
		this.shape_244.setTransform(48.5,180.5);
	
		this.shape_245 = new cjs.Shape();
		this.shape_245.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,157.2,28.4,157.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_245.setTransform(28.4,157.2);
	
		this.shape_246 = new cjs.Shape();
		this.shape_246.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-170.6,-9.5,22.5).s().p("AjGDqIAAnTIACAAIAAABIGLAAIAAHRIAAABg");
		this.shape_246.setTransform(20,184.5);
	
		this.shape_247 = new cjs.Shape();
		this.shape_247.graphics.lf(["#999999","#333333"],[0,1],0,-170.5,0,22.6).s().p("AhTjCIABAAIB2g6IAxgVIAAHVIioBPg");
		this.shape_247.setTransform(48.5,180.3);
	
		this.shape_248 = new cjs.Shape();
		this.shape_248.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,156.8,28.4,156.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_248.setTransform(28.4,156.8);
	
		this.shape_249 = new cjs.Shape();
		this.shape_249.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-170.5,-9.5,22.6).s().p("AjGDrIAAnVIACAAIAAAAIGLAAIAAHVIAAAAg");
		this.shape_249.setTransform(20,184.3);
	
		this.shape_250 = new cjs.Shape();
		this.shape_250.graphics.lf(["#999999","#333333"],[0,1],0,-170.3,0,22.8).s().p("AhTjEIABAAIB2g5IAxgWIAAHZIioBOg");
		this.shape_250.setTransform(48.5,180.1);
	
		this.shape_251 = new cjs.Shape();
		this.shape_251.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,156.5,28.4,156.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_251.setTransform(28.4,156.5);
	
		this.shape_252 = new cjs.Shape();
		this.shape_252.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-170.3,-9.5,22.8).s().p("AjGDtIAAnZIACAAIAAAAIGLAAIAAHYIAAABg");
		this.shape_252.setTransform(20,184.1);
	
		this.shape_253 = new cjs.Shape();
		this.shape_253.graphics.lf(["#999999","#333333"],[0,1],0,-170.1,0,23).s().p("AhTjGIABAAIB2g5IAxgWIAAHdIioBOg");
		this.shape_253.setTransform(48.5,180);
	
		this.shape_254 = new cjs.Shape();
		this.shape_254.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,156.1,28.4,156.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_254.setTransform(28.4,156.1);
	
		this.shape_255 = new cjs.Shape();
		this.shape_255.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-170.1,-9.5,23).s().p("AjGDvIAAndIACAAIAAAAIGLAAIAAHcIAAABg");
		this.shape_255.setTransform(20,184);
	
		this.shape_256 = new cjs.Shape();
		this.shape_256.graphics.lf(["#999999","#333333"],[0,1],0,-169.9,0,23.2).s().p("AhTjHIABAAIB2g6IAxgWIAAHhIioBOg");
		this.shape_256.setTransform(48.5,179.8);
	
		this.shape_257 = new cjs.Shape();
		this.shape_257.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,155.8,28.4,155.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_257.setTransform(28.4,155.8);
	
		this.shape_258 = new cjs.Shape();
		this.shape_258.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.9,-9.5,23.2).s().p("AjGDxIAAnhIACAAIAAABIGLAAIAAHfIAAABg");
		this.shape_258.setTransform(20,183.8);
	
		this.shape_259 = new cjs.Shape();
		this.shape_259.graphics.lf(["#999999","#333333"],[0,1],0,-169.8,0,23.3).s().p("AhTjJIABAAIB2g5IAxgXIAAHkIioBPg");
		this.shape_259.setTransform(48.5,179.6);
	
		this.shape_260 = new cjs.Shape();
		this.shape_260.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,155.4,28.4,155.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_260.setTransform(28.4,155.4);
	
		this.shape_261 = new cjs.Shape();
		this.shape_261.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.8,-9.5,23.3).s().p("AjGDyIAAnjIACAAIAAAAIGLAAIAAHjIAAAAg");
		this.shape_261.setTransform(20,183.6);
	
		this.shape_262 = new cjs.Shape();
		this.shape_262.graphics.lf(["#999999","#333333"],[0,1],0,-169.6,0,23.5).s().p("AhTjLIABAAIB2g5IAxgWIAAHnIioBOg");
		this.shape_262.setTransform(48.5,179.4);
	
		this.shape_263 = new cjs.Shape();
		this.shape_263.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,155.1,28.4,155.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_263.setTransform(28.4,155.1);
	
		this.shape_264 = new cjs.Shape();
		this.shape_264.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.6,-9.5,23.5).s().p("AjGD0IAAnnIACAAIAAAAIGLAAIAAHmIAAABg");
		this.shape_264.setTransform(20,183.4);
	
		this.shape_265 = new cjs.Shape();
		this.shape_265.graphics.lf(["#999999","#333333"],[0,1],0,-169.4,0,23.7).s().p("AhTjMIABAAIB2g6IAxgWIAAHrIioBOg");
		this.shape_265.setTransform(48.5,179.3);
	
		this.shape_266 = new cjs.Shape();
		this.shape_266.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,154.8,28.4,154.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_266.setTransform(28.4,154.8);
	
		this.shape_267 = new cjs.Shape();
		this.shape_267.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.4,-9.5,23.7).s().p("AjGD2IAAnrIACAAIAAABIGLAAIAAHpIAAABg");
		this.shape_267.setTransform(20,183.3);
	
		this.shape_268 = new cjs.Shape();
		this.shape_268.graphics.lf(["#999999","#333333"],[0,1],0,-169.3,0,23.8).s().p("AhTjOIABAAIB2g5IAxgXIAAHuIioBPg");
		this.shape_268.setTransform(48.5,179.1);
	
		this.shape_269 = new cjs.Shape();
		this.shape_269.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,154.4,28.4,154.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_269.setTransform(28.4,154.4);
	
		this.shape_270 = new cjs.Shape();
		this.shape_270.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.3,-9.5,23.8).s().p("AjGD3IAAntIACAAIAAAAIGLAAIAAHtIAAAAg");
		this.shape_270.setTransform(20,183.1);
	
		this.shape_271 = new cjs.Shape();
		this.shape_271.graphics.lf(["#999999","#333333"],[0,1],0,-169.1,0,24).s().p("AhTjQIABAAIB2g5IAxgWIAAHxIioBOg");
		this.shape_271.setTransform(48.5,178.9);
	
		this.shape_272 = new cjs.Shape();
		this.shape_272.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,154.1,28.4,154.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_272.setTransform(28.4,154.1);
	
		this.shape_273 = new cjs.Shape();
		this.shape_273.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-169.1,-9.5,24).s().p("AjGD5IAAnxIACAAIAAAAIGLAAIAAHwIAAABg");
		this.shape_273.setTransform(20,182.9);
	
		this.shape_274 = new cjs.Shape();
		this.shape_274.graphics.lf(["#999999","#333333"],[0,1],0,-168.9,0,24.2).s().p("AhTjRIABAAIB2g6IAxgWIAAH1IioBOg");
		this.shape_274.setTransform(48.5,178.8);
	
		this.shape_275 = new cjs.Shape();
		this.shape_275.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,153.7,28.4,153.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_275.setTransform(28.4,153.7);
	
		this.shape_276 = new cjs.Shape();
		this.shape_276.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168.9,-9.5,24.2).s().p("AjGD7IAAn1IACAAIAAABIGLAAIAAHzIAAABg");
		this.shape_276.setTransform(20,182.8);
	
		this.shape_277 = new cjs.Shape();
		this.shape_277.graphics.lf(["#999999","#333333"],[0,1],0,-168.7,0,24.4).s().p("AhTjTIABAAIB2g6IAxgWIAAH5IioBOg");
		this.shape_277.setTransform(48.5,178.6);
	
		this.shape_278 = new cjs.Shape();
		this.shape_278.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,153.4,28.4,153.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_278.setTransform(28.4,153.4);
	
		this.shape_279 = new cjs.Shape();
		this.shape_279.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168.7,-9.5,24.4).s().p("AjGD9IAAn5IACAAIAAABIGLAAIAAH3IAAABg");
		this.shape_279.setTransform(20,182.6);
	
		this.shape_280 = new cjs.Shape();
		this.shape_280.graphics.lf(["#999999","#333333"],[0,1],0,-168.6,0,24.5).s().p("AhTjVIABAAIB2g6IAxgVIAAH7IioBPg");
		this.shape_280.setTransform(48.5,178.4);
	
		this.shape_281 = new cjs.Shape();
		this.shape_281.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,153,28.4,153).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_281.setTransform(28.4,153);
	
		this.shape_282 = new cjs.Shape();
		this.shape_282.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168.6,-9.5,24.5).s().p("AjGD+IAAn8IACAAIAAABIGLAAIAAH7IAAAAg");
		this.shape_282.setTransform(20,182.4);
	
		this.shape_283 = new cjs.Shape();
		this.shape_283.graphics.lf(["#999999","#333333"],[0,1],0,-168.4,0,24.7).s().p("AhTjXIABAAIB2g5IAxgWIAAH/IioBOg");
		this.shape_283.setTransform(48.5,178.2);
	
		this.shape_284 = new cjs.Shape();
		this.shape_284.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,152.7,28.4,152.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_284.setTransform(28.4,152.7);
	
		this.shape_285 = new cjs.Shape();
		this.shape_285.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168.4,-9.5,24.7).s().p("AjGEAIAAn/IACAAIAAAAIGLAAIAAH+IAAABg");
		this.shape_285.setTransform(20,182.2);
	
		this.shape_286 = new cjs.Shape();
		this.shape_286.graphics.lf(["#999999","#333333"],[0,1],0,-168.2,0,24.9).s().p("AhTjZIABAAIB2g5IAxgWIAAIDIioBOg");
		this.shape_286.setTransform(48.5,178.1);
	
		this.shape_287 = new cjs.Shape();
		this.shape_287.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,152.3,28.4,152.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_287.setTransform(28.4,152.3);
	
		this.shape_288 = new cjs.Shape();
		this.shape_288.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168.2,-9.5,24.9).s().p("AjGECIAAoDIACAAIAAAAIGLAAIAAICIAAABg");
		this.shape_288.setTransform(20,182.1);
	
		this.shape_289 = new cjs.Shape();
		this.shape_289.graphics.lf(["#999999","#333333"],[0,1],0,-168,0,25.1).s().p("AhTjaIABAAIB2g6IAxgWIAAIHIioBOg");
		this.shape_289.setTransform(48.5,177.9);
	
		this.shape_290 = new cjs.Shape();
		this.shape_290.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,152,28.4,152).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_290.setTransform(28.4,152);
	
		this.shape_291 = new cjs.Shape();
		this.shape_291.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-168,-9.5,25.1).s().p("AjGEEIAAoHIACAAIAAABIGLAAIAAIFIAAABg");
		this.shape_291.setTransform(20,181.9);
	
		this.shape_292 = new cjs.Shape();
		this.shape_292.graphics.lf(["#999999","#333333"],[0,1],0,-167.9,0,25.2).s().p("AhTjcIABAAIB2g6IAxgWIAAIKIioBPg");
		this.shape_292.setTransform(48.5,177.7);
	
		this.shape_293 = new cjs.Shape();
		this.shape_293.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,151.6,28.4,151.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_293.setTransform(28.4,151.6);
	
		this.shape_294 = new cjs.Shape();
		this.shape_294.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167.9,-9.5,25.2).s().p("AjGEFIAAoJIACAAIAAAAIGLAAIAAIJIAAAAg");
		this.shape_294.setTransform(20,181.7);
	
		this.shape_295 = new cjs.Shape();
		this.shape_295.graphics.lf(["#999999","#333333"],[0,1],0,-167.7,0,25.4).s().p("AhTjeIABAAIB2g5IAxgWIAAINIioBOg");
		this.shape_295.setTransform(48.5,177.5);
	
		this.shape_296 = new cjs.Shape();
		this.shape_296.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,151.3,28.4,151.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_296.setTransform(28.4,151.3);
	
		this.shape_297 = new cjs.Shape();
		this.shape_297.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167.7,-9.5,25.4).s().p("AjGEHIAAoNIACAAIAAAAIGLAAIAAIMIAAABg");
		this.shape_297.setTransform(20,181.5);
	
		this.shape_298 = new cjs.Shape();
		this.shape_298.graphics.lf(["#999999","#333333"],[0,1],0,-167.5,0,25.6).s().p("AhTjfIABAAIB2g6IAxgWIAAIRIioBOg");
		this.shape_298.setTransform(48.5,177.4);
	
		this.shape_299 = new cjs.Shape();
		this.shape_299.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,150.9,28.4,150.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_299.setTransform(28.4,150.9);
	
		this.shape_300 = new cjs.Shape();
		this.shape_300.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167.5,-9.5,25.6).s().p("AjGEJIAAoRIACAAIAAABIGLAAIAAIPIAAABg");
		this.shape_300.setTransform(20,181.4);
	
		this.shape_301 = new cjs.Shape();
		this.shape_301.graphics.lf(["#999999","#333333"],[0,1],0,-167.3,0,25.8).s().p("AhTjhIABAAIB2g6IAxgWIAAIVIioBOg");
		this.shape_301.setTransform(48.5,177.2);
	
		this.shape_302 = new cjs.Shape();
		this.shape_302.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,150.6,28.4,150.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_302.setTransform(28.4,150.6);
	
		this.shape_303 = new cjs.Shape();
		this.shape_303.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167.3,-9.5,25.8).s().p("AjGELIAAoVIACAAIAAABIGLAAIAAITIAAABg");
		this.shape_303.setTransform(20,181.2);
	
		this.shape_304 = new cjs.Shape();
		this.shape_304.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167.2,-9.5,25.9).s().p("AjGEMIAAoYIACAAIAAABIGLAAIAAIXIAAAAg");
		this.shape_304.setTransform(20,181);
	
		this.shape_305 = new cjs.Shape();
		this.shape_305.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,150.2,28.4,150.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_305.setTransform(28.4,150.2);
	
		this.shape_306 = new cjs.Shape();
		this.shape_306.graphics.lf(["#999999","#333333"],[0,1],0,-167.2,0,25.9).s().p("AhTjjIABAAIB2g5IAxgXIAAIYIioBPg");
		this.shape_306.setTransform(48.5,177);
	
		this.shape_307 = new cjs.Shape();
		this.shape_307.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-167,-9.5,26.1).s().p("AjGEOIAAobIACAAIAAAAIGLAAIAAIaIAAABg");
		this.shape_307.setTransform(20,180.8);
	
		this.shape_308 = new cjs.Shape();
		this.shape_308.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,149.9,28.4,149.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_308.setTransform(28.4,149.9);
	
		this.shape_309 = new cjs.Shape();
		this.shape_309.graphics.lf(["#999999","#333333"],[0,1],0,-167,0,26.1).s().p("AhTjlIABAAIB2g5IAxgWIAAIbIioBOg");
		this.shape_309.setTransform(48.5,176.8);
	
		this.shape_310 = new cjs.Shape();
		this.shape_310.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-166.8,-9.5,26.3).s().p("AjGEQIAAofIACAAIAAAAIGLAAIAAIeIAAABg");
		this.shape_310.setTransform(20,180.7);
	
		this.shape_311 = new cjs.Shape();
		this.shape_311.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,149.5,28.4,149.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_311.setTransform(28.4,149.5);
	
		this.shape_312 = new cjs.Shape();
		this.shape_312.graphics.lf(["#999999","#333333"],[0,1],0,-166.8,0,26.3).s().p("AhTjnIABAAIB2g5IAxgWIAAIfIioBOg");
		this.shape_312.setTransform(48.5,176.7);
	
		this.shape_313 = new cjs.Shape();
		this.shape_313.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-166.6,-9.5,26.5).s().p("AjGESIAAojIACAAIAAABIGLAAIAAIhIAAABg");
		this.shape_313.setTransform(20,180.5);
	
		this.shape_314 = new cjs.Shape();
		this.shape_314.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,149.2,28.4,149.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_314.setTransform(28.4,149.2);
	
		this.shape_315 = new cjs.Shape();
		this.shape_315.graphics.lf(["#999999","#333333"],[0,1],0,-166.6,0,26.5).s().p("AhTjoIABAAIB2g6IAxgWIAAIjIioBOg");
		this.shape_315.setTransform(48.5,176.5);
	
		this.shape_316 = new cjs.Shape();
		this.shape_316.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-166.5,-9.5,26.6).s().p("AjGETIAAolIACAAIAAAAIGLAAIAAIlIAAAAg");
		this.shape_316.setTransform(20,180.3);
	
		this.shape_317 = new cjs.Shape();
		this.shape_317.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,148.8,28.4,148.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_317.setTransform(28.4,148.8);
	
		this.shape_318 = new cjs.Shape();
		this.shape_318.graphics.lf(["#999999","#333333"],[0,1],0,-166.5,0,26.6).s().p("AhTjqIABAAIB2g6IAxgVIAAIlIioBPg");
		this.shape_318.setTransform(48.5,176.3);
	
		this.shape_319 = new cjs.Shape();
		this.shape_319.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-166.3,-9.5,26.8).s().p("AjGEVIAAopIACAAIAAAAIGLAAIAAIoIAAABg");
		this.shape_319.setTransform(20,180.1);
	
		this.shape_320 = new cjs.Shape();
		this.shape_320.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,148.5,28.4,148.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_320.setTransform(28.4,148.5);
	
		this.shape_321 = new cjs.Shape();
		this.shape_321.graphics.lf(["#999999","#333333"],[0,1],0,-166.3,0,26.8).s().p("AhTjsIABAAIB2g5IAxgWIAAIpIioBOg");
		this.shape_321.setTransform(48.5,176.1);
	
		this.shape_322 = new cjs.Shape();
		this.shape_322.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-166.1,-9.5,27).s().p("AjGEXIAAotIACAAIAAAAIGLAAIAAIsIAAABg");
		this.shape_322.setTransform(20,180);
	
		this.shape_323 = new cjs.Shape();
		this.shape_323.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,148.1,28.4,148.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_323.setTransform(28.4,148.1);
	
		this.shape_324 = new cjs.Shape();
		this.shape_324.graphics.lf(["#999999","#333333"],[0,1],0,-166.1,0,27).s().p("AhTjuIABAAIB2g5IAxgWIAAItIioBOg");
		this.shape_324.setTransform(48.5,176);
	
		this.shape_325 = new cjs.Shape();
		this.shape_325.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.9,-9.5,27.2).s().p("AjGEZIAAoxIACAAIAAABIGLAAIAAIvIAAABg");
		this.shape_325.setTransform(20,179.8);
	
		this.shape_326 = new cjs.Shape();
		this.shape_326.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,147.8,28.4,147.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_326.setTransform(28.4,147.8);
	
		this.shape_327 = new cjs.Shape();
		this.shape_327.graphics.lf(["#999999","#333333"],[0,1],0,-165.9,0,27.2).s().p("AhTjvIABAAIB2g6IAxgWIAAIxIioBOg");
		this.shape_327.setTransform(48.5,175.8);
	
		this.shape_328 = new cjs.Shape();
		this.shape_328.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.8,-9.5,27.3).s().p("AjGEaIAAo0IACAAIAAABIGLAAIAAIzIAAAAg");
		this.shape_328.setTransform(20,179.6);
	
		this.shape_329 = new cjs.Shape();
		this.shape_329.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,147.4,28.4,147.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_329.setTransform(28.4,147.4);
	
		this.shape_330 = new cjs.Shape();
		this.shape_330.graphics.lf(["#999999","#333333"],[0,1],0,-165.8,0,27.3).s().p("AhTjxIABAAIB2g5IAxgXIAAI0IioBPg");
		this.shape_330.setTransform(48.5,175.6);
	
		this.shape_331 = new cjs.Shape();
		this.shape_331.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.6,-9.5,27.5).s().p("AjGEcIAAo3IACAAIAAAAIGLAAIAAI2IAAABg");
		this.shape_331.setTransform(20,179.4);
	
		this.shape_332 = new cjs.Shape();
		this.shape_332.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,147.1,28.4,147.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_332.setTransform(28.4,147.1);
	
		this.shape_333 = new cjs.Shape();
		this.shape_333.graphics.lf(["#999999","#333333"],[0,1],0,-165.6,0,27.5).s().p("AhTjzIABAAIB2g5IAxgWIAAI3IioBOg");
		this.shape_333.setTransform(48.5,175.4);
	
		this.shape_334 = new cjs.Shape();
		this.shape_334.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.4,-9.5,27.7).s().p("AjGEeIAAo7IACAAIAAABIGLAAIAAI5IAAABg");
		this.shape_334.setTransform(20,179.3);
	
		this.shape_335 = new cjs.Shape();
		this.shape_335.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,146.7,28.4,146.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_335.setTransform(28.4,146.7);
	
		this.shape_336 = new cjs.Shape();
		this.shape_336.graphics.lf(["#999999","#333333"],[0,1],0,-165.4,0,27.7).s().p("AhTj0IABAAIB2g6IAxgWIAAI7IioBOg");
		this.shape_336.setTransform(48.5,175.3);
	
		this.shape_337 = new cjs.Shape();
		this.shape_337.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.2,-9.5,27.9).s().p("AjGEgIAAo/IACAAIAAABIGLAAIAAI9IAAABg");
		this.shape_337.setTransform(20,179.1);
	
		this.shape_338 = new cjs.Shape();
		this.shape_338.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,146.4,28.4,146.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_338.setTransform(28.4,146.4);
	
		this.shape_339 = new cjs.Shape();
		this.shape_339.graphics.lf(["#999999","#333333"],[0,1],0,-165.2,0,27.9).s().p("AhTj2IABAAIB2g6IAxgWIAAI/IioBOg");
		this.shape_339.setTransform(48.5,175.1);
	
		this.shape_340 = new cjs.Shape();
		this.shape_340.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-165.1,-9.5,28).s().p("AjGEhIAApBIACAAIAAAAIGLAAIAAJAIAAABg");
		this.shape_340.setTransform(20,178.9);
	
		this.shape_341 = new cjs.Shape();
		this.shape_341.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,146.1,28.4,146.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_341.setTransform(28.4,146.1);
	
		this.shape_342 = new cjs.Shape();
		this.shape_342.graphics.lf(["#999999","#333333"],[0,1],0,-165.1,0,28).s().p("AhTj4IABAAIB2g5IAxgWIAAJBIioBOg");
		this.shape_342.setTransform(48.5,174.9);
	
		this.shape_343 = new cjs.Shape();
		this.shape_343.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164.9,-9.5,28.2).s().p("AjGEjIAApFIACAAIAAABIGLAAIAAJDIAAABg");
		this.shape_343.setTransform(20,178.8);
	
		this.shape_344 = new cjs.Shape();
		this.shape_344.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,145.7,28.4,145.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_344.setTransform(28.4,145.7);
	
		this.shape_345 = new cjs.Shape();
		this.shape_345.graphics.lf(["#999999","#333333"],[0,1],0,-164.9,0,28.2).s().p("AhTj5IABAAIB2g6IAxgWIAAJFIioBOg");
		this.shape_345.setTransform(48.5,174.8);
	
		this.shape_346 = new cjs.Shape();
		this.shape_346.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164.7,-9.5,28.4).s().p("AjGElIAApJIACAAIAAABIGLAAIAAJHIAAABg");
		this.shape_346.setTransform(20,178.6);
	
		this.shape_347 = new cjs.Shape();
		this.shape_347.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,145.4,28.4,145.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_347.setTransform(28.4,145.4);
	
		this.shape_348 = new cjs.Shape();
		this.shape_348.graphics.lf(["#999999","#333333"],[0,1],0,-164.7,0,28.4).s().p("AhTj7IABAAIB2g6IAxgWIAAJJIioBOg");
		this.shape_348.setTransform(48.5,174.6);
	
		this.shape_349 = new cjs.Shape();
		this.shape_349.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164.6,-9.5,28.5).s().p("AjGEmIAApMIACAAIAAABIGLAAIAAJLIAAAAg");
		this.shape_349.setTransform(20,178.4);
	
		this.shape_350 = new cjs.Shape();
		this.shape_350.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,145,28.4,145).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_350.setTransform(28.4,145);
	
		this.shape_351 = new cjs.Shape();
		this.shape_351.graphics.lf(["#999999","#333333"],[0,1],0,-164.6,0,28.5).s().p("AhTj9IABAAIB2g6IAxgVIAAJLIioBPg");
		this.shape_351.setTransform(48.5,174.4);
	
		this.shape_352 = new cjs.Shape();
		this.shape_352.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164.4,-9.5,28.7).s().p("AjGEoIAApPIACAAIAAAAIGLAAIAAJOIAAABg");
		this.shape_352.setTransform(20,178.2);
	
		this.shape_353 = new cjs.Shape();
		this.shape_353.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,144.7,28.4,144.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_353.setTransform(28.4,144.7);
	
		this.shape_354 = new cjs.Shape();
		this.shape_354.graphics.lf(["#999999","#333333"],[0,1],0,-164.4,0,28.7).s().p("AhTj/IABAAIB2g5IAxgWIAAJPIioBOg");
		this.shape_354.setTransform(48.5,174.2);
	
		this.shape_355 = new cjs.Shape();
		this.shape_355.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164.2,-9.5,28.9).s().p("AjGEqIAApTIACAAIAAAAIGLAAIAAJSIAAABg");
		this.shape_355.setTransform(20,178.1);
	
		this.shape_356 = new cjs.Shape();
		this.shape_356.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,144.3,28.4,144.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_356.setTransform(28.4,144.3);
	
		this.shape_357 = new cjs.Shape();
		this.shape_357.graphics.lf(["#999999","#333333"],[0,1],0,-164.2,0,28.9).s().p("AhTkBIABAAIB2g5IAxgWIAAJTIioBOg");
		this.shape_357.setTransform(48.5,174.1);
	
		this.shape_358 = new cjs.Shape();
		this.shape_358.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-164,-9.5,29.1).s().p("AjGEsIAApXIACAAIAAABIGLAAIAAJVIAAABg");
		this.shape_358.setTransform(20,177.9);
	
		this.shape_359 = new cjs.Shape();
		this.shape_359.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,144,28.4,144).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_359.setTransform(28.4,144);
	
		this.shape_360 = new cjs.Shape();
		this.shape_360.graphics.lf(["#999999","#333333"],[0,1],0,-164,0,29.1).s().p("AhTkCIABAAIB2g6IAxgWIAAJXIioBOg");
		this.shape_360.setTransform(48.5,173.9);
	
		this.shape_361 = new cjs.Shape();
		this.shape_361.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163.9,-9.5,29.2).s().p("AjGEtIAApZIACAAIAAAAIGLAAIAAJZIAAAAg");
		this.shape_361.setTransform(20,177.7);
	
		this.shape_362 = new cjs.Shape();
		this.shape_362.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,143.6,28.4,143.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_362.setTransform(28.4,143.6);
	
		this.shape_363 = new cjs.Shape();
		this.shape_363.graphics.lf(["#999999","#333333"],[0,1],0,-163.9,0,29.2).s().p("AhTkEIABAAIB2g5IAxgXIAAJaIioBPg");
		this.shape_363.setTransform(48.5,173.7);
	
		this.shape_364 = new cjs.Shape();
		this.shape_364.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163.7,-9.5,29.4).s().p("AjGEvIAApdIACAAIAAAAIGLAAIAAJcIAAABg");
		this.shape_364.setTransform(20,177.5);
	
		this.shape_365 = new cjs.Shape();
		this.shape_365.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,143.3,28.4,143.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_365.setTransform(28.4,143.3);
	
		this.shape_366 = new cjs.Shape();
		this.shape_366.graphics.lf(["#999999","#333333"],[0,1],0,-163.7,0,29.4).s().p("AhTkGIABAAIB2g5IAxgWIAAJdIioBOg");
		this.shape_366.setTransform(48.5,173.5);
	
		this.shape_367 = new cjs.Shape();
		this.shape_367.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163.5,-9.5,29.6).s().p("AjGExIAAphIACAAIAAABIGLAAIAAJfIAAABg");
		this.shape_367.setTransform(20,177.4);
	
		this.shape_368 = new cjs.Shape();
		this.shape_368.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,142.9,28.4,142.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_368.setTransform(28.4,142.9);
	
		this.shape_369 = new cjs.Shape();
		this.shape_369.graphics.lf(["#999999","#333333"],[0,1],0,-163.5,0,29.6).s().p("AhTkHIABAAIB2g6IAxgWIAAJhIioBOg");
		this.shape_369.setTransform(48.5,173.4);
	
		this.shape_370 = new cjs.Shape();
		this.shape_370.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163.3,-9.5,29.8).s().p("AjGEzIAAplIACAAIAAABIGLAAIAAJjIAAABg");
		this.shape_370.setTransform(20,177.2);
	
		this.shape_371 = new cjs.Shape();
		this.shape_371.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,142.6,28.4,142.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_371.setTransform(28.4,142.6);
	
		this.shape_372 = new cjs.Shape();
		this.shape_372.graphics.lf(["#999999","#333333"],[0,1],0,-163.3,0,29.8).s().p("AhTkJIABAAIB2g6IAxgWIAAJlIioBOg");
		this.shape_372.setTransform(48.5,173.2);
	
		this.shape_373 = new cjs.Shape();
		this.shape_373.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163.2,-9.5,29.9).s().p("AjGE0IAApoIACAAIAAABIGLAAIAAJnIAAAAg");
		this.shape_373.setTransform(20,177);
	
		this.shape_374 = new cjs.Shape();
		this.shape_374.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,142.2,28.4,142.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_374.setTransform(28.4,142.2);
	
		this.shape_375 = new cjs.Shape();
		this.shape_375.graphics.lf(["#999999","#333333"],[0,1],0,-163.2,0,29.9).s().p("AhTkLIABAAIB2g6IAxgVIAAJnIioBPg");
		this.shape_375.setTransform(48.5,173);
	
		this.shape_376 = new cjs.Shape();
		this.shape_376.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-163,-9.5,30.1).s().p("AjGE2IAAprIACAAIAAAAIGLAAIAAJqIAAABg");
		this.shape_376.setTransform(20,176.8);
	
		this.shape_377 = new cjs.Shape();
		this.shape_377.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,141.9,28.4,141.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_377.setTransform(28.4,141.9);
	
		this.shape_378 = new cjs.Shape();
		this.shape_378.graphics.lf(["#999999","#333333"],[0,1],0,-163,0,30.1).s().p("AhTkNIABAAIB2g5IAxgWIAAJrIioBOg");
		this.shape_378.setTransform(48.5,172.8);
	
		this.shape_379 = new cjs.Shape();
		this.shape_379.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-162.8,-9.5,30.3).s().p("AjGE4IAApvIACAAIAAAAIGLAAIAAJuIAAABg");
		this.shape_379.setTransform(20,176.7);
	
		this.shape_380 = new cjs.Shape();
		this.shape_380.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,141.5,28.4,141.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_380.setTransform(28.4,141.5);
	
		this.shape_381 = new cjs.Shape();
		this.shape_381.graphics.lf(["#999999","#333333"],[0,1],0,-162.8,0,30.3).s().p("AhTkPIABAAIB2g5IAxgWIAAJvIioBOg");
		this.shape_381.setTransform(48.5,172.7);
	
		this.shape_382 = new cjs.Shape();
		this.shape_382.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-162.6,-9.5,30.5).s().p("AjGE6IAApzIACAAIAAABIGLAAIAAJxIAAABg");
		this.shape_382.setTransform(20,176.5);
	
		this.shape_383 = new cjs.Shape();
		this.shape_383.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,141.2,28.4,141.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_383.setTransform(28.4,141.2);
	
		this.shape_384 = new cjs.Shape();
		this.shape_384.graphics.lf(["#999999","#333333"],[0,1],0,-162.6,0,30.5).s().p("AhTkQIABAAIB2g6IAxgWIAAJzIioBOg");
		this.shape_384.setTransform(48.5,172.5);
	
		this.shape_385 = new cjs.Shape();
		this.shape_385.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-162.5,-9.5,30.6).s().p("AjGE7IAAp1IACAAIAAAAIGLAAIAAJ1IAAAAg");
		this.shape_385.setTransform(20,176.3);
	
		this.shape_386 = new cjs.Shape();
		this.shape_386.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,140.8,28.4,140.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_386.setTransform(28.4,140.8);
	
		this.shape_387 = new cjs.Shape();
		this.shape_387.graphics.lf(["#999999","#333333"],[0,1],0,-162.5,0,30.6).s().p("AhTkSIABAAIB2g6IAxgVIAAJ1IioBPg");
		this.shape_387.setTransform(48.5,172.3);
	
		this.shape_388 = new cjs.Shape();
		this.shape_388.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-162.3,-9.5,30.8).s().p("AjGE9IAAp5IACAAIAAAAIGLAAIAAJ4IAAABg");
		this.shape_388.setTransform(20,176.1);
	
		this.shape_389 = new cjs.Shape();
		this.shape_389.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,140.5,28.4,140.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_389.setTransform(28.4,140.5);
	
		this.shape_390 = new cjs.Shape();
		this.shape_390.graphics.lf(["#999999","#333333"],[0,1],0,-162.3,0,30.8).s().p("AhTkUIABAAIB2g5IAxgWIAAJ5IioBOg");
		this.shape_390.setTransform(48.5,172.1);
	
		this.shape_391 = new cjs.Shape();
		this.shape_391.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-162.1,-9.5,31).s().p("AjGE/IAAp9IACAAIAAABIGLAAIAAJ7IAAABg");
		this.shape_391.setTransform(20,176);
	
		this.shape_392 = new cjs.Shape();
		this.shape_392.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,140.1,28.4,140.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_392.setTransform(28.4,140.1);
	
		this.shape_393 = new cjs.Shape();
		this.shape_393.graphics.lf(["#999999","#333333"],[0,1],0,-162.1,0,31).s().p("AhTkVIABAAIB2g6IAxgWIAAJ9IioBOg");
		this.shape_393.setTransform(48.5,172);
	
		this.shape_394 = new cjs.Shape();
		this.shape_394.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.9,-9.5,31.2).s().p("AjGFBIAAqBIACAAIAAABIGLAAIAAJ/IAAABg");
		this.shape_394.setTransform(20,175.8);
	
		this.shape_395 = new cjs.Shape();
		this.shape_395.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,139.8,28.4,139.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_395.setTransform(28.4,139.8);
	
		this.shape_396 = new cjs.Shape();
		this.shape_396.graphics.lf(["#999999","#333333"],[0,1],0,-161.9,0,31.2).s().p("AhTkXIABAAIB2g6IAxgWIAAKBIioBOg");
		this.shape_396.setTransform(48.5,171.8);
	
		this.shape_397 = new cjs.Shape();
		this.shape_397.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.8,-9.5,31.3).s().p("AjGFCIAAqEIACAAIAAABIGLAAIAAKDIAAAAg");
		this.shape_397.setTransform(20,175.6);
	
		this.shape_398 = new cjs.Shape();
		this.shape_398.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,139.4,28.4,139.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_398.setTransform(28.4,139.4);
	
		this.shape_399 = new cjs.Shape();
		this.shape_399.graphics.lf(["#999999","#333333"],[0,1],0,-161.8,0,31.3).s().p("AhTkZIABAAIB2g5IAxgXIAAKEIioBPg");
		this.shape_399.setTransform(48.5,171.6);
	
		this.shape_400 = new cjs.Shape();
		this.shape_400.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.6,-9.5,31.5).s().p("AjGFEIAAqHIACAAIAAAAIGLAAIAAKGIAAABg");
		this.shape_400.setTransform(20,175.4);
	
		this.shape_401 = new cjs.Shape();
		this.shape_401.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,139.1,28.4,139.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_401.setTransform(28.4,139.1);
	
		this.shape_402 = new cjs.Shape();
		this.shape_402.graphics.lf(["#999999","#333333"],[0,1],0,-161.6,0,31.5).s().p("AhTkbIABAAIB2g5IAxgWIAAKHIioBOg");
		this.shape_402.setTransform(48.5,171.4);
	
		this.shape_403 = new cjs.Shape();
		this.shape_403.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.4,-9.5,31.7).s().p("AjGFGIAAqLIACAAIAAAAIGLAAIAAKKIAAABg");
		this.shape_403.setTransform(20,175.3);
	
		this.shape_404 = new cjs.Shape();
		this.shape_404.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,138.7,28.4,138.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_404.setTransform(28.4,138.7);
	
		this.shape_405 = new cjs.Shape();
		this.shape_405.graphics.lf(["#999999","#333333"],[0,1],0,-161.4,0,31.7).s().p("AhTkdIABAAIB2g5IAxgWIAAKLIioBOg");
		this.shape_405.setTransform(48.5,171.3);
	
		this.shape_406 = new cjs.Shape();
		this.shape_406.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.2,-9.5,31.9).s().p("AjGFIIAAqPIACAAIAAABIGLAAIAAKNIAAABg");
		this.shape_406.setTransform(20,175.1);
	
		this.shape_407 = new cjs.Shape();
		this.shape_407.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,138.4,28.4,138.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_407.setTransform(28.4,138.4);
	
		this.shape_408 = new cjs.Shape();
		this.shape_408.graphics.lf(["#999999","#333333"],[0,1],0,-161.2,0,31.9).s().p("AhTkeIABAAIB2g6IAxgWIAAKPIioBOg");
		this.shape_408.setTransform(48.5,171.1);
	
		this.shape_409 = new cjs.Shape();
		this.shape_409.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-161.1,-9.5,32).s().p("AjGFJIAAqRIACAAIAAAAIGLAAIAAKRIAAAAg");
		this.shape_409.setTransform(20,174.9);
	
		this.shape_410 = new cjs.Shape();
		this.shape_410.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,138,28.4,138).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_410.setTransform(28.4,138);
	
		this.shape_411 = new cjs.Shape();
		this.shape_411.graphics.lf(["#999999","#333333"],[0,1],0,-161.1,0,32).s().p("AhTkgIABAAIB2g6IAxgVIAAKRIioBPg");
		this.shape_411.setTransform(48.5,170.9);
	
		this.shape_412 = new cjs.Shape();
		this.shape_412.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160.9,-9.5,32.2).s().p("AjGFLIAAqVIACAAIAAAAIGLAAIAAKUIAAABg");
		this.shape_412.setTransform(20,174.7);
	
		this.shape_413 = new cjs.Shape();
		this.shape_413.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,137.7,28.4,137.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_413.setTransform(28.4,137.7);
	
		this.shape_414 = new cjs.Shape();
		this.shape_414.graphics.lf(["#999999","#333333"],[0,1],0,-160.9,0,32.2).s().p("AhTkiIABAAIB2g5IAxgWIAAKVIioBOg");
		this.shape_414.setTransform(48.5,170.7);
	
		this.shape_415 = new cjs.Shape();
		this.shape_415.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160.7,-9.5,32.4).s().p("AjGFNIAAqZIACAAIAAABIGLAAIAAKXIAAABg");
		this.shape_415.setTransform(20,174.6);
	
		this.shape_416 = new cjs.Shape();
		this.shape_416.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,137.4,28.4,137.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_416.setTransform(28.4,137.4);
	
		this.shape_417 = new cjs.Shape();
		this.shape_417.graphics.lf(["#999999","#333333"],[0,1],0,-160.7,0,32.4).s().p("AhTkjIABAAIB2g6IAxgWIAAKZIioBOg");
		this.shape_417.setTransform(48.5,170.6);
	
		this.shape_418 = new cjs.Shape();
		this.shape_418.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160.6,-9.5,32.5).s().p("AjGFOIAAqbIACAAIAAAAIGLAAIAAKbIAAAAg");
		this.shape_418.setTransform(20,174.4);
	
		this.shape_419 = new cjs.Shape();
		this.shape_419.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,137,28.4,137).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_419.setTransform(28.4,137);
	
		this.shape_420 = new cjs.Shape();
		this.shape_420.graphics.lf(["#999999","#333333"],[0,1],0,-160.6,0,32.5).s().p("AhTklIABAAIB2g6IAxgVIAAKbIioBPg");
		this.shape_420.setTransform(48.5,170.4);
	
		this.shape_421 = new cjs.Shape();
		this.shape_421.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160.4,-9.5,32.7).s().p("AjGFQIAAqfIACAAIAAAAIGLAAIAAKeIAAABg");
		this.shape_421.setTransform(20,174.2);
	
		this.shape_422 = new cjs.Shape();
		this.shape_422.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,136.7,28.4,136.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_422.setTransform(28.4,136.7);
	
		this.shape_423 = new cjs.Shape();
		this.shape_423.graphics.lf(["#999999","#333333"],[0,1],0,-160.4,0,32.7).s().p("AhTknIABAAIB2g5IAxgWIAAKfIioBOg");
		this.shape_423.setTransform(48.5,170.2);
	
		this.shape_424 = new cjs.Shape();
		this.shape_424.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160.2,-9.5,32.9).s().p("AjGFSIAAqjIACAAIAAAAIGLAAIAAKiIAAABg");
		this.shape_424.setTransform(20,174.1);
	
		this.shape_425 = new cjs.Shape();
		this.shape_425.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,136.3,28.4,136.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_425.setTransform(28.4,136.3);
	
		this.shape_426 = new cjs.Shape();
		this.shape_426.graphics.lf(["#999999","#333333"],[0,1],0,-160.2,0,32.9).s().p("AhTkpIABAAIB2g5IAxgWIAAKjIioBOg");
		this.shape_426.setTransform(48.5,170.1);
	
		this.shape_427 = new cjs.Shape();
		this.shape_427.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-160,-9.5,33.1).s().p("AjGFUIAAqnIACAAIAAABIGLAAIAAKlIAAABg");
		this.shape_427.setTransform(20,173.9);
	
		this.shape_428 = new cjs.Shape();
		this.shape_428.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,136,28.4,136).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_428.setTransform(28.4,136);
	
		this.shape_429 = new cjs.Shape();
		this.shape_429.graphics.lf(["#999999","#333333"],[0,1],0,-160,0,33.1).s().p("AhTkqIABAAIB2g6IAxgWIAAKnIioBOg");
		this.shape_429.setTransform(48.5,169.9);
	
		this.shape_430 = new cjs.Shape();
		this.shape_430.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159.9,-9.5,33.2).s().p("AjGFVIAAqpIACAAIAAAAIGLAAIAAKpIAAAAg");
		this.shape_430.setTransform(20,173.7);
	
		this.shape_431 = new cjs.Shape();
		this.shape_431.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,135.6,28.4,135.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_431.setTransform(28.4,135.6);
	
		this.shape_432 = new cjs.Shape();
		this.shape_432.graphics.lf(["#999999","#333333"],[0,1],0,-159.9,0,33.2).s().p("AhTksIABAAIB2g5IAxgXIAAKqIioBPg");
		this.shape_432.setTransform(48.5,169.7);
	
		this.shape_433 = new cjs.Shape();
		this.shape_433.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159.7,-9.5,33.4).s().p("AjGFXIAAqtIACAAIAAAAIGLAAIAAKsIAAABg");
		this.shape_433.setTransform(20,173.5);
	
		this.shape_434 = new cjs.Shape();
		this.shape_434.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,135.3,28.4,135.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_434.setTransform(28.4,135.3);
	
		this.shape_435 = new cjs.Shape();
		this.shape_435.graphics.lf(["#999999","#333333"],[0,1],0,-159.7,0,33.4).s().p("AhTkuIABAAIB2g5IAxgWIAAKtIioBOg");
		this.shape_435.setTransform(48.5,169.5);
	
		this.shape_436 = new cjs.Shape();
		this.shape_436.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159.5,-9.5,33.6).s().p("AjGFZIAAqxIACAAIAAABIGLAAIAAKvIAAABg");
		this.shape_436.setTransform(20,173.4);
	
		this.shape_437 = new cjs.Shape();
		this.shape_437.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,134.9,28.4,134.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_437.setTransform(28.4,134.9);
	
		this.shape_438 = new cjs.Shape();
		this.shape_438.graphics.lf(["#999999","#333333"],[0,1],0,-159.5,0,33.6).s().p("AhTkvIABAAIB2g6IAxgWIAAKxIioBOg");
		this.shape_438.setTransform(48.5,169.4);
	
		this.shape_439 = new cjs.Shape();
		this.shape_439.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159.3,-9.5,33.8).s().p("AjGFbIAAq1IACAAIAAABIGLAAIAAKzIAAABg");
		this.shape_439.setTransform(20,173.2);
	
		this.shape_440 = new cjs.Shape();
		this.shape_440.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,134.6,28.4,134.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_440.setTransform(28.4,134.6);
	
		this.shape_441 = new cjs.Shape();
		this.shape_441.graphics.lf(["#999999","#333333"],[0,1],0,-159.3,0,33.8).s().p("AhTkxIABAAIB2g6IAxgWIAAK1IioBOg");
		this.shape_441.setTransform(48.5,169.2);
	
		this.shape_442 = new cjs.Shape();
		this.shape_442.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159.2,-9.5,33.9).s().p("AjGFcIAAq4IACAAIAAABIGLAAIAAK3IAAAAg");
		this.shape_442.setTransform(20,173);
	
		this.shape_443 = new cjs.Shape();
		this.shape_443.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,134.2,28.4,134.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_443.setTransform(28.4,134.2);
	
		this.shape_444 = new cjs.Shape();
		this.shape_444.graphics.lf(["#999999","#333333"],[0,1],0,-159.2,0,33.9).s().p("AhTkzIABAAIB2g6IAxgVIAAK3IioBPg");
		this.shape_444.setTransform(48.5,169);
	
		this.shape_445 = new cjs.Shape();
		this.shape_445.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-159,-9.5,34.1).s().p("AjGFeIAAq7IACAAIAAAAIGLAAIAAK6IAAABg");
		this.shape_445.setTransform(20,172.8);
	
		this.shape_446 = new cjs.Shape();
		this.shape_446.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,133.9,28.4,133.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_446.setTransform(28.4,133.9);
	
		this.shape_447 = new cjs.Shape();
		this.shape_447.graphics.lf(["#999999","#333333"],[0,1],0,-159,0,34.1).s().p("AhTk1IABAAIB2g5IAxgWIAAK7IioBOg");
		this.shape_447.setTransform(48.5,168.8);
	
		this.shape_448 = new cjs.Shape();
		this.shape_448.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-158.8,-9.5,34.3).s().p("AjGFgIAAq/IACAAIAAAAIGLAAIAAK+IAAABg");
		this.shape_448.setTransform(20,172.7);
	
		this.shape_449 = new cjs.Shape();
		this.shape_449.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,133.5,28.4,133.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_449.setTransform(28.4,133.5);
	
		this.shape_450 = new cjs.Shape();
		this.shape_450.graphics.lf(["#999999","#333333"],[0,1],0,-158.8,0,34.3).s().p("AhTk3IABAAIB2g5IAxgWIAAK/IioBOg");
		this.shape_450.setTransform(48.5,168.7);
	
		this.shape_451 = new cjs.Shape();
		this.shape_451.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-158.6,-9.5,34.5).s().p("AjGFiIAArDIACAAIAAABIGLAAIAALBIAAABg");
		this.shape_451.setTransform(20,172.5);
	
		this.shape_452 = new cjs.Shape();
		this.shape_452.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,133.2,28.4,133.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_452.setTransform(28.4,133.2);
	
		this.shape_453 = new cjs.Shape();
		this.shape_453.graphics.lf(["#999999","#333333"],[0,1],0,-158.6,0,34.5).s().p("AhTk4IABAAIB2g6IAxgWIAALDIioBOg");
		this.shape_453.setTransform(48.5,168.5);
	
		this.shape_454 = new cjs.Shape();
		this.shape_454.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-158.5,-9.5,34.6).s().p("AjGFjIAArFIACAAIAAAAIGLAAIAALFIAAAAg");
		this.shape_454.setTransform(20,172.3);
	
		this.shape_455 = new cjs.Shape();
		this.shape_455.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,132.8,28.4,132.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_455.setTransform(28.4,132.8);
	
		this.shape_456 = new cjs.Shape();
		this.shape_456.graphics.lf(["#999999","#333333"],[0,1],0,-158.5,0,34.6).s().p("AhTk6IABAAIB2g5IAxgXIAALGIioBPg");
		this.shape_456.setTransform(48.5,168.3);
	
		this.shape_457 = new cjs.Shape();
		this.shape_457.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-158.3,-9.5,34.8).s().p("AjGFlIAArJIACAAIAAAAIGLAAIAALIIAAABg");
		this.shape_457.setTransform(20,172.1);
	
		this.shape_458 = new cjs.Shape();
		this.shape_458.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,132.5,28.4,132.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_458.setTransform(28.4,132.5);
	
		this.shape_459 = new cjs.Shape();
		this.shape_459.graphics.lf(["#999999","#333333"],[0,1],0,-158.3,0,34.8).s().p("AhTk8IABAAIB2g5IAxgWIAALJIioBOg");
		this.shape_459.setTransform(48.5,168.1);
	
		this.shape_460 = new cjs.Shape();
		this.shape_460.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-158.1,-9.5,35).s().p("AjGFnIAArNIACAAIAAABIGLAAIAALLIAAABg");
		this.shape_460.setTransform(20,172);
	
		this.shape_461 = new cjs.Shape();
		this.shape_461.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,132.1,28.4,132.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_461.setTransform(28.4,132.1);
	
		this.shape_462 = new cjs.Shape();
		this.shape_462.graphics.lf(["#999999","#333333"],[0,1],0,-158.1,0,35).s().p("AhTk9IABAAIB2g6IAxgWIAALNIioBOg");
		this.shape_462.setTransform(48.5,168);
	
		this.shape_463 = new cjs.Shape();
		this.shape_463.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.9,-9.5,35.2).s().p("AjGFpIAArRIACAAIAAABIGLAAIAALPIAAABg");
		this.shape_463.setTransform(20,171.8);
	
		this.shape_464 = new cjs.Shape();
		this.shape_464.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,131.8,28.4,131.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_464.setTransform(28.4,131.8);
	
		this.shape_465 = new cjs.Shape();
		this.shape_465.graphics.lf(["#999999","#333333"],[0,1],0,-157.9,0,35.2).s().p("AhTk/IABAAIB2g6IAxgWIAALRIioBOg");
		this.shape_465.setTransform(48.5,167.8);
	
		this.shape_466 = new cjs.Shape();
		this.shape_466.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.8,-9.5,35.3).s().p("AjGFqIAArUIACAAIAAABIGLAAIAALTIAAAAg");
		this.shape_466.setTransform(20,171.6);
	
		this.shape_467 = new cjs.Shape();
		this.shape_467.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,131.4,28.4,131.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_467.setTransform(28.4,131.4);
	
		this.shape_468 = new cjs.Shape();
		this.shape_468.graphics.lf(["#999999","#333333"],[0,1],0,-157.8,0,35.3).s().p("AhTlBIABAAIB2g6IAxgVIAALTIioBPg");
		this.shape_468.setTransform(48.5,167.6);
	
		this.shape_469 = new cjs.Shape();
		this.shape_469.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.6,-9.5,35.5).s().p("AjGFsIAArXIACAAIAAAAIGLAAIAALWIAAABg");
		this.shape_469.setTransform(20,171.4);
	
		this.shape_470 = new cjs.Shape();
		this.shape_470.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,131.1,28.4,131.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_470.setTransform(28.4,131.1);
	
		this.shape_471 = new cjs.Shape();
		this.shape_471.graphics.lf(["#999999","#333333"],[0,1],0,-157.6,0,35.5).s().p("AhTlDIABAAIB2g5IAxgWIAALXIioBOg");
		this.shape_471.setTransform(48.5,167.4);
	
		this.shape_472 = new cjs.Shape();
		this.shape_472.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.4,-9.5,35.7).s().p("AjGFuIAArbIACAAIAAAAIGLAAIAALaIAAABg");
		this.shape_472.setTransform(20,171.3);
	
		this.shape_473 = new cjs.Shape();
		this.shape_473.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,130.7,28.4,130.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_473.setTransform(28.4,130.7);
	
		this.shape_474 = new cjs.Shape();
		this.shape_474.graphics.lf(["#999999","#333333"],[0,1],0,-157.4,0,35.7).s().p("AhTlFIABAAIB2g5IAxgWIAALbIioBOg");
		this.shape_474.setTransform(48.5,167.3);
	
		this.shape_475 = new cjs.Shape();
		this.shape_475.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.2,-9.5,35.9).s().p("AjGFwIAArfIACAAIAAABIGLAAIAALdIAAABg");
		this.shape_475.setTransform(20,171.1);
	
		this.shape_476 = new cjs.Shape();
		this.shape_476.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,130.4,28.4,130.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_476.setTransform(28.4,130.4);
	
		this.shape_477 = new cjs.Shape();
		this.shape_477.graphics.lf(["#999999","#333333"],[0,1],0,-157.2,0,35.9).s().p("AhTlGIABAAIB2g6IAxgWIAALfIioBOg");
		this.shape_477.setTransform(48.5,167.1);
	
		this.shape_478 = new cjs.Shape();
		this.shape_478.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-157.1,-9.5,36).s().p("AjGFxIAArhIACAAIAAAAIGLAAIAALhIAAAAg");
		this.shape_478.setTransform(20,170.9);
	
		this.shape_479 = new cjs.Shape();
		this.shape_479.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,130,28.4,130).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_479.setTransform(28.4,130);
	
		this.shape_480 = new cjs.Shape();
		this.shape_480.graphics.lf(["#999999","#333333"],[0,1],0,-157.1,0,36).s().p("AhTlIIABAAIB2g6IAxgWIAALiIioBPg");
		this.shape_480.setTransform(48.5,166.9);
	
		this.shape_481 = new cjs.Shape();
		this.shape_481.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156.9,-9.5,36.2).s().p("AjGFzIAArlIACAAIAAAAIGLAAIAALkIAAABg");
		this.shape_481.setTransform(20,170.7);
	
		this.shape_482 = new cjs.Shape();
		this.shape_482.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,129.7,28.4,129.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_482.setTransform(28.4,129.7);
	
		this.shape_483 = new cjs.Shape();
		this.shape_483.graphics.lf(["#999999","#333333"],[0,1],0,-156.9,0,36.2).s().p("AhTlKIABAAIB2g5IAxgWIAALlIioBOg");
		this.shape_483.setTransform(48.5,166.7);
	
		this.shape_484 = new cjs.Shape();
		this.shape_484.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156.7,-9.5,36.4).s().p("AjGF1IAArpIACAAIAAABIGLAAIAALnIAAABg");
		this.shape_484.setTransform(20,170.6);
	
		this.shape_485 = new cjs.Shape();
		this.shape_485.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,129.3,28.4,129.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_485.setTransform(28.4,129.3);
	
		this.shape_486 = new cjs.Shape();
		this.shape_486.graphics.lf(["#999999","#333333"],[0,1],0,-156.7,0,36.4).s().p("AhTlLIABAAIB2g6IAxgWIAALpIioBOg");
		this.shape_486.setTransform(48.5,166.6);
	
		this.shape_487 = new cjs.Shape();
		this.shape_487.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156.5,-9.5,36.6).s().p("AjGF3IAArtIACAAIAAABIGLAAIAALrIAAABg");
		this.shape_487.setTransform(20,170.4);
	
		this.shape_488 = new cjs.Shape();
		this.shape_488.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,129,28.4,129).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_488.setTransform(28.4,129);
	
		this.shape_489 = new cjs.Shape();
		this.shape_489.graphics.lf(["#999999","#333333"],[0,1],0,-156.5,0,36.6).s().p("AhTlNIABAAIB2g6IAxgWIAALtIioBOg");
		this.shape_489.setTransform(48.5,166.4);
	
		this.shape_490 = new cjs.Shape();
		this.shape_490.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156.4,-9.5,36.7).s().p("AjGF4IAArvIACAAIAAAAIGLAAIAALuIAAABg");
		this.shape_490.setTransform(20,170.2);
	
		this.shape_491 = new cjs.Shape();
		this.shape_491.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,128.7,28.4,128.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_491.setTransform(28.4,128.7);
	
		this.shape_492 = new cjs.Shape();
		this.shape_492.graphics.lf(["#999999","#333333"],[0,1],0,-156.4,0,36.7).s().p("AhTlPIABAAIB2g5IAxgWIAALvIioBOg");
		this.shape_492.setTransform(48.5,166.2);
	
		this.shape_493 = new cjs.Shape();
		this.shape_493.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156.2,-9.5,36.9).s().p("AjGF6IAArzIACAAIAAAAIGLAAIAALyIAAABg");
		this.shape_493.setTransform(20,170.1);
	
		this.shape_494 = new cjs.Shape();
		this.shape_494.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,128.3,28.4,128.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_494.setTransform(28.4,128.3);
	
		this.shape_495 = new cjs.Shape();
		this.shape_495.graphics.lf(["#999999","#333333"],[0,1],0,-156.2,0,36.9).s().p("AhTlRIABAAIB2g5IAxgWIAALzIioBOg");
		this.shape_495.setTransform(48.5,166.1);
	
		this.shape_496 = new cjs.Shape();
		this.shape_496.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-156,-9.5,37.1).s().p("AjGF8IAAr3IACAAIAAABIGLAAIAAL1IAAABg");
		this.shape_496.setTransform(20,169.9);
	
		this.shape_497 = new cjs.Shape();
		this.shape_497.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,128,28.4,128).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_497.setTransform(28.4,128);
	
		this.shape_498 = new cjs.Shape();
		this.shape_498.graphics.lf(["#999999","#333333"],[0,1],0,-156,0,37.1).s().p("AhTlSIABAAIB2g6IAxgWIAAL3IioBOg");
		this.shape_498.setTransform(48.5,165.9);
	
		this.shape_499 = new cjs.Shape();
		this.shape_499.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155.9,-9.5,37.2).s().p("AjGF9IAAr6IACAAIAAABIGLAAIAAL5IAAAAg");
		this.shape_499.setTransform(20,169.7);
	
		this.shape_500 = new cjs.Shape();
		this.shape_500.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,127.6,28.4,127.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_500.setTransform(28.4,127.6);
	
		this.shape_501 = new cjs.Shape();
		this.shape_501.graphics.lf(["#999999","#333333"],[0,1],0,-155.9,0,37.2).s().p("AhTlUIABAAIB2g5IAxgXIAAL6IioBPg");
		this.shape_501.setTransform(48.5,165.7);
	
		this.shape_502 = new cjs.Shape();
		this.shape_502.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155.7,-9.5,37.4).s().p("AjGF/IAAr9IACAAIAAAAIGLAAIAAL8IAAABg");
		this.shape_502.setTransform(20,169.5);
	
		this.shape_503 = new cjs.Shape();
		this.shape_503.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,127.3,28.4,127.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_503.setTransform(28.4,127.3);
	
		this.shape_504 = new cjs.Shape();
		this.shape_504.graphics.lf(["#999999","#333333"],[0,1],0,-155.7,0,37.4).s().p("AhTlWIABAAIB2g5IAxgWIAAL9IioBOg");
		this.shape_504.setTransform(48.5,165.5);
	
		this.shape_505 = new cjs.Shape();
		this.shape_505.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155.5,-9.5,37.6).s().p("AjGGBIAAsBIACAAIAAABIGLAAIAAL/IAAABg");
		this.shape_505.setTransform(20,169.4);
	
		this.shape_506 = new cjs.Shape();
		this.shape_506.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,126.9,28.4,126.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_506.setTransform(28.4,126.9);
	
		this.shape_507 = new cjs.Shape();
		this.shape_507.graphics.lf(["#999999","#333333"],[0,1],0,-155.5,0,37.6).s().p("AhTlXIABAAIB2g6IAxgWIAAMBIioBOg");
		this.shape_507.setTransform(48.5,165.4);
	
		this.shape_508 = new cjs.Shape();
		this.shape_508.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155.3,-9.5,37.8).s().p("AjGGDIAAsFIACAAIAAABIGLAAIAAMDIAAABg");
		this.shape_508.setTransform(20,169.2);
	
		this.shape_509 = new cjs.Shape();
		this.shape_509.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,126.6,28.4,126.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_509.setTransform(28.4,126.6);
	
		this.shape_510 = new cjs.Shape();
		this.shape_510.graphics.lf(["#999999","#333333"],[0,1],0,-155.3,0,37.8).s().p("AhTlZIABAAIB2g6IAxgWIAAMFIioBOg");
		this.shape_510.setTransform(48.5,165.2);
	
		this.shape_511 = new cjs.Shape();
		this.shape_511.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155.2,-9.5,37.9).s().p("AjGGEIAAsHIACAAIAAAAIGLAAIAAMHIAAAAg");
		this.shape_511.setTransform(20,169);
	
		this.shape_512 = new cjs.Shape();
		this.shape_512.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,126.2,28.4,126.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_512.setTransform(28.4,126.2);
	
		this.shape_513 = new cjs.Shape();
		this.shape_513.graphics.lf(["#999999","#333333"],[0,1],0,-155.2,0,37.9).s().p("AhTlbIABAAIB2g6IAxgVIAAMHIioBPg");
		this.shape_513.setTransform(48.5,165);
	
		this.shape_514 = new cjs.Shape();
		this.shape_514.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-155,-9.5,38.1).s().p("AjGGGIAAsLIACAAIAAAAIGLAAIAAMKIAAABg");
		this.shape_514.setTransform(20,168.8);
	
		this.shape_515 = new cjs.Shape();
		this.shape_515.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,125.9,28.4,125.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_515.setTransform(28.4,125.9);
	
		this.shape_516 = new cjs.Shape();
		this.shape_516.graphics.lf(["#999999","#333333"],[0,1],0,-155,0,38.1).s().p("AhTldIABAAIB2g5IAxgWIAAMLIioBOg");
		this.shape_516.setTransform(48.5,164.8);
	
		this.shape_517 = new cjs.Shape();
		this.shape_517.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-154.8,-9.5,38.3).s().p("AjGGIIAAsPIACAAIAAAAIGLAAIAAMOIAAABg");
		this.shape_517.setTransform(20,168.7);
	
		this.shape_518 = new cjs.Shape();
		this.shape_518.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,125.5,28.4,125.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_518.setTransform(28.4,125.5);
	
		this.shape_519 = new cjs.Shape();
		this.shape_519.graphics.lf(["#999999","#333333"],[0,1],0,-154.8,0,38.3).s().p("AhTlfIABAAIB2g5IAxgWIAAMPIioBOg");
		this.shape_519.setTransform(48.5,164.7);
	
		this.shape_520 = new cjs.Shape();
		this.shape_520.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-154.6,-9.5,38.5).s().p("AjGGKIAAsTIACAAIAAABIGLAAIAAMRIAAABg");
		this.shape_520.setTransform(20,168.5);
	
		this.shape_521 = new cjs.Shape();
		this.shape_521.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,125.2,28.4,125.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_521.setTransform(28.4,125.2);
	
		this.shape_522 = new cjs.Shape();
		this.shape_522.graphics.lf(["#999999","#333333"],[0,1],0,-154.6,0,38.5).s().p("AhTlgIABAAIB2g6IAxgWIAAMTIioBOg");
		this.shape_522.setTransform(48.5,164.5);
	
		this.shape_523 = new cjs.Shape();
		this.shape_523.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-154.5,-9.5,38.6).s().p("AjGGLIAAsWIACAAIAAABIGLAAIAAMVIAAAAg");
		this.shape_523.setTransform(20,168.3);
	
		this.shape_524 = new cjs.Shape();
		this.shape_524.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,124.8,28.4,124.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_524.setTransform(28.4,124.8);
	
		this.shape_525 = new cjs.Shape();
		this.shape_525.graphics.lf(["#999999","#333333"],[0,1],0,-154.5,0,38.6).s().p("AhTliIABAAIB2g5IAxgXIAAMWIioBPg");
		this.shape_525.setTransform(48.5,164.3);
	
		this.shape_526 = new cjs.Shape();
		this.shape_526.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-154.3,-9.5,38.8).s().p("AjGGNIAAsZIACAAIAAAAIGLAAIAAMYIAAABg");
		this.shape_526.setTransform(20,168.1);
	
		this.shape_527 = new cjs.Shape();
		this.shape_527.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,124.5,28.4,124.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_527.setTransform(28.4,124.5);
	
		this.shape_528 = new cjs.Shape();
		this.shape_528.graphics.lf(["#999999","#333333"],[0,1],0,-154.3,0,38.8).s().p("AhTlkIABAAIB2g5IAxgWIAAMZIioBOg");
		this.shape_528.setTransform(48.5,164.1);
	
		this.shape_529 = new cjs.Shape();
		this.shape_529.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-154.1,-9.5,39).s().p("AjGGPIAAsdIACAAIAAABIGLAAIAAMbIAAABg");
		this.shape_529.setTransform(20,168);
	
		this.shape_530 = new cjs.Shape();
		this.shape_530.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,124.1,28.4,124.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_530.setTransform(28.4,124.1);
	
		this.shape_531 = new cjs.Shape();
		this.shape_531.graphics.lf(["#999999","#333333"],[0,1],0,-154.1,0,39).s().p("AhTllIABAAIB2g6IAxgWIAAMdIioBOg");
		this.shape_531.setTransform(48.5,164);
	
		this.shape_532 = new cjs.Shape();
		this.shape_532.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.9,-9.5,39.2).s().p("AjGGRIAAshIACAAIAAABIGLAAIAAMfIAAABg");
		this.shape_532.setTransform(20,167.8);
	
		this.shape_533 = new cjs.Shape();
		this.shape_533.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,123.8,28.4,123.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_533.setTransform(28.4,123.8);
	
		this.shape_534 = new cjs.Shape();
		this.shape_534.graphics.lf(["#999999","#333333"],[0,1],0,-153.9,0,39.2).s().p("AhTlnIABAAIB2g6IAxgWIAAMhIioBOg");
		this.shape_534.setTransform(48.5,163.8);
	
		this.shape_535 = new cjs.Shape();
		this.shape_535.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.8,-9.5,39.3).s().p("AjGGSIAAskIACAAIAAABIGLAAIAAMjIAAAAg");
		this.shape_535.setTransform(20,167.6);
	
		this.shape_536 = new cjs.Shape();
		this.shape_536.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,123.4,28.4,123.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_536.setTransform(28.4,123.4);
	
		this.shape_537 = new cjs.Shape();
		this.shape_537.graphics.lf(["#999999","#333333"],[0,1],0,-153.8,0,39.3).s().p("AhTlpIABAAIB2g6IAxgVIAAMjIioBPg");
		this.shape_537.setTransform(48.5,163.6);
	
		this.shape_538 = new cjs.Shape();
		this.shape_538.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.6,-9.5,39.5).s().p("AjGGUIAAsnIACAAIAAAAIGLAAIAAMmIAAABg");
		this.shape_538.setTransform(20,167.4);
	
		this.shape_539 = new cjs.Shape();
		this.shape_539.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,123.1,28.4,123.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_539.setTransform(28.4,123.1);
	
		this.shape_540 = new cjs.Shape();
		this.shape_540.graphics.lf(["#999999","#333333"],[0,1],0,-153.6,0,39.5).s().p("AhTlrIABAAIB2g5IAxgWIAAMnIioBOg");
		this.shape_540.setTransform(48.5,163.4);
	
		this.shape_541 = new cjs.Shape();
		this.shape_541.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.4,-9.5,39.7).s().p("AjGGWIAAsrIACAAIAAAAIGLAAIAAMqIAAABg");
		this.shape_541.setTransform(20,167.3);
	
		this.shape_542 = new cjs.Shape();
		this.shape_542.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,122.7,28.4,122.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_542.setTransform(28.4,122.7);
	
		this.shape_543 = new cjs.Shape();
		this.shape_543.graphics.lf(["#999999","#333333"],[0,1],0,-153.4,0,39.7).s().p("AhTltIABAAIB2g5IAxgWIAAMrIioBOg");
		this.shape_543.setTransform(48.5,163.3);
	
		this.shape_544 = new cjs.Shape();
		this.shape_544.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.2,-9.5,39.9).s().p("AjGGYIAAsvIACAAIAAABIGLAAIAAMtIAAABg");
		this.shape_544.setTransform(20,167.1);
	
		this.shape_545 = new cjs.Shape();
		this.shape_545.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,122.4,28.4,122.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_545.setTransform(28.4,122.4);
	
		this.shape_546 = new cjs.Shape();
		this.shape_546.graphics.lf(["#999999","#333333"],[0,1],0,-153.2,0,39.9).s().p("AhTluIABAAIB2g6IAxgWIAAMvIioBOg");
		this.shape_546.setTransform(48.5,163.1);
	
		this.shape_547 = new cjs.Shape();
		this.shape_547.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-153.1,-9.5,40).s().p("AjGGZIAAsxIACAAIAAAAIGLAAIAAMxIAAAAg");
		this.shape_547.setTransform(20,166.9);
	
		this.shape_548 = new cjs.Shape();
		this.shape_548.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,122,28.4,122).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_548.setTransform(28.4,122);
	
		this.shape_549 = new cjs.Shape();
		this.shape_549.graphics.lf(["#999999","#333333"],[0,1],0,-153.1,0,40).s().p("AhTlwIABAAIB2g5IAxgXIAAMyIioBPg");
		this.shape_549.setTransform(48.5,162.9);
	
		this.shape_550 = new cjs.Shape();
		this.shape_550.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152.9,-9.5,40.2).s().p("AjGGbIAAs1IACAAIAAAAIGLAAIAAM0IAAABg");
		this.shape_550.setTransform(20,166.7);
	
		this.shape_551 = new cjs.Shape();
		this.shape_551.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,121.7,28.4,121.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_551.setTransform(28.4,121.7);
	
		this.shape_552 = new cjs.Shape();
		this.shape_552.graphics.lf(["#999999","#333333"],[0,1],0,-152.9,0,40.2).s().p("AhTlyIABAAIB2g5IAxgWIAAM1IioBOg");
		this.shape_552.setTransform(48.5,162.7);
	
		this.shape_553 = new cjs.Shape();
		this.shape_553.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152.7,-9.5,40.4).s().p("AjGGdIAAs5IACAAIAAABIGLAAIAAM3IAAABg");
		this.shape_553.setTransform(20,166.6);
	
		this.shape_554 = new cjs.Shape();
		this.shape_554.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,121.3,28.4,121.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_554.setTransform(28.4,121.3);
	
		this.shape_555 = new cjs.Shape();
		this.shape_555.graphics.lf(["#999999","#333333"],[0,1],0,-152.7,0,40.4).s().p("AhTlzIABAAIB2g6IAxgWIAAM5IioBOg");
		this.shape_555.setTransform(48.5,162.6);
	
		this.shape_556 = new cjs.Shape();
		this.shape_556.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152.5,-9.5,40.6).s().p("AjGGfIAAs9IACAAIAAABIGLAAIAAM7IAAABg");
		this.shape_556.setTransform(20,166.4);
	
		this.shape_557 = new cjs.Shape();
		this.shape_557.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,121,28.4,121).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_557.setTransform(28.4,121);
	
		this.shape_558 = new cjs.Shape();
		this.shape_558.graphics.lf(["#999999","#333333"],[0,1],0,-152.5,0,40.6).s().p("AhTl1IABAAIB2g6IAxgWIAAM9IioBOg");
		this.shape_558.setTransform(48.5,162.4);
	
		this.shape_559 = new cjs.Shape();
		this.shape_559.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152.4,-9.5,40.7).s().p("AjGGgIAAtAIACAAIAAABIGLAAIAAM/IAAAAg");
		this.shape_559.setTransform(20,166.2);
	
		this.shape_560 = new cjs.Shape();
		this.shape_560.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,120.6,28.4,120.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_560.setTransform(28.4,120.6);
	
		this.shape_561 = new cjs.Shape();
		this.shape_561.graphics.lf(["#999999","#333333"],[0,1],0,-152.4,0,40.7).s().p("AhTl3IABAAIB2g6IAxgVIAAM/IioBPg");
		this.shape_561.setTransform(48.5,162.2);
	
		this.shape_562 = new cjs.Shape();
		this.shape_562.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152.2,-9.5,40.9).s().p("AjGGiIAAtDIACAAIAAABIGLAAIAANBIAAABg");
		this.shape_562.setTransform(20,166.1);
	
		this.shape_563 = new cjs.Shape();
		this.shape_563.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,120.3,28.4,120.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_563.setTransform(28.4,120.3);
	
		this.shape_564 = new cjs.Shape();
		this.shape_564.graphics.lf(["#999999","#333333"],[0,1],0,-152.2,0,40.9).s().p("AhTl4IABAAIB2g6IAxgWIAANDIioBOg");
		this.shape_564.setTransform(48.5,162.1);
	
		this.shape_565 = new cjs.Shape();
		this.shape_565.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-152,-9.5,41.1).s().p("AjGGkIAAtHIACAAIAAAAIGLAAIAANGIAAABg");
		this.shape_565.setTransform(20,165.9);
	
		this.shape_566 = new cjs.Shape();
		this.shape_566.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,119.9,28.4,119.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_566.setTransform(28.4,119.9);
	
		this.shape_567 = new cjs.Shape();
		this.shape_567.graphics.lf(["#999999","#333333"],[0,1],0,-152,0,41.1).s().p("AhTl7IABAAIB2g5IAxgWIAANHIioBOg");
		this.shape_567.setTransform(48.5,161.9);
	
		this.shape_568 = new cjs.Shape();
		this.shape_568.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151.9,-9.5,41.2).s().p("AjGGlIAAtKIACAAIAAABIGLAAIAANJIAAAAg");
		this.shape_568.setTransform(20,165.7);
	
		this.shape_569 = new cjs.Shape();
		this.shape_569.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,119.6,28.4,119.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_569.setTransform(28.4,119.6);
	
		this.shape_570 = new cjs.Shape();
		this.shape_570.graphics.lf(["#999999","#333333"],[0,1],0,-151.9,0,41.2).s().p("AhTl8IABAAIB2g5IAxgXIAANKIioBPg");
		this.shape_570.setTransform(48.5,161.7);
	
		this.shape_571 = new cjs.Shape();
		this.shape_571.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151.7,-9.5,41.4).s().p("AjGGnIAAtNIACAAIAAAAIGLAAIAANMIAAABg");
		this.shape_571.setTransform(20,165.5);
	
		this.shape_572 = new cjs.Shape();
		this.shape_572.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,119.3,28.4,119.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_572.setTransform(28.4,119.3);
	
		this.shape_573 = new cjs.Shape();
		this.shape_573.graphics.lf(["#999999","#333333"],[0,1],0,-151.7,0,41.4).s().p("AhTl+IABAAIB2g5IAxgWIAANNIioBOg");
		this.shape_573.setTransform(48.5,161.5);
	
		this.shape_574 = new cjs.Shape();
		this.shape_574.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151.5,-9.5,41.6).s().p("AjGGpIAAtRIACAAIAAAAIGLAAIAANQIAAABg");
		this.shape_574.setTransform(20,165.4);
	
		this.shape_575 = new cjs.Shape();
		this.shape_575.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,118.9,28.4,118.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_575.setTransform(28.4,118.9);
	
		this.shape_576 = new cjs.Shape();
		this.shape_576.graphics.lf(["#999999","#333333"],[0,1],0,-151.5,0,41.6).s().p("AhTmAIABAAIB2g5IAxgWIAANRIioBOg");
		this.shape_576.setTransform(48.5,161.4);
	
		this.shape_577 = new cjs.Shape();
		this.shape_577.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151.3,-9.5,41.8).s().p("AjGGrIAAtVIACAAIAAABIGLAAIAANTIAAABg");
		this.shape_577.setTransform(20,165.2);
	
		this.shape_578 = new cjs.Shape();
		this.shape_578.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,118.6,28.4,118.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_578.setTransform(28.4,118.6);
	
		this.shape_579 = new cjs.Shape();
		this.shape_579.graphics.lf(["#999999","#333333"],[0,1],0,-151.3,0,41.8).s().p("AhTmBIABAAIB2g6IAxgWIAANVIioBOg");
		this.shape_579.setTransform(48.5,161.2);
	
		this.shape_580 = new cjs.Shape();
		this.shape_580.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151.2,-9.5,41.9).s().p("AjGGsIAAtXIACAAIAAAAIGLAAIAANXIAAAAg");
		this.shape_580.setTransform(20,165);
	
		this.shape_581 = new cjs.Shape();
		this.shape_581.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,118.2,28.4,118.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_581.setTransform(28.4,118.2);
	
		this.shape_582 = new cjs.Shape();
		this.shape_582.graphics.lf(["#999999","#333333"],[0,1],0,-151.2,0,41.9).s().p("AhTmDIABAAIB2g6IAxgVIAANXIioBPg");
		this.shape_582.setTransform(48.5,161);
	
		this.shape_583 = new cjs.Shape();
		this.shape_583.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-151,-9.5,42.1).s().p("AjGGuIAAtbIACAAIAAAAIGLAAIAANaIAAABg");
		this.shape_583.setTransform(20,164.8);
	
		this.shape_584 = new cjs.Shape();
		this.shape_584.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,117.9,28.4,117.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_584.setTransform(28.4,117.9);
	
		this.shape_585 = new cjs.Shape();
		this.shape_585.graphics.lf(["#999999","#333333"],[0,1],0,-151,0,42.1).s().p("AhTmFIABAAIB2g5IAxgWIAANbIioBOg");
		this.shape_585.setTransform(48.5,160.8);
	
		this.shape_586 = new cjs.Shape();
		this.shape_586.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-150.8,-9.5,42.3).s().p("AjGGwIAAtfIACAAIAAAAIGLAAIAANeIAAABg");
		this.shape_586.setTransform(20,164.7);
	
		this.shape_587 = new cjs.Shape();
		this.shape_587.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,117.5,28.4,117.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_587.setTransform(28.4,117.5);
	
		this.shape_588 = new cjs.Shape();
		this.shape_588.graphics.lf(["#999999","#333333"],[0,1],0,-150.8,0,42.3).s().p("AhTmHIABAAIB2g5IAxgWIAANfIioBOg");
		this.shape_588.setTransform(48.5,160.7);
	
		this.shape_589 = new cjs.Shape();
		this.shape_589.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-150.6,-9.5,42.5).s().p("AjGGyIAAtjIACAAIAAABIGLAAIAANhIAAABg");
		this.shape_589.setTransform(20,164.5);
	
		this.shape_590 = new cjs.Shape();
		this.shape_590.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,117.2,28.4,117.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_590.setTransform(28.4,117.2);
	
		this.shape_591 = new cjs.Shape();
		this.shape_591.graphics.lf(["#999999","#333333"],[0,1],0,-150.6,0,42.5).s().p("AhTmIIABAAIB2g6IAxgWIAANjIioBOg");
		this.shape_591.setTransform(48.5,160.5);
	
		this.shape_592 = new cjs.Shape();
		this.shape_592.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-150.5,-9.5,42.6).s().p("AjGGzIAAtmIACAAIAAABIGLAAIAANlIAAAAg");
		this.shape_592.setTransform(20,164.3);
	
		this.shape_593 = new cjs.Shape();
		this.shape_593.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,116.8,28.4,116.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_593.setTransform(28.4,116.8);
	
		this.shape_594 = new cjs.Shape();
		this.shape_594.graphics.lf(["#999999","#333333"],[0,1],0,-150.5,0,42.6).s().p("AhTmKIABAAIB2g5IAxgXIAANmIioBPg");
		this.shape_594.setTransform(48.5,160.3);
	
		this.shape_595 = new cjs.Shape();
		this.shape_595.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-150.3,-9.5,42.8).s().p("AjGG1IAAtpIACAAIAAAAIGLAAIAANoIAAABg");
		this.shape_595.setTransform(20,164.1);
	
		this.shape_596 = new cjs.Shape();
		this.shape_596.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,116.5,28.4,116.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_596.setTransform(28.4,116.5);
	
		this.shape_597 = new cjs.Shape();
		this.shape_597.graphics.lf(["#999999","#333333"],[0,1],0,-150.3,0,42.8).s().p("AhTmMIABAAIB2g5IAxgWIAANpIioBOg");
		this.shape_597.setTransform(48.5,160.1);
	
		this.shape_598 = new cjs.Shape();
		this.shape_598.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-150.1,-9.5,43).s().p("AjGG3IAAttIACAAIAAABIGLAAIAANrIAAABg");
		this.shape_598.setTransform(20,164);
	
		this.shape_599 = new cjs.Shape();
		this.shape_599.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,116.1,28.4,116.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_599.setTransform(28.4,116.1);
	
		this.shape_600 = new cjs.Shape();
		this.shape_600.graphics.lf(["#999999","#333333"],[0,1],0,-150.1,0,43).s().p("AhTmNIABAAIB2g6IAxgWIAANtIioBOg");
		this.shape_600.setTransform(48.5,160);
	
		this.shape_601 = new cjs.Shape();
		this.shape_601.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.9,-9.5,43.2).s().p("AjGG5IAAtxIACAAIAAABIGLAAIAANvIAAABg");
		this.shape_601.setTransform(20,163.8);
	
		this.shape_602 = new cjs.Shape();
		this.shape_602.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,115.8,28.4,115.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_602.setTransform(28.4,115.8);
	
		this.shape_603 = new cjs.Shape();
		this.shape_603.graphics.lf(["#999999","#333333"],[0,1],0,-149.9,0,43.2).s().p("AhTmPIABAAIB2g6IAxgWIAANxIioBOg");
		this.shape_603.setTransform(48.5,159.8);
	
		this.shape_604 = new cjs.Shape();
		this.shape_604.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.8,-9.5,43.3).s().p("AjGG6IAAtzIACAAIAAAAIGLAAIAANzIAAAAg");
		this.shape_604.setTransform(20,163.6);
	
		this.shape_605 = new cjs.Shape();
		this.shape_605.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,115.4,28.4,115.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_605.setTransform(28.4,115.4);
	
		this.shape_606 = new cjs.Shape();
		this.shape_606.graphics.lf(["#999999","#333333"],[0,1],0,-149.8,0,43.3).s().p("AhTmRIABAAIB2g6IAxgVIAANzIioBPg");
		this.shape_606.setTransform(48.5,159.6);
	
		this.shape_607 = new cjs.Shape();
		this.shape_607.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.6,-9.5,43.5).s().p("AjGG8IAAt3IACAAIAAAAIGLAAIAAN2IAAABg");
		this.shape_607.setTransform(20,163.4);
	
		this.shape_608 = new cjs.Shape();
		this.shape_608.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,115.1,28.4,115.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_608.setTransform(28.4,115.1);
	
		this.shape_609 = new cjs.Shape();
		this.shape_609.graphics.lf(["#999999","#333333"],[0,1],0,-149.6,0,43.5).s().p("AhTmTIABAAIB2g5IAxgWIAAN3IioBOg");
		this.shape_609.setTransform(48.5,159.4);
	
		this.shape_610 = new cjs.Shape();
		this.shape_610.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.4,-9.5,43.7).s().p("AjGG+IAAt7IACAAIAAAAIGLAAIAAN6IAAABg");
		this.shape_610.setTransform(20,163.3);
	
		this.shape_611 = new cjs.Shape();
		this.shape_611.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,114.7,28.4,114.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_611.setTransform(28.4,114.7);
	
		this.shape_612 = new cjs.Shape();
		this.shape_612.graphics.lf(["#999999","#333333"],[0,1],0,-149.4,0,43.7).s().p("AhTmVIABAAIB2g5IAxgWIAAN7IioBOg");
		this.shape_612.setTransform(48.5,159.3);
	
		this.shape_613 = new cjs.Shape();
		this.shape_613.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.2,-9.5,43.9).s().p("AjGHAIAAt/IACAAIAAABIGLAAIAAN9IAAABg");
		this.shape_613.setTransform(20,163.1);
	
		this.shape_614 = new cjs.Shape();
		this.shape_614.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,114.4,28.4,114.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_614.setTransform(28.4,114.4);
	
		this.shape_615 = new cjs.Shape();
		this.shape_615.graphics.lf(["#999999","#333333"],[0,1],0,-149.2,0,43.9).s().p("AhTmWIABAAIB2g6IAxgWIAAN/IioBOg");
		this.shape_615.setTransform(48.5,159.1);
	
		this.shape_616 = new cjs.Shape();
		this.shape_616.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-149.1,-9.5,44).s().p("AjGHBIAAuBIACAAIAAAAIGLAAIAAOBIAAAAg");
		this.shape_616.setTransform(20,162.9);
	
		this.shape_617 = new cjs.Shape();
		this.shape_617.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,114,28.4,114).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_617.setTransform(28.4,114);
	
		this.shape_618 = new cjs.Shape();
		this.shape_618.graphics.lf(["#999999","#333333"],[0,1],0,-149.1,0,44).s().p("AhTmYIABAAIB2g5IAxgXIAAOCIioBPg");
		this.shape_618.setTransform(48.5,158.9);
	
		this.shape_619 = new cjs.Shape();
		this.shape_619.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148.9,-9.5,44.2).s().p("AjGHDIAAuFIACAAIAAAAIGLAAIAAOEIAAABg");
		this.shape_619.setTransform(20,162.7);
	
		this.shape_620 = new cjs.Shape();
		this.shape_620.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,113.7,28.4,113.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_620.setTransform(28.4,113.7);
	
		this.shape_621 = new cjs.Shape();
		this.shape_621.graphics.lf(["#999999","#333333"],[0,1],0,-148.9,0,44.2).s().p("AhTmaIABAAIB2g5IAxgWIAAOFIioBOg");
		this.shape_621.setTransform(48.5,158.7);
	
		this.shape_622 = new cjs.Shape();
		this.shape_622.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148.7,-9.5,44.4).s().p("AjGHFIAAuJIACAAIAAABIGLAAIAAOHIAAABg");
		this.shape_622.setTransform(20,162.6);
	
		this.shape_623 = new cjs.Shape();
		this.shape_623.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,113.3,28.4,113.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_623.setTransform(28.4,113.3);
	
		this.shape_624 = new cjs.Shape();
		this.shape_624.graphics.lf(["#999999","#333333"],[0,1],0,-148.7,0,44.4).s().p("AhTmbIABAAIB2g6IAxgWIAAOJIioBOg");
		this.shape_624.setTransform(48.5,158.6);
	
		this.shape_625 = new cjs.Shape();
		this.shape_625.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148.5,-9.5,44.6).s().p("AjGHHIAAuNIACAAIAAABIGLAAIAAOLIAAABg");
		this.shape_625.setTransform(20,162.4);
	
		this.shape_626 = new cjs.Shape();
		this.shape_626.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,113,28.4,113).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_626.setTransform(28.4,113);
	
		this.shape_627 = new cjs.Shape();
		this.shape_627.graphics.lf(["#999999","#333333"],[0,1],0,-148.5,0,44.6).s().p("AhTmdIABAAIB2g6IAxgWIAAONIioBOg");
		this.shape_627.setTransform(48.5,158.4);
	
		this.shape_628 = new cjs.Shape();
		this.shape_628.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148.4,-9.5,44.7).s().p("AjGHIIAAuQIACAAIAAABIGLAAIAAOPIAAAAg");
		this.shape_628.setTransform(20,162.2);
	
		this.shape_629 = new cjs.Shape();
		this.shape_629.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,112.6,28.4,112.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_629.setTransform(28.4,112.6);
	
		this.shape_630 = new cjs.Shape();
		this.shape_630.graphics.lf(["#999999","#333333"],[0,1],0,-148.4,0,44.7).s().p("AhTmfIABAAIB2g6IAxgVIAAOPIioBPg");
		this.shape_630.setTransform(48.5,158.2);
	
		this.shape_631 = new cjs.Shape();
		this.shape_631.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148.2,-9.5,44.9).s().p("AjGHKIAAuTIACAAIAAAAIGLAAIAAOSIAAABg");
		this.shape_631.setTransform(20,162);
	
		this.shape_632 = new cjs.Shape();
		this.shape_632.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,112.3,28.4,112.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_632.setTransform(28.4,112.3);
	
		this.shape_633 = new cjs.Shape();
		this.shape_633.graphics.lf(["#999999","#333333"],[0,1],0,-148.2,0,44.9).s().p("AhTmhIABAAIB2g5IAxgWIAAOTIioBOg");
		this.shape_633.setTransform(48.5,158);
	
		this.shape_634 = new cjs.Shape();
		this.shape_634.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-148,-9.5,45.1).s().p("AjGHMIAAuXIACAAIAAAAIGLAAIAAOWIAAABg");
		this.shape_634.setTransform(20,161.9);
	
		this.shape_635 = new cjs.Shape();
		this.shape_635.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,111.9,28.4,111.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_635.setTransform(28.4,111.9);
	
		this.shape_636 = new cjs.Shape();
		this.shape_636.graphics.lf(["#999999","#333333"],[0,1],0,-148,0,45.1).s().p("AhTmjIABAAIB2g5IAxgWIAAOXIioBOg");
		this.shape_636.setTransform(48.5,157.9);
	
		this.shape_637 = new cjs.Shape();
		this.shape_637.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147.8,-9.5,45.3).s().p("AjGHOIAAubIACAAIAAABIGLAAIAAOZIAAABg");
		this.shape_637.setTransform(20,161.7);
	
		this.shape_638 = new cjs.Shape();
		this.shape_638.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,111.6,28.4,111.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_638.setTransform(28.4,111.6);
	
		this.shape_639 = new cjs.Shape();
		this.shape_639.graphics.lf(["#999999","#333333"],[0,1],0,-147.8,0,45.3).s().p("AhTmkIABAAIB2g6IAxgWIAAObIioBOg");
		this.shape_639.setTransform(48.5,157.7);
	
		this.shape_640 = new cjs.Shape();
		this.shape_640.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147.7,-9.5,45.4).s().p("AjGHPIAAudIACAAIAAAAIGLAAIAAOcIAAABg");
		this.shape_640.setTransform(20,161.5);
	
		this.shape_641 = new cjs.Shape();
		this.shape_641.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,111.3,28.4,111.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_641.setTransform(28.4,111.3);
	
		this.shape_642 = new cjs.Shape();
		this.shape_642.graphics.lf(["#999999","#333333"],[0,1],0,-147.7,0,45.4).s().p("AhTmmIABAAIB2g5IAxgWIAAOdIioBOg");
		this.shape_642.setTransform(48.5,157.5);
	
		this.shape_643 = new cjs.Shape();
		this.shape_643.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147.5,-9.5,45.6).s().p("AjGHRIAAuhIACAAIAAAAIGLAAIAAOgIAAABg");
		this.shape_643.setTransform(20,161.4);
	
		this.shape_644 = new cjs.Shape();
		this.shape_644.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,110.9,28.4,110.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_644.setTransform(28.4,110.9);
	
		this.shape_645 = new cjs.Shape();
		this.shape_645.graphics.lf(["#999999","#333333"],[0,1],0,-147.5,0,45.6).s().p("AhTmoIABAAIB2g5IAxgWIAAOhIioBOg");
		this.shape_645.setTransform(48.5,157.4);
	
		this.shape_646 = new cjs.Shape();
		this.shape_646.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147.3,-9.5,45.8).s().p("AjGHTIAAulIACAAIAAABIGLAAIAAOjIAAABg");
		this.shape_646.setTransform(20,161.2);
	
		this.shape_647 = new cjs.Shape();
		this.shape_647.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,110.6,28.4,110.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_647.setTransform(28.4,110.6);
	
		this.shape_648 = new cjs.Shape();
		this.shape_648.graphics.lf(["#999999","#333333"],[0,1],0,-147.3,0,45.8).s().p("AhTmpIABAAIB2g6IAxgWIAAOlIioBOg");
		this.shape_648.setTransform(48.5,157.2);
	
		this.shape_649 = new cjs.Shape();
		this.shape_649.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147.2,-9.5,45.9).s().p("AjGHUIAAunIACAAIAAAAIGLAAIAAOnIAAAAg");
		this.shape_649.setTransform(20,161);
	
		this.shape_650 = new cjs.Shape();
		this.shape_650.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,110.2,28.4,110.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_650.setTransform(28.4,110.2);
	
		this.shape_651 = new cjs.Shape();
		this.shape_651.graphics.lf(["#999999","#333333"],[0,1],0,-147.2,0,45.9).s().p("AhTmrIABAAIB2g6IAxgWIAAOoIioBPg");
		this.shape_651.setTransform(48.5,157);
	
		this.shape_652 = new cjs.Shape();
		this.shape_652.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-147,-9.5,46.1).s().p("AjGHWIAAurIACAAIAAAAIGLAAIAAOqIAAABg");
		this.shape_652.setTransform(20,160.8);
	
		this.shape_653 = new cjs.Shape();
		this.shape_653.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,109.9,28.4,109.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_653.setTransform(28.4,109.9);
	
		this.shape_654 = new cjs.Shape();
		this.shape_654.graphics.lf(["#999999","#333333"],[0,1],0,-147,0,46.1).s().p("AhTmtIABAAIB2g5IAxgWIAAOrIioBOg");
		this.shape_654.setTransform(48.5,156.8);
	
		this.shape_655 = new cjs.Shape();
		this.shape_655.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-146.8,-9.5,46.3).s().p("AjGHYIAAuvIACAAIAAABIGLAAIAAOtIAAABg");
		this.shape_655.setTransform(20,160.7);
	
		this.shape_656 = new cjs.Shape();
		this.shape_656.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,109.5,28.4,109.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_656.setTransform(28.4,109.5);
	
		this.shape_657 = new cjs.Shape();
		this.shape_657.graphics.lf(["#999999","#333333"],[0,1],0,-146.8,0,46.3).s().p("AhTmuIABAAIB2g6IAxgWIAAOvIioBOg");
		this.shape_657.setTransform(48.5,156.7);
	
		this.shape_658 = new cjs.Shape();
		this.shape_658.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-146.6,-9.5,46.5).s().p("AjGHaIAAuzIACAAIAAABIGLAAIAAOxIAAABg");
		this.shape_658.setTransform(20,160.5);
	
		this.shape_659 = new cjs.Shape();
		this.shape_659.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,109.2,28.4,109.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_659.setTransform(28.4,109.2);
	
		this.shape_660 = new cjs.Shape();
		this.shape_660.graphics.lf(["#999999","#333333"],[0,1],0,-146.6,0,46.5).s().p("AhTmwIABAAIB2g6IAxgWIAAOzIioBOg");
		this.shape_660.setTransform(48.5,156.5);
	
		this.shape_661 = new cjs.Shape();
		this.shape_661.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-146.5,-9.5,46.6).s().p("AjGHbIAAu2IACAAIAAABIGLAAIAAO1IAAAAg");
		this.shape_661.setTransform(20,160.3);
	
		this.shape_662 = new cjs.Shape();
		this.shape_662.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,108.8,28.4,108.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_662.setTransform(28.4,108.8);
	
		this.shape_663 = new cjs.Shape();
		this.shape_663.graphics.lf(["#999999","#333333"],[0,1],0,-146.5,0,46.6).s().p("AhTmyIABAAIB2g5IAxgXIAAO2IioBPg");
		this.shape_663.setTransform(48.5,156.3);
	
		this.shape_664 = new cjs.Shape();
		this.shape_664.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-146.3,-9.5,46.8).s().p("AjGHdIAAu5IACAAIAAAAIGLAAIAAO4IAAABg");
		this.shape_664.setTransform(20,160.1);
	
		this.shape_665 = new cjs.Shape();
		this.shape_665.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,108.5,28.4,108.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_665.setTransform(28.4,108.5);
	
		this.shape_666 = new cjs.Shape();
		this.shape_666.graphics.lf(["#999999","#333333"],[0,1],0,-146.3,0,46.8).s().p("AhTm0IABAAIB2g5IAxgWIAAO5IioBOg");
		this.shape_666.setTransform(48.5,156.1);
	
		this.shape_667 = new cjs.Shape();
		this.shape_667.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-146.1,-9.5,47).s().p("AjGHfIAAu9IACAAIAAAAIGLAAIAAO8IAAABg");
		this.shape_667.setTransform(20,160);
	
		this.shape_668 = new cjs.Shape();
		this.shape_668.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,108.1,28.4,108.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_668.setTransform(28.4,108.1);
	
		this.shape_669 = new cjs.Shape();
		this.shape_669.graphics.lf(["#999999","#333333"],[0,1],0,-146.1,0,47).s().p("AhTm2IABAAIB2g5IAxgWIAAO9IioBOg");
		this.shape_669.setTransform(48.5,156);
	
		this.shape_670 = new cjs.Shape();
		this.shape_670.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.9,-9.5,47.2).s().p("AjGHhIAAvBIACAAIAAABIGLAAIAAO/IAAABg");
		this.shape_670.setTransform(20,159.8);
	
		this.shape_671 = new cjs.Shape();
		this.shape_671.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,107.8,28.4,107.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_671.setTransform(28.4,107.8);
	
		this.shape_672 = new cjs.Shape();
		this.shape_672.graphics.lf(["#999999","#333333"],[0,1],0,-145.9,0,47.2).s().p("AhTm3IABAAIB2g6IAxgWIAAPBIioBOg");
		this.shape_672.setTransform(48.5,155.8);
	
		this.shape_673 = new cjs.Shape();
		this.shape_673.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.8,-9.5,47.3).s().p("AjGHiIAAvDIACAAIAAAAIGLAAIAAPDIAAAAg");
		this.shape_673.setTransform(20,159.6);
	
		this.shape_674 = new cjs.Shape();
		this.shape_674.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,107.4,28.4,107.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_674.setTransform(28.4,107.4);
	
		this.shape_675 = new cjs.Shape();
		this.shape_675.graphics.lf(["#999999","#333333"],[0,1],0,-145.8,0,47.3).s().p("AhTm5IABAAIB2g6IAxgVIAAPDIioBPg");
		this.shape_675.setTransform(48.5,155.6);
	
		this.shape_676 = new cjs.Shape();
		this.shape_676.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.6,-9.5,47.5).s().p("AjGHkIAAvHIACAAIAAAAIGLAAIAAPGIAAABg");
		this.shape_676.setTransform(20,159.4);
	
		this.shape_677 = new cjs.Shape();
		this.shape_677.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,107.1,28.4,107.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_677.setTransform(28.4,107.1);
	
		this.shape_678 = new cjs.Shape();
		this.shape_678.graphics.lf(["#999999","#333333"],[0,1],0,-145.6,0,47.5).s().p("AhTm7IABAAIB2g5IAxgWIAAPHIioBOg");
		this.shape_678.setTransform(48.5,155.4);
	
		this.shape_679 = new cjs.Shape();
		this.shape_679.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.4,-9.5,47.7).s().p("AjGHmIAAvLIACAAIAAAAIGLAAIAAPKIAAABg");
		this.shape_679.setTransform(20,159.3);
	
		this.shape_680 = new cjs.Shape();
		this.shape_680.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,106.7,28.4,106.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_680.setTransform(28.4,106.7);
	
		this.shape_681 = new cjs.Shape();
		this.shape_681.graphics.lf(["#999999","#333333"],[0,1],0,-145.4,0,47.7).s().p("AhTm9IABAAIB2g5IAxgWIAAPLIioBOg");
		this.shape_681.setTransform(48.5,155.3);
	
		this.shape_682 = new cjs.Shape();
		this.shape_682.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.2,-9.5,47.9).s().p("AjGHoIAAvPIACAAIAAABIGLAAIAAPNIAAABg");
		this.shape_682.setTransform(20,159.1);
	
		this.shape_683 = new cjs.Shape();
		this.shape_683.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,106.4,28.4,106.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_683.setTransform(28.4,106.4);
	
		this.shape_684 = new cjs.Shape();
		this.shape_684.graphics.lf(["#999999","#333333"],[0,1],0,-145.2,0,47.9).s().p("AhTm+IABAAIB2g6IAxgWIAAPPIioBOg");
		this.shape_684.setTransform(48.5,155.1);
	
		this.shape_685 = new cjs.Shape();
		this.shape_685.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-145.1,-9.5,48).s().p("AjGHpIAAvSIACAAIAAABIGLAAIAAPRIAAAAg");
		this.shape_685.setTransform(20,158.9);
	
		this.shape_686 = new cjs.Shape();
		this.shape_686.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,106,28.4,106).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_686.setTransform(28.4,106);
	
		this.shape_687 = new cjs.Shape();
		this.shape_687.graphics.lf(["#999999","#333333"],[0,1],0,-145.1,0,48).s().p("AhTnAIABAAIB2g5IAxgXIAAPSIioBPg");
		this.shape_687.setTransform(48.5,154.9);
	
		this.shape_688 = new cjs.Shape();
		this.shape_688.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144.9,-9.5,48.2).s().p("AjGHrIAAvVIACAAIAAAAIGLAAIAAPUIAAABg");
		this.shape_688.setTransform(20,158.7);
	
		this.shape_689 = new cjs.Shape();
		this.shape_689.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,105.7,28.4,105.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_689.setTransform(28.4,105.7);
	
		this.shape_690 = new cjs.Shape();
		this.shape_690.graphics.lf(["#999999","#333333"],[0,1],0,-144.9,0,48.2).s().p("AhTnCIABAAIB2g5IAxgWIAAPVIioBOg");
		this.shape_690.setTransform(48.5,154.7);
	
		this.shape_691 = new cjs.Shape();
		this.shape_691.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144.7,-9.5,48.4).s().p("AjGHtIAAvZIACAAIAAABIGLAAIAAPXIAAABg");
		this.shape_691.setTransform(20,158.6);
	
		this.shape_692 = new cjs.Shape();
		this.shape_692.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,105.3,28.4,105.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_692.setTransform(28.4,105.3);
	
		this.shape_693 = new cjs.Shape();
		this.shape_693.graphics.lf(["#999999","#333333"],[0,1],0,-144.7,0,48.4).s().p("AhTnDIABAAIB2g6IAxgWIAAPZIioBOg");
		this.shape_693.setTransform(48.5,154.6);
	
		this.shape_694 = new cjs.Shape();
		this.shape_694.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144.5,-9.5,48.6).s().p("AjGHvIAAvdIACAAIAAABIGLAAIAAPbIAAABg");
		this.shape_694.setTransform(20,158.4);
	
		this.shape_695 = new cjs.Shape();
		this.shape_695.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,105,28.4,105).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_695.setTransform(28.4,105);
	
		this.shape_696 = new cjs.Shape();
		this.shape_696.graphics.lf(["#999999","#333333"],[0,1],0,-144.5,0,48.6).s().p("AhTnFIABAAIB2g6IAxgWIAAPdIioBOg");
		this.shape_696.setTransform(48.5,154.4);
	
		this.shape_697 = new cjs.Shape();
		this.shape_697.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144.4,-9.5,48.7).s().p("AjGHwIAAvfIACAAIAAAAIGLAAIAAPfIAAAAg");
		this.shape_697.setTransform(20,158.2);
	
		this.shape_698 = new cjs.Shape();
		this.shape_698.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,104.6,28.4,104.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_698.setTransform(28.4,104.6);
	
		this.shape_699 = new cjs.Shape();
		this.shape_699.graphics.lf(["#999999","#333333"],[0,1],0,-144.4,0,48.7).s().p("AhTnHIABAAIB2g6IAxgVIAAPfIioBPg");
		this.shape_699.setTransform(48.5,154.2);
	
		this.shape_700 = new cjs.Shape();
		this.shape_700.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144.2,-9.5,48.9).s().p("AjGHyIAAvjIACAAIAAAAIGLAAIAAPiIAAABg");
		this.shape_700.setTransform(20,158);
	
		this.shape_701 = new cjs.Shape();
		this.shape_701.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,104.3,28.4,104.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_701.setTransform(28.4,104.3);
	
		this.shape_702 = new cjs.Shape();
		this.shape_702.graphics.lf(["#999999","#333333"],[0,1],0,-144.2,0,48.9).s().p("AhTnJIABAAIB2g5IAxgWIAAPjIioBOg");
		this.shape_702.setTransform(48.5,154);
	
		this.shape_703 = new cjs.Shape();
		this.shape_703.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-144,-9.5,49.1).s().p("AjGH0IAAvnIACAAIAAAAIGLAAIAAPmIAAABg");
		this.shape_703.setTransform(20,157.9);
	
		this.shape_704 = new cjs.Shape();
		this.shape_704.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,103.9,28.4,103.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_704.setTransform(28.4,103.9);
	
		this.shape_705 = new cjs.Shape();
		this.shape_705.graphics.lf(["#999999","#333333"],[0,1],0,-144,0,49.1).s().p("AhTnLIABAAIB2g5IAxgWIAAPnIioBOg");
		this.shape_705.setTransform(48.5,153.9);
	
		this.shape_706 = new cjs.Shape();
		this.shape_706.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143.8,-9.5,49.3).s().p("AjGH2IAAvrIACAAIAAABIGLAAIAAPpIAAABg");
		this.shape_706.setTransform(20,157.7);
	
		this.shape_707 = new cjs.Shape();
		this.shape_707.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,103.6,28.4,103.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_707.setTransform(28.4,103.6);
	
		this.shape_708 = new cjs.Shape();
		this.shape_708.graphics.lf(["#999999","#333333"],[0,1],0,-143.8,0,49.3).s().p("AhTnMIABAAIB2g6IAxgWIAAPrIioBOg");
		this.shape_708.setTransform(48.5,153.7);
	
		this.shape_709 = new cjs.Shape();
		this.shape_709.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143.7,-9.5,49.4).s().p("AjGH3IAAvuIACAAIAAABIGLAAIAAPtIAAAAg");
		this.shape_709.setTransform(20,157.5);
	
		this.shape_710 = new cjs.Shape();
		this.shape_710.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,103.2,28.4,103.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_710.setTransform(28.4,103.2);
	
		this.shape_711 = new cjs.Shape();
		this.shape_711.graphics.lf(["#999999","#333333"],[0,1],0,-143.7,0,49.4).s().p("AhTnOIABAAIB2g5IAxgXIAAPuIioBPg");
		this.shape_711.setTransform(48.5,153.5);
	
		this.shape_712 = new cjs.Shape();
		this.shape_712.graphics.lf(["#999999","#333333"],[0,1],0,-143.5,0,49.6).s().p("AhTnQIABAAIB2g5IAxgWIAAPxIioBOg");
		this.shape_712.setTransform(48.5,153.3);
	
		this.shape_713 = new cjs.Shape();
		this.shape_713.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143.5,-9.5,49.6).s().p("AjGH5IAAvxIACAAIAAAAIGLAAIAAPwIAAABg");
		this.shape_713.setTransform(20,157.3);
	
		this.shape_714 = new cjs.Shape();
		this.shape_714.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,102.9,28.4,102.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_714.setTransform(28.4,102.9);
	
		this.shape_715 = new cjs.Shape();
		this.shape_715.graphics.lf(["#999999","#333333"],[0,1],0,-143.3,0,49.8).s().p("AhTnRIABAAIB2g6IAxgWIAAP1IioBOg");
		this.shape_715.setTransform(48.5,153.2);
	
		this.shape_716 = new cjs.Shape();
		this.shape_716.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143.3,-9.5,49.8).s().p("AjGH7IAAv1IACAAIAAABIGLAAIAAPzIAAABg");
		this.shape_716.setTransform(20,157.2);
	
		this.shape_717 = new cjs.Shape();
		this.shape_717.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,102.6,28.4,102.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_717.setTransform(28.4,102.6);
	
		this.shape_718 = new cjs.Shape();
		this.shape_718.graphics.lf(["#999999","#333333"],[0,1],0,-143.2,0,49.9).s().p("AhTnTIABAAIB2g5IAxgXIAAP4IioBPg");
		this.shape_718.setTransform(48.5,153);
	
		this.shape_719 = new cjs.Shape();
		this.shape_719.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143.2,-9.5,49.9).s().p("AjGH8IAAv3IACAAIAAAAIGLAAIAAP3IAAAAg");
		this.shape_719.setTransform(20,157);
	
		this.shape_720 = new cjs.Shape();
		this.shape_720.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,102.2,28.4,102.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_720.setTransform(28.4,102.2);
	
		this.shape_721 = new cjs.Shape();
		this.shape_721.graphics.lf(["#999999","#333333"],[0,1],0,-143,0,50.1).s().p("AhTnVIABAAIB2g5IAxgWIAAP7IioBOg");
		this.shape_721.setTransform(48.5,152.8);
	
		this.shape_722 = new cjs.Shape();
		this.shape_722.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-143,-9.5,50.1).s().p("AjGH+IAAv7IACAAIAAAAIGLAAIAAP6IAAABg");
		this.shape_722.setTransform(20,156.8);
	
		this.shape_723 = new cjs.Shape();
		this.shape_723.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,101.9,28.4,101.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_723.setTransform(28.4,101.9);
	
		this.shape_724 = new cjs.Shape();
		this.shape_724.graphics.lf(["#999999","#333333"],[0,1],0,-142.8,0,50.3).s().p("AhTnWIABAAIB2g6IAxgWIAAP/IioBOg");
		this.shape_724.setTransform(48.5,152.7);
	
		this.shape_725 = new cjs.Shape();
		this.shape_725.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-142.8,-9.5,50.3).s().p("AjGIAIAAv/IACAAIAAABIGLAAIAAP9IAAABg");
		this.shape_725.setTransform(20,156.7);
	
		this.shape_726 = new cjs.Shape();
		this.shape_726.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,101.5,28.4,101.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_726.setTransform(28.4,101.5);
	
		this.shape_727 = new cjs.Shape();
		this.shape_727.graphics.lf(["#999999","#333333"],[0,1],0,-142.6,0,50.5).s().p("AhTnYIABAAIB2g6IAxgWIAAQDIioBOg");
		this.shape_727.setTransform(48.5,152.5);
	
		this.shape_728 = new cjs.Shape();
		this.shape_728.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-142.6,-9.5,50.5).s().p("AjGICIAAwDIACAAIAAABIGLAAIAAQBIAAABg");
		this.shape_728.setTransform(20,156.5);
	
		this.shape_729 = new cjs.Shape();
		this.shape_729.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,101.2,28.4,101.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_729.setTransform(28.4,101.2);
	
		this.shape_730 = new cjs.Shape();
		this.shape_730.graphics.lf(["#999999","#333333"],[0,1],0,-142.5,0,50.6).s().p("AhTnaIABAAIB2g6IAxgVIAAQFIioBPg");
		this.shape_730.setTransform(48.5,152.3);
	
		this.shape_731 = new cjs.Shape();
		this.shape_731.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-142.5,-9.5,50.6).s().p("AjGIDIAAwGIACAAIAAABIGLAAIAAQFIAAAAg");
		this.shape_731.setTransform(20,156.3);
	
		this.shape_732 = new cjs.Shape();
		this.shape_732.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,100.8,28.4,100.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_732.setTransform(28.4,100.8);
	
		this.shape_733 = new cjs.Shape();
		this.shape_733.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-142.3,-9.5,50.8).s().p("AjGIFIAAwJIACAAIAAAAIGLAAIAAQIIAAABg");
		this.shape_733.setTransform(20,156.1);
	
		this.shape_734 = new cjs.Shape();
		this.shape_734.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,100.5,28.4,100.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_734.setTransform(28.4,100.5);
	
		this.shape_735 = new cjs.Shape();
		this.shape_735.graphics.lf(["#999999","#333333"],[0,1],0,-142.3,0,50.8).s().p("AhTncIABAAIB2g5IAxgWIAAQJIioBOg");
		this.shape_735.setTransform(48.5,152.1);
	
		this.shape_736 = new cjs.Shape();
		this.shape_736.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-142.1,-9.5,51).s().p("AjGIHIAAwNIACAAIAAAAIGLAAIAAQMIAAABg");
		this.shape_736.setTransform(20,156);
	
		this.shape_737 = new cjs.Shape();
		this.shape_737.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,100.1,28.4,100.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_737.setTransform(28.4,100.1);
	
		this.shape_738 = new cjs.Shape();
		this.shape_738.graphics.lf(["#999999","#333333"],[0,1],0,-142.1,0,51).s().p("AhTneIABAAIB2g5IAxgWIAAQNIioBOg");
		this.shape_738.setTransform(48.5,152);
	
		this.shape_739 = new cjs.Shape();
		this.shape_739.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.9,-9.5,51.2).s().p("AjGIJIAAwRIACAAIAAABIGLAAIAAQPIAAABg");
		this.shape_739.setTransform(20,155.8);
	
		this.shape_740 = new cjs.Shape();
		this.shape_740.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,99.8,28.4,99.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_740.setTransform(28.4,99.8);
	
		this.shape_741 = new cjs.Shape();
		this.shape_741.graphics.lf(["#999999","#333333"],[0,1],0,-141.9,0,51.2).s().p("AhTnfIABAAIB2g6IAxgWIAAQRIioBOg");
		this.shape_741.setTransform(48.5,151.8);
	
		this.shape_742 = new cjs.Shape();
		this.shape_742.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.8,-9.5,51.3).s().p("AjGIKIAAwTIACAAIAAAAIGLAAIAAQTIAAAAg");
		this.shape_742.setTransform(20,155.6);
	
		this.shape_743 = new cjs.Shape();
		this.shape_743.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,99.4,28.4,99.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_743.setTransform(28.4,99.4);
	
		this.shape_744 = new cjs.Shape();
		this.shape_744.graphics.lf(["#999999","#333333"],[0,1],0,-141.8,0,51.3).s().p("AhTnhIABAAIB2g6IAxgVIAAQTIioBPg");
		this.shape_744.setTransform(48.5,151.6);
	
		this.shape_745 = new cjs.Shape();
		this.shape_745.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.6,-9.5,51.5).s().p("AjGIMIAAwXIACAAIAAAAIGLAAIAAQWIAAABg");
		this.shape_745.setTransform(20,155.4);
	
		this.shape_746 = new cjs.Shape();
		this.shape_746.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,99.1,28.4,99.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_746.setTransform(28.4,99.1);
	
		this.shape_747 = new cjs.Shape();
		this.shape_747.graphics.lf(["#999999","#333333"],[0,1],0,-141.6,0,51.5).s().p("AhTnjIABAAIB2g5IAxgWIAAQXIioBOg");
		this.shape_747.setTransform(48.5,151.4);
	
		this.shape_748 = new cjs.Shape();
		this.shape_748.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.4,-9.5,51.7).s().p("AjGIOIAAwbIACAAIAAABIGLAAIAAQZIAAABg");
		this.shape_748.setTransform(20,155.3);
	
		this.shape_749 = new cjs.Shape();
		this.shape_749.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,98.7,28.4,98.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_749.setTransform(28.4,98.7);
	
		this.shape_750 = new cjs.Shape();
		this.shape_750.graphics.lf(["#999999","#333333"],[0,1],0,-141.4,0,51.7).s().p("AhTnkIABAAIB2g6IAxgWIAAQbIioBOg");
		this.shape_750.setTransform(48.5,151.3);
	
		this.shape_751 = new cjs.Shape();
		this.shape_751.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.2,-9.5,51.9).s().p("AjGIQIAAwfIACAAIAAABIGLAAIAAQdIAAABg");
		this.shape_751.setTransform(20,155.1);
	
		this.shape_752 = new cjs.Shape();
		this.shape_752.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,98.4,28.4,98.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_752.setTransform(28.4,98.4);
	
		this.shape_753 = new cjs.Shape();
		this.shape_753.graphics.lf(["#999999","#333333"],[0,1],0,-141.2,0,51.9).s().p("AhTnmIABAAIB2g6IAxgWIAAQfIioBOg");
		this.shape_753.setTransform(48.5,151.1);
	
		this.shape_754 = new cjs.Shape();
		this.shape_754.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-141.1,-9.5,52).s().p("AjGIRIAAwiIACAAIAAABIGLAAIAAQhIAAAAg");
		this.shape_754.setTransform(20,154.9);
	
		this.shape_755 = new cjs.Shape();
		this.shape_755.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,98,28.4,98).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_755.setTransform(28.4,98);
	
		this.shape_756 = new cjs.Shape();
		this.shape_756.graphics.lf(["#999999","#333333"],[0,1],0,-141.1,0,52).s().p("AhTnoIABAAIB2g5IAxgXIAAQiIioBPg");
		this.shape_756.setTransform(48.5,150.9);
	
		this.shape_757 = new cjs.Shape();
		this.shape_757.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140.9,-9.5,52.2).s().p("AjGITIAAwlIACAAIAAAAIGLAAIAAQkIAAABg");
		this.shape_757.setTransform(20,154.7);
	
		this.shape_758 = new cjs.Shape();
		this.shape_758.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,97.7,28.4,97.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_758.setTransform(28.4,97.7);
	
		this.shape_759 = new cjs.Shape();
		this.shape_759.graphics.lf(["#999999","#333333"],[0,1],0,-140.9,0,52.2).s().p("AhTnqIABAAIB2g5IAxgWIAAQlIioBOg");
		this.shape_759.setTransform(48.5,150.7);
	
		this.shape_760 = new cjs.Shape();
		this.shape_760.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140.7,-9.5,52.4).s().p("AjGIVIAAwpIACAAIAAAAIGLAAIAAQoIAAABg");
		this.shape_760.setTransform(20,154.6);
	
		this.shape_761 = new cjs.Shape();
		this.shape_761.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,97.3,28.4,97.3).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_761.setTransform(28.4,97.3);
	
		this.shape_762 = new cjs.Shape();
		this.shape_762.graphics.lf(["#999999","#333333"],[0,1],0,-140.7,0,52.4).s().p("AhTnsIABAAIB2g5IAxgWIAAQpIioBOg");
		this.shape_762.setTransform(48.5,150.6);
	
		this.shape_763 = new cjs.Shape();
		this.shape_763.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140.5,-9.5,52.6).s().p("AjGIXIAAwtIACAAIAAABIGLAAIAAQrIAAABg");
		this.shape_763.setTransform(20,154.4);
	
		this.shape_764 = new cjs.Shape();
		this.shape_764.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,97,28.4,97).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_764.setTransform(28.4,97);
	
		this.shape_765 = new cjs.Shape();
		this.shape_765.graphics.lf(["#999999","#333333"],[0,1],0,-140.5,0,52.6).s().p("AhTntIABAAIB2g6IAxgWIAAQtIioBOg");
		this.shape_765.setTransform(48.5,150.4);
	
		this.shape_766 = new cjs.Shape();
		this.shape_766.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140.4,-9.5,52.7).s().p("AjGIYIAAwvIACAAIAAAAIGLAAIAAQvIAAAAg");
		this.shape_766.setTransform(20,154.2);
	
		this.shape_767 = new cjs.Shape();
		this.shape_767.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,96.6,28.4,96.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_767.setTransform(28.4,96.6);
	
		this.shape_768 = new cjs.Shape();
		this.shape_768.graphics.lf(["#999999","#333333"],[0,1],0,-140.4,0,52.7).s().p("AhTnvIABAAIB2g6IAxgVIAAQvIioBPg");
		this.shape_768.setTransform(48.5,150.2);
	
		this.shape_769 = new cjs.Shape();
		this.shape_769.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140.2,-9.5,52.9).s().p("AjGIaIAAwzIACAAIAAAAIGLAAIAAQyIAAABg");
		this.shape_769.setTransform(20,154);
	
		this.shape_770 = new cjs.Shape();
		this.shape_770.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,96.3,28.4,96.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_770.setTransform(28.4,96.3);
	
		this.shape_771 = new cjs.Shape();
		this.shape_771.graphics.lf(["#999999","#333333"],[0,1],0,-140.2,0,52.9).s().p("AhTnxIABAAIB2g5IAxgWIAAQzIioBOg");
		this.shape_771.setTransform(48.5,150);
	
		this.shape_772 = new cjs.Shape();
		this.shape_772.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-140,-9.5,53.1).s().p("AjGIcIAAw3IACAAIAAAAIGLAAIAAQ2IAAABg");
		this.shape_772.setTransform(20,153.9);
	
		this.shape_773 = new cjs.Shape();
		this.shape_773.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,95.9,28.4,95.9).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_773.setTransform(28.4,95.9);
	
		this.shape_774 = new cjs.Shape();
		this.shape_774.graphics.lf(["#999999","#333333"],[0,1],0,-140,0,53.1).s().p("AhTnzIABAAIB2g5IAxgWIAAQ3IioBOg");
		this.shape_774.setTransform(48.5,149.9);
	
		this.shape_775 = new cjs.Shape();
		this.shape_775.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139.8,-9.5,53.3).s().p("AjGIeIAAw7IACAAIAAABIGLAAIAAQ5IAAABg");
		this.shape_775.setTransform(20,153.7);
	
		this.shape_776 = new cjs.Shape();
		this.shape_776.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,95.6,28.4,95.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_776.setTransform(28.4,95.6);
	
		this.shape_777 = new cjs.Shape();
		this.shape_777.graphics.lf(["#999999","#333333"],[0,1],0,-139.8,0,53.3).s().p("AhTn0IABAAIB2g6IAxgWIAAQ7IioBOg");
		this.shape_777.setTransform(48.5,149.7);
	
		this.shape_778 = new cjs.Shape();
		this.shape_778.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139.7,-9.5,53.4).s().p("AjGIfIAAw+IACAAIAAABIGLAAIAAQ9IAAAAg");
		this.shape_778.setTransform(20,153.5);
	
		this.shape_779 = new cjs.Shape();
		this.shape_779.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,95.2,28.4,95.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_779.setTransform(28.4,95.2);
	
		this.shape_780 = new cjs.Shape();
		this.shape_780.graphics.lf(["#999999","#333333"],[0,1],0,-139.7,0,53.4).s().p("AhTn2IABAAIB2g5IAxgXIAAQ+IioBPg");
		this.shape_780.setTransform(48.5,149.5);
	
		this.shape_781 = new cjs.Shape();
		this.shape_781.graphics.lf(["#999999","#333333"],[0,1],0,-139.5,0,53.6).s().p("AhTn4IABAAIB2g5IAxgWIAARBIioBOg");
		this.shape_781.setTransform(48.5,149.3);
	
		this.shape_782 = new cjs.Shape();
		this.shape_782.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,94.9,28.4,94.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_782.setTransform(28.4,94.9);
	
		this.shape_783 = new cjs.Shape();
		this.shape_783.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139.5,-9.5,53.6).s().p("AjGIhIAAxBIACAAIAAAAIGLAAIAARAIAAABg");
		this.shape_783.setTransform(20,153.3);
	
		this.shape_784 = new cjs.Shape();
		this.shape_784.graphics.lf(["#999999","#333333"],[0,1],0,-139.3,0,53.8).s().p("AhTn5IABAAIB2g6IAxgWIAARFIioBOg");
		this.shape_784.setTransform(48.5,149.2);
	
		this.shape_785 = new cjs.Shape();
		this.shape_785.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,94.5,28.4,94.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_785.setTransform(28.4,94.5);
	
		this.shape_786 = new cjs.Shape();
		this.shape_786.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139.3,-9.5,53.8).s().p("AjGIjIAAxFIACAAIAAABIGLAAIAARDIAAABg");
		this.shape_786.setTransform(20,153.2);
	
		this.shape_787 = new cjs.Shape();
		this.shape_787.graphics.lf(["#999999","#333333"],[0,1],0,-139.1,0,54).s().p("AhTn7IABAAIB2g6IAxgWIAARJIioBOg");
		this.shape_787.setTransform(48.5,149);
	
		this.shape_788 = new cjs.Shape();
		this.shape_788.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,94.2,28.4,94.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_788.setTransform(28.4,94.2);
	
		this.shape_789 = new cjs.Shape();
		this.shape_789.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139.1,-9.5,54).s().p("AjGIlIAAxJIACAAIAAABIGLAAIAARHIAAABg");
		this.shape_789.setTransform(20,153);
	
		this.shape_790 = new cjs.Shape();
		this.shape_790.graphics.lf(["#999999","#333333"],[0,1],0,-139,0,54.1).s().p("AhTn9IABAAIB2g5IAxgWIAARLIioBOg");
		this.shape_790.setTransform(48.5,148.8);
	
		this.shape_791 = new cjs.Shape();
		this.shape_791.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,93.9,28.4,93.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_791.setTransform(28.4,93.9);
	
		this.shape_792 = new cjs.Shape();
		this.shape_792.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-139,-9.5,54.1).s().p("AjGImIAAxLIACAAIAAAAIGLAAIAARKIAAABg");
		this.shape_792.setTransform(20,152.8);
	
		this.shape_793 = new cjs.Shape();
		this.shape_793.graphics.lf(["#999999","#333333"],[0,1],0,-138.8,0,54.3).s().p("AhTn+IABAAIB2g6IAxgWIAARPIioBOg");
		this.shape_793.setTransform(48.5,148.7);
	
		this.shape_794 = new cjs.Shape();
		this.shape_794.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,93.5,28.4,93.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_794.setTransform(28.4,93.5);
	
		this.shape_795 = new cjs.Shape();
		this.shape_795.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-138.8,-9.5,54.3).s().p("AjGIoIAAxPIACAAIAAABIGLAAIAARNIAAABg");
		this.shape_795.setTransform(20,152.7);
	
		this.shape_796 = new cjs.Shape();
		this.shape_796.graphics.lf(["#999999","#333333"],[0,1],0,-138.6,0,54.5).s().p("AhToAIABAAIB2g6IAxgWIAARTIioBOg");
		this.shape_796.setTransform(48.5,148.5);
	
		this.shape_797 = new cjs.Shape();
		this.shape_797.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,93.2,28.4,93.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_797.setTransform(28.4,93.2);
	
		this.shape_798 = new cjs.Shape();
		this.shape_798.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-138.6,-9.5,54.5).s().p("AjGIqIAAxTIACAAIAAABIGLAAIAARRIAAABg");
		this.shape_798.setTransform(20,152.5);
	
		this.shape_799 = new cjs.Shape();
		this.shape_799.graphics.lf(["#999999","#333333"],[0,1],0,-138.5,0,54.6).s().p("AhToCIABAAIB2g6IAxgVIAARVIioBPg");
		this.shape_799.setTransform(48.5,148.3);
	
		this.shape_800 = new cjs.Shape();
		this.shape_800.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,92.8,28.4,92.8).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_800.setTransform(28.4,92.8);
	
		this.shape_801 = new cjs.Shape();
		this.shape_801.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-138.5,-9.5,54.6).s().p("AjGIrIAAxWIACAAIAAABIGLAAIAARVIAAAAg");
		this.shape_801.setTransform(20,152.3);
	
		this.shape_802 = new cjs.Shape();
		this.shape_802.graphics.lf(["#999999","#333333"],[0,1],0,-138.3,0,54.8).s().p("AhToEIABAAIB2g5IAxgWIAARZIioBOg");
		this.shape_802.setTransform(48.5,148.1);
	
		this.shape_803 = new cjs.Shape();
		this.shape_803.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,92.5,28.4,92.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_803.setTransform(28.4,92.5);
	
		this.shape_804 = new cjs.Shape();
		this.shape_804.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-138.3,-9.5,54.8).s().p("AjGItIAAxZIACAAIAAAAIGLAAIAARYIAAABg");
		this.shape_804.setTransform(20,152.1);
	
		this.shape_805 = new cjs.Shape();
		this.shape_805.graphics.lf(["#999999","#333333"],[0,1],0,-138.1,0,55).s().p("AhToGIABAAIB2g5IAxgWIAARdIioBOg");
		this.shape_805.setTransform(48.5,148);
	
		this.shape_806 = new cjs.Shape();
		this.shape_806.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,92.1,28.4,92.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_806.setTransform(28.4,92.1);
	
		this.shape_807 = new cjs.Shape();
		this.shape_807.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-138.1,-9.5,55).s().p("AjGIvIAAxdIACAAIAAAAIGLAAIAARcIAAABg");
		this.shape_807.setTransform(20,152);
	
		this.shape_808 = new cjs.Shape();
		this.shape_808.graphics.lf(["#999999","#333333"],[0,1],0,-137.9,0,55.2).s().p("AhToHIABAAIB2g6IAxgWIAARhIioBOg");
		this.shape_808.setTransform(48.5,147.8);
	
		this.shape_809 = new cjs.Shape();
		this.shape_809.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,91.8,28.4,91.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_809.setTransform(28.4,91.8);
	
		this.shape_810 = new cjs.Shape();
		this.shape_810.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.9,-9.5,55.2).s().p("AjGIxIAAxhIACAAIAAABIGLAAIAARfIAAABg");
		this.shape_810.setTransform(20,151.8);
	
		this.shape_811 = new cjs.Shape();
		this.shape_811.graphics.lf(["#999999","#333333"],[0,1],0,-137.8,0,55.3).s().p("AhToJIABAAIB2g5IAxgXIAARkIioBPg");
		this.shape_811.setTransform(48.5,147.6);
	
		this.shape_812 = new cjs.Shape();
		this.shape_812.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,91.4,28.4,91.4).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_812.setTransform(28.4,91.4);
	
		this.shape_813 = new cjs.Shape();
		this.shape_813.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.8,-9.5,55.3).s().p("AjGIyIAAxjIACAAIAAAAIGLAAIAARjIAAAAg");
		this.shape_813.setTransform(20,151.6);
	
		this.shape_814 = new cjs.Shape();
		this.shape_814.graphics.lf(["#999999","#333333"],[0,1],0,-137.6,0,55.5).s().p("AhToLIABAAIB2g5IAxgWIAARnIioBOg");
		this.shape_814.setTransform(48.5,147.4);
	
		this.shape_815 = new cjs.Shape();
		this.shape_815.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,91.1,28.4,91.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_815.setTransform(28.4,91.1);
	
		this.shape_816 = new cjs.Shape();
		this.shape_816.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.6,-9.5,55.5).s().p("AjGI0IAAxnIACAAIAAAAIGLAAIAARmIAAABg");
		this.shape_816.setTransform(20,151.4);
	
		this.shape_817 = new cjs.Shape();
		this.shape_817.graphics.lf(["#999999","#333333"],[0,1],0,-137.4,0,55.7).s().p("AhToMIABAAIB2g6IAxgWIAARrIioBOg");
		this.shape_817.setTransform(48.5,147.3);
	
		this.shape_818 = new cjs.Shape();
		this.shape_818.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,90.7,28.4,90.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_818.setTransform(28.4,90.7);
	
		this.shape_819 = new cjs.Shape();
		this.shape_819.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.4,-9.5,55.7).s().p("AjGI2IAAxrIACAAIAAABIGLAAIAARpIAAABg");
		this.shape_819.setTransform(20,151.3);
	
		this.shape_820 = new cjs.Shape();
		this.shape_820.graphics.lf(["#999999","#333333"],[0,1],0,-137.2,0,55.9).s().p("AhToOIABAAIB2g6IAxgWIAARvIioBOg");
		this.shape_820.setTransform(48.5,147.1);
	
		this.shape_821 = new cjs.Shape();
		this.shape_821.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,90.4,28.4,90.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_821.setTransform(28.4,90.4);
	
		this.shape_822 = new cjs.Shape();
		this.shape_822.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.2,-9.5,55.9).s().p("AjGI4IAAxvIACAAIAAABIGLAAIAARtIAAABg");
		this.shape_822.setTransform(20,151.1);
	
		this.shape_823 = new cjs.Shape();
		this.shape_823.graphics.lf(["#999999","#333333"],[0,1],0,-137.1,0,56).s().p("AhToQIABAAIB2g6IAxgVIAARxIioBPg");
		this.shape_823.setTransform(48.5,146.9);
	
		this.shape_824 = new cjs.Shape();
		this.shape_824.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,90,28.4,90).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_824.setTransform(28.4,90);
	
		this.shape_825 = new cjs.Shape();
		this.shape_825.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-137.1,-9.5,56).s().p("AjGI5IAAxyIACAAIAAABIGLAAIAARxIAAAAg");
		this.shape_825.setTransform(20,150.9);
	
		this.shape_826 = new cjs.Shape();
		this.shape_826.graphics.lf(["#999999","#333333"],[0,1],0,-136.9,0,56.2).s().p("AhToSIABAAIB2g5IAxgWIAAR1IioBOg");
		this.shape_826.setTransform(48.5,146.7);
	
		this.shape_827 = new cjs.Shape();
		this.shape_827.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,89.7,28.4,89.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_827.setTransform(28.4,89.7);
	
		this.shape_828 = new cjs.Shape();
		this.shape_828.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136.9,-9.5,56.2).s().p("AjGI7IAAx1IACAAIAAAAIGLAAIAAR0IAAABg");
		this.shape_828.setTransform(20,150.7);
	
		this.shape_829 = new cjs.Shape();
		this.shape_829.graphics.lf(["#999999","#333333"],[0,1],0,-136.7,0,56.4).s().p("AhToUIABAAIB2g5IAxgWIAAR5IioBOg");
		this.shape_829.setTransform(48.5,146.6);
	
		this.shape_830 = new cjs.Shape();
		this.shape_830.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,89.3,28.4,89.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_830.setTransform(28.4,89.3);
	
		this.shape_831 = new cjs.Shape();
		this.shape_831.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136.7,-9.5,56.4).s().p("AjGI9IAAx5IACAAIAAAAIGLAAIAAR4IAAABg");
		this.shape_831.setTransform(20,150.6);
	
		this.shape_832 = new cjs.Shape();
		this.shape_832.graphics.lf(["#999999","#333333"],[0,1],0,-136.5,0,56.6).s().p("AhToVIABAAIB2g6IAxgWIAAR9IioBOg");
		this.shape_832.setTransform(48.5,146.4);
	
		this.shape_833 = new cjs.Shape();
		this.shape_833.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,89,28.4,89).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_833.setTransform(28.4,89);
	
		this.shape_834 = new cjs.Shape();
		this.shape_834.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136.5,-9.5,56.6).s().p("AjGI/IAAx9IACAAIAAABIGLAAIAAR7IAAABg");
		this.shape_834.setTransform(20,150.4);
	
		this.shape_835 = new cjs.Shape();
		this.shape_835.graphics.lf(["#999999","#333333"],[0,1],0,-136.4,0,56.7).s().p("AhToXIABAAIB2g6IAxgWIAASAIioBPg");
		this.shape_835.setTransform(48.5,146.2);
	
		this.shape_836 = new cjs.Shape();
		this.shape_836.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,88.6,28.4,88.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_836.setTransform(28.4,88.6);
	
		this.shape_837 = new cjs.Shape();
		this.shape_837.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136.4,-9.5,56.7).s().p("AjGJAIAAx/IACAAIAAAAIGLAAIAAR/IAAAAg");
		this.shape_837.setTransform(20,150.2);
	
		this.shape_838 = new cjs.Shape();
		this.shape_838.graphics.lf(["#999999","#333333"],[0,1],0,-136.2,0,56.9).s().p("AhToZIABAAIB2g5IAxgWIAASDIioBOg");
		this.shape_838.setTransform(48.5,146);
	
		this.shape_839 = new cjs.Shape();
		this.shape_839.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,88.3,28.4,88.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_839.setTransform(28.4,88.3);
	
		this.shape_840 = new cjs.Shape();
		this.shape_840.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136.2,-9.5,56.9).s().p("AjGJCIAAyDIACAAIAAAAIGLAAIAASCIAAABg");
		this.shape_840.setTransform(20,150);
	
		this.shape_841 = new cjs.Shape();
		this.shape_841.graphics.lf(["#999999","#333333"],[0,1],0,-136,0,57.1).s().p("AhToaIABAAIB2g6IAxgWIAASHIioBOg");
		this.shape_841.setTransform(48.5,145.9);
	
		this.shape_842 = new cjs.Shape();
		this.shape_842.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,87.9,28.4,87.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_842.setTransform(28.4,87.9);
	
		this.shape_843 = new cjs.Shape();
		this.shape_843.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-136,-9.5,57.1).s().p("AjGJEIAAyHIACAAIAAABIGLAAIAASFIAAABg");
		this.shape_843.setTransform(20,149.9);
	
		this.shape_844 = new cjs.Shape();
		this.shape_844.graphics.lf(["#999999","#333333"],[0,1],0,-135.8,0,57.3).s().p("AhTocIABAAIB2g6IAxgWIAASLIioBOg");
		this.shape_844.setTransform(48.5,145.7);
	
		this.shape_845 = new cjs.Shape();
		this.shape_845.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,87.6,28.4,87.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_845.setTransform(28.4,87.6);
	
		this.shape_846 = new cjs.Shape();
		this.shape_846.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135.8,-9.5,57.3).s().p("AjGJGIAAyLIACAAIAAABIGLAAIAASJIAAABg");
		this.shape_846.setTransform(20,149.7);
	
		this.shape_847 = new cjs.Shape();
		this.shape_847.graphics.lf(["#999999","#333333"],[0,1],0,-135.7,0,57.4).s().p("AhToeIABAAIB2g5IAxgXIAASOIioBPg");
		this.shape_847.setTransform(48.5,145.5);
	
		this.shape_848 = new cjs.Shape();
		this.shape_848.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,87.2,28.4,87.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_848.setTransform(28.4,87.2);
	
		this.shape_849 = new cjs.Shape();
		this.shape_849.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135.7,-9.5,57.4).s().p("AjGJHIAAyOIACAAIAAABIGLAAIAASNIAAAAg");
		this.shape_849.setTransform(20,149.5);
	
		this.shape_850 = new cjs.Shape();
		this.shape_850.graphics.lf(["#999999","#333333"],[0,1],0,-135.5,0,57.6).s().p("AhTogIABAAIB2g5IAxgWIAASRIioBOg");
		this.shape_850.setTransform(48.5,145.3);
	
		this.shape_851 = new cjs.Shape();
		this.shape_851.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,86.9,28.4,86.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_851.setTransform(28.4,86.9);
	
		this.shape_852 = new cjs.Shape();
		this.shape_852.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135.5,-9.5,57.6).s().p("AjGJJIAAyRIACAAIAAAAIGLAAIAASQIAAABg");
		this.shape_852.setTransform(20,149.3);
	
		this.shape_853 = new cjs.Shape();
		this.shape_853.graphics.lf(["#999999","#333333"],[0,1],0,-135.3,0,57.8).s().p("AhToiIABAAIB2g5IAxgWIAASVIioBOg");
		this.shape_853.setTransform(48.5,145.2);
	
		this.shape_854 = new cjs.Shape();
		this.shape_854.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,86.5,28.4,86.5).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_854.setTransform(28.4,86.5);
	
		this.shape_855 = new cjs.Shape();
		this.shape_855.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135.3,-9.5,57.8).s().p("AjGJLIAAyVIACAAIAAAAIGLAAIAASUIAAABg");
		this.shape_855.setTransform(20,149.2);
	
		this.shape_856 = new cjs.Shape();
		this.shape_856.graphics.lf(["#999999","#333333"],[0,1],0,-135.1,0,58).s().p("AhTojIABAAIB2g6IAxgWIAASZIioBOg");
		this.shape_856.setTransform(48.5,145);
	
		this.shape_857 = new cjs.Shape();
		this.shape_857.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,86.2,28.4,86.2).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_857.setTransform(28.4,86.2);
	
		this.shape_858 = new cjs.Shape();
		this.shape_858.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135.1,-9.5,58).s().p("AjGJNIAAyZIACAAIAAABIGLAAIAASXIAAABg");
		this.shape_858.setTransform(20,149);
	
		this.shape_859 = new cjs.Shape();
		this.shape_859.graphics.lf(["#999999","#333333"],[0,1],0,-135,0,58.1).s().p("AhTolIABAAIB2g6IAxgVIAASbIioBPg");
		this.shape_859.setTransform(48.5,144.8);
	
		this.shape_860 = new cjs.Shape();
		this.shape_860.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,85.8,28.4,85.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_860.setTransform(28.4,85.8);
	
		this.shape_861 = new cjs.Shape();
		this.shape_861.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-135,-9.5,58.1).s().p("AjGJOIAAybIACAAIAAAAIGLAAIAASbIAAAAg");
		this.shape_861.setTransform(20,148.8);
	
		this.shape_862 = new cjs.Shape();
		this.shape_862.graphics.lf(["#999999","#333333"],[0,1],0,-134.8,0,58.3).s().p("AhTonIABAAIB2g5IAxgWIAASfIioBOg");
		this.shape_862.setTransform(48.5,144.6);
	
		this.shape_863 = new cjs.Shape();
		this.shape_863.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,85.5,28.4,85.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_863.setTransform(28.4,85.5);
	
		this.shape_864 = new cjs.Shape();
		this.shape_864.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-134.8,-9.5,58.3).s().p("AjGJQIAAyfIACAAIAAAAIGLAAIAASeIAAABg");
		this.shape_864.setTransform(20,148.6);
	
		this.shape_865 = new cjs.Shape();
		this.shape_865.graphics.lf(["#999999","#333333"],[0,1],0,-134.6,0,58.5).s().p("AhTooIABAAIB2g6IAxgWIAASjIioBOg");
		this.shape_865.setTransform(48.5,144.5);
	
		this.shape_866 = new cjs.Shape();
		this.shape_866.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,85.2,28.4,85.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_866.setTransform(28.4,85.2);
	
		this.shape_867 = new cjs.Shape();
		this.shape_867.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-134.6,-9.5,58.5).s().p("AjGJSIAAyjIACAAIAAABIGLAAIAAShIAAABg");
		this.shape_867.setTransform(20,148.5);
	
		this.shape_868 = new cjs.Shape();
		this.shape_868.graphics.lf(["#999999","#333333"],[0,1],0,-134.5,0,58.6).s().p("AhToqIABAAIB2g6IAxgVIAASlIioBPg");
		this.shape_868.setTransform(48.5,144.3);
	
		this.shape_869 = new cjs.Shape();
		this.shape_869.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,84.8,28.4,84.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_869.setTransform(28.4,84.8);
	
		this.shape_870 = new cjs.Shape();
		this.shape_870.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-134.5,-9.5,58.6).s().p("AjGJTIAAylIACAAIAAAAIGLAAIAASlIAAAAg");
		this.shape_870.setTransform(20,148.3);
	
		this.shape_871 = new cjs.Shape();
		this.shape_871.graphics.lf(["#999999","#333333"],[0,1],0,-134.3,0,58.8).s().p("AhTosIABAAIB2g5IAxgWIAASpIioBOg");
		this.shape_871.setTransform(48.5,144.1);
	
		this.shape_872 = new cjs.Shape();
		this.shape_872.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,84.5,28.4,84.5).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_872.setTransform(28.4,84.5);
	
		this.shape_873 = new cjs.Shape();
		this.shape_873.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-134.3,-9.5,58.8).s().p("AjGJVIAAypIACAAIAAAAIGLAAIAASoIAAABg");
		this.shape_873.setTransform(20,148.1);
	
		this.shape_874 = new cjs.Shape();
		this.shape_874.graphics.lf(["#999999","#333333"],[0,1],0,-134.1,0,59).s().p("AhTouIABAAIB2g5IAxgWIAAStIioBOg");
		this.shape_874.setTransform(48.5,144);
	
		this.shape_875 = new cjs.Shape();
		this.shape_875.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,84.1,28.4,84.1).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_875.setTransform(28.4,84.1);
	
		this.shape_876 = new cjs.Shape();
		this.shape_876.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-134.1,-9.5,59).s().p("AjGJXIAAytIACAAIAAAAIGLAAIAASsIAAABg");
		this.shape_876.setTransform(20,148);
	
		this.shape_877 = new cjs.Shape();
		this.shape_877.graphics.lf(["#999999","#333333"],[0,1],0,-133.9,0,59.2).s().p("AhTovIABAAIB2g6IAxgWIAASxIioBOg");
		this.shape_877.setTransform(48.5,143.8);
	
		this.shape_878 = new cjs.Shape();
		this.shape_878.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,83.8,28.4,83.8).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_878.setTransform(28.4,83.8);
	
		this.shape_879 = new cjs.Shape();
		this.shape_879.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.9,-9.5,59.2).s().p("AjGJZIAAyxIACAAIAAABIGLAAIAASvIAAABg");
		this.shape_879.setTransform(20,147.8);
	
		this.shape_880 = new cjs.Shape();
		this.shape_880.graphics.lf(["#999999","#333333"],[0,1],0,-133.8,0,59.3).s().p("AhToxIABAAIB2g5IAxgXIAAS0IioBPg");
		this.shape_880.setTransform(48.5,143.6);
	
		this.shape_881 = new cjs.Shape();
		this.shape_881.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,83.4,28.4,83.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_881.setTransform(28.4,83.4);
	
		this.shape_882 = new cjs.Shape();
		this.shape_882.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.8,-9.5,59.3).s().p("AjGJaIAAy0IACAAIAAABIGLAAIAASzIAAAAg");
		this.shape_882.setTransform(20,147.6);
	
		this.shape_883 = new cjs.Shape();
		this.shape_883.graphics.lf(["#999999","#333333"],[0,1],0,-133.6,0,59.5).s().p("AhTozIABAAIB2g5IAxgWIAAS3IioBOg");
		this.shape_883.setTransform(48.5,143.4);
	
		this.shape_884 = new cjs.Shape();
		this.shape_884.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,83.1,28.4,83.1).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_884.setTransform(28.4,83.1);
	
		this.shape_885 = new cjs.Shape();
		this.shape_885.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.6,-9.5,59.5).s().p("AjGJcIAAy3IACAAIAAAAIGLAAIAAS2IAAABg");
		this.shape_885.setTransform(20,147.4);
	
		this.shape_886 = new cjs.Shape();
		this.shape_886.graphics.lf(["#999999","#333333"],[0,1],0,-133.4,0,59.7).s().p("AhTo0IABAAIB2g6IAxgWIAAS7IioBOg");
		this.shape_886.setTransform(48.5,143.3);
	
		this.shape_887 = new cjs.Shape();
		this.shape_887.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,82.7,28.4,82.7).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_887.setTransform(28.4,82.7);
	
		this.shape_888 = new cjs.Shape();
		this.shape_888.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.4,-9.5,59.7).s().p("AjGJeIAAy7IACAAIAAABIGLAAIAAS5IAAABg");
		this.shape_888.setTransform(20,147.3);
	
		this.shape_889 = new cjs.Shape();
		this.shape_889.graphics.lf(["#999999","#333333"],[0,1],0,-133.2,0,59.9).s().p("AhTo2IABAAIB2g6IAxgWIAAS/IioBOg");
		this.shape_889.setTransform(48.5,143.1);
	
		this.shape_890 = new cjs.Shape();
		this.shape_890.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,82.4,28.4,82.4).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_890.setTransform(28.4,82.4);
	
		this.shape_891 = new cjs.Shape();
		this.shape_891.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.2,-9.5,59.9).s().p("AjGJgIAAy/IACAAIAAABIGLAAIAAS9IAAABg");
		this.shape_891.setTransform(20,147.1);
	
		this.shape_892 = new cjs.Shape();
		this.shape_892.graphics.lf(["#999999","#333333"],[0,1],0,-133.1,0,60).s().p("AhTo4IABAAIB2g6IAxgVIAATBIioBPg");
		this.shape_892.setTransform(48.5,142.9);
	
		this.shape_893 = new cjs.Shape();
		this.shape_893.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,82,28.4,82).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAVIh4A4g");
		this.shape_893.setTransform(28.4,82);
	
		this.shape_894 = new cjs.Shape();
		this.shape_894.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-133.1,-9.5,60).s().p("AjGJhIAAzCIACAAIAAABIGLAAIAATBIAAAAg");
		this.shape_894.setTransform(20,146.9);
	
		this.shape_895 = new cjs.Shape();
		this.shape_895.graphics.lf(["#999999","#333333"],[0,1],0,-132.9,0,60.2).s().p("AhTo6IABAAIB2g5IAxgWIAATFIioBOg");
		this.shape_895.setTransform(48.5,142.7);
	
		this.shape_896 = new cjs.Shape();
		this.shape_896.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,81.7,28.4,81.7).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_896.setTransform(28.4,81.7);
	
		this.shape_897 = new cjs.Shape();
		this.shape_897.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132.9,-9.5,60.2).s().p("AjGJjIAAzFIACAAIAAAAIGLAAIAATEIAAABg");
		this.shape_897.setTransform(20,146.7);
	
		this.shape_898 = new cjs.Shape();
		this.shape_898.graphics.lf(["#999999","#333333"],[0,1],0,-132.7,0,60.4).s().p("AhTo8IABAAIB2g5IAxgWIAATJIioBOg");
		this.shape_898.setTransform(48.5,142.6);
	
		this.shape_899 = new cjs.Shape();
		this.shape_899.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,81.3,28.4,81.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_899.setTransform(28.4,81.3);
	
		this.shape_900 = new cjs.Shape();
		this.shape_900.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132.7,-9.5,60.4).s().p("AjGJlIAAzJIACAAIAAAAIGLAAIAATIIAAABg");
		this.shape_900.setTransform(20,146.6);
	
		this.shape_901 = new cjs.Shape();
		this.shape_901.graphics.lf(["#999999","#333333"],[0,1],0,-132.5,0,60.6).s().p("AhTo9IABAAIB2g6IAxgWIAATNIioBOg");
		this.shape_901.setTransform(48.5,142.4);
	
		this.shape_902 = new cjs.Shape();
		this.shape_902.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,81,28.4,81).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAVIh4A4g");
		this.shape_902.setTransform(28.4,81);
	
		this.shape_903 = new cjs.Shape();
		this.shape_903.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132.5,-9.5,60.6).s().p("AjGJnIAAzNIACAAIAAABIGLAAIAATLIAAABg");
		this.shape_903.setTransform(20,146.4);
	
		this.shape_904 = new cjs.Shape();
		this.shape_904.graphics.lf(["#999999","#333333"],[0,1],0,-132.4,0,60.7).s().p("AhTo/IABAAIB2g5IAxgXIAATQIioBPg");
		this.shape_904.setTransform(48.5,142.2);
	
		this.shape_905 = new cjs.Shape();
		this.shape_905.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,80.6,28.4,80.6).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_905.setTransform(28.4,80.6);
	
		this.shape_906 = new cjs.Shape();
		this.shape_906.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132.4,-9.5,60.7).s().p("AjGJoIAAzPIACAAIAAAAIGLAAIAATPIAAAAg");
		this.shape_906.setTransform(20,146.2);
	
		this.shape_907 = new cjs.Shape();
		this.shape_907.graphics.lf(["#999999","#333333"],[0,1],0,-132.2,0,60.9).s().p("AhTpBIABAAIB2g5IAxgWIAATTIioBOg");
		this.shape_907.setTransform(48.5,142);
	
		this.shape_908 = new cjs.Shape();
		this.shape_908.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,80.3,28.4,80.3).s().p("ABzAnImLAAIAAAAICjhNIGOAAIgsAWIh4A3g");
		this.shape_908.setTransform(28.4,80.3);
	
		this.shape_909 = new cjs.Shape();
		this.shape_909.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132.2,-9.5,60.9).s().p("AjGJqIAAzTIACAAIAAAAIGLAAIAATSIAAABg");
		this.shape_909.setTransform(20,146);
	
		this.shape_910 = new cjs.Shape();
		this.shape_910.graphics.lf(["#999999","#333333"],[0,1],0,-132,0,61.1).s().p("AhTpCIABAAIB2g6IAxgWIAATXIioBOg");
		this.shape_910.setTransform(48.5,141.9);
	
		this.shape_911 = new cjs.Shape();
		this.shape_911.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,79.9,28.4,79.9).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_911.setTransform(28.4,79.9);
	
		this.shape_912 = new cjs.Shape();
		this.shape_912.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-132,-9.5,61.1).s().p("AjGJsIAAzXIACAAIAAABIGLAAIAATVIAAABg");
		this.shape_912.setTransform(20,145.9);
	
		this.shape_913 = new cjs.Shape();
		this.shape_913.graphics.lf(["#999999","#333333"],[0,1],0,-131.8,0,61.3).s().p("AhTpEIABAAIB2g6IAxgWIAATbIioBOg");
		this.shape_913.setTransform(48.5,141.7);
	
		this.shape_914 = new cjs.Shape();
		this.shape_914.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,79.6,28.4,79.6).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_914.setTransform(28.4,79.6);
	
		this.shape_915 = new cjs.Shape();
		this.shape_915.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-131.8,-9.5,61.3).s().p("AjGJuIAAzbIACAAIAAABIGLAAIAATZIAAABg");
		this.shape_915.setTransform(20,145.7);
	
		this.shape_916 = new cjs.Shape();
		this.shape_916.graphics.lf(["#999999","#333333"],[0,1],0,-131.7,0,61.4).s().p("AhTpGIABAAIB2g5IAxgWIAATdIioBPg");
		this.shape_916.setTransform(48.5,141.5);
	
		this.shape_917 = new cjs.Shape();
		this.shape_917.graphics.lf(["#999999","#CCCCCC"],[0,1],28.4,79.2,28.4,79.2).s().p("ABzAnImLAAIAAgBICjhMIGOAAIgsAWIh4A3g");
		this.shape_917.setTransform(28.4,79.2);
	
		this.shape_918 = new cjs.Shape();
		this.shape_918.graphics.lf(["#CCCCCC","#666666"],[0,1],-9.5,-131.7,-9.5,61.4).s().p("AjGJvIAAzeIACAAIAAABIGLAAIAATdIAAAAg");
		this.shape_918.setTransform(20,145.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_165},{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_183},{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_195},{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_198},{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_219},{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220}]},1).to({state:[{t:this.shape_225},{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_228},{t:this.shape_227},{t:this.shape_226}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[{t:this.shape_237},{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_240},{t:this.shape_239},{t:this.shape_238}]},1).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244}]},1).to({state:[{t:this.shape_249},{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_252},{t:this.shape_251},{t:this.shape_250}]},1).to({state:[{t:this.shape_255},{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_258},{t:this.shape_257},{t:this.shape_256}]},1).to({state:[{t:this.shape_261},{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_264},{t:this.shape_263},{t:this.shape_262}]},1).to({state:[{t:this.shape_267},{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_270},{t:this.shape_269},{t:this.shape_268}]},1).to({state:[{t:this.shape_273},{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_276},{t:this.shape_275},{t:this.shape_274}]},1).to({state:[{t:this.shape_279},{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_282},{t:this.shape_281},{t:this.shape_280}]},1).to({state:[{t:this.shape_285},{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_288},{t:this.shape_287},{t:this.shape_286}]},1).to({state:[{t:this.shape_291},{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292}]},1).to({state:[{t:this.shape_297},{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_300},{t:this.shape_299},{t:this.shape_298}]},1).to({state:[{t:this.shape_303},{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304}]},1).to({state:[{t:this.shape_309},{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_312},{t:this.shape_311},{t:this.shape_310}]},1).to({state:[{t:this.shape_315},{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_318},{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_321},{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_324},{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_327},{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_330},{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_333},{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_336},{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_339},{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_342},{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_345},{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_348},{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_351},{t:this.shape_350},{t:this.shape_349}]},1).to({state:[{t:this.shape_354},{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_357},{t:this.shape_356},{t:this.shape_355}]},1).to({state:[{t:this.shape_360},{t:this.shape_359},{t:this.shape_358}]},1).to({state:[{t:this.shape_363},{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364}]},1).to({state:[{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_372},{t:this.shape_371},{t:this.shape_370}]},1).to({state:[{t:this.shape_375},{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_378},{t:this.shape_377},{t:this.shape_376}]},1).to({state:[{t:this.shape_381},{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.shape_382}]},1).to({state:[{t:this.shape_387},{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_390},{t:this.shape_389},{t:this.shape_388}]},1).to({state:[{t:this.shape_393},{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_396},{t:this.shape_395},{t:this.shape_394}]},1).to({state:[{t:this.shape_399},{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_402},{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_405},{t:this.shape_404},{t:this.shape_403}]},1).to({state:[{t:this.shape_408},{t:this.shape_407},{t:this.shape_406}]},1).to({state:[{t:this.shape_411},{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_414},{t:this.shape_413},{t:this.shape_412}]},1).to({state:[{t:this.shape_417},{t:this.shape_416},{t:this.shape_415}]},1).to({state:[{t:this.shape_420},{t:this.shape_419},{t:this.shape_418}]},1).to({state:[{t:this.shape_423},{t:this.shape_422},{t:this.shape_421}]},1).to({state:[{t:this.shape_426},{t:this.shape_425},{t:this.shape_424}]},1).to({state:[{t:this.shape_429},{t:this.shape_428},{t:this.shape_427}]},1).to({state:[{t:this.shape_432},{t:this.shape_431},{t:this.shape_430}]},1).to({state:[{t:this.shape_435},{t:this.shape_434},{t:this.shape_433}]},1).to({state:[{t:this.shape_438},{t:this.shape_437},{t:this.shape_436}]},1).to({state:[{t:this.shape_441},{t:this.shape_440},{t:this.shape_439}]},1).to({state:[{t:this.shape_444},{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_447},{t:this.shape_446},{t:this.shape_445}]},1).to({state:[{t:this.shape_450},{t:this.shape_449},{t:this.shape_448}]},1).to({state:[{t:this.shape_453},{t:this.shape_452},{t:this.shape_451}]},1).to({state:[{t:this.shape_456},{t:this.shape_455},{t:this.shape_454}]},1).to({state:[{t:this.shape_459},{t:this.shape_458},{t:this.shape_457}]},1).to({state:[{t:this.shape_462},{t:this.shape_461},{t:this.shape_460}]},1).to({state:[{t:this.shape_465},{t:this.shape_464},{t:this.shape_463}]},1).to({state:[{t:this.shape_468},{t:this.shape_467},{t:this.shape_466}]},1).to({state:[{t:this.shape_471},{t:this.shape_470},{t:this.shape_469}]},1).to({state:[{t:this.shape_474},{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_477},{t:this.shape_476},{t:this.shape_475}]},1).to({state:[{t:this.shape_480},{t:this.shape_479},{t:this.shape_478}]},1).to({state:[{t:this.shape_483},{t:this.shape_482},{t:this.shape_481}]},1).to({state:[{t:this.shape_486},{t:this.shape_485},{t:this.shape_484}]},1).to({state:[{t:this.shape_489},{t:this.shape_488},{t:this.shape_487}]},1).to({state:[{t:this.shape_492},{t:this.shape_491},{t:this.shape_490}]},1).to({state:[{t:this.shape_495},{t:this.shape_494},{t:this.shape_493}]},1).to({state:[{t:this.shape_498},{t:this.shape_497},{t:this.shape_496}]},1).to({state:[{t:this.shape_501},{t:this.shape_500},{t:this.shape_499}]},1).to({state:[{t:this.shape_504},{t:this.shape_503},{t:this.shape_502}]},1).to({state:[{t:this.shape_507},{t:this.shape_506},{t:this.shape_505}]},1).to({state:[{t:this.shape_510},{t:this.shape_509},{t:this.shape_508}]},1).to({state:[{t:this.shape_513},{t:this.shape_512},{t:this.shape_511}]},1).to({state:[{t:this.shape_516},{t:this.shape_515},{t:this.shape_514}]},1).to({state:[{t:this.shape_519},{t:this.shape_518},{t:this.shape_517}]},1).to({state:[{t:this.shape_522},{t:this.shape_521},{t:this.shape_520}]},1).to({state:[{t:this.shape_525},{t:this.shape_524},{t:this.shape_523}]},1).to({state:[{t:this.shape_528},{t:this.shape_527},{t:this.shape_526}]},1).to({state:[{t:this.shape_531},{t:this.shape_530},{t:this.shape_529}]},1).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532}]},1).to({state:[{t:this.shape_537},{t:this.shape_536},{t:this.shape_535}]},1).to({state:[{t:this.shape_540},{t:this.shape_539},{t:this.shape_538}]},1).to({state:[{t:this.shape_543},{t:this.shape_542},{t:this.shape_541}]},1).to({state:[{t:this.shape_546},{t:this.shape_545},{t:this.shape_544}]},1).to({state:[{t:this.shape_549},{t:this.shape_548},{t:this.shape_547}]},1).to({state:[{t:this.shape_552},{t:this.shape_551},{t:this.shape_550}]},1).to({state:[{t:this.shape_555},{t:this.shape_554},{t:this.shape_553}]},1).to({state:[{t:this.shape_558},{t:this.shape_557},{t:this.shape_556}]},1).to({state:[{t:this.shape_561},{t:this.shape_560},{t:this.shape_559}]},1).to({state:[{t:this.shape_564},{t:this.shape_563},{t:this.shape_562}]},1).to({state:[{t:this.shape_567},{t:this.shape_566},{t:this.shape_565}]},1).to({state:[{t:this.shape_570},{t:this.shape_569},{t:this.shape_568}]},1).to({state:[{t:this.shape_573},{t:this.shape_572},{t:this.shape_571}]},1).to({state:[{t:this.shape_576},{t:this.shape_575},{t:this.shape_574}]},1).to({state:[{t:this.shape_579},{t:this.shape_578},{t:this.shape_577}]},1).to({state:[{t:this.shape_582},{t:this.shape_581},{t:this.shape_580}]},1).to({state:[{t:this.shape_585},{t:this.shape_584},{t:this.shape_583}]},1).to({state:[{t:this.shape_588},{t:this.shape_587},{t:this.shape_586}]},1).to({state:[{t:this.shape_591},{t:this.shape_590},{t:this.shape_589}]},1).to({state:[{t:this.shape_594},{t:this.shape_593},{t:this.shape_592}]},1).to({state:[{t:this.shape_597},{t:this.shape_596},{t:this.shape_595}]},1).to({state:[{t:this.shape_600},{t:this.shape_599},{t:this.shape_598}]},1).to({state:[{t:this.shape_603},{t:this.shape_602},{t:this.shape_601}]},1).to({state:[{t:this.shape_606},{t:this.shape_605},{t:this.shape_604}]},1).to({state:[{t:this.shape_609},{t:this.shape_608},{t:this.shape_607}]},1).to({state:[{t:this.shape_612},{t:this.shape_611},{t:this.shape_610}]},1).to({state:[{t:this.shape_615},{t:this.shape_614},{t:this.shape_613}]},1).to({state:[{t:this.shape_618},{t:this.shape_617},{t:this.shape_616}]},1).to({state:[{t:this.shape_621},{t:this.shape_620},{t:this.shape_619}]},1).to({state:[{t:this.shape_624},{t:this.shape_623},{t:this.shape_622}]},1).to({state:[{t:this.shape_627},{t:this.shape_626},{t:this.shape_625}]},1).to({state:[{t:this.shape_630},{t:this.shape_629},{t:this.shape_628}]},1).to({state:[{t:this.shape_633},{t:this.shape_632},{t:this.shape_631}]},1).to({state:[{t:this.shape_636},{t:this.shape_635},{t:this.shape_634}]},1).to({state:[{t:this.shape_639},{t:this.shape_638},{t:this.shape_637}]},1).to({state:[{t:this.shape_642},{t:this.shape_641},{t:this.shape_640}]},1).to({state:[{t:this.shape_645},{t:this.shape_644},{t:this.shape_643}]},1).to({state:[{t:this.shape_648},{t:this.shape_647},{t:this.shape_646}]},1).to({state:[{t:this.shape_651},{t:this.shape_650},{t:this.shape_649}]},1).to({state:[{t:this.shape_654},{t:this.shape_653},{t:this.shape_652}]},1).to({state:[{t:this.shape_657},{t:this.shape_656},{t:this.shape_655}]},1).to({state:[{t:this.shape_660},{t:this.shape_659},{t:this.shape_658}]},1).to({state:[{t:this.shape_663},{t:this.shape_662},{t:this.shape_661}]},1).to({state:[{t:this.shape_666},{t:this.shape_665},{t:this.shape_664}]},1).to({state:[{t:this.shape_669},{t:this.shape_668},{t:this.shape_667}]},1).to({state:[{t:this.shape_672},{t:this.shape_671},{t:this.shape_670}]},1).to({state:[{t:this.shape_675},{t:this.shape_674},{t:this.shape_673}]},1).to({state:[{t:this.shape_678},{t:this.shape_677},{t:this.shape_676}]},1).to({state:[{t:this.shape_681},{t:this.shape_680},{t:this.shape_679}]},1).to({state:[{t:this.shape_684},{t:this.shape_683},{t:this.shape_682}]},1).to({state:[{t:this.shape_687},{t:this.shape_686},{t:this.shape_685}]},1).to({state:[{t:this.shape_690},{t:this.shape_689},{t:this.shape_688}]},1).to({state:[{t:this.shape_693},{t:this.shape_692},{t:this.shape_691}]},1).to({state:[{t:this.shape_696},{t:this.shape_695},{t:this.shape_694}]},1).to({state:[{t:this.shape_699},{t:this.shape_698},{t:this.shape_697}]},1).to({state:[{t:this.shape_702},{t:this.shape_701},{t:this.shape_700}]},1).to({state:[{t:this.shape_705},{t:this.shape_704},{t:this.shape_703}]},1).to({state:[{t:this.shape_708},{t:this.shape_707},{t:this.shape_706}]},1).to({state:[{t:this.shape_711},{t:this.shape_710},{t:this.shape_709}]},1).to({state:[{t:this.shape_714},{t:this.shape_713},{t:this.shape_712}]},1).to({state:[{t:this.shape_717},{t:this.shape_716},{t:this.shape_715}]},1).to({state:[{t:this.shape_720},{t:this.shape_719},{t:this.shape_718}]},1).to({state:[{t:this.shape_723},{t:this.shape_722},{t:this.shape_721}]},1).to({state:[{t:this.shape_726},{t:this.shape_725},{t:this.shape_724}]},1).to({state:[{t:this.shape_729},{t:this.shape_728},{t:this.shape_727}]},1).to({state:[{t:this.shape_732},{t:this.shape_731},{t:this.shape_730}]},1).to({state:[{t:this.shape_735},{t:this.shape_734},{t:this.shape_733}]},1).to({state:[{t:this.shape_738},{t:this.shape_737},{t:this.shape_736}]},1).to({state:[{t:this.shape_741},{t:this.shape_740},{t:this.shape_739}]},1).to({state:[{t:this.shape_744},{t:this.shape_743},{t:this.shape_742}]},1).to({state:[{t:this.shape_747},{t:this.shape_746},{t:this.shape_745}]},1).to({state:[{t:this.shape_750},{t:this.shape_749},{t:this.shape_748}]},1).to({state:[{t:this.shape_753},{t:this.shape_752},{t:this.shape_751}]},1).to({state:[{t:this.shape_756},{t:this.shape_755},{t:this.shape_754}]},1).to({state:[{t:this.shape_759},{t:this.shape_758},{t:this.shape_757}]},1).to({state:[{t:this.shape_762},{t:this.shape_761},{t:this.shape_760}]},1).to({state:[{t:this.shape_765},{t:this.shape_764},{t:this.shape_763}]},1).to({state:[{t:this.shape_768},{t:this.shape_767},{t:this.shape_766}]},1).to({state:[{t:this.shape_771},{t:this.shape_770},{t:this.shape_769}]},1).to({state:[{t:this.shape_774},{t:this.shape_773},{t:this.shape_772}]},1).to({state:[{t:this.shape_777},{t:this.shape_776},{t:this.shape_775}]},1).to({state:[{t:this.shape_780},{t:this.shape_779},{t:this.shape_778}]},1).to({state:[{t:this.shape_783},{t:this.shape_782},{t:this.shape_781}]},1).to({state:[{t:this.shape_786},{t:this.shape_785},{t:this.shape_784}]},1).to({state:[{t:this.shape_789},{t:this.shape_788},{t:this.shape_787}]},1).to({state:[{t:this.shape_792},{t:this.shape_791},{t:this.shape_790}]},1).to({state:[{t:this.shape_795},{t:this.shape_794},{t:this.shape_793}]},1).to({state:[{t:this.shape_798},{t:this.shape_797},{t:this.shape_796}]},1).to({state:[{t:this.shape_801},{t:this.shape_800},{t:this.shape_799}]},1).to({state:[{t:this.shape_804},{t:this.shape_803},{t:this.shape_802}]},1).to({state:[{t:this.shape_807},{t:this.shape_806},{t:this.shape_805}]},1).to({state:[{t:this.shape_810},{t:this.shape_809},{t:this.shape_808}]},1).to({state:[{t:this.shape_813},{t:this.shape_812},{t:this.shape_811}]},1).to({state:[{t:this.shape_816},{t:this.shape_815},{t:this.shape_814}]},1).to({state:[{t:this.shape_819},{t:this.shape_818},{t:this.shape_817}]},1).to({state:[{t:this.shape_822},{t:this.shape_821},{t:this.shape_820}]},1).to({state:[{t:this.shape_825},{t:this.shape_824},{t:this.shape_823}]},1).to({state:[{t:this.shape_828},{t:this.shape_827},{t:this.shape_826}]},1).to({state:[{t:this.shape_831},{t:this.shape_830},{t:this.shape_829}]},1).to({state:[{t:this.shape_834},{t:this.shape_833},{t:this.shape_832}]},1).to({state:[{t:this.shape_837},{t:this.shape_836},{t:this.shape_835}]},1).to({state:[{t:this.shape_840},{t:this.shape_839},{t:this.shape_838}]},1).to({state:[{t:this.shape_843},{t:this.shape_842},{t:this.shape_841}]},1).to({state:[{t:this.shape_846},{t:this.shape_845},{t:this.shape_844}]},1).to({state:[{t:this.shape_849},{t:this.shape_848},{t:this.shape_847}]},1).to({state:[{t:this.shape_852},{t:this.shape_851},{t:this.shape_850}]},1).to({state:[{t:this.shape_855},{t:this.shape_854},{t:this.shape_853}]},1).to({state:[{t:this.shape_858},{t:this.shape_857},{t:this.shape_856}]},1).to({state:[{t:this.shape_861},{t:this.shape_860},{t:this.shape_859}]},1).to({state:[{t:this.shape_864},{t:this.shape_863},{t:this.shape_862}]},1).to({state:[{t:this.shape_867},{t:this.shape_866},{t:this.shape_865}]},1).to({state:[{t:this.shape_870},{t:this.shape_869},{t:this.shape_868}]},1).to({state:[{t:this.shape_873},{t:this.shape_872},{t:this.shape_871}]},1).to({state:[{t:this.shape_876},{t:this.shape_875},{t:this.shape_874}]},1).to({state:[{t:this.shape_879},{t:this.shape_878},{t:this.shape_877}]},1).to({state:[{t:this.shape_882},{t:this.shape_881},{t:this.shape_880}]},1).to({state:[{t:this.shape_885},{t:this.shape_884},{t:this.shape_883}]},1).to({state:[{t:this.shape_888},{t:this.shape_887},{t:this.shape_886}]},1).to({state:[{t:this.shape_891},{t:this.shape_890},{t:this.shape_889}]},1).to({state:[{t:this.shape_894},{t:this.shape_893},{t:this.shape_892}]},1).to({state:[{t:this.shape_897},{t:this.shape_896},{t:this.shape_895}]},1).to({state:[{t:this.shape_900},{t:this.shape_899},{t:this.shape_898}]},1).to({state:[{t:this.shape_903},{t:this.shape_902},{t:this.shape_901}]},1).to({state:[{t:this.shape_906},{t:this.shape_905},{t:this.shape_904}]},1).to({state:[{t:this.shape_909},{t:this.shape_908},{t:this.shape_907}]},1).to({state:[{t:this.shape_912},{t:this.shape_911},{t:this.shape_910}]},1).to({state:[{t:this.shape_915},{t:this.shape_914},{t:this.shape_913}]},1).to({state:[{t:this.shape_918},{t:this.shape_917},{t:this.shape_916}]},1).to({state:[]},1).wait(694));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,181.4,57,26.6);
	
	
	(lib.slonc_1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.rf(["#FFFFD0","rgba(255,255,221,0.8)","rgba(255,255,255,0)"],[0.58,0.706,1],0,0,0,0,0,36.9).s().p("AgyFoQiYgchch9Qhdh9AWiUQAViVB6hWQB7hWCWAcQCYAcBcB9QBdB9gWCUQgVCVh7BWQhcBBhtAAQgiAAglgHg");
		this.shape.setTransform(2.6,-17.4);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(49));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-34.4,-54.1,74.2,73.5);
	
	
	(lib.slon = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#CA9700").ss(1,1,1,3,true).p("ABdhdQAnAnAAA2QAAA3gnAmQgmAng3AAQg2AAgngnQgmgmAAg3QAAg2AmgnQAngmA2AAQA3AAAmAmg");
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFE519").s().p("AgkBrQhag3AnhfIAIgUQAhgxA6AAIAAgBQCgBLiECDIgLAJQgPAMgSAAQgPAAgRgHg");
		this.shape_1.setTransform(-1.7,-1.2);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#FFCC00").s().p("AhcBdQgngnAAg2QAAg2AngmQAmgnA2AAQA2AAAnAnQAnAmAAA2QAAA2gnAnQgnAng2AAQg2AAgmgngAgEh8Qg8AAggAxIgJAUQgnBfBbA4QAoAQAZgWIALgJQCEiDifhLg");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-14.2,-14.2,28.5,28.5);
	
	
	(lib.sloik = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 8
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#A9C6E0").s().p("AjSgDQgCgSAegWIAKADIDEAoQACADgCAHQgGAVgNANQh+gXhZgYgADCAbIAAgCIAAgCIAIABIAHABIAAAAQAEAGgFAAQgEAAgKgEg");
		this.shape.setTransform(-111.3,-34.2);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#2B5279").s().p("AszCdIAAgQQAsgWAvgPIBDAAQIVAAGIgzIBbgMQE7guBQg9QAZgVABgVIAAgDQAAgSgSgRIAegKQAfAaABAcIAAADQgBAqhFAmQhqA3kFAtQg6AKg9AJQmPA5oZABIiTgBg");
		this.shape_1.setTransform(64.2,-37.6);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#3970A6").s().p("AwPC3IgUgDQANgNAGgVQACgHgCgEIAzAIQA5AIA+AIIgBACIABACQAVAJgGgLQFiAqHOADQgvAQgsAVIAAAQQoMgImBhEgA3EABIAAgBQADhqGyhMQG2hMJoAAQJrAAG2BMQE/A4BWBIIgeAKQhGhClNgyQmmg/pUAAQpSAAmlA/QmiA/gEBYIAAADQACA2CrAuIgKgDQgeAWACASQjGg6gChIg");
		this.shape_2.setTransform(-4.7,-47.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},2).wait(1));
	
		// Layer 9
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-31.7,-47.2,95.5,-47.2).s().p("ABjQoQitgfhogjMAAAggaQBoAjCtAfIBRANMAAAAgaIhRgNg");
		this.shape_3.setTransform(-118.6,71.7);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},2).wait(1));
	
		// Layer 10
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADyg7QhpA5kEArQg5AKg9AJ");
		this.shape_4.setTransform(115,-33.6);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.553)"],[0,1],-47.9,-48.8,36.1,-48.8).s().p("AjyvQQA+gJA5gKQEEgtBpg5MAAAAgaQhpA5kEAtQg5AKg+AJg");
		this.shape_5.setTransform(115,70.2);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],165.4,283.9,165.4,-201.1).s().p("AjyAlIBbgNQE6gtBPg+IAAAwQhpA2kEAuQg5AKg+AJg");
		this.shape_6.setTransform(115,-36);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},2).wait(1));
	
		// Layer 7
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.lf(["#55A0EA","rgba(255,255,255,0.102)","rgba(46,161,228,0.251)"],[0,0.565,1],-22.3,125.6,123.5,-22.1).s().p("AvODEIhRgNQiugfhpgjQicg0gChAIAAgCQADhqGyhLQG2hMJpAAQJqAAG2BMQGyBLADBqIAAACQgBAqhFAmQhpA4kGAuQg6AKg9AJQmRA5oYAAQoxAAmdg/g");
		this.shape_7.setTransform(-3.1,-47.8);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.lf(["#2F679F","rgba(69,151,233,0.251)","rgba(255,255,255,0.102)","rgba(255,255,255,0.102)","rgba(46,161,228,0.251)","#FFFFFF"],[0,0.165,0.427,0.561,0.831,1],-173.3,-43.2,170.4,-43.2).s().p("AvORPIhRgNQiugehpgkQicg0gChAMAAAggaQACBACcA0QBpAkCuAeIBRANQGdBAIxAAQIYAAGRg6QA9gJA6gKQEGgtBpg5QBFglABgrMAAAAgaQgBArhFAlQhpA5kGAtQg6AKg9AJQmRA6oYAAQoxAAmdhAg");
		this.shape_8.setTransform(-3.1,69.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[]},2).wait(1));
	
		// Layer 12
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f().s("#264973").ss(3,1,1).p("AXViAQgBArhFAlQhpA3kGAtQg6AKg9AJQmRA6oYAAQoxAAmdhAQgpgGgogHQiugehpgiQicg0gChA");
		this.shape_9.setTransform(-3.1,172.9);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},2).wait(1));
	
		// Layer 14
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f().s("#80AAD5").ss(3,1,1).p("A3UCAQACg/Ccg1QBpghCugeQAogHApgGQGdg/IxAAQIYAAGRA5QA9AJA6AKQEGAtBpA3QBFAlABAq");
		this.shape_10.setTransform(-3.1,146.7);
		this.shape_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(2));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-153.9,-73.7,301.8,261.1);
	
	
	(lib.shadow = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(0,0,0,0.247)").s().p("AhUB4QgOAAgKgLQgKgKgBgOIAAioQABgPAKgKQAKgKAOAAICoAAQAPAAAKAKQAKAKABAPIAACoQgBAOgKAKQgKALgPAAgAhphpQgJAJABANIAACoQgBAMAJAJQAJAJAMgBICoAAQANABAJgJQAJgJgBgMIAAioQABgNgJgJQgJgJgNAAIioAAIAAAAQgMAAgJAJg");
		this.shape.setTransform(7,7);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(0,0,0,0.122)").s().p("AhUB8QgQAAgMgLQgLgMAAgQIAAioQAAgRALgMQAMgLAQgBICoAAQARABAMALQALAMAAARIAACoQAAAQgLAMQgMALgRAAgAhshsQgKAKgBAPIAACoQABAOAKAKQAKALAOAAICoAAQAPAAAKgLQAKgKABgOIAAioQgBgPgKgKQgKgKgPAAIioAAQgOAAgKAKg");
		this.shape_1.setTransform(7,7);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(0,0,0,0.373)").s().p("ABUByIioAAQgMABgJgJQgJgJABgMIAAioQgBgNAJgJQAJgJAMAAICoAAQANAAAJAJQAJAJgBANIAACoQABAMgJAJQgJAIgMAAIgBAAgABUBtQALABAHgIQAIgHAAgKIAAioQAAgLgIgHQgHgIgLAAIioAAQgKAAgHAIQgIAHAAALIAACoQAAAKAIAHQAHAIAKgBg");
		this.shape_2.setTransform(7,7);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(0,0,0,0.749)").s().p("AhUBjQgGAAgEgEQgEgEgBgGIAAioQABgHAEgEQAEgEAGgBICoAAQAHABAEAEQAEAEABAHIAACoQgBAGgEAEQgEAEgHAAgAhbhbQgCADgBAFIAACoQABAEACACQADADAEABICoAAQAFgBADgDQACgCAAgEIAAioQAAgFgCgDQgDgCgFAAIioAAQgEAAgDACg");
		this.shape_3.setTransform(7,7);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AhUBZQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAioQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAgBICoAAQABABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAABABIAACoQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAg");
		this.shape_4.setTransform(7,7);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(0,0,0,0.875)").s().p("AhUBfQgEgBgDgDQgCgCgBgEIAAioQABgFACgDQADgCAEAAICoAAQAFAAADACQACADAAAFIAACoQAAAEgCACQgDADgFABgAhXhXQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABIAACoQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAICoAAQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAIAAioQgBgBAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBgBIioAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
		this.shape_5.setTransform(7,7);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(0,0,0,0.624)").s().p("ABVBpIipAAQgIAAgGgGQgGgGABgIIAAioQgBgJAGgGQAGgGAIABICpAAQAIgBAGAGQAGAGgBAJIAACoQABAIgGAGQgGAGgIAAIAAAAgAheheQgEAEgBAHIAACoQABAGAEAEQAEAEAGAAICpAAQAGAAAEgEQAEgEABgGIAAioQgBgHgEgEQgEgEgGgBIipAAQgGABgEAEg");
		this.shape_6.setTransform(7,6.9);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("rgba(0,0,0,0.498)").s().p("ABVBtIipAAQgKABgHgIQgIgHAAgKIAAioQAAgLAIgHQAHgIAKABICpAAQAKgBAHAIQAIAHAAALIAACoQAAAKgIAHQgHAHgKAAIAAAAgABVBpQAIAAAGgGQAGgGgBgIIAAioQABgJgGgGQgGgGgIABIipAAQgIgBgGAGQgGAGABAJIAACoQgBAIAGAGQAGAGAIAAg");
		this.shape_7.setTransform(7,6.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-5.4,-5.5,25,25);
	
	
	(lib.pod22 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.Bitmap1();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,514,100);
	
	
	(lib.PlayOverLay = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("EgdwBGiQtvl1qmqmQqoqnl0tvQmBuOgBvjQABvhGBuPQF0tvKoqmQKmqoNvl0QOPmBPhgBQPiABOPGBQNvF0KnKoQKmKmF1NvQGBOOABPiQgBPjmBOOQl1NvqmKnQqnKmtvF1QuOGBvjABQvigBuOmBgEgcahDWQtHFjqIKJQqJKIlkNIQlwNlAAO1QAAO2FwNmQFkNHKJKIQKIKJNHFjQNlFwO1AAQO2AANllwQNHljKJqJQKIqJFjtHQFwtlAAu2QAAu1lwtlQljtIqIqIQqJqJtHljQtllwu2gBQu1ABtlFwg");
		this.shape.setTransform(-28,-12.5,0.102,0.102);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("EgYtAhbMAAAhC2QAAhQAugkQAoggBFAEQA+AFBEAhQBDAfAtAtMAp4AemQBWBYAAB7QAAB7hWBZMgp4AelQguAshCAgQhFAhg9AFIgWABQiFAAAAiRg");
		this.shape_1.setTransform(-24.3,-12.5,0.102,0.102);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		// Layer 2
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("Egz3AYNMAAAgwaMBnuAAAMAAAAwag");
		this.shape_2.setTransform(-28,-12.5);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-360,-167.5,664,310);
	
	
	(lib.pictogram_zoom_gfx = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAbAAIg1gtIAABbg");
		this.shape.setTransform(1,0);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#FFFFFF").s().p("AgagtIA1AtIg1Aug");
		this.shape_1.setTransform(1,0);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-2.7,-5.6,7.5,11.3);
	
	
	(lib.pictogram = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 4
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AgagtIA1AtIg1Aug");
		this.shape.setTransform(1,0);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1.7,-4.6,5.5,9.3);
	
	
	(lib.panel = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape.setTransform(0.6,286.8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_1.setTransform(0.6,284);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_2.setTransform(0.6,281.2);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_3.setTransform(0.6,278.4);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_4.setTransform(0.6,275.6);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_5.setTransform(0.6,272.8);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_6.setTransform(0.6,270);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_7.setTransform(0.6,267.2);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_8.setTransform(0.6,264.4);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_9.setTransform(0.6,261.6);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_10.setTransform(0.6,258.8);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_11.setTransform(0.6,256);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_12.setTransform(0.6,253.2);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_13.setTransform(0.6,250.4);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_14.setTransform(0.6,247.6);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_15.setTransform(0.6,244.8);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_16.setTransform(0.6,242);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#999999").s().p("AgFAHIAAgMIALAAIAAAMg");
		this.shape_17.setTransform(0.6,239.2);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_18.setTransform(0.6,236.4);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_19.setTransform(0.6,233.6);
	
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_20.setTransform(0.6,230.8);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_21.setTransform(0.6,228);
	
		this.shape_22 = new cjs.Shape();
		this.shape_22.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_22.setTransform(0.6,225.2);
	
		this.shape_23 = new cjs.Shape();
		this.shape_23.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_23.setTransform(0.6,222.4);
	
		this.shape_24 = new cjs.Shape();
		this.shape_24.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_24.setTransform(0.6,219.6);
	
		this.shape_25 = new cjs.Shape();
		this.shape_25.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_25.setTransform(0.6,216.8);
	
		this.shape_26 = new cjs.Shape();
		this.shape_26.graphics.f("#999999").s().p("AgFAHIAAgMIALAAIAAAMg");
		this.shape_26.setTransform(0.6,214);
	
		this.shape_27 = new cjs.Shape();
		this.shape_27.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_27.setTransform(0.6,211.2);
	
		this.shape_28 = new cjs.Shape();
		this.shape_28.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_28.setTransform(0.6,208.4);
	
		this.shape_29 = new cjs.Shape();
		this.shape_29.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_29.setTransform(0.6,205.6);
	
		this.shape_30 = new cjs.Shape();
		this.shape_30.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_30.setTransform(0.6,202.8);
	
		this.shape_31 = new cjs.Shape();
		this.shape_31.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_31.setTransform(0.6,200);
	
		this.shape_32 = new cjs.Shape();
		this.shape_32.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_32.setTransform(0.6,197.2);
	
		this.shape_33 = new cjs.Shape();
		this.shape_33.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_33.setTransform(0.6,194.4);
	
		this.shape_34 = new cjs.Shape();
		this.shape_34.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_34.setTransform(0.6,191.6);
	
		this.shape_35 = new cjs.Shape();
		this.shape_35.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_35.setTransform(0.6,188.8);
	
		this.shape_36 = new cjs.Shape();
		this.shape_36.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_36.setTransform(0.6,186);
	
		this.shape_37 = new cjs.Shape();
		this.shape_37.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_37.setTransform(0.6,183.2);
	
		this.shape_38 = new cjs.Shape();
		this.shape_38.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_38.setTransform(0.6,180.4);
	
		this.shape_39 = new cjs.Shape();
		this.shape_39.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_39.setTransform(0.6,177.6);
	
		this.shape_40 = new cjs.Shape();
		this.shape_40.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_40.setTransform(0.6,174.8);
	
		this.shape_41 = new cjs.Shape();
		this.shape_41.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_41.setTransform(0.6,172);
	
		this.shape_42 = new cjs.Shape();
		this.shape_42.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_42.setTransform(0.6,169.2);
	
		this.shape_43 = new cjs.Shape();
		this.shape_43.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_43.setTransform(0.6,166.4);
	
		this.shape_44 = new cjs.Shape();
		this.shape_44.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_44.setTransform(0.6,163.6);
	
		this.shape_45 = new cjs.Shape();
		this.shape_45.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_45.setTransform(0.6,160.8);
	
		this.shape_46 = new cjs.Shape();
		this.shape_46.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_46.setTransform(0.6,158);
	
		this.shape_47 = new cjs.Shape();
		this.shape_47.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_47.setTransform(0.6,155.2);
	
		this.shape_48 = new cjs.Shape();
		this.shape_48.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_48.setTransform(0.6,152.4);
	
		this.shape_49 = new cjs.Shape();
		this.shape_49.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_49.setTransform(0.6,149.6);
	
		this.shape_50 = new cjs.Shape();
		this.shape_50.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_50.setTransform(0.6,146.8);
	
		this.shape_51 = new cjs.Shape();
		this.shape_51.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_51.setTransform(0.6,144);
	
		this.shape_52 = new cjs.Shape();
		this.shape_52.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_52.setTransform(0.6,141.2);
	
		this.shape_53 = new cjs.Shape();
		this.shape_53.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_53.setTransform(0.6,138.4);
	
		this.shape_54 = new cjs.Shape();
		this.shape_54.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_54.setTransform(0.6,135.7);
	
		this.shape_55 = new cjs.Shape();
		this.shape_55.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_55.setTransform(0.6,132.9);
	
		this.shape_56 = new cjs.Shape();
		this.shape_56.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_56.setTransform(0.6,130.1);
	
		this.shape_57 = new cjs.Shape();
		this.shape_57.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_57.setTransform(0.6,127.3);
	
		this.shape_58 = new cjs.Shape();
		this.shape_58.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_58.setTransform(0.6,124.5);
	
		this.shape_59 = new cjs.Shape();
		this.shape_59.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_59.setTransform(0.6,121.7);
	
		this.shape_60 = new cjs.Shape();
		this.shape_60.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_60.setTransform(0.6,118.9);
	
		this.shape_61 = new cjs.Shape();
		this.shape_61.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_61.setTransform(0.6,116.1);
	
		this.shape_62 = new cjs.Shape();
		this.shape_62.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_62.setTransform(0.6,113.3);
	
		this.shape_63 = new cjs.Shape();
		this.shape_63.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_63.setTransform(0.6,110.5);
	
		this.shape_64 = new cjs.Shape();
		this.shape_64.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_64.setTransform(0.6,107.7);
	
		this.shape_65 = new cjs.Shape();
		this.shape_65.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_65.setTransform(0.6,104.9);
	
		this.shape_66 = new cjs.Shape();
		this.shape_66.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_66.setTransform(0.6,102.1);
	
		this.shape_67 = new cjs.Shape();
		this.shape_67.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_67.setTransform(0.6,99.3);
	
		this.shape_68 = new cjs.Shape();
		this.shape_68.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_68.setTransform(0.6,96.5);
	
		this.shape_69 = new cjs.Shape();
		this.shape_69.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_69.setTransform(0.6,93.7);
	
		this.shape_70 = new cjs.Shape();
		this.shape_70.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_70.setTransform(0.6,90.9);
	
		this.shape_71 = new cjs.Shape();
		this.shape_71.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_71.setTransform(0.6,88.1);
	
		this.shape_72 = new cjs.Shape();
		this.shape_72.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_72.setTransform(0.6,85.3);
	
		this.shape_73 = new cjs.Shape();
		this.shape_73.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_73.setTransform(0.6,82.5);
	
		this.shape_74 = new cjs.Shape();
		this.shape_74.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_74.setTransform(0.6,79.7);
	
		this.shape_75 = new cjs.Shape();
		this.shape_75.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_75.setTransform(0.6,76.9);
	
		this.shape_76 = new cjs.Shape();
		this.shape_76.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_76.setTransform(0.6,74.1);
	
		this.shape_77 = new cjs.Shape();
		this.shape_77.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_77.setTransform(0.6,71.3);
	
		this.shape_78 = new cjs.Shape();
		this.shape_78.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_78.setTransform(0.6,68.5);
	
		this.shape_79 = new cjs.Shape();
		this.shape_79.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_79.setTransform(0.6,65.7);
	
		this.shape_80 = new cjs.Shape();
		this.shape_80.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_80.setTransform(0.6,62.9);
	
		this.shape_81 = new cjs.Shape();
		this.shape_81.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_81.setTransform(0.6,60.1);
	
		this.shape_82 = new cjs.Shape();
		this.shape_82.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_82.setTransform(0.6,57.3);
	
		this.shape_83 = new cjs.Shape();
		this.shape_83.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_83.setTransform(0.6,54.5);
	
		this.shape_84 = new cjs.Shape();
		this.shape_84.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_84.setTransform(0.6,51.7);
	
		this.shape_85 = new cjs.Shape();
		this.shape_85.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_85.setTransform(0.6,48.9);
	
		this.shape_86 = new cjs.Shape();
		this.shape_86.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_86.setTransform(0.6,46.1);
	
		this.shape_87 = new cjs.Shape();
		this.shape_87.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_87.setTransform(0.6,43.3);
	
		this.shape_88 = new cjs.Shape();
		this.shape_88.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_88.setTransform(0.6,40.5);
	
		this.shape_89 = new cjs.Shape();
		this.shape_89.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_89.setTransform(0.6,37.7);
	
		this.shape_90 = new cjs.Shape();
		this.shape_90.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_90.setTransform(0.6,34.9);
	
		this.shape_91 = new cjs.Shape();
		this.shape_91.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_91.setTransform(0.6,32.1);
	
		this.shape_92 = new cjs.Shape();
		this.shape_92.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_92.setTransform(0.6,29.3);
	
		this.shape_93 = new cjs.Shape();
		this.shape_93.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_93.setTransform(0.6,26.5);
	
		this.shape_94 = new cjs.Shape();
		this.shape_94.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_94.setTransform(0.6,23.7);
	
		this.shape_95 = new cjs.Shape();
		this.shape_95.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_95.setTransform(0.6,20.9);
	
		this.shape_96 = new cjs.Shape();
		this.shape_96.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_96.setTransform(0.6,18.1);
	
		this.shape_97 = new cjs.Shape();
		this.shape_97.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_97.setTransform(0.6,15.3);
	
		this.shape_98 = new cjs.Shape();
		this.shape_98.graphics.f("#999999").s().p("AgFAGIAAgLIALAAIAAALg");
		this.shape_98.setTransform(0.6,12.5);
	
		this.shape_99 = new cjs.Shape();
		this.shape_99.graphics.f("#999999").s().p("AgFAGIAAgMIALAAIAAAMg");
		this.shape_99.setTransform(0.6,9.7);
	
		this.shape_100 = new cjs.Shape();
		this.shape_100.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_100.setTransform(0.6,6.9);
	
		this.shape_101 = new cjs.Shape();
		this.shape_101.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_101.setTransform(0.6,4.1);
	
		this.shape_102 = new cjs.Shape();
		this.shape_102.graphics.f("#999999").s().p("AgFAHIAAgNIALAAIAAANg");
		this.shape_102.setTransform(0.6,1.3);
	
		this.shape_103 = new cjs.Shape();
		this.shape_103.graphics.lf(["#B4B47A","#E9E9D8"],[0,1],-2.1,-146.9,-3.3,136.9).s().p("ArtYOMAAAgwbIXbAAMAAAAwbg");
		this.shape_103.setTransform(75,155);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.2,-2.1,154.3,312.2);
	
	
	(lib.night = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.lf(["rgba(30,29,44,0.502)","rgba(0,0,0,0.082)"],[0,1],7.8,-80,7.8,156).s().p("EgoJAYNMAAAgwZMBQSAAAMAAAAwZg");
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-257,-155,514,310);
	
	
	(lib.moon = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#699C9C").ss(1,1,1,3,true).p("ABlBqQgCACgBABQgCABgCABQAAABgBAAQgBAAAAABQgBAAAAAAQgGAEgGADQgMAGgNADIAAAAQgLADgMAAQgCAAgCAAQgCAAgDAAQgMAAgKgBQgngHgfgfQAAAAgBgBQgmgmAAg2QAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgJACgJQABgEAAgEQABgCABgDQABgFACgFQAJgaAVgVIABgCQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAgBQAIgGAIgFQASgLAVgFQADAAACgBQAIgBAKgBQgDADgDADQgMAPgJAQIgEAIQgKAVgCAXQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAABAAAAQAAABAAABQAAABAAAAQAAAJABAJQAFAqAfAgQAnAnA3AAQACAAACAAIAAAB");
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#DEFFFF").s().p("AATB6QgQgCgMgFIgBgCIgEgEIAAAAIAAgFIgDgFIgDgBIgDgCIgEABIAAAAIgEgEIAAABIgCACQgLgEgHgDIABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgCQgCgEgGgBIgBABQgDABgCACIgCgDIgBgBQAEgDACgGQAIgZgWgGIAAgBQgGAAgHgEQgOgNAJgSIgEgJQgGgPgDgOQAJgaAVgVIABgBIABgBIABgBIABgBIACgBIABgBIABgBIABgBIAAgBIABgBIABAAIAQgMQASgLAWgFQg1A9AVBLQAFASALAQQARAZAXAPIgCACQgOAUAXAGIABgBQANgKgCgIQAQAGATADQATACARgBIgDADIgFADIAAAAIgBABQgbAJgfAAIgUgBgAhUgSQgJAOAPAGQAHAEAFgGQAOgSgXgFQgFAAgEAFg");
		this.shape_1.setTransform(0.4,-0.7);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#A8DBDB").s().p("AAbBSQgMAAgLgCQgngGgfgfIAAgBQgngnABg0IAAgCIAAgBIAAgBIABgSIACgIIAAARQAGAbAMAXIABgBQAEgGAIAAIAEABQAWAGgIAWQgCAHgEACIAAAAIADAEQACgCADgBIABgBQAGABACAFIAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgBABIgBACIgBAAQAKAIAKAGIAAAAIACgEQABgCADgBIAAAAIAEgBIADABIADABIADAFIAAAFIAAABIgCADIAAAAIAHADQAMAEAQACQApAEAlgMIgDADIgDACIgCAAIgBABIgBABIgLAGQgNAGgNADIAAAAQgLADgLABIgFAAIgEAAgAAWAgIACgCQACgDAEAAQALAGACAGQACAIgNALIgBAAQgYgGAPgUgAhGg2QgPgHAJgOQAEgGAFAAQAXAFgOAUQgDAEgEAAQgDAAgCgCg");
		this.shape_2.setTransform(-0.4,5.1);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#BAEDED").s().p("AASA2IAAAAQAJAHALAHIAAAAQgLgGgJgIgAAFApIAAAAIABABIACACIgDgDgAgkgpIgBgRIACgFIABgEQABAqAQAfIgBABQgNgVgFgbg");
		this.shape_3.setTransform(-6.9,2.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#CCFFFF").s().p("AAqBKIAAAAIACgDIAEADIABACIgHgCgAAGAzIABgBQAHAEALADIACgCIAAAAIAEADQgDABgBADIgCADQgKgGgJgIgAgvhGIgBAEIADgKQADAOAGAPIAEALQgJASAOANQAHAEAGAAIABABIgFgBQgHABgEADQgQgegCgrg");
		this.shape_4.setTransform(-5.7,3.2);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#F0FFFF").s().p("AApBzQgTgDgRgGQgCgHgJgFQgDAAgDADQgYgPgSgZQgLgQgFgSQgVhLA1g9IAGgBIATgBIgGAGQgPAOgJARIgEAIQgJAUgCAXIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAACIABAPQAFAsAhAhQAlAnA3AAIAEAAIgBAAIgLAAQgMAAgMgBg");
		this.shape_5.setTransform(3.3,-1.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-12,-14.3,24.1,28.6);
	
	
	(lib.m_tul = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EFEFEF").s().p("AAAAAIAAAAIAAABg");
		this.shape.setTransform(65,44.2);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#E2E1DE").s().p("AEwBlQhDgBhCgEQhBgFhAgJIiCgSIgVgCQg8gDg6AGIgSACIgjAEIgVACQg/AIhCgEIgRgBIgNgCIglgFQgogHgmgMIgkgLIgxgSIAOgPQgYgGgOgTIgBgJIgBgRIAAgBQBWhJCCAZIBaARQAogMAvAJQA9AKA9AIIBKAJQAagKAcgEQBogvCDAVQAQADAOgCQANABAKAFQATgFATgDQA+AEAIAqIAvgPQA6AfgPAfIBvgLIARAKIgIACQAwgUAmgmIAmAIIgPAWQgKAPgNALIgNAJIgGAFIgPAMIgBAAIgBACIABAAIAAABQgDAGgDAFQgMASgUAGIgKADQgWAHgYAEIgSAFQgfAJgjAEQg9AHg+AAIgJAAg");
		this.shape_1.setTransform(3.6,41.6);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E9E8E4").s().p("AsvF7QgxhDgOhRQgLhGAOhGQAOhIAYhCQAZhFAchEQCTgkB/hVQBxhNB/g0QBogqBwABQBaAFBZAZQAoAKAnAMQA5ATA3AdQA0AaAxAiQAtAhAoAnQA4A1AyA8QArA1BBBxQASAZA1BmQAzBiAUAbQA7BOhNAWQhOAWhfgGIglgIQgnAmgwAWIAIgEIgRgKIhuALQAOgfg6gfIgvAPQgHgqg+gEQgUADgSAFQgLgFgNgBQgOACgQgDQiDgVhnAvQgcAEgbAKIhKgJQg9gIg8gKQgwgJgnAMIhbgRQiCgZhVBJIAAABIABARIABAJQANAVAYAGIgNAPQhTgag1hIg");
		this.shape_2.setTransform(5.5,-4);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-82.9,-51.7,176.9,103.4);
	
	
	(lib.m_ogon = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#E9E8E4").s().p("AhKgGQARhBAIg9QAIg9ApANQAoANAnBLQAnBLAOARIgIAAQgTA0gJA1IgEAUQiBgSheBMQAghfAZheg");
		this.shape.setTransform(-48.2,-23.6);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#D5AAB4").s().p("AFnDwIgJAAQgggBgfgHIgSgDQgygFgugSIg4gZIgNgHIgIgEIANAEQBFAaBIAUQAgAIAgAAQBKgCBJgEIANAIIABAEIAAAAIgDADQgEACgGgBQgNgBgNABQgeACgfAAIgIABIgIgBgACIAKQAEgIADgGQAVgWAUgYQgEAZgMAVIgGAJIgJAPQgIANgJALIgJAMIgBACIgHANQgDgeAUgfgAB1hHIABgEQAFgSgLgRIgGgIQgFgFgFgEQgigUgmgEQgNgBgLgDIgXgDIgMAAQgjgDgkgBQgMAAgNgCIgqgGIgpgGIgFAAIgKgCIgngGQgvgIgwgMIgSgCIgBAAQgugDguAAIAEgUQAmgEAmgHIAQAFQBMAYBPAIIACABIAAAAIA5AGQBBAJBBALQA9ALA/AOQAMAMAMAJIALAIQAAAOgCAOIgDATIgBAEIAAACIgFAEIADgGg");
		this.shape_1.setTransform(8.6,10);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E9C5CD").s().p("AD/ESQhHgUhGgaQA1ADAygHQAUAHAWAFQAcAHAfACIANABQAYACAXAFIAJACIAdAHIApAJIAFACIAEADQhJAEhJACIgEAAQgfAAgegIgAA0B5IAJgaQAIgdAQgXIAMgUIAHgJQAJgMAGgNIAFgEIAAgCIABgEQAgABAhgDQABAOgCALQgUAYgVAWQgCAIgFAIQgUAfADAeIgDAKQgjAFgkABQgCgKAEgKgAifiOIATg7IArAJIAMADIBNAOIgHgBQgIgBgEAHIgBAJIgBAnQhBgLhBgJgAjYiUIABgCIAAACgAm1kYIAIAAIALgBIAAAAIAKAIIAIAGIAIAGQASAMATAHIgGgCQgHAggFAfIgPgFQgnAHgmAEQAJg2ATgzg");
		this.shape_2.setTransform(8,4.6);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E0C2CA").s().p("ADBDsIgNgEIgQgLQgIgHgGgKIgFgJQgJgMgDgNIgEgVIAAAAQAjgBAkgFQgDAIAAAIIABAIQAGAaAYALIAVAKIAEACIAlAOIAFACIAAAAQgkAFgmAAIgcgBgADLgNIAEgTQACgOgBgOIgKgIQgMgJgMgMQg/gOg/gLIABgnIAAgJQAFgHAHABIAHABIAOADIASAEIAVAHIAcAJIAIADIAKAEQAYAHAUALQAVAMAMAVQAPAbAIAcIABAHIAAAEIABAFQgZACgZAAIgQAAgAiJiMIAAgCIAAACIgCgBQhPgIhMgYQAEggAIgfIAGACIAwAOIAGABIAMACQAvALAxAFQAaADAaAFIgSA7Ig5gGg");
		this.shape_3.setTransform(0.2,3.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-61.5,-42,117.6,76.2);
	
	
	(lib.m_lapa2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#E9C5CD").s().p("AhsBGQgJgUgFggIABgBIACAAIAGgCQAHgDAGgEIAOgJIAJgIQANgNAQgJIAGgEQAOgLAHgQQABAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIAAgEIAAgBIAAgBIAAABIABAAIABABQANALAOAGQATAGATAEQAKABAJAEIAiAOQAUAJACATQAAAEgBADQgFAJgKAGQgHAEgHgDIgVgJIgHgDIgkgOIgHgBQgGgBgFgEIgFgCQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAIAAABIAAABQAEAVALAWIAEAHQAIALgHAKQgCADgDAAQgPAFgHgKIgEgEQgJgJgEgKQgFgMgIgKIgEgFIgGgGQgFgFgHgBQgFgBgEAEIgKAKQgFAFgCAHIgMAnQgBAEgEACIgDABQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBg");
		this.shape.setTransform(20.8,16.8);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#E9E8E4").s().p("ACcDVIgBAAQgSAAgQgGQgTgHgTgFIgbgHIgMgCIgLgCQgMgEgMgBQg4gIg3gTIgWgHQgogMgfgeQgIgIgKgHQgSgNgKgSQgIAAgBgJIgHhWQgEgvAXgpQAYgrAugRQAZgKAagHQAQgEAQgCQAvgGAsAIQANACANAFQAbALAYARQAOALANANIAOAPQAgAlAdAnQAPAUAMAUQAKAQAJAQIAHANQAIAQADASIADAMQAIAXgCAZIAAABIAAABIAAADQAAABAAAAQAAABAAABQAAAAgBABQAAAAAAABQgHAPgPAMIgGAEQgPAJgNANIgJAHIgPALQgFAFgHACIgGADIgBAAIgCAAg");
		this.shape_1.setTransform(-7.2,-2.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-33.1,-24.1,66.2,48.2);
	
	
	(lib.m_lapa1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#E9C5CD").s().p("AhoAjIgCgBIAAgDIAFgHQAMgRASgHIABAAIgBAAIgUAAQgJABgIgBQgEAAAAgEIAAgCIADgEQACgCADgBIAIgDQARgGATgEIALgDIAPgDQASgFARACIAhABQAQAAAPgBIALgCIAMgCIAAADQAGAPAMALIAEAAIADAAIAAAAIAAACIgCADIgBABIgKAEIgFADIgDADQgCAEgFACIgGADIgGAEQgOANgTAGQgFABgFAAQgJAAgBgJIAAAAIALgPIAEgFQACgDAAgDQACgJgKABIgFAAIgRAFQgPAIgPALQgOAJgQAFIgMADIgRADIgFAAQgJAAgIgFg");
		this.shape.setTransform(-26.6,15.9);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#E2E1DE").s().p("AhaCOIgKgBIhFgBIgIAAIgBAAQgNAAgMgCIgUgEQgLgEgNgCIAAAAIgEAAIgDAAQgNgKgFgQIgBgDIAAgBIADgFIAIgGQBdA1BsgiQARgFAPgCQAdgIAggFQAWgIAYgGQBBggBFgVQAEgCAEgFIAGgJQgRg6ANg9QADgKAJgGQADgCADgEIAGgBIADgCIAZACIAAAAIAAACIAAAUQgZAcAGAkIAAAAIgBAFIgDALIAAABIAAADIAAAEIAFANIADANIgCAcIgDAJIgCAFIgBACIgEAGIgFAEQgLAIgNAEQggALgiAIQgOAEgOAGIgDABIgOAHIgFACIAAAAIgQAHIgGACIAAAAIgMAEIgFACIAAAAQghALghAHIAAAAIgOACIghADIgIABIgVABIgLAAg");
		this.shape_1.setTransform(9.7,1.9);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E9E8E4").s().p("AkLCIIgIAGQALgMAwgOIAMgDQA0gRAfgVIAJgHIAGgEIAHgEQAUgLAWgIQAggKABgVQABgSAehEQAfhEBwgSQBwgSAKApQAKAqgRAwQgLAdgEAQQgGgjAYgdIABgTIAAgCIAAgBIgagBIgDABIgFABQgDAEgDADQgJAFgDAKQgNA9ARA6IgGAKQgEAFgFACQhEAVhBAfQgYAGgXAJQgeAEgeAJQgQABgQAGQgqANgoAAQg/AAg4ghg");
		this.shape_2.setTransform(10.2,-3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-37.9,-19.9,75.9,40);
	
	
	(lib.m_head_uch1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#996600").ss(1,1,1).p("AAAgDQAAADAAAE");
		this.shape.setTransform(17,1.6);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f().s("#996600").ss(1,1,1).p("AB+hEIAAAAQgBABABABQAEAEAAADQAAACgBACQgBADgBABQgCABgBAAQgBABAAAAIgTAOQgDADgEADQAAABgBABIAAAAQgEADgEACQgXAMgZAKQg7Abg/AaQgXAJgYAH");
		this.shape_1.setTransform(4.4,8.1);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#E2E1DE").s().p("AipBZQgIgIAAgJIAHgXIABgBIABgEIAAAAQA3gzBMgiQAXgJAUgIQAwgTAzgIQAsgLAbARIgBAFIgBAKIAAAAIgBAJIABgJIAAACQAEADAAAEIgBAEIgCAEIgDABIgBABIgTAOIgGAGIAGgGIgGAGIAAAAIgCABIAAABQgbAHgegBQhgARhIBJIgkAJQgVAFgVADIgFAAIgCABIgDgCgACuhAIAAAAg");
		this.shape_2.setTransform(-0.4,7.7);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E9E8E4").s().p("ABOAOQAeACAbgIIgHAGIgxAXQg8Acg9AZQgXAKgYAHQBHhKBggTgAimAsQAbgsAigkIABACQAKALALgGQB6hMCKgBQACAZgHASIgCAGIgBAHIgBAEQgbgRgsAMQg0AIguATQgWAHgWAKQhNAfg3A1IALghg");
		this.shape_3.setTransform(0.4,4.3);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#F7E8EC").s().p("AiQB3IASg4QANgpARglQAPgjAdgYQAZgTAbgLQAjgOAkgGIAUgCQAggDAZAOQh/ATheBdIgDADIAAAEIgBAEIgDAFIgEAEIgEAFIgDAEIAAAEIAAAFIAAAEIAFAHQgiAlgaAsIAAABIACgJg");
		this.shape_4.setTransform(-1.5,-4);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#E9C5CD").s().p("AiJBOIgBgCIgFgGIAAgFIAAgEIAAgEIADgFIAEgEIAEgFIADgEIAAgFIABgEIACgEQBghcB9gSIAHAEQAIAGAGAIQALAQAHAQQAHASADASIAAAEQiJABh7BMQgEACgEAAQgHAAgGgHg");
		this.shape_5.setTransform(3.7,-7);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-18.3,-16.8,36.8,33.6);
	
	
	(lib.m_head_ucgh2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D89AA8").s().p("Ag2A8IgGgJQAuhDA/g0QAoBAheBHIAAACIgxgJg");
		this.shape.setTransform(-14.4,3);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F4E3E8").s().p("AhbBgQgVgFgTgHIgJgCIgIgDIgFgDIgBgHQAzgZBKAJQBVALAwhFQAfguAUgxQgGAxgaAtQgVAkghAcQgMALgRAFQgSAFgSAJQgFAEgJACQgWAHgWAAQgSAAgTgFg");
		this.shape_1.setTransform(5.4,6);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#EED2D7").s().p("AiPCGQgagCgWAIIgFADIgFgEQgGgGgCgNQgBgLABgLIAGgIIAFAJIAxAIIAAgBQBghJgog+QAbgVAegTQBZg4BlgQIgFgDIAJAFIAHADQANAHALAIQAMAJAFAPQAEANAAAPQABATgCATQgUAvgfAuQgwBHhXgLQhIgJgzAZIABAHQgUgKgYgBg");
		this.shape_2.setTransform(0,-0.9);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E9C5CD").s().p("Ai1B7IAAgBIACgMQADgTAHgTIAFgOIABgCIAUgvIADgHQAJgTALgRIAFgIIBDgiQAQgJATgHIAUgHQAYgIAYgGQAngKArgBIAJAAIABAAIACAAQAPACAMAFIAGADQhlAQhZA4QgeATgbAVQhBAyguBFIgFAIIAAgCg");
		this.shape_3.setTransform(-2.8,-3.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-21.1,-16.1,42.2,32.3);
	
	
	(lib.m_head_oko = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8DCDC").s().p("AgVAPQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAgBQACgSAWgEIALgDQAYAEgQANQgEADgGADQgMAGgOAAIgEAAg");
		this.shape.setTransform(-1.8,-2.2);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#681717").s().p("AACAsQgagEgXgRIgFgEIgIgHQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAABgBAAQAFgUAOgPQAVgXAeAEIAMABQAEAAAEACIAFACQAHADAHAEIANAKIAEAEQADAEABAFIABADIgBAAIgCAJIgCAFQAAAEgCADIgGAIQgNAPgTACIgIACIgHACIgEgBgAgSghQgWAEgBAUQAAABAAABQAAABABAAQAAAAAAABQABAAABAAQAPABARgHQAFgDACgDQAQgPgWgEIgNADg");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-6.6,-4.5,13.3,9.1);
	
	
	(lib.m_head_g = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#E0DEDA").s().p("AhPA7QgTgKgLgJQgRgNgDgOIgDgBIgFgEIgHgIQgChUBuALIAVABQAsADAsgHIAMgCIAGADIAFgCQAsAcgEAgIAEAFQAUAZg1AgIgNAHIgYALIgGACIgHACIgEABIgIACQgXAJgWAAQgmAAgpgUg");
		this.shape.setTransform(29.7,5);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#E3B9C2").s().p("AAlBSIgBgBIgBAAIgCgBIgBgBIgCgBIgBgBIgBgBIgCgBIgBgBIgDgCIgBgBIgOgMIgEgDIgFgGIgEgEIgFgEIgBgCIgCgBIgDgDIgIgBIgGgCIgFgCIgFgDQgPgLgLgRIgEgIQgBgHABgEQABgDADgCIACgCIAFgMIANgcIABgBIABgCIABgCIAAAAIAHgPIACgFQAEgCAFgBQA0AUACA9QABALgCAIIAAADIgBADIgEALIAFAEIAKALQAJAKAIAMIACADIACAEIABACIALAUIADAGQgTgEgRgJg");
		this.shape_1.setTransform(-45.6,28.5);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#EED2D7").s().p("AAeAlQgDg6gzgUQgGAAgEACIgCAGIAKgXIAIgCIANAHIABAAQAUAMAKASIADAEQAEAJACAIQAFAZgLAiQACgKgBgMg");
		this.shape_2.setTransform(-45.7,23.2);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#E2E1DE").s().p("AlxEdIgXgBIgKgBIgRgCIgDAAIgCgBIgHgBIgDgGIgKgTIgCgCIgCgEIgCgEQgIgLgJgLIgKgKQAQgEAPgCQBSAWBSAPQAigjBEgOQAggHAfgPQCShJBrhrQALAIATAJQBDAhA7gVIAIgCIAEgBIAHgDIAGgCIAYgLIAEgBQgVAdgWAbQAwgXAqggQANgMALgQQAXgiAkgKIADgEIAAADIAAAAIgLA2IgDALIgDAHIgTAlQgOAbgWAVIgTATQgPAQgSAMQgaASgaAPIgVALQgXAMgYALIgBAAIgBAAQgvAVgzAMIgRADIAAgPIAJgGQgVAOgWANIg9AIQgWADgXgDIgJgBQgIgBgGABQgGABgFADIgEABQgRACgSABQgXACgTgKIgCgGIgEABIgEACIgFACIgGACIgLAEIgPAEIgOAEQghALgjAGIg4AGIgCAAIgEAAIgOAAgAF/hCQAEghgsgcIgFADIgGgEIgMACQgsAHgugDQAvhDAjhOQAHgQATgBQB8BShLCMIgEgEg");
		this.shape_3.setTransform(5,10);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#EFEFEF").s().p("AkHEwIAFgCIADgBIACAGQgFgDgFAAgAD7kvIAFgDQAGAJACAKQgFgIgIgIg");
		this.shape_4.setTransform(16.5,4.2);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#E9E8E4").s().p("AmiFHQgPACgQAEIgEgEIADgLIABgDIABgDQALghgFgaQgCgKgFgJIgCgEQgKgSgWgMIgBAAIgNgGIgIABIAMggIAMgaIAehBQAGgMAHgKIACgEIACgCIACgDQAaglAggfIAUgSIATgTQAug0AvgxIASgSQAIgHAIgIQAMgMAPgIIANgIIAIgFIAKgHIAUgOQApgdArgaIAegRQA8gfBCgFIAqgDIAPAAIAKABQBCANA2AhIAHAEQAcAOAYAUIAGAEIAFAFQAOAJAKAJIAFAGIACACIgEAEQAIAIAEAHIAMAVIAFAMQAYA6AhA9QAPAbAIAeIABAHIACAhIAAAUIgDAEQgjAKgYAjQgLAQgNAOQgqAfgwAXQAWgbAVgdIgEACIANgHQA1gggUgcQBLiKh8hSQgTACgHAQQgjBNgvBEIgVgCQhugKACBUIAHAHIAFAFIADABQADANARAOQhrBsiSBJQgfAQggAGQhEAOgiAjQhSgPhSgWgACaFRIgJAFIAAAPIgFABIgCABIgbAEQAWgMAVgOg");
		this.shape_5.setTransform(2.2,-2.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-52.9,-38.5,105.8,77.2);
	
	
	(lib.kol2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(0,0,0,0.165)").s().p("AiTCUQg9g9gBhXQABhWA9g9QA9g9BWgBQBXABA9A9QA9A9ABBWQgBBXg9A9Qg9A9hXAAQhWAAg9g9gAiJiJQg5A6ABBPQgBBQA5A5QA6A6BPgBQBQABA6g6QA5g5gBhQQABhPg5g6Qg6g5hQAAIAAAAQhPAAg6A5g");
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(0,0,0,0.333)").s().p("AAADCQhPABg6g6Qg5g5ABhQQgBhPA5g6QA6g5BPAAQBQAAA6A5QA5A6gBBPQABBQg5A5Qg6A5hQAAIAAAAgAh+h+Qg0A1gBBJQABBKA0A1QA1A0BJABQBKgBA1g0QA0g1AAhKQAAhJg0g1Qg1g0hKAAQhJAAg1A0g");
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(0,0,0,0.502)").s().p("Ah+B/Qg0g1gBhKQABhJA0g1QA1g0BJAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKABQhJgBg1g0gAhzhzQgxAwAABDQAABEAxAwQAwAxBDgBQBEABAwgxQAxgwAAhEQAAhDgxgwQgwgxhEAAQhDAAgwAxg");
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(0,0,0,0.843)").s().p("AhoBpQgsgrAAg+QAAg9AsgrQArgsA9gBQA+ABArAsQAsArAAA9QAAA+gsArQgrAsg+AAQg9AAgrgsg");
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(0,0,0,0.671)").s().p("AhzB0QgxgwAAhEQAAhDAxgwQAwgxBDAAQBEAAAwAxQAxAwAABDQAABEgxAwQgwAxhEgBQhDABgwgxgAhohoQgsArAAA9QAAA+AsArQArAsA9AAQA+AAArgsQAsgrAAg+QAAg9gsgrQgrgsg+gBQg9ABgrAsg");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);
	
	
	(lib.tips_play = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_14 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));
	
		// label
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#666666").s().p("AAOAfIAAgkQAAgGgBgDQgBgDgDgCQgEgCgEAAQgFAAgEAEQgFAEAAAMIAAAgIgLAAIAAg8IAKAAIAAAJQAHgKAKAAQAGAAAFACQAFACACADQACADABAFIABAKIAAAkg");
		this.shape.setTransform(18.6,-10.3);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#666666").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
		this.shape_1.setTransform(11.9,-10.2);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#666666").s().p("AgEArIAAhVIAJAAIAABVg");
		this.shape_2.setTransform(7.2,-11.4);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#666666").s().p("AgTAYQgIgJAAgPQAAgOAIgJQAIgIALAAQAMAAAIAIQAIAJAAAOIAAACIgsAAQAAAKAFAGQAGAFAFAAQAGAAAEgDQAEgDADgHIALACQgDAKgHAEQgHAGgLAAQgLAAgIgIgAgKgSQgFAFgBAIIAhAAQgBgIgDgEQgFgFgIgBQgFABgFAEg");
		this.shape_3.setTransform(2.6,-10.2);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#666666").s().p("AgaArIAAhUIAKAAIAAAIQAEgFADgCQAFgCAEAAQAIAAAGAEQAGAEAEAHQACAIAAAJQABAJgEAGQgDAIgHAEQgGAEgHAAQgEAAgEgDQgFgCgCgDIAAAegAgLgcQgFAGAAAMQAAALAFAFQAFAGAGAAQAGAAAEgGQAGgGgBgKQAAgMgEgGQgFgGgGAAQgFAAgGAGg");
		this.shape_4.setTransform(-3.8,-9.1);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#666666").s().p("AgQAbQgGgFgCgKIAKgCQABAHAEADQAEADAFAAQAIAAADgDQADgDAAgDQAAgEgCgDIgLgDIgOgEQgFgBgCgEQgDgEABgEQAAgFABgDIAGgGIAGgDIAJgBQAFAAAHACQAFACADADQACAFABAFIgKACQgBgFgEgDQgDgDgFAAQgGAAgDADQgDACAAADIABAFIAEACIAIADIAPAFQAEAAADADQACAEAAAFQAAAFgDAFQgDAFgGACQgFADgHAAQgLAAgGgFg");
		this.shape_5.setTransform(-10.4,-10.2);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#666666").s().p("AgHArIAAg0IgKAAIAAgIIAKAAIAAgHIABgJQABgEAEgDQACgCAHAAIAKABIgCAJIgGAAQgFAAgCACQgCACAAAFIAAAGIAMAAIAAAIIgMAAIAAA0g");
		this.shape_6.setTransform(-14.8,-11.5);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#666666").s().p("AgVAbQgGgFAAgIQAAgEACgEQACgEAEgCIAHgCIAKgBQAKgCAGgCIAAgCQAAgHgDgDQgEgEgHAAQgGAAgEADQgEADgBAHIgLgCQACgGAEgFQACgEAHgCQAGgCAFAAQAIAAAGACQAEACADACQACADABAEIABAKIAAANIAAASQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBAEQgGAAgDACQgDAAgCADQgBACAAADQAAAEAEADQACACAHABQAEgBAFgCQAEgCADgFQABgEAAgHIAAgDIgPAEg");
		this.shape_7.setTransform(-20,-10.2);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},14).wait(1));
	
		// back
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#666666").ss(1,1,1).p("AEcBuIo3AAIAAjbII3AAg");
		this.shape_8.setTransform(-0.8,-11);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AkbBuIAAjaII3AAIAADag");
		this.shape_9.setTransform(-0.8,-11);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},14).wait(1));
	
		// shadow
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(0,0,0,0.502)").s().p("AkfBtIAAjZII+AAIAADZg");
		this.shape_10.setTransform(0.6,-9.2);
		this.shape_10._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(14).to({_off:false},0).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = null;
	
	
	(lib.donic = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#C13724").s().p("AgDAEIgBgHQACADAFADIABAAIABABg");
		this.shape.setTransform(-23.7,-20);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#DE3928").s().p("AgEAEIAEgDIADgBIACgCIgBAGg");
		this.shape_1.setTransform(23.6,-19.9);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#BC3523").s().p("ADmAQIAAgCQgQgKgRgEQgNgEgOgCQgLgBgMABQgJAAgJgBQhLgIhJgBQhTgChPARIgYAEIgMADIgMACQgEAHACAFIgBAAQgHgEgBgEIgBgBIAAAAIAAgBIACgDIABgBIAEgDIABgBIAAAAIAIgCIAIgCQAOgDAWgEIALgBQBHgJBjAAQBjAABHAJIAAAAIAcAEQAnAGAEAJIAAACIAAABIAAABIgCADIgEADIgEABIgBgEg");
		this.shape_2.setTransform(0,-21.7);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#752115").s().p("AiEAYIgfgDIgMgCIAAggQBQgSBSACQBJABBMAJQAJABAJgBQALgBALACQAAASgCAVQhGAJhiAAQhNAAg9gGg");
		this.shape_3.setTransform(-0.7,-20.4);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#51160F").s().p("ADEgPQARAGAPAJIABABIABAFIAEgCIgFACQgMAFgZAFIAEgfgAjnAGIgBAAQgCgGAEgFIAMgCIABASIgOgFg");
		this.shape_4.setTransform(0.1,-20.2);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#6B1F14").s().p("AC0gTQAOABAOAEIgFAfIgXADIgDAAQADgUAAgTgAjOAMIgBgSIAMgCIAYgGIAAAgQgVgDgOgDg");
		this.shape_5.setTransform(-1,-20.3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));
	
		// Layer 1
		this.instance = new lib.Bitmap3();
		this.instance.setTransform(-24,-19.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-24,-19.5,48,43);
	
	
	(lib.blysk = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0)").s().p("AtKQrIhGgLQiXgbhageQiHgugCg3IAA8EQADhcF3hBQF7hCIVAAQIXAAF6BCQEUAwBKA+QAbAXABAYIAAcEQgBAlg8AgQhbAxjiAoIhnAQQlaAynQAAQnlAAllg3g");
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(255,255,255,0.141)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(255,255,255,0.286)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(255,255,255,0.427)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(255,255,255,0.573)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("rgba(255,255,255,0.714)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("rgba(255,255,255,0.859)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#FFFFFF").s().p("AtKQrIhGgLQiXgbhageQiHgugCg3IAA8EQADhcF3hBQF7hCIVAAQIXAAF6BCQEUAwBKA+QAbAXABAYIAAcEQgBAlg8AgQhbAxjiAoIhnAQQlaAynQAAQnlAAllg3g");
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("rgba(255,255,255,0.831)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("rgba(255,255,255,0.667)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("rgba(255,255,255,0.502)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("rgba(255,255,255,0.333)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("rgba(255,255,255,0.169)").s().p("AtKQrIhGgMQiXgahageQiHgugCg2IAA8FQADhcF3hBQF6hCIWAAQIXAAF6BCQETAwBLA/QAbAWABAYIAAcFQgBAkg8AgQhbAxjiAnIhnARQlbAxnPABQnmAAlkg3g");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape}]},1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-129.1,-112.2,258.3,224.4);
	
	
	(lib.asa = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.Bitmap2();
		this.instance.setTransform(-38.6,-15.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-38.6,-15.4,272,21);
	
	
	(lib._1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("rgba(255,255,255,0.4)").ss(1,1,1).p("ADsvwIAsgWImOAAIijBOIgBABIABAAIGLAAIACAAIB4g5IAwgWIAAe/IiqBNIAAABImNAAIAA+/IACAAIAAABAByu3IAAe9");
		this.shape.setTransform(28.5,103.2);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0.2)"],[0,1],0,-93.4,0,98.3).s().p("AhUu3IACAAIB3g5IAvgWIAAfAIioBNg");
		this.shape_1.setTransform(48.4,103.1);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0.2)"],[0,1],-9.5,-93.4,-9.5,98.3).s().p("AjGvfIACAAIgBABIABAAIGLgBIAAe+IAAABImNAAg");
		this.shape_2.setTransform(20,107.1);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.lf(["#FFFF00","#FF9900"],[0,1],11.1,-0.3,25.7,-7.3).s().p("AAAAAIAAAAIAAAAg");
		this.shape_3.setTransform(0.2,7.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.lf(["rgba(255,255,255,0.102)","rgba(255,255,255,0.2)"],[0,1],-886.1,-53.2,752.3,-53.2).s().p("AkYAmICjhMIGOAAIgsAWIh4A3IgCAAImLAAg");
		this.shape_4.setTransform(28.4,4);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1,-1,59,208.4);
	
	
	(lib.slonko = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Symbol 12
		this.instance = new lib.Symbol12("synched",0);
		this.instance.setTransform(1.2,-9.2,0.9,0.9,0,0,0,-45,45);
		this.instance.alpha = 0.441;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// slonc_1
		this.instance_1 = new lib.slonc_1("synched",0);
		this.instance_1.setTransform(-0.7,7.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
		// Symbol 2
		this.instance_2 = new lib.Symbol2("synched",0);
		this.instance_2.setTransform(0.1,6.8,0.347,0.355,0,-79.6,-81.9,-123.8,174.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-56.7,-60.5,119.8,111);
	
	
	(lib.slon_all = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.slon();
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFE32").s().p("AhnBoQgrgsAAg8QAAg8ArgrQArgrA8AAQA8AAAsArQArArAAA8QAAA8grAsIAAAAQgsArg8AAQg8AAgrgrg");
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(255,254,50,0.796)").s().p("AhyBzQgvgwAAhDQAAhCAvgwQAwgvBCAAQBDAAAwAvQAvAwAABCQAABDgvAvIgBABQgvAvhDAAQhCAAgwgvgAhnhnQgrArAAA8QAAA8ArAsQArArA8AAQA8AAAsgrIAAAAQArgsAAg8QAAg8grgrQgsgrg8AAQg8AAgrArg");
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("rgba(255,254,50,0.196)").s().p("AiRCSQg9g9AAhVQAAhUA9g9IAAAAQA9g9BUAAQBVAAA9A9QA9A9AABUQAABVg9A9IAAAAQg9A9hVAAQhUAAg9g9gAiGiHIgBABQg4A4AABOQAABQA4A3QA5A5BOAAQBQAAA3g4IABgBQA4g3AAhQQAAhOg5g5Qg3g4hQAAQhOAAg4A4g");
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("rgba(255,254,50,0.596)").s().p("Ah8B9Qg0g0AAhJQAAhIAzg0IABgBQA0gzBIAAQBJAAA0A0QA0A0AABIQAABJg0A0IAAAAQg0A0hJAAQhIAAg0g0gAhyhyQgvAwAABCQAABDAvAwQAwAvBCAAQBDAAAvgvIABgBQAvgvAAhDQAAhCgvgwQgwgvhDAAQhCAAgwAvg");
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("rgba(255,254,50,0.396)").s().p("AiHCHQg4g3AAhQQAAhOA4g4IABgBQA4g4BOAAQBQAAA3A4QA5A5AABOQAABQg4A3IgBABQg3A4hQAAQhOAAg5g5gAh8h9IgBABQgzA0AABIQAABJA0A0QA0A0BIAAQBJAAA0g0IAAAAQA0g0AAhJQAAhIg0g0Qg0g0hJAAQhIAAg0Azg");
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-20.7,-20.7,41.5,41.5);
	
	
	(lib.roslina = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.donic("single",0);
		this.instance.setTransform(9,57.6);
	
		this.instance_1 = new lib.plant();
		this.instance_1.setTransform(-34.2,-72.4,0.33,0.33);
	
		this.instance_2 = new lib.donic("single",1);
		this.instance_2.setTransform(9,57.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-34.2,-72.4,169,169);
	
	
	(lib.pictogram_zoom = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_9 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));
	
		// Layer 1
		this.instance = new lib.pictogram_zoom_gfx();
		this.instance.setTransform(6,5,1,1,0,0,0,1,0);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.891},0).wait(1).to({scaleX:1.22,scaleY:1.22,alpha:0.781},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:0.672},0).wait(1).to({scaleX:1.44,scaleY:1.44,alpha:0.551},0).wait(1).to({scaleX:1.56,scaleY:1.56,alpha:0.449},0).wait(1).to({scaleX:1.67,scaleY:1.67,alpha:0.328},0).wait(1).to({scaleX:1.78,scaleY:1.78,x:6.1,alpha:0.219},0).wait(1).to({scaleX:1.89,scaleY:1.89,x:6,alpha:0.109},0).wait(1).to({scaleX:2,scaleY:2,alpha:0},0).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(2.8,-0.1,6.5,10.3);
	
	
	(lib.okno = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#996715").s().p("AgIAJIAPgRIACACIgJAPg");
		this.shape.setTransform(369.9,107.4);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#2F1F15").s().p("AgDARIAGgMIAAACIgEAMgAABgSIAAAAIAAABg");
		this.shape_1.setTransform(358.6,100);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#684B0E").s().p("AAlCBIALgRIgCgCIgQATIgKAAIACgCQAUgWAXgSIAOgLIASgNQgFAOgJALQgLAPgRALIgKAHIgDAHIAAABgAgmB/IACgcQACgOADgPIAAAAIAAgBQAEgHAFgGIAPgRIBLhcIAggoIgWAsQgNAWgOAWIgIAKIAGAAIgCADIATgDQBBgHA7gfIAAAEQhPAuhaAQIgJASIgDgDIgEAYIgBACIgDAOIgCAMIgJAcgAhpB9IAeg8IAGgMIADASQAAAKgCAIQgFATgPAKQgHAEgJADgAi9B7IAAgOIAFABIABABQAGABAHgBIACAAIgDAEIAcgJIAGAGQgCAIgGAEgAhgBHIAEgFIADgDQALgRAHgTIAAgBIACAAIAAAZIgIAMIgRAcgAhVASQAJgSgCgUIgSACQgOgSgNgSQgRgZgOgaQASAaAVAYIAOAPIAHgBIAEAPQAUgWAEgZQACgSgGgUIgDgHIAKgKQAFAUABATQAFA8gaA3IAGAAIgYAlQACgYAJgVgACsgFIgFADQgSAJgVACg");
		this.shape_2.setTransform(366,95.4);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#452F0A").s().p("AgaCFIAKgcIADgMIADgOIABgCIAEgYIADADIAHgRQBagRBPguIAAgEIAFgIQAEgFAGgDIAHAGIgCAHQgMAZgaAGIgsAOQg/AMgkAzQgHAJgGALQAaAMASgTQAGgHAFgLQAIgYAYgBIgGAVIgSANIgOALQgXASgUAWIgCACgAhbCDIgBgCIgCACIgagBQAJgCAHgFQAPgKAFgSQACgJABgKIAAgSQABgKAGgJIADAKQAFAQgBAQIALgNIAFANIAEgGIAAAAQgDAPgCAOIgCAcgAihCCQAGgFADgIIgHgGIgbAJIACgEQAVgLAIgVIACgHQAOg4gPgzQgJgjgVgiQgEgEgDgFQgKgQANgJIAUAfIgCACQAOAbASAYQAMATAPARIARgCQACASgJAUQgJAVgCAYIAZglIAAABQgHATgLARIgCADIgEAFIABAUIASgcIABACIgeA8gAAbAKIAIgKQAPgWAMgWIAWgsIAGgFIgHAxQgNAjgkATgAhugkIACgRIAAAAQAFggAPgbIACAGQAGAUgCASQgDAagVAVg");
		this.shape_3.setTransform(367.6,94.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#495A14").s().p("ABZAYIABgBQASgKASgLQALABAFALIABACIgCAEIgCAEIgBABgAhcgYQgIAVgVAJIgCAAQALgTAUgLgAiOAEIAAgEQADABADAEIgGgBg");
		this.shape_4.setTransform(361.2,105.9);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#637A1B").s().p("AgqBvIACgBIACgFIACgDIgBgCQgFgLgLgCQgSAMgSAKIADgIIAKgGQAQgLAMgPIAKAJIBCgcIASgfIALAAIADADIgHAWIAEAEIAIgVIATgLIAEADIgFAWIALgBIAMgWIAIgDIAWAGIACgPIgdgdIAGgJIA4ALIARgaIANADIABAHQAAAIgFAJIgGAKIgFAJIAaAGIgCAxIAFgBIAJgPIAHgDIAFAGIABAOIAJgJIAFgBIAJADIABgKIA1gLIAMAQIgCALIgUARIARASIgIAfgAk8BbIgBAAQgDgEgDgBIgChbIADgDIAEgBIAAgBIACAAIAJAAQADgEAFgBIADgBIAaACIgugpIAtAAQAOA2gOA1IgCAIQgUALgLAVIgEAAIgIgBgAh0BIQAGgLAHgJIAfANQgLAMgOAAQgIAAgLgFgAi8AYIgEgKQgGAJAAALIgBARIgDgRIAAgDIAAgYIgDAAIAAAAIgHgBQAbg3gFg8IAFgJIAIgBIATA9IgXAmIAfAEIANAMIgFAWIABABIgOASQgGAGgEAHIAAAAIgEAGIgFgMIgLANQACgRgFgQgAj5hLIAXgDIAAAAIgCASIgHAAIgOgPg");
		this.shape_5.setTransform(379.4,97.4);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#AAD32C").s().p("AAqENQAFgxAZgpQASgdAggDIALgBIA3gQIBIAbIgCATIAQgKIAEAFIgWAwIghgJIgBABQgEAWgWALIAAABIAAAAIgBAAQgNAGgPABIAAAAIgDAAQgPAAgGgMIABgCIABgDIADgIQgnAMglAgQgDADgFAAIgFABQgJAAgIgGgAjmBZIgBgKIgBgIIglgCIgBg4IAXAMIADALIAeAXIAHgBQAbACANAXIABABIAAACIAAADIAAAEQgPALgPAAQgSAAgQgPgAhSAsIgJgCQgMgCgHgJQAAgMAEgKIACgLQAEgFADgFQAGgKgCgMIgHgCIgDAAQgJAGgIAJQgIAKgDALIgKALIgOAWIgBABQgVAMgVgJIgFADIgJgGIACgFIAAAAIAAgEQABgGADgFIAFgHIAAgCIAAgBIAAgEIAAAAIgDgFIgCgCIgYgFIgHgCIgPgHIgKgFIgJACIgBgVIAGABIA3glIgBgOIgPgEIgHgLIAbgJIgmgQIgJAGIgFAYIgOAJIgEiaIAGgDIAFgVQAGAIAIAGIADACQADgGAHgGQADgDADgBQAoAEgTAdIADACQArAeApgUIADAEQAZAeAXgZIAJABQAmAGAdAXQAJAFAFAKIABACIgDADQgCAEgDACIABABQApADAbAaIAJgBIAIABIACgCIACADQA2AMAGA8IABANIgEACIABABIgCAAQgnAPgggVIgBgCQgDADACAEIAEAGQACADAAAEQgbApgkgkQAAgGAGgEIAFgDIAEgLQgHAAgIgCQgNAGgGALQAGALACAOIAAACIAAABIgEAFQABAEgDADQgEADAAAFIgBACQgYAkgiAAQgNAAgOgFgAhmg5IACAAIgBAAgAgGiKIgTAIIgFAJIACABQAgAPAkgFIAJgJQgZgBgYgPIgFgDIgBAAgAkPgIIABgBIAGADIgGAGg");
		this.shape_6.setTransform(372.9,58.8);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#86A723").s().p("Ag1F0QAIgMAGgNIAFgVQgYAAgHAZQgGAKgGAHIgfgNQAlgzA/gLQATgCASgMIAFgCQAagGALgZIADgHIgHgGQgGACgFAGIgFAIQg4AfhBAJIgTACIACgDQAlgUAMgjIAHgyIgFAGIggAoIhNBdIgCgBIAGgYIgOgMIgfgEIAYgmIgUg9IgHABIgGAJQgCgTgFgUIgJALQgPAcgEAfIgXADQgVgXgSgaIABgCIgTgfQgNAIAJARQADAFAFAEQAVAhAJAjIgsAAIAtApIgagCIgDABQgFABgCAEIgKAAIgBAAIgBABIgDACIgEACIgIkzIAlACIABAIIABAIQAeAbAigYIAAgDIAAgEIAAgBIgBgCQgNgUgbgCIgHAAIgegWIgDgMIgXgMIAAgOIAGgGIgGgDIgBABIAAgQIAJgDIAKAGIAPAGIAHADIAYAFIACACIADAGIAAABIAAADIAAACIAAACIgFAGQgDAGgBAGIAAADIAAABIgCAEIAJAGIAFgCQAVAJAVgMIABgBIAOgWIAKgNQADgLAIgKQAIgJAJgGIADAAIAHABQACAMgGALQgDAFgEAEIgCANQgEAKAAAMQAHAKAMACIAJABQAyAUAlgzIABgCQAAgEAEgEQADgDgBgFIAEgFIAAgBIAAgDQgCgOgGgLQAGgKANgGQAIABAHAAIgEALIgFAEQgGAEAAAGQAkAmAZgrQAAgEgCgDIgEgGQgCgEADgDIABACQAgAVAngQIACABIgBgBIAEgCIgBgNQgGg9g2gLIgCgDIgCACIgIgBIgJABQgZgbgpgCIgBgCQADgBACgEIADgEIgBgBQgFgLgJgFQgfgXgmgGIgJAAQgXAZgZgeIgDgFQgpAUgrgdIgDgCQATgdgogEQgDAAgDAEQgHAGgDAGIgDgCQgIgGgGgIIAGgYIBUARIADAQIAOgIIAqACIACAWQBUAfBaATIgYAiIATAIIAPAAIAHAFIADALIAygiIAQADIAIAPQAeA6A1AjIgIAcIhIAeIBVAXIgCAPIAzA6IgcARIANANIgMAPIgDAVIhIgaIg3APIgLACQggADgSAdQgXApgFAxQAKAHAMgCQADAAADgDQAlggAngNIgDAIIgBAEIgBACQAGAMAPAAIADAAIAAAAQAPgBANgHIABAAIAAAAIAAAAQAWgLAEgWIABgCIAhAKIAWgxIgEgFIAVgNIAaAJIAAANIAFgDIAeAFIgFAbIgiAIIgCAGIAlgIIATASIgJAeIAyAhIg3AjIAVAdIgJALIAWAZIgSAMIAGAKIg1ALIgCAKIgIgCIgFABIgKAIIAAgOIgGgGIgGADIgJAPIgGABIACgxIgagIIAGgJIAGgKQAEgIAAgJIAAgHIgOgDIgRAaIg4gLIgFAJIAdAfIgDAPIgVgGIgIADIgNAWIgLABIAFgWIgDgDIgTALIgJAVIgDgEIAGgWIgDgDIgKAAIgTAfIhBAcgAlVh/IgBgzIAOgJIAFgZIAJgFIAmAQIgbAIIAHALIAPAFIABAOIg3AkgAiqiMIABABIgCAAgAhhjLIgCgBIAFgJIATgHIABgBIAGAEQAZAPAZABIgJAIIgSABQgaAAgagLg");
		this.shape_7.setTransform(379.8,67.1);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#8BA424").s().p("AgqBvIACgBIACgFIACgDIgBgCQgFgLgLgCQgSAMgSAKIADgIIAKgGQAQgLAMgPIAKAJIBCgcIASgfIALAAIADADIgHAWIAEAEIAIgVIATgLIAEADIgFAWIALgBIAMgWIAIgDIAWAGIACgPIgdgdIAGgJIA4ALIARgaIANADIABAHQAAAIgFAJIgGAKIgFAJIAaAGIgCAxIAFgBIAJgPIAHgDIAFAGIABAOIAJgJIAFgBIAJADIABgKIA1gLIAMAQIgCALIgUARIARASIgIAfgAk8BbIgBAAQgDgEgDgBIgChbIADgDIAEgBIAAgBIACAAIAJAAQADgEAFgBIADgBIAaACIgugpIAtAAQAOA2gOA1IgCAIQgUALgLAVIgEAAIgIgBgAi8AYIgEgKQgGAJAAALIgBARIgDgRIAAgDIAAgYIgDAAIAAAAIgHgBQAbg3gFg8IAFgJIAIgBIATA9IgXAmIAfAEIANAMIgFAWIABABIgOASQgGAGgEAHIAAAAIgEAGIgFgMIgLANQACgRgFgQg");
		this.shape_8.setTransform(379.4,97.4);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#CDE177").s().p("AAqENQAFgxAZgpQASgdAggDIALgBIA3gQIBIAbIgCATIAQgKIAEAFIgWAwIghgJIgBABQgEAWgWALIAAABIAAAAIgBAAQgNAGgPABIAAAAIgDAAQgPAAgGgMIABgCIABgDIADgIQgnAMglAgQgDADgFAAIgFABQgJAAgIgGgAhSAsIgJgCQgMgCgHgJQAAgMAEgKIACgLQAEgFADgFQAGgKgCgMIgHgCIgDAAQgJAGgIAJQgIAKgDALIgKALIgOAWIgBABQgVAMgVgJIgFADIgJgGIACgFIAAAAIAAgEQABgGADgFIAFgHIAAgCIAAgBIAAgEIAAAAIgDgFIgCgCIgYgFIgHgCIgPgHIgKgFIgJACIgGjiIAGgDIAFgVQAGAIAIAGIADACQADgGAHgGQADgDADgBQAoAEgTAdIADACQArAeApgUIADAEQAZAeAXgZIAJABQAmAGAdAXQAJAFAFAKIABACIgDADQgCAEgDACIABABQApADAbAaIAJgBIAIABIACgCIACADQA2AMAGA8IABANIgEACIABABIgCAAQgnAPgggVIgBgCQgDADACAEIAEAGQACADAAAEQgbApgkgkQAAgGAGgEIAFgDIAEgLQgHAAgIgCQgNAGgGALQAGALACAOIAAACIAAABIgEAFQABAEgDADQgEADAAAFIgBACQgYAkgiAAQgNAAgOgFgAhmg5IACAAIgBAAgAgeh5IACABIgCgCIAAABg");
		this.shape_9.setTransform(372.9,58.8);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#B3D231").s().p("Ag2F0QAJgMAFgNIAFgVQgYAAgHAZQgFAKgHAHIgegNQAkgzA/gLQATgCASgMIAFgCQAagGALgZIADgHIgHgGQgGACgFAGIgEAIQg5AfhBAJIgTACIACgDQAlgUANgjIAGgyIgFAGIggAoIhNBdIgBgBIAFgYIgOgMIgfgEIAYgmIgUg9IgHABIgGAJQgCgTgFgUIgJALQgPAcgEAfIgXADQgVgXgSgaIABgCIgTgfQgNAIAJARQADAFAFAEQAVAhAJAjIgsAAIAtApIgagCIgDABQgEABgDAEIgKAAIgBAAIgBABIgDACIgEACIgIkzIAlACIABAIIACAIQAdAbAjgYIAAgDIAAgEIAAgBIgBgCQgOgUgbgCIgHAAIgegWIgCgMIgYgMIAAgOIAGgGIgGgDIgBABIAAgQIAJgDIAKAGIAPAGIAIADIAXAFIACACIADAGIAAABIAAADIAAACIAAACIgFAGQgDAGgBAGIAAADIABABIgCAEIAIAGIAFgCQAVAJAWgMIAAgBIAPgWIAKgNQACgLAJgKQAHgJAJgGIADAAIAHABQACAMgGALQgCAFgEAEIgDANQgEAKAAAMQAIAKALACIAJABQAyAUAmgzIAAgCQABgEADgEQADgDgBgFIAEgFIAAgBIAAgDQgCgOgGgLQAGgKANgGQAIABAHAAIgEALIgFAEQgFAEgBAGQAlAmAYgrQABgEgDgDIgEgGQgCgEADgDIABACQAgAVAngQIACABIgBgBIAEgCIgBgNQgGg9g2gLIgCgDIgCACIgIgBIgJABQgYgbgqgCIgBgCQAEgBABgEIADgEIgBgBQgFgLgJgFQgfgXgmgGIgJAAQgXAZgZgeIgDgFQgpAUgrgdIgDgCQATgdgogEQgDAAgDAEQgHAGgCAGIgEgCQgIgGgGgIIAGgYIBUARIADAQIAPgIIApACIACAWQBUAfBaATIgYAiIATAIIAQAAIAGAFIADALIAygiIAQADIAIAPQAfA6A0AjIgIAcIhIAeIBVAXIgCAPIAzA6IgbARIANANIgMAPIgEAVIhIgaIg3APIgLACQggADgSAdQgXApgFAxQAKAHANgCQADAAACgDQAlggAngNIgDAIIgBAEIgBACQAHAMAPAAIACAAIAAAAQAQgBAMgHIABAAIAAAAIAAAAQAWgLAEgWIABgCIAhAKIAWgxIgEgFIAVgNIAaAJIAAANIAFgDIAeAFIgFAbIghAIIgDAGIAlgIIATASIgJAeIAyAhIg3AjIAVAdIgJALIAWAZIgSAMIAGAKIg1ALIgCAKIgIgCIgFABIgKAIIAAgOIgGgGIgGADIgJAPIgGABIACgxIgagIIAGgJIAGgKQAEgIAAgJIAAgHIgOgDIgRAaIg4gLIgFAJIAdAfIgDAPIgVgGIgIADIgNAWIgLABIAFgWIgDgDIgTALIgJAVIgDgEIAGgWIgDgDIgKAAIgTAfIhBAcg");
		this.shape_10.setTransform(379.9,67.1);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#637A1B").s().p("AAsBJQAGgLAHgJIAfANQgLAMgOAAQgIAAgLgFgAhXhKIAXgDIAAAAIgCASIgHAAIgOgPg");
		this.shape_11.setTransform(363.2,97.3);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#AAD32C").s().p("AgKArIgCgLIgBgIIgkgCIgBg2IAXAMIADALIAcAVIAHAAQAbACANAWIABACIAAABIAAAEIAAADQgQALgPAAQgRAAgOgOgAgzg3IABgBIAFADIgGAHg");
		this.shape_12.setTransform(351,63.5);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#86A723").s().p("AgjAfIABABIgCAAgAAigfIAAAAIADABIgDgBg");
		this.shape_13.setTransform(366.3,49.8);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#36400F").s().p("AhaBuIABgBIADgIIAKgGQAQgLAMgPIAKAJIBCgcIASgfIALAAIADADIgHAWIAEAEIAIgVIATgLIAEADIgFAWIALgBIAMgWIAIgDIAWAGIACgPIgdgdIAGgJIA4ALIARgaIANADIABAHQAAAIgFAJIgGAKIgFAJIAaAGIgCAxIAFgBIAJgPIAHgDIAFAGIABAOIAJgJIAFgBIAJADIABgKIA1gLIAMAQIgCALIgUARIARASIgIAfgAk8BbIgBAAQgDgEgDgBIgChbIADgDIAEgBIAAgBIACAAIAJAAQADgEAFgBIADgBIAaACIgugpIAtAAQAOA2gOA1IgCAIQgUALgLAVIgEAAIgIgBgAh0BIQAGgLAHgJIAfANQgLAMgOAAQgIAAgLgFgAi8AYIgEgKQgGAJAAALIgBARIgDgRIAAgDIAAgYIgDAAIAAAAIgHgBQAbg3gFg8IAFgJIAIgBIATA9IgXAmIAfAEIANAMIgFAWIABABIgOASQgGAGgEAHIAAAAIgEAGIgFgMIgLANQACgRgFgQgAj5hLIAXgDIAAAAIgCASIgHAAIgOgPg");
		this.shape_14.setTransform(379.4,97.4);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#7D9520").s().p("AAqENQAFgxAZgpQASgdAggDIALgBIA3gQIBIAbIgCATIAQgKIAEAFIgWAwIghgJIgBABQgEAWgWALIAAABIAAAAIgBAAQgNAGgPABIAAAAIgDAAQgPAAgGgMIABgCIABgDIADgIQgnAMglAgQgDADgFAAIgFABQgJAAgIgGgAjmBZIgBgKIgBgIIglgCIgBg4IAXAMIADALIAeAXIAHgBQAbACANAXIABABIAAACIAAADIAAAEQgPALgPAAQgSAAgQgPgAhSAsIgJgCQgMgCgHgJQAAgMAEgKIACgLQAEgFADgFQAGgKgCgMIgHgCIgDAAQgJAGgIAJQgIAKgDALIgKALIgOAWIgBABQgVAMgVgJIgFADIgJgGIACgFIAAAAIAAgEQABgGADgFIAFgHIAAgCIAAgBIAAgEIAAAAIgDgFIgCgCIgYgFIgHgCIgPgHIgKgFIgJACIgBgVIAGABIA3glIgBgOIgPgEIgHgLIAbgJIgmgQIgJAGIgFAYIgOAJIgEiaIAGgDIAFgVQAGAIAIAGIADACQADgGAHgGQADgDADgBQAoAEgTAdIADACQArAeApgUIADAEQAZAeAXgZIAJABQAmAGAdAXQAJAFAFAKIABACIgDADQgCAEgDACIABABQApADAbAaIAJgBIAIABIACgCIACADQA2AMAGA8IABANIgEACIABABIgCAAQgnAPgggVIgBgCQgDADACAEIAEAGQACADAAAEQgbApgkgkQAAgGAGgEIAFgDIAEgLQgHAAgIgCQgNAGgGALQAGALACAOIAAACIAAABIgEAFQABAEgDADQgEADAAAFIgBACQgYAkgiAAQgNAAgOgFgAhmg5IACAAIgBAAgAgGiKIgTAIIgFAJIACABQAgAPAkgFIAJgJQgZgBgYgPIgFgDIgBAAg");
		this.shape_15.setTransform(372.9,58.8);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#617218").s().p("Ag2F0QAJgMAFgNIAFgVQgYAAgHAZQgFAKgHAHIgegNQAkgzA/gLQATgCASgMIAFgCQAagGALgZIADgHIgHgGQgGACgFAGIgEAIQg5AfhBAJIgTACIACgDQAlgUANgjIAGgyIgFAGIggAoIhNBdIgBgBIAFgYIgOgMIgfgEIAYgmIgUg9IgHABIgGAJQgCgTgFgUIgJALQgPAcgEAfIgXADQgVgXgSgaIABgCIgTgfQgNAIAJARQADAFAFAEQAVAhAJAjIgsAAIAtApIgagCIgDABQgEABgDAEIgKAAIgBAAIgBABIgDACIgEACIgIkzIAlACIABAIIACAIQAdAbAjgYIAAgDIAAgEIAAgBIgBgCQgOgUgbgCIgHAAIgegWIgCgMIgYgMIAAgOIAGgGIgGgDIgBABIAAgQIAJgDIAKAGIAPAGIAIADIAXAFIACACIADAGIAAABIAAADIAAACIAAACIgFAGQgDAGgBAGIAAADIABABIgCAEIAIAGIAFgCQAVAJAWgMIAAgBIAPgWIAKgNQACgLAJgKQAHgJAJgGIADAAIAHABQACAMgGALQgCAFgEAEIgDANQgEAKAAAMQAIAKALACIAJABQAyAUAmgzIAAgCQABgEADgEQADgDgBgFIAEgFIAAgBIAAgDQgCgOgGgLQAGgKANgGQAIABAHAAIgEALIgFAEQgFAEgBAGQAlAmAYgrQABgEgDgDIgEgGQgCgEADgDIABACQAgAVAngQIACABIgBgBIAEgCIgBgNQgGg9g2gLIgCgDIgCACIgIgBIgJABQgYgbgqgCIgBgCQAEgBABgEIADgEIgBgBQgFgLgJgFQgfgXgmgGIgJAAQgXAZgZgeIgDgFQgpAUgrgdIgDgCQATgdgogEQgDAAgDAEQgHAGgCAGIgEgCQgIgGgGgIIAGgYIBUARIADAQIAPgIIApACIACAWQBUAfBaATIgYAiIATAIIAQAAIAGAFIADALIAygiIAQADIAIAPQAfA6A0AjIgIAcIhIAeIBVAXIgCAPIAzA6IgbARIANANIgMAPIgEAVIhIgaIg3APIgLACQggADgSAdQgXApgFAxQAKAHANgCQADAAACgDQAlggAngNIgDAIIgBAEIgBACQAHAMAPAAIACAAIAAAAQAQgBAMgHIABAAIAAAAIAAAAQAWgLAEgWIABgCIAhAKIAWgxIgEgFIAVgNIAaAJIAAANIAFgDIAeAFIgFAbIghAIIgDAGIAlgIIATASIgJAeIAyAhIg3AjIAVAdIgJALIAWAZIgSAMIAGAKIg1ALIgCAKIgIgCIgFABIgKAIIAAgOIgGgGIgGADIgJAPIgGABIACgxIgagIIAGgJIAGgKQAEgIAAgJIAAgHIgOgDIgRAaIg4gLIgFAJIAdAfIgDAPIgVgGIgIADIgNAWIgLABIAFgWIgDgDIgTALIgJAVIgDgEIAGgWIgDgDIgKAAIgTAfIhBAcg");
		this.shape_16.setTransform(379.9,67.1);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#495A14").s().p("AAYgPQgIAUgTAKIgCABQAKgTATgMgAgXANIAAgEQADACACAEIgFgCg");
		this.shape_17.setTransform(349.4,105);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#AAD32C").s().p("AgCgCIABgBIAEADIgEAEg");
		this.shape_18.setTransform(346,58.2);
	
		this.shape_19 = new cjs.Shape();
		this.shape_19.graphics.f("#86A723").s().p("AifAuIgCgxIAPgJIAEgZIAJgFIAnAQIgcAIIAHALIAPAFIABAMIg2AkgAAJAiIABAAIgCAAgABTgbIgDgBIAFgJIAUgIIABAAIAFADQAZAPAZABIgJAIIgRACQgbAAgZgLg");
		this.shape_19.setTransform(361.7,49.5);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_4},{t:this.shape},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_2},{t:this.shape_3},{t:this.shape_1},{t:this.shape_17},{t:this.shape},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));
	
		// Layer 5
		this.instance = new lib.slonko();
		this.instance.setTransform(395.9,82.7,1.813,1.813,0,0,180);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));
	
		// Symbol 4
		this.instance_1 = new lib.Symbol4();
		this.instance_1.setTransform(423.8,62,0.615,0.615,0,0,0,263.1,182.7);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));
	
		// Layer 1
		this.shape_20 = new cjs.Shape();
		this.shape_20.graphics.f("#B9D6E6").s().p("ApXJ5IAAzxISvAAIAATxg");
		this.shape_20.setTransform(399.1,56.1);
	
		this.shape_21 = new cjs.Shape();
		this.shape_21.graphics.f("#224D5E").s().p("ApXJ5IAAzxISvAAIAATxg");
		this.shape_21.setTransform(399.1,56.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},2).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(332.4,-30.4,130.4,153.7);
	
	
	(lib.naboki = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_24 = function() {
			this.gotoAndPlay(16);
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(1));
	
		// Layer 1
		this.instance = new lib.Tween2copy("synched",0);
		this.instance.setTransform(10.5,10.5,0.999,0.999);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},2).to({_off:true},1).wait(22));
	
		// Layer 1
		this.instance_1 = new lib.Tween2("synched",0);
		this.instance_1.setTransform(10.5,10.5,0.999,0.999);
		this.instance_1.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,rotation:9,alpha:1},2).to({scaleX:1,scaleY:1,rotation:-9},4).to({scaleX:1,scaleY:1,rotation:9},4).to({scaleX:1,scaleY:1,rotation:-9},4).to({scaleX:1,scaleY:1,rotation:9},4).to({scaleX:1,scaleY:1,rotation:-9},4).to({rotation:0},2).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,21,21);
	
	
	(lib.mt_oddspokojnie = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_tul("single",0);
		this.instance.setTransform(-4.5,-49.4,1,1.017,0,0,0,1,-48.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.01,y:-49.5},29,cjs.Ease.get(1)).to({scaleY:1.02,y:-49.4},10,cjs.Ease.get(-0.5)).wait(11));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-88.4,-52.6,176.9,105.2);
	
	
	(lib.mt_odd = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_tul("single",0);
		this.instance.setTransform(-4.5,-49.4,1,1.017,0,0,0,1,-48.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.05},29,cjs.Ease.get(1)).to({scaleY:1.02},10,cjs.Ease.get(-0.5)).wait(11));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-88.4,-52.6,176.9,105.2);
	
	
	(lib.mt_agony = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_tul("single",0);
		this.instance.setTransform(-6.5,42.5,1,1.017,0,0,0,-1,41.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.07,scaleY:0.92,x:-4,y:55.5},49,cjs.Ease.get(1)).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-88.4,-52.6,176.9,105.2);
	
	
	(lib.moon_all = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// moon
		this.instance = new lib.moon();
		this.instance.setTransform(-1.1,0.2);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// Layer 3
		this.instance_1 = new lib.kol2();
		this.instance_1.setTransform(1.2,0.2);
		this.instance_1.alpha = 0.699;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-19.8,-20.8,42,42);
	
	
	(lib.m_head_agonia = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// m_head_ucgh2
		this.instance = new lib.m_head_ucgh2("single",0);
		this.instance.setTransform(17.6,3,1,1,-0.5,0,0,-16.8,6.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-16.7,regY:7,scaleX:1,scaleY:1,rotation:11.6,x:17.7},47).wait(41));
	
		// m_head_oko
		this.instance_1 = new lib.m_head_oko("single",0);
		this.instance_1.setTransform(-16.5,13.7,1,1,-0.5);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#F8DCDC").s().p("AgKAQQgOgHgBgDQgBgQAVgFIALgDQAYACgFANQgFAMgJAHQgEADgGAAQgEAAgHgDg");
		this.shape.setTransform(-18.5,13);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#681717").s().p("AAHAmQgagBgZgOIgFgDIgKgGQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQACgRAMgOQASgVAfABIALABIAIABIAFACQAIACAHADIAOAHIAFAEQAEADABAEIABADIAAAAIgBAIIgBAFQAAADgCACIgFAIQgLANgTAEIgHACQgEACgFAAIgCgBgAgWgbQgWAFABARQABADAOAFQAPAHAJgHQAHgEAFgOQAFgOgXgCIgMAEg");
		this.shape_1.setTransform(-16.8,14.3);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#310B0B").s().p("AAAAAIAAAAIAAAAg");
		this.shape_2.setTransform(-10.6,14.7);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#F8DCDC").s().p("AAZAJQglgJgRAGQgSAJgBgKQAAgJAVgFIAMgDQAgADAXANQAOAJgIAAQgGAAgPgEg");
		this.shape_3.setTransform(-16.3,12.4);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#681717").s().p("AgtAgQgNgJACgDQACgDgFgEQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQABgLAFgIQADgGAFgGQASgVAfABIALABIAIABIAFACQAIACAHADIAOAHIAFAEQAEADABAEIABADIAAAAIgBAJIgBACIgBAAIABACQAAADgCACIgFAIQgLANgTAEIgHACQgFACgWABIgGABQgTAAgLgIgAAdgJQAnAJgXgOQgXgPgggDIgMAEQgWAFABAKQABAKARgIQAIgEAMAAQANAAAVAGg");
		this.shape_4.setTransform(-16.8,14.4);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#310B0B").s().p("AgsAQQgNgIACgEQACgDgFgBQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQABgLAFgKQAYAPAeAHQAjAHAegSIAAACQAAADgCACIgFAGQgLAOgTADIgHACQgFACgWACIgGAAQgTAAgLgIg");
		this.shape_5.setTransform(-16.9,16);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#4E1212").s().p("AgGAZQgegHgYgPQADgEAFgGQASgVAgACIAKAAIAIACIAFABQAIACAHADIAOAIIAFADQAEADABAEIABABIAAAAIgBAKIgBADQgVAOgYAAQgLAAgJgDgAAaABQAnALgXgNQgXgQgggCIgMADQgWAFABAKQABAIARgHQAIgDAMAAQANAAAVAEg");
		this.shape_6.setTransform(-16.5,13.2);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},47).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_5}]},3).wait(32));
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.8},47).to({_off:true},3).wait(38));
	
		// m_head_g
		this.instance_2 = new lib.m_head_g("single",0);
		this.instance_2.setTransform(25.4,0.2,1,1,-0.5,0,0,27.8,-7.3);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},47).wait(41));
	
		// m_head_uch1
		this.instance_3 = new lib.m_head_uch1("single",0);
		this.instance_3.setTransform(-2.7,-17,1,1,-0.5,0,0,1,12.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:-13.5},47).wait(41));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-55,-46,110.5,92.7);
	
	
	(lib.m_head = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// m_head_ucgh2
		this.instance = new lib.m_head_ucgh2("single",0);
		this.instance.setTransform(34.3,-3.9);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// m_head_oko
		this.instance_1 = new lib.m_head_oko("single",0);
		this.instance_1.setTransform(-16.7,13.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
		// m_head_g
		this.instance_2 = new lib.m_head_g("single",0);
		this.instance_2.setTransform(-2.5,7.6);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
	
		// m_head_uch1
		this.instance_3 = new lib.m_head_uch1("single",0);
		this.instance_3.setTransform(-3.7,-29.3);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-55.4,-46.1,110.9,92.3);
	
	
	(lib.b_noc = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_9 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));
	
		// roslina
		this.instance = new lib.roslina("single",0);
		this.instance.setTransform(2.3,1.4,0.498,0.498,0,0,180);
		this.instance.filters = [new cjs.ColorFilter(0.83, 0.83, 0.83, 1, 0, 0, 0, 0)];
		this.instance.cache(-36,-74,173,173);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7},9,cjs.Ease.get(0.5)).wait(1));
	
		// moon_all
		this.instance_1 = new lib.moon_all();
		this.instance_1.setTransform(-18.9,-21);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.7,-41.9,84.1,91.3);
	
	
	(lib.b_dzien = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_9 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));
	
		// roslina
		this.instance = new lib.roslina("single",0);
		this.instance.setTransform(2.8,1.4,0.498,0.498,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7,scaleY:0.7},9,cjs.Ease.get(0.5)).wait(1));
	
		// slon_all
		this.instance_1 = new lib.slon_all();
		this.instance_1.setTransform(-18.4,-21.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-64.3,-41.8,84.1,91.2);
	
	
	(lib.aaa = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.asa("synched",0);
		this.instance.setTransform(-67.6,17.7,1,0.374);
		this.instance.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance.cache(-41,-17,276,25);
	
		this.instance_1 = new lib.asa("synched",0);
		this.instance_1.setTransform(-66.9,31.8,1,0.438);
		this.instance_1.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_1.cache(-41,-17,276,25);
	
		this.instance_2 = new lib.asa("synched",0);
		this.instance_2.setTransform(-68.6,-7.2,1,0.374);
		this.instance_2.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_2.cache(-41,-17,276,25);
	
		this.instance_3 = new lib.asa("synched",0);
		this.instance_3.setTransform(-67.9,5.7,1,0.438);
		this.instance_3.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_3.cache(-41,-17,276,25);
	
		this.instance_4 = new lib.asa("synched",0);
		this.instance_4.setTransform(-68.6,-34.5,1,0.374);
		this.instance_4.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_4.cache(-41,-17,276,25);
	
		this.instance_5 = new lib.asa("synched",0);
		this.instance_5.setTransform(-67.9,-19.2,1,0.438);
		this.instance_5.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_5.cache(-41,-17,276,25);
	
		this.instance_6 = new lib.asa("synched",0);
		this.instance_6.setTransform(-68.6,-48.1,1,0.374);
		this.instance_6.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_6.cache(-41,-17,276,25);
	
		this.instance_7 = new lib.asa("synched",0);
		this.instance_7.setTransform(-68.6,-91,1,0.374);
		this.instance_7.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_7.cache(-41,-17,276,25);
	
		this.instance_8 = new lib.asa("synched",0);
		this.instance_8.setTransform(-68.2,-75.7,1,0.443);
		this.instance_8.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_8.cache(-41,-17,276,25);
	
		this.instance_9 = new lib.asa("synched",0);
		this.instance_9.setTransform(-67.9,-62.5,1,0.438);
		this.instance_9.filters = [new cjs.ColorFilter(0.71, 0.71, 0.71, 1, 73.95, 73.95, 73.95, 0)];
		this.instance_9.cache(-41,-17,276,25);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		// Layer 3
		this.instance_10 = new lib.Symbol4a("synched",0);
		this.instance_10.setTransform(-58.7,-96.3,0.761,0.657,-3.2,0,0,0,-0.1);
	
		this.instance_11 = new lib.Symbol4a("synched",0);
		this.instance_11.setTransform(132.7,-96.1,0.761,0.657,-1.5,0,0,0,-0.1);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-107.2,-154,273.7,212.3);
	
	
	(lib.playGameButton = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_1 = function() {
			/* clip.gotoAndPlay(2);*/
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));
	
		// Layer 7
		this.tips = new lib.tips_play();
		this.tips.setTransform(10,-3.5);
		this.tips._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.tips).wait(1).to({_off:false},0).to({_off:true},1).wait(1));
	
		// Layer 11
		this.instance = new lib.pictogram_zoom();
		this.instance.setTransform(10.8,12,1.11,1.11,0,0,0,5.5,6.5);
		this.instance._off = true;
		this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 0, 0)];
		this.instance.cache(1,-2,11,14);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));
	
		// Layer 10
		this.instance_1 = new lib.pictogram();
		this.instance_1.setTransform(16.1,17.9,1.11,1.11,0,0,0,5.5,7);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3));
	
		// Layer 6
		this.clip = new lib.naboki();
		this.clip.setTransform(10.5,10.5,1,1,0,0,0,10.5,10.5);
	
		this.timeline.addTween(cjs.Tween.get(this.clip).wait(3));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,21,21);
	
	
	(lib.ok = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.aaa("single",0);
		this.instance.setTransform(107.9,189.3,1.006,1.23,0,0,0,0,-0.3);
	
		this.instance_1 = new lib.okno("synched",0,false);
		this.instance_1.setTransform(-80.4,250.2,1.885,1.885,0,0,0,283.9,61.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(3));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0.3,275.4,366.2);
	
	
	(lib.m_head_odduchciezkinamax = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_head("single",0);
		this.instance.setTransform(19,-13,1,1,-0.5,0,0,19,-13);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-13.1,scaleX:1,scaleY:1,rotation:4.6},14,cjs.Ease.get(1)).to({rotation:0,x:19.1,y:-13.1},8).to({regX:18.9,rotation:2.5,x:18.9},7).to({regX:19,regY:-13,scaleX:1,scaleY:1,rotation:0,x:19,y:-13},10).wait(11));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-55,-46,110.5,92.7);
	
	
	(lib.m_head_odduch = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_head("single",0);
		this.instance.setTransform(19,-13,1,1,-0.5,0,0,19,-13);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.9,regY:-13.1,scaleX:1,scaleY:1,rotation:2.5,x:18.9,y:-13.1},24,cjs.Ease.get(1)).to({regX:19,regY:-13,scaleX:1,scaleY:1,rotation:0,x:19,y:-13},15).wait(11));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-55,-46,110.5,92.7);
	
	
	(lib.m_head_gapimysietuitam = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// Layer 1
		this.instance = new lib.m_head("single",0);
		this.instance.setTransform(19,-13,1,1,-0.5,0,0,19,-13);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,rotation:21.3},22,cjs.Ease.get(1)).to({rotation:19.5},6).to({regX:18.9,scaleX:1,scaleY:1,rotation:29.1},8).to({startPosition:0},8).to({regX:19.1,scaleX:0.96,scaleY:1,rotation:2.8,x:25,y:-12.6},7).to({regX:18.9,regY:-13.1,scaleX:0.94,rotation:-5.7,x:24.9,y:-12.7},15).to({rotation:-5.7},8).to({scaleY:1,rotation:-0.4},9).to({scaleX:0.94,scaleY:1,rotation:27.9},10).to({startPosition:0},14).to({regX:19,regY:-13,scaleX:1,scaleY:1,rotation:-0.5,x:19,y:-13},17).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-55,-46,110.5,92.7);
	
	
	(lib.b2 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_10 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(2));
	
		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(161,201,221,0.302)").s().p("AACGgIgBgBIAAgDIgJg3QgDgOgFgwIgCgNQAAgMgDgMIgEgKQgDgDgDgBIgDgHQgCgGACgGIgCgGIAAgBIgCgFQgCgGACgHQgCgDgFgDIgNgDIgDgBIgJAAIgHgCIgGgDIgDgBQgIgEgDgHQgIgEgDgHIgKgKQgMgNgKgbIgEgKQgEgEgBgGQgDgLAIgKIACgDIACgBIgDgGIgHgJIgEgBIgGgEIgDgBQgJgEgEgJIAAgBIgCgCIAAgCIgDAAIgCgBIAAgBIAAgEIAAgCIgBgCQgCgDgDgCQgCgCgEABIAAAAIAAgBIgCgCQgCgDgEgBIAAgCIABgDIAGgDIAEgEIACgEIACgCIABgCIABgDIAIgBIAAAAIABAAQACgDgBgEIgBgCQgDAEgFAAIgCgEIgDgDIgCgDIgIgHIgEgCIgBgBIgIgIIgCgBIgDgGIgBgBIgFgBQgHgCgJgMQgcgjgMgaQgUgtAFgzQAGgzAdgpQAcgoAtgYQAtgYAygCIAAAAQAugEAZAIQAOAEAZAPIAJAGIALAFIAHAGIAOAIQALAIAEAIIAEABIAGADQADADACAEIADAAIAAAAIACACIABABIABABIACADIAGAPQACAGAFAEQAEAFAGAAQAFAAAFgDIACgCQADgCAHgBIAEgBIABAFIAAADIAAAGIABAFIABACIACADIABABIABABQAAAAABABQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIAAAMIgDAIIgBAEQgBADgEAGIgOAUIACAFIACATIAAAAIAVgTIAOgKIAMgHQASgHAWgEQAFAAAEgCIADgDIAfABIAAABIACAGIAAAAIgGAUIgGAZQgDAQgFAJIgUAdIgQAVIgQAIIgEADIgQAAIgDAAIgNACQgEAAgDACQgCACABAFQACAEAGAAIAbgCIAAABIACAAIAAAAIAJACIACABIABAAIADgDQABAAAAABQABAAAAAAQABAAAAAAQABAAABgBIAEgCIACACQAEADAEAAQAEAAAFgDIAMgJIAJgFIABAAIADABIABADIADAEIAEAFIADALQACACADACIACAFIABACIABACIACAHIAAAGIABAEIAAAHIABAEIAAACIAAAAIABAEIABADIABAMIACADIABAGIgBADIgBAEIAAAKIgCAHIAAABIABAHIABASIgDASQgDAHgIANIgFAKIAAABIgBADIgDAJIgBAJIAAACIAPAAIADADIAIACIAHACIABABQgBAGABAIQAAAFgDAEIgJAWIgCACIgDADIgHAEIgHAGIgDAEIgHAFIgFADIgMAEIgKACIgNABQgDgBgDAAIAAAAQgEAAgEADQgDADgBAEIgBAFIACAIIACADQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABIgBAaIAAABIgBACIgCADQgFAAgDAGQgCADAAAIIgBADIAAABIgCAFQgCADAAAIIAAACIgGAoIgMBSIgCAGIgPABIgCABIiPAAg");
		this.shape.setTransform(-3.1,0);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));
	
		// Layer 1
		this.instance = new lib.b_noc("single",0);
		this.instance.setTransform(7.1,0.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"synched",loop:false},0).wait(10).to({mode:"single"},0).wait(1));
	
		// Layer 3
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(174,245,255,0)").s().p("AjeDkQgNgvgVgtQh3kNCOj6QAUgkAngBQE3hDCCD+QATAlAJArQBFFDjVDzQgIAIgOADQg0ALgtAAQjBAAg9jPg");
		this.shape_1.setTransform(-0.4,-0.8);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-57.6,-44.4,88.5,93.9);
	
	
	(lib.b1 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_10 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(2));
	
		// Layer 3
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(161,201,221,0.302)").s().p("AABGgQgDgLgIgHIgEgmIgLgxIAEgEQAFgFgDgGIgDgIIgBgJIgCgFIgBgEIgCgGIgDgOIgFgOIgCgEQgCgDgEgBIAAgBQgCgIgDgGQADgEgBgFQgBgGgIgEIgNgDQgIgDgOgIQgagPgLgNQgMgNgLgbIgJgVIADgBIADgBIgBgDIgBgCIAAgGIABgDIABgBIAAgCIACgBIADgCIgBgBIgEgHIgKgNQgJgLgPgEQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCAAIAAgBIABgBIACgGIAAgCIgBgCQgBgEgCgCIgHgCQgDgOAAgLQAGACAFgFQAGgFgBgHIgBgCQgEAFgHgBQgEAAgGgDIgEgEIgFgJIgDgEIgCgDIgHgMIgBgBIgEgBQgIgCgJgMQgbgjgMgaQgVgtAGgzQAFgzAdgpQAcgoAugYQAsgYAygCIAAAAQAvgEAYAIQAPAEAZAPIAIAGIAMAFIAHAGIANAIQANAIADAJIAAAFIAFACQAIAEAJgCQgBAEADAEIAFAPQADAGAEAEQAFAFAGAAQAFAAAEgDIADgCQADgCAGgBIAEgBIACAGIAEAKIAEAEIABACIAAASIgDAIIgCAEQAAADgFAGIgOAUIgCADQgHgCgIABQgEAAgEAEQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIgCAOIgBAEIAAAFIABAFQAAABAAAAQABABAAAAQABABAAAAQABABAAAAIAAAQQAAAFACADQACADADgBQADAAACgEIABgFIAAgCIADgCQABgBABgEIABgGIADgKIAGgIIAYgVIAOgKIAMgHQARgHAWgEQAGAAADgCIAEgDIAiABQgBAHgGAUIgGAZQgEAQgFAJIgTAdIgQAVIgQAIIgEADIgRAAIgDAAIgMACQgFAAgCACQgDACACAFQACAEAGAAIAagCIAAABQABAEAFABQAEAAAEgCIAEgDQAAAAABAAQABAAAAABQABAAAAgBQABAAAAAAIAEgCIACACQAEADAFAAQAEAAAFgDIAMgJIAMgHIABgBIADAFQACAEADABQgBAFACAEIAIAJQAEAFACAJIACAPIADAXIADATQgDACgBAEIAAAKIgBAHIgBABIACAHIAAASIgCASQgDAHgJANIgFAKIAAABIgBADIgCAJIgBAJIgBACIAYAAQAIAAAFACIADADIACAEQACAFgDAFQgCADgDACIgBAGIACAFIAAABQgCAGgHAIQgGAIgHAGQgHAGgUAKIgLAEIgLACIgPACQgGAEAAAHIAAACIAAACQgCAFADAEQABADADACIgMANQACAIgEAIIgFAHIAAABQgBAGgGAKIgDAFQgBADAAAIQABANgEAIIACALQACAKgCAIQgCAFgEAFIgBABIAABEQg8ADg8AAIgrAAgAj1iFIgIgUIgBgEQADAMAGAMgAhIDlIgDAAIgBgCIABAAIAAAAIACAAIABAAIAAABIACABIgBAAgAEyC5IABAEIAAABIgEAAgAjDBOIgHgNIADAFIAIAPIgEgHgABzjVIAAAAIAAAAgAB9lQIABgCIADADIgEgBg");
		this.shape.setTransform(-2,0);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(11).to({_off:false},0).wait(1));
	
		// Layer 1
		this.instance = new lib.b_dzien("single",0);
		this.instance.setTransform(7.1,0.1);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({mode:"synched",loop:false},0).wait(10).to({mode:"single"},0).wait(1));
	
		// hit
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("rgba(174,245,255,0)").s().p("AgRGOQgFgLgJgHIgDgmIgMgxIAEgEQAFgFgCgGIgDgIIgBgJIgDgFIAAgEIgCgGIgDgOIgFgOIgCgEQgDgDgDgBIAAgBQgDgIgCgGQADgEgBgFQgBgGgIgEIgNgDQgJgDgOgIQgagPgLgNQgMgNgKgbIgJgVIADgBQAGgCACgHQACgHgDgGIgEgHIgKgNQgKgLgOgEQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAgBAAIgBAAIAAgBIABgBIACgGIgBgCIAAgCQgBgEgDAAIgGgCQgEgOAAgNQAGACAGgFQAFgFgBgHQAAgDgHgJIgPgRIgEgEIAAgEIAAgCIgRgeIgDgGIgBgEIgEgJIgPgnIgDgGIgCgCIgDgIIgDgKIABgCIABgDIgCgLQgCgDABgCIgBgBIAAgVIABgEIADgFIAKgWIAXg0QAPgjAQgNQAQgNAkgGQAkgGAuAAIAgAAIAHgBQAIAGAOAEQAXAJAjAGIABAEIAEADIADACIAFADQAIAEAJgCQgBAEADAEIAGAPQACAGAFAEQAEAFAGAAQAFAAAFgDIACgCQADgCAHgBIAEgBIACAGIAEAKIADAEIABACIAAASIgDAIIgBAEQgBADgEAGIgOAUIgCADQgIgCgIABQgEAAgEAEQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIgBAOIgBAEIgBAFIABAFQAAABABAAQAAABAAAAQABABAAAAQABABABAAIgBAQQAAAFACADQACADAEgBQADAAABgEIABgFIAAgCIADgCQACgBABgEIABgGIADgKIAFgIIAYgVIAOgKIAMgHQASgHAWgEQAFAAAEgCIADgDIAiABQgBAHgGAUIgGAZQgDAQgFAJIgUAdIgQAVIgQAIIgEADIgQAAIgDAAIgNACQgEAAgDACQgCACABAFQACAEAGAAIAbgCIAAABQABAEAFABQAEAAAEgCIADgDQABAAAAAAQABABAAAAQABAAABAAQAAgBABAAIAEgCIACACQAEADAEAAQAEAAAFgDIAMgJIANgHIABgBIACAFQACAEAEABQgCAFADAEIAHAJQAEAFACAJIACAPIADAXIAEATQgDACgBAEIAAAKIgCAJQgGAfgGAXIgFATIgCAFIgJAIQgEAHAEAHQADAHAIgBIAhAAIABAAIgDAMIgCAIIACAFIABABQgCAGgHAIQgHAIgHAGQgHAGgTAKIgMAEIgKACIgPACQgHAEAAAHIABACIgBACQgCAFADAEQACADADACIgTAWQgOASgDAKQgCAJAAARIAAB4IgEADQg6ACg6AAIgpAAgAhcDTIgDAAIgBgCIAAAAIAAAAIACAAIABAAIABABIACABIgCAAgAEdCnIACAEIAAABIgFAAgAjXA8IgIgNIAEAFIAIAPIgEgHgABfjnIAAAAIAAAAgABoliIABgCIAEADIgFgBg");
		this.shape_1.setTransform(0,1.8);
	
		this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(12));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-57.2,-41.8,86,91.2);
	
	
	(lib.mouse = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{"ciezki odech":0,"super ciezki oddech":250,agonia:500,"jest oki":600});
	
		// m_head
		this.instance = new lib.m_head_odduch("synched",0);
		this.instance.setTransform(-70.3,-30.5,1,1,0,0,0,25,-13);
	
		this.instance_1 = new lib.m_head_odduchciezkinamax("synched",0);
		this.instance_1.setTransform(-70.3,-30.5,1,1,0,0,0,25,-13);
	
		this.instance_2 = new lib.m_head_agonia("synched",0,false);
		this.instance_2.setTransform(-70.3,-30.5,1,1,0,0,0,25,-13);
		this.instance_2._off = true;
	
		this.instance_3 = new lib.m_head_gapimysietuitam("synched",0);
		this.instance_3.setTransform(-70.3,-30.5,1,1,0,0,0,25,-13);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},250).to({state:[{t:this.instance_2}]},250).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_3}]},51).wait(250));
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(500).to({_off:false},0).to({regX:24.9,scaleX:1,scaleY:1,rotation:0.7,x:-87.4,y:-7.5,startPosition:49},49,cjs.Ease.get(1)).to({_off:true},51).wait(250));
	
		// m_lapa1
		this.instance_4 = new lib.m_lapa1("single",0);
		this.instance_4.setTransform(-59.8,22.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(500).to({startPosition:0},0).to({x:-97.8,y:33.4},49,cjs.Ease.get(1)).wait(51).to({x:-59.8,y:22.4},0).wait(250));
	
		// m_tul
		this.instance_5 = new lib.mt_odd("synched",0);
		this.instance_5.setTransform(-14.6,-73,1,1,0,0,0,-1.2,-50.9);
	
		this.instance_6 = new lib.mt_agony("synched",0,false);
		this.instance_6.setTransform(-14.6,-73,1,1,0,0,0,-1.2,-50.9);
	
		this.instance_7 = new lib.mt_oddspokojnie("synched",0);
		this.instance_7.setTransform(-14.6,-73,1,1,0,0,0,-1.2,-50.9);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},250).to({state:[{t:this.instance_6}]},250).to({state:[{t:this.instance_7}]},100).wait(250));
	
		// m_ogon
		this.instance_8 = new lib.m_ogon("single",0);
		this.instance_8.setTransform(71.7,11.8,1,1,0,0,0,-37,-18);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(500).to({startPosition:0},0).to({scaleY:1.23,skewX:-35.3,x:81.4,y:12.5},49,cjs.Ease.get(1)).wait(51).to({scaleY:1,skewX:0,x:71.7,y:11.8},0).wait(250));
	
		// m_lapa2
		this.instance_9 = new lib.m_lapa2("single",0);
		this.instance_9.setTransform(44.1,11.8);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(500).to({startPosition:0},0).to({scaleY:1.24,skewX:-36.1,x:65.1,y:21.2},49,cjs.Ease.get(1)).to({scaleY:1.16,skewX:-30.2},3,cjs.Ease.get(1)).to({scaleY:1.24,skewX:-36.1},9,cjs.Ease.get(1)).to({scaleY:1.16,skewX:-30.7},3,cjs.Ease.get(1)).to({scaleY:1.24,skewX:-36.1},3,cjs.Ease.get(1)).to({scaleY:1.01,skewX:-6.7},10,cjs.Ease.get(1)).wait(23).to({scaleY:1,skewX:0,x:44.1,y:11.8},0).wait(250));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-150.4,-74.7,315.2,138.6);
	
	
	(lib.anim_2245 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{n0:1,n2b:302,n3a:686,n3b:687});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
		this.frame_4 = function() {
			createjs.Sound.play("uc_b4_l101_05_01nwavA");
		}
		this.frame_301 = function() {
			exportRoot.main.gotoAndStop(0)
			exportRoot.b0.gotoAndStop(0)
			exportRoot.b1.gotoAndStop(0)
			exportRoot.b0.mouseEnabled=true;
			exportRoot.b1.mouseEnabled=true;
			selectedBtn0 = false;
			selectedBtn1 = false;
		}
		this.frame_336 = function() {
			createjs.Sound.play("szklo_przesuwaniewav");
		}
		this.frame_389 = function() {
			createjs.Sound.play("stawianie_dzbanekwav");
		}
		this.frame_390 = function() {
			createjs.Sound.play("uc_b4_l101_05_01nwavB");
		}
		this.frame_679 = function() {
			exportRoot.main.gotoAndStop(0)
			exportRoot.b0.gotoAndStop(0)
			exportRoot.b1.gotoAndStop(0)
			exportRoot.b0.mouseEnabled = true;
			exportRoot.b1.mouseEnabled = true;
			selectedBtn0 = false;
			selectedBtn1 = false;
		}
		this.frame_720 = function() {
			createjs.Sound.play("szklo_przesuwaniewav");
		}
		this.frame_764 = function() {
			createjs.Sound.play("uc_b4_l101_05_01nwavC");
		}
		this.frame_773 = function() {
			createjs.Sound.play("stawianie_dzbanekwav");
		}
		this.frame_1193 = function() {
			exportRoot.main.gotoAndStop(0)
			exportRoot.b0.gotoAndStop(0)
			exportRoot.b1.gotoAndStop(0)
			exportRoot.b0.mouseEnabled = true;
			exportRoot.b1.mouseEnabled = true;
			selectedBtn0 = false;
			selectedBtn1 = false;
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(297).call(this.frame_301).wait(35).call(this.frame_336).wait(53).call(this.frame_389).wait(1).call(this.frame_390).wait(289).call(this.frame_679).wait(41).call(this.frame_720).wait(44).call(this.frame_764).wait(9).call(this.frame_773).wait(420).call(this.frame_1193).wait(11));
	
		// Layer 37
		this.instance = new lib.blysk("synched",0,false);
		this.instance.setTransform(-109.4,31.1);
		this.instance._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(271).to({_off:false},0).wait(384).to({startPosition:0},0).wait(522).to({startPosition:0},0).wait(27));
	
		// noc
		this.instance_1 = new lib.night("synched",0,false);
		this.instance_1.setTransform(-75,0);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(687).to({_off:false},0).to({alpha:1,mode:"single"},9).to({_off:true},488).wait(20));
	
		// sloik
		this.instance_2 = new lib.sloik("single",0);
		this.instance_2.setTransform(-106.8,-17.4,0.865,0.865);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(304).to({startPosition:0},0).to({y:-237.4},30,cjs.Ease.get(1)).wait(28).to({startPosition:0},0).to({y:-17.4},28,cjs.Ease.get(1)).wait(298).to({startPosition:0},0).to({y:-237.4},30,cjs.Ease.get(1)).wait(28).to({startPosition:0},0).to({y:-17.4},28,cjs.Ease.get(1)).wait(430));
	
		// roslina
		this.instance_3 = new lib.roslina();
		this.instance_3.setTransform(-442,39,1.344,1.344,0,0,0,4.2,8.7);
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(331).to({_off:false},0).to({x:-182},36,cjs.Ease.get(1)).to({_off:true},295).wait(53).to({_off:false,x:-442},0).to({x:-182},36,cjs.Ease.get(1)).to({_off:true},433).wait(20));
	
		// mouse
		this.instance_4 = new lib.mouse("synched",150,false);
		this.instance_4.setTransform(-82.7,93.9,0.57,0.57,0,0,180);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(100).to({startPosition:400},0).wait(179).to({mode:"single",startPosition:600},0).wait(24).to({startPosition:600},0).wait(1).to({mode:"synched",startPosition:610,loop:false},0).wait(358).to({mode:"single",startPosition:0},0).wait(18).to({mode:"synched",startPosition:849,loop:false},0).wait(101).to({startPosition:149},0).wait(403).to({mode:"single",startPosition:0},0).wait(20));
	
		// panel_stale
		this.instance_5 = new lib._1();
		this.instance_5.setTransform(289.1,25.8,0.6,0.6,0,0,0,28.4,103.2);
	
		this.instance_6 = new lib._1();
		this.instance_6.setTransform(226,25.9,0.6,0.6,0,0,0,28.4,103.3);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1204));
	
		// panel_interaktiv
		this.instance_7 = new lib.slupek22("synched",499,false);
		this.instance_7.setTransform(272,-37.8,0.599,0.6);
	
		this.instance_8 = new lib.slupek2("synched",0,false);
		this.instance_8.setTransform(209,-37.8,0.599,0.6);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{mode:"synched",startPosition:0,loop:false}},{t:this.instance_7,p:{mode:"synched",startPosition:499,loop:false}}]}).to({state:[{t:this.instance_8,p:{mode:"single",startPosition:236,loop:undefined}},{t:this.instance_7,p:{mode:"single",startPosition:735,loop:undefined}}]},236).to({state:[{t:this.instance_8,p:{mode:"single",startPosition:0,loop:undefined}},{t:this.instance_7,p:{mode:"single",startPosition:499,loop:undefined}}]},65).to({state:[{t:this.instance_8,p:{mode:"synched",startPosition:0,loop:false}},{t:this.instance_7,p:{mode:"synched",startPosition:499,loop:false}}]},480).to({state:[{t:this.instance_8,p:{mode:"single",startPosition:305,loop:undefined}},{t:this.instance_7,p:{mode:"single",startPosition:804,loop:undefined}}]},305).wait(118));
	
		// panel
		this.instance_9 = new lib.panel();
		this.instance_9.setTransform(256.8,0,1,1,0,0,0,74.8,155);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1204));
	
		// sloik
		this.instance_10 = new lib.sloik("single",2);
		this.instance_10.setTransform(-106.8,-17.4,0.865,0.865);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(304).to({startPosition:2},0).to({y:-237.4},30,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({y:-17.4},28,cjs.Ease.get(1)).wait(298).to({startPosition:2},0).to({y:-237.4},30,cjs.Ease.get(1)).wait(28).to({startPosition:2},0).to({y:-17.4},28,cjs.Ease.get(1)).wait(430));
	
		// ok
		this.instance_11 = new lib.ok("single",0);
		this.instance_11.setTransform(-321.5,-329.7);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(303).to({startPosition:1},0).wait(359).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(7).to({startPosition:2},0).wait(494).to({startPosition:0},0).wait(20));
	
		// pod22
		this.instance_12 = new lib.pod22("single",0);
		this.instance_12.setTransform(-332,55);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1204));
	
		// tlo_01
		this.instance_13 = new lib.tlo_01();
		this.instance_13.setTransform(0,0,1,1,0,0,0,332,155);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1204));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-332,-329.5,664,484.5);
	
	
	// stage content:
	(lib.t02_cl04_p05_s01 = function(mode,startPosition,loop) {
		this.initialize(mode,startPosition,loop,{});
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	
		// play-button-svgrepo-com (1).svg
		this.PlayButton = new lib.PlayOverLay();
		this.PlayButton.setTransform(360,167.5);
	
		this.timeline.addTween(cjs.Tween.get(this.PlayButton).wait(1));
	
		// Layer 13
		this.playB = new lib.playGameButton();
		this.playB.setTransform(604,282);
	
		this.instance = new lib.shadow();
		this.instance.setTransform(620.4,298.5,1,1,0,0,0,10.4,10.4);
		this.instance.alpha = 0.301;
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.playB}]}).wait(1));
	
		// Layer 11
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("AgVAaQgIgJAAgRQAAgPAIgJQAJgKAMAAQAOAAAIAKQAJAJAAAPIAAACIgxAAQAAAMAHAFQAFAGAGAAQAHAAAEgDQAEgDADgHIAMABQgDAKgIAGQgHAGgMAAQgMAAgJgJgAgLgTQgGAFgBAJIAkAAQAAgIgEgFQgGgGgIAAQgGAAgFAFg");
		this.shape.setTransform(574.9,272.9);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#000000").s().p("AgOAqQgGgEgEgIQgEgIAAgKQAAgKAEgHQADgIAHgEQAGgFAIAAQAFAAAFADQAEACADAFIAAgiIAMAAIAABbIgLAAIAAgIQgGAKgMAAQgHAAgHgFgAgLgGQgFAGAAAMQAAANAFAGQAGAGAFAAQAIAAAFgGQAFgGAAgMQAAgNgFgGQgFgGgIAAQgGAAgFAGg");
		this.shape_1.setTransform(567.4,271.7);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#000000").s().p("AgEAuIAAhCIAJAAIAABCgAgEggIAAgNIAJAAIAAANg");
		this.shape_2.setTransform(562.5,271.6);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#000000").s().p("AARAhIgOgVIgDgFIgQAaIgOAAIAZghIgXggIAOAAIALAQIADAHIAFgHIAKgQIAPAAIgYAgIAZAhg");
		this.shape_3.setTransform(557.9,272.9);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#000000").s().p("AgWAaQgIgJAAgRQAAgRAKgJQAJgIALAAQAOAAAIAJQAJAKAAAPQAAAMgEAHQgEAIgIAEQgHAEgIAAQgMAAgKgJgAgNgSQgGAHAAALQAAAMAGAHQAGAGAHAAQAIAAAFgGQAGgHAAgMQAAgLgGgHQgFgGgIAAQgHAAgGAGg");
		this.shape_4.setTransform(551,272.9);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#000000").s().p("AgEAuIAAhCIAJAAIAABCgAgEggIAAgNIAJAAIAAANg");
		this.shape_5.setTransform(545.9,271.6);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AgOAqQgGgEgEgIQgEgIAAgKQAAgKAEgHQADgIAHgEQAGgFAIAAQAFAAAFADQAEACADAFIAAgiIAMAAIAABbIgLAAIAAgIQgGAKgMAAQgHAAgHgFgAgLgGQgFAGAAAMQAAANAFAGQAGAGAFAAQAIAAAFgGQAFgGAAgMQAAgNgFgGQgFgGgIAAQgGAAgFAGg");
		this.shape_6.setTransform(540.6,271.7);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#000000").s().p("AAPAiIAAgnQAAgHgBgDQgBgEgDgCQgEgCgEAAQgGAAgFAFQgGAEABANIAAAjIgMAAIAAhCIALAAIAAAKQAHgLAMAAQAGAAAFACQAFACADAEQACAEABAFIABALIAAAng");
		this.shape_7.setTransform(574.2,256.3);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#000000").s().p("AgWAaQgIgJAAgRQAAgRAKgJQAJgIALAAQANAAAJAJQAJAKAAAPQAAAMgEAHQgEAIgHAEQgHAEgJAAQgMAAgKgJgAgNgSQgGAHABALQgBAMAGAHQAGAGAHAAQAIAAAFgGQAGgHAAgMQAAgLgGgHQgFgGgIAAQgHAAgGAGg");
		this.shape_8.setTransform(566.9,256.4);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#000000").s().p("AgRAlIAAAIIgLAAIAAhbIAMAAIAAAhQAHgJAJAAQAGAAAGADQAFACAEAFQAEAEACAHQACAEAAAIQAAARgJAJQgIAKgMAAQgKAAgHgKgAgMgGQgFAGAAALQAAAMADAGQAFAIAJAAQAGAAAGgGQAFgHAAgNQAAgLgFgGQgFgGgHAAQgGAAgGAGg");
		this.shape_9.setTransform(559.8,255.2);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#000000").s().p("AgRAiIAAhCIAKAAIAAALQAEgIADgCQACgCAEAAQAGAAAGADIgEAMQgEgDgEAAQgEAAgCACQgCACgBAEQgCAHAAAGIAAAig");
		this.shape_10.setTransform(554.4,256.3);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#000000").s().p("AgYAdQgGgFAAgJQAAgEADgFQACgEAEgCQADgBAFgBIAKgCQAMgBAGgDIAAgDQAAgGgDgDQgEgEgIAAQgHAAgEADQgEACgBAIIgMgCQACgHADgEQAEgFAHgCQAGgDAHAAQAIAAAGACQAFACADADQACAEABAEIABALIAAANQAAAQABAEQAAAEADAEIgMAAQgCgDgBgFQgGAFgGADQgEACgHAAQgLAAgGgGgAgBAEIgKACQgDABgCADQgBACAAADQAAAFADADQAEADAGAAQAFAAAFgDQAFgDADgFQABgEAAgHIAAgEQgGACgKACg");
		this.shape_11.setTransform(548,256.4);
	
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics.f("#000000").s().p("AgUAaQgIgJAAgRQAAgJAEgIQADgIAIgFQAHgEAHAAQALAAAHAGQAGAFADALIgMABQgBgGgEgEQgEgDgGAAQgGAAgGAGQgFAGAAAMQAAANAFAGQAFAGAHAAQAGAAAFgEQAEgEACgIIALABQgCAMgHAGQgIAHgLAAQgMAAgJgJg");
		this.shape_12.setTransform(541.4,256.4);
	
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics.f("#000000").s().p("AAQAiIAAgnQgBgHgBgDQgBgEgEgCQgDgCgFAAQgFAAgFAFQgFAEgBANIAAAjIgLAAIAAhCIAKAAIAAAKQAIgLAMAAQAGAAAFACQAFADADADQACAEABAFIABALIAAAng");
		this.shape_13.setTransform(640.4,256.3);
	
		this.shape_14 = new cjs.Shape();
		this.shape_14.graphics.f("#000000").s().p("AgVAaQgIgJgBgRQABgPAIgJQAJgKAMAAQANAAAJAJQAJAKAAAPIAAACIgxAAQABAMAFAFQAGAGAHAAQAGAAAEgDQAFgDACgIIAMACQgDAKgHAGQgIAGgLAAQgOAAgIgJgAgMgTQgEAFgCAJIAlAAQgCgJgDgEQgFgGgJAAQgGAAgGAFg");
		this.shape_14.setTransform(633.1,256.4);
	
		this.shape_15 = new cjs.Shape();
		this.shape_15.graphics.f("#000000").s().p("AgTAqQgHgFAAgLIALACQABAFADACQAEADAHAAQAHAAAEgDQAEgDACgGQABgDAAgMQgIAJgKAAQgNAAgHgKQgIgKAAgMQAAgKADgIQAEgIAHgEQAGgFAIAAQALAAAIAKIAAgIIAKAAIAAA4QAAAQgDAGQgDAHgHAEQgHAEgJAAQgLAAgIgGgAgLgfQgFAGAAAMQAAANAFAFQAFAGAGAAQAIAAAFgGQAGgFAAgMQAAgNgGgGQgFgGgIAAQgGAAgFAGg");
		this.shape_15.setTransform(625.6,257.7);
	
		this.shape_16 = new cjs.Shape();
		this.shape_16.graphics.f("#000000").s().p("AgXAuIgCgLIAHABQADAAADgBIADgEIAEgJIABgDIgZhBIAMAAIAOAnIADAOIAFgOIAOgnIAMAAIgaBCIgFAQQgCAGgFADQgEACgFAAIgHgBg");
		this.shape_16.setTransform(619.1,257.8);
	
		this.shape_17 = new cjs.Shape();
		this.shape_17.graphics.f("#000000").s().p("AARAhIgOgVIgDgFIgQAaIgOAAIAZghIgXggIAOAAIAKAQIAEAHIAEgHIALgQIAPAAIgYAgIAZAhg");
		this.shape_17.setTransform(612.5,256.4);
	
		this.shape_18 = new cjs.Shape();
		this.shape_18.graphics.f("#000000").s().p("AgWAaQgIgJAAgRQAAgRAKgJQAJgIALAAQANAAAJAJQAJAJAAAQQAAAMgEAHQgEAIgHAEQgHAEgJAAQgMAAgKgJgAgNgSQgGAHABALQgBAMAGAHQAGAGAHAAQAIAAAFgGQAGgHAAgMQAAgLgGgHQgFgGgIAAQgHAAgGAGg");
		this.shape_18.setTransform(605.6,256.4);
	
		this.b1 = new lib.b2();
		this.b1.setTransform(622.5,58.8);
	
		this.b0 = new lib.b1();
		this.b0.setTransform(557.8,57.8);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b0},{t:this.b1},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		// Layer 12 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("Egz2AYNMAAAgwZMBntAAAMAAAAwZg");
		mask.setTransform(332,155);
	
		// Layer 10
		this.main = new lib.anim_2245();
		this.main.setTransform(664,310,1,1,0,0,0,332,155);
	
		this.main.mask = mask;
	
		this.timeline.addTween(cjs.Tween.get(this.main).wait(1));
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(332,155,664,310);
	
	})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
	var lib, images, createjs, ss;