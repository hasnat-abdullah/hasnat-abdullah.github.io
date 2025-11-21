The special thing about dictionaries is the way they are implemented. Hash-table-like structure makes it easy to check for existence \- which means that we can easily determine if a specific key is present in the dictionary without needing to examine every element. The Python interpreter can just go to the location key and check if the key is there.

Some Characteristics of Dictionary

* The keys are unique. If you try to add duplicate key, then it will update the existing key’s value by the latest one.  
* If two numbers compare equal (such as 1 and 1 .0 ) then they can be used interchangeably to index the same dictionary entry.  
* Dictionaries are ordered data structures (Python \>=3.7). That means it will give you the same order of data as you inputted.  
* Keys must be immutable. Dictionary keys must be of an immutable type. Strings and numbers are the two most commonly used data types as dictionary keys. We can also use tuples as keys but they must contain only strings, integers, or other tuples.  
* Python Dictionary is created based on Hash table. Average searching time complexity O(1).

Potentials of Dictionary

Switch/Case Statements With Dicts 

In Docty projects, we had to add a default risk statement for users where the content of the risk statement will be different for different type of users. We can do it like this:

def set\_default\_risk\_statement(user\_type):  
    if user\_type \== "ADMIN":  
        return "Ami admin, amar abar risk kiser\!"  
    elif user\_type \== "DOCTOR":  
        return "Risk er kotha bolle injection futay dimu\!"  
    elif user\_type \== "NURSE":  
        return "Aj nurse bole amar sob risk tai na\!"  
    else:  
        return ""  
risk\_statement \= set\_default\_risk\_statement("ADMIN")  
A better way of doing it:

DEFAULT\_RISK\_STATEMENT \= {  
    "ADMIN": "Ami admin, amar abar risk kiser\!",  
    "DOCTOR": "Risk er kotha bolle injection futay dimu\!",  
    "NURSE": "Aj nurse bole amar sob risk tai na\!"  
}  
risk\_statement \= DEFAULT\_RISK\_STATEMENT.get("ADMIN", "")  
Here we are trying to find the value of the key "ADMIN". If not exists any key then it will return the default value "".

Store Function as dictionary value

In Python, functions are first-class objects, created with an identity, type, and value. So we can use a function as a value of dictionary keys.

Suppose you are asked to assign different patterns of unique id for different type of users. So we can solve this problem in this way:

 def generate\_admin\_id():  
    \#Your code  
    return 'ax'  
def generate\_doctor\_id():  
    \#Your code  
    return 'dx'  
def generate\_nurse\_id():  
    \#Your code  
    return 'nx'  
def get\_user\_id(user\_type):  
    if user\_type \== "ADMIN":  
        id \= generate\_admin\_id()  
    elif user\_type \== "DOCTOR":  
        id \= generate\_doctor\_id()  
    elif user\_type \== "NURSE":  
        id \= generate\_admin\_id()  
    else:  
        raise Exception("Vul val User type dile hobe\!")  
    return id  
id \= get\_user\_id(user\_type="NURSE")  
A better way of doing it:

def generate\_admin\_id():  
    \#Your code  
    return 'ax'  
def generate\_doctor\_id():  
    \#Your code  
    return 'dx'  
def generate\_nurse\_id():  
    \#Your code  
    return 'nx'  
def raise\_wrong\_user\_type\_error():  
    raise Exception("Wrong User type")  
GET\_USER\_ID={  
    "ADMIN": generate\_admin\_id,  
    "DOCTOR": generate\_doctor\_id,  
    "NURSE": generate\_nurse\_id  
}  
id \= GET\_USER\_ID.get("NURSE", raise\_wrong\_user\_type\_error)()  
Here we are using function as a value of key but excluding '()'. Because it is working as an object. In the last line, we used a default function name also as an object and at the end we used '()'. So that the desired values of the key which was in object mood can now act as function. You can also pass parameters into the function. In this case, you must have to ensure that all function is taking the same parameter.

Default value of Dictionary

A common issue that you can face when working with Python dictionaries is how to handle missing keys. Sometimes you want to add a key-value in the existing dictionary but are not sure whether it exists. Suppose you want not to replace with new values if exist else you will add that key with your new value. You can solve this problem like this:

DEFAULT\_RISK\_STATEMENT \= {  
    "ADMIN": "Ami admin, amar abar risk kiser\!",  
    "DOCTOR": "Risk er kotha bolle injection futay dimu\!",  
    "NURSE": "Aj nurse bole amar sob risk tai na\!"  
}  
if "DOCTOR" not in DEFAULT\_RISK\_STATEMENT:  
    DEFAULT\_RISK\_STATEMENT\["DOCTOR"\]= "Manush mara doctor"  
