var number =14;
console.log("if is true");
if (number<20)
{
    console.log("Inner if block");
}
console.log("if is false");
if (number<10)
{
    console.log("Inner if");
}
console.log("Outer of if block");
console.log("if is false go else block");
if (number<10)
{
    console.log("Inner if block");
}
else{
    console.log("Inner else block");
}
switch (number) {
    case number>20:
        console.log(" step 1: false");
        break;
    case number=20:
        console.log("step 2: false");
        break;
    case number=14:
        console.log("step 3: true");
        break;
    default:
        console.log("try again");

}