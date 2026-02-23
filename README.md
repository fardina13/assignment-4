**<!-- Ans to the question no 1 -->**

**difference between getElementById and getElementsByClassName**
**Difference 1- definition**-->
getElementById() - is a method in javascript used to select an HTML element by it's unique id attribute.

getElementsByClassName() - is a method in javascript for selecting elements by their classnames.

**Difference 2- process** -->
To get an element from DOM, you have to set an id and search it using document.getElementById('')

When you need more than one element, than put class names where it is need and get them by document.getElementsByClassName('').

**Difference 3- result** -->
If you search by id, it will give id.if there is no id it will give null.

It gives classNames in an array and if there is no  classNames it will give an empty array []

**Difference 4- access** -->
Directly access properties( e.g element.innerHTML) on the returned element.

Must iterate through the collection (e.g using a loop or index collection [0] to access individual elements or their properties)

**Difference 5- live collection** -->
Live collection not applicable, it returns a single element.

Returns a live collection - automatically updates if elements with the specified class are added or remove from DOM.

**difference between querySelector and querySelectorAll**
**Difference 1- definition**-->
querySelector() - a method of javascript that search the very first element from DOM by matching css selector.

querySelectorAll() - a method of javascript that search all elements from DOM by matching css selector and deposit them in a list.

**Difference 2- result** -->
Return value - static nodelist. If there is no element, it gives nodelist [].

If there is no element, it gives null.


**<!-- Ans to the question no 2 -->**

**Create and insert a new element into the DOM**
Suppose there is a ol including 5 li. Now, we will add 1 li to that ol. Total li will be 6.

<body>
  <ol id="item-list">
        <li class="item">Chittagong</li>
        <li class="item">Khulna</li>
        <li class="item">Rajshahi</li>
        <li class="item">Rongpur</li>
        <li class="item">Dhaka</li>
  </ol>
</body>

Following steps should be followed in between script tag or an external js file.

<script>
step-1 We should get the parent elemnet where we will add a new element by their id. Here parent of li is ol whose id = "item-list"
const ol = document.getElementById('item-list');

step-2 Make new li
const li = document.createElement('li');

step-3 Add classList to the new li
li.classList.add('item');

step-4 Put innerText to the new li
li.innerText = 'Borishal';

step-5 Append newly made li to the ol
ol.appendChild(li);
</script>

**<!-- Ans to the question no 3 -->**

**Event Bubbling**
Event Bubbling is a mechanism of DOM where if an element is triggered or get clicked then that event will bubble up the DOM Tree and trigger the parent element too.


**Event Bubbling working process**
<body id="great-grand-parent">
    <section id="grand-parent">
        <ol id="parent">
            <li id="child1">X</li>
            <li id="child2">Y</li>
        </ol>
    </section>
</body>

Following steps should be followed in between script tag or an external js file.
<script>
  //step-1 click listener in li(child1)
  document.getElementById('child1').addEventListener('click', function(event) {
    console.log("li::>child1 got clicked");
  });

  //step-2 click listener in ol(parent)
  document.getElementById('parent').addEventListener('click', function(event) {
    console.log("ol::>parent got clicked");
  });

  //step-3 click listener in section(grand parent)
  document.getElementById('grand-parent').addEventListener('click', function(event) {
    console.log("section::>grand parent got clicked");
  });

  //step-4 click listener in body(great grand parent)
  document.getElementById('great-grand-parent').addEventListener('click', function(event) {
    console.log("body::>great grand parent got clicked");
  });
</script>


**<!-- Ans to the question no 4 -->**

**Event Delegation**
Event Delegation is a smart technique of javascript where there is no need to add event listener to each and every different element. It can be done by adding event listener to their common parent element.

It primarily works by taking advantage of Event Bubbling. Since clicking on a child element causes that event to 'bubble up' to its parent, the parent can easily identify which of its children was clicked.

**Event Delegation is useful for the following reasons**

1. **​Memory Efficiency:** If there are 1,000 items in a list, adding a single listener to the parent is much more memory-efficient than attaching 1,000 separate listeners to each item.

2. **​Dynamic Elements:** If new items are added to the list using JavaScript in the future, you won't need to write separate listeners for them. The parent element will handle them automatically.

**<!-- Ans to the question no 5 -->**
**difference between preventDefault() and stopPropagation() methods**

**stopPropagation() method** is used to prevent bubbling from child to parent element.

It is used in complex UIs to ensure an event handled by a child element does not unintentionally trigger a handler on a parent element.


**preventDefault() method** is used to prevent event's default action.

It is use when handling an event with custom JavaScript logic instead of the browser's built-in action.