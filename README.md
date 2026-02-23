**<!-- Ans to the question no 1 -->**

**difference between getElementById and getElementsByClassName**
**Difference 1- definition**-->
getElementById() - is a method in javascript used to select an HTML element by it's unique id attribute.

getElementsByClassName() - is a method in javascript for selecting elements by their classnames.

**Difference 2- process** -->
যখন DOM থেকে নির্দিষ্ট element প্রয়োজন হয়, তখন id সেট করে document.getElementById('') দিয়ে খুঁজে বের করতে হয়

যখন DOM থেকে একাধিক  element প্রয়োজন হয়, তখন যেখানে যেখানে দরকার সেখানে class name বসাতে হবে। তারপর document.getElementsByClassName('') দিয়ে খুঁজে বের করতে হবে।

**Difference 3- result** -->
id দিয়ে খুঁজলে id টাই return করবে, id পাওয়া না গেলে null দিবে।

একাধিক class name পাওয়া গেলে একটা array তে class name গুলো provide করবে। class name না পেলে খালি array [] দিবে।

**Difference 4- access** -->
directly access properties( e.g element.innerHTML) on the returned element.

must iterate through the collection (e.g using a loop or index collection [0] to access individual elements or their properties)

**Difference 5- live collection** -->
live collection not applicable, it returns a single element.

returns a live collection - automatically updates if elements with the specified class are added or remove from DOM.

**difference between querySelector and querySelectorAll**
**Difference 1- definition**-->
querySelector() - javascript এর একটা method যা DOM থেকে নির্দিষ্ট css selector এর সাথে মিলে যায় এমন শুধু প্রথম element কে খুঁজে বের করে।

querySelectorAll() - javascript এর একটা method যা DOM থেকে css selector এর সাথে মিল থাকা সব element কে খুঁজে বের করে একটি তালিকায় জমা করে।

**Difference 2- result** -->
return value - static nodelist, element পাওয়া না গেলে nodelist [] দেয়

element না পেলে null দেয়


**<!-- Ans to the question no 2 -->**

**Create and insert a new element into the DOM**
ধরি body tag এর ভেতর একটা ol আছে যাতে ৫টা li আছে। এখন এখানে আরেকটা li যোগ করবো, ৬টা li হবে।

<body>
  <ol id="item-list">
        <li class="item">Chittagong</li>
        <li class="item">Khulna</li>
        <li class="item">Rajshahi</li>
        <li class="item">Rongpur</li>
        <li class="item">Dhaka</li>
  </ol>
</body>

script tag অথবা external js file এ নিচের step গুলো follow করতে হবে।

<script>
step-1 যে parent এর ভেতর নতুন element insert করতে হবে তাকে আগে  তার id দিয়ে ধরতে হবে। এখানে li এর parent,  ol যার id = "item-list"
const ol = document.getElementById('item-list');

step-2 নতুন li বানাতে হবে
const li = document.createElement('li');

step-3 নতুন li তে classList add করতে হবে।
li.classList.add('item');

step-4 নতুন li তে innerText দিতে হবে
li.innerText = 'Borishal';

step-5 li কে ol এ append বা যোগ করতে হবে
ol.appendChild(li);
</script>

**<!-- Ans to the question no 3 -->**

Event Bubbling হলো DOM এর একটা mechanism যেখানে একটি element এ event trigger হলে বা click করা হলে, সেই event DOM Tree এর মাধ্যমে উপরের দিকে bubble করে element টির parent element কেও trigger করে।


**Event Bubbling working process**
<body id="great-grand-parent">
    <section id="grand-parent">
        <ol id="parent">
            <li id="child1">X</li>
            <li id="child2">Y</li>
        </ol>
    </section>
</body>

script tag অথবা external js file এ নিচের step গুলো follow করতে হবে।

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
