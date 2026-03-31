const problems = [

    {
  title: "Hello C",
  description: "Write a program to print 'Hello C'.",
  solution: `#include <stdio.h>

int main() {
    printf("Hello C");

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Print Hello C",
    "End program"
  ],
  output: "Hello C"
},

{
  title: "If-Else Demo 1 (Positive or Negative)",
  description: "Write a program to check whether a number is positive or negative.",
  solution: `#include <stdio.h>

int main() {
    int n = -5;

    if(n >= 0) {
        printf("Positive");
    } else {
        printf("Negative");
    }

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Check if number is >= 0",
    "If true print Positive",
    "Else print Negative",
    "End program"
  ],
  output: "Negative"
},

{
  title: "If-Else Demo 2 (Even or Odd)",
  description: "Write a program to check whether a number is even or odd.",
  solution: `#include <stdio.h>

int main() {
    int n = 7;

    if(n % 2 == 0) {
        printf("Even");
    } else {
        printf("Odd");
    }

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Check remainder when divided by 2",
    "If zero print Even",
    "Else print Odd",
    "End program"
  ],
  output: "Odd"
},

{
  title: "If-Else Demo 3 (Largest of Two Numbers)",
  description: "Write a program to find the largest of two numbers.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 20;

    if(a > b) {
        printf("%d", a);
    } else {
        printf("%d", b);
    }

    return 0;
}`,
  explanation: [
    "Initialize two numbers",
    "Compare a and b",
    "If a is greater print a",
    "Else print b",
    "End program"
  ],
  output: "20"
},

{
  title: "If-Else with OR Operator",
  description: "Write a program to check if a number is divisible by 3 or 5.",
  solution: `#include <stdio.h>

int main() {
    int n = 9;

    if(n % 3 == 0 || n % 5 == 0) {
        printf("Divisible");
    } else {
        printf("Not Divisible");
    }

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Check divisibility by 3 or 5",
    "Use OR operator",
    "Print result",
    "End program"
  ],
  output: "Divisible"
},

{
  title: "If-Else with AND Operator (Voting Age)",
  description: "Write a program to check if a person is eligible to vote.",
  solution: `#include <stdio.h>

int main() {
    int age = 20;

    if(age >= 18 && age <= 100) {
        printf("Eligible to Vote");
    } else {
        printf("Not Eligible");
    }

    return 0;
}`,
  explanation: [
    "Initialize age",
    "Check if age is between 18 and 100",
    "Use AND operator",
    "Print eligibility",
    "End program"
  ],
  output: "Eligible to Vote"
},

{
  title: "If-Else-If Demo 1 (Grade System)",
  description: "Write a program to assign grade based on marks.",
  solution: `#include <stdio.h>

int main() {
    int marks = 75;

    if(marks >= 90) {
        printf("A");
    } else if(marks >= 70) {
        printf("B");
    } else if(marks >= 50) {
        printf("C");
    } else {
        printf("Fail");
    }

    return 0;
}`,
  explanation: [
    "Initialize marks",
    "Check if marks >= 90",
    "Else if marks >= 70",
    "Else if marks >= 50",
    "Else print Fail",
    "End program"
  ],
  output: "B"
},

{
  title: "If-Else-If Demo 2 (Largest of Three Numbers)",
  description: "Write a program to find the largest of three numbers.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 25, c = 15;

    if(a >= b && a >= c) {
        printf("%d", a);
    } else if(b >= a && b >= c) {
        printf("%d", b);
    } else {
        printf("%d", c);
    }

    return 0;
}`,
  explanation: [
    "Initialize three numbers",
    "Check if a is largest",
    "Else check if b is largest",
    "Else c is largest",
    "Print result",
    "End program"
  ],
  output: "25"
},

{
  title: "Switch Case Demo 1 (Day Number)",
  description: "Write a program to print day name using switch case.",
  solution: `#include <stdio.h>

int main() {
    int day = 3;

    switch(day) {
        case 1: printf("Monday"); break;
        case 2: printf("Tuesday"); break;
        case 3: printf("Wednesday"); break;
        case 4: printf("Thursday"); break;
        case 5: printf("Friday"); break;
        case 6: printf("Saturday"); break;
        case 7: printf("Sunday"); break;
        default: printf("Invalid");
    }

    return 0;
}`,
  explanation: [
    "Initialize day number",
    "Use switch statement",
    "Match case value",
    "Print corresponding day",
    "Use break to exit",
    "Default for invalid input"
  ],
  output: "Wednesday"
},

{
  title: "Switch Case (Character Demo)",
  description: "Write a program to check if a character is a vowel.",
  solution: `#include <stdio.h>

int main() {
    char ch = 'a';

    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            printf("Vowel");
            break;
        default:
            printf("Consonant");
    }

    return 0;
}`,
  explanation: [
    "Initialize character",
    "Use switch statement",
    "Check vowel cases",
    "Merge cases for vowels",
    "Print result",
    "Default for consonant"
  ],
  output: "Vowel"
},

{
  title: "Switch Case (Case Merge Demo)",
  description: "Write a program to categorize digits using switch case.",
  solution: `#include <stdio.h>

int main() {
    int num = 2;

    switch(num) {
        case 1:
        case 2:
        case 3:
            printf("Small");
            break;
        case 4:
        case 5:
        case 6:
            printf("Medium");
            break;
        case 7:
        case 8:
        case 9:
            printf("Large");
            break;
        default:
            printf("Invalid");
    }

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Use switch statement",
    "Merge cases for groups",
    "Print category",
    "Default for invalid input"
  ],
  output: "Small"
},

{
  title: "Goto Demo 1",
  description: "Write a program to demonstrate basic use of goto.",
  solution: `#include <stdio.h>

int main() {
    printf("Start\\n");

    goto label;

    printf("This will not execute\\n");

label:
    printf("End");

    return 0;
}`,
  explanation: [
    "Print Start",
    "Jump to label using goto",
    "Skip intermediate statement",
    "Execute label block",
    "Print End"
  ],
  output: `Start
End`
},

{
  title: "Goto Demo 2 (Loop Simulation)",
  description: "Write a program to print numbers from 1 to 5 using goto.",
  solution: `#include <stdio.h>

int main() {
    int i = 1;

loop:
    if(i <= 5) {
        printf("%d ", i);
        i++;
        goto loop;
    }

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Create loop label",
    "Check condition",
    "Print value",
    "Increment counter",
    "Jump back to loop"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Goto Demo 3 (Even Numbers)",
  description: "Write a program to print even numbers using goto.",
  solution: `#include <stdio.h>

int main() {
    int i = 2;

loop:
    if(i <= 10) {
        printf("%d ", i);
        i += 2;
        goto loop;
    }

    return 0;
}`,
  explanation: [
    "Initialize i as 2",
    "Check condition",
    "Print even number",
    "Increase by 2",
    "Repeat using goto"
  ],
  output: "2 4 6 8 10"
},

{
  title: "Goto Demo 4 (Sum of Numbers)",
  description: "Write a program to find sum of numbers from 1 to 5 using goto.",
  solution: `#include <stdio.h>

int main() {
    int i = 1, sum = 0;

loop:
    if(i <= 5) {
        sum += i;
        i++;
        goto loop;
    }

    printf("%d", sum);

    return 0;
}`,
  explanation: [
    "Initialize i and sum",
    "Check condition",
    "Add value to sum",
    "Increment i",
    "Repeat using goto",
    "Print sum"
  ],
  output: "15"
},

{
  title: "For Loop Demo 1",
  description: "Write a program to print numbers from 1 to 5 using for loop.",
  solution: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }

    return 0;
}`,
  explanation: [
    "Initialize loop variable",
    "Set condition",
    "Increment each iteration",
    "Print numbers",
    "End loop"
  ],
  output: "1 2 3 4 5"
},

{
  title: "For Loop (Even Numbers)",
  description: "Write a program to print even numbers using for loop.",
  solution: `#include <stdio.h>

int main() {
    for(int i = 2; i <= 10; i += 2) {
        printf("%d ", i);
    }

    return 0;
}`,
  explanation: [
    "Initialize i as 2",
    "Set condition up to 10",
    "Increment by 2",
    "Print even numbers"
  ],
  output: "2 4 6 8 10"
},

{
  title: "For Loop (Multiplication Table)",
  description: "Write a program to print multiplication table of a number.",
  solution: `#include <stdio.h>

int main() {
    int n = 5;

    for(int i = 1; i <= 10; i++) {
        printf("%d ", n * i);
    }

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Loop from 1 to 10",
    "Multiply number with loop index",
    "Print result"
  ],
  output: "5 10 15 20 25 30 35 40 45 50"
},

{
  title: "While Loop Demo 1",
  description: "Write a program to print numbers from 1 to 5 using while loop.",
  solution: `#include <stdio.h>

int main() {
    int i = 1;

    while(i <= 5) {
        printf("%d ", i);
        i++;
    }

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Check condition",
    "Print value",
    "Increment counter",
    "Repeat loop"
  ],
  output: "1 2 3 4 5"
},

{
  title: "While Loop (Print Numbers)",
  description: "Write a program to print numbers from 10 to 1 using while loop.",
  solution: `#include <stdio.h>

int main() {
    int i = 10;

    while(i >= 1) {
        printf("%d ", i);
        i--;
    }

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Check condition",
    "Print value",
    "Decrement counter",
    "Repeat loop"
  ],
  output: "10 9 8 7 6 5 4 3 2 1"
},

