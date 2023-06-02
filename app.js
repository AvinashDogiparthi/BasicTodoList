let input = prompt("What would you like to do");
const list1 = ["eat mangoes","chill for hours"];
while(input != 'quit' && input != 'q')
{
    if(input === 'new')
    {
        const toDo = prompt("ok what is the new todo?");
        list1.push(toDo);
        console.log(`${toDo} a new todo has been added`);
        console.log("**************");
    }
    else if(input === 'list')
    {
        for(let i = 0;i<list1.length;i++)
        {
            console.log(i,": ",list1[i]);
        }
        console.log("***************");
    }
    else if(input === 'delete')
    {
        const index = prompt("Ok enter an index to delete");
        if(!Number.isNaN(index))
        {
        const deleted = list1.splice(index,1);
        console.log(`ok, deleted ${deleted}`);
        }
        else{
            console.log("an unknown integer");
        }
    }
    input = prompt("what would you like to do?");
}
console.log("Ok quit the APP!");