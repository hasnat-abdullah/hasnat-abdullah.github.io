---
slug: python-dictionary
title: Mastering Python Dictionaries, Key to Efficiency
tags: [ Programming ]
---

The special thing about dictionaries is the way they are implemented. Hash-table-like structure makes it easy to check
for existence \- which means that we can easily determine if a specific key is present in the dictionary without needing
to examine every element. The Python interpreter can just go to the location key and check if the key is there.
<!-- truncate -->
# Some Characteristics of Dictionary

* The keys are unique. If you try to add duplicate key, then it will update the existing key’s value by the latest one.
* If two numbers compare equal (such as 1 and 1 .0 ) then they can be used interchangeably to index the same dictionary
  entry.
* Dictionaries are ordered data structures (Python \>=3.7). That means it will give you the same order of data as you
  inputted.
* Keys must be immutable. Dictionary keys must be of an immutable type. Strings and numbers are the two most commonly
  used data types as dictionary keys. We can also use tuples as keys but they must contain only strings, integers, or
  other tuples.
* Python Dictionary is created based on Hash table. Average searching time complexity O(1).

# Potentials of Dictionary

## 1. Switch/Case Statements With Dicts

In Docty projects, we had to add a default risk statement for users where the content of the risk statement will be
different for different type of users. We can do it like this:

```python
def set_default_risk_statement(user_type):
    if user_type == "ADMIN":
        return "Ami admin, amar abar risk kiser!"
    elif user_type == "DOCTOR":
        return "Risk er kotha bolle injection futay dimu!"
    elif user_type == "NURSE":
        return "Aj nurse bole amar sob risk tai na!"
    else:
        return ""


risk_statement = set_default_risk_statement("ADMIN")
```

A better way of doing it:

```python
DEFAULT_RISK_STATEMENT = {
    "ADMIN": "Ami admin, amar abar risk kiser!",
    "DOCTOR": "Risk er kotha bolle injection futay dimu!",
    "NURSE": "Aj nurse bole amar sob risk tai na!"
}

risk_statement = DEFAULT_RISK_STATEMENT.get("ADMIN", "")
```

Here we are trying to find the value of the key "ADMIN". If not exists any key then it will return the default value "".

## 2. Store Function as dictionary value

In Python, functions are first-class objects, created with an identity, type, and value. So we can use a function as a
value of dictionary keys.

Suppose you are asked to assign different patterns of unique id for different type of users. So we can solve this
problem in this way:

```python
 def generate_admin_id():
    # Your code
    return 'ax'


def generate_doctor_id():
    # Your code
    return 'dx'


def generate_nurse_id():
    # Your code
    return 'nx'


def get_user_id(user_type):
    if user_type == "ADMIN":
        id = generate_admin_id()
    elif user_type == "DOCTOR":
        id = generate_doctor_id()
    elif user_type == "NURSE":
        id = generate_admin_id()
    else:
        raise Exception("Vul val User type dile hobe!")
    return id


id = get_user_id(user_type="NURSE")
```

A better way of doing it:

```python
def generate_admin_id():
    #Your code
    return 'ax'


def generate_doctor_id():
    #Your code
    return 'dx'


def generate_nurse_id():
    #Your code
    return 'nx'


def raise_wrong_user_type_error():
    raise Exception("Wrong User type")


GET_USER_ID = {
    "ADMIN": generate_admin_id,
    "DOCTOR": generate_doctor_id,
    "NURSE": generate_nurse_id
}

id = GET_USER_ID.get("NURSE", raise_wrong_user_type_error)()
```

Here we are using function as a value of key but excluding '()'. Because it is working as an object. In the last line,
we used a default function name also as an object and at the end we used '()'. So that the desired values of the key
which was in object mood can now act as function. You can also pass parameters into the function. In this case, you must
have to ensure that all function is taking the same parameter.

## 3. Default value of Dictionary

A common issue that you can face when working with Python dictionaries is how to handle missing keys. Sometimes you want
to add a key-value in the existing dictionary but are not sure whether it exists. Suppose you want not to replace with
new values if exist else you will add that key with your new value. You can solve this problem like this:

```python
DEFAULT_RISK_STATEMENT = {
    "ADMIN": "Ami admin, amar abar risk kiser!",
    "DOCTOR": "Risk er kotha bolle injection futay dimu!",
    "NURSE": "Aj nurse bole amar sob risk tai na!"
}
if "DOCTOR" not in DEFAULT_RISK_STATEMENT:
    DEFAULT_RISK_STATEMENT["DOCTOR"] = "Manush mara doctor"
``` 

