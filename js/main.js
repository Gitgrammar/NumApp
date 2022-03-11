'use strict';
window.onload=()=>{
    const numbers=[
        ['1776','seventeen seventy-six','1776.png'],
        ['1969','ninteen sixty-nine','1969.png'],
        ['2122','twenty-one hundred twenty-two','2122.png'],
        ['12345','twleve-thousand three hundred forty-five','12345.png'],
        ['67890','sixtyseven-thousand eight hundred ninety','67890.png'],
    ];
    const eng=document.getElementById('eng');
    const entry=document.getElementById('entry');
    const img=document.getElementById('img');
    const btn=document.getElementById('btn');
    const result=document.getElementById('result');
    let index=0;
    let correct=0;
    btn.addEventListener('click',()=>{
        let ans=entry.value.toLowerCase();
        let msg='';
        if(ans==numbers[index][1]){
            correct++;
            msg='正解！';
        }else{
            msg=`不正解!${numbers[index][0]}の数は${numbers[index][1]}`;
        }
        if(index==numbers.length-1){
            msg+=`<br>全${numbers.length}問中,${correct}問正解`;
            index=-1;
        }
        result.innerHTML=msg;
        result.classList.remove('fade');
        setTimeout(function(){
            result.classList.add('fade');
        },1500);
        setItem(++index);
        entry.focus();
    });
    function setItem(index){
        entry.value='';
        eng.textContent=numbers[index][0];
        img.src='images/'+numbers[index][2];
    }
    setItem(index);
}















