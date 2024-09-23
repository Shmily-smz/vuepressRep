 

// // 只有刷新时才调用
// window.addEventListener('load', function() {
//   addLabelImg();
// });

// // 初始化时或页面切换时调用
// addLabelImg();

//   console.log('3333');
  
// // 给侧边栏目录下的p元素添加图标  
// function addLabelImg() {
//   console.log();  
//   var side = document.getElementsByClassName('vp-sidebar-items');  
//   if (side.length === 0) {  
//     console.log('侧边栏未加载');  
//     return;  
//   }  
  
//   for (let i = 0; i < side.length; i++) {  
//     var listItems = side[i].getElementsByTagName('li'); 
//     for (let j = 0; j < listItems.length; j++) {  
//       var li = listItems[j];
//       var pElements = li.getElementsByTagName('p'); 
//       var aElements = li.getElementsByTagName('a'); 
//       for (let k = 0; k < pElements.length; k++) {  
//         var p = pElements[k]; 
//         var imgNodes = p.getElementsByTagName('img'); 
        
      
//         if (imgNodes.length === 0) {  
        
//           let cesiumImg = document.createElement('img');  
//           cesiumImg.src = "/images/1.png";  
//           cesiumImg.style.width = "13px";  
//           cesiumImg.style.height = "13px";  
//           p.prepend(cesiumImg); 
//         }  
//       }  
//       for (let k = 0; k < aElements.length; k++) {  
//         var a = aElements[k]; 
//         var imgNodes = a.getElementsByTagName('img'); 
        
      
//         if (imgNodes.length === 0) {  
        
//           let cesiumImg = document.createElement('img');  
//           cesiumImg.src = "/images/2.png";  
//           cesiumImg.style.width = "13px";  
//           cesiumImg.style.height = "13px";  
//           a.prepend(cesiumImg); 
//         }  
//       }  
//     }  
//   }  
// }