1.getElementByID : When I know the exact id of something, I use this. It gives me only that one element.

getElementsByClassName : If many elements have the same class, I use this. It gives me all of them.

querySelector : I use this when I just want the first matching element. I can use id, class, tag — anything.

querySelectorAll : Same as querySelector, but it gives me all matching elements.




2.First, I create a new element using document.createElement().Then, I can add text or content inside it.After that, I insert it into the page using append() or appendChild().





3.Event bubbling means when I click on a small element, the event also goes to its parent.It starts from the element I clicked, then moves up step by step to its parent, then grandparent, and so on.So the event “bubbles up” to the top.

For example, if I click a button inside a div,first the button event runs,then the div event runs.




4.Event delegation is when I put one event listener on a parent instead of on all the child elements. Then that one listener can catch events from its children.

It’s useful because:

1. I don’t have to add many listeners, so it’s easier.
2. It also works for new elements added later.

if I have a list and I want to click on items, I just put the click on the ul instead of every li. 





5.

1. preventDefault() : stops the normal action of something.
  For example, clicking a link won’t take you to the page.

2. stopPropagation() : stops the event from going up to the parent.
  For example, clicking a button won’t trigger the parent’s click.

One stops what usually happens, the other stops the event from spreading.















