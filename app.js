//let input = document.getElementById("input-field").value;
function handleclick(val)
{
    document.getElementById("input-field").value+=val;
}
function clr()
{
    document.getElementById("input-field").value = " ";
}
function solve()
{
    let exp = document.getElementById("input-field").value;
    let ans=eval(exp);
    document.getElementById("input-field").value=ans;
}