A Better way of doing it:

```python
DEFAULT_RISK_STATEMENT = {
    "ADMIN": "Ami admin, amar abar risk kiser!",
    "DOCTOR": "Risk er kotha bolle injection futay dimu!",
    "NURSE": "Aj nurse bole amar sob risk tai na!"
}
# use of .setdefault(key_name,value)
DEFAULT_RISK_STATEMENT.setdefault("DOCTOR", "Manush mara doctor")

print(DEFAULT_RISK_STATEMENT["DOCTOR"])

```

**Output:**
```
"Risk er kotha bolle injection futay dimu!"
```

Here, when we will use .setdefault(key,value) method then first it will check if the key is exists . If its exists then
it will not update the value. If not exists, then it will add the key with provided value. According
to [Python Doc](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict): *"If* key is in the dictionary,
return its value. If not, insert key with a value of default and return default. default defaults to None."

## 4. Sorting Dictionary

Python (version \<3.7) dictionaries don’t have an inherent order. You can iterate over them just fine but there’s no
guarantee that iteration returns the dictionary’s elements in any particular order. But as of Python version \>=3.7,
dictionaries are ordered. However, it’s frequently useful to get a *sorted representation* of a dictionary to put the
dictionary’s items into an arbitrary order based on their key, value, or some other derived property. Suppose you have a
dictionary xs with the following key/value pairs:

```shell
xs = {'a': 4, 'c': 2, 'b': 3, 'd': 1}
```

To get a sorted list of the key/value pairs in this dictionary, you could use the dictionary’s items() method and then
sort the resulting sequence in a second pass:

```shell
>>> sorted(xs.items())
[('a', 4), ('b', 3), ('c', 2), ('d', 1)]
```

The key/value tuples are ordered using Python’s standard lexico- graphical ordering for comparing sequences. Let’s say
you wanted to get a sorted representation of a dictionary based on its *values*. To get this result you could use the
following key function which returns the value of each key/value pair by looking up the second element in the tuple:

```shell
>>> sorted(xs.items(), key=lambda x: x[1])
[('d', 1), ('c', 2), ('b', 3), ('a', 4)]
```

# Different type of Dictionary

## 1. OrderedDict

In the previous section, we said that the previous versioned (\<3.7) dictionary is an unordered data structure. But
sometimes it becomes necessary things. So OrderedDict can solve this problem. OrderedDict is a subclass of dictionary
class that maintains the elements in the inserted order.

```python
from collections import OrderedDict

food = OrderedDict(
    a="apple",
    b="boro apple",
    c="choto apple"
)

print(food)
```

**Output:**
```
OrderedDict([('a', 'apple'), ('b', 'boro apple'), ('c', 'choto apple')])
```

Look, here output is as like a List of tuple. But, as it's a subclass of Dictionary, you can iterate OrderedDict same as
normal dictionary.

### Methods

popitem(last): It returns and removes a (key,value) pair. The pairs are in Last In First Out order if last is True else
it would be in First In First Out order if last is False.

```python 
food = OrderedDict(
    a="apple",
    b="boro apple",
    c="choto apple"
)

print(food.popitem(last=True))
```

**Output:**
```python
('c',"choto apple")
```

**move_to_end(key,last):** It moves the given key to the end of the ordered dictionary. It moves to the right end if the last is true else it moves to the beginning. It raises KeyError when the given is not present in the orderedDict.

```python
food = OrderedDict(
    a="apple",
    b="boro apple",
    c="choto apple"
)

food.move_to_end('a', True)
print(food)
``` 

**Output:**
```
OrderedDict([('b', 'boro apple'), ('c', 'choto apple'),('a', 'apple')])
```

## 2. DefaultDict

Dictionary in python generates an error when we try to access the key which is not present in the dictionary. This
error(KeyError) stops the execution of the program.DefaultDict is the best solution for the above problem.

Unlike a normal dictionary, defaultdict does not raise KeyError. It provides a default value for the key which is not
present in the dictionary. A function should be passed which should return a string to determine when the key is not
present in the dictionary. The function which is to be passed is called default\_factory.

```python
from collections import defaultdict


def default_value():
    return "Not exist"


new_dic = defaultdict(default_value,
                      a='apple',
                      b='boro apple')
print(new_dic['c'])
```

**Output:**
```
Not exist
```

Also, you can pass lambda function.

```python
from collections import defaultdict

new_dic = defaultdict(lambda: "Not exist",
                      a='apple',
                      b='boro apple')
``` 