A Better way of doing it:

DEFAULT\_RISK\_STATEMENT \= {  
    "ADMIN": "Ami admin, amar abar risk kiser\!",  
    "DOCTOR": "Risk er kotha bolle injection futay dimu\!",  
    "NURSE": "Aj nurse bole amar sob risk tai na\!"  
}  
\# use of .setdefault(key\_name,value)  
DEFAULT\_RISK\_STATEMENT.setdefault("DOCTOR", "Manush mara doctor")  
print(DEFAULT\_RISK\_STATEMENT\["DOCTOR\])  
Output:  
"Risk er kotha bolle injection futay dimu\!"  
Here, when we will use .setdefault(key,value) method then first it will check if the key is exists . If its exists then it will not update the value. If not exists, then it will add the key with provided value. According to [Python Doc](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict): *"If* key is in the dictionary, return its value. If not, insert key with a value of default and return default. default defaults to None."

Sorting Dictionary

Python (version \<3.7) dictionaries don’t have an inherent order. You can iterate over them just fine but there’s no guarantee that iteration returns the dictionary’s elements in any particular order. But as of Python version \>=3.7, dictionaries are ordered. However, it’s frequently useful to get a *sorted representation* of a dictionary to put the dictionary’s items into an arbitrary order based on their key, value, or some other derived property. Suppose you have a dictionary xs with the following key/value pairs:

\>\>\> xs \= {'a': 4, 'c': 2, 'b': 3, 'd': 1}  
To get a sorted list of the key/value pairs in this dictionary, you could use the dictionary’s items() method and then sort the resulting sequence in a second pass:

\>\>\> sorted(xs.items())  
\[('a', 4), ('b', 3), ('c', 2), ('d', 1)\]  
The key/value tuples are ordered using Python’s standard lexico- graphical ordering for comparing sequences. Let’s say you wanted to get a sorted representation of a dictionary based on its *values*. To get this result you could use the following key function which returns the value of each key/value pair by looking up the second element in the tuple:

\>\>\> sorted(xs.items(), key=lambda x: x\[1\])  
\[('d', 1), ('c', 2), ('b', 3), ('a', 4)\]  
Different type of Dictionary

OrderedDict

In the previous section, we said that the previous versioned (\<3.7) dictionary is an unordered data structure. But sometimes it becomes necessary things. So OrderedDict can solve this problem. OrderedDict is a subclass of dictionary class that maintains the elements in the inserted order.

from collections import OrderedDict  
food \= OrderedDict(  
    a="apple",  
    b="boro apple",  
    c="choto apple"  
)  
print(food)  
Output:  
OrderedDict(\[('a', 'apple'), ('b', 'boro apple'), ('c', 'choto apple')\])  
Look, here output is as like a List of tuple. But, as it's a subclass of Dictionary, you can iterate OrderedDict same as normal dictionary.

Methods

popitem(last): It returns and removes a (key,value) pair. The pairs are in Last In First Out order if last is True else it would be in First In First Out order if last is False.

food \= OrderedDict(  
    a="apple",  
    b="boro apple",  
    c="choto apple"  
)  
print(food.popitem(last=True))  
Output:  
('c',"choto apple")  
move\_to\_end(key,last): It moves the given key to the end of the ordered dictionary. It moves to the right end if the last is true else it moves to the beginning. It raises KeyError when the given is not present in the orderedDict.

food \= OrderedDict(  
    a="apple",  
    b="boro apple",  
    c="choto apple"  
)  
food.move\_to\_end('a',True)  
print(food)  
Output:  
OrderedDict(\[('b', 'boro apple'), ('c', 'choto apple'),('a', 'apple')\])  
DefaultDict

Dictionary in python generates an error when we try to access the key which is not present in the dictionary. This error(KeyError) stops the execution of the program.DefaultDict is the best solution for the above problem.

Unlike a normal dictionary, defaultdict does not raise KeyError. It provides a default value for the key which is not present in the dictionary. A function should be passed which should return a string to determine when the key is not present in the dictionary. The function which is to be passed is called default\_factory.

from collections import defaultdict  
def default\_value():  
    return "Not exist"  
new\_dic \= defaultdict(default\_value,  
                      a='apple',  
                      b='boro apple')  
print(new\_dic\['c'\])  
Output:  
Not exist  
Also, you can pass lambda function.

from collections import defaultdict  
new\_dic \= defaultdict(lambda: "Not exist",  
                      a='apple',  
                      b='boro apple')  
ChainMap

It is a container that combines multiple dictionaries into a single unit. It is present in the collections library. You can iterate ChainMap as like normal dict with .items(), .keys(), .values() method.

from collections import ChainMap  
a \= {1: "Mina", 2: "Raju"}  
b \= {3: "Mithu", 4: "Rita"}  
c \= ChainMap(a, b)  
print(c)  
c \= c.new\_child({5: 'Jin'})  
print(F"Added new dict: {c.maps}")  
Output:  
ChainMap({1: 'Mina', 2: 'Raju'}, {3: 'Mithu', 4: 'Rita'})  
Added new dict: \[{5: 'Jin'}, {1: 'Mina', 2: 'Raju'}, {3: 'Mithu', 4: 'Rita'}\]  
Methods

maps() : It returns the corresponding keys along with values of corresponding dictionaries. new\_child(m) : It adds a new dictionary to the beginning of the [ChainMap.It](http://chainmap.it/) takes an optional parameter which when given gets added otherwise empty dictionary gets added to the beginning of the ChainMap. reversed() : It reverses the order of dictionaries in the ChainMap.

Counter

It is a subclass of the dictionary class. It stores the count of each element present along with the element.

from collections import Counter  
chaldal \= \['dim', 'malta', 'dim', 'kola', 'dim'\]  
counter\_dict \= Counter(chaldal)  
print(counter\_dict)  
Output:  
Counter({'dim': 3, 'malta': 1, 'kola': 1})  
Methods

elements() : It returns an iterator over elements repeating the number of counts of each. It does not count for count\<=0. most\_common() : It returns the most common elements along with their counts. It takes optional parameter m which determines how many to number of items to return from highest count to lowest count. If m is not given then all are returned.

Bonus ❤️

Once I was refactoring my code where there was a dictionary as constant. Some of the keys I had to rename & remove. After doing this there were lots of errors 🎋😭😭\!\! Why? Everywhere in the code, the dictionary was accessed by index like dictionary\['key'\] or dictionary.get('key', 'default\_value'). So I missed some to modify as my IDE was not giving any error message even when running the project until that malicious code was running. Most dangerously where .get() method used was not giving any error rather than working fine though with wrong values. So, how can we solve this scalability problem? If we can access the keys with a dot instead of the index then the IDE will raise an error before running the code. Then we can easily take action accordingly.

SimpleNamespace

Python's SimpleNamespace class provides an easy way for a programmer to create an object to store values as attributes without creating their own (almost empty) class. Unlike object, with SimpleNamespace you can add and remove attributes. SimpleNamespace is basically just a nice facade on top of a dictionary. It allows you to use properties instead of index keys. This is nice as it is super flexible and easy to manipulate.

from types import SimpleNamespace  
MINA\_CARTOON \= SimpleNamespace(  
    MINA="Mithu, tmi rajur bandhobi k chokh marla kn\!",  
    RAJU='Mithu, tmi ki Masud er moto r valo hoba na?'  
)  
print(MINA\_CARTOON.RAJU)  
for key, value in MINA\_CARTOON.\_\_dict\_\_.items():  
    print(key)  
print(MINA\_CARTOON.\_\_dict\_\_)  
Output:  
Mithu, tmi ki Masud er moto r valo hoba na?  
mina  
raju  
{'mina': 'Mithu, tmi rajur bandhobi k chokh marla kn\!', 'raju': 'Mithu, tmi ki Masud er moto r valo hoba na?'}  
The downside of that flexibility is that it doesn't provide any structure. There is nothing to stop someone from calling SimpleNamespace(x=ax, y=ay) (and del a.z at some point later). If this instance gets passed to your function, the exception occurs when you try to access the field.

In contrast, namedtuple lets you create a structured type. The type will have a name and it will know what fields it is supposed to have. You won't be able to make an instance without each of those fields and they can't be removed later. Additionally, the instance is immutable, so you will know that the value in a.x will always be the same.

It's up to you to decide if you need the flexibility that SimpleNamespace gives you, or if you prefer to have the structure and guarantees provided by namedtuple.

😆 A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch\! 😆  
Reference

* Python Tricks \- Dan Bader  
* [https://realpython.com/python-namedtuple/](https://realpython.com/python-namedtuple/)  
* [https://www.freecodecamp.org/news/python-example/](https://www.freecodecamp.org/news/python-example/)  
* Learn python the hard way \- Zed Shaw  
* [https://softwareengineering.stackexchange.com/questions/349740/in-python-3-4-why-should-i-use-namedtuple-over-simplenamespace-when-not-using](https://softwareengineering.stackexchange.com/questions/349740/in-python-3-4-why-should-i-use-namedtuple-over-simplenamespace-when-not-using)

