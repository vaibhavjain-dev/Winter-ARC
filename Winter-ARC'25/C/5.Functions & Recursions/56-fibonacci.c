// -------------------------------------------------------------
// 💠 Program Title: Fibonacci Series using Recursion
// 💻 Description: Demonstrates recursion in C by calculating and
//                 displaying the Fibonacci series up to a given position.
// -------------------------------------------------------------

#include <stdio.h>

// Recursive function to find Fibonacci number at a given position
int fibonacci(int position)
{
    if (position == 0)
        return 0;
    else if (position == 1)
        return 1;
    else
        return fibonacci(position - 1) + fibonacci(position - 2);
}

int main()
{
    int num;

    printf("--- Fibonacci Series using Recursion ---\n");
    printf("Enter the number of terms: ");
    scanf("%d", &num);

    printf("\nFibonacci series up to %d terms:\n", num);

    for (int i = 0; i < num; i++)
    {
        printf("%d ", fibonacci(i));
    }

    printf("\n");

    return 0;
}
