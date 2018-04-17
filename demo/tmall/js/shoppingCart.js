window.onload = function(){
    var item = localStorage.getItem("itemList"),
        itemList = [],
        cartData = [];

    (function checkStorage(){
        if(item!=null&&item!=""){
            getData();
        }else{
            console.log(1);
            cartData=[];
        }
    })();

    function formatData(arr1,arr2,el,num){
        for(let i = 0;i<arr1.length;i++){
            let a = arr1[i].split(el)[num];
            arr2.push(a);
        }
    }

    function getData(){
        itemList = item.split(",");
        var itemNameList = [],
            itemClassName = [],
            itemNum = [],
            itemAmountNum = [];
        formatData(itemList,itemNameList,"_",0);
        formatData(itemList,itemAmountNum,"_",1);
        formatData(itemNameList,itemClassName,"-",0);
        formatData(itemNameList,itemNum,"-",1);
        for(let i=0;i<itemList.length;i++){
            (function(i){
                var dataClassName = itemClassName[i],
                    dataNum = itemNum[i],
                    productAmount = itemAmountNum[i],
                    dataName;
                switch(dataClassName){
                    case "womenDress":
                        dataName = womenDress;
                    break;
                    case "underwear":
                        dataName = underwear;
                    break;
                }
                cartData.push(dataName[dataNum]);
                cartData[i].amount = itemAmountNum[i];
            })(i);
        }
    }

    var vm = new Vue({
        el:"#cart",
        data:{
            totalMoney:0,
            message:cartData,
            storageList:itemList,
            selectAllFlag:false,
            selectNum:0,
            totalPrice:0,
            delFlag:false,
            curProduct:''
        },
        filters:{
            formatMoney: function(value){
                return "￥"+Number(value).toFixed(2);
            }
        },
        // watch:{

        // },
        // computed:{

        // },
        // filters:{

        // },
        mounted:function(){
            var _this = this;
            this.$nextTick(function(){

            });
        },
        methods:{
            changeNum:function(product,way){
                if(way>0){
                    product.amount++;
                }else{
                    product.amount--;
                    if(product.amount<1){
                        product.amount=1;
                    }
                }
                this.countTotalPrice();        
            },
            selectProduct:function(item){
                if(typeof item.select == 'undefined'){
                    Vue.set(item,"select",true);
                }else{
                    item.select = !item.select;
                }
                this.countTotalPrice();
                this.selectProductNum();
            },
            selectAll:function(){
                this.selectAllFlag = !this.selectAllFlag;
                var _this = this;
                this.message.forEach(function(item,index){
                    if(typeof item.select == 'undefined'){
                        _this.$set(item,"select",_this.selectAllFlag);
                    }else{
                        item.select = _this.selectAllFlag;
                    }
                });
                this.countTotalPrice();
                this.selectProductNum();
            },
            countTotalPrice:function(){
                var _this = this;
                _this.totalPrice = 0;
                this.message.forEach(function(item,index){
                    if(item.select){
                        _this.totalPrice += item.price*item.amount;
                    }
                });
            },
            selectProductNum:function(){
                var _this = this;
                _this.selectNum = 0;
                this.message.forEach(function(item,index){
                   if(item.select){
                        _this.selectNum++;
                   }
                });
            },
            delConfirm:function(item){
                this.delFlag=true;
                this.curProduct = item;
            },
            delProduct:function(){
                var index = this.message.indexOf(this.curProduct);
                this.message.splice(index,1);
                this.delFlag=false;
                this.storageList.splice(index,1);
                this.renewStorage();
            },
            renewStorage:function(){
                var _this=this;
                localStorage.removeItem("itemList");
                localStorage.setItem("itemList",_this.storageList);
            }
        }
    });

}