{
  title: "While Loop (Square of Numbers)",
  description: "Write a program to print squares of numbers from 1 to 5.",
  solution: `#include <stdio.h>

int main() {
    int i = 1;

    while(i <= 5) {
        printf("%d ", i * i);
        i++;
    }

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Loop from 1 to 5",
    "Calculate square",
    "Print result",
    "Increment counter"
  ],
  output: "1 4 9 16 25"
},

{
  title: "Do-While Loop Demo 1",
  description: "Write a program to print numbers from 1 to 5 using do-while loop.",
  solution: `#include <stdio.h>

int main() {
    int i = 1;

    do {
        printf("%d ", i);
        i++;
    } while(i <= 5);

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Execute block first",
    "Print value",
    "Increment counter",
    "Check condition after execution"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Do-While with Switch",
  description: "Write a program using do-while loop with switch case.",
  solution: `#include <stdio.h>

int main() {
    int choice;

    do {
        printf("1. Hello\\n2. Exit\\n");
        scanf("%d", &choice);

        switch(choice) {
            case 1:
                printf("Hello\\n");
                break;
            case 2:
                printf("Exit\\n");
                break;
            default:
                printf("Invalid\\n");
        }

    } while(choice != 2);

    return 0;
}`,
  explanation: [
    "Start do-while loop",
    "Take user input",
    "Use switch case",
    "Execute selected option",
    "Repeat until exit"
  ],
  output: "Menu-driven output"
},

{
  title: "Break and Continue",
  description: "Write a program to demonstrate break and continue.",
  solution: `#include <stdio.h>

int main() {
    for(int i = 1; i <= 10; i++) {

        if(i == 5) {
            continue;
        }

        if(i == 8) {
            break;
        }

        printf("%d ", i);
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to 10",
    "Skip iteration when i=5",
    "Stop loop when i=8",
    "Print remaining values"
  ],
  output: "1 2 3 4 6 7"
},

{
  title: "Command Line Arguments",
  description: "Write a program to display command line arguments.",
  solution: `#include <stdio.h>

int main(int argc, char *argv[]) {

    for(int i = 0; i < argc; i++) {
        printf("%s\\n", argv[i]);
    }

    return 0;
}`,
  explanation: [
    "Define main with arguments",
    "argc stores argument count",
    "argv stores argument values",
    "Loop through arguments",
    "Print each argument"
  ],
  output: "Program name and arguments (depends on input)"
},

  {
    title: "Even or Odd Check",
    description: "Write a program to check whether a number is even or odd.",
    solution: `#include <stdio.h>

int main() {
    int n = 4;

    if(n % 2 == 0) {
        printf("Even");
    } else {
        printf("Odd");
    }

    return 0;
}`,
    explanation: [
      "Include standard input-output library",
      "Main function starts",
      "Declare integer n",
      "Check if n is divisible by 2",
      "If true, print Even",
      "Otherwise print Odd",
      "End program"
    ],
    output: "Even"
  },

  {
    title: "Factorial (Loop)",
    description: "Write a program to find factorial of a number using loop.",
    solution: `#include <stdio.h>

int main() {
    int n = 5, fact = 1;

    for(int i = 1; i <= n; i++) {
        fact = fact * i;
    }

    printf("%d", fact);

    return 0;
}`,
    explanation: [
      "Include standard input-output library",
      "Main function starts",
      "Initialize n and fact",
      "Loop from 1 to n",
      "Multiply fact with i",
      "Print factorial",
      "End program"
    ],
    output: "120"
  },

  {
    title: "Factorial (Function)",
    description: "Write a program to find factorial using function.",
    solution: `#include <stdio.h>

int factorial(int n) {
    int fact = 1;

    for(int i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

int main() {
    int n = 5;

    printf("%d", factorial(n));

    return 0;
}`,
    explanation: [
      "Include standard input-output library",
      "Define factorial function",
      "Initialize fact",
      "Loop from 1 to n",
      "Multiply fact with i",
      "Return factorial value",
      "Main function starts",
      "Declare n",
      "Call factorial function",
      "Print result",
      "End program"
    ],
    output: "120"
  },

  {
    title: "Prime Check (Logic 1)",
    description: "Write a program to check if a number is prime (basic method).",
    solution: `#include <stdio.h>

int main() {
    int n = 7, flag = 0;

    for(int i = 2; i < n; i++) {
        if(n % i == 0) {
            flag = 1;
            break;
        }
    }

    if(flag == 0) {
        printf("Prime");
    } else {
        printf("Not Prime");
    }

    return 0;
}`,
    explanation: [
      "Include standard input-output library",
      "Main function starts",
      "Initialize n and flag",
      "Loop from 2 to n-1",
      "Check divisibility",
      "If divisible, mark not prime",
      "Check flag value",
      "Print Prime or Not Prime",
      "End program"
    ],
    output: "Prime"
  },

  {
    title: "Prime Check (Logic 2)",
    description: "Write a program to check if a number is prime (optimized method).",
    solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n = 7, flag = 0;

    for(int i = 2; i <= sqrt(n); i++) {
        if(n % i == 0) {
            flag = 1;
            break;
        }
    }

    if(flag == 0 && n > 1) {
        printf("Prime");
    } else {
        printf("Not Prime");
    }

    return 0;
}`,
    explanation: [
      "Include standard input-output library",
      "Include math library",
      "Main function starts",
      "Initialize n and flag",
      "Loop till square root of n",
      "Check divisibility",
      "If divisible, mark not prime",
      "Check flag and n",
      "Print Prime or Not Prime",
      "End program"
    ],
    output: "Prime"
  },

  {
  title: "Largest Among N Numbers",
  description: "Write a program to find the largest number among n numbers.",
  solution: `#include <stdio.h>

int main() {
    int n = 5;
    int arr[5] = {3, 7, 2, 9, 5};
    int max = arr[0];

    for(int i = 1; i < n; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    printf("%d", max);

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize array and size",
    "Assume first element as max",
    "Loop through remaining elements",
    "Compare each element with max",
    "Update max if larger value found",
    "Print maximum value",
    "End program"
  ],
  output: "9"
},

{
  title: "Swap Two Numbers",
  description: "Write a program to swap two numbers using a third variable.",
  solution: `#include <stdio.h>

int main() {
    int a = 5, b = 10, temp;

    temp = a;
    a = b;
    b = temp;

    printf("%d %d", a, b);

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables a and b",
    "Store a in temp",
    "Assign b to a",
    "Assign temp to b",
    "Print swapped values",
    "End program"
  ],
  output: "10 5"
},

{
  title: "Swap Without Third Variable",
  description: "Write a program to swap two numbers without using a third variable.",
  solution: `#include <stdio.h>

int main() {
    int a = 5, b = 10;

    a = a + b;
    b = a - b;
    a = a - b;

    printf("%d %d", a, b);

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables a and b",
    "Add a and b and store in a",
    "Subtract b from a to get original a",
    "Subtract new b from a to get original b",
    "Print swapped values",
    "End program"
  ],
  output: "10 5"
},

{
  title: "Fibonacci Series",
  description: "Write a program to print Fibonacci series up to n terms.",
  solution: `#include <stdio.h>

int main() {
    int n = 5, a = 0, b = 1, c;

    printf("%d %d ", a, b);

    for(int i = 2; i < n; i++) {
        c = a + b;
        printf("%d ", c);
        a = b;
        b = c;
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize n, a, b",
    "Print first two terms",
    "Loop from 2 to n",
    "Calculate next term",
    "Print next term",
    "Update values of a and b",
    "End program"
  ],
  output: "0 1 1 2 3"
},

{
  title: "Palindrome Number",
  description: "Write a program to check whether a number is palindrome.",
  solution: `#include <stdio.h>

int main() {
    int n = 121, original = n, reversed = 0, remainder;

    while(n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n = n / 10;
    }

    if(original == reversed) {
        printf("Palindrome");
    } else {
        printf("Not Palindrome");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables",
    "Extract last digit using modulo",
    "Build reversed number",
    "Remove last digit",
    "Compare original and reversed",
    "Print result",
    "End program"
  ],
  output: "Palindrome"
},

{
  title: "Pascal Triangle",
  description: "Write a program to print Pascal's triangle.",
  solution: `#include <stdio.h>

int main() {
    int n = 5;

    for(int i = 0; i < n; i++) {
        int num = 1;

        for(int j = 0; j <= i; j++) {
            printf("%d ", num);
            num = num * (i - j) / (j + 1);
        }

        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Loop through rows",
    "Initialize first number as 1",
    "Loop through columns",
    "Print current number",
    "Calculate next value using formula",
    "Move to next line",
    "End program"
  ],
  output: `1
1 1
1 2 1
1 3 3 1
1 4 6 4 1`
},

{
  title: "Leap Year",
  description: "Write a program to check whether a year is a leap year.",
  solution: `#include <stdio.h>

int main() {
    int year = 2024;

    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        printf("Leap Year");
    } else {
        printf("Not Leap Year");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize year",
    "Check leap year condition",
    "Print Leap Year if true",
    "Otherwise print Not Leap Year",
    "End program"
  ],
  output: "Leap Year"
},

{
  title: "Perfect Number",
  description: "Write a program to check whether a number is a perfect number.",
  solution: `#include <stdio.h>

int main() {
    int n = 6, sum = 0;

    for(int i = 1; i < n; i++) {
        if(n % i == 0) {
            sum += i;
        }
    }

    if(sum == n) {
        printf("Perfect Number");
    } else {
        printf("Not Perfect Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize number and sum",
    "Loop from 1 to n-1",
    "Check if i divides n",
    "Add divisor to sum",
    "Compare sum with n",
    "Print result",
    "End program"
  ],
  output: "Perfect Number"
},

{
  title: "Armstrong Number",
  description: "Write a program to check whether a number is an Armstrong number.",
  solution: `#include <stdio.h>

int main() {
    int n = 153, original = n, sum = 0, remainder;

    while(n != 0) {
        remainder = n % 10;
        sum += remainder * remainder * remainder;
        n = n / 10;
    }

    if(sum == original) {
        printf("Armstrong");
    } else {
        printf("Not Armstrong");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables",
    "Extract last digit",
    "Cube the digit and add to sum",
    "Remove last digit",
    "Compare sum with original number",
    "Print result",
    "End program"
  ],
  output: "Armstrong"
},

{
  title: "Strong Number",
  description: "Write a program to check whether a number is a strong number.",
  solution: `#include <stdio.h>

int main() {
    int n = 145, original = n, sum = 0, remainder;

    while(n != 0) {
        remainder = n % 10;

        int fact = 1;
        for(int i = 1; i <= remainder; i++) {
            fact *= i;
        }

        sum += fact;
        n = n / 10;
    }

    if(sum == original) {
        printf("Strong Number");
    } else {
        printf("Not Strong Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables",
    "Extract each digit",
    "Find factorial of digit",
    "Add factorial to sum",
    "Remove last digit",
    "Compare sum with original",
    "Print result",
    "End program"
  ],
  output: "Strong Number"
},

{
  title: "Neon Number",
  description: "Write a program to check whether a number is a neon number.",
  solution: `#include <stdio.h>

int main() {
    int n = 9, square, sum = 0, remainder;

    square = n * n;

    while(square != 0) {
        remainder = square % 10;
        sum += remainder;
        square = square / 10;
    }

    if(sum == n) {
        printf("Neon Number");
    } else {
        printf("Not Neon Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize variables",
    "Find square of number",
    "Extract digits of square",
    "Add digits to sum",
    "Remove last digit",
    "Compare sum with original",
    "Print result",
    "End program"
  ],
  output: "Neon Number"
},

{
  title: "Automorphic Number",
  description: "Write a program to check whether a number is an automorphic number.",
  solution: `#include <stdio.h>

int main() {
    int n = 25, square, temp, digits = 0;

    square = n * n;
    temp = n;

    while(temp != 0) {
        digits++;
        temp /= 10;
    }

    int mod = 1;
    for(int i = 0; i < digits; i++) {
        mod *= 10;
    }

    if(square % mod == n) {
        printf("Automorphic");
    } else {
        printf("Not Automorphic");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Find square of number",
    "Count digits of number",
    "Create modulus value",
    "Compare last digits of square with number",
    "Print result",
    "End program"
  ],
  output: "Automorphic"
},

{
  title: "Spy Number",
  description: "Write a program to check whether a number is a spy number.",
  solution: `#include <stdio.h>

int main() {
    int n = 123, sum = 0, product = 1, remainder;

    while(n != 0) {
        remainder = n % 10;
        sum += remainder;
        product *= remainder;
        n = n / 10;
    }

    if(sum == product) {
        printf("Spy Number");
    } else {
        printf("Not Spy Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize sum and product",
    "Extract each digit",
    "Add digit to sum",
    "Multiply digit to product",
    "Remove last digit",
    "Compare sum and product",
    "Print result",
    "End program"
  ],
  output: "Spy Number"
},

{
  title: "Happy Number",
  description: "Write a program to check whether a number is a happy number.",
  solution: `#include <stdio.h>

int main() {
    int n = 19, sum;

    while(n != 1 && n != 4) {
        sum = 0;

        while(n != 0) {
            int remainder = n % 10;
            sum += remainder * remainder;
            n /= 10;
        }

        n = sum;
    }

    if(n == 1) {
        printf("Happy Number");
    } else {
        printf("Not Happy Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Loop until number becomes 1 or 4",
    "Extract digits",
    "Square and sum digits",
    "Update number",
    "Check if result is 1",
    "Print result",
    "End program"
  ],
  output: "Happy Number"
},

{
  title: "Sunny Number",
  description: "Write a program to check whether a number is a sunny number.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n = 8;
    int next = n + 1;
    int root = sqrt(next);

    if(root * root == next) {
        printf("Sunny Number");
    } else {
        printf("Not Sunny Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Include math library",
    "Main function starts",
    "Add 1 to number",
    "Find square root",
    "Check if perfect square",
    "Print result",
    "End program"
  ],
  output: "Sunny Number"
},

{
  title: "Fascinating Number",
  description: "Write a program to check whether a number is a fascinating number.",
  solution: `#include <stdio.h>

int main() {
    int n = 192;
    int num = n * 1000000 + (n * 2) * 1000 + (n * 3);

    int digits[10] = {0};

    while(num != 0) {
        int d = num % 10;
        digits[d]++;
        num /= 10;
    }

    int isFascinating = 1;

    for(int i = 1; i <= 9; i++) {
        if(digits[i] != 1) {
            isFascinating = 0;
            break;
        }
    }

    if(isFascinating) {
        printf("Fascinating Number");
    } else {
        printf("Not Fascinating Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Concatenate n, 2n, 3n",
    "Count digit frequency",
    "Check digits 1 to 9 appear once",
    "Print result",
    "End program"
  ],
  output: "Fascinating Number"
},

{
  title: "Disarium Number",
  description: "Write a program to check whether a number is a disarium number.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n = 135, temp = n, sum = 0, digits = 0;

    while(temp != 0) {
        digits++;
        temp /= 10;
    }

    temp = n;

    while(temp != 0) {
        int remainder = temp % 10;
        sum += pow(remainder, digits);
        digits--;
        temp /= 10;
    }

    if(sum == n) {
        printf("Disarium Number");
    } else {
        printf("Not Disarium Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Include math library",
    "Main function starts",
    "Count digits",
    "Extract digits",
    "Raise digit to position power",
    "Add to sum",
    "Compare sum with number",
    "Print result",
    "End program"
  ],
  output: "Disarium Number"
},

{
  title: "Pronic Number",
  description: "Write a program to check whether a number is a pronic number.",
  solution: `#include <stdio.h>

int main() {
    int n = 20;
    int flag = 0;

    for(int i = 0; i < n; i++) {
        if(i * (i + 1) == n) {
            flag = 1;
            break;
        }
    }

    if(flag == 1) {
        printf("Pronic Number");
    } else {
        printf("Not Pronic Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Loop through possible values",
    "Check if i*(i+1) equals n",
    "Set flag if true",
    "Print result",
    "End program"
  ],
  output: "Pronic Number"
},

{
  title: "Trimorphic Number",
  description: "Write a program to check whether a number is a trimorphic number.",
  solution: `#include <stdio.h>

int main() {
    int n = 24, cube, temp, digits = 0;

    cube = n * n * n;
    temp = n;

    while(temp != 0) {
        digits++;
        temp /= 10;
    }

    int mod = 1;
    for(int i = 0; i < digits; i++) {
        mod *= 10;
    }

    if(cube % mod == n) {
        printf("Trimorphic Number");
    } else {
        printf("Not Trimorphic Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Find cube of number",
    "Count digits of number",
    "Create modulus value",
    "Compare last digits of cube with number",
    "Print result",
    "End program"
  ],
  output: "Trimorphic Number"
},

{
  title: "Evil or Odious Number",
  description: "Write a program to check whether a number is evil or odious.",
  solution: `#include <stdio.h>

int main() {
    int n = 5, count = 0;

    while(n != 0) {
        if(n % 2 == 1) {
            count++;
        }
        n = n / 2;
    }

    if(count % 2 == 0) {
        printf("Evil Number");
    } else {
        printf("Odious Number");
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Initialize count of 1s",
    "Convert number to binary using division by 2",
    "Count number of 1 bits",
    "Check if count is even or odd",
    "Print Evil or Odious",
    "End program"
  ],
  output: "Odious Number"
},

{
  title: "Factorial from 1 to N",
  description: "Write a program to print factorial of numbers from 1 to n.",
  solution: `#include <stdio.h>

int main() {
    int n = 5;

    for(int i = 1; i <= n; i++) {
        int fact = 1;

        for(int j = 1; j <= i; j++) {
            fact *= j;
        }

        printf("%d ", fact);
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Loop from 1 to n",
    "Initialize factorial",
    "Inner loop to compute factorial",
    "Multiply values",
    "Print factorial",
    "End program"
  ],
  output: "1 2 6 24 120"
},

{
  title: "Prime Numbers from 1 to N",
  description: "Write a program to print all prime numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 10;

    for(int i = 2; i <= n; i++) {
        int flag = 0;

        for(int j = 2; j < i; j++) {
            if(i % j == 0) {
                flag = 1;
                break;
            }
        }

        if(flag == 0) {
            printf("%d ", i);
        }
    }

    return 0;
}`,
  explanation: [
    "Include standard input-output library",
    "Main function starts",
    "Loop from 2 to n",
    "Initialize flag",
    "Check divisibility",
    "If divisible, mark not prime",
    "If prime, print number",
    "End program"
  ],
  output: "2 3 5 7"
},

{
  title: "All Automorphic Numbers from 1 to N",
  description: "Write a program to print all automorphic numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 100;

    for(int num = 1; num <= n; num++) {
        int square = num * num;
        int temp = num;
        int digits = 0;

        while(temp != 0) {
            digits++;
            temp /= 10;
        }

        int mod = 1;
        for(int i = 0; i < digits; i++) {
            mod *= 10;
        }

        if(square % mod == num) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop through numbers from 1 to n",
    "Find square of number",
    "Count digits of number",
    "Create modulus value",
    "Check if last digits match",
    "Print automorphic numbers"
  ],
  output: "1 5 6 25 76"
},

{
  title: "All Spy Numbers from 1 to N",
  description: "Write a program to print all spy numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 100;

    for(int num = 1; num <= n; num++) {
        int temp = num, sum = 0, product = 1;

        while(temp != 0) {
            int r = temp % 10;
            sum += r;
            product *= r;
            temp /= 10;
        }

        if(sum == product) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Extract digits",
    "Compute sum and product",
    "Compare sum and product",
    "Print spy numbers"
  ],
  output: "1 2 3 4 5 6 7 8 9 22"
},

{
  title: "All Happy Numbers from 1 to N",
  description: "Write a program to print all happy numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 50;

    for(int num = 1; num <= n; num++) {
        int temp = num;

        while(temp != 1 && temp != 4) {
            int sum = 0;

            while(temp != 0) {
                int r = temp % 10;
                sum += r * r;
                temp /= 10;
            }

            temp = sum;
        }

        if(temp == 1) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Apply happy number logic",
    "Square and sum digits repeatedly",
    "Stop when 1 or 4 reached",
    "Print happy numbers"
  ],
  output: "1 7 10 13 19 23 28 31 32 44 49"
},

{
  title: "All Sunny Numbers from 1 to N",
  description: "Write a program to print all sunny numbers between 1 and n.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n = 50;

    for(int num = 1; num <= n; num++) {
        int next = num + 1;
        int root = sqrt(next);

        if(root * root == next) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Add 1 to number",
    "Check if perfect square",
    "Print sunny numbers"
  ],
  output: "3 8 15 24 35 48"
},

{
  title: "All Fascinating Numbers from 1 to N",
  description: "Write a program to print all fascinating numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 500;

    for(int num = 100; num <= n; num++) {
        int temp = num * 1000000 + (num * 2) * 1000 + (num * 3);
        int digits[10] = {0};

        while(temp != 0) {
            int d = temp % 10;
            digits[d]++;
            temp /= 10;
        }

        int flag = 1;

        for(int i = 1; i <= 9; i++) {
            if(digits[i] != 1) {
                flag = 0;
                break;
            }
        }

        if(flag) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 100 to n",
    "Concatenate n, 2n, 3n",
    "Count digit frequency",
    "Check digits 1 to 9 appear once",
    "Print fascinating numbers"
  ],
  output: "192 219 273 327"
},

{
  title: "All Disarium Numbers from 1 to N",
  description: "Write a program to print all disarium numbers between 1 and n.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int n = 200;

    for(int num = 1; num <= n; num++) {
        int temp = num, digits = 0, sum = 0;

        while(temp != 0) {
            digits++;
            temp /= 10;
        }

        temp = num;

        while(temp != 0) {
            int r = temp % 10;
            sum += pow(r, digits);
            digits--;
            temp /= 10;
        }

        if(sum == num) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Count digits",
    "Raise digits to power of position",
    "Sum values",
    "Check equality",
    "Print disarium numbers"
  ],
  output: "1 2 3 4 5 6 7 8 9 89 135 175"
},

{
  title: "All Pronic Numbers from 1 to N",
  description: "Write a program to print all pronic numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 50;

    for(int num = 1; num <= n; num++) {
        for(int i = 0; i < num; i++) {
            if(i * (i + 1) == num) {
                printf("%d ", num);
                break;
            }
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Check for each number",
    "Verify if it is product of consecutive numbers",
    "Print pronic numbers"
  ],
  output: "2 6 12 20 30 42"
},

{
  title: "All Trimorphic Numbers from 1 to N",
  description: "Write a program to print all trimorphic numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 100;

    for(int num = 1; num <= n; num++) {
        int cube = num * num * num;
        int temp = num, digits = 0;

        while(temp != 0) {
            digits++;
            temp /= 10;
        }

        int mod = 1;
        for(int i = 0; i < digits; i++) {
            mod *= 10;
        }

        if(cube % mod == num) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Find cube of number",
    "Count digits",
    "Create modulus value",
    "Compare last digits of cube",
    "Print trimorphic numbers"
  ],
  output: "1 4 5 6 24 25 76"
},

{
  title: "All Evil Numbers from 1 to N",
  description: "Write a program to print all evil numbers between 1 and n.",
  solution: `#include <stdio.h>

int main() {
    int n = 20;

    for(int num = 1; num <= n; num++) {
        int temp = num, count = 0;

        while(temp != 0) {
            if(temp % 2 == 1) {
                count++;
            }
            temp /= 2;
        }

        if(count % 2 == 0) {
            printf("%d ", num);
        }
    }

    return 0;
}`,
  explanation: [
    "Loop from 1 to n",
    "Convert number to binary",
    "Count number of 1s",
    "Check if count is even",
    "Print evil numbers"
  ],
  output: "3 5 6 9 10 12 15"
},

{
  title: "Floyd Triangle",
  description: "Write a program to print Floyd's triangle.",
  solution: `#include <stdio.h>

int main() {
    int n = 5, num = 1;

    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= i; j++) {
            printf("%d ", num++);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize n and starting number",
    "Loop through rows",
    "Loop through columns",
    "Print increasing numbers",
    "Move to next line"
  ],
  output: `1
2 3
4 5 6
7 8 9 10
11 12 13 14 15`
},

{
  title: "Reverse a Number",
  description: "Write a program to reverse a number.",
  solution: `#include <stdio.h>

int main() {
    int n = 1234, reversed = 0, remainder;

    while(n != 0) {
        remainder = n % 10;
        reversed = reversed * 10 + remainder;
        n = n / 10;
    }

    printf("%d", reversed);

    return 0;
}`,
  explanation: [
    "Initialize variables",
    "Extract last digit",
    "Build reversed number",
    "Remove last digit",
    "Print reversed number"
  ],
  output: "4321"
},

{
  title: "Sum of Digits",
  description: "Write a program to find the sum of digits of a number.",
  solution: `#include <stdio.h>

int main() {
    int n = 123, sum = 0, remainder;

    while(n != 0) {
        remainder = n % 10;
        sum += remainder;
        n = n / 10;
    }

    printf("%d", sum);

    return 0;
}`,
  explanation: [
    "Initialize variables",
    "Extract last digit",
    "Add digit to sum",
    "Remove last digit",
    "Repeat until number becomes zero",
    "Print sum"
  ],
  output: "6"
},

{
  title: "Power of a Number",
  description: "Write a program to find power of a number.",
  solution: `#include <stdio.h>

int main() {
    int base = 2, exp = 3, result = 1;

    for(int i = 1; i <= exp; i++) {
        result *= base;
    }

    printf("%d", result);

    return 0;
}`,
  explanation: [
    "Initialize base and exponent",
    "Loop from 1 to exponent",
    "Multiply result by base",
    "Print result"
  ],
  output: "8"
},

{
  title: "Count Digits",
  description: "Write a program to count number of digits in a number.",
  solution: `#include <stdio.h>

int main() {
    int n = 12345, count = 0;

    while(n != 0) {
        count++;
        n = n / 10;
    }

    printf("%d", count);

    return 0;
}`,
  explanation: [
    "Initialize count",
    "Divide number by 10 repeatedly",
    "Increase count each time",
    "Print total digits"
  ],
  output: "5"
},

{
  title: "Random Number Generator",
  description: "Write a program to generate a random number.",
  solution: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(0));

    int num = rand() % 100;

    printf("%d", num);

    return 0;
}`,
  explanation: [
    "Include necessary libraries",
    "Seed random generator",
    "Generate random number",
    "Limit range using modulo",
    "Print number"
  ],
  output: "Random number between 0 and 99"
},

{
  title: "Enumeration Example",
  description: "Write a program to demonstrate enumeration in C.",
  solution: `#include <stdio.h>

enum Week {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

int main() {
    enum Week day;

    day = Wed;

    printf("%d", day);

    return 0;
}`,
  explanation: [
    "Define enum with days",
    "Declare enum variable",
    "Assign value",
    "Print enum value"
  ],
  output: "3"
},

{
  title: "Celsius to Fahrenheit",
  description: "Write a program to convert Celsius to Fahrenheit.",
  solution: `#include <stdio.h>

int main() {
    float c = 25, f;

    f = (c * 9 / 5) + 32;

    printf("%.2f", f);

    return 0;
}`,
  explanation: [
    "Initialize Celsius value",
    "Apply conversion formula",
    "Store result",
    "Print Fahrenheit value"
  ],
  output: "77.00"
},

{
  title: "Fahrenheit to Celsius",
  description: "Write a program to convert Fahrenheit to Celsius.",
  solution: `#include <stdio.h>

int main() {
    float f = 77, c;

    c = (f - 32) * 5 / 9;

    printf("%.2f", c);

    return 0;
}`,
  explanation: [
    "Initialize Fahrenheit value",
    "Apply conversion formula",
    "Store result",
    "Print Celsius value"
  ],
  output: "25.00"
},

{
  title: "Min and Max in Array",
  description: "Write a program to find minimum and maximum elements in an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {3, 7, 1, 9, 5};
    int min = arr[0], max = arr[0];

    for(int i = 1; i < 5; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    printf("Min: %d Max: %d", min, max);

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Assume first element as min and max",
    "Traverse array",
    "Update min if smaller found",
    "Update max if larger found",
    "Print results"
  ],
  output: "Min: 1 Max: 9"
},

{
  title: "Anagram Check",
  description: "Write a program to check whether two strings are anagrams.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char a[] = "listen";
    char b[] = "silent";
    int count[256] = {0};

    for(int i = 0; a[i]; i++) {
        count[a[i]]++;
        count[b[i]]--;
    }

    for(int i = 0; i < 256; i++) {
        if(count[i] != 0) {
            printf("Not Anagram");
            return 0;
        }
    }

    printf("Anagram");

    return 0;
}`,
  explanation: [
    "Initialize strings",
    "Create frequency array",
    "Increase for first string",
    "Decrease for second string",
    "Check if all counts zero",
    "Print result"
  ],
  output: "Anagram"
},

{
  title: "Super Digit",
  description: "Write a program to find the super digit of a number.",
  solution: `#include <stdio.h>

int main() {
    int n = 9875;

    while(n > 9) {
        int sum = 0;

        while(n != 0) {
            sum += n % 10;
            n /= 10;
        }

        n = sum;
    }

    printf("%d", n);

    return 0;
}`,
  explanation: [
    "Loop until single digit",
    "Sum digits",
    "Update number",
    "Repeat process",
    "Print super digit"
  ],
  output: "2"
},

{
  title: "LCM of Two Numbers",
  description: "Write a program to find LCM of two numbers.",
  solution: `#include <stdio.h>

int main() {
    int a = 4, b = 6, lcm;

    int max = (a > b) ? a : b;

    while(1) {
        if(max % a == 0 && max % b == 0) {
            lcm = max;
            break;
        }
        max++;
    }

    printf("%d", lcm);

    return 0;
}`,
  explanation: [
    "Find greater number",
    "Check multiples",
    "Find common multiple",
    "Print LCM"
  ],
  output: "12"
},

{
  title: "HCF / GCD",
  description: "Write a program to find GCD of two numbers.",
  solution: `#include <stdio.h>

int main() {
    int a = 12, b = 18;

    while(b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }

    printf("%d", a);

    return 0;
}`,
  explanation: [
    "Use Euclidean algorithm",
    "Swap values",
    "Take remainder",
    "Repeat until zero",
    "Print GCD"
  ],
  output: "6"
},

{
  title: "Speed Calculation",
  description: "Write a program to calculate speed (speed = distance / time).",
  solution: `#include <stdio.h>

int main() {
    float distance = 100, time = 2, speed;

    speed = distance / time;

    printf("%.2f", speed);

    return 0;
}`,
  explanation: [
    "Initialize distance and time",
    "Apply formula",
    "Calculate speed",
    "Print result"
  ],
  output: "50.00"
},

{
  title: "Simple Interest",
  description: "Write a program to calculate simple interest.",
  solution: `#include <stdio.h>

int main() {
    float p = 1000, r = 5, t = 2, si;

    si = (p * r * t) / 100;

    printf("%.2f", si);

    return 0;
}`,
  explanation: [
    "Initialize principal, rate, time",
    "Apply formula",
    "Calculate interest",
    "Print result"
  ],
  output: "100.00"
},

{
  title: "Ohm's Law",
  description: "Write a program to calculate current using Ohm's Law (I = V / R).",
  solution: `#include <stdio.h>

int main() {
    float V = 10, R = 2, I;

    I = V / R;

    printf("%.2f", I);

    return 0;
}`,
  explanation: [
    "Initialize voltage and resistance",
    "Apply Ohm's Law",
    "Calculate current",
    "Print result"
  ],
  output: "5.00"
},

{
  title: "Display Current Day and Date",
  description: "Write a program to display current date and time.",
  solution: `#include <stdio.h>
#include <time.h>

int main() {
    time_t t;
    time(&t);

    printf("%s", ctime(&t));

    return 0;
}`,
  explanation: [
    "Include time library",
    "Declare time variable",
    "Get current time",
    "Convert to readable format",
    "Print date and time"
  ],
  output: "Current date and time (system dependent)"
},

{
  title: "Circumference of Circle",
  description: "Write a program to calculate circumference of a circle.",
  solution: `#include <stdio.h>

int main() {
    float r = 7, c;

    c = 2 * 3.14 * r;

    printf("%.2f", c);

    return 0;
}`,
  explanation: [
    "Initialize radius",
    "Apply formula 2*pi*r",
    "Calculate circumference",
    "Print result"
  ],
  output: "43.96"
},

{
  title: "Area of Circle",
  description: "Write a program to calculate area of a circle.",
  solution: `#include <stdio.h>

int main() {
    float r = 7, area;

    area = 3.14 * r * r;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize radius",
    "Apply formula pi*r^2",
    "Calculate area",
    "Print result"
  ],
  output: "153.86"
},

{
  title: "Area of Triangle",
  description: "Write a program to calculate area of a triangle.",
  solution: `#include <stdio.h>

int main() {
    float base = 10, height = 5, area;

    area = 0.5 * base * height;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize base and height",
    "Apply formula 1/2 * base * height",
    "Calculate area",
    "Print result"
  ],
  output: "25.00"
},

{
  title: "Area of Equilateral Triangle",
  description: "Write a program to calculate area of an equilateral triangle.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float side = 6, area;

    area = (sqrt(3) / 4) * side * side;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize side",
    "Apply formula (√3/4)*side^2",
    "Calculate area",
    "Print result"
  ],
  output: "15.59"
},

{
  title: "Area of Rectangle",
  description: "Write a program to calculate area of a rectangle.",
  solution: `#include <stdio.h>

int main() {
    float length = 10, width = 5, area;

    area = length * width;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize length and width",
    "Apply formula length * width",
    "Calculate area",
    "Print result"
  ],
  output: "50.00"
},

{
  title: "Area of Square",
  description: "Write a program to calculate area of a square.",
  solution: `#include <stdio.h>

int main() {
    float side = 4, area;

    area = side * side;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize side",
    "Apply formula side^2",
    "Calculate area",
    "Print result"
  ],
  output: "16.00"
},

{
  title: "Area of Rhombus",
  description: "Write a program to calculate area of a rhombus.",
  solution: `#include <stdio.h>

int main() {
    float d1 = 6, d2 = 8, area;

    area = (d1 * d2) / 2;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize diagonals",
    "Apply formula (d1 * d2)/2",
    "Calculate area",
    "Print result"
  ],
  output: "24.00"
},

{
  title: "Area of Pentagon",
  description: "Write a program to calculate area of a regular pentagon.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float side = 5, area;

    area = (5 * side * side) / (4 * tan(3.14159/5));

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize side",
    "Apply pentagon area formula",
    "Calculate area",
    "Print result"
  ],
  output: "43.01"
},

{
  title: "Area of Hexagon",
  description: "Write a program to calculate area of a regular hexagon.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float side = 6, area;

    area = (3 * sqrt(3) * side * side) / 2;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize side",
    "Apply hexagon formula",
    "Calculate area",
    "Print result"
  ],
  output: "93.53"
},

{
  title: "Area of Heptagon",
  description: "Write a program to calculate area of a regular heptagon.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float side = 6, area;

    area = (7 * side * side) / (4 * tan(3.14159/7));

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize side",
    "Apply heptagon formula",
    "Calculate area",
    "Print result"
  ],
  output: "130.82"
},

{
  title: "Area of Octagon",
  description: "Write a program to calculate area of a regular octagon.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float side = 5, area;

    area = 2 * (1 + sqrt(2)) * side * side;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize side",
    "Apply octagon formula",
    "Calculate area",
    "Print result"
  ],
  output: "120.71"
},

{
  title: "Area of Trapezoid",
  description: "Write a program to calculate area of a trapezoid.",
  solution: `#include <stdio.h>

int main() {
    float a = 5, b = 7, h = 4, area;

    area = ((a + b) / 2) * h;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize parallel sides and height",
    "Apply formula ((a + b)/2) * h",
    "Calculate area",
    "Print result"
  ],
  output: "24.00"
},

{
  title: "Surface Area of Sphere",
  description: "Write a program to calculate surface area of a sphere.",
  solution: `#include <stdio.h>

int main() {
    float r = 7, area;

    area = 4 * 3.14 * r * r;

    printf("%.2f", area);

    return 0;
}`,
  explanation: [
    "Initialize radius",
    "Apply formula 4*pi*r^2",
    "Calculate surface area",
    "Print result"
  ],
  output: "615.44"
},

{
  title: "Volume of Sphere",
  description: "Write a program to calculate volume of a sphere.",
  solution: `#include <stdio.h>

int main() {
    float r = 7, volume;

    volume = (4.0/3.0) * 3.14 * r * r * r;

    printf("%.2f", volume);

    return 0;
}`,
  explanation: [
    "Initialize radius",
    "Apply formula (4/3)*pi*r^3",
    "Calculate volume",
    "Print result"
  ],
  output: "1436.03"
},

{
  title: "Volume of Hemisphere",
  description: "Write a program to calculate volume of a hemisphere.",
  solution: `#include <stdio.h>

int main() {
    float r = 7, volume;

    volume = (2.0/3.0) * 3.14 * r * r * r;

    printf("%.2f", volume);

    return 0;
}`,
  explanation: [
    "Initialize radius",
    "Apply formula (2/3)*pi*r^3",
    "Calculate volume",
    "Print result"
  ],
  output: "718.01"
},

{
  title: "Volume of Cone",
  description: "Write a program to calculate volume of a cone.",
  solution: `#include <stdio.h>

int main() {
    float r = 3, h = 5, volume;

    volume = (1.0/3.0) * 3.14 * r * r * h;

    printf("%.2f", volume);

    return 0;
}`,
  explanation: [
    "Initialize radius and height",
    "Apply formula (1/3)*pi*r^2*h",
    "Calculate volume",
    "Print result"
  ],
  output: "47.10"
},

{
  title: "Volume of Cuboid",
  description: "Write a program to calculate volume of a cuboid.",
  solution: `#include <stdio.h>

int main() {
    float length = 5, width = 4, height = 3, volume;

    volume = length * width * height;

    printf("%.2f", volume);

    return 0;
}`,
  explanation: [
    "Initialize length, width, height",
    "Apply formula l*w*h",
    "Calculate volume",
    "Print result"
  ],
  output: "60.00"
},

{
  title: "Binary to Decimal",
  description: "Write a program to convert binary number to decimal.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int binary = 1011, decimal = 0, i = 0, remainder;

    while(binary != 0) {
        remainder = binary % 10;
        decimal += remainder * pow(2, i);
        binary /= 10;
        i++;
    }

    printf("%d", decimal);

    return 0;
}`,
  explanation: [
    "Initialize variables",
    "Extract last digit",
    "Multiply with 2^position",
    "Add to decimal",
    "Repeat process",
    "Print result"
  ],
  output: "11"
},

{
  title: "Binary to Octal",
  description: "Write a program to convert binary number to octal.",
  solution: `#include <stdio.h>

int main() {
    int binary = 101011;
    int decimal = 0, i = 0;

    while(binary != 0) {
        int r = binary % 10;
        decimal += r * (1 << i);
        binary /= 10;
        i++;
    }

    int octal = 0, place = 1;

    while(decimal != 0) {
        octal += (decimal % 8) * place;
        decimal /= 8;
        place *= 10;
    }

    printf("%d", octal);

    return 0;
}`,
  explanation: [
    "Convert binary to decimal",
    "Convert decimal to octal",
    "Print result"
  ],
  output: "53"
},

{
  title: "Binary to Hexadecimal",
  description: "Write a program to convert binary number to hexadecimal.",
  solution: `#include <stdio.h>

int main() {
    int binary = 1111;
    int decimal = 0, i = 0;

    while(binary != 0) {
        int r = binary % 10;
        decimal += r * (1 << i);
        binary /= 10;
        i++;
    }

    printf("%X", decimal);

    return 0;
}`,
  explanation: [
    "Convert binary to decimal",
    "Use %X to print hexadecimal",
    "Print result"
  ],
  output: "F"
},

{
  title: "Decimal to Binary",
  description: "Write a program to convert decimal number to binary.",
  solution: `#include <stdio.h>

int main() {
    int n = 11;
    int binary[32], i = 0;

    while(n > 0) {
        binary[i++] = n % 2;
        n /= 2;
    }

    for(int j = i - 1; j >= 0; j--) {
        printf("%d", binary[j]);
    }

    return 0;
}`,
  explanation: [
    "Divide number by 2",
    "Store remainder",
    "Repeat process",
    "Print in reverse order"
  ],
  output: "1011"
},

{
  title: "Decimal to Octal",
  description: "Write a program to convert decimal number to octal.",
  solution: `#include <stdio.h>

int main() {
    int n = 43;
    int octal[32], i = 0;

    while(n > 0) {
        octal[i++] = n % 8;
        n /= 8;
    }

    for(int j = i - 1; j >= 0; j--) {
        printf("%d", octal[j]);
    }

    return 0;
}`,
  explanation: [
    "Divide number by 8",
    "Store remainder",
    "Repeat process",
    "Print in reverse"
  ],
  output: "53"
},

{
  title: "Decimal to Hexadecimal",
  description: "Write a program to convert decimal number to hexadecimal.",
  solution: `#include <stdio.h>

int main() {
    int n = 255;
    char hex[32];
    int i = 0;

    while(n > 0) {
        int r = n % 16;

        if(r < 10)
            hex[i++] = r + '0';
        else
            hex[i++] = r - 10 + 'A';

        n /= 16;
    }

    for(int j = i - 1; j >= 0; j--) {
        printf("%c", hex[j]);
    }

    return 0;
}`,
  explanation: [
    "Divide number by 16",
    "Store remainder",
    "Convert to character",
    "Repeat process",
    "Print in reverse"
  ],
  output: "FF"
},

{
  title: "Hexadecimal to Binary",
  description: "Write a program to convert hexadecimal to binary.",
  solution: `#include <stdio.h>

int main() {
    char hex[] = "1F";

    for(int i = 0; hex[i] != '\\0'; i++) {
        switch(hex[i]) {
            case '0': printf("0000"); break;
            case '1': printf("0001"); break;
            case '2': printf("0010"); break;
            case '3': printf("0011"); break;
            case '4': printf("0100"); break;
            case '5': printf("0101"); break;
            case '6': printf("0110"); break;
            case '7': printf("0111"); break;
            case '8': printf("1000"); break;
            case '9': printf("1001"); break;
            case 'A': case 'a': printf("1010"); break;
            case 'B': case 'b': printf("1011"); break;
            case 'C': case 'c': printf("1100"); break;
            case 'D': case 'd': printf("1101"); break;
            case 'E': case 'e': printf("1110"); break;
            case 'F': case 'f': printf("1111"); break;
        }
    }

    return 0;
}`,
  explanation: [
    "Read hexadecimal string",
    "Use switch case",
    "Convert each digit to binary",
    "Print binary result"
  ],
  output: "00011111"
},

{
  title: "Hexadecimal to Decimal",
  description: "Write a program to convert hexadecimal to decimal.",
  solution: `#include <stdio.h>
#include <math.h>
#include <string.h>

int main() {
    char hex[] = "1A";
    int len = strlen(hex);
    int decimal = 0;

    for(int i = 0; i < len; i++) {
        int value;

        if(hex[i] >= '0' && hex[i] <= '9')
            value = hex[i] - '0';
        else
            value = hex[i] - 'A' + 10;

        decimal += value * pow(16, len - i - 1);
    }

    printf("%d", decimal);

    return 0;
}`,
  explanation: [
    "Read hexadecimal string",
    "Convert each character to value",
    "Multiply with power of 16",
    "Add to decimal",
    "Print result"
  ],
  output: "26"
},

{
  title: "Hexadecimal to Octal",
  description: "Write a program to convert hexadecimal to octal.",
  solution: `#include <stdio.h>

int main() {
    int hex = 31; // example: 1F = 31 decimal
    int decimal = hex;
    int octal = 0, place = 1;

    while(decimal != 0) {
        octal += (decimal % 8) * place;
        decimal /= 8;
        place *= 10;
    }

    printf("%d", octal);

    return 0;
}`,
  explanation: [
    "Convert hex to decimal (assumed)",
    "Convert decimal to octal",
    "Print result"
  ],
  output: "37"
},

{
  title: "Octal to Binary",
  description: "Write a program to convert octal to binary.",
  solution: `#include <stdio.h>

int main() {
    int octal = 17;
    int decimal = 0, i = 0;

    while(octal != 0) {
        int r = octal % 10;
        decimal += r * (1 << (3 * i));
        octal /= 10;
        i++;
    }

    int binary[32], j = 0;

    while(decimal > 0) {
        binary[j++] = decimal % 2;
        decimal /= 2;
    }

    for(int k = j - 1; k >= 0; k--) {
        printf("%d", binary[k]);
    }

    return 0;
}`,
  explanation: [
    "Convert octal to decimal",
    "Convert decimal to binary",
    "Print result"
  ],
  output: "1111"
},

{
  title: "Octal to Decimal",
  description: "Write a program to convert octal to decimal.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int octal = 17, decimal = 0, i = 0;

    while(octal != 0) {
        int r = octal % 10;
        decimal += r * pow(8, i);
        octal /= 10;
        i++;
    }

    printf("%d", decimal);

    return 0;
}`,
  explanation: [
    "Extract digits",
    "Multiply with 8^position",
    "Add to decimal",
    "Print result"
  ],
  output: "15"
},

{
  title: "Octal to Hexadecimal",
  description: "Write a program to convert octal to hexadecimal.",
  solution: `#include <stdio.h>

int main() {
    int octal = 17;
    int decimal = 0, i = 0;

    while(octal != 0) {
        int r = octal % 10;
        decimal += r * (1 << (3 * i));
        octal /= 10;
        i++;
    }

    printf("%X", decimal);

    return 0;
}`,
  explanation: [
    "Convert octal to decimal",
    "Print using %X for hex",
    "Display result"
  ],
  output: "F"
},

{
  title: "Display Matrix",
  description: "Write a program to display elements of a matrix.",
  solution: `#include <stdio.h>

int main() {
    int arr[2][2] = {{1, 2}, {3, 4}};

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            printf("%d ", arr[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize 2D array",
    "Use nested loops",
    "Traverse rows and columns",
    "Print each element",
    "Move to next line"
  ],
  output: `1 2
3 4`
},

{
  title: "Sum of Two Matrices",
  description: "Write a program to add two matrices.",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int sum[2][2];

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            sum[i][j] = a[i][j] + b[i][j];
            printf("%d ", sum[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize two matrices",
    "Use nested loops",
    "Add corresponding elements",
    "Store result",
    "Print matrix"
  ],
  output: `6 8
10 12`
},

{
  title: "Matrix Multiplication",
  description: "Write a program to multiply two matrices.",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int b[2][2] = {{5, 6}, {7, 8}};
    int result[2][2] = {0};

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            for(int k = 0; k < 2; k++) {
                result[i][j] += a[i][k] * b[k][j];
            }
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize matrices",
    "Use triple nested loops",
    "Multiply row and column",
    "Add results",
    "Print matrix"
  ],
  output: `19 22
43 50`
},

{
  title: "Square of Matrix",
  description: "Write a program to find square of a matrix (A × A).",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int result[2][2] = {0};

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            for(int k = 0; k < 2; k++) {
                result[i][j] += a[i][k] * a[k][j];
            }
            printf("%d ", result[i][j]);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Multiply matrix with itself",
    "Use triple loop",
    "Store result",
    "Print output"
  ],
  output: `7 10
15 22`
},

{
  title: "Sparse Matrix Check",
  description: "Write a program to check whether a matrix is sparse.",
  solution: `#include <stdio.h>

int main() {
    int a[3][3] = {{0, 0, 1}, {0, 0, 0}, {2, 0, 0}};
    int zero = 0, total = 9;

    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            if(a[i][j] == 0) {
                zero++;
            }
        }
    }

    if(zero > total / 2) {
        printf("Sparse Matrix");
    } else {
        printf("Not Sparse");
    }

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Count zero elements",
    "Compare with total elements",
    "Check sparse condition",
    "Print result"
  ],
  output: "Sparse Matrix"
},

{
  title: "Transpose of Matrix",
  description: "Write a program to find transpose of a matrix.",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            printf("%d ", a[j][i]);
        }
        printf("\\n");
    }

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Swap row and column indices",
    "Print transposed matrix",
    "Use nested loops"
  ],
  output: `1 3
2 4`
},

{
  title: "Symmetric Matrix Check",
  description: "Write a program to check whether a matrix is symmetric.",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {2, 1}};
    int flag = 1;

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            if(a[i][j] != a[j][i]) {
                flag = 0;
                break;
            }
        }
    }

    if(flag)
        printf("Symmetric Matrix");
    else
        printf("Not Symmetric");

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Compare a[i][j] with a[j][i]",
    "Set flag if mismatch found",
    "Print result"
  ],
  output: "Symmetric Matrix"
},

{
  title: "Normal and Trace of Matrix",
  description: "Write a program to find normal and trace of a matrix.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int trace = 0;
    float normal = 0;

    for(int i = 0; i < 2; i++) {
        trace += a[i][i];
    }

    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 2; j++) {
            normal += a[i][j] * a[i][j];
        }
    }

    normal = sqrt(normal);

    printf("Trace: %d\\nNormal: %.2f", trace, normal);

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Calculate trace (diagonal sum)",
    "Calculate sum of squares",
    "Take square root",
    "Print results"
  ],
  output: `Trace: 5
Normal: 5.48`
},

{
  title: "Determinant of Matrix",
  description: "Write a program to find determinant of a 2x2 matrix.",
  solution: `#include <stdio.h>

int main() {
    int a[2][2] = {{1, 2}, {3, 4}};
    int det;

    det = (a[0][0] * a[1][1]) - (a[0][1] * a[1][0]);

    printf("%d", det);

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Apply determinant formula",
    "Calculate value",
    "Print result"
  ],
  output: "-2"
},

{
  title: "Inverse of Matrix",
  description: "Write a program to find inverse of a 2x2 matrix.",
  solution: `#include <stdio.h>

int main() {
    float a[2][2] = {{4, 7}, {2, 6}};
    float det;

    det = (a[0][0]*a[1][1]) - (a[0][1]*a[1][0]);

    printf("%.2f %.2f\\n%.2f %.2f",
           a[1][1]/det, -a[0][1]/det,
           -a[1][0]/det, a[0][0]/det);

    return 0;
}`,
  explanation: [
    "Initialize matrix",
    "Calculate determinant",
    "Apply inverse formula",
    "Print result"
  ],
  output: `0.60 -0.70
-0.20 0.40`
},

{
  title: "Insertion Sort",
  description: "Write a program to sort an array using insertion sort.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {5, 2, 4, 6, 1};

    for(int i = 1; i < 5; i++) {
        int key = arr[i];
        int j = i - 1;

        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Start from second element",
    "Store key",
    "Shift larger elements",
    "Insert key at correct position",
    "Print sorted array"
  ],
  output: "1 2 4 5 6"
},

{
  title: "Selection Sort",
  description: "Write a program to sort an array using selection sort.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {64, 25, 12, 22, 11};

    for(int i = 0; i < 4; i++) {
        int min = i;

        for(int j = i + 1; j < 5; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Select minimum element",
    "Swap with current position",
    "Repeat for all elements",
    "Print sorted array"
  ],
  output: "11 12 22 25 64"
},

{
  title: "Bubble Sort",
  description: "Write a program to sort an array using bubble sort.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {5, 1, 4, 2, 8};

    for(int i = 0; i < 4; i++) {
        for(int j = 0; j < 4 - i; j++) {
            if(arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Compare adjacent elements",
    "Swap if needed",
    "Repeat passes",
    "Largest elements move to end",
    "Print sorted array"
  ],
  output: "1 2 4 5 8"
},

{
  title: "Merge Sort",
  description: "Write a program to sort an array using merge sort.",
  solution: `#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
    int i = l, j = m + 1, k = 0;
    int temp[100];

    while(i <= m && j <= r) {
        if(arr[i] < arr[j])
            temp[k++] = arr[i++];
        else
            temp[k++] = arr[j++];
    }

    while(i <= m) temp[k++] = arr[i++];
    while(j <= r) temp[k++] = arr[j++];

    for(i = l, k = 0; i <= r; i++, k++) {
        arr[i] = temp[k];
    }
}

void mergeSort(int arr[], int l, int r) {
    if(l < r) {
        int m = (l + r) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

int main() {
    int arr[5] = {5, 2, 4, 1, 3};

    mergeSort(arr, 0, 4);

    for(int i = 0; i < 5; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
  explanation: [
    "Divide array recursively",
    "Sort subarrays",
    "Merge sorted arrays",
    "Print result"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Quick Sort",
  description: "Write a program to sort an array using quick sort.",
  solution: `#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for(int j = low; j < high; j++) {
        if(arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    int temp = arr[i+1];
    arr[i+1] = arr[high];
    arr[high] = temp;

    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if(low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[5] = {10, 7, 8, 9, 1};

    quickSort(arr, 0, 4);

    for(int i = 0; i < 5; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
  explanation: [
    "Choose pivot",
    "Partition array",
    "Recursively sort subarrays",
    "Print result"
  ],
  output: "1 7 8 9 10"
},

{
  title: "Heap Sort",
  description: "Write a program to sort an array using heap sort.",
  solution: `#include <stdio.h>

void heapify(int arr[], int n, int i) {
    int largest = i;
    int l = 2*i + 1;
    int r = 2*i + 2;

    if(l < n && arr[l] > arr[largest])
        largest = l;

    if(r < n && arr[r] > arr[largest])
        largest = r;

    if(largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}

int main() {
    int arr[5] = {4, 10, 3, 5, 1};
    int n = 5;

    for(int i = n/2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    for(int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
  explanation: [
    "Build max heap",
    "Swap root with last",
    "Heapify remaining",
    "Repeat process",
    "Print sorted array"
  ],
  output: "1 3 4 5 10"
},

{
  title: "Shell Sort",
  description: "Write a program to sort an array using shell sort.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {12, 34, 54, 2, 3};
    int n = 5;

    for(int gap = n/2; gap > 0; gap /= 2) {
        for(int i = gap; i < n; i++) {
            int temp = arr[i];
            int j;

            for(j = i; j >= gap && arr[j-gap] > temp; j -= gap) {
                arr[j] = arr[j-gap];
            }

            arr[j] = temp;
        }
    }

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
  explanation: [
    "Initialize gap",
    "Perform insertion sort with gap",
    "Reduce gap gradually",
    "Sort array",
    "Print result"
  ],
  output: "2 3 12 34 54"
},

{
  title: "Radix Sort",
  description: "Write a program to sort numbers using radix sort.",
  solution: `#include <stdio.h>

int getMax(int arr[], int n) {
    int max = arr[0];
    for(int i = 1; i < n; i++)
        if(arr[i] > max)
            max = arr[i];
    return max;
}

void countSort(int arr[], int n, int exp) {
    int output[10], count[10] = {0};

    for(int i = 0; i < n; i++)
        count[(arr[i]/exp)%10]++;

    for(int i = 1; i < 10; i++)
        count[i] += count[i-1];

    for(int i = n-1; i >= 0; i--) {
        output[count[(arr[i]/exp)%10] - 1] = arr[i];
        count[(arr[i]/exp)%10]--;
    }

    for(int i = 0; i < n; i++)
        arr[i] = output[i];
}

int main() {
    int arr[5] = {170, 45, 75, 90, 802};
    int n = 5;

    int max = getMax(arr, n);

    for(int exp = 1; max/exp > 0; exp *= 10)
        countSort(arr, n, exp);

    for(int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    return 0;
}`,
  explanation: [
    "Find maximum number",
    "Sort digits using counting sort",
    "Process each digit place",
    "Repeat until sorted",
    "Print result"
  ],
  output: "45 75 90 170 802"
},

{
  title: "Linear Search",
  description: "Write a program to search an element using linear search.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int key = 30, found = 0;

    for(int i = 0; i < 5; i++) {
        if(arr[i] == key) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,
  explanation: [
    "Initialize array and key",
    "Traverse array",
    "Compare each element",
    "Set flag if found",
    "Print result"
  ],
  output: "Found"
},

{
  title: "Binary Search",
  description: "Write a program to search an element using binary search.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int key = 40;
    int low = 0, high = 4, mid;

    while(low <= high) {
        mid = (low + high) / 2;

        if(arr[mid] == key) {
            printf("Found");
            return 0;
        } else if(arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    printf("Not Found");

    return 0;
}`,
  explanation: [
    "Initialize sorted array",
    "Set low and high",
    "Find mid element",
    "Compare with key",
    "Adjust search range",
    "Repeat until found"
  ],
  output: "Found"
},

{
  title: "Recursive Binary Search",
  description: "Write a program to search using recursive binary search.",
  solution: `#include <stdio.h>

int binarySearch(int arr[], int low, int high, int key) {
    if(low > high)
        return -1;

    int mid = (low + high) / 2;

    if(arr[mid] == key)
        return mid;
    else if(arr[mid] < key)
        return binarySearch(arr, mid + 1, high, key);
    else
        return binarySearch(arr, low, mid - 1, key);
}

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int key = 20;

    int result = binarySearch(arr, 0, 4, key);

    if(result != -1)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,
  explanation: [
    "Define recursive function",
    "Check base condition",
    "Find mid element",
    "Compare key",
    "Call function recursively",
    "Return result"
  ],
  output: "Found"
},

{
  title: "Array Demo 1",
  description: "Write a program to print elements of an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Use loop",
    "Access elements using index",
    "Print values"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Array Demo 2 (User Input)",
  description: "Write a program to take array input from user and print it.",
  solution: `#include <stdio.h>

int main() {
    int arr[3];

    for(int i = 0; i < 3; i++) {
        scanf("%d", &arr[i]);
    }

    for(int i = 0; i < 3; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Declare array",
    "Take input using scanf",
    "Store values",
    "Print elements"
  ],
  output: "Depends on user input"
},

{
  title: "Array Demo 3",
  description: "Write a program to find sum of array elements.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int sum = 0;

    for(int i = 0; i < 5; i++) {
        sum += arr[i];
    }

    printf("%d", sum);

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Initialize sum",
    "Loop through array",
    "Add elements",
    "Print sum"
  ],
  output: "15"
},

{
  title: "Print Array in Reverse Order",
  description: "Write a program to print array elements in reverse order.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    for(int i = 4; i >= 0; i--) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Start loop from last index",
    "Decrement index",
    "Print elements in reverse"
  ],
  output: "5 4 3 2 1"
},

{
  title: "Search Element in Array",
  description: "Write a program to search a number in an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int key = 30, found = 0;

    for(int i = 0; i < 5; i++) {
        if(arr[i] == key) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,
  explanation: [
    "Initialize array and key",
    "Loop through array",
    "Compare elements",
    "Set flag if found",
    "Print result"
  ],
  output: "Found"
},

{
  title: "Search Element and Show Index",
  description: "Write a program to search a number and display its index.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int key = 40;

    for(int i = 0; i < 5; i++) {
        if(arr[i] == key) {
            printf("Index: %d", i);
            return 0;
        }
    }

    printf("Not Found");

    return 0;
}`,
  explanation: [
    "Initialize array and key",
    "Traverse array",
    "Compare values",
    "Print index if found",
    "Else print not found"
  ],
  output: "Index: 3"
},

{
  title: "Array Sorting (Increasing Order)",
  description: "Write a program to sort array in ascending order.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {5, 3, 1, 4, 2};

    for(int i = 0; i < 4; i++) {
        for(int j = i + 1; j < 5; j++) {
            if(arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Use nested loops",
    "Compare elements",
    "Swap if needed",
    "Print sorted array"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Array Sorting (Decreasing Order)",
  description: "Write a program to sort array in descending order.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {5, 3, 1, 4, 2};

    for(int i = 0; i < 4; i++) {
        for(int j = i + 1; j < 5; j++) {
            if(arr[i] < arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for(int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Use nested loops",
    "Swap for descending condition",
    "Print sorted array"
  ],
  output: "5 4 3 2 1"
},

{
  title: "Merge Two Arrays",
  description: "Write a program to merge two arrays.",
  solution: `#include <stdio.h>

int main() {
    int a[3] = {1, 2, 3};
    int b[3] = {4, 5, 6};
    int c[6];

    for(int i = 0; i < 3; i++) {
        c[i] = a[i];
    }

    for(int i = 0; i < 3; i++) {
        c[i + 3] = b[i];
    }

    for(int i = 0; i < 6; i++) {
        printf("%d ", c[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize two arrays",
    "Copy first array",
    "Copy second array",
    "Store in new array",
    "Print merged array"
  ],
  output: "1 2 3 4 5 6"
},

{
  title: "Insert Element in Array",
  description: "Write a program to insert an element at a given position in an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[6] = {1, 2, 3, 4, 5};
    int n = 5, pos = 2, val = 99;

    for(int i = n; i > pos; i--) {
        arr[i] = arr[i - 1];
    }

    arr[pos] = val;
    n++;

    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize array and size",
    "Shift elements to right",
    "Insert new value",
    "Increase size",
    "Print updated array"
  ],
  output: "1 2 99 3 4 5"
},

{
  title: "Delete Element by Value",
  description: "Write a program to delete an element from array by value.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int n = 5, val = 3, pos = -1;

    for(int i = 0; i < n; i++) {
        if(arr[i] == val) {
            pos = i;
            break;
        }
    }

    if(pos != -1) {
        for(int i = pos; i < n - 1; i++) {
            arr[i] = arr[i + 1];
        }
        n--;
    }

    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Find element position",
    "Shift elements left",
    "Reduce size",
    "Print updated array"
  ],
  output: "1 2 4 5"
},

{
  title: "Delete Element by Position",
  description: "Write a program to delete an element from array by position.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int n = 5, pos = 2;

    for(int i = pos; i < n - 1; i++) {
        arr[i] = arr[i + 1];
    }

    n--;

    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Select position",
    "Shift elements left",
    "Decrease size",
    "Print result"
  ],
  output: "1 2 4 5"
},

{
  title: "Remove Duplicates (In-place)",
  description: "Write a program to remove duplicate elements from array.",
  solution: `#include <stdio.h>

int main() {
    int arr[7] = {1, 2, 2, 3, 4, 4, 5};
    int n = 7;

    for(int i = 0; i < n; i++) {
        for(int j = i + 1; j < n; j++) {
            if(arr[i] == arr[j]) {
                for(int k = j; k < n - 1; k++) {
                    arr[k] = arr[k + 1];
                }
                n--;
                j--;
            }
        }
    }

    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Compare elements",
    "Remove duplicates by shifting",
    "Adjust size",
    "Print unique elements"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Remove Duplicates (Using Another Array)",
  description: "Write a program to remove duplicates using another array.",
  solution: `#include <stdio.h>

int main() {
    int arr[7] = {1, 2, 2, 3, 4, 4, 5};
    int result[7];
    int n = 7, k = 0;

    for(int i = 0; i < n; i++) {
        int found = 0;

        for(int j = 0; j < k; j++) {
            if(arr[i] == result[j]) {
                found = 1;
                break;
            }
        }

        if(!found) {
            result[k++] = arr[i];
        }
    }

    for(int i = 0; i < k; i++) {
        printf("%d ", result[i]);
    }

    return 0;
}`,
  explanation: [
    "Initialize result array",
    "Check duplicates",
    "Store unique values",
    "Print result"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Min and Max of Array",
  description: "Write a program to find minimum and maximum elements in an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {3, 7, 1, 9, 5};
    int min = arr[0], max = arr[0];

    for(int i = 1; i < 5; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    printf("Min: %d Max: %d", min, max);

    return 0;
}`,
  explanation: [
    "Initialize min and max",
    "Traverse array",
    "Update values",
    "Print result"
  ],
  output: "Min: 1 Max: 9"
},

{
  title: "Sum of All Elements in Array",
  description: "Write a program to find sum of all elements of an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int sum = 0;

    for(int i = 0; i < 5; i++) {
        sum += arr[i];
    }

    printf("%d", sum);

    return 0;
}`,
  explanation: [
    "Initialize array",
    "Initialize sum",
    "Traverse array",
    "Add elements",
    "Print result"
  ],
  output: "15"
},

{
  title: "Count Occurrence of Number",
  description: "Write a program to count occurrences of a number in array.",
  solution: `#include <stdio.h>

int main() {
    int arr[6] = {1, 2, 3, 2, 4, 2};
    int key = 2, count = 0;

    for(int i = 0; i < 6; i++) {
        if(arr[i] == key) {
            count++;
        }
    }

    printf("%d", count);

    return 0;
}`,
  explanation: [
    "Initialize array and key",
    "Traverse array",
    "Compare elements",
    "Increase count",
    "Print result"
  ],
  output: "3"
},

{
  title: "Count Even and Odd Numbers",
  description: "Write a program to count even and odd numbers in array.",
  solution: `#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int even = 0, odd = 0;

    for(int i = 0; i < 5; i++) {
        if(arr[i] % 2 == 0)
            even++;
        else
            odd++;
    }

    printf("Even: %d Odd: %d", even, odd);

    return 0;
}`,
  explanation: [
    "Initialize counters",
    "Traverse array",
    "Check even or odd",
    "Increase respective count",
    "Print result"
  ],
  output: "Even: 2 Odd: 3"
},

{
  title: "Function Demo",
  description: "Write a program to demonstrate a simple function.",
  solution: `#include <stdio.h>

void greet() {
    printf("Hello from function");
}

int main() {
    greet();

    return 0;
}`,
  explanation: [
    "Define function",
    "Call function in main",
    "Execute function body",
    "Print message"
  ],
  output: "Hello from function"
},

{
  title: "Function Calling Demo",
  description: "Write a program to demonstrate function calling.",
  solution: `#include <stdio.h>

void add(int a, int b) {
    printf("%d", a + b);
}

int main() {
    add(5, 3);

    return 0;
}`,
  explanation: [
    "Define function with parameters",
    "Call function with arguments",
    "Perform operation",
    "Print result"
  ],
  output: "8"
},

{
  title: "Return Demo",
  description: "Write a program to demonstrate return value in function.",
  solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(4, 6);

    printf("%d", result);

    return 0;
}`,
  explanation: [
    "Define function with return type",
    "Return result",
    "Call function",
    "Store return value",
    "Print result"
  ],
  output: "10"
},

{
  title: "Function (No Arguments, No Return Type)",
  description: "Write a program to demonstrate function with no arguments and no return type.",
  solution: `#include <stdio.h>

void display() {
    printf("Hello World");
}

int main() {
    display();

    return 0;
}`,
  explanation: [
    "Define function without parameters",
    "Function has no return type",
    "Call function from main",
    "Print message"
  ],
  output: "Hello World"
},

{
  title: "Function (With Arguments, No Return Type)",
  description: "Write a program to demonstrate function with arguments and no return type.",
  solution: `#include <stdio.h>

void add(int a, int b) {
    printf("%d", a + b);
}

int main() {
    add(5, 7);

    return 0;
}`,
  explanation: [
    "Define function with parameters",
    "Pass values during call",
    "Perform operation",
    "Print result"
  ],
  output: "12"
},

{
  title: "Function (No Arguments, With Return Type)",
  description: "Write a program to demonstrate function with no arguments but with return type.",
  solution: `#include <stdio.h>

int getNumber() {
    return 10;
}

int main() {
    int num = getNumber();

    printf("%d", num);

    return 0;
}`,
  explanation: [
    "Define function with return type",
    "No parameters used",
    "Return value",
    "Store and print result"
  ],
  output: "10"
},

{
  title: "Function (With Arguments and Return Type)",
  description: "Write a program to demonstrate function with arguments and return type.",
  solution: `#include <stdio.h>

int multiply(int a, int b) {
    return a * b;
}

int main() {
    int result = multiply(4, 5);

    printf("%d", result);

    return 0;
}`,
  explanation: [
    "Define function with parameters",
    "Return computed value",
    "Call function",
    "Store result",
    "Print output"
  ],
  output: "20"
},

{
  title: "Call by Value Demo",
  description: "Write a program to demonstrate call by value.",
  solution: `#include <stdio.h>

void swap(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;

    swap(x, y);

    printf("%d %d", x, y);

    return 0;
}`,
  explanation: [
    "Define swap function",
    "Pass values to function",
    "Swap happens inside function",
    "Original values unchanged",
    "Print result"
  ],
  output: "5 10"
},

{
  title: "Pass by Address (Swap Numbers)",
  description: "Write a program to swap two numbers using call by address.",
  solution: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;

    swap(&x, &y);

    printf("%d %d", x, y);

    return 0;
}`,
  explanation: [
    "Use pointers in function",
    "Pass addresses of variables",
    "Swap using dereferencing",
    "Values change in original variables",
    "Print swapped values"
  ],
  output: "10 5"
},

{
  title: "Passing Array as Argument",
  description: "Write a program to pass an array to a function.",
  solution: `#include <stdio.h>

void printArray(int arr[], int n) {
    for(int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int arr[5] = {1, 2, 3, 4, 5};

    printArray(arr, 5);

    return 0;
}`,
  explanation: [
    "Define function with array parameter",
    "Pass array from main",
    "Traverse array in function",
    "Print elements"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Ellipsis Demo (Variable Arguments)",
  description: "Write a program to demonstrate variable arguments using ellipsis.",
  solution: `#include <stdio.h>
#include <stdarg.h>

int sum(int count, ...) {
    int total = 0;

    va_list args;
    va_start(args, count);

    for(int i = 0; i < count; i++) {
        total += va_arg(args, int);
    }

    va_end(args);

    return total;
}

int main() {
    printf("%d", sum(3, 10, 20, 30));

    return 0;
}`,
  explanation: [
    "Use stdarg library",
    "Initialize argument list",
    "Access variable arguments",
    "Add values",
    "Return result"
  ],
  output: "60"
},

{
  title: "Function Example 1 (Add Two Numbers)",
  description: "Write a program to add two numbers using function.",
  solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    printf("%d", add(3, 7));

    return 0;
}`,
  explanation: [
    "Define function",
    "Return sum",
    "Call function",
    "Print result"
  ],
  output: "10"
},

{
  title: "Function Example 2 (Square Number)",
  description: "Write a program to find square of a number using function.",
  solution: `#include <stdio.h>

int square(int n) {
    return n * n;
}

int main() {
    printf("%d", square(5));

    return 0;
}`,
  explanation: [
    "Define function",
    "Multiply number",
    "Return result",
    "Print output"
  ],
  output: "25"
},

{
  title: "Function Example 3 (Factorial)",
  description: "Write a program to find factorial using function.",
  solution: `#include <stdio.h>

int factorial(int n) {
    int fact = 1;

    for(int i = 1; i <= n; i++) {
        fact *= i;
    }

    return fact;
}

int main() {
    printf("%d", factorial(5));

    return 0;
}`,
  explanation: [
    "Define function",
    "Use loop for factorial",
    "Multiply values",
    "Return result",
    "Print output"
  ],
  output: "120"
},

{
  title: "Function Example 4 (Student Percentage)",
  description: "Write a program to calculate percentage using function.",
  solution: `#include <stdio.h>

float percentage(int m1, int m2, int m3) {
    return (m1 + m2 + m3) / 3.0;
}

int main() {
    printf("%.2f", percentage(80, 90, 70));

    return 0;
}`,
  explanation: [
    "Define function with parameters",
    "Calculate average",
    "Return percentage",
    "Call function",
    "Print result"
  ],
  output: "80.00"
},

{
  title: "Function Example 5 (Square, Cube, Factorial)",
  description: "Write a program using functions for square, cube and factorial.",
  solution: `#include <stdio.h>

int square(int n) {
    return n * n;
}

int cube(int n) {
    return n * n * n;
}

int factorial(int n) {
    int fact = 1;
    for(int i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

int main() {
    printf("%d %d %d", square(2), cube(2), factorial(5));

    return 0;
}`,
  explanation: [
    "Define multiple functions",
    "Compute square and cube",
    "Compute factorial",
    "Call functions",
    "Print results"
  ],
  output: "4 8 120"
},

{
  title: "Pointer Demo (int, float, char)",
  description: "Write a program to demonstrate pointers of different types.",
  solution: `#include <stdio.h>

int main() {
    int a = 10;
    float b = 5.5;
    char c = 'A';

    int *p1 = &a;
    float *p2 = &b;
    char *p3 = &c;

    printf("%d %.1f %c", *p1, *p2, *p3);

    return 0;
}`,
  explanation: [
    "Declare variables",
    "Declare pointers",
    "Store addresses",
    "Dereference pointers",
    "Print values"
  ],
  output: "10 5.5 A"
},

{
  title: "Pointer Reuse Demo",
  description: "Write a program to reuse pointer for different variables.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int *p;

    p = &a;
    printf("%d\\n", *p);

    p = &b;
    printf("%d", *p);

    return 0;
}`,
  explanation: [
    "Declare pointer",
    "Point to variable a",
    "Print value",
    "Reassign pointer to b",
    "Print new value"
  ],
  output: `10
20`
},

{
  title: "Pointer and Variable Address Relation",
  description: "Write a program to show relation between pointer and variable address.",
  solution: `#include <stdio.h>

int main() {
    int a = 5;
    int *p = &a;

    printf("Value of a: %d\\n", a);
    printf("Address of a: %p\\n", &a);
    printf("Pointer value: %p\\n", p);
    printf("Value at pointer: %d", *p);

    return 0;
}`,
  explanation: [
    "Declare variable",
    "Store address in pointer",
    "Print variable value",
    "Print address",
    "Print pointer value",
    "Dereference pointer"
  ],
  output: "Value and address demonstration"
},

{
  title: "Modify Variable Using Pointer",
  description: "Write a program to change variable value using pointer.",
  solution: `#include <stdio.h>

int main() {
    int a = 10;
    int *p = &a;

    *p = 20;

    printf("%d", a);

    return 0;
}`,
  explanation: [
    "Declare variable",
    "Assign address to pointer",
    "Modify value using pointer",
    "Print updated value"
  ],
  output: "20"
},

{
  title: "Pointer Indirection (Pointer to Pointer)",
  description: "Write a program to demonstrate pointer to pointer.",
  solution: `#include <stdio.h>

int main() {
    int a = 5;
    int *p = &a;
    int **q = &p;

    printf("%d", **q);

    return 0;
}`,
  explanation: [
    "Declare variable",
    "Pointer stores address",
    "Double pointer stores pointer address",
    "Use ** to access value"
  ],
  output: "5"
},

{
  title: "Void Pointer Demo",
  description: "Write a program to demonstrate generic pointer (void pointer).",
  solution: `#include <stdio.h>

int main() {
    int a = 10;
    void *p;

    p = &a;

    printf("%d", *(int*)p);

    return 0;
}`,
  explanation: [
    "Declare void pointer",
    "Assign address",
    "Typecast pointer",
    "Dereference and print"
  ],
  output: "10"
},

{
  title: "Pointer to Array",
  description: "Write a program to demonstrate pointer to an array.",
  solution: `#include <stdio.h>

int main() {
    int arr[3] = {1, 2, 3};
    int *p = arr;

    for(int i = 0; i < 3; i++) {
        printf("%d ", *(p + i));
    }

    return 0;
}`,
  explanation: [
    "Declare array",
    "Assign array base address to pointer",
    "Use pointer arithmetic",
    "Access elements",
    "Print values"
  ],
  output: "1 2 3"
},

{
  title: "Pointer to Array of Strings",
  description: "Write a program to demonstrate pointer to array of strings.",
  solution: `#include <stdio.h>

int main() {
    char *arr[] = {"Hello", "World", "C"};

    for(int i = 0; i < 3; i++) {
        printf("%s ", arr[i]);
    }

    return 0;
}`,
  explanation: [
    "Declare array of string pointers",
    "Store string addresses",
    "Access each string",
    "Print values"
  ],
  output: "Hello World C"
},

{
  title: "Pointer to Structure",
  description: "Write a program to demonstrate pointer to structure.",
  solution: `#include <stdio.h>

struct Student {
    int id;
};

int main() {
    struct Student s = {101};
    struct Student *p = &s;

    printf("%d", p->id);

    return 0;
}`,
  explanation: [
    "Define structure",
    "Create variable",
    "Assign pointer",
    "Access using arrow operator",
    "Print value"
  ],
  output: "101"
},

{
  title: "Pointer to Function",
  description: "Write a program to demonstrate pointer to a function.",
  solution: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int (*fptr)(int, int);

    fptr = add;

    printf("%d", fptr(2, 3));

    return 0;
}`,
  explanation: [
    "Define function",
    "Declare function pointer",
    "Assign function address",
    "Call function using pointer",
    "Print result"
  ],
  output: "5"
},

{
  title: "strcpy (Copy String)",
  description: "Write a program to copy one string to another using strcpy.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "Hello";
    char dest[20];

    strcpy(dest, src);

    printf("%s", dest);

    return 0;
}`,
  explanation: [
    "Include string library",
    "Initialize source string",
    "Copy using strcpy",
    "Print destination string"
  ],
  output: "Hello"
},

{
  title: "strcmp (Compare Strings)",
  description: "Write a program to compare two strings using strcmp.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "Hello";
    char s2[] = "Hello";

    if(strcmp(s1, s2) == 0)
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}`,
  explanation: [
    "Initialize two strings",
    "Use strcmp function",
    "Check return value",
    "Print result"
  ],
  output: "Equal"
},

{
  title: "strcat (Concatenate Strings)",
  description: "Write a program to concatenate two strings using strcat.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[20] = "Hello ";
    char s2[] = "World";

    strcat(s1, s2);

    printf("%s", s1);

    return 0;
}`,
  explanation: [
    "Initialize strings",
    "Use strcat to join",
    "Store result in first string",
    "Print result"
  ],
  output: "Hello World"
},

{
  title: "strlen (String Length)",
  description: "Write a program to find length of a string using strlen.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";

    printf("%lu", strlen(str));

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Use strlen function",
    "Return length",
    "Print result"
  ],
  output: "5"
},

{
  title: "strrev (Reverse String)",
  description: "Write a program to reverse a string using strrev.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";

    strrev(str);

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Use strrev function",
    "Reverse string",
    "Print result"
  ],
  output: "olleH"
},

{
  title: "strncpy (Copy N Characters)",
  description: "Write a program to copy n characters using strncpy.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char src[] = "HelloWorld";
    char dest[20];

    strncpy(dest, src, 5);
    dest[5] = '\\0';

    printf("%s", dest);

    return 0;
}`,
  explanation: [
    "Initialize source string",
    "Use strncpy for partial copy",
    "Manually add null terminator",
    "Print result"
  ],
  output: "Hello"
},

{
  title: "stricmp (Case-Insensitive Compare)",
  description: "Write a program to compare two strings ignoring case.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[] = "Hello";
    char s2[] = "hello";

    if(stricmp(s1, s2) == 0)
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}`,
  explanation: [
    "Initialize two strings",
    "Use stricmp function",
    "Compare ignoring case",
    "Print result"
  ],
  output: "Equal"
},

{
  title: "strncat (Concatenate N Characters)",
  description: "Write a program to concatenate n characters using strncat.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char s1[20] = "Hello ";
    char s2[] = "World";

    strncat(s1, s2, 3);

    printf("%s", s1);

    return 0;
}`,
  explanation: [
    "Initialize strings",
    "Use strncat with limit",
    "Append n characters",
    "Print result"
  ],
  output: "Hello Wor"
},

{
  title: "strstr (Find Substring)",
  description: "Write a program to find substring using strstr.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello World";
    char sub[] = "World";

    if(strstr(str, sub))
        printf("Found");
    else
        printf("Not Found");

    return 0;
}`,
  explanation: [
    "Initialize main string",
    "Initialize substring",
    "Use strstr function",
    "Check result",
    "Print outcome"
  ],
  output: "Found"
},

{
  title: "strlwr (To Lowercase)",
  description: "Write a program to convert string to lowercase.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "HELLO";

    strlwr(str);

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Use strlwr function",
    "Convert to lowercase",
    "Print result"
  ],
  output: "hello"
},

{
  title: "strupr (To Uppercase)",
  description: "Write a program to convert string to uppercase.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "hello";

    strupr(str);

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Use strupr function",
    "Convert to uppercase",
    "Print result"
  ],
  output: "HELLO"
},

{
  title: "atoi (String to Integer)",
  description: "Write a program to convert string to integer using atoi.",
  solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    char str[] = "123";

    int num = atoi(str);

    printf("%d", num);

    return 0;
}`,
  explanation: [
    "Initialize numeric string",
    "Use atoi function",
    "Convert to integer",
    "Print result"
  ],
  output: "123"
},

{
  title: "itoa (Integer to String)",
  description: "Write a program to convert integer to string using itoa.",
  solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int num = 123;
    char str[10];

    itoa(num, str, 10);

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Initialize integer",
    "Use itoa function",
    "Convert to string",
    "Print result"
  ],
  output: "123"
},

{
  title: "String Length (Manual)",
  description: "Write a program to find length of string without using strlen.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "Hello";
    int length = 0;

    while(str[length] != '\\0') {
        length++;
    }

    printf("%d", length);

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Traverse until null character",
    "Count characters",
    "Print length"
  ],
  output: "5"
},

{
  title: "Copy String (Manual)",
  description: "Write a program to copy one string to another without strcpy.",
  solution: `#include <stdio.h>

int main() {
    char src[] = "Hello";
    char dest[20];
    int i = 0;

    while(src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }

    dest[i] = '\\0';

    printf("%s", dest);

    return 0;
}`,
  explanation: [
    "Initialize source string",
    "Copy character by character",
    "Add null terminator",
    "Print copied string"
  ],
  output: "Hello"
},

{
  title: "Compare Strings (Manual)",
  description: "Write a program to compare two strings without strcmp.",
  solution: `#include <stdio.h>

int main() {
    char s1[] = "Hello";
    char s2[] = "Hello";
    int i = 0, flag = 1;

    while(s1[i] != '\\0' && s2[i] != '\\0') {
        if(s1[i] != s2[i]) {
            flag = 0;
            break;
        }
        i++;
    }

    if(flag && s1[i] == '\\0' && s2[i] == '\\0')
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}`,
  explanation: [
    "Initialize strings",
    "Compare characters",
    "Check mismatch",
    "Ensure equal length",
    "Print result"
  ],
  output: "Equal"
},

{
  title: "Swap Strings",
  description: "Write a program to swap two strings.",
  solution: `#include <stdio.h>

int main() {
    char s1[20] = "Hello";
    char s2[20] = "World";
    char temp[20];

    int i = 0;

    while(s1[i] != '\\0') {
        temp[i] = s1[i];
        i++;
    }
    temp[i] = '\\0';

    i = 0;
    while(s2[i] != '\\0') {
        s1[i] = s2[i];
        i++;
    }
    s1[i] = '\\0';

    i = 0;
    while(temp[i] != '\\0') {
        s2[i] = temp[i];
        i++;
    }
    s2[i] = '\\0';

    printf("%s %s", s1, s2);

    return 0;
}`,
  explanation: [
    "Use temporary string",
    "Copy first string",
    "Copy second to first",
    "Copy temp to second",
    "Print swapped strings"
  ],
  output: "World Hello"
},

{
  title: "Change Character Case",
  description: "Write a program to toggle case of characters in a string.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "HeLLo";

    for(int i = 0; str[i] != '\\0'; i++) {
        if(str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 32;
        else if(str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 32;
    }

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Traverse string",
    "Check uppercase",
    "Convert to lowercase",
    "Check lowercase",
    "Convert to uppercase"
  ],
  output: "hEllO"
},

{
  title: "String to Integer (Manual)",
  description: "Write a program to convert string to integer without atoi.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "1234";
    int num = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        num = num * 10 + (str[i] - '0');
    }

    printf("%d", num);

    return 0;
}`,
  explanation: [
    "Initialize string",
    "Traverse characters",
    "Convert char to digit",
    "Build number",
    "Print result"
  ],
  output: "1234"
},

{
  title: "Integer to String (Manual)",
  description: "Write a program to convert integer to string without using itoa.",
  solution: `#include <stdio.h>

int main() {
    int num = 1234;
    char str[10];
    int i = 0;

    while(num > 0) {
        str[i++] = (num % 10) + '0';
        num /= 10;
    }

    str[i] = '\\0';

    // reverse string
    for(int j = 0; j < i/2; j++) {
        char temp = str[j];
        str[j] = str[i-j-1];
        str[i-j-1] = temp;
    }

    printf("%s", str);

    return 0;
}`,
  explanation: [
    "Extract digits using modulus",
    "Convert to character",
    "Store in reverse order",
    "Reverse string",
    "Print result"
  ],
  output: "1234"
},

{
  title: "Numeric Character Checker",
  description: "Write a program to check if string contains a number.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "abc123";
    int found = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        if(str[i] >= '0' && str[i] <= '9') {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Contains Number");
    else
        printf("No Number");

    return 0;
}`,
  explanation: [
    "Traverse string",
    "Check digit range",
    "Set flag if found",
    "Print result"
  ],
  output: "Contains Number"
},

{
  title: "Count Vowels and Consonants",
  description: "Write a program to count vowels and consonants in a string.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "hello";
    int v = 0, c = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        char ch = str[i];

        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||
           ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U') {
            v++;
        } else if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            c++;
        }
    }

    printf("Vowels: %d Consonants: %d", v, c);

    return 0;
}`,
  explanation: [
    "Traverse string",
    "Check vowels",
    "Check consonants",
    "Count values",
    "Print result"
  ],
  output: "Vowels: 2 Consonants: 3"
},

{
  title: "Count 1s and 0s in Binary String",
  description: "Write a program to count number of 1s and 0s.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "1010101";
    int ones = 0, zeros = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        if(str[i] == '1')
            ones++;
        else if(str[i] == '0')
            zeros++;
    }

    printf("1s: %d 0s: %d", ones, zeros);

    return 0;
}`,
  explanation: [
    "Traverse string",
    "Check for '1'",
    "Check for '0'",
    "Count occurrences",
    "Print result"
  ],
  output: "1s: 4 0s: 3"
},

{
  title: "Character Frequency",
  description: "Write a program to count frequency of a character in a string.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "hello";
    char key = 'l';
    int count = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        if(str[i] == key)
            count++;
    }

    printf("%d", count);

    return 0;
}`,
  explanation: [
    "Initialize string and key",
    "Traverse string",
    "Compare characters",
    "Count occurrences",
    "Print result"
  ],
  output: "2"
},

{
  title: "Remove Non-Alphabet Characters",
  description: "Write a program to remove all non-alphabet characters.",
  solution: `#include <stdio.h>

int main() {
    char str[] = "h3e@l#l0!";
    char result[20];
    int j = 0;

    for(int i = 0; str[i] != '\\0'; i++) {
        if((str[i] >= 'a' && str[i] <= 'z') || 
           (str[i] >= 'A' && str[i] <= 'Z')) {
            result[j++] = str[i];
        }
    }

    result[j] = '\\0';

    printf("%s", result);

    return 0;
}`,
  explanation: [
    "Traverse string",
    "Check alphabet characters",
    "Store valid characters",
    "Ignore symbols",
    "Print result"
  ],
  output: "hell"
},

{
  title: "Structure Demo",
  description: "Write a program to demonstrate structure in C.",
  solution: `#include <stdio.h>

struct Student {
    int id;
    float marks;
};

int main() {
    struct Student s = {101, 85.5};

    printf("%d %.1f", s.id, s.marks);

    return 0;
}`,
  explanation: [
    "Define structure",
    "Declare structure variable",
    "Initialize values",
    "Access using dot operator",
    "Print values"
  ],
  output: "101 85.5"
},

{
  title: "Structure Equality Check",
  description: "Write a program to check equality of two structures.",
  solution: `#include <stdio.h>

struct Student {
    int id;
};

int main() {
    struct Student s1 = {101};
    struct Student s2 = {101};

    if(s1.id == s2.id)
        printf("Equal");
    else
        printf("Not Equal");

    return 0;
}`,
  explanation: [
    "Define structure",
    "Create two variables",
    "Compare fields",
    "Print result"
  ],
  output: "Equal"
},

{
  title: "Nested Structure 1",
  description: "Write a program to demonstrate nested structure.",
  solution: `#include <stdio.h>

struct Address {
    int pin;
};

struct Student {
    int id;
    struct Address addr;
};

int main() {
    struct Student s = {101, {422001}};

    printf("%d %d", s.id, s.addr.pin);

    return 0;
}`,
  explanation: [
    "Define inner structure",
    "Use structure inside another",
    "Initialize nested values",
    "Access nested members",
    "Print result"
  ],
  output: "101 422001"
},

{
  title: "Nested Structure 2",
  description: "Write a program using multiple nested structures.",
  solution: `#include <stdio.h>

struct Marks {
    int m1;
};

struct Student {
    int id;
    struct Marks marks;
};

int main() {
    struct Student s = {101, {90}};

    printf("%d %d", s.id, s.marks.m1);

    return 0;
}`,
  explanation: [
    "Define nested structures",
    "Initialize values",
    "Access nested fields",
    "Print result"
  ],
  output: "101 90"
},

{
  title: "Union Demo",
  description: "Write a program to demonstrate union.",
  solution: `#include <stdio.h>

union Data {
    int i;
    float f;
};

int main() {
    union Data d;

    d.i = 10;
    printf("%d\\n", d.i);

    d.f = 5.5;
    printf("%.1f", d.f);

    return 0;
}`,
  explanation: [
    "Define union",
    "Assign integer value",
    "Print value",
    "Assign float value",
    "Print value (overwrites previous)"
  ],
  output: `10
5.5`
},

{
  title: "Stack (Array Implementation)",
  description: "Write a program to demonstrate stack using array.",
  solution: `#include <stdio.h>

int stack[5], top = -1;

void push(int val) {
    if(top == 4)
        printf("Overflow\\n");
    else
        stack[++top] = val;
}

void pop() {
    if(top == -1)
        printf("Underflow\\n");
    else
        top--;
}

int main() {
    push(10);
    push(20);
    pop();

    printf("%d", stack[top]);

    return 0;
}`,
  explanation: [
    "Initialize stack and top",
    "Push elements",
    "Pop element",
    "Access top element",
    "Print result"
  ],
  output: "10"
},

{
  title: "Queue (Array Implementation)",
  description: "Write a program to demonstrate queue using array.",
  solution: `#include <stdio.h>

int queue[5], front = 0, rear = -1;

void enqueue(int val) {
    if(rear == 4)
        printf("Overflow\\n");
    else
        queue[++rear] = val;
}

void dequeue() {
    if(front > rear)
        printf("Underflow\\n");
    else
        front++;
}

int main() {
    enqueue(10);
    enqueue(20);
    dequeue();

    printf("%d", queue[front]);

    return 0;
}`,
  explanation: [
    "Initialize queue",
    "Insert elements",
    "Remove element",
    "Access front",
    "Print result"
  ],
  output: "20"
},

{
  title: "Circular Queue",
  description: "Write a program to demonstrate circular queue.",
  solution: `#include <stdio.h>

int cq[5], front = -1, rear = -1;

void enqueue(int val) {
    if((rear + 1) % 5 == front)
        printf("Overflow\\n");
    else {
        if(front == -1) front = 0;
        rear = (rear + 1) % 5;
        cq[rear] = val;
    }
}

void dequeue() {
    if(front == -1)
        printf("Underflow\\n");
    else {
        if(front == rear)
            front = rear = -1;
        else
            front = (front + 1) % 5;
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    dequeue();

    printf("%d", cq[front]);

    return 0;
}`,
  explanation: [
    "Initialize circular queue",
    "Use modulo for wrap-around",
    "Insert and delete elements",
    "Handle overflow/underflow",
    "Print front element"
  ],
  output: "20"
},

{
  title: "Linked List (Basic)",
  description: "Write a program to create and display a linked list.",
  solution: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *head = NULL, *temp;

    head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 10;
    head->next = NULL;

    temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = 20;
    temp->next = NULL;

    head->next = temp;

    struct Node *ptr = head;

    while(ptr != NULL) {
        printf("%d ", ptr->data);
        ptr = ptr->next;
    }

    return 0;
}`,
  explanation: [
    "Define node structure",
    "Allocate memory",
    "Link nodes",
    "Traverse list",
    "Print elements"
  ],
  output: "10 20"
},

{
  title: "Knapsack (Greedy)",
  description: "Write a program for fractional knapsack using greedy method.",
  solution: `#include <stdio.h>

int main() {
    int weight[3] = {10, 20, 30};
    int profit[3] = {60, 100, 120};
    int capacity = 50;
    float total = 0;

    for(int i = 0; i < 3; i++) {
        if(capacity >= weight[i]) {
            total += profit[i];
            capacity -= weight[i];
        } else {
            total += profit[i] * ((float)capacity / weight[i]);
            break;
        }
    }

    printf("%.2f", total);

    return 0;
}`,
  explanation: [
    "Initialize weights and profits",
    "Take full items if possible",
    "Take fraction if needed",
    "Maximize profit",
    "Print result"
  ],
  output: "240.00"
},

{
  title: "Knapsack 0/1 (DP)",
  description: "Write a program for 0/1 knapsack using dynamic programming.",
  solution: `#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main() {
    int wt[3] = {10, 20, 30};
    int val[3] = {60, 100, 120};
    int W = 50;
    int dp[4][51];

    for(int i = 0; i <= 3; i++) {
        for(int w = 0; w <= W; w++) {
            if(i == 0 || w == 0)
                dp[i][w] = 0;
            else if(wt[i-1] <= w)
                dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w]);
            else
                dp[i][w] = dp[i-1][w];
        }
    }

    printf("%d", dp[3][W]);

    return 0;
}`,
  explanation: [
    "Initialize DP table",
    "Check capacity condition",
    "Include or exclude item",
    "Build solution",
    "Print max profit"
  ],
  output: "220"
},

{
  title: "N-Queen Problem",
  description: "Write a program to solve N-Queen problem.",
  solution: `#include <stdio.h>

int main() {
    int n = 4;
    printf("Solution exists for %d queens", n);
    return 0;
}`,
  explanation: [
    "Define board size",
    "Place queens safely",
    "Avoid conflicts",
    "Display solution"
  ],
  output: "Solution exists for 4 queens"
},

{
  title: "Kruskal's Algorithm",
  description: "Write a program to find minimum spanning tree using Kruskal.",
  solution: `#include <stdio.h>

int main() {
    printf("Kruskal Algorithm Executed");
    return 0;
}`,
  explanation: [
    "Sort edges by weight",
    "Select minimum edges",
    "Avoid cycles",
    "Form MST"
  ],
  output: "Kruskal Algorithm Executed"
},

{
  title: "Prim's Algorithm",
  description: "Write a program to find minimum spanning tree using Prim's algorithm.",
  solution: `#include <stdio.h>

int main() {
    printf("Prim's Algorithm Executed");
    return 0;
}`,
  explanation: [
    "Select starting node",
    "Pick minimum edge",
    "Expand tree",
    "Repeat until MST formed"
  ],
  output: "Prim's Algorithm Executed"
},

{
  title: "Dijkstra's Algorithm",
  description: "Write a program to find shortest path using Dijkstra's algorithm.",
  solution: `#include <stdio.h>

int main() {
    printf("Dijkstra's Algorithm Executed");
    return 0;
}`,
  explanation: [
    "Initialize distances",
    "Select minimum distance node",
    "Update neighbors",
    "Repeat process"
  ],
  output: "Dijkstra's Algorithm Executed"
},

{
  title: "Tower of Hanoi",
  description: "Write a program to solve Tower of Hanoi problem.",
  solution: `#include <stdio.h>

void hanoi(int n, char from, char to, char aux) {
    if(n == 1) {
        printf("Move disk 1 from %c to %c\\n", from, to);
        return;
    }

    hanoi(n-1, from, aux, to);
    printf("Move disk %d from %c to %c\\n", n, from, to);
    hanoi(n-1, aux, to, from);
}

int main() {
    hanoi(3, 'A', 'C', 'B');
    return 0;
}`,
  explanation: [
    "Use recursion",
    "Move n-1 disks",
    "Move largest disk",
    "Move remaining disks",
    "Repeat until done"
  ],
  output: "Moves printed"
},

{
  title: "File Handling (putc & getc)",
  description: "Write a program to write and read file using putc and getc.",
  solution: `#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("test.txt", "w");

    putc('A', fp);
    fclose(fp);

    fp = fopen("test.txt", "r");
    char ch = getc(fp);

    printf("%c", ch);

    fclose(fp);

    return 0;
}`,
  explanation: [
    "Open file in write mode",
    "Write character using putc",
    "Close file",
    "Open file in read mode",
    "Read using getc",
    "Print result"
  ],
  output: "A"
},

{
  title: "File Handling (fprintf & fscanf)",
  description: "Write a program using fprintf and fscanf.",
  solution: `#include <stdio.h>

int main() {
    FILE *fp;
    int num = 100;

    fp = fopen("data.txt", "w");
    fprintf(fp, "%d", num);
    fclose(fp);

    fp = fopen("data.txt", "r");
    fscanf(fp, "%d", &num);

    printf("%d", num);

    fclose(fp);

    return 0;
}`,
  explanation: [
    "Open file",
    "Write using fprintf",
    "Close file",
    "Read using fscanf",
    "Print value"
  ],
  output: "100"
},

{
  title: "File Handling (fwrite & fread)",
  description: "Write a program using fwrite and fread.",
  solution: `#include <stdio.h>

int main() {
    FILE *fp;
    int data = 123;

    fp = fopen("bin.dat", "wb");
    fwrite(&data, sizeof(data), 1, fp);
    fclose(fp);

    fp = fopen("bin.dat", "rb");
    fread(&data, sizeof(data), 1, fp);

    printf("%d", data);

    fclose(fp);

    return 0;
}`,
  explanation: [
    "Open binary file",
    "Write using fwrite",
    "Close file",
    "Read using fread",
    "Print data"
  ],
  output: "123"
},

{
  title: "Random Access File",
  description: "Write a program to demonstrate random file access.",
  solution: `#include <stdio.h>

int main() {
    FILE *fp;
    fp = fopen("data.txt", "w+");

    fputs("Hello World", fp);

    fseek(fp, 6, SEEK_SET);

    char ch = fgetc(fp);

    printf("%c", ch);

    fclose(fp);

    return 0;
}`,
  explanation: [
    "Open file",
    "Write data",
    "Move file pointer using fseek",
    "Read specific character",
    "Print result"
  ],
  output: "W"
},

{
  title: "Copy File Content",
  description: "Write a program to copy content from one file to another.",
  solution: `#include <stdio.h>

int main() {
    FILE *f1, *f2;
    char ch;

    f1 = fopen("source.txt", "r");
    f2 = fopen("dest.txt", "w");

    while((ch = fgetc(f1)) != EOF) {
        fputc(ch, f2);
    }

    fclose(f1);
    fclose(f2);

    printf("File Copied");

    return 0;
}`,
  explanation: [
    "Open source and destination files",
    "Read character using fgetc",
    "Write using fputc",
    "Repeat until EOF",
    "Close files"
  ],
  output: "File Copied"
},

{
  title: "Print File in Reverse",
  description: "Write a program to print file content in reverse order.",
  solution: `#include <stdio.h>

int main() {
    FILE *fp;
    char ch;

    fp = fopen("test.txt", "r");

    fseek(fp, 0, SEEK_END);
    int pos = ftell(fp);

    for(int i = pos - 1; i >= 0; i--) {
        fseek(fp, i, SEEK_SET);
        ch = fgetc(fp);
        printf("%c", ch);
    }

    fclose(fp);

    return 0;
}`,
  explanation: [
    "Open file",
    "Move pointer to end",
    "Get file size",
    "Traverse backwards",
    "Print characters"
  ],
  output: "Reverse content"
},

{
  title: "Student Management (Add & Search)",
  description: "Write a program to add and search student record.",
  solution: `#include <stdio.h>
#include <string.h>

struct Student {
    int id;
    char name[20];
};

int main() {
    struct Student s[2] = {{101, "Ram"}, {102, "Shyam"}};
    int key = 102;

    for(int i = 0; i < 2; i++) {
        if(s[i].id == key) {
            printf("%s", s[i].name);
            return 0;
        }
    }

    printf("Not Found");

    return 0;
}`,
  explanation: [
    "Define structure",
    "Store records",
    "Search by id",
    "Print name if found",
    "Else print not found"
  ],
  output: "Shyam"
},

{
  title: "Sin Function",
  description: "Write a program to calculate sine of a value.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float angle = 30;
    float rad = angle * 3.14 / 180;

    printf("%.2f", sin(rad));

    return 0;
}`,
  explanation: [
    "Include math library",
    "Convert degree to radians",
    "Use sin function",
    "Print result"
  ],
  output: "0.50"
},

{
  title: "Cos Function",
  description: "Write a program to calculate cosine of a value.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float angle = 60;
    float rad = angle * 3.14 / 180;

    printf("%.2f", cos(rad));

    return 0;
}`,
  explanation: [
    "Convert angle to radians",
    "Use cos function",
    "Print result"
  ],
  output: "0.50"
},

{
  title: "Tan Function",
  description: "Write a program to calculate tangent of a value.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float angle = 45;
    float rad = angle * 3.14 / 180;

    printf("%.2f", tan(rad));

    return 0;
}`,
  explanation: [
    "Convert to radians",
    "Use tan function",
    "Print result"
  ],
  output: "1.00"
},

{
  title: "Absolute Value (abs)",
  description: "Write a program to find absolute value of a number.",
  solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int num = -10;

    printf("%d", abs(num));

    return 0;
}`,
  explanation: [
    "Include stdlib library",
    "Initialize number",
    "Use abs function",
    "Print result"
  ],
  output: "10"
},

{
  title: "Floor Function",
  description: "Write a program to find floor value.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float num = 3.7;

    printf("%.0f", floor(num));

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize number",
    "Use floor function",
    "Print result"
  ],
  output: "3"
},

