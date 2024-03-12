// 创建一个名为example的对象
var example = {
    // 添加一个属性
    message: "这是一个示例文件。",
    
    // 添加一个方法
    greet: function() {
        console.log(this.message);
    }
};

// 调用方法
example.greet();

