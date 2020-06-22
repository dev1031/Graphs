class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
};


class LinkedList{
    constructor(){
        this.head = null;
        this.length = null;
    };

    insert(value){
        let node = new Node(value);
        if(this.head===null){
            this.head = node
        }else{
            let current = this.head;
            while(current!==null){
                current = current.next;
            }
            current.next = node
        };
        return this.head;
    }
}

const list1 = new LinkedList();
list1.insert(2)
list1.insert(4)
list1.insert(3)

const list2 = new LinkedList();
list2.insert(5)
list2.insert(6)
list2.insert(4);

const addFunction = (list1, list2)=>{
    let node = new Node();
    let result  = node;
    let l1_elem =  list1.head;
    let l2_elem =  list2.head;
    while(l1_elem.next !==null || l2_elem.next !==null){
        
    }
}