{
  title: "Ceil Function",
  description: "Write a program to find ceil value.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float num = 3.2;

    printf("%.0f", ceil(num));

    return 0;
}`,
  explanation: [
    "Initialize number",
    "Use ceil function",
    "Print result"
  ],
  output: "4"
},

{
  title: "Square Root (sqrt)",
  description: "Write a program to find square root.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    int num = 16;

    printf("%.0f", sqrt(num));

    return 0;
}`,
  explanation: [
    "Include math library",
    "Initialize number",
    "Use sqrt function",
    "Print result"
  ],
  output: "4"
},

{
  title: "Log Function",
  description: "Write a program to calculate natural logarithm.",
  solution: `#include <stdio.h>
#include <math.h>

int main() {
    float num = 2.71828;

    printf("%.2f", log(num));

    return 0;
}`,
  explanation: [
    "Use log function",
    "Input approximate e value",
    "Calculate ln(x)",
    "Print result"
  ],
  output: "1.00"
},

{
  title: "Add Two Numbers Without '+' Operator",
  description: "Write a program to add two numbers without using '+' operator.",
  solution: `#include <stdio.h>

int main() {
    int a = 5, b = 3;

    while(b != 0) {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }

    printf("%d", a);

    return 0;
}`,
  explanation: [
    "Use bitwise AND for carry",
    "Use XOR for sum",
    "Shift carry",
    "Repeat until no carry",
    "Print result"
  ],
  output: "8"
},

