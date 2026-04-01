const pythonProblems = [
{
  title: "Even or Odd",
  description: "Write a program to check whether a number is even or odd.",
  solution: `num = 5

if num % 2 == 0:
    print("Even")
else:
    print("Odd")`,
  explanation: [
    "Take a number",
    "Use modulus operator",
    "Check if remainder is 0",
    "Print Even or Odd"
  ],
  output: "Odd"
},

{
  title: "Factorial",
  description: "Write a program to find factorial of a number.",
  solution: `num = 5
fact = 1

for i in range(1, num + 1):
    fact *= i

print(fact)`,
  explanation: [
    "Initialize number",
    "Use loop from 1 to n",
    "Multiply each number",
    "Print result"
  ],
  output: "120"
},

{
  title: "Factorial (Using Function)",
  description: "Write a program to find factorial using a function.",
  solution: `def factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

print(factorial(5))`,
  explanation: [
    "Define function",
    "Use loop inside function",
    "Return result",
    "Call function"
  ],
  output: "120"
},

{
  title: "Prime Number Check (Logic 1)",
  description: "Check whether a number is prime.",
  solution: `num = 7
flag = True

for i in range(2, num):
    if num % i == 0:
        flag = False
        break

if flag and num > 1:
    print("Prime")
else:
    print("Not Prime")`,
  explanation: [
    "Loop from 2 to n-1",
    "Check divisibility",
    "Set flag if divisible",
    "Print result"
  ],
  output: "Prime"
},

{
  title: "Prime Number Check (Logic 2)",
  description: "Check prime using square root optimization.",
  solution: `num = 7
flag = True

for i in range(2, int(num**0.5) + 1):
    if num % i == 0:
        flag = False
        break

if flag and num > 1:
    print("Prime")
else:
    print("Not Prime")`,
  explanation: [
    "Loop till square root",
    "Check divisibility",
    "Reduce iterations",
    "Print result"
  ],
  output: "Prime"
},

{
  title: "Largest Among Numbers",
  description: "Write a program to find the largest among given numbers.",
  solution: `nums = [10, 25, 7]

largest = nums[0]

for num in nums:
    if num > largest:
        largest = num

print(largest)`,
  explanation: [
    "Store numbers in list",
    "Assume first as largest",
    "Compare each element",
    "Update largest",
    "Print result"
  ],
  output: "25"
},

{
  title: "Swap Two Numbers",
  description: "Swap two numbers using third variable.",
  solution: `a = 5
b = 10

temp = a
a = b
b = temp

print(a, b)`,
  explanation: [
    "Store a in temp",
    "Assign b to a",
    "Assign temp to b",
    "Print swapped values"
  ],
  output: "10 5"
},

{
  title: "Swap Two Numbers (Python Way)",
  description: "Swap two numbers using Python's tuple method.",
  solution: `a = 5
b = 10

a, b = b, a

print(a, b)`,
  explanation: [
    "Use tuple unpacking",
    "Swap in one line",
    "Print result"
  ],
  output: "10 5"
},

{
  title: "Swap Without Third Variable",
  description: "Swap two numbers without using third variable.",
  solution: `a = 5
b = 10

a = a + b
b = a - b
a = a - b

print(a, b)`,
  explanation: [
    "Add both numbers",
    "Subtract to get values",
    "Swap without temp",
    "Print result"
  ],
  output: "10 5"
},

{
  title: "Fibonacci Series",
  description: "Write a program to print Fibonacci series.",
  solution: `n = 5

a, b = 0, 1

for i in range(n):
    print(a, end=" ")
    a, b = b, a + b`,
  explanation: [
    "Initialize first two numbers",
    "Loop n times",
    "Print current number",
    "Update values"
  ],
  output: "0 1 1 2 3"
},

{
  title: "Palindrome String (Logic 1)",
  description: "Check whether a string is palindrome using reverse slicing.",
  solution: `str = "madam"

if str == str[::-1]:
    print("Palindrome")
else:
    print("Not Palindrome")`,
  explanation: [
    "Take a string",
    "Reverse using slicing",
    "Compare original and reversed",
    "Print result"
  ],
  output: "Palindrome"
},

{
  title: "Palindrome String (Logic 2)",
  description: "Check palindrome using loop.",
  solution: `str = "madam"
rev = ""

for ch in str:
    rev = ch + rev

if str == rev:
    print("Palindrome")
else:
    print("Not Palindrome")`,
  explanation: [
    "Traverse string",
    "Build reverse string",
    "Compare both",
    "Print result"
  ],
  output: "Palindrome"
},

{
  title: "Palindrome Number",
  description: "Check whether a number is palindrome.",
  solution: `num = 121
temp = num
rev = 0

while num > 0:
    digit = num % 10
    rev = rev * 10 + digit
    num //= 10

if temp == rev:
    print("Palindrome")
else:
    print("Not Palindrome")`,
  explanation: [
    "Store original number",
    "Reverse digits",
    "Compare reversed with original",
    "Print result"
  ],
  output: "Palindrome"
},

{
  title: "Pascal Triangle",
  description: "Print Pascal triangle.",
  solution: `n = 5

for i in range(n):
    num = 1
    for j in range(i + 1):
        print(num, end=" ")
        num = num * (i - j) // (j + 1)
    print()`,
  explanation: [
    "Use outer loop for rows",
    "Initialize num as 1",
    "Use formula to generate next value",
    "Print triangle"
  ],
  output: "Pascal Triangle printed"
},

{
  title: "Leap Year",
  description: "Check whether a year is leap year.",
  solution: `year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("Leap Year")
else:
    print("Not Leap Year")`,
  explanation: [
    "Check divisible by 4",
    "Exclude divisible by 100",
    "Include divisible by 400",
    "Print result"
  ],
  output: "Leap Year"
},

{
  title: "Perfect Number",
  description: "Check whether a number is perfect.",
  solution: `num = 6
sum = 0

for i in range(1, num):
    if num % i == 0:
        sum += i

if sum == num:
    print("Perfect")
else:
    print("Not Perfect")`,
  explanation: [
    "Find divisors",
    "Add divisors",
    "Compare with original",
    "Print result"
  ],
  output: "Perfect"
},

{
  title: "Armstrong Number",
  description: "Check whether a number is Armstrong.",
  solution: `num = 153
temp = num
sum = 0

while num > 0:
    digit = num % 10
    sum += digit ** 3
    num //= 10

if temp == sum:
    print("Armstrong")
else:
    print("Not Armstrong")`,
  explanation: [
    "Extract digits",
    "Cube each digit",
    "Add them",
    "Compare with original",
    "Print result"
  ],
  output: "Armstrong"
},

{
  title: "Strong Number",
  description: "Check whether a number is strong.",
  solution: `num = 145
temp = num
sum = 0

def fact(n):
    f = 1
    for i in range(1, n + 1):
        f *= i
    return f

while num > 0:
    digit = num % 10
    sum += fact(digit)
    num //= 10

if sum == temp:
    print("Strong")
else:
    print("Not Strong")`,
  explanation: [
    "Extract digits",
    "Find factorial of each digit",
    "Add factorials",
    "Compare with original",
    "Print result"
  ],
  output: "Strong"
},

{
  title: "Neon Number",
  description: "Check whether a number is neon.",
  solution: `num = 9
sq = num * num
sum = 0

while sq > 0:
    digit = sq % 10
    sum += digit
    sq //= 10

if sum == num:
    print("Neon")
else:
    print("Not Neon")`,
  explanation: [
    "Square the number",
    "Sum digits of square",
    "Compare with original",
    "Print result"
  ],
  output: "Neon"
},

{
  title: "Automorphic Number",
  description: "Check whether a number is automorphic.",
  solution: `num = 25
sq = num * num

if str(sq).endswith(str(num)):
    print("Automorphic")
else:
    print("Not Automorphic")`,
  explanation: [
    "Find square",
    "Convert to string",
    "Check ending digits",
    "Print result"
  ],
  output: "Automorphic"
},

{
  title: "Spy Number",
  description: "Check whether a number is spy number.",
  solution: `num = 1124
sum = 0
product = 1

while num > 0:
    digit = num % 10
    sum += digit
    product *= digit
    num //= 10

if sum == product:
    print("Spy")
else:
    print("Not Spy")`,
  explanation: [
    "Extract digits",
    "Calculate sum and product",
    "Compare both",
    "Print result"
  ],
  output: "Spy"
},

{
  title: "Happy Number",
  description: "Check whether a number is happy.",
  solution: `num = 19

def getSum(n):
    sum = 0
    while n > 0:
        digit = n % 10
        sum += digit * digit
        n //= 10
    return sum

while num != 1 and num != 4:
    num = getSum(num)

if num == 1:
    print("Happy")
else:
    print("Not Happy")`,
  explanation: [
    "Replace number with sum of squares",
    "Repeat process",
    "If reaches 1 → happy",
    "If reaches 4 → not happy"
  ],
  output: "Happy"
},

{
  title: "Sunny Number",
  description: "Check whether a number is sunny.",
  solution: `num = 8

import math

if math.isqrt(num + 1) ** 2 == num + 1:
    print("Sunny")
else:
    print("Not Sunny")`,
  explanation: [
    "Add 1 to number",
    "Check perfect square",
    "Use square root",
    "Print result"
  ],
  output: "Sunny"
},

{
  title: "Fascinating Number",
  description: "Check whether a number is fascinating.",
  solution: `num = 192

s = str(num) + str(num*2) + str(num*3)

if len(s) == 9 and set(s) == set("123456789"):
    print("Fascinating")
else:
    print("Not Fascinating")`,
  explanation: [
    "Concatenate num, 2*num, 3*num",
    "Check length = 9",
    "Check digits 1 to 9",
    "Print result"
  ],
  output: "Fascinating"
},

{
  title: "Disarium Number",
  description: "Check whether a number is Disarium.",
  solution: `num = 135
temp = num
sum = 0

digits = len(str(num))

while num > 0:
    digit = num % 10
    sum += digit ** digits
    digits -= 1
    num //= 10

if sum == temp:
    print("Disarium")
else:
    print("Not Disarium")`,
  explanation: [
    "Count digits",
    "Raise digit to position power",
    "Add values",
    "Compare with original",
    "Print result"
  ],
  output: "Disarium"
},

{
  title: "Pronic Number",
  description: "Check whether a number is pronic.",
  solution: `num = 6
flag = False

for i in range(num):
    if i * (i + 1) == num:
        flag = True
        break

if flag:
    print("Pronic")
else:
    print("Not Pronic")`,
  explanation: [
    "Check form n*(n+1)",
    "Loop through values",
    "Match condition",
    "Print result"
  ],
  output: "Pronic"
},

{
  title: "Trimorphic Number",
  description: "Check whether a number is trimorphic.",
  solution: `num = 4
cube = num ** 3

if str(cube).endswith(str(num)):
    print("Trimorphic")
else:
    print("Not Trimorphic")`,
  explanation: [
    "Find cube",
    "Check ending digits",
    "Compare with original",
    "Print result"
  ],
  output: "Trimorphic"
},

{
  title: "Evil or Odious Number",
  description: "Check whether a number is evil or odious.",
  solution: `num = 5

binary = bin(num)[2:]
ones = binary.count('1')

if ones % 2 == 0:
    print("Evil")
else:
    print("Odious")`,
  explanation: [
    "Convert to binary",
    "Count number of 1s",
    "Check parity",
    "Print result"
  ],
  output: "Odious"
},

{
  title: "Factorial of Each Number (1 to n)",
  description: "Print factorial of numbers from 1 to n.",
  solution: `n = 5

def fact(x):
    f = 1
    for i in range(1, x + 1):
        f *= i
    return f

for i in range(1, n + 1):
    print(fact(i), end=" ")`,
  explanation: [
    "Define factorial function",
    "Loop from 1 to n",
    "Compute factorial",
    "Print results"
  ],
  output: "1 2 6 24 120"
},

{
  title: "All Prime Numbers (1 to n)",
  description: "Print all prime numbers from 1 to n.",
  solution: `n = 10

for num in range(2, n + 1):
    flag = True
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            flag = False
            break
    if flag:
        print(num, end=" ")`,
  explanation: [
    "Loop from 2 to n",
    "Check divisibility",
    "Use square root optimization",
    "Print prime numbers"
  ],
  output: "2 3 5 7"
},

{
  title: "All Automorphic Numbers (1 to n)",
  description: "Print all automorphic numbers from 1 to n.",
  solution: `n = 100

for num in range(1, n + 1):
    sq = num * num
    if str(sq).endswith(str(num)):
        print(num, end=" ")`,
  explanation: [
    "Loop from 1 to n",
    "Find square",
    "Check ending digits",
    "Print automorphic numbers"
  ],
  output: "1 5 6 25 76"
},

{
  title: "All Spy Numbers (1 to n)",
  description: "Print all spy numbers between 1 to n.",
  solution: `n = 200

for num in range(1, n + 1):
    temp = num
    s = 0
    p = 1

    while temp > 0:
        digit = temp % 10
        s += digit
        p *= digit
        temp //= 10

    if s == p:
        print(num, end=" ")`,
  explanation: [
    "Loop from 1 to n",
    "Find sum and product of digits",
    "Compare both",
    "Print spy numbers"
  ],
  output: "Spy numbers printed"
},

{
  title: "All Happy Numbers (1 to n)",
  description: "Print all happy numbers between 1 to n.",
  solution: `def getSum(num):
    s = 0
    while num > 0:
        digit = num % 10
        s += digit * digit
        num //= 10
    return s

n = 100

for num in range(1, n + 1):
    temp = num
    while temp != 1 and temp != 4:
        temp = getSum(temp)

    if temp == 1:
        print(num, end=" ")`,
  explanation: [
    "Define sum of squares function",
    "Loop from 1 to n",
    "Repeat process",
    "Check if reaches 1",
    "Print happy numbers"
  ],
  output: "Happy numbers printed"
},

{
  title: "All Sunny Numbers (1 to n)",
  description: "Print all sunny numbers between 1 to n.",
  solution: `import math

n = 100

for num in range(1, n + 1):
    if math.isqrt(num + 1) ** 2 == num + 1:
        print(num, end=" ")`,
  explanation: [
    "Loop from 1 to n",
    "Add 1 to number",
    "Check perfect square",
    "Print sunny numbers"
  ],
  output: "Sunny numbers printed"
},

{
  title: "All Fascinating Numbers (1 to n)",
  description: "Print all fascinating numbers between 1 to n.",
  solution: `n = 500

for num in range(100, n + 1):
    s = str(num) + str(num*2) + str(num*3)

    if len(s) == 9 and set(s) == set("123456789"):
        print(num, end=" ")`,
  explanation: [
    "Start from 100",
    "Concatenate num, 2*num, 3*num",
    "Check digits 1 to 9",
    "Print fascinating numbers"
  ],
  output: "Fascinating numbers printed"
},

{
  title: "All Disarium Numbers (1 to n)",
  description: "Print all disarium numbers between 1 to n.",
  solution: `n = 200

for num in range(1, n + 1):
    temp = num
    digits = len(str(num))
    s = 0

    while temp > 0:
        digit = temp % 10
        s += digit ** digits
        digits -= 1
        temp //= 10

    if s == num:
        print(num, end=" ")`,
  explanation: [
    "Loop from 1 to n",
    "Count digits",
    "Raise digit to power",
    "Compare with number",
    "Print disarium numbers"
  ],
  output: "Disarium numbers printed"
},

{
  title: "All Pronic Numbers (1 to n)",
  description: "Print all pronic numbers between 1 to n.",
  solution: `n = 100

for num in range(n + 1):
    for i in range(num):
        if i * (i + 1) == num:
            print(num, end=" ")
            break`,
  explanation: [
    "Loop through numbers",
    "Check form n*(n+1)",
    "Break when found",
    "Print pronic numbers"
  ],
  output: "Pronic numbers printed"
},

{
  title: "All Trimorphic Numbers (1 to n)",
  description: "Print all trimorphic numbers between 1 to n.",
  solution: `n = 200

for num in range(1, n + 1):
    cube = num ** 3
    if str(cube).endswith(str(num)):
        print(num, end=" ")`,
  explanation: [
    "Loop from 1 to n",
    "Find cube",
    "Check ending digits",
    "Print trimorphic numbers"
  ],
  output: "Trimorphic numbers printed"
},

{
  title: "All Evil Numbers (1 to n)",
  description: "Print all evil numbers between 1 to n.",
  solution: `n = 100

for num in range(1, n + 1):
    binary = bin(num)[2:]
    if binary.count('1') % 2 == 0:
        print(num, end=" ")`,
  explanation: [
    "Convert number to binary",
    "Count number of 1s",
    "Check even count",
    "Print evil numbers"
  ],
  output: "Evil numbers printed"
},

{
  title: "Floyd Triangle",
  description: "Print Floyd triangle pattern.",
  solution: `n = 5
num = 1

for i in range(1, n + 1):
    for j in range(i):
        print(num, end=" ")
        num += 1
    print()`,
  explanation: [
    "Initialize number",
    "Use nested loops",
    "Print increasing numbers",
    "Form triangle pattern"
  ],
  output: "Floyd triangle printed"
},

{
  title: "Reverse Number",
  description: "Reverse a given number.",
  solution: `num = 1234
rev = 0

while num > 0:
    digit = num % 10
    rev = rev * 10 + digit
    num //= 10

print(rev)`,
  explanation: [
    "Extract digits",
    "Build reverse number",
    "Use loop",
    "Print result"
  ],
  output: "4321"
},

{
  title: "Sum of Digits",
  description: "Find sum of digits of a number.",
  solution: `num = 1234
s = 0

while num > 0:
    digit = num % 10
    s += digit
    num //= 10

print(s)`,
  explanation: [
    "Extract digits",
    "Add digits",
    "Repeat process",
    "Print sum"
  ],
  output: "10"
},

{
  title: "Power of a Number",
  description: "Find power of a number.",
  solution: `base = 2
exp = 3
result = 1

for i in range(exp):
    result *= base

print(result)`,
  explanation: [
    "Initialize result",
    "Multiply base exp times",
    "Use loop",
    "Print result"
  ],
  output: "8"
},

{
  title: "Count Digits in a Number",
  description: "Count number of digits in a number.",
  solution: `num = 12345
count = 0

while num > 0:
    count += 1
    num //= 10

print(count)`,
  explanation: [
    "Use loop",
    "Divide number by 10",
    "Increment count",
    "Print result"
  ],
  output: "5"
},

{
  title: "Random Number Generator",
  description: "Generate a random number.",
  solution: `import random

print(random.randint(1, 100))`,
  explanation: [
    "Import random module",
    "Use randint function",
    "Generate number in range",
    "Print result"
  ],
  output: "Random number between 1 and 100"
},

{
  title: "Celsius to Fahrenheit",
  description: "Convert Celsius to Fahrenheit.",
  solution: `c = 25

f = (c * 9/5) + 32

print(f)`,
  explanation: [
    "Use conversion formula",
    "Multiply by 9/5",
    "Add 32",
    "Print result"
  ],
  output: "77.0"
},

{
  title: "Fahrenheit to Celsius",
  description: "Convert Fahrenheit to Celsius.",
  solution: `f = 77

c = (f - 32) * 5/9

print(c)`,
  explanation: [
    "Subtract 32",
    "Multiply by 5/9",
    "Print result"
  ],
  output: "25.0"
},

{
  title: "Anagram Check",
  description: "Check whether two strings are anagram.",
  solution: `s1 = "listen"
s2 = "silent"

if sorted(s1) == sorted(s2):
    print("Anagram")
else:
    print("Not Anagram")`,
  explanation: [
    "Sort both strings",
    "Compare sorted values",
    "Check equality",
    "Print result"
  ],
  output: "Anagram"
},

{
  title: "Super Digit",
  description: "Find super digit of a number.",
  solution: `num = "9875"

while len(num) > 1:
    s = sum(int(d) for d in num)
    num = str(s)

print(num)`,
  explanation: [
    "Convert number to string",
    "Sum digits",
    "Repeat until single digit",
    "Print result"
  ],
  output: "2"
},

{
  title: "LCM (Least Common Multiple)",
  description: "Find LCM of two numbers.",
  solution: `a = 12
b = 15

max_val = max(a, b)

while True:
    if max_val % a == 0 and max_val % b == 0:
        print(max_val)
        break
    max_val += 1`,
  explanation: [
    "Start from max of numbers",
    "Check divisibility",
    "Find common multiple",
    "Print result"
  ],
  output: "60"
},

{
  title: "HCF / GCD",
  description: "Find HCF or GCD of two numbers.",
  solution: `a = 12
b = 15

while b != 0:
    a, b = b, a % b

print(a)`,
  explanation: [
    "Use Euclidean algorithm",
    "Swap values",
    "Repeat until b is 0",
    "Print result"
  ],
  output: "3"
},

{
  title: "Speed Calculation",
  description: "Calculate speed using distance and time.",
  solution: `distance = 100
time = 2

speed = distance / time

print(speed)`,
  explanation: [
    "Take distance and time",
    "Divide distance by time",
    "Print speed"
  ],
  output: "50.0"
},

{
  title: "Simple Interest",
  description: "Calculate simple interest.",
  solution: `p = 1000
r = 5
t = 2

si = (p * r * t) / 100

print(si)`,
  explanation: [
    "Take principal, rate, time",
    "Use formula (P*R*T)/100",
    "Calculate interest",
    "Print result"
  ],
  output: "100.0"
},

{
  title: "Ohm's Law (I = V/R)",
  description: "Calculate current using Ohm's Law.",
  solution: `v = 10
r = 2

i = v / r

print(i)`,
  explanation: [
    "Take voltage and resistance",
    "Use formula I = V/R",
    "Calculate current",
    "Print result"
  ],
  output: "5.0"
},

{
  title: "Circumference of Circle",
  description: "Find circumference of a circle.",
  solution: `import math

r = 7

c = 2 * math.pi * r

print(round(c, 2))`,
  explanation: [
    "Take radius",
    "Use formula 2πr",
    "Use math.pi",
    "Print result"
  ],
  output: "43.98"
},

{
  title: "Area of Circle",
  description: "Find area of a circle.",
  solution: `import math

r = 7

area = math.pi * r * r

print(round(area, 2))`,
  explanation: [
    "Take radius",
    "Use formula πr²",
    "Use math.pi",
    "Print result"
  ],
  output: "153.94"
},

{
  title: "Area of Triangle",
  description: "Find area of triangle.",
  solution: `base = 10
height = 5

area = 0.5 * base * height

print(area)`,
  explanation: [
    "Take base and height",
    "Use formula 1/2 * base * height",
    "Calculate area",
    "Print result"
  ],
  output: "25.0"
},

{
  title: "Area of Equilateral Triangle",
  description: "Find area of equilateral triangle.",
  solution: `import math

a = 4

area = (math.sqrt(3) / 4) * a * a

print(round(area, 2))`,
  explanation: [
    "Take side length",
    "Use formula √3/4 * a²",
    "Use math.sqrt",
    "Print result"
  ],
  output: "6.93"
},

{
  title: "Area of Rectangle",
  description: "Find area of rectangle.",
  solution: `length = 10
width = 5

area = length * width

print(area)`,
  explanation: [
    "Take length and width",
    "Multiply both",
    "Print result"
  ],
  output: "50"
},

{
  title: "Area of Square",
  description: "Find area of a square.",
  solution: `side = 5

area = side * side

print(area)`,
  explanation: [
    "Take side of square",
    "Use formula side²",
    "Print result"
  ],
  output: "25"
},

{
  title: "Area of Rhombus",
  description: "Find area of a rhombus.",
  solution: `d1 = 10
d2 = 8

area = (d1 * d2) / 2

print(area)`,
  explanation: [
    "Take diagonals",
    "Use formula (d1*d2)/2",
    "Print result"
  ],
  output: "40.0"
},

{
  title: "Area of Pentagon",
  description: "Find area of a regular pentagon.",
  solution: `import math

side = 5

area = (5 * side * side) / (4 * math.tan(math.pi/5))

print(round(area, 2))`,
  explanation: [
    "Use regular polygon formula",
    "Use math.tan and pi",
    "Calculate area",
    "Print result"
  ],
  output: "43.01"
},

{
  title: "Area of Hexagon",
  description: "Find area of a regular hexagon.",
  solution: `import math

side = 5

area = (3 * math.sqrt(3) * side * side) / 2

print(round(area, 2))`,
  explanation: [
    "Use formula (3√3/2)*a²",
    "Use math.sqrt",
    "Print result"
  ],
  output: "64.95"
},

{
  title: "Area of Heptagon",
  description: "Find area of a regular heptagon.",
  solution: `import math

side = 5

area = (7 * side * side) / (4 * math.tan(math.pi/7))

print(round(area, 2))`,
  explanation: [
    "Use regular polygon formula",
    "Use math.tan",
    "Print result"
  ],
  output: "90.85"
},

{
  title: "Area of Octagon",
  description: "Find area of a regular octagon.",
  solution: `import math

side = 5

area = 2 * (1 + math.sqrt(2)) * side * side

print(round(area, 2))`,
  explanation: [
    "Use formula 2(1+√2)a²",
    "Use math.sqrt",
    "Print result"
  ],
  output: "120.71"
},

{
  title: "Area of Trapezoid",
  description: "Find area of a trapezoid.",
  solution: `a = 10
b = 6
h = 5

area = ((a + b) / 2) * h

print(area)`,
  explanation: [
    "Take parallel sides",
    "Use formula (a+b)/2 * h",
    "Print result"
  ],
  output: "40.0"
},

{
  title: "Volume of Sphere",
  description: "Find volume of a sphere.",
  solution: `import math

r = 3

volume = (4/3) * math.pi * r**3

print(round(volume, 2))`,
  explanation: [
    "Take radius",
    "Use formula (4/3)πr³",
    "Use math.pi",
    "Print result"
  ],
  output: "113.10"
},

{
  title: "Volume of Hemisphere",
  description: "Find volume of a hemisphere.",
  solution: `import math

r = 3

volume = (2/3) * math.pi * r**3

print(round(volume, 2))`,
  explanation: [
    "Take radius",
    "Use formula (2/3)πr³",
    "Print result"
  ],
  output: "56.55"
},

{
  title: "Volume of Cone",
  description: "Find volume of a cone.",
  solution: `import math

r = 3
h = 5

volume = (1/3) * math.pi * r**2 * h

print(round(volume, 2))`,
  explanation: [
    "Take radius and height",
    "Use formula (1/3)πr²h",
    "Print result"
  ],
  output: "47.12"
},

{
  title: "Volume of Cuboid",
  description: "Find volume of a cuboid.",
  solution: `l = 5
w = 4
h = 3

volume = l * w * h

print(volume)`,
  explanation: [
    "Take length, width, height",
    "Multiply all values",
    "Print result"
  ],
  output: "60"
},

{
  title: "Hello Python",
  description: "Write a program to print Hello Python.",
  solution: `print("Hello Python")`,
  explanation: [
    "Use print function",
    "Pass string inside quotes"
  ],
  output: "Hello Python"
},

{
  title: "If Statement (Demo)",
  description: "Demonstrate simple if statement.",
  solution: `num = 10

if num > 0:
    print("Positive Number")`,
  explanation: [
    "Assign value to variable",
    "Use if condition",
    "Check if number is positive",
    "Print result"
  ],
  output: "Positive Number"
},

{
  title: "If-Else (Demo 1)",
  description: "Check whether a number is positive or negative.",
  solution: `num = -5

if num > 0:
    print("Positive")
else:
    print("Negative")`,
  explanation: [
    "Check condition",
    "If true → Positive",
    "Else → Negative",
    "Print result"
  ],
  output: "Negative"
},

{
  title: "If-Else (Demo 2)",
  description: "Check whether a number is even or odd.",
  solution: `num = 4

if num % 2 == 0:
    print("Even")
else:
    print("Odd")`,
  explanation: [
    "Use modulus operator",
    "Check remainder",
    "Print Even or Odd"
  ],
  output: "Even"
},

{
  title: "If-Else with OR Operator",
  description: "Check if a number is divisible by 3 or 5.",
  solution: `num = 9

if num % 3 == 0 or num % 5 == 0:
    print("Divisible")
else:
    print("Not Divisible")`,
  explanation: [
    "Use OR operator",
    "Check both conditions",
    "Print result"
  ],
  output: "Divisible"
},

{
  title: "If-Else with AND Operator (Voting Age)",
  description: "Check if a person is eligible for voting.",
  solution: `age = 20

if age >= 18 and age <= 100:
    print("Eligible to Vote")
else:
    print("Not Eligible")`,
  explanation: [
    "Use AND operator",
    "Check age range",
    "Print eligibility"
  ],
  output: "Eligible to Vote"
},

{
  title: "If-Elif (Demo 1)",
  description: "Check whether a number is positive, negative or zero.",
  solution: `num = 0

if num > 0:
    print("Positive")
elif num < 0:
    print("Negative")
else:
    print("Zero")`,
  explanation: [
    "Check multiple conditions",
    "Use elif for middle case",
    "Print correct category"
  ],
  output: "Zero"
},

{
  title: "If-Elif (Demo 2)",
  description: "Check grade based on marks.",
  solution: `marks = 75

if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 50:
    print("Grade C")
else:
    print("Fail")`,
  explanation: [
    "Check multiple ranges",
    "Use elif conditions",
    "Print corresponding grade"
  ],
  output: "Grade B"
},

{
  title: "Nested If",
  description: "Check if a number is positive and even.",
  solution: `num = 8

if num > 0:
    if num % 2 == 0:
        print("Positive Even")
    else:
        print("Positive Odd")
else:
    print("Negative Number")`,
  explanation: [
    "Use outer if for positivity",
    "Inner if for even/odd",
    "Print result"
  ],
  output: "Positive Even"
},

{
  title: "Switch Case Alternative (Dictionary)",
  description: "Demonstrate switch case using dictionary.",
  solution: `def switch_demo(x):
    return {
        1: "One",
        2: "Two",
        3: "Three"
    }.get(x, "Invalid")

print(switch_demo(2))`,
  explanation: [
    "Use dictionary mapping",
    "Use get() method",
    "Return value",
    "Print result"
  ],
  output: "Two"
},

{
  title: "For Loop - Accessing Elements",
  description: "Access elements of a list using for loop.",
  solution: `nums = [1, 2, 3, 4]

for num in nums:
    print(num, end=" ")`,
  explanation: [
    "Define list",
    "Loop through elements",
    "Print each element"
  ],
  output: "1 2 3 4"
},

{
  title: "For Loop - Characters in String",
  description: "Print each character of a string.",
  solution: `text = "Python"

for ch in text:
    print(ch, end=" ")`,
  explanation: [
    "Define string",
    "Loop through characters",
    "Print each character"
  ],
  output: "P y t h o n"
},

{
  title: "For Loop - Square of Numbers",
  description: "Print square of numbers from 1 to 5.",
  solution: `for i in range(1, 6):
    print(i*i, end=" ")`,
  explanation: [
    "Use range",
    "Square each number",
    "Print result"
  ],
  output: "1 4 9 16 25"
},

{
  title: "For Loop - Even Numbers",
  description: "Print even numbers from 1 to 10.",
  solution: `for i in range(1, 11):
    if i % 2 == 0:
        print(i, end=" ")`,
  explanation: [
    "Loop from 1 to 10",
    "Check even condition",
    "Print numbers"
  ],
  output: "2 4 6 8 10"
},

{
  title: "For Loop - Multiplication Table",
  description: "Print multiplication table of a number.",
  solution: `num = 5

for i in range(1, 11):
    print(num * i, end=" ")`,
  explanation: [
    "Take a number",
    "Loop from 1 to 10",
    "Multiply number with i",
    "Print result"
  ],
  output: "5 10 15 20 25 30 35 40 45 50"
},

{
  title: "For-Else Demo",
  description: "Demonstrate for-else in Python.",
  solution: `for i in range(5):
    print(i, end=" ")
else:
    print("Done")`,
  explanation: [
    "Loop runs normally",
    "Else executes after loop ends",
    "Print result"
  ],
  output: "0 1 2 3 4 Done"
},

{
  title: "Range Function (Demo 1)",
  description: "Use range with single argument.",
  solution: `for i in range(5):
    print(i, end=" ")`,
  explanation: [
    "Range starts from 0",
    "Ends at n-1",
    "Print values"
  ],
  output: "0 1 2 3 4"
},

{
  title: "Range Function (Demo 2)",
  description: "Use range with start and stop.",
  solution: `for i in range(2, 6):
    print(i, end=" ")`,
  explanation: [
    "Start from 2",
    "End before 6",
    "Print values"
  ],
  output: "2 3 4 5"
},

{
  title: "Range Function (Demo 3)",
  description: "Use range with step.",
  solution: `for i in range(1, 10, 2):
    print(i, end=" ")`,
  explanation: [
    "Start from 1",
    "Increment by 2",
    "Print values"
  ],
  output: "1 3 5 7 9"
},

{
  title: "Range Function (Demo 4)",
  description: "Use range in reverse order.",
  solution: `for i in range(10, 0, -2):
    print(i, end=" ")`,
  explanation: [
    "Start from 10",
    "Decrease by 2",
    "Print values"
  ],
  output: "10 8 6 4 2"
},

{
  title: "While Loop (Demo 1)",
  description: "Demonstrate while loop.",
  solution: `i = 1

while i <= 5:
    print(i, end=" ")
    i += 1`,
  explanation: [
    "Initialize variable",
    "Check condition",
    "Print value",
    "Increment variable"
  ],
  output: "1 2 3 4 5"
},

{
  title: "While Loop - Print Numbers",
  description: "Print numbers from 1 to 5 using while loop.",
  solution: `i = 1

while i <= 5:
    print(i, end=" ")
    i += 1`,
  explanation: [
    "Initialize variable",
    "Check condition",
    "Print number",
    "Increment value"
  ],
  output: "1 2 3 4 5"
},

{
  title: "While Loop - Square of Numbers",
  description: "Print squares of numbers from 1 to 5.",
  solution: `i = 1

while i <= 5:
    print(i*i, end=" ")
    i += 1`,
  explanation: [
    "Use while loop",
    "Calculate square",
    "Print result",
    "Increment variable"
  ],
  output: "1 4 9 16 25"
},

{
  title: "While-Else Demo",
  description: "Demonstrate while-else in Python.",
  solution: `i = 1

while i <= 3:
    print(i, end=" ")
    i += 1
else:
    print("Done")`,
  explanation: [
    "Loop runs until condition false",
    "Else executes after loop",
    "Print result"
  ],
  output: "1 2 3 Done"
},

{
  title: "Nested Loops Demo",
  description: "Demonstrate nested loops.",
  solution: `for i in range(1, 4):
    for j in range(1, 4):
        print(i, j)`,
  explanation: [
    "Outer loop runs",
    "Inner loop runs fully each time",
    "Print combinations"
  ],
  output: "1 1\n1 2\n1 3\n2 1\n2 2\n2 3\n3 1\n3 2\n3 3"
},

{
  title: "Break Demo",
  description: "Demonstrate break statement.",
  solution: `for i in range(1, 6):
    if i == 3:
        break
    print(i, end=" ")`,
  explanation: [
    "Loop starts",
    "Break when condition met",
    "Exit loop early",
    "Print values"
  ],
  output: "1 2"
},

{
  title: "Continue Demo",
  description: "Demonstrate continue statement.",
  solution: `for i in range(1, 6):
    if i == 3:
        continue
    print(i, end=" ")`,
  explanation: [
    "Skip iteration when condition met",
    "Continue loop",
    "Print remaining values"
  ],
  output: "1 2 4 5"
},

{
  title: "Break and Continue Demo",
  description: "Use both break and continue.",
  solution: `for i in range(1, 10):
    if i == 3:
        continue
    if i == 7:
        break
    print(i, end=" ")`,
  explanation: [
    "Skip 3 using continue",
    "Stop loop at 7 using break",
    "Print values before break"
  ],
  output: "1 2 4 5 6"
},

{
  title: "Pass Statement (Demo 1)",
  description: "Demonstrate pass in if statement.",
  solution: `num = 10

if num > 0:
    pass

print("Program executed")`,
  explanation: [
    "pass does nothing",
    "Used as placeholder",
    "Program continues execution"
  ],
  output: "Program executed"
},

{
  title: "Pass Statement (Demo 2)",
  description: "Use pass in loop.",
  solution: `for i in range(3):
    pass

print("Loop skipped")`,
  explanation: [
    "Loop runs but does nothing",
    "pass avoids error",
    "Print message"
  ],
  output: "Loop skipped"
},

{
  title: "Pass Statement (Demo 3)",
  description: "Use pass in function.",
  solution: `def func():
    pass

print("Function defined")`,
  explanation: [
    "Function created",
    "pass used as placeholder",
    "No execution inside function"
  ],
  output: "Function defined"
},

{
  title: "Insertion Sort",
  description: "Sort list using insertion sort.",
  solution: `arr = [5, 2, 4, 6, 1]

for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1

    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1

    arr[j + 1] = key

print(arr)`,
  explanation: [
    "Pick element",
    "Compare with previous",
    "Shift elements",
    "Insert at correct position",
    "Print sorted list"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Selection Sort",
  description: "Sort list using selection sort.",
  solution: `arr = [5, 2, 4, 6, 1]

for i in range(len(arr)):
    min_idx = i
    for j in range(i + 1, len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j

    arr[i], arr[min_idx] = arr[min_idx], arr[i]

print(arr)`,
  explanation: [
    "Select minimum element",
    "Swap with current index",
    "Repeat process",
    "Print sorted list"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Quick Sort",
  description: "Sort list using quick sort.",
  solution: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[0]
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]

    return quick_sort(left) + [pivot] + quick_sort(right)

arr = [5, 2, 4, 6, 1]

print(quick_sort(arr))`,
  explanation: [
    "Choose pivot",
    "Divide into left and right",
    "Recursively sort",
    "Combine results"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Heap Sort",
  description: "Sort list using heap sort.",
  solution: `import heapq

arr = [5, 2, 4, 6, 1]

heapq.heapify(arr)

sorted_arr = [heapq.heappop(arr) for _ in range(len(arr))]

print(sorted_arr)`,
  explanation: [
    "Convert list to heap",
    "Extract elements",
    "Maintain order",
    "Print sorted list"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Merge Sort",
  description: "Sort list using merge sort.",
  solution: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left = arr[:mid]
        right = arr[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1

arr = [5, 2, 4, 6, 1]
merge_sort(arr)
print(arr)`,
  explanation: [
    "Divide array into halves",
    "Recursively sort",
    "Merge sorted halves",
    "Print result"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Shell Sort",
  description: "Sort list using shell sort.",
  solution: `arr = [5, 2, 4, 6, 1]
n = len(arr)
gap = n // 2

while gap > 0:
    for i in range(gap, n):
        temp = arr[i]
        j = i
        while j >= gap and arr[j - gap] > temp:
            arr[j] = arr[j - gap]
            j -= gap
        arr[j] = temp
    gap //= 2

print(arr)`,
  explanation: [
    "Initialize gap",
    "Compare elements with gap",
    "Reduce gap gradually",
    "Print sorted list"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Radix Sort",
  description: "Sort list using radix sort.",
  solution: `def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1

    for i in range(1, 10):
        count[i] += count[i - 1]

    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1

    for i in range(n):
        arr[i] = output[i]

def radix_sort(arr):
    max_val = max(arr)
    exp = 1

    while max_val // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

arr = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(arr)
print(arr)`,
  explanation: [
    "Sort digits using counting sort",
    "Process each digit place",
    "Repeat until max digit",
    "Print sorted array"
  ],
  output: "[2, 24, 45, 66, 75, 90, 170, 802]"
},

{
  title: "Bubble Sort",
  description: "Sort list using bubble sort.",
  solution: `arr = [5, 2, 4, 6, 1]

n = len(arr)

for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]

print(arr)`,
  explanation: [
    "Compare adjacent elements",
    "Swap if needed",
    "Repeat passes",
    "Print sorted list"
  ],
  output: "[1, 2, 4, 5, 6]"
},

{
  title: "Linear Search",
  description: "Search element using linear search.",
  solution: `arr = [10, 20, 30, 40]
key = 30

for i in range(len(arr)):
    if arr[i] == key:
        print("Found at index", i)
        break`,
  explanation: [
    "Traverse list",
    "Compare each element",
    "Print index when found"
  ],
  output: "Found at index 2"
},

{
  title: "Binary Search",
  description: "Search element using binary search.",
  solution: `arr = [10, 20, 30, 40, 50]
key = 30

low = 0
high = len(arr) - 1

while low <= high:
    mid = (low + high) // 2

    if arr[mid] == key:
        print("Found at index", mid)
        break
    elif arr[mid] < key:
        low = mid + 1
    else:
        high = mid - 1`,
  explanation: [
    "Divide array",
    "Check middle element",
    "Adjust search range",
    "Print index"
  ],
  output: "Found at index 2"
},

{
  title: "Recursive Binary Search",
  description: "Search element using recursive binary search.",
  solution: `def binary_search(arr, low, high, key):
    if low <= high:
        mid = (low + high) // 2

        if arr[mid] == key:
            return mid
        elif arr[mid] < key:
            return binary_search(arr, mid + 1, high, key)
        else:
            return binary_search(arr, low, mid - 1, key)
    return -1

arr = [10, 20, 30, 40, 50]
key = 30

result = binary_search(arr, 0, len(arr)-1, key)

if result != -1:
    print("Found at index", result)
else:
    print("Not Found")`,
  explanation: [
    "Use recursion",
    "Divide search space",
    "Return index",
    "Print result"
  ],
  output: "Found at index 2"
},

{
  title: "Create List (Define a List)",
  description: "Create and print a simple list.",
  solution: `nums = [1, 2, 3, 4]

print(nums)`,
  explanation: [
    "Define list using []",
    "Store multiple values",
    "Print list"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "List with Different Data Types",
  description: "Create a list with different types of elements.",
  solution: `data = [10, "Python", 3.5, True]

print(data)`,
  explanation: [
    "List can store multiple data types",
    "Include int, string, float, boolean",
    "Print list"
  ],
  output: "[10, 'Python', 3.5, True]"
},

{
  title: "Traverse List Using Loop",
  description: "Traverse list using for loop.",
  solution: `nums = [1, 2, 3, 4]

for num in nums:
    print(num, end=" ")`,
  explanation: [
    "Use for loop",
    "Iterate over elements",
    "Print each item"
  ],
  output: "1 2 3 4"
},

{
  title: "Access Item Using Index",
  description: "Access list element using index.",
  solution: `nums = [10, 20, 30]

print(nums[1])`,
  explanation: [
    "Index starts from 0",
    "Access second element using index 1",
    "Print value"
  ],
  output: "20"
},

{
  title: "Access Item Using Negative Index",
  description: "Access list element using negative index.",
  solution: `nums = [10, 20, 30]

print(nums[-1])`,
  explanation: [
    "Negative index starts from end",
    "Access last element using -1",
    "Print value"
  ],
  output: "30"
},

{
  title: "Access Items Using Index Range",
  description: "Access list elements using slicing.",
  solution: `nums = [10, 20, 30, 40, 50]

print(nums[1:4])`,
  explanation: [
    "Use slicing [start:end]",
    "Start from index 1",
    "End before index 4",
    "Print sublist"
  ],
  output: "[20, 30, 40]"
},

{
  title: "Access Items Using Negative Range",
  description: "Access elements using negative slicing.",
  solution: `nums = [10, 20, 30, 40, 50]

print(nums[-4:-1])`,
  explanation: [
    "Use negative indices",
    "Slice from -4 to -1",
    "Print sublist"
  ],
  output: "[20, 30, 40]"
},

{
  title: "Modify List Item",
  description: "Modify an element in a list.",
  solution: `nums = [10, 20, 30]

nums[1] = 99

print(nums)`,
  explanation: [
    "Access element using index",
    "Assign new value",
    "Print updated list"
  ],
  output: "[10, 99, 30]"
},

{
  title: "Length of List",
  description: "Find length of a list.",
  solution: `nums = [1, 2, 3, 4, 5]

print(len(nums))`,
  explanation: [
    "Use len() function",
    "Count number of elements",
    "Print result"
  ],
  output: "5"
},

{
  title: "Add Item - append()",
  description: "Add item at the end of list.",
  solution: `nums = [1, 2, 3]

nums.append(4)

print(nums)`,
  explanation: [
    "Use append() method",
    "Add item at end",
    "Print updated list"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Add Item - insert()",
  description: "Insert item at specific position.",
  solution: `nums = [1, 2, 3]

nums.insert(1, 99)

print(nums)`,
  explanation: [
    "Use insert(index, value)",
    "Insert at position",
    "Print updated list"
  ],
  output: "[1, 99, 2, 3]"
},

{
  title: "Remove Item - remove()",
  description: "Remove item by value.",
  solution: `nums = [1, 2, 3, 2]

nums.remove(2)

print(nums)`,
  explanation: [
    "Use remove(value)",
    "Removes first occurrence",
    "Print updated list"
  ],
  output: "[1, 3, 2]"
},

{
  title: "Remove Item - pop()",
  description: "Remove item using pop().",
  solution: `nums = [10, 20, 30]

nums.pop()

print(nums)`,
  explanation: [
    "Use pop()",
    "Removes last item",
    "Print updated list"
  ],
  output: "[10, 20]"
},

{
  title: "Remove Item Using del",
  description: "Remove item using del keyword.",
  solution: `nums = [10, 20, 30]

del nums[1]

print(nums)`,
  explanation: [
    "Use del keyword",
    "Remove item by index",
    "Print updated list"
  ],
  output: "[10, 30]"
},

{
  title: "Clear List",
  description: "Remove all elements from list.",
  solution: `nums = [1, 2, 3]

nums.clear()

print(nums)`,
  explanation: [
    "Use clear() method",
    "Remove all elements",
    "Print empty list"
  ],
  output: "[]"
},

{
  title: "Delete Entire List (del)",
  description: "Delete the entire list using del keyword.",
  solution: `nums = [1, 2, 3]

del nums

print("List deleted")`,
  explanation: [
    "Use del keyword",
    "Delete entire list",
    "Print confirmation"
  ],
  output: "List deleted"
},

{
  title: "Search Item in List",
  description: "Check if an item exists in list.",
  solution: `nums = [10, 20, 30]
key = 20

if key in nums:
    print("Found")
else:
    print("Not Found")`,
  explanation: [
    "Use 'in' operator",
    "Check presence of element",
    "Print result"
  ],
  output: "Found"
},

{
  title: "Copy List (copy method)",
  description: "Copy list using copy().",
  solution: `nums = [1, 2, 3]

new_list = nums.copy()

print(new_list)`,
  explanation: [
    "Use copy() method",
    "Create duplicate list",
    "Print copied list"
  ],
  output: "[1, 2, 3]"
},

{
  title: "Copy List (list constructor)",
  description: "Copy list using list().",
  solution: `nums = [1, 2, 3]

new_list = list(nums)

print(new_list)`,
  explanation: [
    "Use list() constructor",
    "Create new list",
    "Print copied list"
  ],
  output: "[1, 2, 3]"
},

{
  title: "Concatenate Two Lists",
  description: "Add two lists together.",
  solution: `a = [1, 2]
b = [3, 4]

c = a + b

print(c)`,
  explanation: [
    "Use + operator",
    "Combine lists",
    "Print result"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Reverse List",
  description: "Reverse a list.",
  solution: `nums = [1, 2, 3, 4]

nums.reverse()

print(nums)`,
  explanation: [
    "Use reverse() method",
    "Reverse list in place",
    "Print result"
  ],
  output: "[4, 3, 2, 1]"
},

{
  title: "Count Occurrence of Item",
  description: "Count how many times an item appears.",
  solution: `nums = [1, 2, 2, 3]

print(nums.count(2))`,
  explanation: [
    "Use count() method",
    "Count occurrences",
    "Print result"
  ],
  output: "2"
},

{
  title: "Sort List",
  description: "Sort list in ascending order.",
  solution: `nums = [4, 1, 3, 2]

nums.sort()

print(nums)`,
  explanation: [
    "Use sort() method",
    "Sort in ascending order",
    "Print result"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Sort List (According to Criteria)",
  description: "Sort list based on custom criteria.",
  solution: `nums = ["apple", "banana", "kiwi"]

nums.sort(key=len)

print(nums)`,
  explanation: [
    "Use key parameter",
    "Sort by length",
    "Print result"
  ],
  output: "['kiwi', 'apple', 'banana']"
},

{
  title: "Create and Access Multi-Dimensional List",
  description: "Create and access elements in a 2D list.",
  solution: `matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

print(matrix[0][1])`,
  explanation: [
    "Create 2D list",
    "Access using row and column index",
    "Print element"
  ],
  output: "2"
},

{
  title: "Access Multi-Dimensional List Using Loop",
  description: "Traverse 2D list using loops.",
  solution: `matrix = [
    [1, 2],
    [3, 4]
]

for row in matrix:
    for val in row:
        print(val, end=" ")`,
  explanation: [
    "Loop through rows",
    "Loop through elements",
    "Print values"
  ],
  output: "1 2 3 4"
},

{
  title: "Create List with Zero Filled",
  description: "Create list filled with zeros.",
  solution: `n = 5

nums = [0] * n

print(nums)`,
  explanation: [
    "Use multiplication operator",
    "Repeat zero n times",
    "Print list"
  ],
  output: "[0, 0, 0, 0, 0]"
},

{
  title: "Add Sublist Using append()",
  description: "Add a sublist to a list.",
  solution: `matrix = []

matrix.append([1, 2, 3])
matrix.append([4, 5, 6])

print(matrix)`,
  explanation: [
    "Use append()",
    "Add sublists",
    "Print matrix"
  ],
  output: "[[1, 2, 3], [4, 5, 6]]"
},

{
  title: "Add More Items to Sublist (extend)",
  description: "Extend a sublist with more elements.",
  solution: `matrix = [[1, 2]]

matrix[0].extend([3, 4])

print(matrix)`,
  explanation: [
    "Access sublist",
    "Use extend()",
    "Add multiple items",
    "Print result"
  ],
  output: "[[1, 2, 3, 4]]"
},

{
  title: "Reverse Multi-Dimensional List",
  description: "Reverse the entire 2D list.",
  solution: `matrix = [[1, 2], [3, 4]]

matrix.reverse()

print(matrix)`,
  explanation: [
    "Use reverse()",
    "Reverse rows",
    "Print result"
  ],
  output: "[[3, 4], [1, 2]]"
},

{
  title: "Reverse Sublist",
  description: "Reverse individual sublist in 2D list.",
  solution: `matrix = [[1, 2], [3, 4]]

for row in matrix:
    row.reverse()

print(matrix)`,
  explanation: [
    "Loop through rows",
    "Reverse each row",
    "Print result"
  ],
  output: "[[2, 1], [4, 3]]"
},

{
  title: "Sort Multi-Dimensional List",
  description: "Sort a 2D list based on first element.",
  solution: `matrix = [[3, 2], [1, 4], [2, 5]]

matrix.sort()

print(matrix)`,
  explanation: [
    "Use sort()",
    "Sort based on first element",
    "Print sorted matrix"
  ],
  output: "[[1, 4], [2, 5], [3, 2]]"
},

{
  title: "Sort Sublist",
  description: "Sort each sublist in a 2D list.",
  solution: `matrix = [[3, 1], [5, 2]]

for row in matrix:
    row.sort()

print(matrix)`,
  explanation: [
    "Loop through rows",
    "Apply sort() on each row",
    "Print result"
  ],
  output: "[[1, 3], [2, 5]]"
},

{
  title: "Create Tuple",
  description: "Define a tuple.",
  solution: `t = (1, 2, 3)

print(t)`,
  explanation: [
    "Use parentheses",
    "Store multiple values",
    "Print tuple"
  ],
  output: "(1, 2, 3)"
},

{
  title: "Tuple with Different Data Types",
  description: "Create tuple with different items.",
  solution: `t = (10, "Python", 3.5)

print(t)`,
  explanation: [
    "Tuple can hold different types",
    "Store values",
    "Print tuple"
  ],
  output: "(10, 'Python', 3.5)"
},

{
  title: "Tuple with Single Item",
  description: "Create tuple with one element.",
  solution: `t = (5,)

print(t)`,
  explanation: [
    "Comma is required",
    "Otherwise it's not a tuple",
    "Print tuple"
  ],
  output: "(5,)"
},

{
  title: "Traverse Tuple Using Loop",
  description: "Traverse tuple using for loop.",
  solution: `t = (1, 2, 3)

for item in t:
    print(item, end=" ")`,
  explanation: [
    "Use for loop",
    "Iterate over tuple",
    "Print elements"
  ],
  output: "1 2 3"
},

{
  title: "Access Tuple Item Using Index",
  description: "Access element of tuple using index.",
  solution: `t = (10, 20, 30)

print(t[1])`,
  explanation: [
    "Index starts from 0",
    "Access second element using index 1",
    "Print value"
  ],
  output: "20"
},

{
  title: "Access Tuple Using Index Range",
  description: "Access tuple elements using slicing.",
  solution: `t = (10, 20, 30, 40)

print(t[1:3])`,
  explanation: [
    "Use slicing [start:end]",
    "Start from index 1",
    "End before index 3",
    "Print result"
  ],
  output: "(20, 30)"
},

{
  title: "Access Tuple Using Negative Range",
  description: "Access tuple elements using negative slicing.",
  solution: `t = (10, 20, 30, 40)

print(t[-3:-1])`,
  explanation: [
    "Use negative indices",
    "Slice from -3 to -1",
    "Print result"
  ],
  output: "(20, 30)"
},

{
  title: "Tuple Length",
  description: "Find length of a tuple.",
  solution: `t = (1, 2, 3, 4)

print(len(t))`,
  explanation: [
    "Use len() function",
    "Count number of elements",
    "Print result"
  ],
  output: "4"
},

{
  title: "Search Item in Tuple",
  description: "Check if item exists in tuple.",
  solution: `t = (10, 20, 30)

if 20 in t:
    print("Found")
else:
    print("Not Found")`,
  explanation: [
    "Use 'in' operator",
    "Check existence",
    "Print result"
  ],
  output: "Found"
},

{
  title: "Find First Occurrence of Item",
  description: "Find index of first occurrence.",
  solution: `t = (10, 20, 30, 20)

print(t.index(20))`,
  explanation: [
    "Use index() method",
    "Find first occurrence",
    "Print index"
  ],
  output: "1"
},

{
  title: "Concatenate Two Tuples",
  description: "Add two tuples together.",
  solution: `t1 = (1, 2)
t2 = (3, 4)

t3 = t1 + t2

print(t3)`,
  explanation: [
    "Use + operator",
    "Combine tuples",
    "Print result"
  ],
  output: "(1, 2, 3, 4)"
},

{
  title: "Delete Tuple",
  description: "Delete tuple using del keyword.",
  solution: `t = (1, 2, 3)

del t

print("Tuple deleted")`,
  explanation: [
    "Use del keyword",
    "Delete tuple",
    "Print confirmation"
  ],
  output: "Tuple deleted"
},

{
  title: "Count Occurrence in Tuple",
  description: "Count occurrences of an item in a tuple.",
  solution: `t = (1, 2, 2, 3)

print(t.count(2))`,
  explanation: [
    "Use count() method",
    "Count occurrences of element",
    "Print result"
  ],
  output: "2"
},

{
  title: "Create Set (Define a Set)",
  description: "Create and print a set.",
  solution: `s = {1, 2, 3}

print(s)`,
  explanation: [
    "Use curly braces {}",
    "Store unique values",
    "Print set"
  ],
  output: "{1, 2, 3}"
},

{
  title: "Set with Different Data Types",
  description: "Create set with different types of items.",
  solution: `s = {10, "Python", 3.5}

print(s)`,
  explanation: [
    "Set can store different types",
    "Values must be unique",
    "Print set"
  ],
  output: "{10, 'Python', 3.5}"
},

{
  title: "Traverse Set Using Loop",
  description: "Traverse set using for loop.",
  solution: `s = {1, 2, 3}

for item in s:
    print(item, end=" ")`,
  explanation: [
    "Use for loop",
    "Iterate over set",
    "Print elements"
  ],
  output: "1 2 3"
},

{
  title: "Length of Set",
  description: "Find number of elements in a set.",
  solution: `s = {1, 2, 3, 4}

print(len(s))`,
  explanation: [
    "Use len() function",
    "Count elements",
    "Print result"
  ],
  output: "4"
},

{
  title: "Search Item in Set",
  description: "Check if an item exists in set.",
  solution: `s = {10, 20, 30}

if 20 in s:
    print("Found")
else:
    print("Not Found")`,
  explanation: [
    "Use 'in' operator",
    "Check presence",
    "Print result"
  ],
  output: "Found"
},

{
  title: "Add Item to Set (add)",
  description: "Add single item to a set.",
  solution: `s = {1, 2, 3}

s.add(4)

print(s)`,
  explanation: [
    "Use add() method",
    "Add single element",
    "Print updated set"
  ],
  output: "{1, 2, 3, 4}"
},

{
  title: "Add Multiple Items to Set (update)",
  description: "Add multiple items to a set.",
  solution: `s = {1, 2}

s.update([3, 4, 5])

print(s)`,
  explanation: [
    "Use update() method",
    "Add multiple elements",
    "Print updated set"
  ],
  output: "{1, 2, 3, 4, 5}"
},

{
  title: "Remove Item from Set (remove)",
  description: "Remove an item using remove().",
  solution: `s = {1, 2, 3}

s.remove(2)

print(s)`,
  explanation: [
    "Use remove() method",
    "Removes specified element",
    "Print updated set"
  ],
  output: "{1, 3}"
},

{
  title: "Remove Item from Set (discard)",
  description: "Remove an item using discard().",
  solution: `s = {1, 2, 3}

s.discard(2)

print(s)`,
  explanation: [
    "Use discard() method",
    "Removes element safely",
    "No error if not found",
    "Print result"
  ],
  output: "{1, 3}"
},

{
  title: "Remove Random Item (pop)",
  description: "Remove random element using pop().",
  solution: `s = {10, 20, 30}

s.pop()

print(s)`,
  explanation: [
    "Use pop()",
    "Removes random element",
    "Print updated set"
  ],
  output: "Set after removal"
},

{
  title: "Clear Set",
  description: "Remove all elements from set.",
  solution: `s = {1, 2, 3}

s.clear()

print(s)`,
  explanation: [
    "Use clear() method",
    "Remove all elements",
    "Print empty set"
  ],
  output: "set()"
},

{
  title: "Delete Set (del)",
  description: "Delete entire set.",
  solution: `s = {1, 2, 3}

del s

print("Set deleted")`,
  explanation: [
    "Use del keyword",
    "Delete entire set",
    "Print confirmation"
  ],
  output: "Set deleted"
},

{
  title: "Union of Two Sets",
  description: "Join two sets using union().",
  solution: `a = {1, 2}
b = {3, 4}

c = a.union(b)

print(c)`,
  explanation: [
    "Use union()",
    "Combine elements",
    "Print result"
  ],
  output: "{1, 2, 3, 4}"
},

{
  title: "Update Set (Join Sets)",
  description: "Join sets using update().",
  solution: `a = {1, 2}
b = {3, 4}

a.update(b)

print(a)`,
  explanation: [
    "Use update()",
    "Modify original set",
    "Print updated set"
  ],
  output: "{1, 2, 3, 4}"
},

{
  title: "Copy Set",
  description: "Copy a set using copy().",
  solution: `s = {1, 2, 3}

new_set = s.copy()

print(new_set)`,
  explanation: [
    "Use copy() method",
    "Create duplicate set",
    "Print copied set"
  ],
  output: "{1, 2, 3}"
},

{
  title: "Intersection of Sets",
  description: "Find common elements of sets.",
  solution: `a = {1, 2, 3}
b = {2, 3, 4}

c = a.intersection(b)

print(c)`,
  explanation: [
    "Use intersection()",
    "Find common elements",
    "Print result"
  ],
  output: "{2, 3}"
},

{
  title: "Difference Between Sets",
  description: "Find difference between sets.",
  solution: `a = {1, 2, 3}
b = {2, 3, 4}

c = a.difference(b)

print(c)`,
  explanation: [
    "Use difference()",
    "Find unique elements",
    "Print result"
  ],
  output: "{1}"
},

{
  title: "Create and Show Dictionary",
  description: "Create and print a dictionary.",
  solution: `d = {
    "name": "Raj",
    "age": 20
}

print(d)`,
  explanation: [
    "Use key:value pairs",
    "Define dictionary",
    "Print dictionary"
  ],
  output: "{'name': 'Raj', 'age': 20}"
},

{
  title: "Traverse Dictionary Using Loop",
  description: "Traverse dictionary keys.",
  solution: `d = {"a": 1, "b": 2}

for key in d:
    print(key, end=" ")`,
  explanation: [
    "Loop through dictionary",
    "Access keys",
    "Print keys"
  ],
  output: "a b"
},

{
  title: "Traverse Dictionary Values",
  description: "Traverse dictionary values.",
  solution: `d = {"a": 1, "b": 2}

for val in d.values():
    print(val, end=" ")`,
  explanation: [
    "Use values()",
    "Access values",
    "Print values"
  ],
  output: "1 2"
},

{
  title: "Traverse Dictionary Items",
  description: "Traverse key-value pairs.",
  solution: `d = {"a": 1, "b": 2}

for key, val in d.items():
    print(key, val)`,
  explanation: [
    "Use items()",
    "Access key and value",
    "Print pairs"
  ],
  output: "a 1\nb 2"
},

{
  title: "Change Value of a Key",
  description: "Modify value of an existing key.",
  solution: `d = {"name": "Raj", "age": 20}

d["age"] = 25

print(d)`,
  explanation: [
    "Access key",
    "Assign new value",
    "Print updated dictionary"
  ],
  output: "{'name': 'Raj', 'age': 25}"
},

{
  title: "Add Item to Dictionary",
  description: "Add new key-value pair.",
  solution: `d = {"a": 1}

d["b"] = 2

print(d)`,
  explanation: [
    "Use new key",
    "Assign value",
    "Print dictionary"
  ],
  output: "{'a': 1, 'b': 2}"
},

{
  title: "Add Item Using update()",
  description: "Add items using update().",
  solution: `d = {"a": 1}

d.update({"b": 2, "c": 3})

print(d)`,
  explanation: [
    "Use update() method",
    "Add multiple items",
    "Print dictionary"
  ],
  output: "{'a': 1, 'b': 2, 'c': 3}"
},

{
  title: "Length of Dictionary",
  description: "Find number of key-value pairs.",
  solution: `d = {"a": 1, "b": 2, "c": 3}

print(len(d))`,
  explanation: [
    "Use len()",
    "Count pairs",
    "Print result"
  ],
  output: "3"
},

{
  title: "Check if Key Exists",
  description: "Check presence of key in dictionary.",
  solution: `d = {"a": 1, "b": 2}

if "a" in d:
    print("Key exists")
else:
    print("Not found")`,
  explanation: [
    "Use 'in' operator",
    "Check key existence",
    "Print result"
  ],
  output: "Key exists"
},

{
  title: "Remove Item Using pop()",
  description: "Remove item using pop().",
  solution: `d = {"a": 1, "b": 2}

d.pop("a")

print(d)`,
  explanation: [
    "Use pop(key)",
    "Remove specific item",
    "Print updated dictionary"
  ],
  output: "{'b': 2}"
},

{
  title: "Remove Item Using del",
  description: "Remove item using del keyword.",
  solution: `d = {"a": 1, "b": 2}

del d["a"]

print(d)`,
  explanation: [
    "Use del keyword",
    "Delete key-value pair",
    "Print result"
  ],
  output: "{'b': 2}"
},

{
  title: "Clear Dictionary",
  description: "Remove all items from dictionary.",
  solution: `d = {"a": 1, "b": 2}

d.clear()

print(d)`,
  explanation: [
    "Use clear() method",
    "Remove all items",
    "Print empty dictionary"
  ],
  output: "{}"
},

{
  title: "Delete Dictionary (del)",
  description: "Delete entire dictionary.",
  solution: `d = {"a": 1, "b": 2}

del d

print("Dictionary deleted")`,
  explanation: [
    "Use del keyword",
    "Delete entire dictionary",
    "Print confirmation"
  ],
  output: "Dictionary deleted"
},

{
  title: "Copy Dictionary (copy method)",
  description: "Copy dictionary using copy().",
  solution: `d = {"a": 1, "b": 2}

new_d = d.copy()

print(new_d)`,
  explanation: [
    "Use copy() method",
    "Create duplicate dictionary",
    "Print result"
  ],
  output: "{'a': 1, 'b': 2}"
},

{
  title: "Copy Dictionary (dict constructor)",
  description: "Copy dictionary using dict().",
  solution: `d = {"a": 1, "b": 2}

new_d = dict(d)

print(new_d)`,
  explanation: [
    "Use dict() constructor",
    "Create new dictionary",
    "Print result"
  ],
  output: "{'a': 1, 'b': 2}"
},

{
  title: "Nested Dictionary",
  description: "Create and access nested dictionary.",
  solution: `d = {
    "student1": {"name": "Raj", "age": 20},
    "student2": {"name": "Amit", "age": 22}
}

print(d["student1"]["name"])`,
  explanation: [
    "Create dictionary inside dictionary",
    "Access nested keys",
    "Print value"
  ],
  output: "Raj"
},

{
  title: "Array Demo (List)",
  description: "Create and print a list (array).",
  solution: `arr = [10, 20, 30]

print(arr)`,
  explanation: [
    "Use list as array",
    "Store elements",
    "Print list"
  ],
  output: "[10, 20, 30]"
},

{
  title: "Access Array Using Index",
  description: "Access list element using index.",
  solution: `arr = [10, 20, 30]

print(arr[1])`,
  explanation: [
    "Index starts from 0",
    "Access second element",
    "Print value"
  ],
  output: "20"
},

{
  title: "Access Array Using Range (Slicing)",
  description: "Access list elements using slicing.",
  solution: `arr = [10, 20, 30, 40]

print(arr[1:3])`,
  explanation: [
    "Use slicing [start:end]",
    "Start from index 1",
    "End before index 3",
    "Print sublist"
  ],
  output: "[20, 30]"
},

{
  title: "Modify Array Item",
  description: "Modify an element in array (list).",
  solution: `arr = [10, 20, 30]

arr[1] = 99

print(arr)`,
  explanation: [
    "Access index",
    "Assign new value",
    "Print updated array"
  ],
  output: "[10, 99, 30]"
},

{
  title: "Add Item to Array (append)",
  description: "Add element at end of array.",
  solution: `arr = [1, 2, 3]

arr.append(4)

print(arr)`,
  explanation: [
    "Use append()",
    "Add item at end",
    "Print array"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Add Item to Array (insert)",
  description: "Insert element at specific position.",
  solution: `arr = [1, 2, 3]

arr.insert(1, 99)

print(arr)`,
  explanation: [
    "Use insert(index, value)",
    "Insert at given position",
    "Print array"
  ],
  output: "[1, 99, 2, 3]"
},

{
  title: "Remove Item Using del",
  description: "Remove element using del keyword.",
  solution: `arr = [10, 20, 30]

del arr[1]

print(arr)`,
  explanation: [
    "Use del keyword",
    "Remove item by index",
    "Print updated array"
  ],
  output: "[10, 30]"
},

{
  title: "Remove Item Using pop()",
  description: "Remove element using pop().",
  solution: `arr = [10, 20, 30]

arr.pop()

print(arr)`,
  explanation: [
    "Use pop()",
    "Removes last item",
    "Print result"
  ],
  output: "[10, 20]"
},

{
  title: "Reverse Array (reverse method)",
  description: "Reverse array using reverse().",
  solution: `arr = [1, 2, 3, 4]

arr.reverse()

print(arr)`,
  explanation: [
    "Use reverse() method",
    "Reverse list in-place",
    "Print result"
  ],
  output: "[4, 3, 2, 1]"
},

{
  title: "Reverse Array (Using Indexing)",
  description: "Reverse array using slicing.",
  solution: `arr = [1, 2, 3, 4]

rev = arr[::-1]

print(rev)`,
  explanation: [
    "Use slicing with step -1",
    "Create reversed copy",
    "Print result"
  ],
  output: "[4, 3, 2, 1]"
},

{
  title: "Add Two Arrays (extend)",
  description: "Add elements of one array to another using extend().",
  solution: `a = [1, 2]
b = [3, 4]

a.extend(b)

print(a)`,
  explanation: [
    "Use extend()",
    "Add elements of second list",
    "Modify original list",
    "Print result"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Add Two Arrays Using +",
  description: "Concatenate two arrays using + operator.",
  solution: `a = [1, 2]
b = [3, 4]

c = a + b

print(c)`,
  explanation: [
    "Use + operator",
    "Combine lists",
    "Create new list",
    "Print result"
  ],
  output: "[1, 2, 3, 4]"
},

{
  title: "Count Occurrence in Array",
  description: "Count occurrences of an item in array.",
  solution: `arr = [1, 2, 2, 3]

print(arr.count(2))`,
  explanation: [
    "Use count()",
    "Count occurrences",
    "Print result"
  ],
  output: "2"
},

{
  title: "Define and Call Function",
  description: "Define and call a simple function.",
  solution: `def greet():
    print("Hello Python")

greet()`,
  explanation: [
    "Define function using def",
    "Call function",
    "Print output"
  ],
  output: "Hello Python"
},

{
  title: "Function with Parameters",
  description: "Pass parameters to function.",
  solution: `def add(a, b):
    print(a + b)

add(2, 3)`,
  explanation: [
    "Define function with parameters",
    "Pass arguments",
    "Print result"
  ],
  output: "5"
},

{
  title: "Function with Default Parameters",
  description: "Use default parameter values.",
  solution: `def greet(name="User"):
    print("Hello", name)

greet()
greet("Raj")`,
  explanation: [
    "Set default value",
    "Call without argument",
    "Call with argument",
    "Print results"
  ],
  output: "Hello User\nHello Raj"
},

{
  title: "Keyword Arguments (kwargs)",
  description: "Use keyword arguments in function.",
  solution: `def display(name, age):
    print(name, age)

display(age=20, name="Raj")`,
  explanation: [
    "Use named arguments",
    "Order doesn't matter",
    "Print values"
  ],
  output: "Raj 20"
},

{
  title: "Variable Arguments (*args)",
  description: "Use variable number of arguments in function.",
  solution: `def add(*args):
    total = 0
    for num in args:
        total += num
    print(total)

add(1, 2, 3, 4)`,
  explanation: [
    "Use *args",
    "Accept multiple values",
    "Loop through arguments",
    "Print sum"
  ],
  output: "10"
},

{
  title: "Passing List to Function",
  description: "Pass a list as argument to function.",
  solution: `def show(lst):
    for item in lst:
        print(item, end=" ")

nums = [1, 2, 3]

show(nums)`,
  explanation: [
    "Define function",
    "Pass list",
    "Traverse list",
    "Print elements"
  ],
  output: "1 2 3"
},

{
  title: "Pass Statement in Function",
  description: "Use pass as placeholder in function.",
  solution: `def func():
    pass

print("Function defined")`,
  explanation: [
    "Define function",
    "Use pass",
    "Avoid syntax error",
    "Print message"
  ],
  output: "Function defined"
},

{
  title: "Recursion Example",
  description: "Find factorial using recursion.",
  solution: `def fact(n):
    if n == 1:
        return 1
    return n * fact(n - 1)

print(fact(5))`,
  explanation: [
    "Define recursive function",
    "Base condition",
    "Call function again",
    "Print result"
  ],
  output: "120"
},

{
  title: "Function Inside Function",
  description: "Define function inside another function.",
  solution: `def outer():
    def inner():
        print("Inner function")
    inner()

outer()`,
  explanation: [
    "Define outer function",
    "Define inner function",
    "Call inner function",
    "Call outer function"
  ],
  output: "Inner function"
},

{
  title: "Global Variable",
  description: "Use global variable inside function.",
  solution: `x = 10

def show():
    global x
    x = 20

show()

print(x)`,
  explanation: [
    "Declare global variable",
    "Use global keyword",
    "Modify value inside function",
    "Print updated value"
  ],
  output: "20"
},

{
  title: "Function Demo (Add Two Numbers)",
  description: "Create a function to add two numbers.",
  solution: `def add(a, b):
    return a + b

print(add(2, 3))`,
  explanation: [
    "Define function",
    "Return sum",
    "Call function",
    "Print result"
  ],
  output: "5"
},

{
  title: "Function Demo (Square and Cube)",
  description: "Return square and cube of a number.",
  solution: `def calc(n):
    return n*n, n*n*n

sq, cube = calc(3)

print(sq, cube)`,
  explanation: [
    "Return multiple values",
    "Unpack values",
    "Print square and cube"
  ],
  output: "9 27"
},

{
  title: "Lambda Function (Add Numbers)",
  description: "Use lambda to add numbers.",
  solution: `add = lambda a, b: a + b

print(add(2, 3))`,
  explanation: [
    "Use lambda keyword",
    "Define inline function",
    "Call function",
    "Print result"
  ],
  output: "5"
},

{
  title: "Lambda Function (Find Larger)",
  description: "Find larger number using lambda.",
  solution: `max_val = lambda a, b: a if a > b else b

print(max_val(5, 3))`,
  explanation: [
    "Use conditional expression",
    "Compare values",
    "Return larger number",
    "Print result"
  ],
  output: "5"
},

{
  title: "Lambda Function (Even or Odd)",
  description: "Check even or odd using lambda.",
  solution: `check = lambda x: "Even" if x % 2 == 0 else "Odd"

print(check(4))`,
  explanation: [
    "Use modulus operator",
    "Use lambda expression",
    "Return Even or Odd",
    "Print result"
  ],
  output: "Even"
},

{
  title: "Lambda Inside Function",
  description: "Use lambda inside a function.",
  solution: `def multiply(n):
    return lambda x: x * n

result = multiply(3)

print(result(5))`,
  explanation: [
    "Return lambda from function",
    "Store function",
    "Call returned function",
    "Print result"
  ],
  output: "15"
},

{
  title: "Lambda with filter()",
  description: "Filter even numbers using lambda.",
  solution: `nums = [1, 2, 3, 4, 5]

even = list(filter(lambda x: x % 2 == 0, nums))

print(even)`,
  explanation: [
    "Use filter()",
    "Apply lambda condition",
    "Convert to list",
    "Print result"
  ],
  output: "[2, 4]"
},

{
  title: "Lambda with map()",
  description: "Use lambda with map() to square numbers.",
  solution: `nums = [1, 2, 3, 4]

result = list(map(lambda x: x*x, nums))

print(result)`,
  explanation: [
    "Use map()",
    "Apply lambda to each element",
    "Convert to list",
    "Print result"
  ],
  output: "[1, 4, 9, 16]"
},

{
  title: "Lambda with reduce()",
  description: "Use lambda with reduce() to sum numbers.",
  solution: `from functools import reduce

nums = [1, 2, 3, 4]

result = reduce(lambda a, b: a + b, nums)

print(result)`,
  explanation: [
    "Import reduce",
    "Apply lambda cumulatively",
    "Sum elements",
    "Print result"
  ],
  output: "10"
},

{
  title: "Class and Object (Demo 1)",
  description: "Create class and object.",
  solution: `class Person:
    name = "Raj"

p = Person()

print(p.name)`,
  explanation: [
    "Define class",
    "Create object",
    "Access property",
    "Print value"
  ],
  output: "Raj"
},

{
  title: "Class and Object (Demo 2)",
  description: "Create multiple objects.",
  solution: `class Person:
    name = "Unknown"

p1 = Person()
p2 = Person()

p1.name = "Raj"
p2.name = "Amit"

print(p1.name, p2.name)`,
  explanation: [
    "Create class",
    "Create multiple objects",
    "Assign values",
    "Print result"
  ],
  output: "Raj Amit"
},

{
  title: "__init__ and self (Constructor)",
  description: "Use constructor to initialize object.",
  solution: `class Person:
    def __init__(self):
        self.name = "Raj"

p = Person()

print(p.name)`,
  explanation: [
    "Use __init__ method",
    "Initialize property",
    "Access using self",
    "Print value"
  ],
  output: "Raj"
},

{
  title: "__init__ with Parameters",
  description: "Use parameterized constructor.",
  solution: `class Person:
    def __init__(self, name):
        self.name = name

p = Person("Raj")

print(p.name)`,
  explanation: [
    "Pass parameter",
    "Assign to self",
    "Create object",
    "Print value"
  ],
  output: "Raj"
},

{
  title: "Modify Object Properties",
  description: "Modify properties of object.",
  solution: `class Person:
    def __init__(self, name):
        self.name = name

p = Person("Raj")

p.name = "Amit"

print(p.name)`,
  explanation: [
    "Create object",
    "Modify property",
    "Print updated value"
  ],
  output: "Amit"
},

{
  title: "Delete Object Property",
  description: "Delete object property using del.",
  solution: `class Person:
    def __init__(self):
        self.name = "Raj"

p = Person()

del p.name

print("Property deleted")`,
  explanation: [
    "Create object",
    "Use del on property",
    "Remove attribute",
    "Print confirmation"
  ],
  output: "Property deleted"
},

{
  title: "Delete Object",
  description: "Delete object using del keyword.",
  solution: `class Person:
    pass

p = Person()

del p

print("Object deleted")`,
  explanation: [
    "Create object",
    "Use del keyword",
    "Delete object",
    "Print confirmation"
  ],
  output: "Object deleted"
},

{
  title: "Pass Statement in Class",
  description: "Use pass in class definition.",
  solution: `class MyClass:
    pass

print("Empty class created")`,
  explanation: [
    "Define class",
    "Use pass as placeholder",
    "Avoid syntax error",
    "Print message"
  ],
  output: "Empty class created"
},

{
  title: "Single Inheritance",
  description: "Demonstrate single inheritance.",
  solution: `class Parent:
    def show(self):
        print("Parent class")

class Child(Parent):
    pass

c = Child()
c.show()`,
  explanation: [
    "Define parent class",
    "Inherit in child class",
    "Call parent method",
    "Print output"
  ],
  output: "Parent class"
},

{
  title: "Hierarchical Inheritance",
  description: "Multiple child classes from one parent.",
  solution: `class Parent:
    def show(self):
        print("Parent class")

class Child1(Parent):
    pass

class Child2(Parent):
    pass

c1 = Child1()
c2 = Child2()

c1.show()
c2.show()`,
  explanation: [
    "Create parent class",
    "Create multiple children",
    "Inherit from parent",
    "Call method"
  ],
  output: "Parent class\nParent class"
},

{
  title: "Multiple Inheritance",
  description: "Inherit from multiple parent classes.",
  solution: `class A:
    def showA(self):
        print("Class A")

class B:
    def showB(self):
        print("Class B")

class C(A, B):
    pass

obj = C()
obj.showA()
obj.showB()`,
  explanation: [
    "Define two parent classes",
    "Inherit both",
    "Call methods",
    "Print results"
  ],
  output: "Class A\nClass B"
},

{
  title: "Multilevel Inheritance",
  description: "Demonstrate multilevel inheritance.",
  solution: `class A:
    def showA(self):
        print("Class A")

class B(A):
    def showB(self):
        print("Class B")

class C(B):
    def showC(self):
        print("Class C")

obj = C()

obj.showA()
obj.showB()
obj.showC()`,
  explanation: [
    "Create chain of inheritance",
    "Access all methods",
    "Call methods",
    "Print results"
  ],
  output: "Class A\nClass B\nClass C"
},

{
  title: "Hybrid Inheritance",
  description: "Demonstrate hybrid inheritance.",
  solution: `class A:
    def showA(self):
        print("Class A")

class B(A):
    def showB(self):
        print("Class B")

class C(A):
    def showC(self):
        print("Class C")

class D(B, C):
    def showD(self):
        print("Class D")

obj = D()

obj.showA()
obj.showB()
obj.showC()
obj.showD()`,
  explanation: [
    "Combine multiple inheritance types",
    "Create class hierarchy",
    "Access all methods",
    "Print outputs"
  ],
  output: "Class A\nClass B\nClass C\nClass D"
},

{
  title: "Super Keyword",
  description: "Use super() to call parent constructor.",
  solution: `class Parent:
    def __init__(self):
        print("Parent constructor")

class Child(Parent):
    def __init__(self):
        super().__init__()
        print("Child constructor")

c = Child()`,
  explanation: [
    "Use super()",
    "Call parent constructor",
    "Execute child constructor",
    "Print output"
  ],
  output: "Parent constructor\nChild constructor"
},

{
  title: "Try Except",
  description: "Handle exception using try-except.",
  solution: `try:
    x = 10 / 0
except:
    print("Error occurred")`,
  explanation: [
    "Use try block",
    "Catch exception",
    "Print message"
  ],
  output: "Error occurred"
},

{
  title: "Handling Multiple Exceptions",
  description: "Handle different exceptions separately.",
  solution: `try:
    x = int("abc")
except ValueError:
    print("Value Error")
except ZeroDivisionError:
    print("Division Error")`,
  explanation: [
    "Use multiple except blocks",
    "Catch specific exceptions",
    "Print corresponding message"
  ],
  output: "Value Error"
},

{
  title: "Else Clause",
  description: "Use else with try-except.",
  solution: `try:
    x = 10 / 2
except:
    print("Error")
else:
    print("No Error")`,
  explanation: [
    "Try block executes",
    "No exception occurs",
    "Else block runs",
    "Print result"
  ],
  output: "No Error"
},

{
  title: "Finally Clause",
  description: "Use finally block.",
  solution: `try:
    x = 10 / 0
except:
    print("Error")
finally:
    print("Always executed")`,
  explanation: [
    "Try block runs",
    "Exception occurs",
    "Finally always executes",
    "Print result"
  ],
  output: "Error\nAlways executed"
},

{
  title: "Raise an Exception",
  description: "Raise custom exception.",
  solution: `age = -5

if age < 0:
    raise ValueError("Invalid age")`,
  explanation: [
    "Check condition",
    "Use raise keyword",
    "Throw exception"
  ],
  output: "ValueError: Invalid age"
},

{
  title: "Add Two Numbers Without '+'",
  description: "Add two numbers using bitwise operators.",
  solution: `a = 5
b = 3

while b != 0:
    carry = a & b
    a = a ^ b
    b = carry << 1

print(a)`,
  explanation: [
    "Use XOR for sum",
    "Use AND for carry",
    "Shift carry left",
    "Repeat until carry is 0",
    "Print result"
  ],
  output: "8"
},

{
  title: "Subtract Without '-'",
  description: "Subtract two numbers using bitwise operators.",
  solution: `a = 5
b = 3

while b != 0:
    borrow = (~a) & b
    a = a ^ b
    b = borrow << 1

print(a)`,
  explanation: [
    "Use XOR for subtraction",
    "Use borrow logic",
    "Shift borrow",
    "Repeat process",
    "Print result"
  ],
  output: "2"
},

{
  title: "Multiply Without '*'",
  description: "Multiply using repeated addition.",
  solution: `a = 5
b = 3
result = 0

for i in range(b):
    result += a

print(result)`,
  explanation: [
    "Initialize result",
    "Add a repeatedly",
    "Loop b times",
    "Print result"
  ],
  output: "15"
},

{
  title: "Division Without '/'",
  description: "Divide using repeated subtraction.",
  solution: `a = 10
b = 2
count = 0

while a >= b:
    a -= b
    count += 1

print(count)`,
  explanation: [
    "Subtract divisor repeatedly",
    "Count iterations",
    "Print quotient"
  ],
  output: "5"
},

{
  title: "Modulo Without '%'",
  description: "Find remainder using subtraction.",
  solution: `a = 10
b = 3

while a >= b:
    a -= b

print(a)`,
  explanation: [
    "Subtract divisor repeatedly",
    "Remaining value is remainder",
    "Print result"
  ],
  output: "1"
}
];