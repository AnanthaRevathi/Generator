document.addEventListener("DOMContentLoaded", () => {
    const btnCopy=document.querySelector("#btnCopy");
    const container = document.querySelector(".container");
    const allBorder = document.getElementById("all");
    const borderElement = document.getElementById("border");
    const all_value = document.getElementById("all_value");
    const code = document.getElementById("code");
    const border_styleElement=document.getElementById("border_style")

    var all_radius=10;
    var border_style="solid";
    var border_size=3;
    var coding="Test";

    function allBordersUpdate() {
        all_radius = allBorder.value;
        all_value.innerText = all_radius+"px";
        coding=`
        border-radius: ${all_radius}px;
         border:${border_size}px ${border_style} red`;

        code.value = coding;
        container.style.cssText = coding;
    }

    allBorder.addEventListener("input", allBordersUpdate);
    borderElement.addEventListener("input", allBordersUpdate);
    btnCopy.addEventListener('click',()=>{

        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert('copied successfully');
    
    });
    allBordersUpdate();

    border_styleElement.addEventListener('change',function(){
border_style=this.value;
allBordersUpdate();
    
});

    
});
