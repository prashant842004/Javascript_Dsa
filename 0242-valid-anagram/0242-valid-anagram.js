/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !==  t.length )
    {
        return false;
    }

    let charcount = new Array(26).fill(0);

for(let i=0 ;i< s.length;i++)
{
        charcount[s.charCodeAt(i)-97]++;
    charcount[t.charCodeAt(i)-97]--;
}

for(let count of charcount)
{
    if(count !== 0)
{
    return false;
}
}
return true;

};