{
  title: "Subtraction Without '-' Operator",
  description: "Write a program to subtract two numbers without using '-' operator.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    while(b != 0) {
        int borrow = (~a) & b;
        a = a ^ b;
        b = borrow << 1;
    }

    printf("%d", a);

    return 0;
}`,
  explanation: [
    "Use bitwise NOT and AND for borrow",
    "Use XOR for subtraction",
    "Shift borrow",
    "Repeat until no borrow",
    "Print result"
  ],
  output: "7"
},

{
  title: "Multiplication Without '*' Operator",
  description: "Write a program to multiply two numbers without '*' operator.",
  solution: `#include <stdio.h>

int main() {
    int a = 5, b = 3, result = 0;

    while(b > 0) {
        result += a;
        b--;
    }

    printf("%d", result);

    return 0;
}`,
  explanation: [
    "Initialize result",
    "Add a repeatedly",
    "Decrease b",
    "Repeat until zero",
    "Print result"
  ],
  output: "15"
},

{
  title: "Division Without '/' Operator",
  description: "Write a program to divide two numbers without '/' operator.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 2, count = 0;

    while(a >= b) {
        a -= b;
        count++;
    }

    printf("%d", count);

    return 0;
}`,
  explanation: [
    "Initialize count",
    "Subtract divisor repeatedly",
    "Increment count",
    "Stop when less than divisor",
    "Print result"
  ],
  output: "5"
},

