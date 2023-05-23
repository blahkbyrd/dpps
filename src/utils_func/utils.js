export const findId = (array, id) => {
array.forEach(element => {
    if(element.id=== id) {
        console.log(element.id);
        return 1
    }
});
}

export const changeClassOfNodeElement =(nodeList, target, new_class) =>{
    nodeList.forEach(child =>{
        if(child === target){
            child.classList.add(new_class)
        }
        else{
            child.classList.remove(new_class)
        }
    })
}

export const selectChildNodeElement = (parent) => {
    const element = parent.current.childNodes;
    const array = [];
    element.forEach(child => {
        array.push(child)
    })
    return array;
}

export default {
    findId,
    changeClassOfNodeElement,
    selectChildNodeElement
}