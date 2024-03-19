var canvas, stage, exportRoot;
var b0, b1, playBtn, previousSelectedItem;
var selectedBtn0 = false, selectedBtn1 = false;;

window.onload = function () {

    function init() {
        canvas = document.getElementById("canvas");
        images = images || {};
        ss = ss || {};

        var loader = new createjs.LoadQueue(false);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("fileload", handleFileLoad);
        loader.addEventListener("complete", handleComplete);
        loader.loadFile({ src: "images/t02_cl04_p05_s01_atlas_.json?1621573057740", type: "spritesheet", id: "t02_cl04_p05_s01_atlas_" }, true);
        loader.loadManifest(lib.properties.manifest);
    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete(evt) {
        var queue = evt.target;
        ss["t02_cl04_p05_s01_atlas_"] = queue.getResult("t02_cl04_p05_s01_atlas_");
        exportRoot = new lib.t02_cl04_p05_s01();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.enableMouseOver(20);
        stage.update();

        starting();

        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }

    function starting() {
        b0 = exportRoot.b0;
        b1 = exportRoot.b1;
        playBtn = exportRoot.playB;

        resetAll();
        myEvents();

        playOverlayEvent();
        canvas.style.display = "block";
        makeResponsive(true, "both", true, 1);
    }

    function resetAll() {
        exportRoot.main.gotoAndStop(0);
        playBtn.clip.gotoAndStop(0);
        b0.mouseEnabled = true;
        b1.mouseEnabled = true;
        b0.gotoAndStop(0);
        b1.gotoAndStop(0);
        createjs.Sound.stop();
    }

    function myEvents() {
        b0.cursor = "pointer";
        b1.cursor = "pointer";
        playBtn.cursor = "pointer";
        b0.mouseChildren = false;
        b1.mouseChildren = false;
        playBtn.mouseChildren = false;

        b0.on("mousedown", onMouseDown);
        b0.on("mouseover", onMouseOver);
        b0.on("mouseout", onMouseOut);

        b1.on("mousedown", onMouseDown);
        b1.on("mouseover", onMouseOver);
        b1.on("mouseout", onMouseOut);

        playBtn.on("mousedown", playBtnDown);
        playBtn.on("mouseover", playBtnOver);
        playBtn.on("mouseout", playBtnOut);

    }
    function onMouseOver(evt) {
        this.gotoAndPlay(1);
        playSound("ab_01");
    }

    function onMouseOut(evt) {
        if (this.pressed != true) {
            this.gotoAndStop(0);
        }
        else {
            this.gotoAndStop(11);
            this.pressed = false;
        }
    }

    function onMouseDown(evt) {
        resetAll();
        this.gotoAndStop(11);
        playSound("b_03");

        if (previousSelectedItem) previousSelectedItem.mouseEnabled = true;
        previousSelectedItem = this;
        this.mouseEnabled = false;
        switch (this) {
            case b0:
                this.pressed = true;
                selectedBtn0 = true;
                break;

            case b1:
                this.pressed = true;
                selectedBtn1 = true;
                break;
        }
    }

    function playBtnDown(evt) {
        resetAll();
        this.gotoAndStop(2);
        b0.mouseEnabled = false;
        b1.mouseEnabled = false;
        if (selectedBtn0 == true || selectedBtn1 == true) {

            if (selectedBtn0 == true) {
                b0.gotoAndStop(11);
               
                exportRoot.main.gotoAndPlay(302);
            }
            else {
                b1.gotoAndStop(11);
                exportRoot.main.gotoAndPlay(686);
            }
        }

        else {
            exportRoot.main.gotoAndPlay(1);

        }
    }

    function playBtnOver(evt) {
        this.gotoAndStop(1);
        this.clip.gotoAndPlay(1);

    }
    function playBtnOut(evt) {
        this.gotoAndStop(0);
        this.clip.gotoAndStop(0);
    }

    function playSound(id, loop) {
        return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
    }

    function playOverlayEvent() {
        var PlayButton = exportRoot.PlayButton;
        PlayButton.cursor = "pointer";
        PlayButton.on("mousedown", function (evt) {
            this.visible = false;

        });
    }

    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW,
            lastH,
            lastS = 1;
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if (
                    (respDim == "width" && lastW == iw) ||
                    (respDim == "height" && lastH == ih)
                ) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w * pRatio * sRatio;
            canvas.height = h * pRatio * sRatio;

            canvas.style.width = w * sRatio + "px";
            canvas.style.height = h * sRatio + "px";
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;

            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    }
    init();
};