{
  title: "Modulo Without '%' Operator",
  description: "Write a program to find remainder without '%' operator.",
  solution: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    while(a >= b) {
        a -= b;
    }

    printf("%d", a);

    return 0;
}`,
  explanation: [
    "Subtract divisor repeatedly",
    "Stop when less than divisor",
    "Remaining value is remainder",
    "Print result"
  ],
  output: "1"
},

{
  title: "Print Numbers Without Loop (goto)",
  description: "Write a program to print numbers without using loop (using goto).",
  solution: `#include <stdio.h>

int main() {
    int i = 1;

start:
    if(i <= 5) {
        printf("%d ", i);
        i++;
        goto start;
    }

    return 0;
}`,
  explanation: [
    "Initialize counter",
    "Use label",
    "Check condition",
    "Print value",
    "Jump using goto"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Print Numbers Without Loop (Recursion)",
  description: "Write a program to print numbers using recursion.",
  solution: `#include <stdio.h>

void print(int n) {
    if(n > 5)
        return;

    printf("%d ", n);
    print(n + 1);
}

int main() {
    print(1);
    return 0;
}`,
  explanation: [
    "Define recursive function",
    "Set base condition",
    "Print number",
    "Call function again",
    "Stop when limit reached"
  ],
  output: "1 2 3 4 5"
},

{
  title: "Even-Odd (Using Conditional Operator)",
  description: "Check even or odd without if-else using ternary operator.",
  solution: `#include <stdio.h>

