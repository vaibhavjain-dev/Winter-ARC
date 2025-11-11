#include <stdio.h>

// Recursive function to find Fibonacci of a position
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
    printf("Enter a number: ");
    scanf("%d", &num);

    printf("Fibonacci series up to position %d: ", num);

    for (int i = 0; i < num; i++)
    {
        printf("%d ", fibonacci(i));
    }

    printf("\n");
    return 0;
}
