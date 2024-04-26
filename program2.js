function longestSubstring(s) {


   let n=s . length;
    if(n===0)return 0;
    let maxlength=0;
    const seen ={};
    let s=0;    
    for(let  end=0;end<n;end++){
        if(s[end]in seen&&s<=seen[s[end]]){
            s=seen[s[end]]+1
        } else {
            maxlength=Math.max(maxlength,end-s+1);

        }
        seen[s[end]]=end
    }
    return maxlength;

}

module.exports = { longestSubstring };
