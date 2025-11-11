// -------------------------------------------------------------
// 💠 Program Title: Function to Calculate Square of a Number
// 💻 Description: Demonstrates a simple user-defined function in C
//                 that takes an integer as input and returns its square.
// -------------------------------------------------------------

#include <stdio.h>

// Function declaration
int SquareOfNum(int num);

// Function definition
int SquareOfNum(int num)
{
    int square = num * num;
    return square;
}

int main()
{
    int num, square;

    printf("--- Square Calculation using Function ---\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    square = SquareOfNum(num);
    printf("The square of %d is %d\n", num, square);

    return 0;
}
