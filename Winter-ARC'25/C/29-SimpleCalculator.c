// Simple Calculator Program

#include <stdio.h>

int main()
{
    int num1, num2, choice;

    printf("-- Simple Calculator --\n\n");

    printf("Select an operation:\n");
    printf("  [1] Addition\n");
    printf("  [2] Subtraction\n");
    printf("  [3] Multiplication\n");
    printf("  [4] Division\n");

    printf("\nEnter your choice (1-4): ");
    scanf("%d", &choice);

    if (choice < 1 || choice > 4)
    {
        printf("Invalid choice! Please restart the program.\n");
        return 0;
    }

    printf("\nEnter two numbers separated by a space: ");
    scanf("%d %d", &num1, &num2);

    switch (choice)
    {
    case 1:
        printf("\nResult: %d + %d = %d\n", num1, num2, num1 + num2);
        break;

    case 2:
        printf("\nResult: %d - %d = %d\n", num1, num2, num1 - num2);
        break;

    case 3:
        printf("\nResult: %d * %d = %d\n", num1, num2, num1 * num2);
        break;

    case 4:
        if (num2 == 0)
            printf("\nError: Division by zero is not allowed.\n");
        else
            printf("\nResult: %d / %d = %.2f\n", num1, num2, (float)num1 / num2);
        break;
    }

    printf("\nThank you for using the calculator!\n");

    return 0;
}
