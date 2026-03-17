Java Adapters
new JavaAdapter(interface, interface2, /* ... */, interfaceN, {
  override1() { /* ... */ },
  override2() { /* ... */ },
})

Shorthand
Since interfaces cannot be constructed, Rhino uses this missing space to 
define "constructing an interface" as implementing an interface with provided overrides.
new interface({
  override1() { /* ... */ },
  override2() { /* ... */ },
})

Implementing multiple interfaces
This is supported too:
new JavaAdapter(interface, interface2, /* ... */, interfaceN, {
  override1() { /* ... */ },
  override2() { /* ... */ },
})

Parameters:
interface (interface2, ..., interfaceN): A reference (or references) to Java interface(s) you want to implement.
override1, override2, ...: Replace with names of methods you want to implement. 
These methods must take an appropriate number of arguments and return an appropriate type.

Return value
A new instance of a class implementing provided interfaces using provided methods. 