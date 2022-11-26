# ReduxToolkit_start_task
The starting project has a couple of React components. The application is not interactive.
Try to implement all necessary features (which will be described) with Redux and multiple state slices. 
For this purpose set up Redux Toolkit in this application.
Please, use the *store* folder and JS files within it to define multiple state slices:
1) **ui_slice.js** will be used for user interface logic like toggling the cart, which should go into its own slice here;
2) **cart_slice.js** will be used for managing the cart;
3) **index.js** will set up Redux store;

Description.
1) **ui_slice.js**   
When the user clicks button ‘My Cart’, the cart area should be toggled on the page.  
You have to create slice *uiSlice* whose state will contain only one property *cartIsVisible* with initial value *false*. 
Slice reducers will contain only one method *toggle()*, which receives the old state and sets state *cartIsVisible* to the opposite of what it was.  
&  
Add an ‘on click’ listener to the Cart button component (*Cart* folder, *cart.js*) so, that when 'Cart' button is clicked the cart area is shown or hidden.  

2) **cart_slice.js**  
Should contain the logic for management the content of the cart. So the cart items should be updated correctly when we click ‘Add to Cart’ or when we click ‘Plus’ or ‘Minus’ here. And actually the batch of value here, in the ‘My Cart’ button, should also be updated.    
Set up the initial state – empty array of the items and zero quantity of the items in the cart.    
You have to define two reducers within slice - *addItemToCart()* and *removeItemFromCart()* which contain the logic of changing the array of items and total amount of items in the cart (via ‘Plus’ and ‘Minus’ buttons).  
Payload should be passed in a form of an object for  *addItemToCart()* and as a simple value for *removeItemFromCart()*  
State of this slice hsould have the next structure:  
{  
&nbsp;&nbsp;items: [  
&nbsp;&nbsp;&nbsp;&nbsp;{   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: *someId*,   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: *someTitle*,  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;price: *somePrice*,   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quantity: *someQuantity*,   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;totalPrice: *price * quantity*,    
&nbsp;&nbsp;&nbsp;&nbsp;},  
&nbsp;&nbsp;],  
&nbsp;&nbsp;totalQuantity: *sumOfAllItemQuantities*,  
}  
Don’t forget that the user is able to add the same item more then one time. Also, he cannot remove item from the card if it has not been added yet.  
&  
Make all the necessary changes (add listeners/handlers) to the cart components (*Cart* folder).

3) merge the usage of **ui_slice.js** and **cart_slice.js** into **index.js**.
Ensure that if the user clicks the ‘My Cart’ button, this cart is toggled, so the application shows it. And if it is already showing up, the application hides it.
![screen_1](https://user-images.githubusercontent.com/39273210/187036455-809daef7-df3b-482d-b7ed-445b2509b29c.gif)
Ensure that if the user clicks ‘Add to Cart’ on an item, it is added to the cart.
![screen_2](https://user-images.githubusercontent.com/39273210/187036498-f2600228-edf8-463e-a0a8-1ac1d0b795f2.gif)
And if it's already part of the cart, the quantity of the existing item just is increased.
![screen_3](https://user-images.githubusercontent.com/39273210/187036534-2789eab7-02de-4c62-a165-36bf349d521f.gif)
And in the cart, with these buttons Plus and Minus, the user also can control the quantity. And if the quantity is one and he clicks ‘Minus’, he removes the item entirely from the cart.

![screen_4](https://user-images.githubusercontent.com/39273210/187036549-e0ae83e2-143c-4d1b-a35a-0507e7f8d0ac.gif)

![screen_5](https://user-images.githubusercontent.com/39273210/187036560-da1313cd-eb55-46d5-b727-2890563b2450.gif)
