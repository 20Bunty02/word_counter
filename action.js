function word_count(){
    let txt=document.getElementById("t");
    let str=txt.value;
    console.log(str);
    let check=false;
    let count=0;
    for(let i=0;i<str.length;i++){
        if((str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z')||(str[i]=='’')||str[i]=='-'){
            check=true;
        }
        else{
            if(check==true){
                count++;
                check=false;
            }
        }
    }
    if(check==true){
        count++;
    }
    let words=document.getElementById('word');
    words.innerText="Total Words ="+count+"";
    let characters=document.getElementById('char');
    characters.innerText="Total Characters ="+str.length+"";
    
}