## 3. ChainMap

It is a container that combines multiple dictionaries into a single unit. It is present in the collections library. You
can iterate ChainMap as like normal dict with .items(), .keys(), .values() method.

```python
from collections import ChainMap

a = {1: "Mina", 2: "Raju"}
b = {3: "Mithu", 4: "Rita"}
c = ChainMap(a, b)

print(c)

c = c.new_child({5: 'Jin'})
print(F"Added new dict: {c.maps}")

```  

### Methods

maps() : It returns the corresponding keys along with values of corresponding dictionaries. new\_child(m) : It adds a
new dictionary to the beginning of the [ChainMap.It](http://chainmap.it/) takes an optional parameter which when given
gets added otherwise empty dictionary gets added to the beginning of the ChainMap. reversed() : It reverses the order of
dictionaries in the ChainMap.

## 4. Counter

It is a subclass of the dictionary class. It stores the count of each element present along with the element.

```python
from collections import Counter

chaldal = ['dim', 'malta', 'dim', 'kola', 'dim']
counter_dict = Counter(chaldal)
print(counter_dict)
``` 

**Output:**
```
Counter({'dim': 3, 'malta': 1, 'kola': 1})
```

### Methods

elements() : It returns an iterator over elements repeating the number of counts of each. It does not count for
count\<=0. most\_common() : It returns the most common elements along with their counts. It takes optional parameter m
which determines how many to number of items to return from highest count to lowest count. If m is not given then all
are returned.

# Bonus ❤️

Once I was refactoring my code where there was a dictionary as constant. Some of the keys I had to rename & remove.
After doing this there were lots of errors 🎋😭😭\!\! Why? Everywhere in the code, the dictionary was accessed by index
like **_dictionary['key']_** or **_dictionary.get('key', 'default_value')_**. So I missed some to modify as my IDE was
not giving any error message even when running the project until that malicious code was running. Most dangerously where
.get() method used was not giving any error rather than working fine though with wrong values. So, how can we solve this
scalability problem? If we can access the keys with a dot instead of the index then the IDE will raise an error before
running the code. Then we can easily take action accordingly.

## SimpleNamespace

Python's SimpleNamespace class provides an easy way for a programmer to create an object to store values as attributes
without creating their own (almost empty) class. Unlike object, with SimpleNamespace you can add and remove attributes.
SimpleNamespace is basically just a nice facade on top of a dictionary. It allows you to use properties instead of index
keys. This is nice as it is super flexible and easy to manipulate.

```python
from types import SimpleNamespace

MINA_CARTOON = SimpleNamespace(
    MINA="Mithu, tmi rajur bandhobi k chokh marla kn!",
    RAJU='Mithu, tmi ki Masud er moto r valo hoba na?'
)

print(MINA_CARTOON.RAJU)

for key, value in MINA_CARTOON.__dict__.items():
    print(key)

print(MINA_CARTOON.__dict__)

```

**Output:**
```
Mithu, tmi ki Masud er moto r valo hoba na?
mina
raju
{'mina': 'Mithu, tmi rajur bandhobi k chokh marla kn!', 'raju': 'Mithu, tmi ki Masud er moto r valo hoba na?'}
```

The downside of that flexibility is that it doesn't provide any structure. There is nothing to stop someone from calling SimpleNamespace(x=ax, y=ay) (and del a.z at some point later). If this instance gets passed to your function, the exception occurs when you try to access the field.

In contrast, namedtuple lets you create a structured type. The type will have a name and it will know what fields it is
supposed to have. You won't be able to make an instance without each of those fields and they can't be removed later.
Additionally, the instance is immutable, so you will know that the value in a.x will always be the same.

It's up to you to decide if you need the flexibility that SimpleNamespace gives you, or if you prefer to have the
structure and guarantees provided by namedtuple.

---

😆 **A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don't touch!** 😆

# Reference

* Python Tricks \- Dan Bader
* [https://realpython.com/python-namedtuple/](https://realpython.com/python-namedtuple/)
* [https://www.freecodecamp.org/news/python-example/](https://www.freecodecamp.org/news/python-example/)
* Learn python the hard way \- Zed Shaw
* [https://softwareengineering.stackexchange.com/questions/349740/in-python-3-4-why-should-i-use-namedtuple-over-simplenamespace-when-not-using](https://softwareengineering.stackexchange.com/questions/349740/in-python-3-4-why-should-i-use-namedtuple-over-simplenamespace-when-not-using)

