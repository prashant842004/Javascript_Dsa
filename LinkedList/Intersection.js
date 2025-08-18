class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = null;
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

}


function getInteraction(headA, headB) {
    let currentA =headA;
    while(currentA != null)
    {
        let currentB = headB;
        while (currentB != null) {
            if(currentA == currentB)
            {
                return currentA;
            }
            currentA = currentA.next;            
        }
        currentB = currentB.next;
    }
    return null;    
}

const IntersectionNode = new Node(17);

const mylistA = new LinkedList();
mylistA.head =  new Node(10);
mylistA.head.next =  new Node(20);
mylistA.head.next.next =  IntersectionNode;
IntersectionNode.next = new Node(30);
IntersectionNode.next.next = null;

const mylistB = new LinkedList();
mylistB.head = new Node(6);
mylistB.head.next = new Node(9);
mylistB.head.next.next = IntersectionNode;

const Intersection = getInteraction(mylistA.head , mylistB.head);

if(intersection)
{
    console.log(`Intersectionn Found at Node ${Intersection.value}`);
}
else{
    console.log("No Intersection Found");
}