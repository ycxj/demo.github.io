    $(function() {
        // 创建一个banner对象
        var banner = { 
            imgContainer: [
                "5.jpg",
                "1.jpg",
                "2.jpg",
                "3.jpg",
                "4.jpg",
                "5.jpg"
            ], // 保存图片数据（无缝轮播的关键点，在第一张图片前面面再加上最后一张图）

            list: 1, //保存图片下标

            timer: null, //保存自动播放setInterval号

            showWdith: $("#show").width(), //展示图片的容器宽度

            initPage: function() { //初始化页面图片
                this.createImage().addClickEvent().autoPlay();
            },

            setUlWidth: function($ele, len) { //设置图片 ul 的宽度
                $ele.width(this.showWdith * len);
            },

            createImage: function() { //动态创建图片
                var $banner = $("#banner"); //图片 ul 元素
                var len = this.imgContainer.length; //获取图片数量
                this.setUlWidth($banner, len); //根据图片的数量动态设置图片 ul的宽度
                for (var i = 0; i < len; i++) {
                    var $li = $('<li><img src="./images/' + this.imgContainer[i] + '"></li>'); //创建图片li模板
                    $banner.append($li); //把创建好的模板插入到ul子节点中
                }
                $banner.css({
                    "left": -this.showWdith //初始化图片 ul 的 left值 
                });
                this.createIndex(len); //初始化导航小圆点

                return this; 
            },

            createIndex: function(len) {
                var $index = $("#index"); //导航圆点ul
                for (var i = 0; i < len - 1; i++) {
                    var $indexLi = $('<li class="' + (i === 0 ? "on" : "") + '"></li>'); //创建导航远点li模板
                    $index.append($indexLi); //把创建好的模板插入到ul子节点中
                }
            },

            addClickEvent: function() { //添加点击事件
                var self = this; //因为下面的作用改变了，所以先用self保存this，免得this指向出问题
                $("#show").on({ //事件委托绑定click事件
                    "click": function() { 
                        var $this = $(this);
                        var thisId = $(this).attr("id");
                        if (thisId === "prev") {
                            self.animateBannerForArrowLeft();
                        } else if (thisId === "next") {
                            self.animateBannerForArrowRight();
                        } else {
                            self.animateBannerForIndex($this);
                        }
                    }
                }, "#prev,#next,#index>li").hover(function() { //鼠标移入，停止自动播放，显示按钮
                    clearInterval(self.timer);
                    self.timer = null;
                    $("#prev,#next").stop(true, true).fadeIn(300);
                }, function() {
                    $("#prev,#next").stop(true, true).fadeOut(300);
                    self.autoPlay();
                });
                return self;
            },

            animateBannerForIndex: function($this) { //导航圆点绑定click事件
                if ($this.hasClass("on")) {
                    return;
                } else {
                    this.list = $this.index() + 1;
                    $this.addClass("on").siblings().removeClass("on");
                    $("#banner").animate({
                        "left": -this.showWdith * this.list
                    }, 300);
                }
            },

            animateBannerForArrowLeft: function() { //左箭头，上一张
                var $banner = $("#banner");
                var bannerLeft = parseInt($banner.css("left"));
                
                if (bannerLeft >= 0) { //无缝轮播边界检测
                    $banner.css({
                        "left": -this.showWdith * (this.imgContainer.length - 1)
                    });
                    this.list = this.imgContainer.length - 2;
                } else {
                    this.list--;
                }
                $banner.animate({
                        "left": -this.showWdith * this.list
                    }, 300);
                $("#index").find("li").eq(this.list - 1).addClass("on").siblings().removeClass("on");
            },

            animateBannerForArrowRight: function() { //右箭头，下一张
                var $banner = $("#banner");
                var bannerLeft = parseInt($banner.css("left"));

                if (bannerLeft <= -this.showWdith * (this.imgContainer.length - 1)) { //无缝轮播边界检测
                    $banner.css({
                        "left": 0
                    });
                    this.list = 1;
                } else {
                    this.list++;
                }
                $banner.animate({
                    "left": -this.showWdith * this.list
                }, 300);
                $("#index").find("li").eq(this.list - 1).addClass("on").siblings().removeClass("on");
            },

            autoPlay: function () {  //自动开始轮播
              var self = this;
              self.timer = setInterval(function () {
                self.animateBannerForArrowRight();
              }, 1500);
            }

        };

        banner.initPage();

    })