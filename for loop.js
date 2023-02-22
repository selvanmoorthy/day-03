//2,for the given JSON interate over all for loops (for,forin)?
var arr=[{"name":"selvan","age":"21"},{"name":"moorthy","age":"21"}];
 
for(i=0;i<arr.length;i++){
  console.log(arr[i].name,arr[i].age);

}
// IN FOR IN LOOP
for(a in arr[i]){
    console.log(a,arr[i][a]);
}