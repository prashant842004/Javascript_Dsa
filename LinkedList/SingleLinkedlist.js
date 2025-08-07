class Node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;        
    }

    Insert(value)
    {
        const newNode = new Node(value);
        //inserting all the beginning of the list

        if (!this.head) {
            this.head = newNode;
        }
        else{
            let current = this.head;
            //Inserting all  the  end of the list

            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    Delete(value)
    {
        if(!this.head) return null;

        //Deleting from the beginning of the list

        if(this.head.value == value)
        {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let current = this.head;
        let previous = null;

        while(current && current.value != value)
        {
            previous = current;
            current = current.next;
        }

        if(current)
        {
            previous.next = current.next;
            this.size--;
        }
    }

    Search(value)
    {    
        let current =  this.head;

        while(current)
        {
            if(current.value == value)
            {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    Display()
    {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }


     Reverse()
    {
        let prev = null;
        let current = this.head;

        while(current)
        {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        return prev;
    }
    getsize()
    {
        return this.size;
    }
}

let myList = new LinkedList();

myList.Insert(10);
myList.Insert(20);
myList.Insert(30);
myList.Insert(40);
myList.Insert(50);
myList.Insert(60);
myList.Insert(70);
myList.Insert(80);
myList.Insert(90);

myList.Display();

myList.Delete(20);

myList.Display();
console.log(myList.Search(40));
myList.Delete(50);

console.log("The Length of the LinkedList is : " + myList.getsize());

console.log("Reverse of Linked List is ");

console.log(myList.Reverse());

console.log("The Length of the LinkedList is : " + myList.getsize());