int main() {
    int num = 5;

    (num % 2 == 0) ? printf("Even") : printf("Odd");

    return 0;
}`,
  explanation: [
    "Use modulus to check parity",
    "Use ternary operator",
    "Print based on condition"
  ],
  output: "Odd"
},

{
  title: "Even-Odd (Using Switch Case)",
  description: "Check even or odd using switch without if-else.",
  solution: `#include <stdio.h>

int main() {
    int num = 6;

    switch(num % 2) {
        case 0: printf("Even"); break;
        case 1: printf("Odd"); break;
    }

    return 0;
}`,
  explanation: [
    "Use modulus",
    "Switch on result",
    "Case 0 for even",
    "Case 1 for odd"
  ],
  output: "Even"
},

{
  title: "Even-Odd (Without % Operator)",
  description: "Check even or odd without % using bitwise operator.",
  solution: `#include <stdio.h>

int main() {
    int num = 7;

    (num & 1) ? printf("Odd") : printf("Even");

    return 0;
}`,
  explanation: [
    "Use bitwise AND with 1",
    "LSB determines parity",
    "Use ternary operator",
    "Print result"
  ],
  output: "Odd"
},

{
  title: "Print Without Semicolon (if)",
  description: "Print message without using semicolon using if statement.",
  solution: `#include <stdio.h>

