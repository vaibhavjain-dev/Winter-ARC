// -------------------------------------------------------------
// 💠 Program Title: Function with Parameters and Return Value
// 💻 Description: Accepts four integers as parameters and returns
//                 their sum using a user-defined function in C.
// -------------------------------------------------------------

#include <stdio.h>

// Function declaration
int sumOfNums(int a, int b, int c, int d);

// Function definition
int sumOfNums(int a, int b, int c, int d)
{
    int sum = a + b + c + d;
    return sum;
}

int main()
{
    int num1, num2, num3, num4;

    printf("--- Function that takes 4 parameters and returns their sum ---\n");
    printf("Enter 4 numbers: ");
    scanf("%d %d %d %d", &num1, &num2, &num3, &num4);

    int sum = sumOfNums(num1, num2, num3, num4);
    printf("The sum is: %d\n", sum);

    return 0;
}
