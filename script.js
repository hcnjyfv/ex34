

// 1. 英语

$(".englishButton").click(function(){
    let englishInput = $(".english").val();
        var daai ="编程英语";
        if(englishInput===daai){
    //如果答案正确，则显示此文本
    
    $(".englishMessage").text("正确!");
    $(".englishMessage").css("background-color","green");
        }else{
    //如果答案不正确，则显示此文本
    
    $(".englishMessage").text("错误！请再试一次"); 
    $(".englishMessage").css("background-color","red");
        }
});


// 2. 地理

$(".ssButton").click(function(){
    let ssInput = $(".socialStudies").val();
    var answer ="北京";
    if(ssInput===answer){
        //如果答案正确，则显示此文本
        
        $(".ssMessage").text("正确!");
        $(".ssMessage").css("background-color","green");
            }else{
        //如果答案不正确，则显示此文本
        
        $(".ssMessage").text("错误！请再试一次"); 
        $(".ssMessage").css("background-color","red");
            }

    
});


// 3. 数学

$(".mathButton").click(function(){
    let mathInput = $(".math").val();
    
    //下面，我们使用parseInt（）函数将输入值（字符串）转换为数字
    
    mathInput = parseInt(mathInput);

    var thirty ="30";
    thirty = parseInt(thirty);

    if(mathInput===thirty){
        //如果答案正确，则显示此文本
        
        $(".mathMessage").text("正确!");
        $(".mathMessage").css("background-color","green");
            }else{
        //如果答案不正确，则显示此文本
        
        $(".mathMessage").text("错误！请再试一次"); 
        $(".mathMessage").css("background-color","red");
            }

});


// 4. 科学
$(".scienceButton").click(function(){
    let scienceInput = $(".science").val();

        var njciom ="固体";

        if(scienceInput===njciom){
    //如果答案正确，则显示此文本
    
    $(".scienceMessage").text("正确!");
    $(".scienceMessage").css("background-color","green");
        }else{
    //如果答案不正确，则显示此文本
    
    $(".scienceMessage").text("错误！请再试一次"); 
    $(".scienceMessage").css("background-color","red");
        }
});