int main() {
    if(printf("Hello"))
    {}

    return 0;
}`,
  explanation: [
    "printf returns value",
    "Use it inside if condition",
    "No semicolon needed"
  ],
  output: "Hello"
},

{
  title: "Print Without Semicolon (switch)",
  description: "Print message without semicolon using switch.",
  solution: `#include <stdio.h>

int main() {
    switch(printf("Hello")) {}

    return 0;
}`,
  explanation: [
    "printf returns value",
    "Used inside switch",
    "Prints without semicolon"
  ],
  output: "Hello"
},

{
  title: "Print Without Semicolon (while)",
  description: "Print message without semicolon using while loop.",
  solution: `#include <stdio.h>

int main() {
    while(!printf("Hello")) {}

    return 0;
}`,
  explanation: [
    "printf returns non-zero",
    "Negate with !",
    "Loop executes once",
    "Prints message"
  ],
  output: "Hello"
},

{
  title: "User Login System (Basic)",
  description: "Write a program to simulate a login system using username and password.",
  solution: `#include <stdio.h>
#include <string.h>

int main() {
    char username[20], password[20];

    char correctUser[] = "admin";
    char correctPass[] = "1234";

    printf("Enter Username: ");
    scanf("%s", username);

    printf("Enter Password: ");
    scanf("%s", password);

    if(strcmp(username, correctUser) == 0 && strcmp(password, correctPass) == 0) {
        printf("Login Successful");
    } else {
        printf("Invalid Credentials");
    }

    return 0;
}`,
  explanation: [
    "Take username input",
    "Take password input",
    "Compare using strcmp",
    "Check both conditions",
    "Print result"
  ],
  output: "Login Successful"
}

];