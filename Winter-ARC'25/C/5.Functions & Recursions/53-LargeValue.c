// -------------------------------------------------------------
// 💠 Program Title: Function to Find the Greater of Two Numbers
// 💻 Description: Compares two floating-point numbers using a
//                 user-defined function and displays the greater one.
// -------------------------------------------------------------

#include <stdio.h>

// Function definition
void Max(float num1, float num2)
{
    if (num1 > num2)
    {
        printf("Num1 (%.2f) is greater than Num2 (%.2f)\n", num1, num2);
    }
    else if (num2 > num1)
    {
        printf("Num2 (%.2f) is greater than Num1 (%.2f)\n", num2, num1);
    }
    else
    {
        printf("Both numbers are equal: %.2f\n", num1);
    }
}

int main()
{
    printf("--- Compare Two Numbers using a Function ---\n");
    Max(2.0, 5.0);

    return 0;
}
